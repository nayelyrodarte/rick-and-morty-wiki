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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), props.data.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "Gender:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this), props.data.gender]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "Origin:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this), props.data.origin.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
              children: "Last known location:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this), props.data.location.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
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
          children: "Volver"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJjaGFyYWN0ZXJQcm9maWxlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibWFyZ2luIiwiZm9udEZhbWlseSIsImNvbG9yIiwiZm9udFdlaWdodCIsImRhdGEiLCJuYW1lIiwiZmxleEdyb3ciLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwiaW1hZ2UiLCJzdGF0dXMiLCJnZW5kZXIiLCJvcmlnaW4iLCJsb2NhdGlvbiIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblRvcCIsImJvcmRlciIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImF4aW9zIiwiZ2V0IiwicmVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQUNHLEtBQWxCO0FBRUEsc0JBQ0UscUVBQUMsaUVBQUQ7QUFBQSwyQkFDRTtBQUNFLFdBQUssRUFBRTtBQUNMQyxjQUFNLEVBQUUsS0FESDtBQUVMQyxrQkFBVSxFQUFFO0FBRlAsT0FEVDtBQUFBLDhCQU1FO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNFO0FBQUcsaUJBQUssRUFBRTtBQUFFQyxtQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLHdCQUFVLEVBQUU7QUFBOUIsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFBLDRCQUFVUixLQUFLLENBQUNTLElBQU4sQ0FBV0MsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBYUUscUVBQUMsc0RBQUQ7QUFDRSxhQUFLLEVBQUU7QUFDTEMsa0JBQVEsRUFBRSxDQURMO0FBRUxDLHNCQUFZLEVBQUUsTUFGVDtBQUdMQyxpQkFBTyxFQUFFLE9BSEo7QUFJTEMsbUJBQVMsRUFBRTtBQUpOLFNBRFQ7QUFBQSwrQkFRRTtBQUNFLGVBQUssRUFBRTtBQUNMQywyQkFBZSxFQUFFLFNBRFo7QUFFTEgsd0JBQVksRUFBRSxNQUZUO0FBR0xDLG1CQUFPLEVBQUU7QUFISixXQURUO0FBQUEsa0NBT0U7QUFDRSxlQUFHLEVBQUViLEtBQUssQ0FBQ1MsSUFBTixDQUFXTyxLQURsQjtBQUVFLGVBQUcsRUFBRWhCLEtBQUssQ0FBQ1MsSUFBTixDQUFXQyxJQUZsQjtBQUdFLGlCQUFLLEVBQUMsS0FIUjtBQUlFLGlCQUFLLEVBQUU7QUFDTEUsMEJBQVksRUFBRTtBQURUO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQWVFO0FBQUEsc0JBQUlaLEtBQUssQ0FBQ1MsSUFBTixDQUFXQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZkYsZUFnQkU7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVHVixLQUFLLENBQUNTLElBQU4sQ0FBV1EsTUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEJGLGVBb0JFO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFR2pCLEtBQUssQ0FBQ1MsSUFBTixDQUFXUyxNQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQkYsZUF3QkU7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVHbEIsS0FBSyxDQUFDUyxJQUFOLENBQVdVLE1BQVgsQ0FBa0JULElBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4QkYsZUE0QkU7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVHVixLQUFLLENBQUNTLElBQU4sQ0FBV1csUUFBWCxDQUFvQlYsSUFGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVCRixlQWdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBOERFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUNFLGVBQUssRUFBRTtBQUNMVyxzQkFBVSxFQUFFLFNBRFA7QUFFTEMsaUJBQUssRUFBRSxLQUZGO0FBR0xDLGtCQUFNLEVBQUUsS0FISDtBQUlMQyxxQkFBUyxFQUFFLEtBSk47QUFLTEMsa0JBQU0sRUFBRSxNQUxIO0FBTUxiLHdCQUFZLEVBQUUsTUFOVDtBQU9MTCxpQkFBSyxFQUFFO0FBUEYsV0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0ZEOztHQXRGUVIsZ0I7VUFDUUcscUQ7OztBQXVGakJILGdCQUFnQixDQUFDMkIsZUFBakI7QUFBQSw4TEFBbUMsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDakJDLDRDQUFLLENBQUNDLEdBQU4scURBQytCRixHQUFHLENBQUN2QixLQUFKLENBQVVELEVBRHpDLEVBRGlCOztBQUFBO0FBQzdCMkIsZUFENkI7QUFJN0JyQixnQkFKNkIsR0FJdEJxQixHQUFHLENBQUNyQixJQUprQjtBQUtqQ3NCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWXZCLElBQVo7QUFMaUMsNkNBTzFCO0FBQUVBLGtCQUFJLEVBQUpBO0FBQUYsYUFQMEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBbkM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWVWLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXJhY3Rlci9baWRdLjNjYzk5YTQwNDU2MDFmMWU0NThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lcic7XHJcbmltcG9ydCBTdGF0dXNCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdGF0dXNCYXInO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIGNoYXJhY3RlclByb2ZpbGUocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluQ29udGFpbmVyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIG1hcmdpbjogJzJlbScsXHJcbiAgICAgICAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Ib21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPHNwYW4+IC8ge3Byb3BzLmRhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMS41ZW0nLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ViZThjZScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzEuNWVtJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17cHJvcHMuZGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9e3Byb3BzLmRhdGEubmFtZX1cclxuICAgICAgICAgICAgICB3aWR0aD0nNjAlJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwPntwcm9wcy5kYXRhLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Bhbj5TdGF0dXM6PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLnN0YXR1c31cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Bhbj5HZW5kZXI6PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmdlbmRlcn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8c3Bhbj5PcmlnaW46PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLm9yaWdpbi5uYW1lfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkxhc3Qga25vd24gbG9jYXRpb246PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5kYXRhLmxvY2F0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICBDb25zZXF1dW50dXIgaW1wZWRpdCB0ZW1wb3JlLCBwZXJmZXJlbmRpcyBzaW50IGNvbnNlY3RldHVyXHJcbiAgICAgICAgICAgICAgY29ycnVwdGkgc3VudCBhcGVyaWFtIGRlbGVuaXRpIHZlcml0YXRpcyBub24gaW5jaWR1bnQsIGRlYml0aXNcclxuICAgICAgICAgICAgICBkaXN0aW5jdGlvIHV0IG51bXF1YW0gcGFyaWF0dXIgbmlzaSBhcmNoaXRlY3RvLCBuZXF1ZSBpdXN0bz9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzE1NTc5OScsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICc4ZW0nLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogJzJlbScsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVm9sdmVyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNoYXJhY3RlclByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtjdHgucXVlcnkuaWR9YFxyXG4gICk7XHJcbiAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhcmFjdGVyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==