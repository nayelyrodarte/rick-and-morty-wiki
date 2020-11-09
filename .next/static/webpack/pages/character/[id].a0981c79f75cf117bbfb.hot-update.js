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
  bold: {
    fontWeight: 'bold'
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
  },
  card: {
    backgroundColor: '#ebe8ce',
    borderRadius: '20px',
    padding: '1.5em'
  },
  grid: {
    flexGrow: 1,
    borderRadius: '20px',
    textAlign: 'center',
    justifySelf: 'center',
    margin: 'auto',
    boxShadow: '4px 2px 5px -3px #000000'
  },
  img: {
    borderRadius: '50%'
  },
  link: {
    color: 'black'
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 'bold'
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
            className: styles.title,
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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              className: styles.bold,
              children: "Bio:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"]
          }, void 0, true, {
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
          lineNumber: 113,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJpZENoYXJhY3RlclN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWFyZ2luIiwiZm9udEZhbWlseSIsImJyZWFkY3J1bWJzIiwidGV4dEFsaWduIiwiYm9sZCIsImZvbnRXZWlnaHQiLCJidXR0b24iLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJjYXJkIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImdyaWQiLCJmbGV4R3JvdyIsImp1c3RpZnlTZWxmIiwiYm94U2hhZG93IiwiaW1nIiwibGluayIsInRpdGxlIiwiZm9udFNpemUiLCJjaGFyYWN0ZXJQcm9maWxlIiwicHJvcHMiLCJzdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsIm5hbWUiLCJpbWFnZSIsInN0YXR1cyIsImdlbmRlciIsIm9yaWdpbiIsImxvY2F0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsdUVBQVUsQ0FBQztBQUNuQ0MsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRSxTQURKO0FBRUpDLGNBQVUsRUFBRTtBQUZSLEdBRDZCO0FBS25DQyxhQUFXLEVBQUU7QUFDWEYsVUFBTSxFQUFFLE9BREc7QUFFWEcsYUFBUyxFQUFFO0FBRkEsR0FMc0I7QUFTbkNDLE1BQUksRUFBRTtBQUNKQyxjQUFVLEVBQUU7QUFEUixHQVQ2QjtB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LE1BQU0sQ0FBQ3hCLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzREQ7O0dBM0RRc0IsZ0I7VUFFUUkscUQ7OztBQTJEakJKLGdCQUFnQixDQUFDYyxlQUFqQjtBQUFBLDhMQUFtQyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNqQkMsNENBQUssQ0FBQ0MsR0FBTixxREFDK0JGLEdBQUcsQ0FBQ1QsS0FBSixDQUFVRCxFQUR6QyxFQURpQjs7QUFBQTtBQUM3QmEsZUFENkI7QUFJN0JYLGdCQUo2QixHQUl0QlcsR0FBRyxDQUFDWCxJQUprQjtBQUtqQ1ksbUJBQU8sQ0FBQ0MsR0FBUixDQUFZYixJQUFaO0FBTGlDLDZDQU8xQjtBQUFFQSxrQkFBSSxFQUFKQTtBQUFGLGFBUDBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW5DOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlUCwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXIvW2lkXS5hMDk4MWM3OWY3NWNmMTE3YmJmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xyXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3RhdHVzQmFyJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5cclxuY29uc3QgaWRDaGFyYWN0ZXJTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW46ICcyZW0gMGVtJyxcclxuICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxyXG4gIH0sXHJcbiAgYnJlYWRjcnVtYnM6IHtcclxuICAgIG1hcmdpbjogJzJlbSAwJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBib2xkOiB7XHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIGJhY2tncm91bmQ6ICcjMTU1Nzk5JyxcclxuICAgIHdpZHRoOiAnOGVtJyxcclxuICAgIGhlaWdodDogJzJlbScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICAgIG1hcmdpblRvcDogJzJlbScsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWJlOGNlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgcGFkZGluZzogJzEuNWVtJyxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAganVzdGlmeVNlbGY6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICBib3hTaGFkb3c6ICc0cHggMnB4IDVweCAtM3B4ICMwMDAwMDAnLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxLjVlbScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjaGFyYWN0ZXJQcm9maWxlKHByb3BzKSB7XHJcbiAgY29uc3Qgc3R5bGVzID0gaWRDaGFyYWN0ZXJTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluQ29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJyZWFkY3J1bWJzfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+IC8ge3Byb3BzLmRhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gc209ezh9IG1kPXs2fSBsZz17Nn0gY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtwcm9wcy5kYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17cHJvcHMuZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgIHdpZHRoPSc2MCUnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Byb3BzLmRhdGEubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+U3RhdHVzOjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8U3RhdHVzQmFyXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM9e3Byb3BzLmRhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBjb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5HZW5kZXI6PC9wPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmdlbmRlcn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5PcmlnaW46PC9wPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLm9yaWdpbi5uYW1lfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9Pkxhc3Qga25vd24gbG9jYXRpb246PC9wPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmxvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+QmlvOjwvcD5cclxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgIENvbnNlcXV1bnR1ciBpbXBlZGl0IHRlbXBvcmUsIHBlcmZlcmVuZGlzIHNpbnQgY29uc2VjdGV0dXJcclxuICAgICAgICAgICAgICBjb3JydXB0aSBzdW50IGFwZXJpYW0gZGVsZW5pdGkgdmVyaXRhdGlzIG5vbiBpbmNpZHVudCwgZGViaXRpc1xyXG4gICAgICAgICAgICAgIGRpc3RpbmN0aW8gdXQgbnVtcXVhbSBwYXJpYXR1ciBuaXNpIGFyY2hpdGVjdG8sIG5lcXVlIGl1c3RvP1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PkdvIGJhY2s8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNoYXJhY3RlclByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtjdHgucXVlcnkuaWR9YFxyXG4gICk7XHJcbiAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhcmFjdGVyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==