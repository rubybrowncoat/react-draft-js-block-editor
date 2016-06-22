'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSelectionRect = exports.getSelectionRect = function getSelectionRect(selected) {
  var _rect = selected.getRangeAt(0).getBoundingClientRect();
  var rect = _rect && _rect.top ? _rect : selected.getRangeAt(0).getClientRects()[0]; //selected.getRangeAt(0).getBoundingClientRect()
  if (!rect) {
    if (selected.anchorNode && selected.anchorNode.getBoundingClientRect) {
      rect = selected.anchorNode.getBoundingClientRect();
      rect.isEmptyline = true;
    } else {
      return null;
    }
  }
  return rect;
};

// export const getSelectedNode = (selection) => {};

var getSelection = exports.getSelection = function getSelection(root) {
  var t = null;
  if (root.getSelection) {
    t = root.getSelection();
  } else if (root.document.getSelection) {
    t = root.document.getSelection();
  } else if (root.document.selection) {
    t = root.document.selection.createRange().text;
  }
  return t;
};

var getSelectedBlockNode = exports.getSelectedBlockNode = function getSelectedBlockNode(root) {
  var selection = root.getSelection();
  if (selection.rangeCount == 0) {
    return null;
  }
  window.sel = selection;
  var node = selection.getRangeAt(0).startContainer;
  // console.log(node);
  do {
    if (node.getAttribute && node.getAttribute('data-block') === 'true') {
      return node;
    }
    node = node.parentNode;
    // console.log(node);
  } while (node !== null);
  return null;
};