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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MainContainer */ "./components/MainContainer.js");
/* harmony import */ var _components_CharacterCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CharacterCard */ "./components/CharacterCard.js");
/* harmony import */ var _components_CharactersContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CharactersContainer */ "./components/CharactersContainer.js");




var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\pages\\index.js",
    _s = $RefreshSig$();










var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["createMuiTheme"])({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'black'
        }
      }
    }
  }
});

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
        return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/character/[id]', "/character/".concat(character.id));
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_CharacterCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        character: character
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }, _this)
    }, character.id, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_MainContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        search: setSearchCharacter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_CharactersContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: displayCharacters
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJ1c2VOZXh0VmFyaWFudHMiLCJvdmVycmlkZXMiLCJNdWlDc3NCYXNlbGluZSIsImJvZHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleCIsInByb3BzIiwidXNlU3RhdGUiLCJzZWFyY2hDaGFyYWN0ZXIiLCJzZXRTZWFyY2hDaGFyYWN0ZXIiLCJkYXRhIiwicmVzdWx0cyIsImNoYXJhY3RlcnMiLCJzZXRDaGFyYWN0ZXJzIiwiZmlsdGVyQ2hhcmFjdGVycyIsImZpbHRlciIsImNoYXJhY3RlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGlzcGxheUNoYXJhY3RlcnMiLCJtYXAiLCJlIiwiUm91dGVyIiwicHVzaCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxZQUFVLEVBQUU7QUFDVkMsbUJBQWUsRUFBRTtBQURQLEdBRGU7QUFJM0JDLFdBQVMsRUFBRTtBQUNUQyxrQkFBYyxFQUFFO0FBQ2QsaUJBQVc7QUFDVEMsWUFBSSxFQUFFO0FBQ0pDLHlCQUFlLEVBQUU7QUFEYjtBQURHO0FBREc7QUFEUDtBQUpnQixDQUFELENBQTVCOztBQWVBLFNBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUFBLGtCQUMwQkMsc0RBQVEsQ0FBQyxFQUFELENBRGxDO0FBQUEsTUFDYkMsZUFEYTtBQUFBLE1BQ0lDLGtCQURKOztBQUFBLG1CQUVnQkYsc0RBQVEsQ0FBQ0QsS0FBSyxDQUFDSSxJQUFOLENBQVdDLE9BQVosQ0FGeEI7QUFBQSxNQUViQyxVQUZhO0FBQUEsTUFFREMsYUFGQzs7QUFJcEIsTUFBTUMsZ0JBQWdCLEdBQUdGLFVBQVUsQ0FBQ0csTUFBWCxDQUFrQixVQUFDQyxTQUFEO0FBQUEsV0FDekNBLFNBQVMsQ0FBQ0MsSUFBVixDQUFlQyxXQUFmLEdBQTZCQyxRQUE3QixDQUFzQ1gsZUFBZSxDQUFDVSxXQUFoQixFQUF0QyxDQUR5QztBQUFBLEdBQWxCLENBQXpCO0FBSUEsTUFBTUUsaUJBQWlCLEdBQUdOLGdCQUFnQixDQUFDTyxHQUFqQixDQUFxQixVQUFDTCxTQUFEO0FBQUEsd0JBQzdDLHFFQUFDLHNEQUFEO0FBQ0UsVUFBSSxNQUROO0FBRUUsUUFBRSxFQUFFLEVBRk47QUFHRSxRQUFFLEVBQUUsQ0FITjtBQUlFLFFBQUUsRUFBRSxDQUpOO0FBS0UsUUFBRSxFQUFFLENBTE47QUFPRSxhQUFPLEVBQUUsaUJBQUNNLENBQUQ7QUFBQSxlQUNQQyxrREFBTSxDQUFDQyxJQUFQLENBQVksaUJBQVosdUJBQTZDUixTQUFTLENBQUNTLEVBQXZELEVBRE87QUFBQSxPQVBYO0FBQUEsNkJBV0UscUVBQUMsa0VBQUQ7QUFBZSxpQkFBUyxFQUFFVDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEYsT0FNT0EsU0FBUyxDQUFDUyxFQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRDZDO0FBQUEsR0FBckIsQ0FBMUI7QUFnQkEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFBLDhCQUNFLHFFQUFDLDZEQUFEO0FBQVcsY0FBTSxFQUFFaEI7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsd0VBQUQ7QUFBQSxrQkFBcUJXO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7R0FoQ1FmLEs7O0tBQUFBLEs7QUFrQ1RBLEtBQUssQ0FBQ3FCLGVBQU4saU1BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ05DLDRDQUFLLENBQUNDLEdBQU4sOENBRE07O0FBQUE7QUFDbEJDLGFBRGtCO0FBRWxCbkIsY0FGa0IsR0FFWG1CLEdBQUcsQ0FBQ25CLElBRk87QUFBQSwyQ0FJZjtBQUFFQSxnQkFBSSxFQUFKQTtBQUFGLFdBSmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFPZUwsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDBiOTg0ZDQwODQzNGY1NmViZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xyXG5pbXBvcnQgQ2hhcmFjdGVyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJhY3RlckNhcmQnO1xyXG5pbXBvcnQgQ2hhcmFjdGVyQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyc0NvbnRhaW5lcic7XHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICB1c2VOZXh0VmFyaWFudHM6IHRydWUsXHJcbiAgfSxcclxuICBvdmVycmlkZXM6IHtcclxuICAgIE11aUNzc0Jhc2VsaW5lOiB7XHJcbiAgICAgICdAZ2xvYmFsJzoge1xyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcbiAgY29uc3QgW3NlYXJjaENoYXJhY3Rlciwgc2V0U2VhcmNoQ2hhcmFjdGVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSB1c2VTdGF0ZShwcm9wcy5kYXRhLnJlc3VsdHMpO1xyXG5cclxuICBjb25zdCBmaWx0ZXJDaGFyYWN0ZXJzID0gY2hhcmFjdGVycy5maWx0ZXIoKGNoYXJhY3RlcikgPT5cclxuICAgIGNoYXJhY3Rlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoQ2hhcmFjdGVyLnRvTG93ZXJDYXNlKCkpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGlzcGxheUNoYXJhY3RlcnMgPSBmaWx0ZXJDaGFyYWN0ZXJzLm1hcCgoY2hhcmFjdGVyKSA9PiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBpdGVtXHJcbiAgICAgIHhzPXsxMH1cclxuICAgICAgc209ezZ9XHJcbiAgICAgIG1kPXs1fVxyXG4gICAgICBsZz17M31cclxuICAgICAga2V5PXtjaGFyYWN0ZXIuaWR9XHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvY2hhcmFjdGVyL1tpZF0nLCBgL2NoYXJhY3Rlci8ke2NoYXJhY3Rlci5pZH1gKVxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxDaGFyYWN0ZXJDYXJkIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSAvPlxyXG4gICAgPC9HcmlkPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1haW5Db250YWluZXI+XHJcbiAgICAgICAgPFNlYXJjaEJhciBzZWFyY2g9e3NldFNlYXJjaENoYXJhY3Rlcn0gLz5cclxuICAgICAgICA8Q2hhcmFjdGVyQ29udGFpbmVyPntkaXNwbGF5Q2hhcmFjdGVyc308L0NoYXJhY3RlckNvbnRhaW5lcj5cclxuICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2ApO1xyXG4gIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblxyXG4gIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9