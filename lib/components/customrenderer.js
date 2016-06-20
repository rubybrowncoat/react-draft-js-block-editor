// import TextComponent from './blocks/text';
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _blocksBlockquotecaption = require('./blocks/blockquotecaption');

var _blocksBlockquotecaption2 = _interopRequireDefault(_blocksBlockquotecaption);

var _blocksCaption = require('./blocks/caption');

var _blocksCaption2 = _interopRequireDefault(_blocksCaption);

var _blocksAtomic = require('./blocks/atomic');

var _blocksAtomic2 = _interopRequireDefault(_blocksAtomic);

exports['default'] = function (contentBlock) {
  var type = contentBlock.getType();
  switch (type) {
    // case 'unstyled': return {
    //   component: TextComponent
    // };
    case 'block-quote-caption':
      return {
        component: _blocksBlockquotecaption2['default']
      };
    case 'caption':
      return {
        component: _blocksCaption2['default']
      };
    case 'atomic':
      return {
        component: _blocksAtomic2['default'],
        editable: false
      };
    default:
      return null;
  }
};

module.exports = exports['default'];