"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _logo = _interopRequireDefault(require("./logo.svg"));

var _react = _interopRequireDefault(require("react"));

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  // return (
  //   <div className="App">
  //     <h1>Hi, I'm a React App</h1>
  //   </div>
  // );
  return _react["default"].createElement('div', {
    className: 'App'
  }, _react["default"].createElement('h1', null, 'Did this work?'));
}

var _default = App;
exports["default"] = _default;