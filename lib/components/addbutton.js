'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../util');

var AddButton = (function (_Component) {
  _inherits(AddButton, _Component);

  function AddButton(props) {
    _classCallCheck(this, AddButton);

    _get(Object.getPrototypeOf(AddButton.prototype), 'constructor', this).call(this, props);

    this.state = {
      style: {},
      visible: false
    };
    this.node = null;
    this.blockKey = '';
    this.blockType = '';
    this.blockLength = -1;

    this.findNode = this.findNode.bind(this);
    this.hideBlock = this.hideBlock.bind(this);
  }

  // To show + button only when text length == 0

  _createClass(AddButton, [{
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
        return _react2['default'].createElement(
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
})(_react.Component);

AddButton.propTypes = {
  addMedia: _react.PropTypes.func
};

exports['default'] = AddButton;
module.exports = exports['default'];