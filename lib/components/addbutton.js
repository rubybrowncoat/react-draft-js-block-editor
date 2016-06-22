'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddButton = function (_Component) {
  (0, _inherits3.default)(AddButton, _Component);

  function AddButton(props) {
    (0, _classCallCheck3.default)(this, AddButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AddButton).call(this, props));

    _this.state = {
      style: {},
      visible: false
    };
    _this.node = null;
    _this.blockKey = '';
    _this.blockType = '';
    _this.blockLength = -1;

    _this.findNode = _this.findNode.bind(_this);
    _this.hideBlock = _this.hideBlock.bind(_this);
    return _this;
  }

  // To show + button only when text length == 0


  (0, _createClass3.default)(AddButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var editorState = newProps.editorState;

      var contentState = editorState.getCurrentContent();
      var selectionState = editorState.getSelection();

      if (!selectionState.isCollapsed() || selectionState.anchorKey !== selectionState.focusKey) {
        this.hideBlock();
        return;
      }

      var block = contentState.getBlockForKey(selectionState.anchorKey);
      var bkey = block.getKey();

      if (block.getLength() > 0) {
        this.hideBlock();
        return;
      }

      if (block.getType() !== this.blockType) {
        this.blockType = block.getType();
        if (block.getLength() === 0) {
          setTimeout(this.findNode, 0);
        }
        return;
      }

      if (this.blockKey === bkey) {
        if (block.getLength() > 0) {
          this.hideBlock();
        } else {
          this.setState({
            visible: true
          });
        }
        return;
      }

      this.blockKey = bkey;
      if (block.getLength() > 0) {
        this.hideBlock();
        return;
      }

      setTimeout(this.findNode, 0);
    }

    // Show + button regardless of block length
    // componentWillReceiveProps(newProps) {
    //   const { editorState } = newProps;
    //   const contentState = editorState.getCurrentContent();
    //   const selectionState = editorState.getSelection();
    //   if (!selectionState.isCollapsed() || selectionState.anchorKey != selectionState.focusKey) {
    //     this.hideBlock();
    //     return;
    //   }
    //   const block = contentState.getBlockForKey(selectionState.anchorKey);
    //   const bkey = block.getKey();
    //   if (block.getType() !== this.blockType) {
    //     this.blockType = block.getType();
    //     setTimeout(this.findNode, 0);
    //     return;
    //   }
    //   if (this.blockKey === bkey) {
    //     this.setState({
    //       visible: true
    //     });
    //     return;
    //   }
    //   this.blockKey = bkey;
    //   setTimeout(this.findNode, 0);
    // }

  }, {
    key: 'hideBlock',
    value: function hideBlock() {
      if (this.state.visible) {
        this.setState({
          visible: false
        });
      }
    }
  }, {
    key: 'findNode',
    value: function findNode() {
      var node = (0, _util.getSelectedBlockNode)(window);
      if (node === this.node) {
        return;
      }
      if (!node) {
        this.setState({
          visible: false
        });
        return;
      }

      // const rect = node.getBoundingClientRect()

      this.node = node;
      this.setState({
        visible: true,
        style: {
          top: node.offsetTop
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.visible) {
        return _react2.default.createElement(
          'button',
          {
            onClick: this.props.addMedia,
            className: 'add-button',
            style: this.state.style
          },
          '+'
        );
      }
      return null;
    }
  }]);
  return AddButton;
}(_react.Component);

AddButton.propTypes = {
  addMedia: _react.PropTypes.func
};

exports.default = AddButton;
module.exports = exports['default'];