webpackHotUpdate_N_E("pages/index",{

/***/ "./components/StatusBar.js":
/*!*********************************!*\
  !*** ./components/StatusBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\StatusBar.js";


var StatusBarStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    color: 'white',
    width: '60%',
    margin: 'auto'
  }
});

function StatusBar(_ref) {
  var status = _ref.status;
  var styles = StatusBarStyles();

  switch (status) {
    case 'Alive':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles.root,
        style: {
          backgroundColor: 'green'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this);

    case 'Dead':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles.root,
        style: {
          backgroundColor: 'red'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this);

    case 'unknown':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles.root,
        style: {
          backgroundColor: 'purple'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this);
  }
}

_c = StatusBar;
/* harmony default export */ __webpack_exports__["default"] = (StatusBar);

var _c;

$RefreshReg$(_c, "StatusBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0dXNCYXIuanMiXSwibmFtZXMiOlsiU3RhdHVzQmFyU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJjb2xvciIsIndpZHRoIiwibWFyZ2luIiwiU3RhdHVzQmFyIiwic3RhdHVzIiwic3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxzRUFBVSxDQUFDO0FBQ2pDQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE9BREg7QUFFSkMsU0FBSyxFQUFFLEtBRkg7QUFHSkMsVUFBTSxFQUFFO0FBSEo7QUFEMkIsQ0FBRCxDQUFsQzs7QUFRQSxTQUFTQyxTQUFULE9BQStCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzdCLE1BQU1DLE1BQU0sR0FBR1IsZUFBZSxFQUE5Qjs7QUFFQSxVQUFRTyxNQUFSO0FBQ0UsU0FBSyxPQUFMO0FBQ0UsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFQyxNQUFNLENBQUNOLElBQXZCO0FBQTZCLGFBQUssRUFBRTtBQUFFTyx5QkFBZSxFQUFFO0FBQW5CLFNBQXBDO0FBQUEsK0JBQ0U7QUFBQSxvQkFBSUY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGOztBQUtGLFNBQUssTUFBTDtBQUNFLDBCQUNFO0FBQUssaUJBQVMsRUFBRUMsTUFBTSxDQUFDTixJQUF2QjtBQUE2QixhQUFLLEVBQUU7QUFBRU8seUJBQWUsRUFBRTtBQUFuQixTQUFwQztBQUFBLCtCQUNFO0FBQUEsb0JBQUlGO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjs7QUFLRixTQUFLLFNBQUw7QUFDRSwwQkFDRTtBQUFLLGlCQUFTLEVBQUVDLE1BQU0sQ0FBQ04sSUFBdkI7QUFBNkIsYUFBSyxFQUFFO0FBQUVPLHlCQUFlLEVBQUU7QUFBbkIsU0FBcEM7QUFBQSwrQkFDRTtBQUFBLG9CQUFJRjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFkSjtBQW9CRDs7S0F2QlFELFM7QUF5Qk1BLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2MzNkOWI3N2E5OTdlMTE2NGM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcblxyXG5jb25zdCBTdGF0dXNCYXJTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnNjAlJyxcclxuICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gU3RhdHVzQmFyKHsgc3RhdHVzIH0pIHtcclxuICBjb25zdCBzdHlsZXMgPSBTdGF0dXNCYXJTdHlsZXMoKTtcclxuXHJcbiAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgIGNhc2UgJ0FsaXZlJzpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyB9fT5cclxuICAgICAgICAgIDxwPntzdGF0dXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgY2FzZSAnRGVhZCc6XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnIH19PlxyXG4gICAgICAgICAgPHA+e3N0YXR1c308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICBjYXNlICd1bmtub3duJzpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3B1cnBsZScgfX0+XHJcbiAgICAgICAgICA8cD57c3RhdHVzfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1c0JhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==