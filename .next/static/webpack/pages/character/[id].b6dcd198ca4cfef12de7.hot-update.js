webpackHotUpdate_N_E("pages/character/[id]",{

/***/ "./pages/character/[id].js":
/*!*********************************!*\
  !*** ./pages/character/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");




var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\pages\\character\\[id].js",
    _s = $RefreshSig$();






var characterBio = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    textAlign: 'center'
  }
});

function characterProfile(props) {
  _s();

  var bioStyles = characterBio();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    style: {
      margin: '2em',
      fontFamily: 'Roboto',
      backgroundColor: '#ebe8ce'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          style: {
            color: 'black',
            fontWeight: 'bold'
          },
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [" / ", props.data.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        textAlign: 'center'
      },
      children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: props.data.image,
        alt: props.data.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: props.data.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          children: "Status:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), props.data.status]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          children: "Gender:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), props.data.gender]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          children: "Origin:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), props.data.origin.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          children: "Last known location:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), props.data.location.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          children: "Volver"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_s(characterProfile, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

characterProfile.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://rickandmortyapi.com/api/character/".concat(ctx.query.id));

          case 2:
            res = _context.sent;
            data = res.data;
            console.log(data);
            return _context.abrupt("return", {
              data: data
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (characterProfile);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJjaGFyYWN0ZXJCaW8iLCJtYWtlU3R5bGVzIiwicm9vdCIsInRleHRBbGlnbiIsImNoYXJhY3RlclByb2ZpbGUiLCJwcm9wcyIsImJpb1N0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJtYXJnaW4iLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZGF0YSIsIm5hbWUiLCJpbWFnZSIsInN0YXR1cyIsImdlbmRlciIsIm9yaWdpbiIsImxvY2F0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLHNFQUFVLENBQUM7QUFDOUJDLE1BQUksRUFBRTtBQUNKQyxhQUFTLEVBQUU7QUFEUDtBQUR3QixDQUFELENBQS9COztBQU1BLFNBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUFBOztBQUMvQixNQUFNQyxTQUFTLEdBQUdOLFlBQVksRUFBOUI7QUFFQSxNQUFNTyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQUNHLEtBQWxCO0FBRUEsc0JBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLEtBREg7QUFFTEMsZ0JBQVUsRUFBRSxRQUZQO0FBR0xDLHFCQUFlLEVBQUU7QUFIWixLQURUO0FBQUEsNEJBT0U7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFBRyxlQUFLLEVBQUU7QUFBRUMsaUJBQUssRUFBRSxPQUFUO0FBQWtCQyxzQkFBVSxFQUFFO0FBQTlCLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFBLDBCQUFVVixLQUFLLENBQUNXLElBQU4sQ0FBV0MsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFjRTtBQUFLLFdBQUssRUFBRTtBQUFFZCxpQkFBUyxFQUFFO0FBQWIsT0FBWjtBQUFBLGlCQUNHLEdBREgsZUFFRTtBQUFLLFdBQUcsRUFBRUUsS0FBSyxDQUFDVyxJQUFOLENBQVdFLEtBQXJCO0FBQTRCLFdBQUcsRUFBRWIsS0FBSyxDQUFDVyxJQUFOLENBQVdDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUEsa0JBQUlaLEtBQUssQ0FBQ1csSUFBTixDQUFXQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR1osS0FBSyxDQUFDVyxJQUFOLENBQVdHLE1BRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFRRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUdkLEtBQUssQ0FBQ1csSUFBTixDQUFXSSxNQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBWUU7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVHZixLQUFLLENBQUNXLElBQU4sQ0FBV0ssTUFBWCxDQUFrQkosSUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUFnQkU7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVHWixLQUFLLENBQUNXLElBQU4sQ0FBV00sUUFBWCxDQUFvQkwsSUFGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGLGVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGLGVBMEJFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQ0Q7O0dBckRRYixnQjtVQUdRSSxxRDs7O0FBb0RqQkosZ0JBQWdCLENBQUNtQixlQUFqQjtBQUFBLDhMQUFtQyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNqQkMsNENBQUssQ0FBQ0MsR0FBTixxREFDK0JGLEdBQUcsQ0FBQ2QsS0FBSixDQUFVRCxFQUR6QyxFQURpQjs7QUFBQTtBQUM3QmtCLGVBRDZCO0FBSTdCWCxnQkFKNkIsR0FJdEJXLEdBQUcsQ0FBQ1gsSUFKa0I7QUFLakNZLG1CQUFPLENBQUNDLEdBQVIsQ0FBWWIsSUFBWjtBQUxpQyw2Q0FPMUI7QUFBRUEsa0JBQUksRUFBSkE7QUFBRixhQVAwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFuQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZVosK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL1tpZF0uYjZkY2QxOThjYTRjZmVmMTJkZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcblxyXG5jb25zdCBjaGFyYWN0ZXJCaW8gPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhcmFjdGVyUHJvZmlsZShwcm9wcykge1xyXG4gIGNvbnN0IGJpb1N0eWxlcyA9IGNoYXJhY3RlckJpbygpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBtYXJnaW46ICcyZW0nLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlYmU4Y2UnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+SG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHNwYW4+IC8ge3Byb3BzLmRhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICB7JyAnfVxyXG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSBhbHQ9e3Byb3BzLmRhdGEubmFtZX0gLz5cclxuICAgICAgICA8cD57cHJvcHMuZGF0YS5uYW1lfTwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzcGFuPlN0YXR1czo8L3NwYW4+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5zdGF0dXN9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHNwYW4+R2VuZGVyOjwvc3Bhbj5cclxuICAgICAgICAgIHtwcm9wcy5kYXRhLmdlbmRlcn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Bhbj5PcmlnaW46PC9zcGFuPlxyXG4gICAgICAgICAge3Byb3BzLmRhdGEub3JpZ2luLm5hbWV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHNwYW4+TGFzdCBrbm93biBsb2NhdGlvbjo8L3NwYW4+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5sb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvbnNlcXV1bnR1clxyXG4gICAgICAgICAgaW1wZWRpdCB0ZW1wb3JlLCBwZXJmZXJlbmRpcyBzaW50IGNvbnNlY3RldHVyIGNvcnJ1cHRpIHN1bnQgYXBlcmlhbVxyXG4gICAgICAgICAgZGVsZW5pdGkgdmVyaXRhdGlzIG5vbiBpbmNpZHVudCwgZGViaXRpcyBkaXN0aW5jdGlvIHV0IG51bXF1YW1cclxuICAgICAgICAgIHBhcmlhdHVyIG5pc2kgYXJjaGl0ZWN0bywgbmVxdWUgaXVzdG8/XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgPGJ1dHRvbj5Wb2x2ZXI8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY2hhcmFjdGVyUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2N0eC5xdWVyeS5pZH1gXHJcbiAgKTtcclxuICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICByZXR1cm4geyBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFyYWN0ZXJQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9