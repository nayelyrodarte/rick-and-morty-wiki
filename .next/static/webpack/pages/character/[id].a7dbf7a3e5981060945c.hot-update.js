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
        margin: '2em 0em',
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
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          children: [" / ", props.data.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        style: {
          flexGrow: 1,
          borderRadius: '20px',
          padding: '1.5em',
          textAlign: 'center'
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
            lineNumber: 44,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: props.data.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StatusBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
              status: props.data.status,
              style: {
                width: 'max-content'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
              children: "Gender:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this), props.data.gender]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "Origin:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this), props.data.origin.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "Last known location:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this), props.data.location.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJjaGFyYWN0ZXJQcm9maWxlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibWFyZ2luIiwiZm9udEZhbWlseSIsImNvbG9yIiwiZm9udFdlaWdodCIsImRhdGEiLCJuYW1lIiwiZmxleEdyb3ciLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwiaW1hZ2UiLCJzdGF0dXMiLCJ3aWR0aCIsImdlbmRlciIsIm9yaWdpbiIsImxvY2F0aW9uIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIm1hcmdpblRvcCIsImJvcmRlciIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImF4aW9zIiwiZ2V0IiwicmVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQUNHLEtBQWxCO0FBRUEsc0JBQ0UscUVBQUMsaUVBQUQ7QUFBQSwyQkFDRTtBQUNFLFdBQUssRUFBRTtBQUNMQyxjQUFNLEVBQUUsU0FESDtBQUVMQyxrQkFBVSxFQUFFO0FBRlAsT0FEVDtBQUFBLDhCQU1FO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNFO0FBQUcsaUJBQUssRUFBRTtBQUFFQyxtQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLHdCQUFVLEVBQUU7QUFBOUIsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JB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ekMsRUFEaUI7O0FBQUE7QUFDN0IyQixlQUQ2QjtBQUk3QnJCLGdCQUo2QixHQUl0QnFCLEdBQUcsQ0FBQ3JCLElBSmtCO0FBS2pDc0IsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsSUFBWjtBQUxpQyw2Q0FPMUI7QUFBRUEsa0JBQUksRUFBSkE7QUFBRixhQVAwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFuQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZVYsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVyL1tpZF0uYTdkYmY3YTNlNTk4MTA2MDk0NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyJztcclxuaW1wb3J0IFN0YXR1c0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0YXR1c0Jhcic7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24gY2hhcmFjdGVyUHJvZmlsZShwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5Db250YWluZXI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgbWFyZ2luOiAnMmVtIDBlbScsXHJcbiAgICAgICAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPHNwYW4+IC8ge3Byb3BzLmRhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMS41ZW0nLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ViZThjZScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzEuNWVtJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17cHJvcHMuZGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9e3Byb3BzLmRhdGEubmFtZX1cclxuICAgICAgICAgICAgICB3aWR0aD0nNjAlJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy5kYXRhLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlN0YXR1czo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPFN0YXR1c0JhclxyXG4gICAgICAgICAgICAgICAgc3RhdHVzPXtwcm9wcy5kYXRhLnN0YXR1c31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnbWF4LWNvbnRlbnQnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxwPkdlbmRlcjo8L3A+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmRhdGEuZ2VuZGVyfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk9yaWdpbjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmRhdGEub3JpZ2luLm5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHNwYW4+TGFzdCBrbm93biBsb2NhdGlvbjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmRhdGEubG9jYXRpb24ubmFtZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgIENvbnNlcXV1bnR1ciBpbXBlZGl0IHRlbXBvcmUsIHBlcmZlcmVuZGlzIHNpbnQgY29uc2VjdGV0dXJcclxuICAgICAgICAgICAgICBjb3JydXB0aSBzdW50IGFwZXJpYW0gZGVsZW5pdGkgdmVyaXRhdGlzIG5vbiBpbmNpZHVudCwgZGViaXRpc1xyXG4gICAgICAgICAgICAgIGRpc3RpbmN0aW8gdXQgbnVtcXVhbSBwYXJpYXR1ciBuaXNpIGFyY2hpdGVjdG8sIG5lcXVlIGl1c3RvP1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMTU1Nzk5JyxcclxuICAgICAgICAgICAgICB3aWR0aDogJzhlbScsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMmVtJyxcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHbyBiYWNrXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNoYXJhY3RlclByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtjdHgucXVlcnkuaWR9YFxyXG4gICk7XHJcbiAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhcmFjdGVyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==