webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainContainer.js":
/*!*************************************!*\
  !*** ./components/MainContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\MainContainer.js";




var logoStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    width: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'black'
  },
  subHeader: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    margin: '2em'
  }
});

function MainContainer(props) {
  var styles = logoStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Rick & Morty Wiki"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: styles.root,
      src: "/rick-and-morty-logo.png",
      alt: "Rick and Morty logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: styles.subHeader,
      children: ["Your interdimensional source of wisdom.", ' ']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_c = MainContainer;
/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

var _c;

$RefreshReg$(_c, "MainContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbImxvZ29TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIndpZHRoIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmQiLCJzdWJIZWFkZXIiLCJ0ZXh0QWxpZ24iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsIm1hcmdpbiIsIk1haW5Db250YWluZXIiLCJwcm9wcyIsInN0eWxlcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0Msc0VBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRSxLQURIO0FBRUpDLFdBQU8sRUFBRSxPQUZMO0FBR0pDLGNBQVUsRUFBRSxNQUhSO0FBSUpDLGVBQVcsRUFBRSxNQUpUO0FBS0pDLGNBQVUsRUFBRTtBQUxSLEdBRHNCO0FBUTVCQyxXQUFTLEVBQUU7QUFDVEMsYUFBUyxFQUFFLFFBREY7QUFFVEMsY0FBVSxFQUFFLFFBRkg7QUFHVEMsY0FBVSxFQUFFLE1BSEg7QUFJVEMsVUFBTSxFQUFFO0FBSkM7QUFSaUIsQ0FBRCxDQUE3Qjs7QUFnQkEsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsTUFBTUMsTUFBTSxHQUFHZixVQUFVLEVBQXpCO0FBQ0Esc0JBQ0UscUVBQUMsMkRBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFDRSxlQUFTLEVBQUVlLE1BQU0sQ0FBQ2IsSUFEcEI7QUFFRSxTQUFHLEVBQUMsMEJBRk47QUFHRSxTQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFTRTtBQUFHLGVBQVMsRUFBRWEsTUFBTSxDQUFDUCxTQUFyQjtBQUFBLDREQUMwQyxHQUQxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixFQVlHTSxLQUFLLENBQUNFLFFBWlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0tBbEJRSCxhO0FBb0JNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jY2NlM2E1MTU3NGYxMzVhYmI1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcblxyXG5jb25zdCBsb2dvU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxyXG4gIH0sXHJcbiAgc3ViSGVhZGVyOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBtYXJnaW46ICcyZW0nLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gTWFpbkNvbnRhaW5lcihwcm9wcykge1xyXG4gIGNvbnN0IHN0eWxlcyA9IGxvZ29TdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJpY2sgJiBNb3J0eSBXaWtpPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH1cclxuICAgICAgICBzcmM9Jy9yaWNrLWFuZC1tb3J0eS1sb2dvLnBuZydcclxuICAgICAgICBhbHQ9J1JpY2sgYW5kIE1vcnR5IGxvZ28nXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN1YkhlYWRlcn0+XHJcbiAgICAgICAgWW91ciBpbnRlcmRpbWVuc2lvbmFsIHNvdXJjZSBvZiB3aXNkb20ueycgJ31cclxuICAgICAgPC9wPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9