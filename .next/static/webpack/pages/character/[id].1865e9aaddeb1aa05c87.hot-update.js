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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/MainContainer */ "./components/MainContainer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\pages\\character\\[id].js",
    _s = $RefreshSig$();








function characterProfile(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    style: {
      margin: '2em',
      fontFamily: 'Roboto'
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
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [" / ", props.data.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      style: {
        flexGrow: 1,
        borderRadius: '20px',
        padding: '1.5em',
        textAlign: 'center'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          backgroundColor: '#ebe8ce',
          borderRadius: '20px',
          padding: '1.5em'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: props.data.image,
          alt: props.data.name,
          width: "60%",
          style: {
            borderRadius: '50%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: props.data.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Status:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), props.data.status]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Gender:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), props.data.gender]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Origin:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), props.data.origin.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Last known location:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), props.data.location.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        style: {
          background: '#155799',
          width: '8em',
          height: '2em',
          marginTop: '2em',
          border: 'none',
          borderRadius: '10px',
          color: 'white'
        },
        children: "Volver"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
            return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://rickandmortyapi.com/api/character/".concat(ctx.query.id));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJjaGFyYWN0ZXJQcm9maWxlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibWFyZ2luIiwiZm9udEZhbWlseSIsImNvbG9yIiwiZm9udFdlaWdodCIsImRhdGEiLCJuYW1lIiwiZmxleEdyb3ciLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwiaW1hZ2UiLCJzdGF0dXMiLCJnZW5kZXIiLCJvcmlnaW4iLCJsb2NhdGlvbiIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblRvcCIsImJvcmRlciIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImF4aW9zIiwiZ2V0IiwicmVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQUNHLEtBQWxCO0FBRUEsc0JBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLEtBREg7QUFFTEMsZ0JBQVUsRUFBRTtBQUZQLEtBRFQ7QUFBQSw0QkFNRTtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFHLGVBQUssRUFBRTtBQUFFQyxpQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLHNCQUFVLEVBQUU7QUFBOUIsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUEsMEJBQVVSLEtBQUssQ0FBQ1Ms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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW5DOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlViwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXIvW2lkXS4xODY1ZTlhYWRkZWIxYWEwNWM4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIGNoYXJhY3RlclByb2ZpbGUocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBtYXJnaW46ICcyZW0nLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+SG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHNwYW4+IC8ge3Byb3BzLmRhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnMS41ZW0nLFxyXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ViZThjZScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMS41ZW0nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17cHJvcHMuZGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgYWx0PXtwcm9wcy5kYXRhLm5hbWV9XHJcbiAgICAgICAgICAgIHdpZHRoPSc2MCUnXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cD57cHJvcHMuZGF0YS5uYW1lfTwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Bhbj5TdGF0dXM6PC9zcGFuPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5zdGF0dXN9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHNwYW4+R2VuZGVyOjwvc3Bhbj5cclxuICAgICAgICAgICAge3Byb3BzLmRhdGEuZ2VuZGVyfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuPk9yaWdpbjo8L3NwYW4+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLm9yaWdpbi5uYW1lfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuPkxhc3Qga25vd24gbG9jYXRpb246PC9zcGFuPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5sb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgIENvbnNlcXV1bnR1ciBpbXBlZGl0IHRlbXBvcmUsIHBlcmZlcmVuZGlzIHNpbnQgY29uc2VjdGV0dXIgY29ycnVwdGlcclxuICAgICAgICAgICAgc3VudCBhcGVyaWFtIGRlbGVuaXRpIHZlcml0YXRpcyBub24gaW5jaWR1bnQsIGRlYml0aXMgZGlzdGluY3RpbyB1dFxyXG4gICAgICAgICAgICBudW1xdWFtIHBhcmlhdHVyIG5pc2kgYXJjaGl0ZWN0bywgbmVxdWUgaXVzdG8/XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMTU1Nzk5JyxcclxuICAgICAgICAgICAgd2lkdGg6ICc4ZW0nLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcyZW0nLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBWb2x2ZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY2hhcmFjdGVyUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2N0eC5xdWVyeS5pZH1gXHJcbiAgKTtcclxuICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICByZXR1cm4geyBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFyYWN0ZXJQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9