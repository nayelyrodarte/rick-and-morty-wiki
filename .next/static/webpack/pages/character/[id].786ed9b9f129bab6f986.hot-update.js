webpackHotUpdate_N_E("pages/character/[id]",{

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
  fontFamily: 'Roboto'
}), _makeStyles));

function MainContainer(props) {
  var styles = logoStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      className: styles.root,
      src: "/rick-and-morty-logo.png",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      className: styles.subHeader,
      children: "Wiki"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbImxvZ29TdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIndpZHRoIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJNYWluQ29udGFpbmVyIiwicHJvcHMiLCJzdHlsZXMiLCJzdWJIZWFkZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0Msc0VBQVU7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsS0FESDtBQUVKQyxXQUFPLEVBQUUsT0FGTDtBQUdKQyxjQUFVLEVBQUUsTUFIUjtBQUlKQyxlQUFXLEVBQUU7QUFKVDtBQURxQiwwR0FPMUIsMEJBUDBCLEVBT0c7QUFDNUJILE9BQUssRUFBRTtBQURxQixDQVBILHVIQVVoQjtBQUNUSSxXQUFTLEVBQUUsUUFERjtBQUVUQyxZQUFVLEVBQUU7QUFGSCxDQVZnQixnQkFBN0I7O0FBZ0JBLFNBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCLE1BQU1DLE1BQU0sR0FBR1gsVUFBVSxFQUF6QjtBQUNBLHNCQUNFLHFFQUFDLDJEQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUssZUFBUyxFQUFFVyxNQUFNLENBQUNULElBQXZCO0FBQTZCLFNBQUcsRUFBQywwQkFBakM7QUFBNEQsU0FBRyxFQUFDO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUksZUFBUyxFQUFFUyxNQUFNLENBQUNDLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsRUFNR0YsS0FBSyxDQUFDRyxRQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0tBWlFKLGE7QUFjTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL1tpZF0uNzg2ZWQ5YjlmMTI5YmFiNmY5ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5cclxuY29uc3QgbG9nb1N0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnNTAlJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgWydAbWVkaWEgKG1pbi13aWR0aDozNzVweCknXToge1xyXG4gICAgd2lkdGg6ICc2NSUnLFxyXG4gIH0sXHJcbiAgc3ViSGVhZGVyOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBNYWluQ29udGFpbmVyKHByb3BzKSB7XHJcbiAgY29uc3Qgc3R5bGVzID0gbG9nb1N0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmljayAmIE1vcnR5IFdpa2k8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0gc3JjPScvcmljay1hbmQtbW9ydHktbG9nby5wbmcnIGFsdD0nJyAvPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3ViSGVhZGVyfT5XaWtpPC9oMj5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==