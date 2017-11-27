'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PlayArrow = require('material-ui-icons/PlayArrow');

var _PlayArrow2 = _interopRequireDefault(_PlayArrow);

var _common = require('../common.js');

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Display = function Display(_ref) {
  var src = _ref.state.src,
      readOnly = _ref.readOnly;
  return src ? _react2.default.createElement(
    'div',
    { style: { position: 'relative', height: 0, paddingBottom: '65.25%' } },
    readOnly ? null : _react2.default.createElement('div', {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10
      }
    }),
    _react2.default.createElement(_reactPlayer2.default, {
      url: src,
      height: '100%',
      width: '100%',
      controls: true,
      config: {
        youtube: {
          playerVars: {
            rel: 0,
            modestbranding: 1
          }
        }
      },
      style: {
        position: 'absolute',
        width: '100% !important',
        height: '100% !important'
      }
    })
  ) : _react2.default.createElement(
    'div',
    { className: 'ory-plugins-content-video-placeholder' },
    _react2.default.createElement(_PlayArrow2.default, { style: _common.iconStyle })
  );
};

exports.default = Display;
//# sourceMappingURL=index.js.map