'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylebutton = require('./stylebutton');

var _stylebutton2 = _interopRequireDefault(_stylebutton);

exports['default'] = function (props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return _react2['default'].createElement(
    'div',
    { className: 'RichEditor-controls' },
    props.buttons.map(function (type) {
      return _react2['default'].createElement(_stylebutton2['default'], {
        key: type.style,
        active: currentStyle.has(type.style),
        label: type.label,
        onToggle: props.onToggle,
        style: type.style
      });
    })
  );
};

module.exports = exports['default'];