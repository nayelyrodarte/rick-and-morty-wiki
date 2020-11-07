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
    fontFamily: 'Roboto',
    fontSize: '0.8em',
    borderRadius: '20px',
    backgroundColor: 'black',
    color: 'white',
    display: 'grid',
    lineHeight: '1px',
    textAlign: 'center',
    padding: '0.2em'
  },
  img: {
    width: '10em',
    margin: 'auto',
    marginTop: '1em',
    borderRadius: '50%'
  },
  title: {
    fontSize: '1em',
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
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: styles.title,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: status
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: species
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: location.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFyYWN0ZXJDYXJkLmpzIl0sIm5hbWVzIjpbImNhcmRTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZGlzcGxheSIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiaW1nIiwid2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJDaGFyYWN0ZXJDYXJkIiwiY2hhcmFjdGVyIiwic3R5bGVzIiwibmFtZSIsImltYWdlIiwic3RhdHVzIiwic3BlY2llcyIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxzRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSkMsY0FBVSxFQUFFLFFBRFI7QUFFSkMsWUFBUSxFQUFFLE9BRk47QUFHSkMsZ0JBQVksRUFBRSxNQUhWO0FBSUpDLG1CQUFlLEVBQUUsT0FKYjtBQUtKQyxTQUFLLEVBQUUsT0FMSDtBQU1KQyxXQUFPLEVBQUUsTUFOTDtBQU9KQyxjQUFVLEVBQUUsS0FQUjtBQVFKQyxhQUFTLEVBQUUsUUFSUDtBQVNKQyxXQUFPLEVBQUU7QUFUTCxHQURzQjtBQVk1QkMsS0FBRyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxNQURKO0FBRUhDLFVBQU0sRUFBRSxNQUZMO0FBR0hDLGFBQVMsRUFBRSxLQUhSO0FBSUhWLGdCQUFZLEVBQUU7QUFKWCxHQVp1QjtBQWtCNUJXLE9BQUssRUFBRTtBQUNMWixZQUFRLEVBQUUsS0FETDtBQUVMYSxjQUFVLEVBQUU7QUFGUDtBQWxCcUIsQ0FBRCxDQUE3Qjs7QUF3QkEsU0FBU0MsYUFBVCxPQUFzQztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUNwQyxNQUFNQyxNQUFNLEdBQUdwQixVQUFVLEVBQXpCO0FBRG9DLE1BRTVCcUIsSUFGNEIsR0FFZUYsU0FGZixDQUU1QkUsSUFGNEI7QUFBQSxNQUV0QkMsS0FGc0IsR0FFZUgsU0FGZixDQUV0QkcsS0FGc0I7QUFBQSxNQUVmQyxNQUZlLEdBRWVKLFNBRmYsQ0FFZkksTUFGZTtBQUFBLE1BRVBDLE9BRk8sR0FFZUwsU0FGZixDQUVQSyxPQUZPO0FBQUEsTUFFRUMsUUFGRixHQUVlTixTQUZmLENBRUVNLFFBRkY7QUFJcEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVMLE1BQU0sQ0FBQ2xCLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUVvQixLQUFWO0FBQWlCLFNBQUcsWUFBS0QsSUFBTCxZQUFwQjtBQUF3QyxlQUFTLEVBQUVELE1BQU0sQ0FBQ1I7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBRyxlQUFTLEVBQUVRLE1BQU0sQ0FBQ0osS0FBckI7QUFBQSxnQkFBNkJLO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsZ0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFBLGdCQUFJQyxRQUFRLENBQUNKO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0tBYlFILGE7QUFlTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzBlZGJlZWYxOTE2ZjM5OGMxNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuXHJcbmNvbnN0IGNhcmRTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgIGZvbnRTaXplOiAnMC44ZW0nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6ICcwLjJlbScsXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiAnMTBlbScsXHJcbiAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIG1hcmdpblRvcDogJzFlbScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMWVtJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENoYXJhY3RlckNhcmQoeyBjaGFyYWN0ZXIgfSkge1xyXG4gIGNvbnN0IHN0eWxlcyA9IGNhcmRTdHlsZXMoKTtcclxuICBjb25zdCB7IG5hbWUsIGltYWdlLCBzdGF0dXMsIHNwZWNpZXMsIGxvY2F0aW9uIH0gPSBjaGFyYWN0ZXI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxyXG4gICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17YCR7bmFtZX0gYXZhdGFyYH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSAvPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e25hbWV9PC9wPlxyXG4gICAgICA8cD57c3RhdHVzfTwvcD5cclxuICAgICAgPHA+e3NwZWNpZXN9PC9wPlxyXG4gICAgICA8cD57bG9jYXRpb24ubmFtZX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9