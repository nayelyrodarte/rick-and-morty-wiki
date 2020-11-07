webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MainContainer */ "./components/MainContainer.js");
/* harmony import */ var _components_CharacterCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CharacterCard */ "./components/CharacterCard.js");
/* harmony import */ var _components_CharactersContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CharactersContainer */ "./components/CharactersContainer.js");




var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\pages\\index.js",
    _s = $RefreshSig$();










function Index(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      searchCharacter = _useState[0],
      setSearchCharacter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.data.results),
      characters = _useState2[0],
      setCharacters = _useState2[1];

  var filterCharacters = characters.filter(function (character) {
    return character.name.toLowerCase().includes(searchCharacter.toLowerCase());
  });
  var displayCharacters = filterCharacters.map(function (character) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      xs: 10,
      sm: 6,
      md: 5,
      lg: 3,
      onClick: function onClick(e) {
        return console.log('hello');
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_CharacterCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        character: character
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, _this)
    }, character.id, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_MainContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        search: setSearchCharacter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_CharactersContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: displayCharacters
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
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

_s(Index, "V0S0usSAC6OHSfjPFV8LKie+gL0=");

_c = Index;
Index.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://rickandmortyapi.com/api/character/");

        case 2:
          res = _context.sent;
          data = res.data;
          return _context.abrupt("return", {
            data: data
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwic2VhcmNoQ2hhcmFjdGVyIiwic2V0U2VhcmNoQ2hhcmFjdGVyIiwiZGF0YSIsInJlc3VsdHMiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsImZpbHRlckNoYXJhY3RlcnMiLCJmaWx0ZXIiLCJjaGFyYWN0ZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRpc3BsYXlDaGFyYWN0ZXJzIiwibWFwIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwiZ2V0IiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDMEJDLHNEQUFRLENBQUMsRUFBRCxDQURsQztBQUFBLE1BQ2JDLGVBRGE7QUFBQSxNQUNJQyxrQkFESjs7QUFBQSxtQkFFZ0JGLHNEQUFRLENBQUNELEtBQUssQ0FBQ0ksSUFBTixDQUFXQyxPQUFaLENBRnhCO0FBQUEsTUFFYkMsVUFGYTtBQUFBLE1BRURDLGFBRkM7O0FBSXBCLE1BQU1DLGdCQUFnQixHQUFHRixVQUFVLENBQUNHLE1BQVgsQ0FBa0IsVUFBQ0MsU0FBRDtBQUFBLFdBQ3pDQSxTQUFTLENBQUNDLElBQVYsQ0FBZUMsV0FBZixHQUE2QkMsUUFBN0IsQ0FBc0NYLGVBQWUsQ0FBQ1UsV0FBaEIsRUFBdEMsQ0FEeUM7QUFBQSxHQUFsQixDQUF6QjtBQUlBLE1BQU1FLGlCQUFpQixHQUFHTixnQkFBZ0IsQ0FBQ08sR0FBakIsQ0FBcUIsVUFBQ0wsU0FBRDtBQUFBLHdCQUM3QyxxRUFBQyxzREFBRDtBQUNFLFVBQUksTUFETjtBQUVFLFFBQUUsRUFBRSxFQUZOO0FBR0UsUUFBRSxFQUFFLENBSE47QUFJRSxRQUFFLEVBQUUsQ0FKTjtBQUtFLFFBQUUsRUFBRSxDQUxOO0FBT0UsYUFBTyxFQUFFLGlCQUFDTSxDQUFEO0FBQUEsZUFBT0MsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixDQUFQO0FBQUEsT0FQWDtBQUFBLDZCQVNFLHFFQUFDLGlFQUFEO0FBQWUsaUJBQVMsRUFBRVI7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGLE9BTU9BLFNBQVMsQ0FBQ1MsRUFOakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQ2QztBQUFBLEdBQXJCLENBQTFCO0FBY0Esc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFBLDhCQUNFLHFFQUFDLDZEQUFEO0FBQVcsY0FBTSxFQUFFaEI7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsd0VBQUQ7QUFBQSxrQkFBcUJXO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7R0E5QlFmLEs7O0tBQUFBLEs7QUFnQ1RBLEtBQUssQ0FBQ3FCLGVBQU4saU1BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ05DLDRDQUFLLENBQUNDLEdBQU4sOENBRE07O0FBQUE7QUFDbEJDLGFBRGtCO0FBRWxCbkIsY0FGa0IsR0FFWG1CLEdBQUcsQ0FBQ25CLElBRk87QUFBQSwyQ0FJZjtBQUFFQSxnQkFBSSxFQUFKQTtBQUFGLFdBSmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFPZUwsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWE5NjQ4ZjdlMzlhYzM1ZWNiYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyJztcclxuaW1wb3J0IENoYXJhY3RlckNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFyYWN0ZXJDYXJkJztcclxuaW1wb3J0IENoYXJhY3RlckNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJhY3RlcnNDb250YWluZXInO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICBjb25zdCBbc2VhcmNoQ2hhcmFjdGVyLCBzZXRTZWFyY2hDaGFyYWN0ZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKHByb3BzLmRhdGEucmVzdWx0cyk7XHJcblxyXG4gIGNvbnN0IGZpbHRlckNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzLmZpbHRlcigoY2hhcmFjdGVyKSA9PlxyXG4gICAgY2hhcmFjdGVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hDaGFyYWN0ZXIudG9Mb3dlckNhc2UoKSlcclxuICApO1xyXG5cclxuICBjb25zdCBkaXNwbGF5Q2hhcmFjdGVycyA9IGZpbHRlckNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IChcclxuICAgIDxHcmlkXHJcbiAgICAgIGl0ZW1cclxuICAgICAgeHM9ezEwfVxyXG4gICAgICBzbT17Nn1cclxuICAgICAgbWQ9ezV9XHJcbiAgICAgIGxnPXszfVxyXG4gICAgICBrZXk9e2NoYXJhY3Rlci5pZH1cclxuICAgICAgb25DbGljaz17KGUpID0+IGNvbnNvbGUubG9nKCdoZWxsbycpfVxyXG4gICAgPlxyXG4gICAgICA8Q2hhcmFjdGVyQ2FyZCBjaGFyYWN0ZXI9e2NoYXJhY3Rlcn0gLz5cclxuICAgIDwvR3JpZD5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNYWluQ29udGFpbmVyPlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc2VhcmNoPXtzZXRTZWFyY2hDaGFyYWN0ZXJ9IC8+XHJcbiAgICAgICAgPENoYXJhY3RlckNvbnRhaW5lcj57ZGlzcGxheUNoYXJhY3RlcnN9PC9DaGFyYWN0ZXJDb250YWluZXI+XHJcbiAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9gKTtcclxuICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cclxuICByZXR1cm4geyBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==