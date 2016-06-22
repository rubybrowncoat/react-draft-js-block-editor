'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _draftJs = require('draft-js');

var RenderMap = (0, _immutable.Map)({
  unstyled: {
    element: 'div'
  },
  caption: {
    element: 'cite'
  },
  'block-quote-caption': {
    element: 'blockquote'
  }
}).merge(_draftJs.DefaultDraftBlockRenderMap);

exports.default = RenderMap;
module.exports = exports['default'];