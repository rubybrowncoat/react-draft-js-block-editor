'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

exports['default'] = function (props) {
  var entity = _draftJs.Entity.get(props.block.getEntityAt(0));
  var data = entity.getData();
  var type = entity.getType();
  if (type === 'image') {
    return _react2['default'].createElement(
      'div',
      { className: 'block-atomic-wrapper' },
      _react2['default'].createElement('img', { src: data.src }),
      _react2['default'].createElement(
        'div',
        { className: 'block-atomic-controls' },
        _react2['default'].createElement(
          'button',
          null,
          '×'
        )
      )
    );
  }
  return _react2['default'].createElement(
    'p',
    null,
    'No supported block for ',
    type
  );
};

module.exports = exports['default'];