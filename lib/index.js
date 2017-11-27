'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component = require('./Component');

var _Component2 = _interopRequireDefault(_Component);

var _playArrow = require('material-ui/svg-icons/av/play-arrow');

var _playArrow2 = _interopRequireDefault(_playArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Component: _Component2.default,
  name: 'ory/editor/core/content/video',
  version: '0.0.1',
  IconComponent: _react2.default.createElement(_playArrow2.default, null),
  text: 'Video',
  description: 'Include videos from Vimeo or YouTube.',
  isInlineable: true,

  handleRemoveHotKey: function handleRemoveHotKey(_, __) {
    return Promise.reject();
  },
  handleFocusPreviousHotKey: function handleFocusPreviousHotKey(_, __) {
    return Promise.reject();
  },
  handleFocusNextHotKey: function handleFocusNextHotKey(_, __) {
    return Promise.reject();
  },

  // We need this because otherwise we lose hotkey focus on elements like spoilers.
  // This could probably be solved in an easier way by listening to window.document?
  //
  handleFocus: function handleFocus(props, source, ref) {
    if (!ref) {
      return;
    }
    setTimeout(function () {
      return ref.focus();
    });
  }
};
/* eslint-disable no-duplicate-imports */
//# sourceMappingURL=index.js.map