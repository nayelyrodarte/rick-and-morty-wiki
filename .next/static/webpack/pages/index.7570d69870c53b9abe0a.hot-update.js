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










var theme = createMuiTheme({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJ1c2VOZXh0VmFyaWFudHMiLCJvdmVycmlkZXMiLCJNdWlDc3NCYXNlbGluZSIsImJvZHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbmRleCIsInByb3BzIiwidXNlU3RhdGUiLCJzZWFyY2hDaGFyYWN0ZXIiLCJzZXRTZWFyY2hDaGFyYWN0ZXIiLCJkYXRhIiwicmVzdWx0cyIsImNoYXJhY3RlcnMiLCJzZXRDaGFyYWN0ZXJzIiwiZmlsdGVyQ2hhcmFjdGVycyIsImZpbHRlciIsImNoYXJhY3RlciIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGlzcGxheUNoYXJhY3RlcnMiLCJtYXAiLCJlIiwiUm91dGVyIiwicHVzaCIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJnZXQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxjQUFjLENBQUM7QUFDM0JDLFlBQVUsRUFBRTtBQUNWQyxtQkFBZSxFQUFFO0FBRFAsR0FEZTtBQUkzQkMsV0FBUyxFQUFFO0FBQ1RDLGtCQUFjLEVBQUU7QUFDZCxpQkFBVztBQUNUQyxZQUFJLEVBQUU7QUFDSkMseUJBQWUsRUFBRTtBQURiO0FBREc7QUFERztBQURQO0FBSmdCLENBQUQsQ0FBNUI7O0FBZUEsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQzBCQyxzREFBUSxDQUFDLEVBQUQsQ0FEbEM7QUFBQSxNQUNiQyxlQURhO0FBQUEsTUFDSUMsa0JBREo7O0FBQUEsbUJBRWdCRixzREFBUSxDQUFDRCxLQUFLLENBQUNJLElBQU4sQ0FBV0MsT0FBWixDQUZ4QjtBQUFBLE1BRWJDLFVBRmE7QUFBQSxNQUVEQyxhQUZDOztBQUlwQixNQUFNQyxnQkFBZ0IsR0FBR0YsVUFBVSxDQUFDRyxNQUFYLENBQWtCLFVBQUNDLFNBQUQ7QUFBQSxXQUN6Q0EsU0FBUyxDQUFDQyxJQUFWLENBQWVDLFdBQWYsR0FBNkJDLFFBQTdCLENBQXNDWCxlQUFlLENBQUNVLFdBQWhCLEVBQXRDLENBRHlDO0FBQUEsR0FBbEIsQ0FBekI7QUFJQSxNQUFNRSxpQkFBaUIsR0FBR04sZ0JBQWdCLENBQUNPLEdBQWpCLENBQXFCLFVBQUNMLFNBQUQ7QUFBQSx3QkFDN0MscUVBQUMsc0RBQUQ7QUFDRSxVQUFJLE1BRE47QUFFRSxRQUFFLEVBQUUsRUFGTjtBQUdFLFFBQUUsRUFBRSxDQUhOO0FBSUUsUUFBRSxFQUFFLENBSk47QUFLRSxRQUFFLEVBQUUsQ0FMTjtBQU9FLGFBQU8sRUFBRSxpQkFBQ00sQ0FBRDtBQUFBLGVBQ1BDLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxpQkFBWix1QkFBNkNSLFNBQVMsQ0FBQ1MsRUFBdkQsRUFETztBQUFBLE9BUFg7QUFBQSw2QkFXRSxxRUFBQyxrRUFBRDtBQUFlLGlCQUFTLEVBQUVUO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRixPQU1PQSxTQUFTLENBQUNTLEVBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFENkM7QUFBQSxHQUFyQixDQUExQjtBQWdCQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQUEsOEJBQ0UscUVBQUMsNkRBQUQ7QUFBVyxjQUFNLEVBQUVoQjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyx3RUFBRDtBQUFBLGtCQUFxQlc7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztHQWhDUWYsSzs7S0FBQUEsSztBQWtDVEEsS0FBSyxDQUFDcUIsZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDTkMsNENBQUssQ0FBQ0MsR0FBTiw4Q0FETTs7QUFBQTtBQUNsQkMsYUFEa0I7QUFFbEJuQixjQUZrQixHQUVYbUIsR0FBRyxDQUFDbkIsSUFGTztBQUFBLDJDQUlmO0FBQUVBLGdCQUFJLEVBQUpBO0FBQUYsV0FKZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QjtBQU9lTCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NTcwZDY5ODcwYzUzYjlhYmUwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyJztcclxuaW1wb3J0IENoYXJhY3RlckNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFyYWN0ZXJDYXJkJztcclxuaW1wb3J0IENoYXJhY3RlckNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJhY3RlcnNDb250YWluZXInO1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgdXNlTmV4dFZhcmlhbnRzOiB0cnVlLFxyXG4gIH0sXHJcbiAgb3ZlcnJpZGVzOiB7XHJcbiAgICBNdWlDc3NCYXNlbGluZToge1xyXG4gICAgICAnQGdsb2JhbCc6IHtcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gIGNvbnN0IFtzZWFyY2hDaGFyYWN0ZXIsIHNldFNlYXJjaENoYXJhY3Rlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2NoYXJhY3RlcnMsIHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGUocHJvcHMuZGF0YS5yZXN1bHRzKTtcclxuXHJcbiAgY29uc3QgZmlsdGVyQ2hhcmFjdGVycyA9IGNoYXJhY3RlcnMuZmlsdGVyKChjaGFyYWN0ZXIpID0+XHJcbiAgICBjaGFyYWN0ZXIubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaENoYXJhY3Rlci50b0xvd2VyQ2FzZSgpKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlDaGFyYWN0ZXJzID0gZmlsdGVyQ2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcikgPT4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgaXRlbVxyXG4gICAgICB4cz17MTB9XHJcbiAgICAgIHNtPXs2fVxyXG4gICAgICBtZD17NX1cclxuICAgICAgbGc9ezN9XHJcbiAgICAgIGtleT17Y2hhcmFjdGVyLmlkfVxyXG4gICAgICBvbkNsaWNrPXsoZSkgPT5cclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2NoYXJhY3Rlci9baWRdJywgYC9jaGFyYWN0ZXIvJHtjaGFyYWN0ZXIuaWR9YClcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8Q2hhcmFjdGVyQ2FyZCBjaGFyYWN0ZXI9e2NoYXJhY3Rlcn0gLz5cclxuICAgIDwvR3JpZD5cclxuICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNYWluQ29udGFpbmVyPlxyXG4gICAgICAgIDxTZWFyY2hCYXIgc2VhcmNoPXtzZXRTZWFyY2hDaGFyYWN0ZXJ9IC8+XHJcbiAgICAgICAgPENoYXJhY3RlckNvbnRhaW5lcj57ZGlzcGxheUNoYXJhY3RlcnN9PC9DaGFyYWN0ZXJDb250YWluZXI+XHJcbiAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci9gKTtcclxuICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG5cclxuICByZXR1cm4geyBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==