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
  input: {
    width: 'auto',
    height: '1.5em',
    borderRadius: '10px',
    border: 'solid #159857 2px'
  },
  img: {
    width: '3.5em',
    position: 'relative',
    top: '-1em'
  }
});

function characterProfile(props) {
  _s();

  var styles = idCharacterStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var id = router.query;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_MainContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        margin: '2em 0em',
        fontFamily: 'Roboto'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        style: {
          color: 'black',
          margin: '2em 0',
          textAlign: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            style: {
              color: 'black'
            },
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          style: {
            fontWeight: 'bold'
          },
          children: [' ', "/ ", props.data.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
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
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            style: {
              fontWeight: 'bold'
            },
            children: props.data.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              style: {
                fontWeight: 'bold'
              },
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StatusBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
              status: props.data.status,
              style: {
                width: '50%',
                color: 'white'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              style: {
                fontWeight: 'bold'
              },
              children: "Gender:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), props.data.gender]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              style: {
                fontWeight: 'bold'
              },
              children: "Origin:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, this), props.data.origin.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              style: {
                fontWeight: 'bold'
              },
              children: "Last known location:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this), props.data.location.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
          lineNumber: 151,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJpZENoYXJhY3RlclN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWFyZ2luIiwiZm9udEZhbWlseSIsImlucHV0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJpbWciLCJwb3NpdGlvbiIsInRvcCIsImNoYXJhY3RlclByb2ZpbGUiLCJwcm9wcyIsInN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJjb2xvciIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJkYXRhIiwibmFtZSIsImZsZXhHcm93IiwianVzdGlmeVNlbGYiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiaW1hZ2UiLCJzdGF0dXMiLCJnZW5kZXIiLCJvcmlnaW4iLCJsb2NhdGlvbiIsImJhY2tncm91bmQiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsdUVBQVUsQ0FBQztBQUNuQ0MsTUFBSSxFQUFFO0FBQ0pDLFVBQU0sRUFBRSxTQURKO0FBRUpDLGNBQVUsRUFBRTtBQUZSLEdBRDZCO0FBS25DQyxPQUFLLEVBQUU7QUFDTEMsU0FBSyxFQUFFLE1BREY7QUFFTEMsVUFBTSxFQUFFLE9BRkg7QUFHTEMsZ0JBQVksRUFBRSxNQUhUO0FBSUxDLFVBQU0sRUFBRTtBQUpILEdBTDRCO0FBV25DQyxLQUFHLEVBQUU7QUFDSEosU0FBSyxFQUFFLE9BREo7QUFFSEssWUFB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UCxnQjtVQUVRSSxxRDs7O0FBK0lqQkosZ0JBQWdCLENBQUMyQixlQUFqQjtBQUFBLDhMQUFtQyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNqQkMsNENBQUssQ0FBQ0MsR0FBTixxREFDK0JGLEdBQUcsQ0FBQ3RCLEtBQUosQ0FBVUQsRUFEekMsRUFEaUI7O0FBQUE7QUFDN0IwQixlQUQ2QjtBQUk3QnJCLGdCQUo2QixHQUl0QnFCLEdBQUcsQ0FBQ3JCLElBSmtCO0FBS2pDc0IsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsSUFBWjtBQUxpQyw2Q0FPMUI7QUFBRUEsa0JBQUksRUFBSkE7QUFBRixhQVAwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFuQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZVYsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL1tpZF0uMmZiNmU1N2RjMDRjNjcwMjU5NjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyJztcclxuaW1wb3J0IFN0YXR1c0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0YXR1c0Jhcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuXHJcbmNvbnN0IGlkQ2hhcmFjdGVyU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luOiAnMmVtIDBlbScsXHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICB9LFxyXG4gIGlucHV0OiB7XHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgaGVpZ2h0OiAnMS41ZW0nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICBib3JkZXI6ICdzb2xpZCAjMTU5ODU3IDJweCcsXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiAnMy41ZW0nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0b3A6ICctMWVtJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNoYXJhY3RlclByb2ZpbGUocHJvcHMpIHtcclxuICBjb25zdCBzdHlsZXMgPSBpZENoYXJhY3RlclN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5Db250YWluZXI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgbWFyZ2luOiAnMmVtIDBlbScsXHJcbiAgICAgICAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcyZW0gMCcsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fT5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgIC8ge3Byb3BzLmRhdGEubmFtZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICB4cz17MTB9XHJcbiAgICAgICAgICBzbT17OH1cclxuICAgICAgICAgIG1kPXs2fVxyXG4gICAgICAgICAgbGc9ezZ9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGp1c3RpZnlTZWxmOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzRweCAycHggNXB4IC0zcHggIzAwMDAwMCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWJlOGNlJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnMS41ZW0nLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtwcm9wcy5kYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17cHJvcHMuZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgIHdpZHRoPSc2MCUnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU3RhdHVzOlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8U3RhdHVzQmFyXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM9e3Byb3BzLmRhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBjb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHZW5kZXI6XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmdlbmRlcn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBPcmlnaW46XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLm9yaWdpbi5uYW1lfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExhc3Qga25vd24gbG9jYXRpb246XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmxvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICBDb25zZXF1dW50dXIgaW1wZWRpdCB0ZW1wb3JlLCBwZXJmZXJlbmRpcyBzaW50IGNvbnNlY3RldHVyXHJcbiAgICAgICAgICAgICAgY29ycnVwdGkgc3VudCBhcGVyaWFtIGRlbGVuaXRpIHZlcml0YXRpcyBub24gaW5jaWR1bnQsIGRlYml0aXNcclxuICAgICAgICAgICAgICBkaXN0aW5jdGlvIHV0IG51bXF1YW0gcGFyaWF0dXIgbmlzaSBhcmNoaXRlY3RvLCBuZXF1ZSBpdXN0bz9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzE1NTc5OScsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICc4ZW0nLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogJzJlbScsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHbyBiYWNrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNoYXJhY3RlclByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtjdHgucXVlcnkuaWR9YFxyXG4gICk7XHJcbiAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhcmFjdGVyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==