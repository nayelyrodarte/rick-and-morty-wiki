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

  var displayCharacters = characters.map(function (character) {
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
        lineNumber: 17,
        columnNumber: 7
      }, _this)
    }, character.id, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, _this);
  });
  var filterCharacters = characters.filter(function (character) {
    return character.name.toLowerCase().includes(searchCharacter.toLowerCase());
  });
  co;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_MainContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        search: setSearchCharacter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_CharactersContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: displayCharacters
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInNlYXJjaENoYXJhY3RlciIsInNldFNlYXJjaENoYXJhY3RlciIsImRhdGEiLCJyZXN1bHRzIiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJkaXNwbGF5Q2hhcmFjdGVycyIsIm1hcCIsImNoYXJhY3RlciIsImlkIiwiZmlsdGVyQ2hhcmFjdGVycyIsImZpbHRlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiY28iLCJnZXRJbml0aWFsUHJvcHMiLCJheGlvcyIsImdldCIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsR0FBRCxDQUQxQjtBQUFBLE1BQ2JDLFdBRGE7QUFBQSxNQUNBQyxjQURBOztBQUFBLG1CQUUwQkYsc0RBQVEsQ0FBQyxFQUFELENBRmxDO0FBQUEsTUFFYkcsZUFGYTtBQUFBLE1BRUlDLGtCQUZKOztBQUFBLG1CQUdnQkosc0RBQVEsQ0FBQ0QsS0FBSyxDQUFDTSxJQUFOLENBQVdDLE9BQVosQ0FIeEI7QUFBQSxNQUdiQyxVQUhhO0FBQUEsTUFHREMsYUFIQzs7QUFLcEIsTUFBTUMsaUJBQWlCLEdBQUdGLFVBQVUsQ0FBQ0csR0FBWCxDQUFlLFVBQUNDLFNBQUQ7QUFBQSx3QkFDdkMscUVBQUMsc0RBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsQ0FBdkI7QUFBMEIsUUFBRSxFQUFFLENBQTlCO0FBQWlDLFFBQUUsRUFBRSxDQUFyQztBQUFBLDZCQUNFLHFFQUFDLGlFQUFEO0FBQWUsaUJBQVMsRUFBRUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQTZDQSxTQUFTLENBQUNDLEVBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEdUM7QUFBQSxHQUFmLENBQTFCO0FBTUEsTUFBTUMsZ0JBQWdCLEdBQUdOLFVBQVUsQ0FBQ08sTUFBWCxDQUFrQixVQUFDSCxTQUFEO0FBQUEsV0FDekNBLFNBQVMsQ0FBQ0ksSUFBVixDQUFlQyxXQUFmLEdBQTZCQyxRQUE3QixDQUFzQ2QsZUFBZSxDQUFDYSxXQUFoQixFQUF0QyxDQUR5QztBQUFBLEdBQWxCLENBQXpCO0FBSUFFLElBQUU7QUFFRixzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQUEsOEJBQ0UscUVBQUMsNkRBQUQ7QUFBVyxjQUFNLEVBQUVkO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLHVFQUFEO0FBQUEsa0JBQXFCSztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBekJRWCxLOztLQUFBQSxLO0FBMkJUQSxLQUFLLENBQUNxQixlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNOQyw0Q0FBSyxDQUFDQyxHQUFOLDhDQURNOztBQUFBO0FBQ2xCQyxhQURrQjtBQUVsQmpCLGNBRmtCLEdBRVhpQixHQUFHLENBQUNqQixJQUZPO0FBQUEsMkNBSWY7QUFBRUEsZ0JBQUksRUFBSkE7QUFBRixXQUplOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO0FBT2VQLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY1ODQxOGQ5YTA1M2ZkZGMwMWM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xyXG5cclxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyJztcclxuaW1wb3J0IENoYXJhY3RlckNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFyYWN0ZXJDYXJkJztcclxuaW1wb3J0IENoYXJhY3RlckNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJhY3RlcnNDb250YWluZXInO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKCcxJyk7XHJcbiAgY29uc3QgW3NlYXJjaENoYXJhY3Rlciwgc2V0U2VhcmNoQ2hhcmFjdGVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSB1c2VTdGF0ZShwcm9wcy5kYXRhLnJlc3VsdHMpO1xyXG5cclxuICBjb25zdCBkaXNwbGF5Q2hhcmFjdGVycyA9IGNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IChcclxuICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBzbT17Nn0gbWQ9ezV9IGxnPXszfSBrZXk9e2NoYXJhY3Rlci5pZH0+XHJcbiAgICAgIDxDaGFyYWN0ZXJDYXJkIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSAvPlxyXG4gICAgPC9HcmlkPlxyXG4gICkpO1xyXG5cclxuICBjb25zdCBmaWx0ZXJDaGFyYWN0ZXJzID0gY2hhcmFjdGVycy5maWx0ZXIoKGNoYXJhY3RlcikgPT5cclxuICAgIGNoYXJhY3Rlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoQ2hhcmFjdGVyLnRvTG93ZXJDYXNlKCkpXHJcbiAgKTtcclxuXHJcbiAgY287XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgICAgICA8U2VhcmNoQmFyIHNlYXJjaD17c2V0U2VhcmNoQ2hhcmFjdGVyfSAvPlxyXG4gICAgICAgIDxDaGFyYWN0ZXJDb250YWluZXI+e2Rpc3BsYXlDaGFyYWN0ZXJzfTwvQ2hhcmFjdGVyQ29udGFpbmVyPlxyXG4gICAgICA8L01haW5Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYCk7XHJcbiAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=