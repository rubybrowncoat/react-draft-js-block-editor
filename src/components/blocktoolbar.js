import React, { PropTypes } from 'react'
import { RichUtils } from 'draft-js'

import StyleButton from './stylebutton'

const BlockToolbar = (props) => {
  const { editorState } = props
  // const selection = editorState.getSelection();
  const blockType = RichUtils.getCurrentBlockType(editorState)

  console.log(props)

  return (
    <div className="RichEditor-controls">
      {props.buttons.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  )
}

BlockToolbar.propTypes = {
  editorState: PropTypes.any,
  buttons: PropTypes.array,
  onToggle: PropTypes.func,
}

export default BlockToolbar
