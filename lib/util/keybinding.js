'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

var hasCommandModifier = _draftJs.KeyBindingUtil.hasCommandModifier;

exports.default = function (e) {
  if (hasCommandModifier(e) && e.keyCode == 83) {
    return 'editor-save';
  }
  if (e.altKey === true) {
    if (e.shiftKey === true) {
      switch (e.keyCode) {
        // Alt + Shift + A
        case 65:
          return 'add-new-block';
        // Alt + Shift + D
        case 68:
          return 'load-saved-data';
        case 69:
          return 'toggle-edit-mode';
        default:
          return (0, _draftJs.getDefaultKeyBinding)(e);
      }
    }
    switch (e.keyCode) {
      // 1
      case 49:
        return 'changetype:ordered-list-item';
      // @
      case 50:
        return 'showlinkinput';
      // #
      case 51:
        return 'changetype:header-three';
      // *
      case 56:
        return 'changetype:unordered-list-item';

      //S
      // case 83: return 'editor-save';
      // = +
      // case 187: return 'add-new-block';
      // <
      case 188:
        return 'changetype:caption';
      // // -
      // case 189: return 'changetype:caption';
      // >
      case 190:
        return 'changetype:unstyled';
      // "
      case 222:
        return 'changetype:blockquote';

      default:
        return (0, _draftJs.getDefaultKeyBinding)(e);
    }
  }
  return (0, _draftJs.getDefaultKeyBinding)(e);
};

module.exports = exports['default'];