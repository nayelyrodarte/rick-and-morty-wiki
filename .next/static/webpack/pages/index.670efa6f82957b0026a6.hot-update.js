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
  },
  status: {
    width: '20%',
    margin: 'auto'
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
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: styles.title,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles.status,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: status
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: species
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: location.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFyYWN0ZXJDYXJkLmpzIl0sIm5hbWVzIjpbImNhcmRTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImNvbG9yIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiaW1nIiwibWFyZ2luIiwibWFyZ2luVG9wIiwid2lkdGgiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJzdGF0dXMiLCJDaGFyYWN0ZXJDYXJkIiwiY2hhcmFjdGVyIiwic3R5bGVzIiwibmFtZSIsImltYWdlIiwic3BlY2llcyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxzRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSkMsbUJBQWUsRUFBRSxTQURiO0FBRUpDLGdCQUFZLEVBQUUsTUFGVjtBQUdKQyxhQUFTLEVBQUUsMEJBSFA7QUFJSkMsU0FBSyxFQUFFLE9BSkg7QUFLSkMsV0FBTyxFQUFFLE1BTEw7QUFNSkMsY0FBVSxFQUFFLFFBTlI7QUFPSkMsWUFBUSxFQUFFLE9BUE47QUFRSkMsY0FBVSxFQUFFLEtBUlI7QUFTSkMsV0FBTyxFQUFFLE9BVEw7QUFVSkMsYUFBUyxFQUFFO0FBVlAsR0FEc0I7QUFhNUJDLEtBQUcsRUFBRTtBQUNIVCxnQkFBWSxFQUFFLEtBRFg7QUFFSFUsVUFBTSxFQUFFLE1BRkw7QUFHSEMsYUFBUyxFQUFFLEtBSFI7QUFJSEMsU0FBSyxFQUFFO0FBSkosR0FidUI7QUFtQjVCQyxPQUFLLEVBQUU7QUFDTFIsWUFBUSxFQUFFLE9BREw7QUFFTFMsY0FBVSxFQUFFO0FBRlAsR0FuQnFCO0FBdUI1QkMsUUFBTSxFQUFFO0FBQ05ILFNBQUssRUFBRSxLQUREO0FBRU5GLFVBQU0sRUFBRTtBQUZGO0FBdkJvQixDQUFELENBQTdCOztBQTZCQSxTQUFTTSxhQUFULE9BQXNDO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3BDLE1BQU1DLE1BQU0sR0FBR3RCLFVBQVUsRUFBekI7QUFEb0MsTUFFNUJ1QixJQUY0QixHQUVlRixTQUZmLENBRTVCRSxJQUY0QjtBQUFBLE1BRXRCQyxLQUZzQixHQUVlSCxTQUZmLENBRXRCRyxLQUZzQjtBQUFBLE1BRWZMLE1BRmUsR0FFZUUsU0FGZixDQUVmRixNQUZlO0FBQUEsTUFFUE0sT0FGTyxHQUVlSixTQUZmLENBRVBJLE9BRk87QUFBQSxNQUVFQyxRQUZGLEdBRWVMLFNBRmYsQ0FFRUssUUFGRjtBQUlwQyxzQkFDRTtBQUFLLGFBQVMsRUFBRUosTUFBTSxDQUFDcEIsSUFBdkI7QUFBQSw0QkFDRTtBQUFLLFNBQUcsRUFBRXNCLEtBQVY7QUFBaUIsU0FBRyxZQUFLRCxJQUFMLFlBQXBCO0FBQXdDLGVBQVMsRUFBRUQsTUFBTSxDQUFDVDtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFHLGVBQVMsRUFBRVMsTUFBTSxDQUFDTCxLQUFyQjtBQUFBLGdCQUE2Qk07QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBSyxlQUFTLEVBQUVELE1BQU0sQ0FBQ0gsTUFBdkI7QUFBQSw2QkFDRTtBQUFBLGtCQUFJQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFNRTtBQUFBLGdCQUFJTTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQUEsZ0JBQUlDLFFBQVEsQ0FBQ0g7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7S0FmUUgsYTtBQWlCTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjcwZWZhNmY4Mjk1N2IwMDI2YTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuXHJcbmNvbnN0IGNhcmRTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWJlOGNlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgYm94U2hhZG93OiAnNHB4IDJweCA1cHggLTNweCAjMDAwMDAwJyxcclxuICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXHJcbiAgICBmb250U2l6ZTogJzAuOGVtJyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxcHgnLFxyXG4gICAgcGFkZGluZzogJzAuMmVtJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIG1hcmdpblRvcDogJzFlbScsXHJcbiAgICB3aWR0aDogJzEwZW0nLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbiAgc3RhdHVzOiB7XHJcbiAgICB3aWR0aDogJzIwJScsXHJcbiAgICBtYXJnaW46ICdhdXRvJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENoYXJhY3RlckNhcmQoeyBjaGFyYWN0ZXIgfSkge1xyXG4gIGNvbnN0IHN0eWxlcyA9IGNhcmRTdHlsZXMoKTtcclxuICBjb25zdCB7IG5hbWUsIGltYWdlLCBzdGF0dXMsIHNwZWNpZXMsIGxvY2F0aW9uIH0gPSBjaGFyYWN0ZXI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxyXG4gICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17YCR7bmFtZX0gYXZhdGFyYH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSAvPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e25hbWV9PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c30+XHJcbiAgICAgICAgPHA+e3N0YXR1c308L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cD57c3BlY2llc308L3A+XHJcbiAgICAgIDxwPntsb2NhdGlvbi5uYW1lfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=