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
    background: 'red'
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
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: styles.title,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: styles.status,
        children: status
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFyYWN0ZXJDYXJkLmpzIl0sIm5hbWVzIjpbImNhcmRTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImNvbG9yIiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiaW1nIiwibWFyZ2luIiwibWFyZ2luVG9wIiwid2lkdGgiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJzdGF0dXMiLCJiYWNrZ3JvdW5kIiwiQ2hhcmFjdGVyQ2FyZCIsImNoYXJhY3RlciIsInN0eWxlcyIsIm5hbWUiLCJpbWFnZSIsInNwZWNpZXMiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0Msc0VBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0pDLG1CQUFlLEVBQUUsU0FEYjtBQUVKQyxnQkFBWSxFQUFFLE1BRlY7QUFHSkMsYUFBUyxFQUFFLDBCQUhQO0FBSUpDLFNBQUssRUFBRSxPQUpIO0FBS0pDLFdBQU8sRUFBRSxNQUxMO0FBTUpDLGNBQVUsRUFBRSxRQU5SO0FBT0pDLFlBQVEsRUFBRSxPQVBOO0FBUUpDLGNBQVUsRUFBRSxLQVJSO0FBU0pDLFdBQU8sRUFBRSxPQVRMO0FBVUpDLGFBQVMsRUFBRTtBQVZQLEdBRHNCO0FBYTVCQyxLQUFHLEVBQUU7QUFDSFQsZ0JBQVksRUFBRSxLQURYO0FBRUhVLFVBQU0sRUFBRSxNQUZMO0FBR0hDLGFBQVMsRUFBRSxLQUhSO0FBSUhDLFNBQUssRUFBRTtBQUpKLEdBYnVCO0FBbUI1QkMsT0FBSyxFQUFFO0FBQ0xSLFlBQVEsRUFBRSxPQURMO0FBRUxTLGNBQVUsRUFBRTtBQUZQLEdBbkJxQjtBQXVCNUJDLFFBQU0sRUFBRTtBQUNOQyxjQUFVLEVBQUU7QUFETjtBQXZCb0IsQ0FBRCxDQUE3Qjs7QUE0QkEsU0FBU0MsYUFBVCxPQUFzQztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUNwQyxNQUFNQyxNQUFNLEdBQUd2QixVQUFVLEVBQXpCO0FBRG9DLE1BRTVCd0IsSUFGNEIsR0FFZUYsU0FGZixDQUU1QkUsSUFGNEI7QUFBQSxNQUV0QkMsS0FGc0IsR0FFZUgsU0FGZixDQUV0QkcsS0FGc0I7QUFBQSxNQUVmTixNQUZlLEdBRWVHLFNBRmYsQ0FFZkgsTUFGZTtBQUFBLE1BRVBPLE9BRk8sR0FFZUosU0FGZixDQUVQSSxPQUZPO0FBQUEsTUFFRUMsUUFGRixHQUVlTCxTQUZmLENBRUVLLFFBRkY7QUFJcEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVKLE1BQU0sQ0FBQ3JCLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUV1QixLQUFWO0FBQWlCLFNBQUcsWUFBS0QsSUFBTCxZQUFwQjtBQUF3QyxlQUFTLEVBQUVELE1BQU0sQ0FBQ1Y7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBRyxlQUFTLEVBQUVVLE1BQU0sQ0FBQ04sS0FBckI7QUFBQSxnQkFBNkJPO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsaUJBQ0csR0FESCxlQUVFO0FBQUcsaUJBQVMsRUFBRUQsTUFBTSxDQUFDSixNQUFyQjtBQUFBLGtCQUE4QkE7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBT0U7QUFBQSxnQkFBSU87QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRTtBQUFBLGdCQUFJQyxRQUFRLENBQUNIO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0tBaEJRSCxhO0FBa0JNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MjRjMTIwZjY1Yjg0MzcyYjE0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5cclxuY29uc3QgY2FyZFN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlYmU4Y2UnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICBib3hTaGFkb3c6ICc0cHggMnB4IDVweCAtM3B4ICMwMDAwMDAnLFxyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgIGZvbnRTaXplOiAnMC44ZW0nLFxyXG4gICAgbGluZUhlaWdodDogJzFweCcsXHJcbiAgICBwYWRkaW5nOiAnMC4yZW0nLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGltZzoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgbWFyZ2luVG9wOiAnMWVtJyxcclxuICAgIHdpZHRoOiAnMTBlbScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxuICBzdGF0dXM6IHtcclxuICAgIGJhY2tncm91bmQ6ICdyZWQnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQ2hhcmFjdGVyQ2FyZCh7IGNoYXJhY3RlciB9KSB7XHJcbiAgY29uc3Qgc3R5bGVzID0gY2FyZFN0eWxlcygpO1xyXG4gIGNvbnN0IHsgbmFtZSwgaW1hZ2UsIHN0YXR1cywgc3BlY2llcywgbG9jYXRpb24gfSA9IGNoYXJhY3RlcjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XHJcbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtgJHtuYW1lfSBhdmF0YXJgfSBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IC8+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57bmFtZX08L3A+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXN9PntzdGF0dXN9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHA+e3NwZWNpZXN9PC9wPlxyXG4gICAgICA8cD57bG9jYXRpb24ubmFtZX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9