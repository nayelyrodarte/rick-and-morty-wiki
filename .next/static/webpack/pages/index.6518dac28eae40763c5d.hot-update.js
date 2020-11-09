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
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MainContainer */ "./components/MainContainer.js");
/* harmony import */ var _components_CharacterCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CharacterCard */ "./components/CharacterCard.js");
/* harmony import */ var _components_CharactersContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CharactersContainer */ "./components/CharactersContainer.js");




var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\pages\\index.js",
    _s = $RefreshSig$();











var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["createMuiTheme"])({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          background: "url('./co341S')"
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
        return next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/character/[id]', "/character/".concat(character.id));
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_CharacterCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
        character: character
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }, _this)
    }, character.id, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["MuiThemeProvider"], {
    theme: theme,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_MainContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_SearchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        search: setSearchCharacter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_CharactersContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: displayCharacters
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJ1c2VOZXh0VmFyaWFudHMiLCJvdmVycmlkZXMiLCJNdWlDc3NCYXNlbGluZSIsImJvZHkiLCJiYWNrZ3JvdW5kIiwiSW5kZXgiLCJwcm9wcyIsInVzZVN0YXRlIiwic2VhcmNoQ2hhcmFjdGVyIiwic2V0U2VhcmNoQ2hhcmFjdGVyIiwiZGF0YSIsInJlc3VsdHMiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsImZpbHRlckNoYXJhY3RlcnMiLCJmaWx0ZXIiLCJjaGFyYWN0ZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRpc3BsYXlDaGFyYWN0ZXJzIiwibWFwIiwiZSIsIlJvdXRlciIsInB1c2giLCJpZCIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwiZ2V0IiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsK0VBQWMsQ0FBQztBQUMzQkMsWUFBVSxFQUFFO0FBQ1ZDLG1CQUFlLEVBQUU7QUFEUCxHQURlO0FBSTNCQyxXQUFTLEVBQUU7QUFDVEMsa0JBQWMsRUFBRTtBQUNkLGlCQUFXO0FBQ1RDLFlBQUksRUFBRTtBQUNKQyxvQkFBVSxFQUFFO0FBRFI7QUFERztBQURHO0FBRFA7QUFKZ0IsQ0FBRCxDQUE1Qjs7QUFlQSxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDMEJDLHNEQUFRLENBQUMsRUFBRCxDQURsQztBQUFBLE1BQ2JDLGVBRGE7QUFBQSxNQUNJQyxrQkFESjs7QUFBQSxtQkFFZ0JGLHNEQUFRLENBQUNELEtBQUssQ0FBQ0ksSUFBTixDQUFXQyxPQUFaLENBRnhCO0FBQUEsTUFFYkMsVUFGYTtBQUFBLE1BRURDLGFBRkM7O0FBSXBCLE1BQU1DLGdCQUFnQixHQUFHRixVQUFVLENBQUNHLE1BQVgsQ0FBa0IsVUFBQ0MsU0FBRDtBQUFBLFdBQ3pDQSxTQUFTLENBQUNDLElBQVYsQ0FBZUMsV0FBZixHQUE2QkMsUUFBN0IsQ0FBc0NYLGVBQWUsQ0FBQ1UsV0FBaEIsRUFBdEMsQ0FEeUM7QUFBQSxHQUFsQixDQUF6QjtBQUlBLE1BQU1FLGlCQUFpQixHQUFHTixnQkFBZ0IsQ0FBQ08sR0FBakIsQ0FBcUIsVUFBQ0wsU0FBRDtBQUFBLHdCQUM3QyxxRUFBQyxzREFBRDtBQUNFLFVBQUksTUFETjtBQUVFLFFBQUUsRUFBRSxFQUZOO0FBR0UsUUFBRSxFQUFFLENBSE47QUFJRSxRQUFFLEVBQUUsQ0FKTjtBQUtFLFFBQUUsRUFBRSxDQUxOO0FBT0UsYUFBTyxFQUFFLGlCQUFDTSxDQUFEO0FBQUEsZUFDUEMsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLGlCQUFaLHVCQUE2Q1IsU0FBUyxDQUFDUyxFQUF2RCxFQURPO0FBQUEsT0FQWDtBQUFBLDZCQVdFLHFFQUFDLGtFQUFEO0FBQWUsaUJBQVMsRUFBRVQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGLE9BTU9BLFNBQVMsQ0FBQ1MsRUFOakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUQ2QztBQUFBLEdBQXJCLENBQTFCO0FBZ0JBLHNCQUNFLHFFQUFDLHlFQUFEO0FBQWtCLFNBQUssRUFBRTVCLEtBQXpCO0FBQUEsNEJBQ0UscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsa0VBQUQ7QUFBQSw4QkFDRSxxRUFBQyw2REFBRDtBQUFXLGNBQU0sRUFBRVk7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsd0VBQUQ7QUFBQSxrQkFBcUJXO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQWpDUWYsSzs7S0FBQUEsSztBQW1DVEEsS0FBSyxDQUFDcUIsZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTkMsNENBQUssQ0FBQ0MsR0FBTiw4Q0FETTs7QUFBQTtBQUNsQkMsYUFEa0I7QUFFbEJuQixjQUZrQixHQUVYbUIsR0FBRyxDQUFDbkIsSUFGTztBQUFBLDJDQUlmO0FBQUVBLGdCQUFJLEVBQUpBO0FBQUYsV0FKZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQU9lTCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NTE4ZGFjMjhlYWU0MDc2M2M1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lcic7XHJcbmltcG9ydCBDaGFyYWN0ZXJDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyQ2FyZCc7XHJcbmltcG9ydCBDaGFyYWN0ZXJDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFyYWN0ZXJzQ29udGFpbmVyJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIHVzZU5leHRWYXJpYW50czogdHJ1ZSxcclxuICB9LFxyXG4gIG92ZXJyaWRlczoge1xyXG4gICAgTXVpQ3NzQmFzZWxpbmU6IHtcclxuICAgICAgJ0BnbG9iYWwnOiB7XHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJ1cmwoJy4vY28zNDFTJylcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcbiAgY29uc3QgW3NlYXJjaENoYXJhY3Rlciwgc2V0U2VhcmNoQ2hhcmFjdGVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSB1c2VTdGF0ZShwcm9wcy5kYXRhLnJlc3VsdHMpO1xyXG5cclxuICBjb25zdCBmaWx0ZXJDaGFyYWN0ZXJzID0gY2hhcmFjdGVycy5maWx0ZXIoKGNoYXJhY3RlcikgPT5cclxuICAgIGNoYXJhY3Rlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoQ2hhcmFjdGVyLnRvTG93ZXJDYXNlKCkpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGlzcGxheUNoYXJhY3RlcnMgPSBmaWx0ZXJDaGFyYWN0ZXJzLm1hcCgoY2hhcmFjdGVyKSA9PiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBpdGVtXHJcbiAgICAgIHhzPXsxMH1cclxuICAgICAgc209ezZ9XHJcbiAgICAgIG1kPXs1fVxyXG4gICAgICBsZz17M31cclxuICAgICAga2V5PXtjaGFyYWN0ZXIuaWR9XHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvY2hhcmFjdGVyL1tpZF0nLCBgL2NoYXJhY3Rlci8ke2NoYXJhY3Rlci5pZH1gKVxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxDaGFyYWN0ZXJDYXJkIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSAvPlxyXG4gICAgPC9HcmlkPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxNYWluQ29udGFpbmVyPlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc2VhcmNoPXtzZXRTZWFyY2hDaGFyYWN0ZXJ9IC8+XHJcbiAgICAgICAgPENoYXJhY3RlckNvbnRhaW5lcj57ZGlzcGxheUNoYXJhY3RlcnN9PC9DaGFyYWN0ZXJDb250YWluZXI+XHJcbiAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvYCk7XHJcbiAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=