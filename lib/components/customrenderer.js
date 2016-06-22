'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _text = require('./blocks/text');

var _text2 = _interopRequireDefault(_text);

var _blockquotecaption = require('./blocks/blockquotecaption');

var _blockquotecaption2 = _interopRequireDefault(_blockquotecaption);

var _caption = require('./blocks/caption');

var _caption2 = _interopRequireDefault(_caption);

var _atomic = require('./blocks/atomic');

var _atomic2 = _interopRequireDefault(_atomic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (contentBlock) {
  var type = contentBlock.getType();
  switch (type) {
    case 'unstyled':
      return {
        component: _text2.default
      };
    case 'block-quote-caption':
      return {
        component: _blockquotecaption2.default
      };
    case 'caption':
      return {
        component: _caption2.default
      };
    case 'atomic':
      return {
        component: _atomic2.default,
        editable: false
      };
    default:
      return null;
  }
};

module.exports = exports['default'];