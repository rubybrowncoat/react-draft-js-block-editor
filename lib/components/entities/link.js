'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLinkEntities = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findLinkEntities = exports.findLinkEntities = function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'LINK';
  }, callback);
};

exports.default = function (props) {
  var _Entity$get$getData = _draftJs.Entity.get(props.entityKey).getData();

  var url = _Entity$get$getData.url;

  return _react2.default.createElement(
    'a',
    { className: 'draft-link hint--bottom', href: url, target: '_blank' },
    props.children
  );
};