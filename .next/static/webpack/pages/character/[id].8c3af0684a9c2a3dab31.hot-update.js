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
  },
  button: {
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
            lineNumber: 69,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          className: styles.bold,
          children: [" / ", props.data.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
            className: styles.img
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: styles.bold,
            children: props.data.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              className: styles.bold,
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StatusBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
              status: props.data.status,
              style: {
                width: '50%',
                color: 'white'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: styles.bold,
              children: "Gender:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), props.data.gender]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: styles.bold,
              children: "Origin:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this), props.data.origin.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: styles.bold,
              children: "Last known location:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this), props.data.location.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: styles.button,
          children: "Go back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJpZENoYXJhY3RlclN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWFyZ2luIiwiZm9udEZhbWlseSIsImJyZWFkY3J1bWJzIiwidGV4dEFsaWduIiwibGluayIsImNvbG9yIiwidGl0bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJncmlkIiwiZmxleEdyb3ciLCJib3JkZXJSYWRpdXMiLCJqdXN0aWZ5U2VsZiIsImJveFNoYWRvdyIsImJvbGQiLCJjYXJkIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImltZyIsImJ1dHRvbiIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJjaGFyYWN0ZXJQcm9maWxlIiwicHJvcHMiLCJzdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsIm5hbWUiLCJpbWFnZSIsInN0YXR1cyIsImdlbmRlciIsIm9yaWdpbiIsImxvY2F0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsdUVBQVUsQ0FBQztBQUNuQ0MsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRSxTQURKO0FBRUpDLGNBQVUsRUFBRTtBQUZSLEdBRDZCO0FBS25DQyxhQUFXLEVBQUU7QUFDWEYsVUFBTSxFQUFFLE9BREc7QUFFWEcsYUFBUyxFQUFFO0FBRkEsR0FMc0I7QUFTbkNDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUU7QUFESCxHQVQ2QjtB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUREOztHQTFEUVMsZ0I7VUFFUUkscUQ7OztBQTBEakJKLGdCQUFnQixDQUFDYyxlQUFqQjtBQUFBLDhMQUFtQyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNqQkMsNENBQUssQ0FBQ0MsR0FBTixxREFDK0JGLEdBQUcsQ0FBQ1QsS0FBSixDQUFVRCxFQUR6QyxFQURpQjs7QUFBQTtBQUM3QmEsZUFENkI7QUFJN0JYLGdCQUo2QixHQUl0QlcsR0FBRyxDQUFDWCxJQUprQjtBQUtqQ1ksbUJBQU8sQ0FBQ0MsR0FBUixDQUFZYixJQUFaO0FBTGlDLDZDQU8xQjtBQUFFQSxrQkFBSSxFQUFKQTtBQUFGLGFBUDBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW5DOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlUCwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXIvW2lkXS44YzNhZjA2ODRhOWMyYTNkYWIzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xyXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhdHVzQmFyJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5cclxuY29uc3QgaWRDaGFyYWN0ZXJTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW46ICcyZW0gMGVtJyxcclxuICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gIH0sXHJcbiAgYnJlYWRjcnVtYnM6IHtcclxuICAgIG1hcmdpbjogJzJlbSAwJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBjb2xvcjogJ2JsYWNrJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogJzJlbScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlTZWxmOiAnY2VudGVyJyxcclxuICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgYm94U2hhZG93OiAnNHB4IDJweCA1cHggLTNweCAjMDAwMDAwJyxcclxuICB9LFxyXG4gIGJvbGQ6IHtcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlYmU4Y2UnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICBwYWRkaW5nOiAnMS41ZW0nLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnIzE1NTc5OScsXHJcbiAgICB3aWR0aDogJzhlbScsXHJcbiAgICBoZWlnaHQ6ICcyZW0nLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcbiAgICBtYXJnaW5Ub3A6ICcyZW0nLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhcmFjdGVyUHJvZmlsZShwcm9wcykge1xyXG4gIGNvbnN0IHN0eWxlcyA9IGlkQ2hhcmFjdGVyU3R5bGVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5icmVhZGNydW1ic30+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+SG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PiAvIHtwcm9wcy5kYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IHNtPXs4fSBtZD17Nn0gbGc9ezZ9IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17cHJvcHMuZGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9e3Byb3BzLmRhdGEubmFtZX1cclxuICAgICAgICAgICAgICB3aWR0aD0nNjAlJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+e3Byb3BzLmRhdGEubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+U3RhdHVzOjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8U3RhdHVzQmFyXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM9e3Byb3BzLmRhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBjb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5HZW5kZXI6PC9wPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmdlbmRlcn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5PcmlnaW46PC9wPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLm9yaWdpbi5uYW1lfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9Pkxhc3Qga25vd24gbG9jYXRpb246PC9wPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmxvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICBDb25zZXF1dW50dXIgaW1wZWRpdCB0ZW1wb3JlLCBwZXJmZXJlbmRpcyBzaW50IGNvbnNlY3RldHVyXHJcbiAgICAgICAgICAgICAgY29ycnVwdGkgc3VudCBhcGVyaWFtIGRlbGVuaXRpIHZlcml0YXRpcyBub24gaW5jaWR1bnQsIGRlYml0aXNcclxuICAgICAgICAgICAgICBkaXN0aW5jdGlvIHV0IG51bXF1YW0gcGFyaWF0dXIgbmlzaSBhcmNoaXRlY3RvLCBuZXF1ZSBpdXN0bz9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5HbyBiYWNrPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jaGFyYWN0ZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLyR7Y3R4LnF1ZXJ5LmlkfWBcclxuICApO1xyXG4gIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXJhY3RlclByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=