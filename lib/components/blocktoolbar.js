'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _stylebutton = require('./stylebutton');

var _stylebutton2 = _interopRequireDefault(_stylebutton);

var BlockToolbar = function BlockToolbar(props) {
  var editorState = props.editorState;

  // const selection = editorState.getSelection();
  var blockType = _draftJs.RichUtils.getCurrentBlockType(editorState);

  console.log(props);

  return _react2['default'].createElement(
    'div',
    { className: 'RichEditor-controls' },
    props.buttons.map(function (type) {
      return _react2['default'].createElement(_stylebutton2['default'], {
        key: type.label,
        active: type.style === blockType,
        label: type.label,
        onToggle: props.onToggle,
        style: type.style
      });
    })
  );
};

BlockToolbar.propTypes = {
  editorState: _react.PropTypes.any,
  buttons: _react.PropTypes.array,
  onToggle: _react.PropTypes.func
};

exports['default'] = BlockToolbar;
module.exports = exports['default'];