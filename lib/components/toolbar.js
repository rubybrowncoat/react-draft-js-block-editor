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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _draftJs = require('draft-js');

var _blocktoolbar = require('./blocktoolbar');

var _blocktoolbar2 = _interopRequireDefault(_blocktoolbar);

var _inlinetoolbar = require('./inlinetoolbar');

var _inlinetoolbar2 = _interopRequireDefault(_inlinetoolbar);

var _index = require('../util/index');

var _index2 = require('../model/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.getVisibleSelectionRect = _draftJs.getVisibleSelectionRect;

var Toolbar = function (_React$Component) {
  (0, _inherits3.default)(Toolbar, _React$Component);

  function Toolbar(props) {
    (0, _classCallCheck3.default)(this, Toolbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Toolbar).call(this, props));

    _this.state = {
      showURLInput: false,
      urlInputValue: '',
      style: {
        top: 0,
        left: 0
      }
    };

    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.showLinkInput = _this.showLinkInput.bind(_this);

    _this.hasDimension = false;
    _this.rect = {};
    _this.forceHide = false;
    return _this;
  }

  (0, _createClass3.default)(Toolbar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var editorState = newProps.editorState;

      if (!newProps.editorEnabled) {
        return;
      }

      var selectionState = editorState.getSelection();
      if (selectionState.isCollapsed()) {
        if (this.state.showURLInput) {
          this.setState({
            showURLInput: false
          });
        }
        return;
      }

      var nativeSelection = (0, _index.getSelection)(window);
      if (!nativeSelection.rangeCount) {
        return;
      }

      // const node = nativeSelection.getRangeAt(0).startContainer.parentNode
      var rect = (0, _index.getSelectionRect)(nativeSelection);

      var editor = {
        element: document.getElementsByClassName('public-DraftEditor-content')[0].children[0]
      };
      editor.rect = editor.element.getBoundingClientRect();

      var body = {
        element: document.body
      };
      body.rect = body.element.getBoundingClientRect();

      if (this.hasDimension) {
        var left = rect.left - editor.rect.left + (rect.width - this.rect.width) / 2;
        if (rect.width >= editor.rect.width) {
          left = (editor.rect.width - this.rect.width) / 2;
        }
        left = Math.max(Math.min(left, editor.rect.width - this.rect.width), 0);

        console.log(rect.top);

        var top = rect.top - editor.rect.top - this.rect.height - 15;
        if (rect.top <= this.rect.height + 25) {
          top = rect.top - editor.rect.top + 35;
        }

        this.setState({
          style: {
            top: top,
            left: left,
            width: this.rect.width
          }
        });
      } else {
        var _left = (editor.rect.width - this.rect.width) / 2;
        var _top = rect.top - editor.rect.top + 35;

        this.setState({
          style: {
            top: _top,
            left: _left,
            width: 'auto'
          }
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.forceHide = false;
      var node = _reactDom2.default.findDOMNode(this);
      if (!node) {
        return;
      }
      this.rect = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
      this.hasDimension = true;
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      var _this2 = this;

      if (e.which === 13) {
        e.preventDefault();
        e.stopPropagation();
        this.props.setLink(this.state.urlInputValue);
        this.setState({
          showURLInput: false,
          urlInputValue: ''
        }, function () {
          return _this2.props.focus();
        });
      } else if (e.which === 27) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
          showURLInput: false,
          urlInputValue: ''
        }, function () {
          return _this2.props.focus();
        });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.setState({
        urlInputValue: e.target.value
      });
    }
  }, {
    key: 'showLinkInput',
    value: function showLinkInput(e) {
      var _this3 = this;

      var direct = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (!direct) {
        e.preventDefault();
        e.stopPropagation();
      }
      var editorState = this.props.editorState;

      var selection = editorState.getSelection();
      if (selection.isCollapsed()) {
        this.props.focus();
        return;
      }
      var currentBlock = (0, _index2.getCurrentBlock)(editorState);
      var selectedEntity = '';
      var linkFound = false;
      currentBlock.findEntityRanges(function (character) {
        var entityKey = character.getEntity();
        selectedEntity = entityKey;
        return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'LINK';
      }, function (start, end) {
        var selStart = selection.getAnchorOffset();
        var selEnd = selection.getFocusOffset();
        if (selection.getIsBackward()) {
          selStart = selection.getFocusOffset();
          selEnd = selection.getAnchorOffset();
        }
        if (start === selStart && end === selEnd) {
          linkFound = true;

          var _Entity$get$getData = _draftJs.Entity.get(selectedEntity).getData();

          var url = _Entity$get$getData.url;

          _this3.setState({
            showURLInput: true,
            urlInputValue: url
          }, function () {
            setTimeout(function () {
              _this3.refs.urlinput.focus();
              _this3.refs.urlinput.select();
            }, 0);
          });
        }
      });
      if (!linkFound) {
        this.setState({
          showURLInput: true
        }, function () {
          setTimeout(function () {
            _this3.refs.urlinput.focus();
          }, 0);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var editorState = _props.editorState;
      var editorEnabled = _props.editorEnabled;
      var _state = this.state;
      var showURLInput = _state.showURLInput;
      var urlInputValue = _state.urlInputValue;
      var style = _state.style;

      if (!editorEnabled || editorState.getSelection().isCollapsed()) {
        return null;
      }
      if (showURLInput) {
        return _react2.default.createElement(
          'div',
          { className: 'editor-toolbar', style: style },
          _react2.default.createElement(
            'div',
            { className: 'RichEditor-controls', style: { display: 'block' } },
            _react2.default.createElement('input', {
              ref: 'urlinput',
              type: 'text',
              className: 'url-input',
              onKeyDown: this.onKeyDown,
              onChange: this.onChange,
              placeholder: 'Press ENTER or ESC',
              value: urlInputValue
            })
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'editor-toolbar', style: style },
        _react2.default.createElement(_blocktoolbar2.default, {
          editorState: editorState,
          onToggle: this.props.toggleBlockType,
          buttons: BLOCK_BUTTONS
        }),
        _react2.default.createElement(_inlinetoolbar2.default, {
          editorState: editorState,
          onToggle: this.props.toggleInlineStyle,
          buttons: INLINE_BUTTONS
        }),
        _react2.default.createElement(
          'div',
          { className: 'RichEditor-controls' },
          _react2.default.createElement(
            'a',
            { className: 'RichEditor-linkButton', href: '#', onClick: this.showLinkInput },
            '#'
          )
        )
      );
    }
  }]);
  return Toolbar;
}(_react2.default.Component);

exports.default = Toolbar;


var BLOCK_BUTTONS = [{ label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'H3', style: 'header-three' }, { label: 'N', style: 'unstyled' }, { label: 'Q', style: 'blockquote' }, { label: 'QC', style: 'block-quote-caption' }, { label: 'CP', style: 'caption' }, { label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }];

var INLINE_BUTTONS = [{ label: _react2.default.createElement(
    'b',
    null,
    'B'
  ), style: 'BOLD' }, { label: _react2.default.createElement(
    'i',
    null,
    'I'
  ), style: 'ITALIC' }, { label: _react2.default.createElement(
    'u',
    null,
    'U'
  ), style: 'UNDERLINE' }, { label: _react2.default.createElement(
    'strike',
    null,
    'S'
  ), style: 'STRIKETHROUGH' }, { label: _react2.default.createElement(
    'pre',
    { style: { display: 'inline' } },
    'C'
  ), style: 'CODE' }, { label: 'Hi', style: 'HIGHLIGHT' }];
module.exports = exports['default'];