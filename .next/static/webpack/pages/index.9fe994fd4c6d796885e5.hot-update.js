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
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MainContainer */ "./components/MainContainer.js");
/* harmony import */ var _components_CharacterCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CharacterCard */ "./components/CharacterCard.js");
/* harmony import */ var _components_CharactersContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CharactersContainer */ "./components/CharactersContainer.js");




var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\pages\\index.js",
    _s = $RefreshSig$();









function Index(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('1'),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      searchCharacter = _useState2[0],
      setSearchCharacter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.data.results),
      characters = _useState3[0],
      setCharacters = _useState3[1];

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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_CharacterCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        character: character
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, _this)
    }, character.id, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_MainContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        search: setSearchCharacter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_CharactersContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: displayCharacters
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(Index, "FE7HRbHw4v90FXJn0GL/eRti0Yo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInNlYXJjaENoYXJhY3RlciIsInNldFNlYXJjaENoYXJhY3RlciIsImRhdGEiLCJyZXN1bHRzIiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJmaWx0ZXJDaGFyYWN0ZXJzIiwiZmlsdGVyIiwiY2hhcmFjdGVyIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXNwbGF5Q2hhcmFjdGVycyIsIm1hcCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDLEdBQUQsQ0FEMUI7QUFBQSxNQUNiQyxXQURhO0FBQUEsTUFDQUMsY0FEQTs7QUFBQSxtQkFFMEJGLHNEQUFRLENBQUMsRUFBRCxDQUZsQztBQUFBLE1BRWJHLGVBRmE7QUFBQSxNQUVJQyxrQkFGSjs7QUFBQSxtQkFHZ0JKLHNEQUFRLENBQUNELEtBQUssQ0FBQ00sSUFBTixDQUFXQyxPQUFaLENBSHhCO0FBQUEsTUFHYkMsVUFIYTtBQUFBLE1BR0RDLGFBSEM7O0FBS3BCLE1BQU1DLGdCQUFnQixHQUFHRixVQUFVLENBQUNHLE1BQVgsQ0FBa0IsVUFBQ0MsU0FBRDtBQUFBLFdBQ3pDQSxTQUFTLENBQUNDLElBQVYsQ0FBZUMsV0FBZixHQUE2QkMsUUFBN0IsQ0FBc0NYLGVBQWUsQ0FBQ1UsV0FBaEIsRUFBdEMsQ0FEeUM7QUFBQSxHQUFsQixDQUF6QjtBQUlBLE1BQU1FLGlCQUFpQixHQUFHTixnQkFBZ0IsQ0FBQ08sR0FBakIsQ0FBcUIsVUFBQ0wsU0FBRDtBQUFBLHdCQUM3QyxxRUFBQyxzREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLFFBQUUsRUFBRSxDQUF2QjtBQUEwQixRQUFFLEVBQUUsQ0FBOUI7QUFBaUMsUUFBRSxFQUFFLENBQXJDO0FBQUEsNkJBQ0UscUVBQUMsaUVBQUQ7QUFBZSxpQkFBUyxFQUFFQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBNkNBLFNBQVMsQ0FBQ00sRUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQ2QztBQUFBLEdBQXJCLENBQTFCO0FBTUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFBLDhCQUNFLHFFQUFDLDZEQUFEO0FBQVcsY0FBTSxFQUFFYjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyx1RUFBRDtBQUFBLGtCQUFxQlc7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztHQXZCUWpCLEs7O0tBQUFBLEs7QUF5QlRBLEtBQUssQ0FBQ29CLGVBQU4saU1BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ05DLDRDQUFLLENBQUNDLEdBQU4sOENBRE07O0FBQUE7QUFDbEJDLGFBRGtCO0FBRWxCaEIsY0FGa0IsR0FFWGdCLEdBQUcsQ0FBQ2hCLElBRk87QUFBQSwyQ0FJZjtBQUFFQSxnQkFBSSxFQUFKQTtBQUFGLFdBSmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFPZVAsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWZlOTk0ZmQ0YzZkNzk2ODg1ZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XHJcblxyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xyXG5pbXBvcnQgQ2hhcmFjdGVyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJhY3RlckNhcmQnO1xyXG5pbXBvcnQgQ2hhcmFjdGVyQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyc0NvbnRhaW5lcic7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoJzEnKTtcclxuICBjb25zdCBbc2VhcmNoQ2hhcmFjdGVyLCBzZXRTZWFyY2hDaGFyYWN0ZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKHByb3BzLmRhdGEucmVzdWx0cyk7XHJcblxyXG4gIGNvbnN0IGZpbHRlckNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzLmZpbHRlcigoY2hhcmFjdGVyKSA9PlxyXG4gICAgY2hhcmFjdGVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hDaGFyYWN0ZXIudG9Mb3dlckNhc2UoKSlcclxuICApO1xyXG5cclxuICBjb25zdCBkaXNwbGF5Q2hhcmFjdGVycyA9IGZpbHRlckNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IChcclxuICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBzbT17Nn0gbWQ9ezV9IGxnPXszfSBrZXk9e2NoYXJhY3Rlci5pZH0+XHJcbiAgICAgIDxDaGFyYWN0ZXJDYXJkIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSAvPlxyXG4gICAgPC9HcmlkPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1haW5Db250YWluZXI+XHJcbiAgICAgICAgPFNlYXJjaEJhciBzZWFyY2g9e3NldFNlYXJjaENoYXJhY3Rlcn0gLz5cclxuICAgICAgICA8Q2hhcmFjdGVyQ29udGFpbmVyPntkaXNwbGF5Q2hhcmFjdGVyc308L0NoYXJhY3RlckNvbnRhaW5lcj5cclxuICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2ApO1xyXG4gIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblxyXG4gIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9