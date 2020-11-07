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
/* harmony import */ var _components_StatusBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StatusBar */ "./components/StatusBar.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\CharacterCard.js";



var cardStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
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
    fontWeight: 'bold',
    width: '1em'
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
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: styles.title,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StatusBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      status: status
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: species
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFyYWN0ZXJDYXJkLmpzIl0sIm5hbWVzIjpbImNhcmRTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImNvbG9yIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiaW1nIiwibWFyZ2luIiwibWFyZ2luVG9wIiwid2lkdGgiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJDaGFyYWN0ZXJDYXJkIiwiY2hhcmFjdGVyIiwic3R5bGVzIiwibmFtZSIsImltYWdlIiwic3RhdHVzIiwic3BlY2llcyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxzRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSkMsbUJBQWUsRUFBRSxTQURiO0FBRUpDLGdCQUFZLEVBQUUsTUFGVjtBQUdKQyxhQUFTLEVBQUUsMEJBSFA7QUFJSkMsU0FBSyxFQUFFLE9BSkg7QUFLSkMsV0FBTyxFQUFFLE1BTEw7QUFNSkMsY0FBVSxFQUFFLFFBTlI7QUFPSkMsWUFBUSxFQUFFLE9BUE47QUFRSkMsY0FBVSxFQUFFLEtBUlI7QUFTSkMsV0FBTyxFQUFFLE9BVEw7QUFVSkMsYUFBUyxFQUFFO0FBVlAsR0FEc0I7QUFhNUJDLEtBQUcsRUFBRTtBQUNIVCxnQkFBWSxFQUFFLEtBRFg7QUFFSFUsVUFBTSxFQUFFLE1BRkw7QUFHSEMsYUFBUyxFQUFFLEtBSFI7QUFJSEMsU0FBSyxFQUFFO0FBSkosR0FidUI7QUFtQjVCQyxPQUFLLEVBQUU7QUFDTFIsWUFBUSxFQUFFLE9BREw7QUFFTFMsY0FBVSxFQUFFLE1BRlA7QUFHTEYsU0FBSyxFQUFFO0FBSEY7QUFuQnFCLENBQUQsQ0FBN0I7O0FBMEJBLFNBQVNHLGFBQVQsT0FBc0M7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDcEMsTUFBTUMsTUFBTSxHQUFHckIsVUFBVSxFQUF6QjtBQURvQyxNQUU1QnNCLElBRjRCLEdBRWVGLFNBRmYsQ0FFNUJFLElBRjRCO0FBQUEsTUFFdEJDLEtBRnNCLEdBRWVILFNBRmYsQ0FFdEJHLEtBRnNCO0FBQUEsTUFFZkMsTUFGZSxHQUVlSixTQUZmLENBRWZJLE1BRmU7QUFBQSxNQUVQQyxPQUZPLEdBRWVMLFNBRmYsQ0FFUEssT0FGTztBQUFBLE1BRUVDLFFBRkYsR0FFZU4sU0FGZixDQUVFTSxRQUZGO0FBSXBDLHNCQUNFO0FBQUssYUFBUyxFQUFFTCxNQUFNLENBQUNuQixJQUF2QjtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFFcUIsS0FBVjtBQUFpQixTQUFHLFlBQUtELElBQUwsWUFBcEI7QUFBd0MsZUFBUyxFQUFFRCxNQUFNLENBQUNSO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUcsZUFBUyxFQUFFUSxNQUFNLENBQUNKLEtBQXJCO0FBQUEsZ0JBQTZCSztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSxxRUFBQyw2REFBRDtBQUFXLFlBQU0sRUFBRUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7S0FaUU4sYTtBQWNNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYjVmNDcyMDE1NGVkNTkzYjUyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0YXR1c0JhciBmcm9tICcuLi9jb21wb25lbnRzL1N0YXR1c0Jhcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuXHJcbmNvbnN0IGNhcmRTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWJlOGNlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgYm94U2hhZG93OiAnNHB4IDJweCA1cHggLTNweCAjMDAwMDAwJyxcclxuICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXHJcbiAgICBmb250U2l6ZTogJzAuOGVtJyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxcHgnLFxyXG4gICAgcGFkZGluZzogJzAuMmVtJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIG1hcmdpblRvcDogJzFlbScsXHJcbiAgICB3aWR0aDogJzEwZW0nLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgd2lkdGg6ICcxZW0nLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQ2hhcmFjdGVyQ2FyZCh7IGNoYXJhY3RlciB9KSB7XHJcbiAgY29uc3Qgc3R5bGVzID0gY2FyZFN0eWxlcygpO1xyXG4gIGNvbnN0IHsgbmFtZSwgaW1hZ2UsIHN0YXR1cywgc3BlY2llcywgbG9jYXRpb24gfSA9IGNoYXJhY3RlcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtgJHtuYW1lfSBhdmF0YXJgfSBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IC8+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57bmFtZX08L3A+XHJcbiAgICAgIDxTdGF0dXNCYXIgc3RhdHVzPXtzdGF0dXN9IC8+XHJcbiAgICAgIDxwPntzcGVjaWVzfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=