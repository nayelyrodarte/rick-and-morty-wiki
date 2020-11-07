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
    marginTop: '2em'
  }
});

function characterProfile(props) {
  _s();

  var breadcrumbs = breadcrumbStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: breadcrumbs.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          children: "Home "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), "/ ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [" ", props.data.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      container: true,
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
      lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJicmVhZGNydW1iU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXJnaW5Ub3AiLCJjaGFyYWN0ZXJQcm9maWxlIiwicHJvcHMiLCJicmVhZGNydW1icyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJkYXRhIiwibmFtZSIsImltYWdlIiwic3RhdHVzIiwiZ2VuZGVyIiwib3JpZ2luIiwibG9jYXRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJheGlvcyIsImdldCIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQyxzRUFBVSxDQUFDO0FBQ2xDQyxNQUFJLEVBQUU7QUFDSkMsYUFBUyxFQUFFO0FBRFA7QUFENEIsQ0FBRCxDQUFuQzs7QUFNQSxTQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFBQTs7QUFDL0IsTUFBTUMsV0FBVyxHQUFHTixnQkFBZ0IsRUFBcEM7QUFFQSxNQUFNTyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQUNHLEtBQWxCO0FBRUEsc0JBQ0UscUVBQUMsMkRBQUQ7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUosV0FBVyxDQUFDSixJQUE1QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixxQkFJSTtBQUFBLHdCQUFRRyxLQUFLLENBQUNNLElBQU4sQ0FBV0MsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSxxRUFBQyxzREFBRDtBQUNFLGVBQVMsTUFEWDtBQUVFLGFBQU8sRUFBQyxRQUZWO0FBR0UsZUFBUyxFQUFDLFFBSFo7QUFJRSxnQkFBVSxFQUFDLFFBSmI7QUFLRSxhQUFPLEVBQUUsQ0FMWDtBQUFBLGlCQU9HLEdBUEgsZUFRRTtBQUFLLFdBQUcsRUFBRVAsS0FBSyxDQUFDTSxJQUFOLENBQVdFLEtBQXJCO0FBQTRCLFdBQUcsRUFBRVIsS0FBSyxDQUFDTSxJQUFOLENBQVdDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVNFO0FBQUEsa0JBQUlQLEtBQUssQ0FBQ00sSUFBTixDQUFXQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVVFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR1AsS0FBSyxDQUFDTSxJQUFOLENBQVdHLE1BRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsZUFjRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUdULEtBQUssQ0FBQ00sSUFBTixDQUFXSSxNQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBa0JFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR1YsS0FBSyxDQUFDTSxJQUFOLENBQVdLLE1BQVgsQ0FBa0JKLElBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRixlQXNCRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUdQLEtBQUssQ0FBQ00sSUFBTixDQUFXTSxRQUFYLENBQW9CTCxJQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkYsZUEwQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkYsZUFnQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStDRDs7R0FyRFFSLGdCO1VBR1FJLHFEOzs7QUFvRGpCSixnQkFBZ0IsQ0FBQ2MsZUFBakI7QUFBQSw4TEFBbUMsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDakJDLDRDQUFLLENBQUNDLEdBQU4scURBQytCRixHQUFHLENBQUNULEtBQUosQ0FBVUQsRUFEekMsRUFEaUI7O0FBQUE7QUFDN0JhLGVBRDZCO0FBSTdCWCxnQkFKNkIsR0FJdEJXLEdBQUcsQ0FBQ1gsSUFKa0I7QUFLakNZLG1CQUFPLENBQUNDLEdBQVIsQ0FBWWIsSUFBWjtBQUxpQyw2Q0FPMUI7QUFBRUEsa0JBQUksRUFBSkE7QUFBRixhQVAwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFuQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZVAsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL1tpZF0uODIwMDZhZDUzNjIxOTQxZDE4MmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCBicmVhZGNydW1iU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luVG9wOiAnMmVtJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNoYXJhY3RlclByb2ZpbGUocHJvcHMpIHtcclxuICBjb25zdCBicmVhZGNydW1icyA9IGJyZWFkY3J1bWJTdHlsZXMoKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YnJlYWRjcnVtYnMucm9vdH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICA8YT5Ib21lIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgLyA8c3Bhbj4ge3Byb3BzLmRhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBjb250YWluZXJcclxuICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgZGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICAgIHNwYWNpbmc9ezF9XHJcbiAgICAgID5cclxuICAgICAgICB7JyAnfVxyXG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSBhbHQ9e3Byb3BzLmRhdGEubmFtZX0gLz5cclxuICAgICAgICA8cD57cHJvcHMuZGF0YS5uYW1lfTwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzcGFuPlN0YXR1czo8L3NwYW4+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5zdGF0dXN9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHNwYW4+R2VuZGVyOjwvc3Bhbj5cclxuICAgICAgICAgIHtwcm9wcy5kYXRhLmdlbmRlcn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Bhbj5PcmlnaW46PC9zcGFuPlxyXG4gICAgICAgICAge3Byb3BzLmRhdGEub3JpZ2luLm5hbWV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHNwYW4+TGFzdCBrbm93biBsb2NhdGlvbjo8L3NwYW4+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5sb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvbnNlcXV1bnR1clxyXG4gICAgICAgICAgaW1wZWRpdCB0ZW1wb3JlLCBwZXJmZXJlbmRpcyBzaW50IGNvbnNlY3RldHVyIGNvcnJ1cHRpIHN1bnQgYXBlcmlhbVxyXG4gICAgICAgICAgZGVsZW5pdGkgdmVyaXRhdGlzIG5vbiBpbmNpZHVudCwgZGViaXRpcyBkaXN0aW5jdGlvIHV0IG51bXF1YW1cclxuICAgICAgICAgIHBhcmlhdHVyIG5pc2kgYXJjaGl0ZWN0bywgbmVxdWUgaXVzdG8/XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgPGJ1dHRvbj5Wb2x2ZXI8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNoYXJhY3RlclByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtjdHgucXVlcnkuaWR9YFxyXG4gICk7XHJcbiAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhcmFjdGVyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==