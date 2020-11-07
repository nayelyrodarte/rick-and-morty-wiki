webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CharacterCard.js":
/*!*************************************!*\
  !*** ./components/CharacterCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\CharacterCard.js";


var cardStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    backgroundColor: '#ebe8ce',
    borderRadius: '20px',
    boxShadow: '4px 2px 5px -3px #000000',
    color: 'black',
    display: 'grid',
    fontFamily: 'Roboto',
    fontSize: '0.8em',
    lineHeight: '1px',
    padding: '0.2em',
    textAlign: 'center'
  },
  img: {
    borderRadius: '50%',
    margin: 'auto',
    marginTop: '1em',
    width: '10em'
  },
  title: {
    fontSize: '1.2em',
    fontWeight: 'bold'
  }
});

function CharacterCard(_ref) {
  var character = _ref.character;
  var styles = cardStyles();
  var name = character.name,
      image = character.image,
      status = character.status,
      species = character.species,
      location = character.location;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: image,
      alt: "".concat(name, " avatar"),
      className: styles.img
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: styles.title,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: status
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: species
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: location.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

_c = CharacterCard;
/* harmony default export */ __webpack_exports__["default"] = (CharacterCard);

var _c;

$RefreshReg$(_c, "CharacterCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFyYWN0ZXJDYXJkLmpzIl0sIm5hbWVzIjpbImNhcmRTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImNvbG9yIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiaW1nIiwibWFyZ2luIiwibWFyZ2luVG9wIiwid2lkdGgiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJDaGFyYWN0ZXJDYXJkIiwiY2hhcmFjdGVyIiwic3R5bGVzIiwibmFtZSIsImltYWdlIiwic3RhdHVzIiwic3BlY2llcyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxzRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSkMsbUJBQWUsRUFBRSxTQURiO0FBRUpDLGdCQUFZLEVBQUUsTUFGVjtBQUdKQyxhQUFTLEVBQUUsMEJBSFA7QUFJSkMsU0FBSyxFQUFFLE9BSkg7QUFLSkMsV0FBTyxFQUFFLE1BTEw7QUFNSkMsY0FBVSxFQUFFLFFBTlI7QUFPSkMsWUFBUSxFQUFFLE9BUE47QUFRSkMsY0FBVSxFQUFFLEtBUlI7QUFTSkMsV0FBTyxFQUFFLE9BVEw7QUFVSkMsYUFBUyxFQUFFO0FBVlAsR0FEc0I7QUFhNUJDLEtBQUcsRUFBRTtBQUNIVCxnQkFBWSxFQUFFLEtBRFg7QUFFSFUsVUFBTSxFQUFFLE1BRkw7QUFHSEMsYUFBUyxFQUFFLEtBSFI7QUFJSEMsU0FBSyxFQUFFO0FBSkosR0FidUI7QUFtQjVCQyxPQUFLLEVBQUU7QUFDTFIsWUFBUSxFQUFFLE9BREw7QUFFTFMsY0FBVSxFQUFFO0FBRlA7QUFuQnFCLENBQUQsQ0FBN0I7O0FBeUJBLFNBQVNDLGFBQVQsT0FBc0M7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDcEMsTUFBTUMsTUFBTSxHQUFHckIsVUFBVSxFQUF6QjtBQURvQyxNQUU1QnNCLElBRjRCLEdBRWVGLFNBRmYsQ0FFNUJFLElBRjRCO0FBQUEsTUFFdEJDLEtBRnNCLEdBRWVILFNBRmYsQ0FFdEJHLEtBRnNCO0FBQUEsTUFFZkMsTUFGZSxHQUVlSixTQUZmLENBRWZJLE1BRmU7QUFBQSxNQUVQQyxPQUZPLEdBRWVMLFNBRmYsQ0FFUEssT0FGTztBQUFBLE1BRUVDLFFBRkYsR0FFZU4sU0FGZixDQUVFTSxRQUZGO0FBSXBDLHNCQUNFO0FBQUssYUFBUyxFQUFFTCxNQUFNLENBQUNuQixJQUF2QjtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFFcUIsS0FBVjtBQUFpQixTQUFHLFlBQUtELElBQUwsWUFBcEI7QUFBd0MsZUFBUyxFQUFFRCxNQUFNLENBQUNSO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUcsZUFBUyxFQUFFUSxNQUFNLENBQUNKLEtBQXJCO0FBQUEsZ0JBQTZCSztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLGdCQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBQSxnQkFBSUMsUUFBUSxDQUFDSjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztLQWJRSCxhO0FBZU1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYzNjI4YjNkMDE1OTAwZDE0ZDg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcblxyXG5jb25zdCBjYXJkU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ViZThjZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgIGJveFNoYWRvdzogJzRweCAycHggNXB4IC0zcHggIzAwMDAwMCcsXHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gICAgZm9udFNpemU6ICcwLjhlbScsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMXB4JyxcclxuICAgIHBhZGRpbmc6ICcwLjJlbScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICBtYXJnaW5Ub3A6ICcxZW0nLFxyXG4gICAgd2lkdGg6ICcxMGVtJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogJzEuMmVtJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENoYXJhY3RlckNhcmQoeyBjaGFyYWN0ZXIgfSkge1xyXG4gIGNvbnN0IHN0eWxlcyA9IGNhcmRTdHlsZXMoKTtcclxuICBjb25zdCB7IG5hbWUsIGltYWdlLCBzdGF0dXMsIHNwZWNpZXMsIGxvY2F0aW9uIH0gPSBjaGFyYWN0ZXI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxyXG4gICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17YCR7bmFtZX0gYXZhdGFyYH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSAvPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e25hbWV9PC9wPlxyXG4gICAgICA8cD57c3RhdHVzfTwvcD5cclxuICAgICAgPHA+e3NwZWNpZXN9PC9wPlxyXG4gICAgICA8cD57bG9jYXRpb24ubmFtZX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9