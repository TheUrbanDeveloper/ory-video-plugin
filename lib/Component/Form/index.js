'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Display = require('../Display');

var _Display2 = _interopRequireDefault(_Display);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _oryEditorUi = require('ory-editor-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleChange = function handleChange(onChange) {
  return function (e) {
    var target = e.target;
    if (target instanceof HTMLInputElement) {
      onChange({ src: target.value });
      return;
    }
  };
};

var Form = function Form(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Display2.default, props),
    _react2.default.createElement(
      _oryEditorUi.BottomToolbar,
      { open: props.focused },
      _react2.default.createElement(_TextField2.default, {
        hintText: 'https://www.youtube.com/watch?v=ER97mPHhgtM',
        floatingLabelText: 'Video location (YouTube / Vimeo)',
        inputStyle: { color: 'white' },
        floatingLabelStyle: { color: 'white' },
        hintStyle: { color: 'grey' },
        style: { width: '512px' },
        value: props.state.src || '',
        onChange: handleChange(props.onChange)
      })
    )
  );
};

exports.default = Form;
//# sourceMappingURL=index.js.map