(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.DraftJsBlockEditor = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _editor = require('./editor');

var _editor2 = _interopRequireDefault(_editor);

var _utilBeforeinput = require('./util/beforeinput');

var _utilBeforeinput2 = _interopRequireDefault(_utilBeforeinput);

var _modelRendermap = require('./model/rendermap');

var _modelRendermap2 = _interopRequireDefault(_modelRendermap);

exports.Editor = _editor2['default'];
exports.beforeInput = _utilBeforeinput2['default'];
exports.StringToTypeMap = _utilBeforeinput.StringToTypeMap;
exports.RenderMap = _modelRendermap2['default'];

},{"./editor":12,"./model/rendermap":14,"./util/beforeinput":15}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../util":16}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"draft-js":undefined}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

exports['default'] = function (props) {
  return _react2['default'].createElement(
    'cite',
    null,
    _react2['default'].createElement(_draftJs.EditorBlock, props)
  );
};

module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"draft-js":undefined}],5:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

exports["default"] = function (props) {
  return _react2["default"].createElement(_draftJs.EditorBlock, props);
};

module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"draft-js":undefined}],6:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./stylebutton":10,"draft-js":undefined}],7:[function(require,module,exports){
// import TextComponent from './blocks/text';
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _blocksBlockquotecaption = require('./blocks/blockquotecaption');

var _blocksBlockquotecaption2 = _interopRequireDefault(_blocksBlockquotecaption);

var _blocksCaption = require('./blocks/caption');

var _blocksCaption2 = _interopRequireDefault(_blocksCaption);

var _blocksAtomic = require('./blocks/atomic');

var _blocksAtomic2 = _interopRequireDefault(_blocksAtomic);

exports['default'] = function (contentBlock) {
  var type = contentBlock.getType();
  switch (type) {
    // case 'unstyled': return {
    //   component: TextComponent
    // };
    case 'block-quote-caption':
      return {
        component: _blocksBlockquotecaption2['default']
      };
    case 'caption':
      return {
        component: _blocksCaption2['default']
      };
    case 'atomic':
      return {
        component: _blocksAtomic2['default'],
        editable: false
      };
    default:
      return null;
  }
};

module.exports = exports['default'];

},{"./blocks/atomic":3,"./blocks/blockquotecaption":4,"./blocks/caption":5}],8:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var findLinkEntities = function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'LINK';
  }, callback);
};

exports.findLinkEntities = findLinkEntities;

exports['default'] = function (props) {
  var _Entity$get$getData = _draftJs.Entity.get(props.entityKey).getData();

  var url = _Entity$get$getData.url;

  return _react2['default'].createElement(
    'a',
    { className: 'draft-link hint--bottom', href: url, target: '_blank' },
    props.children
  );
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"draft-js":undefined}],9:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./stylebutton":10}],10:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var StyleButton = (function (_React$Component) {
  _inherits(StyleButton, _React$Component);

  function StyleButton() {
    var _this = this;

    _classCallCheck(this, StyleButton);

    _get(Object.getPrototypeOf(StyleButton.prototype), 'constructor', this).call(this);
    this.onToggle = function (e) {
      e.preventDefault();
      _this.props.onToggle(_this.props.style);
    };
  }

  _createClass(StyleButton, [{
    key: 'render',
    value: function render() {
      var className = 'RichEditor-styleButton';
      if (this.props.active) {
        className += ' RichEditor-activeButton';
      }

      return _react2['default'].createElement(
        'span',
        { className: className, onMouseDown: this.onToggle },
        this.props.label
      );
    }
  }]);

  return StyleButton;
})(_react2['default'].Component);

exports['default'] = StyleButton;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../model/index":13,"../util/index":16,"./blocktoolbar":6,"./inlinetoolbar":9,"draft-js":undefined,"react-dom":undefined}],12:[function(require,module,exports){
(function (global){
// import 'draft-js/dist/Draft.css';
// import './index.scss';
// import './components/blocks/text.scss';

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _immutable = require('immutable');

var _componentsAddbutton = require('./components/addbutton');

var _componentsAddbutton2 = _interopRequireDefault(_componentsAddbutton);

var _componentsToolbar = require('./components/toolbar');

var _componentsToolbar2 = _interopRequireDefault(_componentsToolbar);

var _componentsCustomrenderer = require('./components/customrenderer');

var _componentsCustomrenderer2 = _interopRequireDefault(_componentsCustomrenderer);

var _util = require('./util');

var _modelRendermap = require('./model/rendermap');

var _modelRendermap2 = _interopRequireDefault(_modelRendermap);

var _utilKeybinding = require('./util/keybinding');

var _utilKeybinding2 = _interopRequireDefault(_utilKeybinding);

var _utilBeforeinput = require('./util/beforeinput');

var _utilBeforeinput2 = _interopRequireDefault(_utilBeforeinput);

var _model = require('./model');

var _componentsEntitiesLink = require('./components/entities/link');

var _componentsEntitiesLink2 = _interopRequireDefault(_componentsEntitiesLink);

var styleMap = {
  'HIGHLIGHT': {
    backgroundColor: 'yellow'
  },
  'CODE': {
    fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    margin: '4px 0',
    fontSize: '0.9em',
    padding: '1px 3px',
    color: '#555',
    backgroundColor: '#fcfcfc',
    border: '1px solid #ccc',
    borderBottomColor: '#bbb',
    borderRadius: 3,
    boxShadow: 'inset 0 -1px 0 #bbb'
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'block block-quote RichEditor-blockquote';
    case 'unstyled':
      return 'block block-paragraph';
    case 'atomic':
      return 'block block-atomic';
    case 'caption':
      return 'block block-caption';
    case 'block-quote-caption':
      return 'block block-quote RichEditor-blockquote block-quote-caption';
    default:
      return 'block';
  }
}

var DraftBlockEditor = (function (_React$Component) {
  _inherits(DraftBlockEditor, _React$Component);

  function DraftBlockEditor(props) {
    var _this = this;

    _classCallCheck(this, DraftBlockEditor);

    _get(Object.getPrototypeOf(DraftBlockEditor.prototype), 'constructor', this).call(this, props);

    var decorator = new _draftJs.CompositeDecorator([{
      strategy: _componentsEntitiesLink.findLinkEntities,
      component: _componentsEntitiesLink2['default']
    }]);
    this.state = {
      editorState: _draftJs.EditorState.createEmpty(decorator),
      showURLInput: false,
      editorEnabled: true,
      urlValue: ''
    };
    if (props.value) {
      this.state.editorState = _draftJs.EditorState.push(this.state.editorState, (0, _draftJs.convertFromRaw)(props.value));
    }
    this.focus = function () {
      return _this.refs.editor.focus();
    };
    this.onChange = function (editorState) {
      window.editorState = editorState;
      _this.setState({ editorState: editorState });
    };

    this.onClick = function () {
      if (!_this.state.editorEnabled) {
        _this.setState({
          editorEnabled: true
        }, function () {
          _this.focus();
        });
      }
    };

    this.logData = this.logData.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onTab = this.onTab.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.handleBeforeInput = this.handleBeforeInput.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.loadSavedData = this.loadSavedData.bind(this);
    this.setLink = this.setLink.bind(this);
    this.addMedia = this.addMedia.bind(this);
  }

  _createClass(DraftBlockEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.focus();
    }
  }, {
    key: 'onTab',
    value: function onTab(e) {
      var editorState = this.state.editorState;

      var newEditorState = _draftJs.RichUtils.onTab(e, editorState, 2);
      if (newEditorState !== editorState) {
        this.onChange(newEditorState);
      }
    }
  }, {
    key: 'logData',
    value: function logData(e) {
      global.RAW = (0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent());
      global.SEL = this.state.editorState.getSelection();

      console.log('RAW', global.RAW);
      console.log('SEL', global.SEL.toJS());
    }
  }, {
    key: 'setLink',
    value: function setLink(url) {
      var _this2 = this;

      var editorState = this.state.editorState;

      var selection = editorState.getSelection();
      var entityKey = null;
      if (url !== '') {
        entityKey = _draftJs.Entity.create('LINK', 'MUTABLE', { url: url });
      }
      this.setState({
        editorState: _draftJs.RichUtils.toggleLink(editorState, selection, entityKey)
      }, function () {
        setTimeout(function () {
          return _this2.refs.editor.focus();
        }, 0);
      });
    }
  }, {
    key: 'addMedia',
    value: function addMedia() {
      var src = window.prompt('Enter a URL');
      if (!src) {
        return;
      }
      var entityKey = _draftJs.Entity.create('image', 'IMMUTABLE', { src: src });
      this.onChange(_draftJs.AtomicBlockUtils.insertAtomicBlock(this.state.editorState, entityKey, ' '));
    }
  }, {
    key: 'handleDroppedFiles',
    value: function handleDroppedFiles(selection, files) {
      console.log(selection.toJS());
      console.log(files);
    }
  }, {
    key: 'handleKeyCommand',
    value: function handleKeyCommand(command) {
      // console.log(command);
      if (command === 'editor-save') {
        window.localStorage['editor'] = JSON.stringify((0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent()));
        window.localStorage['tmp'] = JSON.stringify((0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent()));
        return true;
      } else if (command === 'showlinkinput') {
        if (this.refs.toolbar) {
          this.refs.toolbar.showLinkInput(null, true);
        }
        return true;
      } else if (command === 'add-new-block') {
        var _editorState = this.state.editorState;

        this.onChange((0, _model.addNewBlock)(_editorState, 'blockquote'));
        return true;
      } else if (command === 'load-saved-data') {
        this.loadSavedData();
        return true;
      }
      var editorState = this.state.editorState;

      var block = (0, _model.getCurrentBlock)(editorState);
      if (command.indexOf('changetype:') == 0) {
        var newBlockType = command.split(':')[1];
        var currentBlockType = block.getType();
        if (currentBlockType == 'atomic' || currentBlockType == 'media') {
          return false;
        }
        if (currentBlockType == 'blockquote' && newBlockType == 'caption') {
          newBlockType = 'block-quote-caption';
        } else if (currentBlockType == 'block-quote-caption' && newBlockType == 'caption') {
          newBlockType = 'blockquote';
        }
        this.onChange(_draftJs.RichUtils.toggleBlockType(editorState, newBlockType));
        return true;
      }
      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
  }, {
    key: 'handleBeforeInput',
    value: function handleBeforeInput(str) {
      return this.props.beforeInput(this.state.editorState, str, this.onChange, this.props.stringToTypeMap);
    }
  }, {
    key: 'handleReturn',
    value: function handleReturn(e) {
      if (e.shiftKey) {
        this.setState({
          editorState: _draftJs.RichUtils.insertSoftNewline(this.state.editorState)
        });
        return true;
      }
      return false;
    }
  }, {
    key: '_toggleBlockType',
    value: function _toggleBlockType(blockType) {
      this.onChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
    }
  }, {
    key: '_toggleInlineStyle',
    value: function _toggleInlineStyle(inlineStyle) {
      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    }
  }, {
    key: 'toggleEdit',
    value: function toggleEdit(e) {
      this.setState({
        editorEnabled: !this.state.editorEnabled
      });
    }
  }, {
    key: 'loadSavedData',
    value: function loadSavedData() {
      var _this3 = this;

      var data = window.localStorage.getItem('editor');
      if (data === null) {
        console.log('No data found.');
        return;
      }
      try {
        var blockData = JSON.parse(data);
        console.log(blockData);
        this.setState({
          editorState: _draftJs.EditorState.push(this.state.editorState, (0, _draftJs.convertFromRaw)(blockData))
        }, function () {
          return _this3.refs.editor.focus();
        });
      } catch (e) {
        window.er = e;
        console.log(e);
        console.log('Could not load data.');
      }
    }
  }, {
    key: 'loadCustomData',
    value: function loadCustomData(data) {
      var _this4 = this;

      this.setState({
        editorState: _draftJs.EditorState.push(this.state.editorState, data)
      }, function () {
        return _this4.refs.editor.focus();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var editorState = _state.editorState;
      var showURLInput = _state.showURLInput;
      var editorEnabled = _state.editorEnabled;
      var urlValue = _state.urlValue;

      // console.log(this.props);

      global.editor = this;

      return _react2['default'].createElement(
        'div',
        { className: 'RichEditor-root' },
        _react2['default'].createElement(
          'div',
          { className: 'RichEditor-editor' },
          _react2['default'].createElement(_draftJs.Editor, {
            ref: 'editor',
            editorState: editorState,
            blockRendererFn: _componentsCustomrenderer2['default'],
            blockStyleFn: getBlockStyle,
            onChange: this.onChange,
            onTab: this.onTab,
            blockRenderMap: this.props.blockRenderMap,
            handleKeyCommand: this.handleKeyCommand,
            handleBeforeInput: this.handleBeforeInput,
            handleDroppedFiles: this.handleDroppedFiles,
            handleReturn: this.handleReturn,
            customStyleMap: styleMap,
            readOnly: !editorEnabled,
            keyBindingFn: _utilKeybinding2['default'],
            placeholder: 'Write your story',
            spellCheck: false }),
          editorEnabled ? _react2['default'].createElement(_componentsAddbutton2['default'], { editorState: editorState, addMedia: this.addMedia }) : null,
          _react2['default'].createElement(_componentsToolbar2['default'], {
            ref: 'toolbar',
            editorState: editorState,
            toggleBlockType: this.toggleBlockType,
            toggleInlineStyle: this.toggleInlineStyle,
            editorEnabled: editorEnabled,
            setLink: this.setLink,
            focus: this.focus })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'editor-action' },
          _react2['default'].createElement(
            'button',
            { onClick: this.logData },
            'Log State'
          ),
          _react2['default'].createElement(
            'button',
            { onClick: this.toggleEdit },
            'Toggle Edit'
          )
        )
      );
    }
  }]);

  return DraftBlockEditor;
})(_react2['default'].Component);

var renderMap = (0, _immutable.Map)();

DraftBlockEditor.defaultProps = {
  beforeInput: _utilBeforeinput2['default'],
  stringToTypeMap: _utilBeforeinput.StringToTypeMap,
  blockRenderMap: _modelRendermap2['default']
};

exports['default'] = DraftBlockEditor;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./components/addbutton":2,"./components/customrenderer":7,"./components/entities/link":8,"./components/toolbar":11,"./model":13,"./model/rendermap":14,"./util":16,"./util/beforeinput":15,"./util/keybinding":17,"draft-js":undefined,"immutable":undefined}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _draftJs = require('draft-js');

var getCurrentBlock = function getCurrentBlock(editorState) {
  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var block = contentState.getBlockForKey(selectionState.getStartKey());
  return block;
};

exports.getCurrentBlock = getCurrentBlock;
var addNewBlock = function addNewBlock(editorState) {
  var newType = arguments.length <= 1 || arguments[1] === undefined ? 'unstyled' : arguments[1];

  var selectionState = editorState.getSelection();
  if (!selectionState.isCollapsed()) {
    console.log('selection not collapsed');
    return editorState;
  }
  var contentState = editorState.getCurrentContent();
  var key = selectionState.getStartKey();
  var blockMap = contentState.getBlockMap();
  var currentBlock = getCurrentBlock(editorState);
  if (!currentBlock) {
    console.log('no current block');
    return editorState;
  }
  if (currentBlock.getLength() == 0) {
    if (currentBlock.getType() == newType) {
      console.log('same block types');
      return editorState;
    }
    var newBlock = currentBlock.merge({
      type: newType
    });
    var newContentState = contentState.merge({
      blockMap: blockMap.set(key, newBlock),
      selectionAfter: selectionState
    });
    return _draftJs.EditorState.push(editorState, newContentState, 'change-block-type');
  } else {}
  console.log('block length > 0');
  return editorState;
};

exports.addNewBlock = addNewBlock;
var resetBlockWithType = function resetBlockWithType(editorState) {
  var newType = arguments.length <= 1 || arguments[1] === undefined ? 'unstyled' : arguments[1];

  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();
  var key = selectionState.getStartKey();
  var blockMap = contentState.getBlockMap();
  var block = blockMap.get(key);
  var newText = "";
  var text = block.getText();
  if (block.getLength() >= 2) {
    newText = text.substr(1);
  }
  var newBlock = block.merge({
    text: newText,
    type: newType
  });
  var newContentState = contentState.merge({
    blockMap: blockMap.set(key, newBlock),
    selectionAfter: selectionState.merge({
      anchorOffset: 0,
      focusOffset: 0
    })
  });
  return _draftJs.EditorState.push(editorState, newContentState, 'change-block-type');
};
exports.resetBlockWithType = resetBlockWithType;

},{"draft-js":undefined}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _immutable = require('immutable');

var _draftJs = require('draft-js');

var RenderMap = (0, _immutable.Map)({
  unstyled: {
    element: 'div'
  },
  caption: {
    element: 'cite'
  },
  'block-quote-caption': {
    element: 'blockquote'
  }
}).merge(_draftJs.DefaultDraftBlockRenderMap);

exports['default'] = RenderMap;
module.exports = exports['default'];

},{"draft-js":undefined,"immutable":undefined}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _modelIndex = require('../model/index');

var _ramda = require('ramda');

var indexedForEach = (0, _ramda.addIndex)(_ramda.forEach);

var StringToTypeMap = {
  '--': 'blockquote:block-quote-caption:caption',
  '//': 'blockquote',
  '""': 'blockquote',
  '\'\'': 'blockquote',
  '*.': 'unordered-list-item',
  '1.': 'ordered-list-item',
  '##': 'header-two',
  '==': 'unstyled'
};

exports.StringToTypeMap = StringToTypeMap;

exports['default'] = function (editorState, str, callback) {
  var mapping = arguments.length <= 3 || arguments[3] === undefined ? StringToTypeMap : arguments[3];

  var selection = editorState.getSelection();
  var block = (0, _modelIndex.getCurrentBlock)(editorState);
  var blockType = block.getType();
  var blockLength = block.getLength();

  if (selection.getAnchorOffset() > 1 || blockLength > 1) {
    return false;
  }
  var blockTo = mapping[block.getText()[0] + str];
  if (!blockTo) {
    return false;
  }
  var finalType = blockTo.split(':');
  if (finalType.length < 1 || finalType.length > 3) {
    return false;
  }
  var fType = finalType[0];

  {
    if (blockType === (0, _ramda.last)(finalType)) {
      return false;
    }
    fType = (0, _ramda.last)(finalType);

    indexedForEach(function (type, index, typeList) {
      if (blockType === type) {
        fType = typeList[index + 1];
      }
    }, (0, _ramda.dropLast)(1, finalType));
  }

  // if (finalType.length == 1) {
  //   if (blockType == finalType[0]) {
  //     return false;
  //   }
  // } else if (finalType.length == 2) {
  //   if (blockType == finalType[1]) {
  //     return false;
  //   }
  //   if (blockType == finalType[0]) {
  //     fType = finalType[1];
  //   }
  // } else if (finalType.length == 3) {
  //   if (blockType == finalType[2]) {
  //     return false;
  //   }
  //   if (blockType == finalType[0]) {
  //     fType = finalType[1];
  //   } else {
  //     fType = finalType[2];
  //   }
  // }

  callback((0, _modelIndex.resetBlockWithType)(editorState, fType));
  return true;
};

},{"../model/index":13,"ramda":undefined}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var getSelectionRect = function getSelectionRect(selected) {
  var _rect = selected.getRangeAt(0).getBoundingClientRect();
  var rect = _rect && _rect.top ? _rect : selected.getRangeAt(0).getClientRects()[0]; //selected.getRangeAt(0).getBoundingClientRect()
  if (!rect) {
    if (selected.anchorNode && selected.anchorNode.getBoundingClientRect) {
      rect = selected.anchorNode.getBoundingClientRect();
      rect.isEmptyline = true;
    } else {
      return null;
    }
  }
  return rect;
};

exports.getSelectionRect = getSelectionRect;
// export const getSelectedNode = (selection) => {};

var getSelection = function getSelection(root) {
  var t = null;
  if (root.getSelection) {
    t = root.getSelection();
  } else if (root.document.getSelection) {
    t = root.document.getSelection();
  } else if (root.document.selection) {
    t = root.document.selection.createRange().text;
  }
  return t;
};

exports.getSelection = getSelection;
var getSelectedBlockNode = function getSelectedBlockNode(root) {
  var selection = root.getSelection();
  if (selection.rangeCount == 0) {
    return null;
  }
  window.sel = selection;
  var node = selection.getRangeAt(0).startContainer;
  // console.log(node);
  do {
    if (node.getAttribute && node.getAttribute('data-block') === 'true') {
      return node;
    }
    node = node.parentNode;
    // console.log(node);
  } while (node !== null);
  return null;
};
exports.getSelectedBlockNode = getSelectedBlockNode;

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _draftJs = require('draft-js');

var hasCommandModifier = _draftJs.KeyBindingUtil.hasCommandModifier;

exports['default'] = function (e) {
  if (hasCommandModifier(e) && e.keyCode == 83) {
    return 'editor-save';
  }
  if (e.altKey === true) {
    if (e.shiftKey === true) {
      switch (e.keyCode) {
        // Alt + Shift + A
        case 65:
          return 'add-new-block';
        // Alt + Shift + D
        case 68:
          return 'load-saved-data';
        case 69:
          return 'toggle-edit-mode';
        default:
          return (0, _draftJs.getDefaultKeyBinding)(e);
      }
    }
    switch (e.keyCode) {
      // 1
      case 49:
        return 'changetype:ordered-list-item';
      // @
      case 50:
        return 'showlinkinput';
      // #
      case 51:
        return 'changetype:header-three';
      // *
      case 56:
        return 'changetype:unordered-list-item';

      //S
      // case 83: return 'editor-save';
      // = +
      // case 187: return 'add-new-block';
      // <
      case 188:
        return 'changetype:caption';
      // // -
      // case 189: return 'changetype:caption';
      // >
      case 190:
        return 'changetype:unstyled';
      // "
      case 222:
        return 'changetype:blockquote';

      default:
        return (0, _draftJs.getDefaultKeyBinding)(e);
    }
  }
  return (0, _draftJs.getDefaultKeyBinding)(e);
};

module.exports = exports['default'];

},{"draft-js":undefined}]},{},[1])(1)
});