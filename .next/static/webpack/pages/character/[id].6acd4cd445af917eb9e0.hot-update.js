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
            style: {
              color: 'black'
            },
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          style: {
            fontWeight: 'bold'
          },
          children: [' ', "/ ", props.data.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
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
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            style: {
              fontWeight: 'bold'
            },
            children: props.data.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              style: {
                fontWeight: 'bold'
              },
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
              lineNumber: 91,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              style: {
                fontWeight: 'bold'
              },
              children: "Gender:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), props.data.gender]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              style: {
                fontWeight: 'bold'
              },
              children: "Origin:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this), props.data.origin.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              style: {
                fontWeight: 'bold'
              },
              children: "Last known location:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this), props.data.location.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
          lineNumber: 136,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJpZENoYXJhY3RlclN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWFyZ2luIiwiZm9udEZhbWlseSIsImJyZWFkY3J1bWJzIiwidGV4dEFsaWduIiwibGluayIsImNvbG9yIiwiY2hhcmFjdGVyUHJvZmlsZSIsInByb3BzIiwic3R5bGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImZvbnRXZWlnaHQiLCJkYXRhIiwibmFtZSIsImZsZXhHcm93IiwiYm9yZGVyUmFkaXVzIiwianVzdGlmeVNlbGYiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiaW1hZ2UiLCJzdGF0dXMiLCJ3aWR0aCIsImdlbmRlciIsIm9yaWdpbiIsImxvY2F0aW9uIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJheGlvcyIsImdldCIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGlCQUFpQixHQUFHQyx1RUFBVSxDQUFDO0FBQ25DQyxNQUFJLEVBQUU7QUFDSkMsVUFBTSxFQUFFLFNBREo7QUFFSkMsY0FBVSxFQUFFO0FBRlIsR0FENkI7QUFLbkNDLGFBQVcsRUFBRTtBQUNYRixVQUFNLEVBQUUsT0FERztBQUVYRyxhQUFTLEVBQUU7QUFGQSxHQUxzQjtBQVNuQ0MsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRTtBQURIO0FBVDZCLENBQUQsQ0FBcEM7O0FBY0EsU0FBU0MsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDO0FBQUE7O0FB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QUFJN0J6QixnQkFKNkIsR0FJdEJ5QixHQUFHLENBQUN6QixJQUprQjtBQUtqQzBCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWTNCLElBQVo7QUFMaUMsNkNBTzFCO0FBQUVBLGtCQUFJLEVBQUpBO0FBQUYsYUFQMEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBbkM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWVSLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXJhY3Rlci9baWRdLjZhY2Q0Y2Q0NDVhZjkxN2ViOWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lcic7XHJcbmltcG9ydCBTdGF0dXNCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0dXNCYXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcblxyXG5jb25zdCBpZENoYXJhY3RlclN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpbjogJzJlbSAwZW0nLFxyXG4gICAgZm9udEZhbWlseTogJ1JvYm90bycsXHJcbiAgfSxcclxuICBicmVhZGNydW1iczoge1xyXG4gICAgbWFyZ2luOiAnMmVtIDAnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhcmFjdGVyUHJvZmlsZShwcm9wcykge1xyXG4gIGNvbnN0IHN0eWxlcyA9IGlkQ2hhcmFjdGVyU3R5bGVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5icmVhZGNydW1ic30+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX0+SG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAvIHtwcm9wcy5kYXRhLm5hbWV9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgeHM9ezEwfVxyXG4gICAgICAgICAgc209ezh9XHJcbiAgICAgICAgICBtZD17Nn1cclxuICAgICAgICAgIGxnPXs2fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICc0cHggMnB4IDVweCAtM3B4ICMwMDAwMDAnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ViZThjZScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzEuNWVtJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17cHJvcHMuZGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9e3Byb3BzLmRhdGEubmFtZX1cclxuICAgICAgICAgICAgICB3aWR0aD0nNjAlJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmRhdGEubmFtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN0YXR1czpcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPFN0YXR1c0JhclxyXG4gICAgICAgICAgICAgICAgc3RhdHVzPXtwcm9wcy5kYXRhLnN0YXR1c31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgY29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR2VuZGVyOlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5nZW5kZXJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgT3JpZ2luOlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5vcmlnaW4ubmFtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMYXN0IGtub3duIGxvY2F0aW9uOlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5sb2NhdGlvbi5uYW1lfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgQ29uc2VxdXVudHVyIGltcGVkaXQgdGVtcG9yZSwgcGVyZmVyZW5kaXMgc2ludCBjb25zZWN0ZXR1clxyXG4gICAgICAgICAgICAgIGNvcnJ1cHRpIHN1bnQgYXBlcmlhbSBkZWxlbml0aSB2ZXJpdGF0aXMgbm9uIGluY2lkdW50LCBkZWJpdGlzXHJcbiAgICAgICAgICAgICAgZGlzdGluY3RpbyB1dCBudW1xdWFtIHBhcmlhdHVyIG5pc2kgYXJjaGl0ZWN0bywgbmVxdWUgaXVzdG8/XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMxNTU3OTknLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnOGVtJyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICcyZW0nLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR28gYmFja1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jaGFyYWN0ZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLyR7Y3R4LnF1ZXJ5LmlkfWBcclxuICApO1xyXG4gIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoYXJhY3RlclByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=