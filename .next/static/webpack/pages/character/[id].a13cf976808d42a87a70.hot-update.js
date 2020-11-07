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
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [" / ", props.data.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #159957, #155799)',
        borderRadius: '20px',
        padding: '1.5em',
        boxShadow: '4px 2px 5px -3px #000000'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          background: '#ebe8ce',
          borderRadius: '20px',
          padding: '1.5em'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: props.data.image,
          alt: props.data.name,
          width: "fit-content"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: props.data.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Status:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), props.data.status]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Gender:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), props.data.gender]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Origin:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), props.data.origin.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            children: "Last known location:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), props.data.location.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
        lineNumber: 73,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJjaGFyYWN0ZXJQcm9maWxlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibWFyZ2luIiwiZm9udEZhbWlseSIsImNvbG9yIiwiZm9udFdlaWdodCIsImRhdGEiLCJuYW1lIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJpbWFnZSIsInN0YXR1cyIsImdlbmRlciIsIm9yaWdpbiIsImxvY2F0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJheGlvcyIsImdldCIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0YsTUFBTSxDQUFDRyxLQUFsQjtBQUVBLHNCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxLQURIO0FBRUxDLGdCQUFVLEVBQUU7QUFGUCxLQURUO0FBQUEsNEJBTUU7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFBRyxlQUFLLEVBQUU7QUFBRUMsaUJBQUssRUFBRSxPQUFUO0FBQWtCQyxzQkFBVSxFQUFFO0FBQTlCLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFBLDBCQUFVUixLQUFLLENBQUNTLElBQU4sQ0FBV0MsSUFBckI7QUFBQTtBQUFBO0FB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QWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL1tpZF0uYTEzY2Y5NzY4MDhkNDJhODdhNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBjaGFyYWN0ZXJQcm9maWxlKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgbWFyZ2luOiAnMmVtJyxcclxuICAgICAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgZm9udFdlaWdodDogJ2JvbGQnIH19PkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxzcGFuPiAvIHtwcm9wcy5kYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE1OTk1NywgIzE1NTc5OSknLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnMS41ZW0nLFxyXG4gICAgICAgICAgYm94U2hhZG93OiAnNHB4IDJweCA1cHggLTNweCAjMDAwMDAwJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNlYmU4Y2UnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzEuNWVtJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3Byb3BzLmRhdGEuaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD17cHJvcHMuZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICB3aWR0aD0nZml0LWNvbnRlbnQnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHA+e3Byb3BzLmRhdGEubmFtZX08L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHNwYW4+U3RhdHVzOjwvc3Bhbj5cclxuICAgICAgICAgICAge3Byb3BzLmRhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuPkdlbmRlcjo8L3NwYW4+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kYXRhLmdlbmRlcn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Bhbj5PcmlnaW46PC9zcGFuPlxyXG4gICAgICAgICAgICB7cHJvcHMuZGF0YS5vcmlnaW4ubmFtZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3Bhbj5MYXN0IGtub3duIGxvY2F0aW9uOjwvc3Bhbj5cclxuICAgICAgICAgICAge3Byb3BzLmRhdGEubG9jYXRpb24ubmFtZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICBDb25zZXF1dW50dXIgaW1wZWRpdCB0ZW1wb3JlLCBwZXJmZXJlbmRpcyBzaW50IGNvbnNlY3RldHVyIGNvcnJ1cHRpXHJcbiAgICAgICAgICAgIHN1bnQgYXBlcmlhbSBkZWxlbml0aSB2ZXJpdGF0aXMgbm9uIGluY2lkdW50LCBkZWJpdGlzIGRpc3RpbmN0aW8gdXRcclxuICAgICAgICAgICAgbnVtcXVhbSBwYXJpYXR1ciBuaXNpIGFyY2hpdGVjdG8sIG5lcXVlIGl1c3RvP1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMTU1Nzk5JyxcclxuICAgICAgICAgICAgd2lkdGg6ICc4ZW0nLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcyZW0nLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBWb2x2ZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY2hhcmFjdGVyUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2N0eC5xdWVyeS5pZH1gXHJcbiAgKTtcclxuICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICByZXR1cm4geyBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFyYWN0ZXJQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9