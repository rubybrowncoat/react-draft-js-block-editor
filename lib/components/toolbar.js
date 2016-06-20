'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _draftJs = require('draft-js');

var _blocktoolbar = require('./blocktoolbar');

var _blocktoolbar2 = _interopRequireDefault(_blocktoolbar);

var _inlinetoolbar = require('./inlinetoolbar');

var _inlinetoolbar2 = _interopRequireDefault(_inlinetoolbar);

var _utilIndex = require('../util/index');

var _modelIndex = require('../model/index');

window.getVisibleSelectionRect = _draftJs.getVisibleSelectionRect;

var Toolbar = (function (_React$Component) {
  _inherits(Toolbar, _React$Component);

  function Toolbar(props) {
    _classCallCheck(this, Toolbar);

    _get(Object.getPrototypeOf(Toolbar.prototype), 'constructor', this).call(this, props);
    this.state = {
      showURLInput: false,
      urlInputValue: '',
      style: {
        top: 0,
        left: 0
      }
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showLinkInput = this.showLinkInput.bind(this);

    this.hasDimension = false;
    this.rect = {};
    this.forceHide = false;
  }

  _createClass(Toolbar, [{
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
      var nativeSelection = (0, _utilIndex.getSelection)(window);
      if (!nativeSelection.rangeCount) {
        return;
      }

      var node = nativeSelection.getRangeAt(0).startContainer.parentNode;
      var rect = (0, _utilIndex.getSelectionRect)(nativeSelection);

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

        this.setState({
          style: {
            top: rect.top - body.rect.top - this.rect.height - 40,
            width: this.rect.width,
            left: left
          }
        });
      } else {
        this.setState({
          style: {
            top: rect.top - body.rect.top - 95,
            left: Math.max(Math.min((rect.left + rect.width - 341) / 2, editor.rect.width - this.rect.width), 0),
            width: 341
          }
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.forceHide = false;
      var node = _reactDom2['default'].findDOMNode(this);
      if (!node) {
        return;
      }
      this.rect = _reactDom2['default'].findDOMNode(this).getBoundingClientRect();
      this.hasDimension = true;
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      var _this = this;

      if (e.which === 13) {
        e.preventDefault();
        e.stopPropagation();
        this.props.setLink(this.state.urlInputValue);
        this.setState({
          showURLInput: false,
          urlInputValue: ''
        }, function () {
          return _this.props.focus();
        });
      } else if (e.which === 27) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
          showURLInput: false,
          urlInputValue: ''
        }, function () {
          return _this.props.focus();
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
      var _this2 = this;

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
      var currentBlock = (0, _modelIndex.getCurrentBlock)(editorState);
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
        if (start == selStart && end == selEnd) {
          linkFound = true;

          var _Entity$get$getData = _draftJs.Entity.get(selectedEntity).getData();

          var url = _Entity$get$getData.url;

          _this2.setState({
            showURLInput: true,
            urlInputValue: url
          }, function () {
            setTimeout(function () {
              _this2.refs.urlinput.focus();
              _this2.refs.urlinput.select();
            }, 0);
          });
        }
        // console.log(start, end);
        // console.log(selection.toJS());
      });
      if (!linkFound) {
        this.setState({
          showURLInput: true
        }, function () {
          setTimeout(function () {
            _this2.refs.urlinput.focus();
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
        return _react2['default'].createElement(
          'div',
          { className: 'editor-toolbar', style: style },
          _react2['default'].createElement(
            'div',
            { className: 'RichEditor-controls', style: { display: 'block' } },
            _react2['default'].createElement('input', {
              ref: 'urlinput',
              type: 'text',
              className: 'url-input',
              onKeyDown: this.onKeyDown,
              onChange: this.onChange,
              placeholder: 'Press ENTER or ESC',
              value: urlInputValue })
          )
        );
      }
      return _react2['default'].createElement(
        'div',
        { className: 'editor-toolbar', style: style },
        _react2['default'].createElement(_blocktoolbar2['default'], {
          editorState: editorState,
          onToggle: this.props.toggleBlockType,
          buttons: BLOCK_BUTTONS }),
        _react2['default'].createElement(_inlinetoolbar2['default'], {
          editorState: editorState,
          onToggle: this.props.toggleInlineStyle,
          buttons: INLINE_BUTTONS }),
        _react2['default'].createElement(
          'div',
          { className: 'RichEditor-controls' },
          _react2['default'].createElement(
            'a',
            { className: 'RichEditor-linkButton', href: '#', onClick: this.showLinkInput },
            '#'
          )
        )
      );
    }
  }]);

  return Toolbar;
})(_react2['default'].Component);

exports['default'] = Toolbar;

var BLOCK_BUTTONS = [
// {label: 'H1', style: 'header-one'},
// {label: 'H2', style: 'header-two'},
{ label: 'T', style: 'header-three' }, { label: 'N', style: 'unstyled' }, { label: 'Q', style: 'blockquote' }, { label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }];

var INLINE_BUTTONS = [{ label: _react2['default'].createElement(
    'b',
    null,
    'B'
  ), style: 'BOLD' }, { label: _react2['default'].createElement(
    'i',
    null,
    'I'
  ), style: 'ITALIC' }, { label: _react2['default'].createElement(
    'u',
    null,
    'U'
  ), style: 'UNDERLINE' }, { label: _react2['default'].createElement(
    'strike',
    null,
    'S'
  ), style: 'STRIKETHROUGH' }, { label: 'Hi', style: 'HIGHLIGHT' }];
module.exports = exports['default'];