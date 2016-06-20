'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _modelIndex = require('../model/index');

var _ramda = require('ramda');

var indexedForEach = (0, _ramda.addIndex)(_ramda.forEach);

var StringToTypeMap = {
  '--': 'blockquote:block-quote-caption:caption',
  '//': 'blockquote',
  '""': 'blockquote',
  '\'\'': 'blockquote',
  '*.': 'unordered-list-item',
  '1.': 'ordered-list-item',
  '##': 'header-two',
  '==': 'unstyled'
};

exports.StringToTypeMap = StringToTypeMap;

exports['default'] = function (editorState, str, callback) {
  var mapping = arguments.length <= 3 || arguments[3] === undefined ? StringToTypeMap : arguments[3];

  var selection = editorState.getSelection();
  var block = (0, _modelIndex.getCurrentBlock)(editorState);
  var blockType = block.getType();
  var blockLength = block.getLength();

  console.log(str, blockType, blockLength);
  console.log(block.getText()[0] + str);

  if (selection.getAnchorOffset() > 1 || blockLength > 1) {
    return false;
  }
  var blockTo = mapping[block.getText()[0] + str];
  if (!blockTo) {
    return false;
  }
  var finalType = blockTo.split(':');
  if (finalType.length < 1 || finalType.length > 3) {
    return false;
  }
  var fType = finalType[0];

  {
    if (blockType === (0, _ramda.last)(finalType)) {
      return false;
    }
    fType = (0, _ramda.last)(finalType);

    indexedForEach(function (type, index, typeList) {
      if (blockType === type) {
        fType = typeList[index + 1];
      }
    }, (0, _ramda.dropLast)(1, finalType));
  }

  // if (finalType.length == 1) {
  //   if (blockType == finalType[0]) {
  //     return false;
  //   }
  // } else if (finalType.length == 2) {
  //   if (blockType == finalType[1]) {
  //     return false;
  //   }
  //   if (blockType == finalType[0]) {
  //     fType = finalType[1];
  //   }
  // } else if (finalType.length == 3) {
  //   if (blockType == finalType[2]) {
  //     return false;
  //   }
  //   if (blockType == finalType[0]) {
  //     fType = finalType[1];
  //   } else {
  //     fType = finalType[2];
  //   }
  // }

  console.log(fType);

  callback((0, _modelIndex.resetBlockWithType)(editorState, fType));
  return true;
};