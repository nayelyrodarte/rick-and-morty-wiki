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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\pages\\character\\[id].js",
    _s = $RefreshSig$();







var breadcrumbStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    listStyleType: 'none'
  }
});

function characterProfile(props) {
  _s();

  var breadcrumbs = breadcrumbStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: breadcrumbs.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "Home "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), "/ ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          children: [" ", props.data.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        justify: "center",
        direction: "column",
        alignItems: "center",
        spacing: 1,
        children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: props.data.image,
          alt: props.data.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: props.data.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Status:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), props.data.status]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Gender:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this), props.data.gender]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Origin:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), props.data.origin.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Last known location:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), props.data.location.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            children: "Volver"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJicmVhZGNydW1iU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJsaXN0U3R5bGVUeXBlIiwiY2hhcmFjdGVyUHJvZmlsZSIsInByb3BzIiwiYnJlYWRjcnVtYnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsIm5hbWUiLCJpbWFnZSIsInN0YXR1cyIsImdlbmRlciIsIm9yaWdpbiIsImxvY2F0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0Msc0VBQVUsQ0FBQztBQUNsQ0MsTUFBSSxFQUFFO0FBQ0pDLGlCQUFhLEVBQUU7QUFEWDtBQUQ0QixDQUFELENBQW5DOztBQU1BLFNBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUFBOztBQUMvQixNQUFNQyxXQUFXLEdBQUdOLGdCQUFnQixFQUFwQztBQUVBLE1BQU1PLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0csS0FBbEI7QUFFQSxzQkFDRSxxRUFBQywyREFBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFSixXQUFXLENBQUNKLElBQTVCO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLHFCQUlJO0FBQUEsMEJBQVFHLEtBQUssQ0FBQ00sSUFBTixDQUFXQyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRSxxRUFBQyxzREFBRDtBQUNFLGVBQU8sRUFBQyxRQURWO0FBRUUsaUJBQVMsRUFBQyxRQUZaO0FBR0Usa0JBQVUsRUFBQyxRQUhiO0FBSUUsZUFBTyxFQUFFLENBSlg7QUFBQSxtQkFNRyxHQU5ILGVBT0U7QUFBSyxhQUFHLEVBQUVQLEtBQUssQ0FBQ00sSUFBTixDQUFXRSxLQUFyQjtBQUE0QixhQUFHLEVBQUVSLEtBQUssQ0FBQ00sSUFBTixDQUFXQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBUUU7QUFBQSxvQkFBSVAsS0FBSyxDQUFDTSxJQUFOLENBQVdDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixlQVNFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFR1AsS0FBSyxDQUFDTSxJQUFOLENBQVdHLE1BRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBYUU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVHVCxLQUFLLENBQUNNLElBQU4sQ0FBV0ksTUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsZUFpQkU7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVHVixLQUFLLENBQUNNLElBQU4sQ0FBV0ssTUFBWCxDQUFrQkosSUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRixlQXFCRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUdQLEtBQUssQ0FBQ00sSUFBTixDQUFXTSxRQUFYLENBQW9CTCxJQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJGLGVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCRixlQStCRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnREQ7O0dBdERRUixnQjtVQUdRSSxxRDs7O0FBcURqQkosZ0JBQWdCLENBQUNjLGVBQWpCO0FBQUEsOExBQW1DLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2pCQyw0Q0FBSyxDQUFDQyxHQUFOLHFEQUMrQkYsR0FBRyxDQUFDVCxLQUFKLENBQVVELEVBRHpDLEVBRGlCOztBQUFBO0FBQzdCYSxlQUQ2QjtBQUk3QlgsZ0JBSjZCLEdBSXRCVyxHQUFHLENBQUNYLElBSmtCO0FBS2pDWSxtQkFBTyxDQUFDQyxHQUFSLENBQVliLElBQVo7QUFMaUMsNkNBTzFCO0FBQUVBLGtCQUFJLEVBQUpBO0FBQUYsYUFQMEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBbkM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWVQLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXJhY3Rlci9baWRdLjQzZmY2MTY5M2NmOGU2NzkyMWY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgYnJlYWRjcnVtYlN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNoYXJhY3RlclByb2ZpbGUocHJvcHMpIHtcclxuICBjb25zdCBicmVhZGNydW1icyA9IGJyZWFkY3J1bWJTdHlsZXMoKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YnJlYWRjcnVtYnMucm9vdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8YT5Ib21lIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIC8gPHNwYW4+IHtwcm9wcy5kYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInXHJcbiAgICAgICAgICBzcGFjaW5nPXsxfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuZGF0YS5pbWFnZX0gYWx0PXtwcm9wcy5kYXRhLm5hbWV9IC8+XHJcbiAgICAgICAgICA8cD57cHJvcHMuZGF0YS5uYW1lfTwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Bhbj5TdGF0dXM6PC9zcGFuPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5zdGF0dXN9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHNwYW4+R2VuZGVyOjwvc3Bhbj5cclxuICAgICAgICAgICAge3Byb3BzLmRhdGEuZ2VuZGVyfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuPk9yaWdpbjo8L3NwYW4+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLm9yaWdpbi5uYW1lfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuPkxhc3Qga25vd24gbG9jYXRpb246PC9zcGFuPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5sb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgIENvbnNlcXV1bnR1ciBpbXBlZGl0IHRlbXBvcmUsIHBlcmZlcmVuZGlzIHNpbnQgY29uc2VjdGV0dXIgY29ycnVwdGlcclxuICAgICAgICAgICAgc3VudCBhcGVyaWFtIGRlbGVuaXRpIHZlcml0YXRpcyBub24gaW5jaWR1bnQsIGRlYml0aXMgZGlzdGluY3RpbyB1dFxyXG4gICAgICAgICAgICBudW1xdWFtIHBhcmlhdHVyIG5pc2kgYXJjaGl0ZWN0bywgbmVxdWUgaXVzdG8/XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGJ1dHRvbj5Wb2x2ZXI8L2J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY2hhcmFjdGVyUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2N0eC5xdWVyeS5pZH1gXHJcbiAgKTtcclxuICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICByZXR1cm4geyBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFyYWN0ZXJQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9