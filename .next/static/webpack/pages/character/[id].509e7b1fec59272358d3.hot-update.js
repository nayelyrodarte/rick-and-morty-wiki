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




var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\pages\\character\\[id].js",
    _s = $RefreshSig$();






var characterBio = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    textAlign: center
  }
});

function characterProfile(props) {
  _s();

  var bioStyles = characterBio();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
        children: props.data.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
      src: props.data.image,
      alt: props.data.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: props.data.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: "Status:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), props.data.status]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: "Gender:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), props.data.gender]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: "Origin:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), props.data.origin.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: "Last known location:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), props.data.location.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit tempore, perferendis sint consectetur corrupti sunt aperiam deleniti veritatis non incidunt, debitis distinctio ut numquam pariatur nisi architecto, neque iusto?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        children: "Volver"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyLy5qcyJdLCJuYW1lcyI6WyJjaGFyYWN0ZXJCaW8iLCJtYWtlU3R5bGVzIiwicm9vdCIsInRleHRBbGlnbiIsImNlbnRlciIsImNoYXJhY3RlclByb2ZpbGUiLCJwcm9wcyIsImJpb1N0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJkYXRhIiwibmFtZSIsImltYWdlIiwic3RhdHVzIiwiZ2VuZGVyIiwib3JpZ2luIiwibG9jYXRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJheGlvcyIsImdldCIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0Msc0VBQVUsQ0FBQztBQUM5QkMsTUFBSSxFQUFFO0FBQ0pDLGFBQVMsRUFBRUM7QUFEUDtBQUR3QixDQUFELENBQS9COztBQU1BLFNBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUFBOztBQUMvQixNQUFNQyxTQUFTLEdBQUdQLFlBQVksRUFBOUI7QUFFQSxNQUFNUSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQUNHLEtBQWxCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUEsa0JBQUtMLEtBQUssQ0FBQ00sSUFBTixDQUFXQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRTtBQUFLLFNBQUcsRUFBRVAsS0FBSyxDQUFDTSxJQUFOLENBQVdFLEtBQXJCO0FBQTRCLFNBQUcsRUFBRVIsS0FBSyxDQUFDTSxJQUFOLENBQVdDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQVNFO0FBQUEsZ0JBQUlQLEtBQUssQ0FBQ00sSUFBTixDQUFXQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVVFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHUCxLQUFLLENBQUNNLElBQU4sQ0FBV0csTUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQWNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHVCxLQUFLLENBQUNNLElBQU4sQ0FBV0ksTUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQWtCRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR1YsS0FBSyxDQUFDTSxJQUFOLENBQVdLLE1BQVgsQ0FBa0JKLElBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRixlQXNCRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR1AsS0FBSyxDQUFDTSxJQUFOLENBQVdNLFFBQVgsQ0FBb0JMLElBRnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRixlQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRixlQWdDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0NEOztHQTVDUVIsZ0I7VUFHUUkscUQ7OztBQTJDakJKLGdCQUFnQixDQUFDYyxlQUFqQjtBQUFBLDhMQUFtQyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNqQkMsNENBQUssQ0FBQ0MsR0FBTixxREFDK0JGLEdBQUcsQ0FBQ1QsS0FBSixDQUFVRCxFQUR6QyxFQURpQjs7QUFBQTtBQUM3QmEsZUFENkI7QUFJN0JYLGdCQUo2QixHQUl0QlcsR0FBRyxDQUFDWCxJQUprQjtBQUtqQ1ksbUJBQU8sQ0FBQ0MsR0FBUixDQUFZYixJQUFaO0FBTGlDLDZDQU8xQjtBQUFFQSxrQkFBSSxFQUFKQTtBQUFGLGFBUDBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW5DOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlUCwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFyYWN0ZXIvW2lkXS41MDllN2IxZmVjNTkyNzIzNThkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuXHJcbmNvbnN0IGNoYXJhY3RlckJpbyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHRleHRBbGlnbjogY2VudGVyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhcmFjdGVyUHJvZmlsZShwcm9wcykge1xyXG4gIGNvbnN0IGJpb1N0eWxlcyA9IGNoYXJhY3RlckJpbygpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgIDxsaT5Ib21lPC9saT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGxpPntwcm9wcy5kYXRhLm5hbWV9PC9saT5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxpbWcgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSBhbHQ9e3Byb3BzLmRhdGEubmFtZX0gLz5cclxuICAgICAgPHA+e3Byb3BzLmRhdGEubmFtZX08L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIDxzcGFuPlN0YXR1czo8L3NwYW4+XHJcbiAgICAgICAge3Byb3BzLmRhdGEuc3RhdHVzfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIDxzcGFuPkdlbmRlcjo8L3NwYW4+XHJcbiAgICAgICAge3Byb3BzLmRhdGEuZ2VuZGVyfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIDxzcGFuPk9yaWdpbjo8L3NwYW4+XHJcbiAgICAgICAge3Byb3BzLmRhdGEub3JpZ2luLm5hbWV9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPHNwYW4+TGFzdCBrbm93biBsb2NhdGlvbjo8L3NwYW4+XHJcbiAgICAgICAge3Byb3BzLmRhdGEubG9jYXRpb24ubmFtZX1cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb25zZXF1dW50dXJcclxuICAgICAgICBpbXBlZGl0IHRlbXBvcmUsIHBlcmZlcmVuZGlzIHNpbnQgY29uc2VjdGV0dXIgY29ycnVwdGkgc3VudCBhcGVyaWFtXHJcbiAgICAgICAgZGVsZW5pdGkgdmVyaXRhdGlzIG5vbiBpbmNpZHVudCwgZGViaXRpcyBkaXN0aW5jdGlvIHV0IG51bXF1YW0gcGFyaWF0dXJcclxuICAgICAgICBuaXNpIGFyY2hpdGVjdG8sIG5lcXVlIGl1c3RvP1xyXG4gICAgICA8L3A+XHJcbiAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgIDxidXR0b24+Vm9sdmVyPC9idXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNoYXJhY3RlclByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtjdHgucXVlcnkuaWR9YFxyXG4gICk7XHJcbiAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hhcmFjdGVyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==