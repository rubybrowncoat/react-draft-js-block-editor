// import 'draft-js/dist/Draft.css';
// import './index.scss';
// import './components/blocks/text.scss';

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _immutable = require('immutable');

var _componentsAddbutton = require('./components/addbutton');

var _componentsAddbutton2 = _interopRequireDefault(_componentsAddbutton);

var _componentsToolbar = require('./components/toolbar');

var _componentsToolbar2 = _interopRequireDefault(_componentsToolbar);

var _componentsCustomrenderer = require('./components/customrenderer');

var _componentsCustomrenderer2 = _interopRequireDefault(_componentsCustomrenderer);

var _util = require('./util');

var _modelRendermap = require('./model/rendermap');

var _modelRendermap2 = _interopRequireDefault(_modelRendermap);

var _utilKeybinding = require('./util/keybinding');

var _utilKeybinding2 = _interopRequireDefault(_utilKeybinding);

var _utilBeforeinput = require('./util/beforeinput');

var _utilBeforeinput2 = _interopRequireDefault(_utilBeforeinput);

var _model = require('./model');

var _componentsEntitiesLink = require('./components/entities/link');

var _componentsEntitiesLink2 = _interopRequireDefault(_componentsEntitiesLink);

var styleMap = {
  'HIGHLIGHT': {
    backgroundColor: 'yellow'
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
    boxShadow: 'inset 0 -1px 0 #bbb'
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'block block-quote RichEditor-blockquote';
    case 'unstyled':
      return 'block block-paragraph';
    case 'atomic':
      return 'block block-atomic';
    case 'caption':
      return 'block block-caption';
    case 'block-quote-caption':
      return 'block block-quote RichEditor-blockquote block-quote-caption';
    default:
      return 'block';
  }
}

var DraftBlockEditor = (function (_React$Component) {
  _inherits(DraftBlockEditor, _React$Component);

  function DraftBlockEditor(props) {
    var _this = this;

    _classCallCheck(this, DraftBlockEditor);

    _get(Object.getPrototypeOf(DraftBlockEditor.prototype), 'constructor', this).call(this, props);

    var decorator = new _draftJs.CompositeDecorator([{
      strategy: _componentsEntitiesLink.findLinkEntities,
      component: _componentsEntitiesLink2['default']
    }]);
    this.state = {
      editorState: _draftJs.EditorState.createEmpty(decorator),
      showURLInput: false,
      editorEnabled: true,
      urlValue: ''
    };
    if (props.value) {
      this.state.editorState = _draftJs.EditorState.push(this.state.editorState, (0, _draftJs.convertFromRaw)(props.value));
    }
    this.focus = function () {
      return _this.refs.editor.focus();
    };
    this.onChange = function (editorState) {
      window.editorState = editorState;
      _this.setState({ editorState: editorState });
    };

    this.onClick = function () {
      if (!_this.state.editorEnabled) {
        _this.setState({
          editorEnabled: true
        }, function () {
          _this.focus();
        });
      }
    };

    this.logData = this.logData.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onTab = this.onTab.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.handleBeforeInput = this.handleBeforeInput.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.loadSavedData = this.loadSavedData.bind(this);
    this.setLink = this.setLink.bind(this);
    this.addMedia = this.addMedia.bind(this);
  }

  _createClass(DraftBlockEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.focus();
    }
  }, {
    key: 'onTab',
    value: function onTab(e) {
      var editorState = this.state.editorState;

      var newEditorState = _draftJs.RichUtils.onTab(e, editorState, 2);
      if (newEditorState !== editorState) {
        this.onChange(newEditorState);
      }
    }
  }, {
    key: 'logData',
    value: function logData(e) {
      global.RAW = (0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent());
      global.SEL = this.state.editorState.getSelection();

      console.log('RAW', global.RAW);
      console.log('SEL', global.SEL.toJS());
    }
  }, {
    key: 'setLink',
    value: function setLink(url) {
      var _this2 = this;

      var editorState = this.state.editorState;

      var selection = editorState.getSelection();
      var entityKey = null;
      if (url !== '') {
        entityKey = _draftJs.Entity.create('LINK', 'MUTABLE', { url: url });
      }
      this.setState({
        editorState: _draftJs.RichUtils.toggleLink(editorState, selection, entityKey)
      }, function () {
        setTimeout(function () {
          return _this2.refs.editor.focus();
        }, 0);
      });
    }
  }, {
    key: 'addMedia',
    value: function addMedia() {
      var src = window.prompt('Enter a URL');
      if (!src) {
        return;
      }
      var entityKey = _draftJs.Entity.create('image', 'IMMUTABLE', { src: src });
      this.onChange(_draftJs.AtomicBlockUtils.insertAtomicBlock(this.state.editorState, entityKey, ' '));
    }
  }, {
    key: 'handleDroppedFiles',
    value: function handleDroppedFiles(selection, files) {
      console.log(selection.toJS());
      console.log(files);
    }
  }, {
    key: 'handleKeyCommand',
    value: function handleKeyCommand(command) {
      // console.log(command);
      if (command === 'editor-save') {
        window.localStorage['editor'] = JSON.stringify((0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent()));
        window.localStorage['tmp'] = JSON.stringify((0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent()));
        return true;
      } else if (command === 'showlinkinput') {
        if (this.refs.toolbar) {
          this.refs.toolbar.showLinkInput(null, true);
        }
        return true;
      } else if (command === 'add-new-block') {
        var _editorState = this.state.editorState;

        this.onChange((0, _model.addNewBlock)(_editorState, 'blockquote'));
        return true;
      } else if (command === 'load-saved-data') {
        this.loadSavedData();
        return true;
      }
      var editorState = this.state.editorState;

      var block = (0, _model.getCurrentBlock)(editorState);
      if (command.indexOf('changetype:') == 0) {
        var newBlockType = command.split(':')[1];
        var currentBlockType = block.getType();
        if (currentBlockType == 'atomic' || currentBlockType == 'media') {
          return false;
        }
        if (currentBlockType == 'blockquote' && newBlockType == 'caption') {
          newBlockType = 'block-quote-caption';
        } else if (currentBlockType == 'block-quote-caption' && newBlockType == 'caption') {
          newBlockType = 'blockquote';
        }
        this.onChange(_draftJs.RichUtils.toggleBlockType(editorState, newBlockType));
        return true;
      }
      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
  }, {
    key: 'handleBeforeInput',
    value: function handleBeforeInput(str) {
      return this.props.beforeInput(this.state.editorState, str, this.onChange, this.props.stringToTypeMap);
    }
  }, {
    key: 'handleReturn',
    value: function handleReturn(e) {
      if (e.shiftKey) {
        this.setState({
          editorState: _draftJs.RichUtils.insertSoftNewline(this.state.editorState)
        });
        return true;
      }
      return false;
    }
  }, {
    key: '_toggleBlockType',
    value: function _toggleBlockType(blockType) {
      this.onChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
    }
  }, {
    key: '_toggleInlineStyle',
    value: function _toggleInlineStyle(inlineStyle) {
      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    }
  }, {
    key: 'toggleEdit',
    value: function toggleEdit(e) {
      this.setState({
        editorEnabled: !this.state.editorEnabled
      });
    }
  }, {
    key: 'loadSavedData',
    value: function loadSavedData() {
      var _this3 = this;

      var data = window.localStorage.getItem('editor');
      if (data === null) {
        console.log('No data found.');
        return;
      }
      try {
        var blockData = JSON.parse(data);
        console.log(blockData);
        this.setState({
          editorState: _draftJs.EditorState.push(this.state.editorState, (0, _draftJs.convertFromRaw)(blockData))
        }, function () {
          return _this3.refs.editor.focus();
        });
      } catch (e) {
        window.er = e;
        console.log(e);
        console.log('Could not load data.');
      }
    }
  }, {
    key: 'loadCustomData',
    value: function loadCustomData(data) {
      var _this4 = this;

      this.setState({
        editorState: _draftJs.EditorState.push(this.state.editorState, data)
      }, function () {
        return _this4.refs.editor.focus();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var editorState = _state.editorState;
      var showURLInput = _state.showURLInput;
      var editorEnabled = _state.editorEnabled;
      var urlValue = _state.urlValue;

      // console.log(this.props);

      global.editor = this;

      return _react2['default'].createElement(
        'div',
        { className: 'RichEditor-root' },
        _react2['default'].createElement(
          'div',
          { className: 'RichEditor-editor' },
          _react2['default'].createElement(_draftJs.Editor, {
            ref: 'editor',
            editorState: editorState,
            blockRendererFn: _componentsCustomrenderer2['default'],
            blockStyleFn: getBlockStyle,
            onChange: this.onChange,
            onTab: this.onTab,
            blockRenderMap: this.props.blockRenderMap,
            handleKeyCommand: this.handleKeyCommand,
            handleBeforeInput: this.handleBeforeInput,
            handleDroppedFiles: this.handleDroppedFiles,
            handleReturn: this.handleReturn,
            customStyleMap: styleMap,
            readOnly: !editorEnabled,
            keyBindingFn: _utilKeybinding2['default'],
            placeholder: 'Write your story',
            spellCheck: false }),
          editorEnabled ? _react2['default'].createElement(_componentsAddbutton2['default'], { editorState: editorState, addMedia: this.addMedia }) : null,
          _react2['default'].createElement(_componentsToolbar2['default'], {
            ref: 'toolbar',
            editorState: editorState,
            toggleBlockType: this.toggleBlockType,
            toggleInlineStyle: this.toggleInlineStyle,
            editorEnabled: editorEnabled,
            setLink: this.setLink,
            focus: this.focus })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'editor-action' },
          _react2['default'].createElement(
            'button',
            { onClick: this.logData },
            'Log State'
          ),
          _react2['default'].createElement(
            'button',
            { onClick: this.toggleEdit },
            'Toggle Edit'
          )
        )
      );
    }
  }]);

  return DraftBlockEditor;
})(_react2['default'].Component);

var renderMap = (0, _immutable.Map)();

DraftBlockEditor.defaultProps = {
  beforeInput: _utilBeforeinput2['default'],
  stringToTypeMap: _utilBeforeinput.StringToTypeMap,
  blockRenderMap: _modelRendermap2['default']
};

exports['default'] = DraftBlockEditor;
module.exports = exports['default'];