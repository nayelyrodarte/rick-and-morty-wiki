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







var bioStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  title: {
    fontWeight: 'bold'
  }
});

function characterProfile(props) {
  _s();

  var styles = bioStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        margin: '2em 0em'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          className: styles.title,
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [" / ", props.data.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
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
      children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: props.data.image,
        alt: props.data.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: props.data.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: styles.title,
          children: "Status: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), props.data.status]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: styles.title,
          children: "Gender: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), props.data.gender]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: styles.title,
          children: "Origin: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), props.data.origin.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: styles.title,
          children: "Last known location: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), props.data.location.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          children: "Go back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJiaW9TdHlsZXMiLCJtYWtlU3R5bGVzIiwidGl0bGUiLCJmb250V2VpZ2h0IiwiY2hhcmFjdGVyUHJvZmlsZSIsInByb3BzIiwic3R5bGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsIm1hcmdpbiIsImRhdGEiLCJuYW1lIiwiaW1hZ2UiLCJzdGF0dXMiLCJnZW5kZXIiLCJvcmlnaW4iLCJsb2NhdGlvbiIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImF4aW9zIiwiZ2V0IiwicmVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxzRUFBVSxDQUFDO0FBQzNCQyxPQUFLLEVBQUU7QUFDTEMsY0FBVSxFQUFFO0FBRFA7QUFEb0IsQ0FBRCxDQUE1Qjs7QUFNQSxTQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHTixTQUFTLEVBQXhCO0FBRUEsTUFBTU8sTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0YsTUFBTSxDQUFDRyxLQUFsQjtBQUVBLHNCQUNFLHFFQUFDLDJEQUFEO0FBQUEsNEJBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFO0FBQVYsT0FBWjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUVMLE1BQU0sQ0FBQ0osS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFBLDBCQUFVRyxLQUFLLENBQUNPLElBQU4sQ0FBV0MsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSxxRUFBQyxzREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUMsUUFBeEI7QUFBaUMsZUFBUyxFQUFDLFFBQTNDO0FBQW9ELGdCQUFVLEVBQUMsUUFBL0Q7QUFBQSxpQkFDRyxHQURILGVBRUU7QUFBSyxXQUFHLEVBQUVSLEtBQUssQ0FBQ08sSUFBTixDQUFXRSxLQUFyQjtBQUE0QixXQUFHLEVBQUVULEtBQUssQ0FBQ08sSUFBTixDQUFXQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBLGtCQUFJUixLQUFLLENBQUNPLElBQU4sQ0FBV0M7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBRVAsTUFBTSxDQUFDSixLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVHRyxLQUFLLENBQUNPLElBQU4sQ0FBV0csTUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQVFFO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFFVCxNQUFNLENBQUNKLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUdHLEtBQUssQ0FBQ08sSUFBTixDQUFXSSxNQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBWUU7QUFBQSxnQ0FDRTtBQUFNLG1CQUFTLEVBQUVWLE1BQU0sQ0FBQ0osS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR0csS0FBSyxDQUFDTyxJQUFOLENBQVdLLE1BQVgsQ0FBa0JKLElBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBZ0JFO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFFUCxNQUFNLENBQUNKLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUdHLEtBQUssQ0FBQ08sSUFBTixDQUFXTSxRQUFYLENBQW9CTCxJQUZ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkYsZUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkYsZUEwQkUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDs7R0EvQ1FULGdCO1VBR1FJLHFEOzs7QUE4Q2pCSixnQkFBZ0IsQ0FBQ2UsZUFBakI7QUFBQSw4TEFBbUMsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDakJDLDRDQUFLLENBQUNDLEdBQU4scURBQytCRixHQUFHLENBQUNWLEtBQUosQ0FBVUQsRUFEekMsRUFEaUI7O0FBQUE7QUFDN0JjLGVBRDZCO0FBSTdCWCxnQkFKNkIsR0FJdEJXLEdBQUcsQ0FBQ1gsSUFKa0I7QUFLakNZLG1CQUFPLENBQUNDLEdBQVIsQ0FBWWIsSUFBWjtBQUxpQyw2Q0FPMUI7QUFBRUEsa0JBQUksRUFBSkE7QUFBRixhQVAwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFuQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZVIsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL1tpZF0uMzU2MWE5Y2NiZGQzMWQ5MWUzZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCBiaW9TdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhcmFjdGVyUHJvZmlsZShwcm9wcykge1xyXG4gIGNvbnN0IHN0eWxlcyA9IGJpb1N0eWxlcygpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMmVtIDBlbScgfX0+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHNwYW4+IC8ge3Byb3BzLmRhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcicgZGlyZWN0aW9uPSdjb2x1bW4nIGFsaWduSXRlbXM9J2NlbnRlcic+XHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICA8aW1nIHNyYz17cHJvcHMuZGF0YS5pbWFnZX0gYWx0PXtwcm9wcy5kYXRhLm5hbWV9IC8+XHJcbiAgICAgICAgPHA+e3Byb3BzLmRhdGEubmFtZX08L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+U3RhdHVzOiA8L3NwYW4+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5zdGF0dXN9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkdlbmRlcjogPC9zcGFuPlxyXG4gICAgICAgICAge3Byb3BzLmRhdGEuZ2VuZGVyfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5PcmlnaW46IDwvc3Bhbj5cclxuICAgICAgICAgIHtwcm9wcy5kYXRhLm9yaWdpbi5uYW1lfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5MYXN0IGtub3duIGxvY2F0aW9uOiA8L3NwYW4+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5sb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvbnNlcXV1bnR1clxyXG4gICAgICAgICAgaW1wZWRpdCB0ZW1wb3JlLCBwZXJmZXJlbmRpcyBzaW50IGNvbnNlY3RldHVyIGNvcnJ1cHRpIHN1bnQgYXBlcmlhbVxyXG4gICAgICAgICAgZGVsZW5pdGkgdmVyaXRhdGlzIG5vbiBpbmNpZHVudCwgZGViaXRpcyBkaXN0aW5jdGlvIHV0IG51bXF1YW1cclxuICAgICAgICAgIHBhcmlhdHVyIG5pc2kgYXJjaGl0ZWN0bywgbmVxdWUgaXVzdG8/XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgPGJ1dHRvbj5HbyBiYWNrPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jaGFyYWN0ZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLyR7Y3R4LnF1ZXJ5LmlkfWBcclxuICApO1xyXG4gIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXJhY3RlclByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=