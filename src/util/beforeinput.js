import { resetBlockWithType, getCurrentBlock } from '../model/index';

import { addIndex, dropLast, forEach, last } from 'ramda'
const indexedForEach = addIndex(forEach)

export const StringToTypeMap = {
  '--': 'blockquote:block-quote-caption:caption',
  '//': 'blockquote',
  '""': 'blockquote',
  '\'\'': 'blockquote',
  '*.': 'unordered-list-item',
  '1.': 'ordered-list-item',
  '##': 'header-two',
  '==': 'unstyled'
};

export default (editorState, str, callback, mapping = StringToTypeMap) => {
  const selection = editorState.getSelection();
  const block = getCurrentBlock(editorState);
  const blockType = block.getType();
  const blockLength = block.getLength();

  console.log(str, blockType, blockLength)
  console.log(block.getText()[0] + str)

  if (selection.getAnchorOffset() > 1 || blockLength > 1) {
    return false;
  }
  const blockTo = mapping[block.getText()[0] + str];
  if (!blockTo) {
    return false;
  }
  const finalType = blockTo.split(':');
  if (finalType.length < 1 || finalType.length > 3) {
    return false;
  }
  let fType = finalType[0];

  {
    if (blockType === last(finalType)) {
      return false;
    }
    fType = last(finalType)

    indexedForEach((type, index, typeList) => {
      if (blockType === type) {
        fType = typeList[index + 1]
      }
    }, dropLast(1, finalType))
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

  console.log(fType)

  callback(resetBlockWithType(editorState, fType));
  return true;
}
