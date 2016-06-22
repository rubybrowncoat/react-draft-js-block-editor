import React from 'react'
import {
  Editor,
  EditorState,
  SelectionState,
  ContentState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  CompositeDecorator,
  Entity,
  AtomicBlockUtils,
  DefaultDraftBlockRenderMap,
} from 'draft-js'
import { Map } from 'immutable'

import AddButton from './components/addbutton'
import Toolbar from './components/toolbar'

import rendererFn from './components/customrenderer'
import { getSelectionRect, getSelection } from './util'
import RenderMap from './model/rendermap'
import keyBindingFn from './util/keybinding'
import beforeInput, { StringToTypeMap } from './util/beforeinput'
import { getCurrentBlock, addNewBlock } from './model'
import Link, { findLinkEntities } from './components/entities/link'

const styleMap = {
  'HIGHLIGHT': {
    backgroundColor: 'yellow',
  },
  'CODE': {
    fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    margin: '4px 0',
    fontSize: '0.9em',
    padding: '1px 3px',
    color: '#555',
    backgroundColor: '#fcfcfc',
    border: '1px solid #ccc',
    borderBottomColor: '#bbb',
    borderRadius: 3,
    boxShadow: 'inset 0 -1px 0 #bbb',
  },
}

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'block block-quote RichEditor-blockquote'
    case 'unstyled': return 'block block-paragraph'
    case 'atomic': return 'block block-atomic'
    case 'caption': return 'block block-caption'
    case 'block-quote-caption': return 'block block-quote RichEditor-blockquote block-quote-caption'
    default: return 'block'
  }
}

class DraftBlockEditor extends React.Component {

  constructor(props) {
    super(props)

    const decorator = new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link,
      },
    ])
    this.state = {
      editorState: EditorState.createEmpty(decorator),
      showURLInput: false,
      editorEnabled: true,
      urlValue: '',
    }
    if (props.value) {
      this.state.editorState = EditorState.push(this.state.editorState, convertFromRaw(props.value))
    }
    this.focus = () => this.refs.editor.focus()
    this.onChange = (editorState) => {
      window.editorState = editorState
      this.setState({ editorState })
    }

    this.onClick = () => {
      if (!this.state.editorEnabled) {
        this.setState({
          editorEnabled: true,
        }, () => {
          this.focus()
        })
      }
    }

    this.logData = this.logData.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onTab = this.onTab.bind(this)
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this.handleBeforeInput = this.handleBeforeInput.bind(this)
    this.handleReturn = this.handleReturn.bind(this)
    this.loadSavedData = this.loadSavedData.bind(this)
    this.setLink = this.setLink.bind(this)
    this.addMedia = this.addMedia.bind(this)
  }

  componentDidMount() {
    this.focus()
  }

  onTab(e) {
    const { editorState } = this.state
    const newEditorState = RichUtils.onTab(e, editorState, 2)
    if (newEditorState !== editorState) {
      this.onChange(newEditorState)
    }
  }

  logData(e) {
    global.RAW = convertToRaw(this.state.editorState.getCurrentContent())
    global.SEL = this.state.editorState.getSelection()

    console.log('RAW', global.RAW)
    console.log('SEL', global.SEL.toJS())
  }

  setLink(url) {
    const { editorState } = this.state
    const selection = editorState.getSelection()
    let entityKey = null
    if (url !== '') {
      entityKey = Entity.create('LINK', 'MUTABLE', { url })
    }
    this.setState({
      editorState: RichUtils.toggleLink(
        editorState,
        selection,
        entityKey
      ),
    }, () => {
      setTimeout(() => this.refs.editor.focus(), 0)
    })
  }

  addMedia() {
    const src = window.prompt('Enter a URL')
    if (!src) {
      return
    }
    const entityKey = Entity.create('YOUTUBE', 'IMMUTABLE', { src })
    this.onChange(
      AtomicBlockUtils.insertAtomicBlock(
        this.state.editorState,
        entityKey,
        ' '
      )
    )
  }

  handleDroppedFiles(selection, files) {
    console.log(selection.toJS())
    console.log(files)
  }

  handleKeyCommand(command) {
    // console.log(command);
    if (command === 'editor-save') {
      window.localStorage['editor'] = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
      window.localStorage['tmp'] = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
      return true
    } else if (command === 'showlinkinput') {
      if (this.refs.toolbar) {
        this.refs.toolbar.showLinkInput(null, true)
      }
      return true
    } else if (command === 'add-new-block') {
      const { editorState } = this.state
      this.onChange(addNewBlock(editorState, 'blockquote'))
      return true
    } else if (command === 'load-saved-data') {
      this.loadSavedData()
      return true
    }
    const { editorState } = this.state
    const block = getCurrentBlock(editorState)
    if (command.indexOf('changetype:') == 0) {
      let newBlockType = command.split(':')[1]
      const currentBlockType = block.getType()
      if (currentBlockType == 'atomic' || currentBlockType == 'media') {
        return false
      }
      if (currentBlockType == 'blockquote' && newBlockType == 'caption') {
        newBlockType = 'block-quote-caption'
      } else if (currentBlockType == 'block-quote-caption' && newBlockType == 'caption') {
        newBlockType = 'blockquote'
      }
      this.onChange(RichUtils.toggleBlockType(editorState, newBlockType))
      return true
    }
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  handleBeforeInput(str) {
    return this.props.beforeInput(this.state.editorState, str, this.onChange, this.props.stringToTypeMap)
  }

  handleReturn(e) {
    if (e.shiftKey) {
      this.setState({
        editorState: RichUtils.insertSoftNewline(this.state.editorState),
      })
      return true
    }
    return false
  }

  toggleBlockType = (blockType) => {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    )
  }

  toggleInlineStyle = (inlineStyle) => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    )
  }

  toggleEdit = () => {
    this.setState({
      editorEnabled: !this.state.editorEnabled,
    })
  }

  loadSavedData() {
    const data = window.localStorage.getItem('editor')
    if (data === null) {
      console.log('No data found.')
      return
    }
    try {
      const blockData = JSON.parse(data)
      console.log(blockData)
      this.setState({
        editorState: EditorState.push(
          this.state.editorState,
          convertFromRaw(blockData)
        ),
      }, () => this.refs.editor.focus())
    } catch (e) {
      window.er = e
      console.log(e)
      console.log('Could not load data.')
    }
  }

  loadCustomData(data) {
    this.setState({
      editorState: EditorState.push(
        this.state.editorState,
        data
      ),
    }, () => this.refs.editor.focus())
  }

  render() {
    const { editorState, showURLInput, editorEnabled, urlValue } = this.state
    // console.log(this.props);

    global.editor = this

    return (
      <div className="RichEditor-root">
        <div className="RichEditor-editor">
          <Editor
            ref="editor"
            editorState={editorState}
            blockRendererFn={rendererFn}
            blockStyleFn={getBlockStyle}
            onChange={this.onChange}
            onTab={this.onTab}
            blockRenderMap={this.props.blockRenderMap}
            handleKeyCommand={this.handleKeyCommand}
            handleBeforeInput={this.handleBeforeInput}
            handleDroppedFiles={this.handleDroppedFiles}
            handleReturn={this.handleReturn}
            customStyleMap={styleMap}
            readOnly={!editorEnabled}
            keyBindingFn={keyBindingFn}
            placeholder="Write your story"
            spellCheck={false}
          />
          {editorEnabled ? <AddButton editorState={editorState} addMedia={this.addMedia} /> : null}
          <Toolbar
            ref="toolbar"
            editorState={editorState}
            toggleBlockType={this.toggleBlockType}
            toggleInlineStyle={this.toggleInlineStyle}
            editorEnabled={editorEnabled}
            setLink={this.setLink}
            focus={this.focus}
          />
        </div>
        {/*
          <div className="editor-action">
            <button onClick={this.logData}>Log State</button>
            <button onClick={this.toggleEdit}>Toggle Edit</button>
          </div>
        */}
      </div>
    )
  }
}

const renderMap = Map()

DraftBlockEditor.defaultProps = {
  beforeInput,
  stringToTypeMap: StringToTypeMap,
  blockRenderMap: RenderMap,
}


export default DraftBlockEditor
