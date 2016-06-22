'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var entity = _draftJs.Entity.get(props.block.getEntityAt(0));
  var data = entity.getData();
  var type = entity.getType();

  if (type === 'IMAGE') {
    return _react2.default.createElement(
      'div',
      { className: 'block-atomic-wrapper' },
      _react2.default.createElement('img', { src: data.src, role: 'presentation' }),
      _react2.default.createElement(
        'div',
        { className: 'block-atomic-controls' },
        _react2.default.createElement(
          'button',
          null,
          '×'
        )
      )
    );
  }

  if (type === 'YOUTUBE') {
    var youtubeRegexp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/; // eslint-disable-line no-useless-escape
    var match = data.src.match(youtubeRegexp);

    if (match && match[2].length === 11) {
      return _react2.default.createElement('iframe', {
        width: '560',
        height: '315',
        src: '//www.youtube.com/embed/' + match[2],
        frameBorder: '0',
        allowFullScreen: true
      });
    }

    return _react2.default.createElement(
      'p',
      null,
      'Unsupported URL format for ',
      type
    );
  }

  return _react2.default.createElement(
    'p',
    null,
    'No supported block for ',
    type
  );
};

module.exports = exports['default'];