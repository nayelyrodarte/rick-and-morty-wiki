webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainContainer.js":
/*!*************************************!*\
  !*** ./components/MainContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");



var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\MainContainer.js",
    _makeStyles;





var logoStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])((_makeStyles = {
  root: {
    width: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_makeStyles, '@media (min-width:375px)', {
  width: '65%'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_makeStyles, "subHeader", {
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  margin: '1em'
}), _makeStyles));

function MainContainer(props) {
  var styles = logoStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: "Rick & Morty Wiki"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      className: styles.root,
      src: "/rick-and-morty-logo.png",
      alt: "Rick and Morty logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      className: styles.subHeader,
      children: ["Your interdimensional source of wisdom.", ' ']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbImxvZ29TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIndpZHRoIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwiTWFpbkNvbnRhaW5lciIsInByb3BzIiwic3R5bGVzIiwic3ViSGVhZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHNFQUFVO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLEtBREg7QUFFSkMsV0FBTyxFQUFFLE9BRkw7QUFHSkMsY0FBVSxFQUFFLE1BSFI7QUFJSkMsZUFBVyxFQUFFO0FBSlQ7QUFEcUIsMEdBTzFCLDBCQVAwQixFQU9HO0FBQzVCSCxPQUFLLEVBQUU7QUFEcUIsQ0FQSCx1SEFVaEI7QUFDVEksV0FBUyxFQUFFLFFBREY7QUFFVEMsWUFBVSxFQUFFLFFBRkg7QUFHVEMsWUFBVSxFQUFFLE1BSEg7QUFJVEMsUUFBTSxFQUFFO0FBSkMsQ0FWZ0IsZ0JBQTdCOztBQWtCQSxTQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM1QixNQUFNQyxNQUFNLEdBQUdiLFVBQVUsRUFBekI7QUFDQSxzQkFDRSxxRUFBQywyREFBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUNFLGVBQVMsRUFBRWEsTUFBTSxDQUFDWCxJQURwQjtBQUVFLFNBQUcsRUFBQywwQkFGTjtBQUdFLFNBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVNFO0FBQUcsZUFBUyxFQUFFVyxNQUFNLENBQUNDLFNBQXJCO0FBQUEsNERBQzBDLEdBRDFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLEVBWUdGLEtBQUssQ0FBQ0csUUFaVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7S0FsQlFKLGE7QUFvQk1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc3OTc5OTVkY2ZkMDIyYThlNmUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuXHJcbmNvbnN0IGxvZ29TdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzUwJScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICB9LFxyXG4gIFsnQG1lZGlhIChtaW4td2lkdGg6Mzc1cHgpJ106IHtcclxuICAgIHdpZHRoOiAnNjUlJyxcclxuICB9LFxyXG4gIHN1YkhlYWRlcjoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgbWFyZ2luOiAnMWVtJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIE1haW5Db250YWluZXIocHJvcHMpIHtcclxuICBjb25zdCBzdHlsZXMgPSBsb2dvU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5SaWNrICYgTW9ydHkgV2lraTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9XHJcbiAgICAgICAgc3JjPScvcmljay1hbmQtbW9ydHktbG9nby5wbmcnXHJcbiAgICAgICAgYWx0PSdSaWNrIGFuZCBNb3J0eSBsb2dvJ1xyXG4gICAgICAvPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdWJIZWFkZXJ9PlxyXG4gICAgICAgIFlvdXIgaW50ZXJkaW1lbnNpb25hbCBzb3VyY2Ugb2Ygd2lzZG9tLnsnICd9XHJcbiAgICAgIDwvcD5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==