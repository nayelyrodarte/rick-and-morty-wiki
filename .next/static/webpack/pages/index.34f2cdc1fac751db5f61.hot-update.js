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
    borderRadius: '20px',
    backgroundColor: 'gray',
    display: 'grid',
    lineHeight: '1px'
  },
  img: {
    width: '10em',
    margin: 'auto',
    marginTop: '1em',
    borderRadius: '50%'
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
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: status
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: species
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: location.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFyYWN0ZXJDYXJkLmpzIl0sIm5hbWVzIjpbImNhcmRTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJsaW5lSGVpZ2h0IiwiaW1nIiwid2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJDaGFyYWN0ZXJDYXJkIiwiY2hhcmFjdGVyIiwic3R5bGVzIiwibmFtZSIsImltYWdlIiwic3RhdHVzIiwic3BlY2llcyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxzRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSkMsZ0JBQVksRUFBRSxNQURWO0FBRUpDLG1CQUFlLEVBQUUsTUFGYjtBQUdKQyxXQUFPLEVBQUUsTUFITDtBQUlKQyxjQUFVLEVBQUU7QUFKUixHQURzQjtBQU81QkMsS0FBRyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxNQURKO0FBRUhDLFVBQU0sRUFBRSxNQUZMO0FBR0hDLGFBQVMsRUFBRSxLQUhSO0FBSUhQLGdCQUFZLEVBQUU7QUFKWDtBQVB1QixDQUFELENBQTdCOztBQWVBLFNBQVNRLGFBQVQsT0FBc0M7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDcEMsTUFBTUMsTUFBTSxHQUFHYixVQUFVLEVBQXpCO0FBRG9DLE1BRTVCYyxJQUY0QixHQUVlRixTQUZmLENBRTVCRSxJQUY0QjtBQUFBLE1BRXRCQyxLQUZzQixHQUVlSCxTQUZmLENBRXRCRyxLQUZzQjtBQUFBLE1BRWZDLE1BRmUsR0FFZUosU0FGZixDQUVmSSxNQUZlO0FBQUEsTUFFUEMsT0FGTyxHQUVlTCxTQUZmLENBRVBLLE9BRk87QUFBQSxNQUVFQyxRQUZGLEdBRWVOLFNBRmYsQ0FFRU0sUUFGRjtBQUlwQyxzQkFDRTtBQUFLLGFBQVMsRUFBRUwsTUFBTSxDQUFDWCxJQUF2QjtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFFYSxLQUFWO0FBQWlCLFNBQUcsWUFBS0QsSUFBTCxZQUFwQjtBQUF3QyxlQUFTLEVBQUVELE1BQU0sQ0FBQ047QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBSU87QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLGdCQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBQSxnQkFBSUMsUUFBUSxDQUFDSjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztLQWJRSCxhO0FBZU1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM0ZjJjZGMxZmFjNzUxZGI1ZjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcblxyXG5jb25zdCBjYXJkU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxcHgnLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICB3aWR0aDogJzEwZW0nLFxyXG4gICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICBtYXJnaW5Ub3A6ICcxZW0nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENoYXJhY3RlckNhcmQoeyBjaGFyYWN0ZXIgfSkge1xyXG4gIGNvbnN0IHN0eWxlcyA9IGNhcmRTdHlsZXMoKTtcclxuICBjb25zdCB7IG5hbWUsIGltYWdlLCBzdGF0dXMsIHNwZWNpZXMsIGxvY2F0aW9uIH0gPSBjaGFyYWN0ZXI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxyXG4gICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17YCR7bmFtZX0gYXZhdGFyYH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSAvPlxyXG4gICAgICA8cD57bmFtZX08L3A+XHJcbiAgICAgIDxwPntzdGF0dXN9PC9wPlxyXG4gICAgICA8cD57c3BlY2llc308L3A+XHJcbiAgICAgIDxwPntsb2NhdGlvbi5uYW1lfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=