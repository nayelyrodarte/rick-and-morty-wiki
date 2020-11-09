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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/MainContainer */ "./components/MainContainer.js");
/* harmony import */ var _components_StatusBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/StatusBar */ "./components/StatusBar.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");




var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\pages\\character\\[id].js",
    _s = $RefreshSig$();









var idCharacterStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
  root: {
    margin: '2em 0em',
    fontFamily: 'Roboto'
  },
  breadcrumbs: {
    margin: '2em 0',
    textAlign: 'center'
  },
  link: {
    color: 'black'
  },
  title: {
    fontSize: '2em',
    fontWeight: 'bold'
  },
  grid: {
    flexGrow: 1,
    borderRadius: '20px',
    textAlign: 'center',
    justifySelf: 'center',
    margin: 'auto',
    boxShadow: '4px 2px 5px -3px #000000'
  },
  bold: {
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#ebe8ce',
    borderRadius: '20px',
    padding: '1.5em'
  },
  img: {
    borderRadius: '50%'
  }
});

function characterProfile(props) {
  _s();

  var styles = idCharacterStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var id = router.query;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_MainContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: styles.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: styles.breadcrumbs,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            className: styles.link,
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: styles.bold,
          children: [" / ", props.data.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        item: true,
        xs: 10,
        sm: 8,
        md: 6,
        lg: 6,
        className: styles.grid,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: styles.card,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: props.data.image,
            alt: props.data.name,
            width: "60%",
            style: {
              borderRadius: '50%'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            style: {
              fontWeight: 'bold'
            },
            children: props.data.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              style: {
                fontWeight: 'bold'
              },
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StatusBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
              status: props.data.status,
              style: {
                width: '50%',
                color: 'white'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              style: {
                fontWeight: 'bold'
              },
              children: "Gender:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this), props.data.gender]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              style: {
                fontWeight: 'bold'
              },
              children: "Origin:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this), props.data.origin.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              style: {
                fontWeight: 'bold'
              },
              children: "Last known location:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this), props.data.location.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          style: {
            background: '#155799',
            width: '8em',
            height: '2em',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '2em',
            border: 'none',
            borderRadius: '10px',
            color: 'white'
          },
          children: "Go back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

_s(characterProfile, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

characterProfile.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://rickandmortyapi.com/api/character/".concat(ctx.query.id));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJpZENoYXJhY3RlclN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWFyZ2luIiwiZm9udEZhbWlseSIsImJyZWFkY3J1bWJzIiwidGV4dEFsaWduIiwibGluayIsImNvbG9yIiwidGl0bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJncmlkIiwiZmxleEdyb3ciLCJib3JkZXJSYWRpdXMiLCJqdXN0aWZ5U2VsZiIsImJveFNoYWRvdyIsImJvbGQiLCJjYXJkIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImltZyIsImNoYXJhY3RlclByb2ZpbGUiLCJwcm9wcyIsInN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJkYXRhIiwibmFtZSIsImltYWdlIiwic3RhdHVzIiwid2lkdGgiLCJnZW5kZXIiLCJvcmlnaW4iLCJsb2NhdGlvbiIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsdUVBQVUsQ0FBQztBQUNuQ0MsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRSxTQURKO0FBRUpDLGNBQVUsRUFBRTtBQUZSLEdBRDZCO0FBS25DQyxhQUFXLEVBQUU7QUFDWEYsVUFBTSxFQUFFLE9BREc7QUFFWEcsYUFBUyxFQUFFO0FBRkEsR0FMc0I7QUFTbkNDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUU7QUFESCxHQVQ2QjtBQVluQ0MsT0FB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QUFBLGNBN0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9HRDs7R0F6R1FjLGdCO1VBRVFJLHFEOzs7QUF5R2pCSixnQkFBZ0IsQ0FBQ3NCLGVBQWpCO0FBQUEsOExBQW1DLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2pCQyw0Q0FBSyxDQUFDQyxHQUFOLHFEQUMrQkYsR0FBRyxDQUFDakIsS0FBSixDQUFVRCxFQUR6QyxFQURpQjs7QUFBQTtBQUM3QnFCLGVBRDZCO0FBSTdCbkIsZ0JBSjZCLEdBSXRCbUIsR0FBRyxDQUFDbkIsSUFKa0I7QUFLakNvQixtQkFBTyxDQUFDQyxHQUFSLENBQVlyQixJQUFaO0FBTGlDLDZDQU8xQjtBQUFFQSxrQkFBSSxFQUFKQTtBQUFGLGFBUDBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW5DOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlUCwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXIvW2lkXS43MDdmMjc3ZTAxYmFhYjEwMzBjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xyXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhdHVzQmFyJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5cclxuY29uc3QgaWRDaGFyYWN0ZXJTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW46ICcyZW0gMGVtJyxcclxuICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gIH0sXHJcbiAgYnJlYWRjcnVtYnM6IHtcclxuICAgIG1hcmdpbjogJzJlbSAwJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogJzJlbScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlTZWxmOiAnY2VudGVyJyxcclxuICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgYm94U2hhZG93OiAnNHB4IDJweCA1cHggLTNweCAjMDAwMDAwJyxcclxuICB9LFxyXG4gIGJvbGQ6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlYmU4Y2UnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICBwYWRkaW5nOiAnMS41ZW0nLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhcmFjdGVyUHJvZmlsZShwcm9wcykge1xyXG4gIGNvbnN0IHN0eWxlcyA9IGlkQ2hhcmFjdGVyU3R5bGVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5icmVhZGNydW1ic30+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+SG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PiAvIHtwcm9wcy5kYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IHNtPXs4fSBtZD17Nn0gbGc9ezZ9IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17cHJvcHMuZGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9e3Byb3BzLmRhdGEubmFtZX1cclxuICAgICAgICAgICAgICB3aWR0aD0nNjAlJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmRhdGEubmFtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN0YXR1czpcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPFN0YXR1c0JhclxyXG4gICAgICAgICAgICAgICAgc3RhdHVzPXtwcm9wcy5kYXRhLnN0YXR1c31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgY29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR2VuZGVyOlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5nZW5kZXJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgT3JpZ2luOlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5vcmlnaW4ubmFtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMYXN0IGtub3duIGxvY2F0aW9uOlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5sb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgQ29uc2VxdXVudHVyIGltcGVkaXQgdGVtcG9yZSwgcGVyZmVyZW5kaXMgc2ludCBjb25zZWN0ZXR1clxyXG4gICAgICAgICAgICAgIGNvcnJ1cHRpIHN1bnQgYXBlcmlhbSBkZWxlbml0aSB2ZXJpdGF0aXMgbm9uIGluY2lkdW50LCBkZWJpdGlzXHJcbiAgICAgICAgICAgICAgZGlzdGluY3RpbyB1dCBudW1xdWFtIHBhcmlhdHVyIG5pc2kgYXJjaGl0ZWN0bywgbmVxdWUgaXVzdG8/XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMxNTU3OTknLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnOGVtJyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICcyZW0nLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR28gYmFja1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jaGFyYWN0ZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLyR7Y3R4LnF1ZXJ5LmlkfWBcclxuICApO1xyXG4gIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXJhY3RlclByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=