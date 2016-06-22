'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _draftJs = require('draft-js');

var _immutable = require('immutable');

var _addbutton = require('./components/addbutton');

var _addbutton2 = _interopRequireDefault(_addbutton);

var _toolbar = require('./components/toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _customrenderer = require('./components/customrenderer');

var _customrenderer2 = _interopRequireDefault(_customrenderer);

var _util = require('./util');

var _rendermap = require('./model/rendermap');

var _rendermap2 = _interopRequireDefault(_rendermap);

var _keybinding = require('./util/keybinding');

var _keybinding2 = _interopRequireDefault(_keybinding);

var _beforeinput = require('./util/beforeinput');

var _beforeinput2 = _interopRequireDefault(_beforeinput);

var _model = require('./model');

var _link = require('./components/entities/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var DraftBlockEditor = function (_React$Component) {
  (0, _inherits3.default)(DraftBlockEditor, _React$Component);

  function DraftBlockEditor(props) {
    (0, _classCallCheck3.default)(this, DraftBlockEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DraftBlockEditor).call(this, props));

    _this.toggleBlockType = function (blockType) {
      _this.onChange(_draftJs.RichUtils.toggleBlockType(_this.state.editorState, blockType));
    };

    _this.toggleInlineStyle = function (inlineStyle) {
      _this.onChange(_draftJs.RichUtils.toggleInlineStyle(_this.state.editorState, inlineStyle));
    };

    _this.toggleEdit = function () {
      _this.setState({
        editorEnabled: !_this.state.editorEnabled
      });
    };

    var decorator = new _draftJs.CompositeDecorator([{
      strategy: _link.findLinkEntities,
      component: _link2.default
    }]);
    _this.state = {
      editorState: _draftJs.EditorState.createEmpty(decorator),
      showURLInput: false,
      editorEnabled: true,
      urlValue: ''
    };
    if (props.value) {
      _this.state.editorState = _draftJs.EditorState.push(_this.state.editorState, (0, _draftJs.convertFromRaw)(props.value));
    }
    _this.focus = function () {
      return _this.refs.editor.focus();
    };
    _this.onChange = function (editorState) {
      window.editorState = editorState;
      _this.setState({ editorState: editorState });
    };

    _this.onClick = function () {
      if (!_this.state.editorEnabled) {
        _this.setState({
          editorEnabled: true
        }, function () {
          _this.focus();
        });
      }
    };

    _this.logData = _this.logData.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onTab = _this.onTab.bind(_this);
    _this.handleKeyCommand = _this.handleKeyCommand.bind(_this);
    _this.handleBeforeInput = _this.handleBeforeInput.bind(_this);
    _this.handleReturn = _this.handleReturn.bind(_this);
    _this.loadSavedData = _this.loadSavedData.bind(_this);
    _this.setLink = _this.setLink.bind(_this);
    _this.addMedia = _this.addMedia.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DraftBlockEditor, [{
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
      var entityKey = _draftJs.Entity.create('YOUTUBE', 'IMMUTABLE', { src: src });
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
        window.localStorage['editor'] = (0, _stringify2.default)((0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent()));
        window.localStorage['tmp'] = (0, _stringify2.default)((0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent()));
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

      return _react2.default.createElement(
        'div',
        { className: 'RichEditor-root' },
        _react2.default.createElement(
          'div',
          { className: 'RichEditor-editor' },
          _react2.default.createElement(_draftJs.Editor, {
            ref: 'editor',
            editorState: editorState,
            blockRendererFn: _customrenderer2.default,
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
            keyBindingFn: _keybinding2.default,
            placeholder: 'Write your story',
            spellCheck: false
          }),
          editorEnabled ? _react2.default.createElement(_addbutton2.default, { editorState: editorState, addMedia: this.addMedia }) : null,
          _react2.default.createElement(_toolbar2.default, {
            ref: 'toolbar',
            editorState: editorState,
            toggleBlockType: this.toggleBlockType,
            toggleInlineStyle: this.toggleInlineStyle,
            editorEnabled: editorEnabled,
            setLink: this.setLink,
            focus: this.focus
          })
        )
      );
    }
  }]);
  return DraftBlockEditor;
}(_react2.default.Component);

var renderMap = (0, _immutable.Map)();

DraftBlockEditor.defaultProps = {
  beforeInput: _beforeinput2.default,
  stringToTypeMap: _beforeinput.StringToTypeMap,
  blockRenderMap: _rendermap2.default
};

exports.default = DraftBlockEditor;
module.exports = exports['default'];