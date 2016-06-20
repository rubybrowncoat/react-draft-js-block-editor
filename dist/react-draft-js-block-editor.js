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

var AddButton = (function (_React$Component) {
  _inherits(AddButton, _React$Component);

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
  // componentWillReceiveProps(newProps) {
  //   const { editorState } = newProps;
  //   const contentState = editorState.getCurrentContent();
  //   const selectionState = editorState.getSelection();
  //   if (!selectionState.isCollapsed() || selectionState.anchorKey != selectionState.focusKey) {
  //     // console.log('no sel');
  //     this.hideBlock();
  //     return;
  //   }
  //   const block = contentState.getBlockForKey(selectionState.anchorKey);
  //   const bkey = block.getKey();
  //   if (block.getLength() > 0) {
  //     this.hideBlock();
  //     return;
  //   }
  //   if (block.getType() !== this.blockType) {
  //     this.blockType = block.getType();
  //     if (block.getLength() == 0) {
  //       setTimeout(this.findNode, 0);
  //     }
  //     return;
  //   }
  //   if (this.blockKey === bkey) {
  //     // console.log('block exists');
  //     if (block.getLength() > 0) {
  //       this.hideBlock();
  //     } else {
  //       this.setState({
  //         visible: true
  //       });
  //     }
  //     return;
  //   }
  //   this.blockKey = bkey;
  //   if (block.getLength() > 0) {
  //     // console.log('no len');
  //     this.hideBlock();
  //     return;
  //   }
  //   setTimeout(this.findNode, 0);
  // }

  // Show + button regardless of block length

  _createClass(AddButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var editorState = newProps.editorState;

      var contentState = editorState.getCurrentContent();
      var selectionState = editorState.getSelection();
      if (!selectionState.isCollapsed() || selectionState.anchorKey != selectionState.focusKey) {
        this.hideBlock();
        return;
      }
      var block = contentState.getBlockForKey(selectionState.anchorKey);
      var bkey = block.getKey();
      if (block.getType() !== this.blockType) {
        this.blockType = block.getType();
        setTimeout(this.findNode, 0);
        return;
      }
      if (this.blockKey === bkey) {
        this.setState({
          visible: true
        });
        return;
      }
      this.blockKey = bkey;
      setTimeout(this.findNode, 0);
    }
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
        // console.log('Node exists');
        return;
      }
      if (!node) {
        // console.log('no node');
        this.setState({
          visible: false
        });
        return;
      }
      var rect = node.getBoundingClientRect();
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
          { onClick: this.props.addMedia, className: 'add-button', style: this.state.style },
          '+'
        );
      }
      return null;
    }
  }]);

  return AddButton;
})(_react2['default'].Component);

exports['default'] = AddButton;
;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../util":17}],3:[function(require,module,exports){
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

exports['default'] = function (props) {
  var editorState = props.editorState;

  // const selection = editorState.getSelection();
  var blockType = _draftJs.RichUtils.getCurrentBlockType(editorState);

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
},{"../model/index":13,"../util/index":17,"./blocktoolbar":6,"./inlinetoolbar":9,"draft-js":undefined,"react-dom":undefined}],12:[function(require,module,exports){
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

var _utilExporter = require('./util/exporter');

var _utilExporter2 = _interopRequireDefault(_utilExporter);

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

var MyEditor = (function (_React$Component) {
  _inherits(MyEditor, _React$Component);

  function MyEditor(props) {
    var _this = this;

    _classCallCheck(this, MyEditor);

    _get(Object.getPrototypeOf(MyEditor.prototype), 'constructor', this).call(this, props);

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

  _createClass(MyEditor, [{
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
      console.log('HTML', (0, _utilExporter2['default'])(this.state.editorState.getCurrentContent()));
      console.log((0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent()));

      console.log(this.state.editorState.getSelection().toJS());
      window.sel = this.state.editorState.getSelection();
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
    key: 'render',
    value: function render() {
      var _state = this.state;
      var editorState = _state.editorState;
      var showURLInput = _state.showURLInput;
      var editorEnabled = _state.editorEnabled;
      var urlValue = _state.urlValue;

      // console.log(this.props);
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

  return MyEditor;
})(_react2['default'].Component);

var renderMap = (0, _immutable.Map)();

MyEditor.defaultProps = {
  beforeInput: _utilBeforeinput2['default'],
  stringToTypeMap: _utilBeforeinput.StringToTypeMap,
  blockRenderMap: _modelRendermap2['default']
};

exports['default'] = MyEditor;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./components/addbutton":2,"./components/customrenderer":7,"./components/entities/link":8,"./components/toolbar":11,"./model":13,"./model/rendermap":14,"./util":17,"./util/beforeinput":15,"./util/exporter":16,"./util/keybinding":18,"draft-js":undefined,"immutable":undefined}],13:[function(require,module,exports){
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

  console.log(str, blockType, blockLength);
  console.log(block.getText()[0] + str);

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

  console.log(fType);

  callback((0, _modelIndex.resetBlockWithType)(editorState, fType));
  return true;
};

},{"../model/index":13,"ramda":undefined}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _ENTITY_ATTR_MAP, _DATA_TO_ATTR;

exports['default'] = stateToHTML;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _draftJs = require('draft-js');

var _draftJsUtils = require('draft-js-utils');

var BOLD = _draftJsUtils.INLINE_STYLE.BOLD;
var CODE = _draftJsUtils.INLINE_STYLE.CODE;
var ITALIC = _draftJsUtils.INLINE_STYLE.ITALIC;
var STRIKETHROUGH = _draftJsUtils.INLINE_STYLE.STRIKETHROUGH;
var UNDERLINE = _draftJsUtils.INLINE_STYLE.UNDERLINE;

var INDENT = '  ';
var BREAK = '<br>';

// Map entity data to element attributes.
var ENTITY_ATTR_MAP = (_ENTITY_ATTR_MAP = {}, _defineProperty(_ENTITY_ATTR_MAP, _draftJsUtils.ENTITY_TYPE.LINK, { url: 'href', rel: 'rel', target: 'target', title: 'title', className: 'class' }), _defineProperty(_ENTITY_ATTR_MAP, _draftJsUtils.ENTITY_TYPE.IMAGE, { src: 'src', height: 'height', width: 'width', alt: 'alt', className: 'class' }), _ENTITY_ATTR_MAP);

// Map entity data to element attributes.
var DATA_TO_ATTR = (_DATA_TO_ATTR = {}, _defineProperty(_DATA_TO_ATTR, _draftJsUtils.ENTITY_TYPE.LINK, function (entityType, entity) {
  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
  var data = entity.getData();
  var attrs = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(data)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var dataKey = _step.value;

      var dataValue = data[dataKey];
      if (attrMap.hasOwnProperty(dataKey)) {
        var attrKey = attrMap[dataKey];
        attrs[attrKey] = dataValue;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return attrs;
}), _defineProperty(_DATA_TO_ATTR, _draftJsUtils.ENTITY_TYPE.IMAGE, function (entityType, entity) {
  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
  var data = entity.getData();
  var attrs = {};
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Object.keys(data)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var dataKey = _step2.value;

      var dataValue = data[dataKey];
      if (attrMap.hasOwnProperty(dataKey)) {
        var attrKey = attrMap[dataKey];
        attrs[attrKey] = dataValue;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
        _iterator2['return']();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return attrs;
}), _DATA_TO_ATTR);

// The reason this returns an array is because a single block might get wrapped
// in two tags.
function getTags(blockType) {
  switch (blockType) {
    case _draftJsUtils.BLOCK_TYPE.HEADER_ONE:
      return ['h1'];
    case _draftJsUtils.BLOCK_TYPE.HEADER_TWO:
      return ['h2'];
    case _draftJsUtils.BLOCK_TYPE.HEADER_THREE:
      return ['h3'];
    case _draftJsUtils.BLOCK_TYPE.HEADER_FOUR:
      return ['h4'];
    case _draftJsUtils.BLOCK_TYPE.HEADER_FIVE:
      return ['h5'];
    case _draftJsUtils.BLOCK_TYPE.HEADER_SIX:
      return ['h6'];
    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
      return ['li'];
    case _draftJsUtils.BLOCK_TYPE.BLOCKQUOTE:
      return ['blockquote'];
    case _draftJsUtils.BLOCK_TYPE.CODE:
      return ['pre', 'code'];
    default:
      return ['p'];
  }
}

function getWrapperTag(blockType) {
  switch (blockType) {
    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
      return 'ul';
    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
      return 'ol';
    default:
      return null;
  }
}

var MarkupGenerator = (function () {
  function MarkupGenerator(contentState) {
    _classCallCheck(this, MarkupGenerator);

    this.contentState = contentState;
  }

  _createClass(MarkupGenerator, [{
    key: 'generate',
    value: function generate() {
      this.output = [];
      this.blocks = this.contentState.getBlocksAsArray();
      this.totalBlocks = this.blocks.length;
      this.currentBlock = 0;
      this.indentLevel = 0;
      this.wrapperTag = null;
      while (this.currentBlock < this.totalBlocks) {
        this.processBlock();
      }
      this.closeWrapperTag();
      return this.output.join('').trim();
    }
  }, {
    key: 'processBlock',
    value: function processBlock() {
      var block = this.blocks[this.currentBlock];
      var blockType = block.getType();
      var newWrapperTag = getWrapperTag(blockType);
      if (this.wrapperTag !== newWrapperTag) {
        if (this.wrapperTag) {
          this.closeWrapperTag();
        }
        if (newWrapperTag) {
          this.openWrapperTag(newWrapperTag);
        }
      }
      this.indent();
      this.writeStartTag(blockType);
      this.output.push(this.renderBlockContent(block));
      // Look ahead and see if we will nest list.
      var nextBlock = this.getNextBlock();
      if (canHaveDepth(blockType) && nextBlock && nextBlock.getDepth() === block.getDepth() + 1) {
        this.output.push('\n');
        // This is a litle hacky: temporarily stash our current wrapperTag and
        // render child list(s).
        var thisWrapperTag = this.wrapperTag;
        this.wrapperTag = null;
        this.indentLevel += 1;
        this.currentBlock += 1;
        this.processBlocksAtDepth(nextBlock.getDepth());
        this.wrapperTag = thisWrapperTag;
        this.indentLevel -= 1;
        this.indent();
      } else {
        this.currentBlock += 1;
      }
      this.writeEndTag(blockType);
    }
  }, {
    key: 'processBlocksAtDepth',
    value: function processBlocksAtDepth(depth) {
      var block = this.blocks[this.currentBlock];
      while (block && block.getDepth() === depth) {
        this.processBlock();
        block = this.blocks[this.currentBlock];
      }
      this.closeWrapperTag();
    }
  }, {
    key: 'getNextBlock',
    value: function getNextBlock() {
      return this.blocks[this.currentBlock + 1];
    }
  }, {
    key: 'writeStartTag',
    value: function writeStartTag(blockType) {
      var tags = getTags(blockType);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = tags[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var tag = _step3.value;

          this.output.push('<' + tag + '>');
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
            _iterator3['return']();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'writeEndTag',
    value: function writeEndTag(blockType) {
      var tags = getTags(blockType);
      if (tags.length === 1) {
        this.output.push('</' + tags[0] + '>\n');
      } else {
        var output = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = tags[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var tag = _step4.value;

            output.unshift('</' + tag + '>');
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4['return']) {
              _iterator4['return']();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        this.output.push(output.join('') + '\n');
      }
    }
  }, {
    key: 'openWrapperTag',
    value: function openWrapperTag(wrapperTag) {
      this.wrapperTag = wrapperTag;
      this.indent();
      this.output.push('<' + wrapperTag + '>\n');
      this.indentLevel += 1;
    }
  }, {
    key: 'closeWrapperTag',
    value: function closeWrapperTag() {
      if (this.wrapperTag) {
        this.indentLevel -= 1;
        this.indent();
        this.output.push('</' + this.wrapperTag + '>\n');
        this.wrapperTag = null;
      }
    }
  }, {
    key: 'indent',
    value: function indent() {
      this.output.push(INDENT.repeat(this.indentLevel));
    }
  }, {
    key: 'renderBlockContent',
    value: function renderBlockContent(block) {
      var blockType = block.getType();
      var text = block.getText();
      if (text === '') {
        // Prevent element collapse if completely empty.
        return BREAK;
      }
      text = this.preserveWhitespace(text);
      var charMetaList = block.getCharacterList();
      var entityPieces = (0, _draftJsUtils.getEntityRanges)(text, charMetaList);
      return entityPieces.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var entityKey = _ref2[0];
        var stylePieces = _ref2[1];

        var content = stylePieces.map(function (_ref3) {
          var _ref32 = _slicedToArray(_ref3, 2);

          var text = _ref32[0];
          var style = _ref32[1];

          var content = encodeContent(text);
          // These are reverse alphabetical by tag name.
          if (style.has(BOLD)) {
            content = '<strong>' + content + '</strong>';
          }
          if (style.has(UNDERLINE)) {
            content = '<ins>' + content + '</ins>';
          }
          if (style.has(ITALIC)) {
            content = '<em>' + content + '</em>';
          }
          if (style.has(STRIKETHROUGH)) {
            content = '<del>' + content + '</del>';
          }
          if (style.has(CODE)) {
            // If our block type is CODE then we are already wrapping the whole
            // block in a `<code>` so don't wrap inline code elements.
            content = blockType === _draftJsUtils.BLOCK_TYPE.CODE ? content : '<code>' + content + '</code>';
          }
          return content;
        }).join('');
        var entity = entityKey ? _draftJs.Entity.get(entityKey) : null;
        // Note: The `toUpperCase` below is for compatability with some libraries that use lower-case for image blocks.
        var entityType = entity == null ? null : entity.getType().toUpperCase();
        if (entityType != null && entityType === _draftJsUtils.ENTITY_TYPE.LINK) {
          var attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
          var strAttrs = stringifyAttrs(attrs);
          return '<a' + strAttrs + '>' + content + '</a>';
        } else if (entityType != null && entityType === _draftJsUtils.ENTITY_TYPE.IMAGE) {
          var attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
          var strAttrs = stringifyAttrs(attrs);
          return '<img' + strAttrs + '/>';
        } else {
          return content;
        }
      }).join('');
    }
  }, {
    key: 'preserveWhitespace',
    value: function preserveWhitespace(text) {
      var length = text.length;
      // Prevent leading/trailing/consecutive whitespace collapse.
      var newText = new Array(length);
      for (var i = 0; i < length; i++) {
        if (text[i] === ' ' && (i === 0 || i === length - 1 || text[i - 1] === ' ')) {
          newText[i] = '\xA0';
        } else {
          newText[i] = text[i];
        }
      }
      return newText.join('');
    }
  }]);

  return MarkupGenerator;
})();

function stringifyAttrs(attrs) {
  if (attrs == null) {
    return '';
  }
  var parts = [];
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = Object.keys(attrs)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var attrKey = _step5.value;

      var attrValue = attrs[attrKey];
      if (attrValue != null) {
        parts.push(' ' + attrKey + '="' + encodeAttr(attrValue + '') + '"');
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5['return']) {
        _iterator5['return']();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return parts.join('');
}

function canHaveDepth(blockType) {
  switch (blockType) {
    case _draftJsUtils.BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case _draftJsUtils.BLOCK_TYPE.ORDERED_LIST_ITEM:
      return true;
    default:
      return false;
  }
}

function encodeContent(text) {
  return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('\xA0').join('&nbsp;').split('\n').join(BREAK + '\n');
}

function encodeAttr(text) {
  return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
}

function stateToHTML(content) {
  return new MarkupGenerator(content).generate();
}

module.exports = exports['default'];

},{"draft-js":undefined,"draft-js-utils":undefined}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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