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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["MuiThemeProvider"], {
    theme: theme,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJ1c2VOZXh0VmFyaWFudHMiLCJvdmVycmlkZXMiLCJNdWlDc3NCYXNlbGluZSIsImJvZHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleCIsInByb3BzIiwidXNlU3RhdGUiLCJzZWFyY2hDaGFyYWN0ZXIiLCJzZXRTZWFyY2hDaGFyYWN0ZXIiLCJkYXRhIiwicmVzdWx0cyIsImNoYXJhY3RlcnMiLCJzZXRDaGFyYWN0ZXJzIiwiZmlsdGVyQ2hhcmFjdGVycyIsImZpbHRlciIsImNoYXJhY3RlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGlzcGxheUNoYXJhY3RlcnMiLCJtYXAiLCJlIiwiUm91dGVyIiwicHVzaCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxZQUFVLEVBQUU7QUFDVkMsbUJBQWUsRUFBRTtBQURQLEdBRGU7QUFJM0JDLFdBQVMsRUFBRTtBQUNUQyxrQkFBYyxFQUFFO0FBQ2QsaUJBQVc7QUFDVEMsWUFBSSxFQUFFO0FBQ0pDLHlCQUFlLEVBQUU7QUFEYjtBQURHO0FBREc7QUFEUDtBQUpnQixDQUFELENBQTVCOztBQWVBLFNBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUFBLGtCQUMwQkMsc0RBQVEsQ0FBQyxFQUFELENBRGxDO0FBQUEsTUFDYkMsZUFEYTtBQUFBLE1BQ0lDLGtCQURKOztBQUFBLG1CQUVnQkYsc0RBQVEsQ0FBQ0QsS0FBSyxDQUFDSSxJQUFOLENBQVdDLE9BQVosQ0FGeEI7QUFBQSxNQUViQyxVQUZhO0FBQUEsTUFFREMsYUFGQzs7QUFJcEIsTUFBTUMsZ0JBQWdCLEdBQUdGLFVBQVUsQ0FBQ0csTUFBWCxDQUFrQixVQUFDQyxTQUFEO0FBQUEsV0FDekNBLFNBQVMsQ0FBQ0MsSUFBVixDQUFlQyxXQUFmLEdBQTZCQyxRQUE3QixDQUFzQ1gsZUFBZSxDQUFDVSxXQUFoQixFQUF0QyxDQUR5QztBQUFBLEdBQWxCLENBQXpCO0FBSUEsTUFBTUUsaUJBQWlCLEdBQUdOLGdCQUFnQixDQUFDTyxHQUFqQixDQUFxQixVQUFDTCxTQUFEO0FBQUEsd0JBQzdDLHFFQUFDLHNEQUFEO0FBQ0UsVUFBSSxNQUROO0FBRUUsUUFBRSxFQUFFLEVBRk47QUFHRSxRQUFFLEVBQUUsQ0FITjtBQUlFLFFBQUUsRUFBRSxDQUpOO0FBS0UsUUFBRSxFQUFFLENBTE47QUFPRSxhQUFPLEVBQUUsaUJBQUNNLENBQUQ7QUFBQSxlQUNQQyxrREFBTSxDQUFDQyxJQUFQLENBQVksaUJBQVosdUJBQTZDUixTQUFTLENBQUNTLEVBQXZELEVBRE87QUFBQSxPQVBYO0FBQUEsNkJBV0UscUVBQUMsa0VBQUQ7QUFBZSxpQkFBUyxFQUFFVDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEYsT0FNT0EsU0FBUyxDQUFDUyxFQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRDZDO0FBQUEsR0FBckIsQ0FBMUI7QUFnQkEsc0JBQ0UscUVBQUMseUVBQUQ7QUFBa0IsU0FBSyxFQUFFNUIsS0FBekI7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFBLDhCQUNFLHFFQUFDLDZEQUFEO0FBQVcsY0FBTSxFQUFFWTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyx3RUFBRDtBQUFBLGtCQUFxQlc7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztHQWhDUWYsSzs7S0FBQUEsSztBQWtDVEEsS0FBSyxDQUFDcUIsZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTkMsNENBQUssQ0FBQ0MsR0FBTiw4Q0FETTs7QUFBQTtBQUNsQkMsYUFEa0I7QUFFbEJuQixjQUZrQixHQUVYbUIsR0FBRyxDQUFDbkIsSUFGTztBQUFBLDJDQUlmO0FBQUVBLGdCQUFJLEVBQUpBO0FBQUYsV0FKZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQU9lTCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMjViY2ZhYWJkYTA5NTAzNTNjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lcic7XHJcbmltcG9ydCBDaGFyYWN0ZXJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyQ2FyZCc7XHJcbmltcG9ydCBDaGFyYWN0ZXJDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFyYWN0ZXJzQ29udGFpbmVyJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIHVzZU5leHRWYXJpYW50czogdHJ1ZSxcclxuICB9LFxyXG4gIG92ZXJyaWRlczoge1xyXG4gICAgTXVpQ3NzQmFzZWxpbmU6IHtcclxuICAgICAgJ0BnbG9iYWwnOiB7XHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICBjb25zdCBbc2VhcmNoQ2hhcmFjdGVyLCBzZXRTZWFyY2hDaGFyYWN0ZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKHByb3BzLmRhdGEucmVzdWx0cyk7XHJcblxyXG4gIGNvbnN0IGZpbHRlckNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzLmZpbHRlcigoY2hhcmFjdGVyKSA9PlxyXG4gICAgY2hhcmFjdGVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hDaGFyYWN0ZXIudG9Mb3dlckNhc2UoKSlcclxuICApO1xyXG5cclxuICBjb25zdCBkaXNwbGF5Q2hhcmFjdGVycyA9IGZpbHRlckNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IChcclxuICAgIDxHcmlkXHJcbiAgICAgIGl0ZW1cclxuICAgICAgeHM9ezEwfVxyXG4gICAgICBzbT17Nn1cclxuICAgICAgbWQ9ezV9XHJcbiAgICAgIGxnPXszfVxyXG4gICAgICBrZXk9e2NoYXJhY3Rlci5pZH1cclxuICAgICAgb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9jaGFyYWN0ZXIvW2lkXScsIGAvY2hhcmFjdGVyLyR7Y2hhcmFjdGVyLmlkfWApXHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPENoYXJhY3RlckNhcmQgY2hhcmFjdGVyPXtjaGFyYWN0ZXJ9IC8+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgICAgICA8U2VhcmNoQmFyIHNlYXJjaD17c2V0U2VhcmNoQ2hhcmFjdGVyfSAvPlxyXG4gICAgICAgIDxDaGFyYWN0ZXJDb250YWluZXI+e2Rpc3BsYXlDaGFyYWN0ZXJzfTwvQ2hhcmFjdGVyQ29udGFpbmVyPlxyXG4gICAgICA8L01haW5Db250YWluZXI+XHJcbiAgICA8L011aVRoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2ApO1xyXG4gIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblxyXG4gIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9