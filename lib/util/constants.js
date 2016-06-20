'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var BLOCKS = {
  UNSTYLED: 'unstyled',
  OL: 'ordered-list-item',
  UL: 'unordered-list-item',
  H1: 'header-one',
  H2: 'header-two',
  H3: 'header-three',
  H4: 'header-four',
  H5: 'header-five',
  H6: 'header-six',
  CODE: 'code-block',
  BLOCKQUOTE: 'blockquote',
  PULLQUOTE: 'pullquote',
  ATOMIC: 'atomic',
  BLOCKQUOTE_CAPTION: 'block-quote-caption',
  CAPTION: 'caption'
};

exports.BLOCKS = BLOCKS;
var INLINE = {
  BOLD: 'BOLD',
  CODE: 'CODE',
  ITALIC: 'ITALIC',
  STRIKETHROUGH: 'STRIKETHROUGH',
  UNDERLINE: 'UNDERLINE',
  HIGHLIGHT: 'HIGHLIGHT'
};

exports.INLINE = INLINE;
var ENTITY = {
  LINK: 'LINK'
};

exports.ENTITY = ENTITY;
exports['default'] = {
  BLOCKS: BLOCKS,
  INLINE: INLINE,
  ENTITY: ENTITY
};