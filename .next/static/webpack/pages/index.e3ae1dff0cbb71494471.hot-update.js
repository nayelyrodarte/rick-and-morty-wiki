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
    color: 'white'
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
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
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
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
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
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0dXNCYXIuanMiXSwibmFtZXMiOlsiU3RhdHVzQmFyU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJjb2xvciIsIlN0YXR1c0JhciIsInN0YXR1cyIsInN0eWxlcyIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0Msc0VBQVUsQ0FBQztBQUNqQ0MsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRTtBQURIO0FBRDJCLENBQUQsQ0FBbEM7O0FBTUEsU0FBU0MsU0FBVCxPQUErQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUM3QixNQUFNQyxNQUFNLEdBQUdOLGVBQWUsRUFBOUI7O0FBRUEsVUFBUUssTUFBUjtBQUNFLFNBQUssT0FBTDtBQUNFLDBCQUNFO0FBQUssaUJBQVMsRUFBRUMsTUFBTSxDQUFDSixJQUF2QjtBQUE2QixhQUFLLEVBQUU7QUFBRUsseUJBQWUsRUFBRTtBQUFuQixTQUFwQztBQUFBLCtCQUNFO0FBQUEsb0JBQUlGO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjs7QUFLRixTQUFLLE1BQUw7QUFDRSwwQkFDRTtBQUFLLGlCQUFTLEVBQUVDLE1BQU0sQ0FBQ0osSUFBdkI7QUFBNkIsYUFBSyxFQUFFO0FBQUVLLHlCQUFlLEVBQUU7QUFBbkIsU0FBcEM7QUFBQSwrQkFDRTtBQUFBLG9CQUFJRjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7O0FBS0YsU0FBSyxTQUFMO0FBQ0UsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFQyxNQUFNLENBQUNKLElBQXZCO0FBQTZCLGFBQUssRUFBRTtBQUFFSyx5QkFBZSxFQUFFO0FBQW5CLFNBQXBDO0FBQUEsK0JBQ0U7QUFBQSxvQkFBSUY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBZEo7QUFvQkQ7O0tBdkJRRCxTO0FBeUJNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lM2FlMWRmZjBjYmI3MTQ5NDQ3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5cclxuY29uc3QgU3RhdHVzQmFyU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBTdGF0dXNCYXIoeyBzdGF0dXMgfSkge1xyXG4gIGNvbnN0IHN0eWxlcyA9IFN0YXR1c0JhclN0eWxlcygpO1xyXG5cclxuICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgY2FzZSAnQWxpdmUnOlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nIH19PlxyXG4gICAgICAgICAgPHA+e3N0YXR1c308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICBjYXNlICdEZWFkJzpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JlZCcgfX0+XHJcbiAgICAgICAgICA8cD57c3RhdHVzfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIGNhc2UgJ3Vua25vd24nOlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncHVycGxlJyB9fT5cclxuICAgICAgICAgIDxwPntzdGF0dXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9