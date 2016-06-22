'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetBlockWithType = exports.addNewBlock = exports.getCurrentBlock = undefined;

var _draftJs = require('draft-js');

var getCurrentBlock = exports.getCurrentBlock = function getCurrentBlock(editorState) {
  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var block = contentState.getBlockForKey(selectionState.getStartKey());
  return block;
};

var addNewBlock = exports.addNewBlock = function addNewBlock(editorState) {
  var newType = arguments.length <= 1 || arguments[1] === undefined ? 'unstyled' : arguments[1];

  var selectionState = editorState.getSelection();
  if (!selectionState.isCollapsed()) {
    console.log('selection not collapsed');
    return editorState;
  }
  var contentState = editorState.getCurrentContent();
  var key = selectionState.getStartKey();
  var blockMap = contentState.getBlockMap();
  var currentBlock = getCurrentBlock(editorState);
  if (!currentBlock) {
    console.log('no current block');
    return editorState;
  }
  if (currentBlock.getLength() == 0) {
    if (currentBlock.getType() == newType) {
      console.log('same block types');
      return editorState;
    }
    var newBlock = currentBlock.merge({
      type: newType
    });
    var newContentState = contentState.merge({
      blockMap: blockMap.set(key, newBlock),
      selectionAfter: selectionState
    });
    return _draftJs.EditorState.push(editorState, newContentState, 'change-block-type');
  } else {}
  console.log('block length > 0');
  return editorState;
};

var resetBlockWithType = exports.resetBlockWithType = function resetBlockWithType(editorState) {
  var newType = arguments.length <= 1 || arguments[1] === undefined ? 'unstyled' : arguments[1];

  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();
  var key = selectionState.getStartKey();
  var blockMap = contentState.getBlockMap();
  var block = blockMap.get(key);
  var newText = "";
  var text = block.getText();
  if (block.getLength() >= 2) {
    newText = text.substr(1);
  }
  var newBlock = block.merge({
    text: newText,
    type: newType
  });
  var newContentState = contentState.merge({
    blockMap: blockMap.set(key, newBlock),
    selectionAfter: selectionState.merge({
      anchorOffset: 0,
      focusOffset: 0
    })
  });
  return _draftJs.EditorState.push(editorState, newContentState, 'change-block-type');
};