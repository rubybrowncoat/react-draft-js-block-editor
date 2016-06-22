'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleButton = function (_React$Component) {
  (0, _inherits3.default)(StyleButton, _React$Component);

  function StyleButton() {
    (0, _classCallCheck3.default)(this, StyleButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(StyleButton).call(this));

    _this.onToggle = function (e) {
      e.preventDefault();
      _this.props.onToggle(_this.props.style);
    };
    return _this;
  }

  (0, _createClass3.default)(StyleButton, [{
    key: 'render',
    value: function render() {
      var className = 'RichEditor-styleButton';
      if (this.props.active) {
        className += ' RichEditor-activeButton';
      }

      return _react2.default.createElement(
        'span',
        { className: className, onMouseDown: this.onToggle },
        this.props.label
      );
    }
  }]);
  return StyleButton;
}(_react2.default.Component);

exports.default = StyleButton;
module.exports = exports['default'];