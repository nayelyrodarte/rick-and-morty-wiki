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
/* harmony import */ var _components_StatusBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/StatusBar */ "./components/StatusBar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\pages\\character\\[id].js",
    _s = $RefreshSig$();









function characterProfile(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_MainContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        fontFamily: 'Roboto'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            style: {
              color: 'black'
            },
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          style: {
            fontWeight: 'bold'
          },
          children: [' ', "/ ", props.data.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        xs: 10,
        sm: 8,
        md: 6,
        lg: 6,
        style: {
          flexGrow: 1,
          borderRadius: '20px',
          textAlign: 'center',
          justifySelf: 'center',
          margin: 'auto',
          boxShadow: '4px 2px 5px -3px #000000'
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
            lineNumber: 60,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: props.data.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StatusBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
              status: props.data.status,
              style: {
                width: 'max-content'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: "Gender:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this), props.data.gender]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "Origin:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), props.data.origin.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "Last known location:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), props.data.location.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
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
          children: "Go back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
            return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://rickandmortyapi.com/api/character/".concat(ctx.query.id));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJjaGFyYWN0ZXJQcm9maWxlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZGlzcGxheSIsImZvbnRGYW1pbHkiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJkYXRhIiwibmFtZSIsImZsZXhHcm93IiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwianVzdGlmeVNlbGYiLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiaW1hZ2UiLCJzdGF0dXMiLCJ3aWR0aCIsImdlbmRlciIsIm9yaWdpbiIsImxvY2F0aW9uIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIm1hcmdpblRvcCIsImJvcmRlciIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImF4aW9zIiwiZ2V0IiwicmVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQUNHLEtBQWxCO0FBRUEsc0JBQ0UscUVBQUMsaUVBQUQ7QUFBQSwyQkFDRTtBQUNFLFdBQUssRUFBRTtBQUNMQyxrQkFBVSxFQUFFLE1BRFA7QUFFTEMsbUJBQVcsRUFBRSxNQUZSO0FBR0xDLGVBQU8sRUFBRSxPQUhKO0FBSUxDLGtCQUFVLEVBQUU7QUFKUCxPQURUO0FBQUEsOEJBUUU7QUFBQSxnQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFBRyxpQkFBSyxFQUFFO0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFHRDs7R0F6R1FWLGdCO1VBQ1FHLHFEOzs7QUEwR2pCSCxnQkFBZ0IsQ0FBQ2dDLGVBQWpCO0FBQUEsOExBQW1DLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2pCQyw0Q0FBSyxDQUFDQyxHQUFOLHFEQUMrQkYsR0FBRyxDQUFDNUIsS0FBSixDQUFVRCxFQUR6QyxFQURpQjs7QUFBQTtBQUM3QmdDLGVBRDZCO0FBSTdCeEIsZ0JBSjZCLEdBSXRCd0IsR0FBRyxDQUFDeEIsSUFKa0I7QUFLakN5QixtQkFBTyxDQUFDQyxHQUFSLENBQVkxQixJQUFaO0FBTGlDLDZDQU8xQjtBQUFFQSxrQkFBSSxFQUFKQTtBQUFGLGFBUDBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW5DOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlWiwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXIvW2lkXS41Y2UwYTkyNzUxZjgxYTI3MGE4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xyXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhdHVzQmFyJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBjaGFyYWN0ZXJQcm9maWxlKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxyXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fT5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIC8ge3Byb3BzLmRhdGEubmFtZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICB4cz17MTB9XHJcbiAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgbGc9ezZ9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGp1c3RpZnlTZWxmOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzRweCAycHggNXB4IC0zcHggIzAwMDAwMCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWJlOGNlJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnMS41ZW0nLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtwcm9wcy5kYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17cHJvcHMuZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgIHdpZHRoPSc2MCUnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHA+e3Byb3BzLmRhdGEubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+U3RhdHVzOjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8U3RhdHVzQmFyXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM9e3Byb3BzLmRhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICdtYXgtY29udGVudCcgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHA+R2VuZGVyOjwvcD5cclxuICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5nZW5kZXJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHNwYW4+T3JpZ2luOjwvc3Bhbj5cclxuICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5vcmlnaW4ubmFtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Bhbj5MYXN0IGtub3duIGxvY2F0aW9uOjwvc3Bhbj5cclxuICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5sb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgQ29uc2VxdXVudHVyIGltcGVkaXQgdGVtcG9yZSwgcGVyZmVyZW5kaXMgc2ludCBjb25zZWN0ZXR1clxyXG4gICAgICAgICAgICAgIGNvcnJ1cHRpIHN1bnQgYXBlcmlhbSBkZWxlbml0aSB2ZXJpdGF0aXMgbm9uIGluY2lkdW50LCBkZWJpdGlzXHJcbiAgICAgICAgICAgICAgZGlzdGluY3RpbyB1dCBudW1xdWFtIHBhcmlhdHVyIG5pc2kgYXJjaGl0ZWN0bywgbmVxdWUgaXVzdG8/XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMxNTU3OTknLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnOGVtJyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICcyZW0nLFxyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogJzJlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdvIGJhY2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L01haW5Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY2hhcmFjdGVyUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2N0eC5xdWVyeS5pZH1gXHJcbiAgKTtcclxuICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICByZXR1cm4geyBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGFyYWN0ZXJQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9