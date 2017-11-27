'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Display = require('./Display');

var _Display2 = _interopRequireDefault(_Display);

var _styles = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function Video(props) {
  return _react2.default.createElement(
    _styles.MuiThemeProvider,
    { theme: (0, _styles.createMuiTheme)() },
    _react2.default.createElement(_Display2.default, props)
  );
};
exports.default = Video;
//# sourceMappingURL=index.js.map