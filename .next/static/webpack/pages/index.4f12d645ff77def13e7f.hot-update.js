webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CharactersContainer.js":
/*!*******************************************!*\
  !*** ./components/CharactersContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");


var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\CharactersContainer.js";




var containerStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    flexGrow: 1,
    backgroundColor: '#161a1d',
    borderRadius: '20px',
    padding: '1.5em'
  }, '@media (min-width:780px)', {})
});

function CharactersContainer(props) {
  var styles = containerStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      container: true,
      spacing: 2,
      alignContent: "center",
      justify: "center",
      className: styles.root,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["Pagination"], {
      count: 10
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_c = CharactersContainer;
/* harmony default export */ __webpack_exports__["default"] = (CharactersContainer);

var _c;

$RefreshReg$(_c, "CharactersContainer");

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

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Alert/Alert.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Alert/Alert.js ***!
  \**********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _internal_svg_icons_SuccessOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/svg-icons/SuccessOutlined */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js");
/* harmony import */ var _internal_svg_icons_ReportProblemOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/ReportProblemOutlined */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js");
/* harmony import */ var _internal_svg_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/svg-icons/ErrorOutline */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js");
/* harmony import */ var _internal_svg_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/svg-icons/InfoOutlined */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js");
/* harmony import */ var _internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../internal/svg-icons/Close */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");














var styles = function styles(theme) {
  var getColor = theme.palette.type === 'light' ? _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["darken"] : _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["lighten"];
  var getBackgroundColor = theme.palette.type === 'light' ? _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["lighten"] : _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["darken"];
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.body2, {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'transparent',
      display: 'flex',
      padding: '6px 16px'
    }),

    /* Styles applied to the root element if `variant="standard"` and `color="success"`. */
    standardSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.success.main, 0.9),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="info"`. */
    standardInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.info.main, 0.9),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="warning"`. */
    standardWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.warning.main, 0.9),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="error"`. */
    standardError: {
      color: getColor(theme.palette.error.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.9),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="success"`. */
    outlinedSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      border: "1px solid ".concat(theme.palette.success.main),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="info"`. */
    outlinedInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      border: "1px solid ".concat(theme.palette.info.main),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
    outlinedWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      border: "1px solid ".concat(theme.palette.warning.main),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="error"`. */
    outlinedError: {
      color: getColor(theme.palette.error.main, 0.6),
      border: "1px solid ".concat(theme.palette.error.main),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="filled"` and `color="success"`. */
    filledSuccess: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="info"`. */
    filledInfo: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.info.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="warning"`. */
    filledWarning: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.warning.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="error"`. */
    filledError: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.error.main
    },

    /* Styles applied to the icon wrapper element. */
    icon: {
      marginRight: 12,
      padding: '7px 0',
      display: 'flex',
      fontSize: 22,
      opacity: 0.9
    },

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
var defaultIconMapping = {
  success: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_SuccessOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_ReportProblemOutlined__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fontSize: "inherit"
  })
};

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_11__["default"], {
  fontSize: "small"
});

var Alert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Alert(props, ref) {
  var action = props.action,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$closeText = props.closeText,
      closeText = _props$closeText === void 0 ? 'Close' : _props$closeText,
      color = props.color,
      icon = props.icon,
      _props$iconMapping = props.iconMapping,
      iconMapping = _props$iconMapping === void 0 ? defaultIconMapping : _props$iconMapping,
      onClose = props.onClose,
      _props$role = props.role,
      role = _props$role === void 0 ? 'alert' : _props$role,
      _props$severity = props.severity,
      severity = _props$severity === void 0 ? 'success' : _props$severity,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["action", "children", "classes", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    role: role,
    square: true,
    elevation: 0,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["".concat(variant).concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_13__["capitalize"])(color || severity))], className),
    ref: ref
  }, other), icon !== false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.icon
  }, icon || iconMapping[severity] || defaultIconMapping[severity]) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.message
  }, children), action != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.action
  }, action) : null, action == null && onClose ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.action
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: "small",
    "aria-label": closeText,
    title: closeText,
    color: "inherit",
    onClick: onClose
  }, _ref)) : null);
});
 true ? Alert.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  closeText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The main color for the alert. Unless provided, the value is taken from the `severity` prop.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['error', 'info', 'success', 'warning']),

  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    info: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    success: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    warning: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
  }),

  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The ARIA role attribute of the element.
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The severity of the alert. This defines the color and icon used.
   */
  severity: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['error', 'info', 'success', 'warning']),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiAlert'
})(Alert));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Alert/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Alert/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./node_modules/@material-ui/lab/esm/Alert/Alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Alert__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js ***!
  \********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      fontWeight: theme.typography.fontWeightMedium,
      marginTop: -2
    }
  };
};
var AlertTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function AlertTitle(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    gutterBottom: true,
    component: "div",
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, className)
  }, other));
});
 true ? AlertTitle.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles, {
  name: 'MuiAlertTitle'
})(AlertTitle));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/AlertTitle/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/AlertTitle/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertTitle */ "./node_modules/@material-ui/lab/esm/AlertTitle/AlertTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AlertTitle__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js ***!
  \************************************************************************/
/*! exports provided: createFilterOptions, styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../internal/svg-icons/Close */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _useAutocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../useAutocomplete */ "./node_modules/@material-ui/lab/esm/useAutocomplete/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilterOptions", function() { return _useAutocomplete__WEBPACK_IMPORTED_MODULE_14__["createFilterOptions"]; });

















var styles = function styles(theme) {
  var _option;

  return {
    /* Styles applied to the root element. */
    root: {
      '&$focused $clearIndicatorDirty': {
        visibility: 'visible'
      },

      /* Avoid double tap issue on iOS */
      '@media (pointer: fine)': {
        '&:hover $clearIndicatorDirty': {
          visibility: 'visible'
        }
      }
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Pseudo-class applied to the root element if focused. */
    focused: {},

    /* Styles applied to the tag elements, e.g. the chips. */
    tag: {
      margin: 3,
      maxWidth: 'calc(100% - 6px)'
    },

    /* Styles applied to the tag elements, e.g. the chips if `size="small"`. */
    tagSizeSmall: {
      margin: 2,
      maxWidth: 'calc(100% - 4px)'
    },

    /* Styles applied when the popup icon is rendered. */
    hasPopupIcon: {},

    /* Styles applied when the clear icon is rendered. */
    hasClearIcon: {},

    /* Styles applied to the Input element. */
    inputRoot: {
      flexWrap: 'wrap',
      '$hasPopupIcon &, $hasClearIcon &': {
        paddingRight: 26 + 4
      },
      '$hasPopupIcon$hasClearIcon &': {
        paddingRight: 52 + 4
      },
      '& $input': {
        width: 0,
        minWidth: 30
      },
      '&[class*="MuiInput-root"]': {
        paddingBottom: 1,
        '& $input': {
          padding: 4
        },
        '& $input:first-child': {
          padding: '6px 0'
        }
      },
      '&[class*="MuiInput-root"][class*="MuiInput-marginDense"]': {
        '& $input': {
          padding: '4px 4px 5px'
        },
        '& $input:first-child': {
          padding: '3px 0 6px'
        }
      },
      '&[class*="MuiOutlinedInput-root"]': {
        padding: 9,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '9.5px 4px'
        },
        '& $input:first-child': {
          paddingLeft: 6
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"]': {
        padding: 6,
        '& $input': {
          padding: '4.5px 4px'
        }
      },
      '&[class*="MuiFilledInput-root"]': {
        paddingTop: 19,
        paddingLeft: 8,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '9px 4px'
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiFilledInput-root"][class*="MuiFilledInput-marginDense"]': {
        paddingBottom: 1,
        '& $input': {
          padding: '4.5px 4px'
        }
      }
    },

    /* Styles applied to the input element. */
    input: {
      flexGrow: 1,
      textOverflow: 'ellipsis',
      opacity: 0
    },

    /* Styles applied to the input element if tag focused. */
    inputFocused: {
      opacity: 1
    },

    /* Styles applied to the endAdornment element. */
    endAdornment: {
      // We use a position absolute to support wrapping tags.
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 14px)' // Center vertically

    },

    /* Styles applied to the clear indicator. */
    clearIndicator: {
      marginRight: -2,
      padding: 4,
      visibility: 'hidden'
    },

    /* Styles applied to the clear indicator if the input is dirty. */
    clearIndicatorDirty: {},

    /* Styles applied to the popup indicator. */
    popupIndicator: {
      padding: 2,
      marginRight: -2
    },

    /* Styles applied to the popup indicator if the popup is open. */
    popupIndicatorOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the popper element. */
    popper: {
      zIndex: theme.zIndex.modal
    },

    /* Styles applied to the popper element if `disablePortal={true}`. */
    popperDisablePortal: {
      position: 'absolute'
    },

    /* Styles applied to the `Paper` component. */
    paper: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.typography.body1, {
      overflow: 'hidden',
      margin: '4px 0'
    }),

    /* Styles applied to the `listbox` component. */
    listbox: {
      listStyle: 'none',
      margin: 0,
      padding: '8px 0',
      maxHeight: '40vh',
      overflow: 'auto'
    },

    /* Styles applied to the loading wrapper. */
    loading: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the no option wrapper. */
    noOptions: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the option elements. */
    option: (_option = {
      minHeight: 48,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 6,
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&[aria-selected="true"]', {
      backgroundColor: theme.palette.action.selected
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&[data-focus="true"]', {
      backgroundColor: theme.palette.action.hover
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&:active', {
      backgroundColor: theme.palette.action.selected
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&[aria-disabled="true"]', {
      opacity: theme.palette.action.disabledOpacity,
      pointerEvents: 'none'
    }), _option),

    /* Styles applied to the group's label elements. */
    groupLabel: {
      backgroundColor: theme.palette.background.paper,
      top: -8
    },

    /* Styles applied to the group's ul elements. */
    groupUl: {
      padding: 0,
      '& $option': {
        paddingLeft: 24
      }
    }
  };
};

function DisablePortal(props) {
  // eslint-disable-next-line react/prop-types
  var anchorEl = props.anchorEl,
      open = props.open,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["anchorEl", "open"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", other);
}

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_12__["default"], {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_13__["default"], null);

var Autocomplete = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Autocomplete(props, ref) {
  /* eslint-disable no-unused-vars */
  var _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? false : _props$autoComplete,
      _props$autoHighlight = props.autoHighlight,
      autoHighlight = _props$autoHighlight === void 0 ? false : _props$autoHighlight,
      _props$autoSelect = props.autoSelect,
      autoSelect = _props$autoSelect === void 0 ? false : _props$autoSelect,
      _props$blurOnSelect = props.blurOnSelect,
      blurOnSelect = _props$blurOnSelect === void 0 ? false : _props$blurOnSelect,
      ChipProps = props.ChipProps,
      classes = props.classes,
      className = props.className,
      _props$clearOnBlur = props.clearOnBlur,
      clearOnBlur = _props$clearOnBlur === void 0 ? !props.freeSolo : _props$clearOnBlur,
      _props$clearOnEscape = props.clearOnEscape,
      clearOnEscape = _props$clearOnEscape === void 0 ? false : _props$clearOnEscape,
      _props$clearText = props.clearText,
      clearText = _props$clearText === void 0 ? 'Clear' : _props$clearText,
      _props$closeIcon = props.closeIcon,
      closeIcon = _props$closeIcon === void 0 ? _ref : _props$closeIcon,
      _props$closeText = props.closeText,
      closeText = _props$closeText === void 0 ? 'Close' : _props$closeText,
      _props$debug = props.debug,
      debug = _props$debug === void 0 ? false : _props$debug,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? props.multiple ? [] : null : _props$defaultValue,
      _props$disableClearab = props.disableClearable,
      disableClearable = _props$disableClearab === void 0 ? false : _props$disableClearab,
      _props$disableCloseOn = props.disableCloseOnSelect,
      disableCloseOnSelect = _props$disableCloseOn === void 0 ? false : _props$disableCloseOn,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      filterOptions = props.filterOptions,
      _props$filterSelected = props.filterSelectedOptions,
      filterSelectedOptions = _props$filterSelected === void 0 ? false : _props$filterSelected,
      _props$forcePopupIcon = props.forcePopupIcon,
      forcePopupIcon = _props$forcePopupIcon === void 0 ? 'auto' : _props$forcePopupIcon,
      _props$freeSolo = props.freeSolo,
      freeSolo = _props$freeSolo === void 0 ? false : _props$freeSolo,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$getLimitTagsTe = props.getLimitTagsText,
      getLimitTagsText = _props$getLimitTagsTe === void 0 ? function (more) {
    return "+".concat(more);
  } : _props$getLimitTagsTe,
      getOptionDisabled = props.getOptionDisabled,
      _props$getOptionLabel = props.getOptionLabel,
      getOptionLabel = _props$getOptionLabel === void 0 ? function (x) {
    return x;
  } : _props$getOptionLabel,
      getOptionSelected = props.getOptionSelected,
      groupBy = props.groupBy,
      _props$handleHomeEndK = props.handleHomeEndKeys,
      handleHomeEndKeys = _props$handleHomeEndK === void 0 ? !props.freeSolo : _props$handleHomeEndK,
      idProp = props.id,
      _props$includeInputIn = props.includeInputInList,
      includeInputInList = _props$includeInputIn === void 0 ? false : _props$includeInputIn,
      inputValueProp = props.inputValue,
      _props$limitTags = props.limitTags,
      limitTags = _props$limitTags === void 0 ? -1 : _props$limitTags,
      _props$ListboxCompone = props.ListboxComponent,
      ListboxComponent = _props$ListboxCompone === void 0 ? 'ul' : _props$ListboxCompone,
      ListboxProps = props.ListboxProps,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$loadingText = props.loadingText,
      loadingText = _props$loadingText === void 0 ? 'Loading…' : _props$loadingText,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$noOptionsText = props.noOptionsText,
      noOptionsText = _props$noOptionsText === void 0 ? 'No options' : _props$noOptionsText,
      onChange = props.onChange,
      onClose = props.onClose,
      onHighlightChange = props.onHighlightChange,
      onInputChange = props.onInputChange,
      onOpen = props.onOpen,
      open = props.open,
      _props$openOnFocus = props.openOnFocus,
      openOnFocus = _props$openOnFocus === void 0 ? false : _props$openOnFocus,
      _props$openText = props.openText,
      openText = _props$openText === void 0 ? 'Open' : _props$openText,
      options = props.options,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"] : _props$PaperComponent,
      _props$PopperComponen = props.PopperComponent,
      PopperComponentProp = _props$PopperComponen === void 0 ? _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7__["default"] : _props$PopperComponen,
      _props$popupIcon = props.popupIcon,
      popupIcon = _props$popupIcon === void 0 ? _ref2 : _props$popupIcon,
      renderGroupProp = props.renderGroup,
      renderInput = props.renderInput,
      renderOptionProp = props.renderOption,
      renderTags = props.renderTags,
      _props$selectOnFocus = props.selectOnFocus,
      selectOnFocus = _props$selectOnFocus === void 0 ? !props.freeSolo : _props$selectOnFocus,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      valueProp = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "classes", "className", "clearOnBlur", "clearOnEscape", "clearText", "closeIcon", "closeText", "debug", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "getOptionSelected", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "value"]);
  /* eslint-enable no-unused-vars */


  var PopperComponent = disablePortal ? DisablePortal : PopperComponentProp;

  var _useAutocomplete = Object(_useAutocomplete__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    componentName: 'Autocomplete'
  })),
      getRootProps = _useAutocomplete.getRootProps,
      getInputProps = _useAutocomplete.getInputProps,
      getInputLabelProps = _useAutocomplete.getInputLabelProps,
      getPopupIndicatorProps = _useAutocomplete.getPopupIndicatorProps,
      getClearProps = _useAutocomplete.getClearProps,
      getTagProps = _useAutocomplete.getTagProps,
      getListboxProps = _useAutocomplete.getListboxProps,
      getOptionProps = _useAutocomplete.getOptionProps,
      value = _useAutocomplete.value,
      dirty = _useAutocomplete.dirty,
      id = _useAutocomplete.id,
      popupOpen = _useAutocomplete.popupOpen,
      focused = _useAutocomplete.focused,
      focusedTag = _useAutocomplete.focusedTag,
      anchorEl = _useAutocomplete.anchorEl,
      setAnchorEl = _useAutocomplete.setAnchorEl,
      inputValue = _useAutocomplete.inputValue,
      groupedOptions = _useAutocomplete.groupedOptions;

  var startAdornment;

  if (multiple && value.length > 0) {
    var getCustomizedTagProps = function getCustomizedTagProps(params) {
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.tag, size === 'small' && classes.tagSizeSmall),
        disabled: disabled
      }, getTagProps(params));
    };

    if (renderTags) {
      startAdornment = renderTags(value, getCustomizedTagProps);
    } else {
      startAdornment = value.map(function (option, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
          label: getOptionLabel(option),
          size: size
        }, getCustomizedTagProps({
          index: index
        }), ChipProps));
      });
    }
  }

  if (limitTags > -1 && Array.isArray(startAdornment)) {
    var more = startAdornment.length - limitTags;

    if (!focused && more > 0) {
      startAdornment = startAdornment.splice(0, limitTags);
      startAdornment.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
        className: classes.tag,
        key: startAdornment.length
      }, getLimitTagsText(more)));
    }
  }

  var defaultRenderGroup = function defaultRenderGroup(params) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", {
      key: params.key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.groupLabel,
      component: "div"
    }, params.group), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("ul", {
      className: classes.groupUl
    }, params.children));
  };

  var renderGroup = renderGroupProp || defaultRenderGroup;
  var renderOption = renderOptionProp || getOptionLabel;

  var renderListOption = function renderListOption(option, index) {
    var optionProps = getOptionProps({
      option: option,
      index: index
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, optionProps, {
      className: classes.option
    }), renderOption(option, {
      selected: optionProps['aria-selected'],
      inputValue: inputValue
    }));
  };

  var hasClearIcon = !disableClearable && !disabled;
  var hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, focused && classes.focused, fullWidth && classes.fullWidth, hasClearIcon && classes.hasClearIcon, hasPopupIcon && classes.hasPopupIcon)
  }, getRootProps(other)), renderInput({
    id: id,
    disabled: disabled,
    fullWidth: true,
    size: size === 'small' ? 'small' : undefined,
    InputLabelProps: getInputLabelProps(),
    InputProps: {
      ref: setAnchorEl,
      className: classes.inputRoot,
      startAdornment: startAdornment,
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: classes.endAdornment
      }, hasClearIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getClearProps(), {
        "aria-label": clearText,
        title: clearText,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.clearIndicator, dirty && classes.clearIndicatorDirty)
      }), closeIcon) : null, hasPopupIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getPopupIndicatorProps(), {
        disabled: disabled,
        "aria-label": popupOpen ? closeText : openText,
        title: popupOpen ? closeText : openText,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.popupIndicator, popupOpen && classes.popupIndicatorOpen)
      }), popupIcon) : null)
    },
    inputProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.input, focusedTag === -1 && classes.inputFocused),
      disabled: disabled
    }, getInputProps())
  })), popupOpen && anchorEl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PopperComponent, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.popper, disablePortal && classes.popperDisablePortal),
    style: {
      width: anchorEl ? anchorEl.clientWidth : null
    },
    role: "presentation",
    anchorEl: anchorEl,
    open: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PaperComponent, {
    className: classes.paper
  }, loading && groupedOptions.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: classes.loading
  }, loadingText) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: classes.noOptions
  }, noOptionsText) : null, groupedOptions.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ListboxComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: classes.listbox
  }, getListboxProps(), ListboxProps), groupedOptions.map(function (option, index) {
    if (groupBy) {
      return renderGroup({
        key: option.key,
        group: option.group,
        children: option.options.map(function (option2, index2) {
          return renderListOption(option2, option.index + index2);
        })
      });
    }

    return renderListOption(option, index);
  })) : null)) : null);
});
 true ? Autocomplete.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the first option is automatically highlighted.
   */
  autoHighlight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   */
  autoSelect: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   */
  blurOnSelect: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['mouse', 'touch']), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool]),

  /**
   * Props applied to the [`Chip`](/api/chip/) element.
   */
  ChipProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the input's text will be cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume his search.
   */
  clearOnBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   */
  clearOnEscape: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  clearText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The icon to display in place of the default close icon.
   */
  closeIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  closeText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the popup will ignore the blur event if the input is filled.
   * You can inspect the popup markup with your browser tools.
   * Consider this option when you need to customize the component.
   */
  debug: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The default input value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * If `true`, the input can't be cleared.
   */
  disableClearable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * If `true`, the popup won't close when a value is selected.
   */
  disableCloseOnSelect: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the input will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the list box in the popup will not wrap focus.
   */
  disableListWrap: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A filter function that determines the options that are eligible.
   *
   * @param {T[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {T[]}
   */
  filterOptions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, hide the selected options from the list box.
   */
  filterSelectedOptions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Force the visibility display of the popup icon.
   */
  forcePopupIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool]),

  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   */
  freeSolo: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   */
  getLimitTagsText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {T} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * @param {T} option
   * @returns {string}
   */
  getOptionLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Used to determine if an option is selected, considering the current value.
   * Uses strict equality by default.
   *
   * @param {T} option The option to test.
   * @param {T} value The value to test against.
   * @returns {boolean}
   */
  getOptionSelected: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {T} options The options to group.
   * @returns {string}
   */
  groupBy: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   */
  handleHomeEndKeys: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the highlight can move to the input.
   */
  includeInputInList: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The input value.
   */
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   */
  limitTags: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * The component used to render the listbox.
   */
  ListboxComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * If `true`, the component is in a loading state.
   */
  loading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  loadingText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  noOptionsText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T|T[]} value The new value of the component.
   * @param {string} reason One of "create-option", "select-option", "remove-option", "blur" or "clear".
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"select-option"`, `"blur"`.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the highlight option changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`.
   */
  onHighlightChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the input value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Control the popup` open state.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the popup will open on input focus.
   */
  openOnFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  openText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Array of options.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,

  /**
   * The component used to render the body of the popup.
   */
  PaperComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * The component used to position the popup.
   */
  PopperComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * The icon to display in place of the default popup icon.
   */
  popupIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Render the group.
   *
   * @param {any} option The group to render.
   * @returns {ReactNode}
   */
  renderGroup: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,

  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {T} option The option to render.
   * @param {object} state The state of the component.
   * @returns {ReactNode}
   */
  renderOption: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Render the selected value.
   *
   * @param {T[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @returns {ReactNode}
   */
  renderTags: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the input's text will be selected on focus.
   * It helps the user clear the selected value.
   */
  selectOnFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The size of the autocomplete.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['medium', 'small']),

  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `getOptionSelected` prop.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiAutocomplete'
})(Autocomplete));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Autocomplete/index.js ***!
  \*****************************************************************/
/*! exports provided: default, createFilterOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Autocomplete__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilterOptions", function() { return _Autocomplete__WEBPACK_IMPORTED_MODULE_0__["createFilterOptions"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/AvatarGroup/AvatarGroup.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/AvatarGroup/AvatarGroup.js ***!
  \**********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");









var SPACINGS = {
  small: -16,
  medium: null
};
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex'
    },

    /* Styles applied to the avatar elements. */
    avatar: {
      border: "2px solid ".concat(theme.palette.background.default),
      marginLeft: -8,
      '&:first-child': {
        marginLeft: 0
      }
    }
  };
};
var AvatarGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function AvatarGroup(props, ref) {
  var childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$max = props.max,
      max = _props$max === void 0 ? 5 : _props$max,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 'medium' : _props$spacing,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "max", "spacing"]);

  var clampedMax = max < 2 ? 2 : max;
  var children = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(childrenProp).filter(function (child) {
    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isFragment"])(child)) {
        console.error(["Material-UI: The AvatarGroup component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child);
  });
  var extraAvatars = children.length > clampedMax ? children.length - clampedMax + 1 : 0;
  var marginLeft = spacing && SPACINGS[spacing] !== undefined ? SPACINGS[spacing] : -spacing;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    ref: ref
  }, other), children.slice(0, children.length - extraAvatars).map(function (child, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(child.props.className, classes.avatar),
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        zIndex: children.length - index,
        marginLeft: index === 0 ? undefined : marginLeft
      }, child.props.style)
    });
  }), extraAvatars ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.avatar,
    style: {
      zIndex: 0,
      marginLeft: marginLeft
    }
  }, "+", extraAvatars) : null);
});
 true ? AvatarGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The avatars to stack.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Max avatars to show before +x.
   */
  max: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_8__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, function (props) {
    if (props.max < 2) {
      throw new Error(['Material-UI: The prop `max` should be equal to 2 or above.', 'A value below is clamped to 2.'].join('\n'));
    }
  }),

  /**
   * Spacing between avatars.
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['medium', 'small']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiAvatarGroup'
})(AvatarGroup));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/AvatarGroup/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/AvatarGroup/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarGroup */ "./node_modules/@material-ui/lab/esm/AvatarGroup/AvatarGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AvatarGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Pagination/Pagination.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Pagination/Pagination.js ***!
  \********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _usePagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usePagination */ "./node_modules/@material-ui/lab/esm/Pagination/usePagination.js");
/* harmony import */ var _PaginationItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PaginationItem */ "./node_modules/@material-ui/lab/esm/PaginationItem/index.js");








var styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the ul element. */
  ul: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  }
};

function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return "".concat(selected ? '' : 'Go to ', "page ").concat(page);
  }

  return "Go to ".concat(type, " page");
}

var Pagination = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Pagination(props, ref) {
  var boundaryCount = props.boundaryCount,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'standard' : _props$color,
      count = props.count,
      defaultPage = props.defaultPage,
      disabled = props.disabled,
      _props$getItemAriaLab = props.getItemAriaLabel,
      getItemAriaLabel = _props$getItemAriaLab === void 0 ? defaultGetAriaLabel : _props$getItemAriaLab,
      hideNextButton = props.hideNextButton,
      hidePrevButton = props.hidePrevButton,
      onChange = props.onChange,
      page = props.page,
      _props$renderItem = props.renderItem,
      renderItem = _props$renderItem === void 0 ? function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_PaginationItem__WEBPACK_IMPORTED_MODULE_7__["default"], item);
  } : _props$renderItem,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'round' : _props$shape,
      showFirstButton = props.showFirstButton,
      showLastButton = props.showLastButton,
      siblingCount = props.siblingCount,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["boundaryCount", "classes", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"]);

  var _usePagination = Object(_usePagination__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    componentName: 'Pagination'
  })),
      items = _usePagination.items;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("nav", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": "pagination navigation",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("ul", {
    className: classes.ul
  }, items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", {
      key: index
    }, renderItem(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, {
      color: color,
      'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
      shape: shape,
      size: size,
      variant: variant
    })));
  })));
}); // @default tags synced with default values from usePagination

 true ? Pagination.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The active color.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'standard']),

  /**
   * The total number of pages.
   * @default 1
   */
  count: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * If `true`, the pagination component will be disabled.
   * @default false
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   *
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @param {bool} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The current page.
   */
  page: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Render the item.
   *
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   */
  renderItem: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The shape of the pagination items.
   */
  shape: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['round', 'rounded']),

  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The size of the pagination component.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['large', 'medium', 'small']),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['outlined', 'text'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiPagination'
})(Pagination));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Pagination/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Pagination/index.js ***!
  \***************************************************************/
/*! exports provided: default, usePagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination */ "./node_modules/@material-ui/lab/esm/Pagination/Pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _usePagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePagination */ "./node_modules/@material-ui/lab/esm/Pagination/usePagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePagination", function() { return _usePagination__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Pagination/usePagination.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Pagination/usePagination.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePagination; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");





function usePagination() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // keep default values in sync with @default tags in Pagination.propTypes
  var _props$boundaryCount = props.boundaryCount,
      boundaryCount = _props$boundaryCount === void 0 ? 1 : _props$boundaryCount,
      _props$componentName = props.componentName,
      componentName = _props$componentName === void 0 ? 'usePagination' : _props$componentName,
      _props$count = props.count,
      count = _props$count === void 0 ? 1 : _props$count,
      _props$defaultPage = props.defaultPage,
      defaultPage = _props$defaultPage === void 0 ? 1 : _props$defaultPage,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$hideNextButton = props.hideNextButton,
      hideNextButton = _props$hideNextButton === void 0 ? false : _props$hideNextButton,
      _props$hidePrevButton = props.hidePrevButton,
      hidePrevButton = _props$hidePrevButton === void 0 ? false : _props$hidePrevButton,
      handleChange = props.onChange,
      pageProp = props.page,
      _props$showFirstButto = props.showFirstButton,
      showFirstButton = _props$showFirstButto === void 0 ? false : _props$showFirstButto,
      _props$showLastButton = props.showLastButton,
      showLastButton = _props$showLastButton === void 0 ? false : _props$showLastButton,
      _props$siblingCount = props.siblingCount,
      siblingCount = _props$siblingCount === void 0 ? 1 : _props$siblingCount,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"]);

  var _useControlled = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useControlled"])({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: 'page'
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useControlled, 2),
      page = _useControlled2[0],
      setPageState = _useControlled2[1];

  var handleClick = function handleClick(event, value) {
    if (!pageProp) {
      setPageState(value);
    }

    if (handleChange) {
      handleChange(event, value);
    }
  }; // https://dev.to/namirsab/comment/2050


  var range = function range(start, end) {
    var length = end - start + 1;
    return Array.from({
      length: length
    }, function (_, i) {
      return start + i;
    });
  };

  var startPages = range(1, Math.min(boundaryCount, count));
  var endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  var siblingsStart = Math.max(Math.min( // Natural start
  page - siblingCount, // Lower boundary when page is high
  count - boundaryCount - siblingCount * 2 - 1), // Greater than startPages
  boundaryCount + 2);
  var siblingsEnd = Math.min(Math.max( // Natural end
  page + siblingCount, // Upper boundary when page is low
  boundaryCount + siblingCount * 2 + 2), // Less than endPages
  endPages[0] - 2); // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']

  var itemList = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(showFirstButton ? ['first'] : []), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(hidePrevButton ? [] : ['previous']), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(startPages), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(range(siblingsStart, siblingsEnd)), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(endPages), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(hideNextButton ? [] : ['next']), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(showLastButton ? ['last'] : [])); // Map the button type to its page number

  var buttonPage = function buttonPage(type) {
    switch (type) {
      case 'first':
        return 1;

      case 'previous':
        return page - 1;

      case 'next':
        return page + 1;

      case 'last':
        return count;

      default:
        return null;
    }
  }; // Convert the basic item list to PaginationItem props objects


  var items = itemList.map(function (item) {
    return typeof item === 'number' ? {
      onClick: function onClick(event) {
        handleClick(event, item);
      },
      type: 'page',
      page: item,
      selected: item === page,
      disabled: disabled,
      'aria-current': item === page ? 'true' : undefined
    } : {
      onClick: function onClick(event) {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || item.indexOf('ellipsis') === -1 && (item === 'next' || item === 'last' ? page >= count : page <= 1)
    };
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: items
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/PaginationItem/PaginationItem.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/PaginationItem/PaginationItem.js ***!
  \****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _internal_svg_icons_FirstPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/svg-icons/FirstPage */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/FirstPage.js");
/* harmony import */ var _internal_svg_icons_LastPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/LastPage */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/LastPage.js");
/* harmony import */ var _internal_svg_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/svg-icons/NavigateBefore */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/NavigateBefore.js");
/* harmony import */ var _internal_svg_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/svg-icons/NavigateNext */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/NavigateNext.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");












var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.body2, {
      borderRadius: 32 / 2,
      textAlign: 'center',
      boxSizing: 'border-box',
      minWidth: 32,
      height: 32,
      padding: '0 6px',
      margin: '0 3px',
      color: theme.palette.text.primary
    }),

    /* Styles applied to the root element if `type="page"`. */
    page: {
      transition: theme.transitions.create(['color', 'background-color'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$focusVisible': {
        backgroundColor: theme.palette.action.focus
      },
      '&$selected': {
        backgroundColor: theme.palette.action.selected,
        '&:hover, &$focusVisible': {
          backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.action.selected
          }
        },
        '&$disabled': {
          opacity: 1,
          color: theme.palette.action.disabled,
          backgroundColor: theme.palette.action.selected
        }
      },
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    },

    /* Styles applied applied to the root element if `size="small"`. */
    sizeSmall: {
      minWidth: 26,
      height: 26,
      borderRadius: 26 / 2,
      margin: '0 1px',
      padding: '0 4px',
      '& $icon': {
        fontSize: theme.typography.pxToRem(18)
      }
    },

    /* Styles applied applied to the root element if `size="large"`. */
    sizeLarge: {
      minWidth: 40,
      height: 40,
      borderRadius: 40 / 2,
      padding: '0 10px',
      fontSize: theme.typography.pxToRem(15),
      '& $icon': {
        fontSize: theme.typography.pxToRem(22)
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      '&$selected': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover, &$focusVisible': {
          backgroundColor: theme.palette.primary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.primary.main
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      '&$selected': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover, &$focusVisible': {
          backgroundColor: theme.palette.secondary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.secondary.main
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }
    },

    /* Styles applied to the root element if `outlined="true"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '&$selected': {
        '&$disabled': {
          border: "1px solid ".concat(theme.palette.action.disabledBackground)
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      '&$selected': {
        color: theme.palette.primary.main,
        border: "1px solid ".concat(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.primary.main, 0.5)),
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        '&:hover, &$focusVisible': {
          backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.primary.main, theme.palette.action.activatedOpacity + theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      '&$selected': {
        color: theme.palette.secondary.main,
        border: "1px solid ".concat(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.secondary.main, 0.5)),
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.secondary.main, theme.palette.action.activatedOpacity),
        '&:hover, &$focusVisible': {
          backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.secondary.main, theme.palette.action.activatedOpacity + theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }
    },

    /* Styles applied to the root element if `rounded="true"`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `type="start-ellipsis"` or `type="end-ellipsis"`. */
    ellipsis: {
      height: 'auto',
      '&$disabled': {
        opacity: theme.palette.action.disabledOpacity
      }
    },

    /* Pseudo-class applied to the root element if keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the icon element. */
    icon: {
      fontSize: theme.typography.pxToRem(20),
      margin: '0 -8px'
    }
  };
};
var PaginationItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function PaginationItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'standard' : _props$color,
      component = props.component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      page = props.page,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'round' : _props$shape,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$type = props.type,
      type = _props$type === void 0 ? 'page' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "className", "color", "component", "disabled", "page", "selected", "shape", "size", "type", "variant"]);

  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var normalizedIcons = theme.direction === 'rtl' ? {
    previous: _internal_svg_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_10__["default"],
    next: _internal_svg_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_9__["default"],
    last: _internal_svg_icons_FirstPage__WEBPACK_IMPORTED_MODULE_7__["default"],
    first: _internal_svg_icons_LastPage__WEBPACK_IMPORTED_MODULE_8__["default"]
  } : {
    previous: _internal_svg_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_9__["default"],
    next: _internal_svg_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_10__["default"],
    first: _internal_svg_icons_FirstPage__WEBPACK_IMPORTED_MODULE_7__["default"],
    last: _internal_svg_icons_LastPage__WEBPACK_IMPORTED_MODULE_8__["default"]
  };
  var Icon = normalizedIcons[type];
  return type === 'start-ellipsis' || type === 'end-ellipsis' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes.ellipsis, disabled && classes.disabled, size !== 'medium' && classes["size".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_11__["capitalize"])(size))])
  }, "\u2026") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: ref,
    component: component,
    disabled: disabled,
    focusVisibleClassName: classes.focusVisible,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes.page, classes[variant], classes[shape], className, color !== 'standard' && classes["".concat(variant).concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_11__["capitalize"])(color))], disabled && classes.disabled, selected && classes.selected, size !== 'medium' && classes["size".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_11__["capitalize"])(size))])
  }, other), type === 'page' && page, Icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Icon, {
    className: classes.icon
  }) : null);
});
 true ? PaginationItem.propTypes = {
  /**
   * @ignore
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The active color.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['standard', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the item will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The current page number.
   */
  page: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * If `true` the pagination item is selected.
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The shape of the pagination item.
   */
  shape: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['round', 'rounded']),

  /**
   * The size of the pagination item.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['small', 'medium', 'large']),

  /**
   * The type of pagination item.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['page', 'first', 'last', 'next', 'previous', 'start-ellipsis', 'end-ellipsis']),

  /**
   * The pagination item variant.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['text', 'outlined'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiPaginationItem'
})(PaginationItem));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/PaginationItem/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/PaginationItem/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationItem */ "./node_modules/@material-ui/lab/esm/PaginationItem/PaginationItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PaginationItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Rating/Rating.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Rating/Rating.js ***!
  \************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _internal_svg_icons_Star__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/svg-icons/Star */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Star.js");











function clamp(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}

function getDecimalPrecision(num) {
  var decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToPrecision(value, precision) {
  if (value == null) {
    return value;
  }

  var nearest = Math.round(value / precision) * precision;
  return Number(nearest.toFixed(getDecimalPrecision(precision)));
}

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      position: 'relative',
      fontSize: theme.typography.pxToRem(24),
      color: '#ffb400',
      cursor: 'pointer',
      textAlign: 'left',
      WebkitTapHighlightColor: 'transparent',
      '&$disabled': {
        opacity: 0.5,
        pointerEvents: 'none'
      },
      '&$focusVisible $iconActive': {
        outline: '1px solid #999'
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      fontSize: theme.typography.pxToRem(18)
    },

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {
      fontSize: theme.typography.pxToRem(30)
    },

    /* Styles applied to the root element if `readOnly={true}`. */
    readOnly: {
      pointerEvents: 'none'
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if keyboard focused. */
    focusVisible: {},

    /* Visually hide an element. */
    visuallyhidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      color: '#000',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1
    },

    /* Styles applied to the pristine label. */
    pristine: {
      'input:focus + &': {
        top: 0,
        bottom: 0,
        position: 'absolute',
        outline: '1px solid #999',
        width: '100%'
      }
    },

    /* Styles applied to the label elements. */
    label: {
      cursor: 'inherit'
    },

    /* Styles applied to the icon wrapping elements. */
    icon: {
      display: 'flex',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      }),
      // Fix mouseLeave issue.
      // https://github.com/facebook/react/issues/4492
      pointerEvents: 'none'
    },

    /* Styles applied to the icon wrapping elements when empty. */
    iconEmpty: {
      color: theme.palette.action.disabled
    },

    /* Styles applied to the icon wrapping elements when filled. */
    iconFilled: {},

    /* Styles applied to the icon wrapping elements when hover. */
    iconHover: {},

    /* Styles applied to the icon wrapping elements when focus. */
    iconFocus: {},

    /* Styles applied to the icon wrapping elements when active. */
    iconActive: {
      transform: 'scale(1.2)'
    },

    /* Styles applied to the icon wrapping elements when decimals are necessary. */
    decimal: {
      position: 'relative'
    }
  };
};

function IconContainer(props) {
  var value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["value"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", other);
}

 true ? IconContainer.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired
} : undefined;
var defaultIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_internal_svg_icons_Star__WEBPACK_IMPORTED_MODULE_9__["default"], {
  fontSize: "inherit"
});

function defaultLabelText(value) {
  return "".concat(value, " Star").concat(value !== 1 ? 's' : '');
}

var Rating = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Rating(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? null : _props$defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      emptyIcon = props.emptyIcon,
      _props$emptyLabelText = props.emptyLabelText,
      emptyLabelText = _props$emptyLabelText === void 0 ? 'Empty' : _props$emptyLabelText,
      _props$getLabelText = props.getLabelText,
      getLabelText = _props$getLabelText === void 0 ? defaultLabelText : _props$getLabelText,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? defaultIcon : _props$icon,
      _props$IconContainerC = props.IconContainerComponent,
      IconContainerComponent = _props$IconContainerC === void 0 ? IconContainer : _props$IconContainerC,
      _props$max = props.max,
      max = _props$max === void 0 ? 5 : _props$max,
      nameProp = props.name,
      onChange = props.onChange,
      onChangeActive = props.onChangeActive,
      onMouseLeave = props.onMouseLeave,
      onMouseMove = props.onMouseMove,
      _props$precision = props.precision,
      precision = _props$precision === void 0 ? 1 : _props$precision,
      _props$readOnly = props.readOnly,
      readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      valueProp = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["classes", "className", "defaultValue", "disabled", "emptyIcon", "emptyLabelText", "getLabelText", "icon", "IconContainerComponent", "max", "name", "onChange", "onChangeActive", "onMouseLeave", "onMouseMove", "precision", "readOnly", "size", "value"]);

  var name = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__["unstable_useId"])(nameProp);

  var _useControlled = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__["useControlled"])({
    controlled: valueProp,
    default: defaultValue,
    name: 'Rating'
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled, 2),
      valueDerived = _useControlled2[0],
      setValueState = _useControlled2[1];

  var valueRounded = roundValueToPrecision(valueDerived, precision);
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"]({
    hover: -1,
    focus: -1
  }),
      _React$useState$ = _React$useState[0],
      hover = _React$useState$.hover,
      focus = _React$useState$.focus,
      setState = _React$useState[1];

  var value = valueRounded;

  if (hover !== -1) {
    value = hover;
  }

  if (focus !== -1) {
    value = focus;
  }

  var _useIsFocusVisible = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__["useIsFocusVisible"])(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      focusVisible = _React$useState2[0],
      setFocusVisible = _React$useState2[1];

  var rootRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var handleFocusRef = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__["useForkRef"])(focusVisibleRef, rootRef);
  var handleRef = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__["useForkRef"])(handleFocusRef, ref);

  var handleMouseMove = function handleMouseMove(event) {
    if (onMouseMove) {
      onMouseMove(event);
    }

    var rootNode = rootRef.current;

    var _rootNode$getBounding = rootNode.getBoundingClientRect(),
        right = _rootNode$getBounding.right,
        left = _rootNode$getBounding.left;

    var _rootNode$firstChild$ = rootNode.firstChild.getBoundingClientRect(),
        width = _rootNode$firstChild$.width;

    var percent;

    if (theme.direction === 'rtl') {
      percent = (right - event.clientX) / (width * max);
    } else {
      percent = (event.clientX - left) / (width * max);
    }

    var newHover = roundValueToPrecision(max * percent + precision / 2, precision);
    newHover = clamp(newHover, precision, max);
    setState(function (prev) {
      return prev.hover === newHover && prev.focus === newHover ? prev : {
        hover: newHover,
        focus: newHover
      };
    });
    setFocusVisible(false);

    if (onChangeActive && hover !== newHover) {
      onChangeActive(event, newHover);
    }
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    var newHover = -1;
    setState({
      hover: newHover,
      focus: newHover
    });

    if (onChangeActive && hover !== newHover) {
      onChangeActive(event, newHover);
    }
  };

  var handleChange = function handleChange(event) {
    var newValue = parseFloat(event.target.value);
    setValueState(newValue);

    if (onChange) {
      onChange(event, newValue);
    }
  };

  var handleClear = function handleClear(event) {
    // Ignore keyboard events
    // https://github.com/facebook/react/issues/7407
    if (event.clientX === 0 && event.clientY === 0) {
      return;
    }

    setState({
      hover: -1,
      focus: -1
    });
    setValueState(null);

    if (onChange && parseFloat(event.target.value) === valueRounded) {
      onChange(event, null);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }

    var newFocus = parseFloat(event.target.value);
    setState(function (prev) {
      return {
        hover: prev.hover,
        focus: newFocus
      };
    });

    if (onChangeActive && focus !== newFocus) {
      onChangeActive(event, newFocus);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (hover !== -1) {
      return;
    }

    if (focusVisible !== false) {
      setFocusVisible(false);
      onBlurVisible();
    }

    var newFocus = -1;
    setState(function (prev) {
      return {
        hover: prev.hover,
        focus: newFocus
      };
    });

    if (onChangeActive && focus !== newFocus) {
      onChangeActive(event, newFocus);
    }
  };

  var item = function item(state, labelProps) {
    var id = "".concat(name, "-").concat(String(state.value).replace('.', '-'));
    var container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](IconContainerComponent, {
      value: state.value,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.icon, state.filled ? classes.iconFilled : classes.iconEmpty, state.hover && classes.iconHover, state.focus && classes.iconFocus, state.active && classes.iconActive)
    }, emptyIcon && !state.filled ? emptyIcon : icon);

    if (readOnly) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: state.value
      }, labelProps), container);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      key: state.value
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classes.label,
      htmlFor: id
    }, labelProps), container, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
      className: classes.visuallyhidden
    }, getLabelText(state.value))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input", {
      onFocus: handleFocus,
      onBlur: handleBlur,
      onChange: handleChange,
      onClick: handleClear,
      disabled: disabled,
      value: state.value,
      id: id,
      type: "radio",
      name: name,
      checked: state.checked,
      className: classes.visuallyhidden
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: handleRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, size !== 'medium' && classes["size".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__["capitalize"])(size))], disabled && classes.disabled, focusVisible && classes.focusVisible, readOnly && classes.readOnly),
    role: readOnly ? 'img' : null,
    "aria-label": readOnly ? getLabelText(value) : null
  }, other), Array.from(new Array(max)).map(function (_, index) {
    var itemValue = index + 1;

    if (precision < 1) {
      var items = Array.from(new Array(1 / precision));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
        key: itemValue,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.decimal, itemValue === Math.ceil(value) && (hover !== -1 || focus !== -1) && classes.iconActive)
      }, items.map(function ($, indexDecimal) {
        var itemDecimalValue = roundValueToPrecision(itemValue - 1 + (indexDecimal + 1) * precision, precision);
        return item({
          value: itemDecimalValue,
          filled: itemDecimalValue <= value,
          hover: itemDecimalValue <= hover,
          focus: itemDecimalValue <= focus,
          checked: itemDecimalValue === valueRounded
        }, {
          style: items.length - 1 === indexDecimal ? {} : {
            width: itemDecimalValue === value ? "".concat((indexDecimal + 1) * precision * 100, "%") : '0%',
            overflow: 'hidden',
            zIndex: 1,
            position: 'absolute'
          }
        });
      }));
    }

    return item({
      value: itemValue,
      active: itemValue === value && (hover !== -1 || focus !== -1),
      filled: itemValue <= value,
      hover: itemValue <= hover,
      focus: itemValue <= focus,
      checked: itemValue === valueRounded
    });
  }), !readOnly && !disabled && valueRounded == null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input", {
    value: "",
    id: "".concat(name, "-empty"),
    type: "radio",
    name: name,
    defaultChecked: true,
    className: classes.visuallyhidden
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", {
    className: classes.pristine,
    htmlFor: "".concat(name, "-empty")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
    className: classes.visuallyhidden
  }, emptyLabelText))));
});
 true ? Rating.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * If `true`, the rating will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The icon to display when empty.
   */
  emptyIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The label read when the rating input is empty.
   */
  emptyLabelText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   *
   * @param {number} value The rating label's value to format.
   * @returns {string}
   */
  getLabelText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The icon to display.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The component containing the icon.
   */
  IconContainerComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * Maximum rating.
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * The name attribute of the radio `input` elements.
   * If `readOnly` is false, the prop is required,
   * this input name`should be unique within the parent form.
   */
  name: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, function (props) {
    if (!props.readOnly && !props.name) {
      return new Error(['Material-UI: The prop `name` is required (when `readOnly` is false).', 'Additionally, the input name should be unique within the parent form.'].join('\n'));
    }

    return null;
  }),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {number} value The new value.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback function that is fired when the hover state changes.
   *
   * @param {object} event The event source of the callback.
   * @param {number} value The new value.
   */
  onChangeActive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The minimum increment value change allowed.
   */
  precision: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, function (props) {
    if (props.precision < 0.1) {
      return new Error(['Material-UI: The prop `precision` should be above 0.1.', 'A value below this limit has an imperceptible impact.'].join('\n'));
    }

    return null;
  }),

  /**
   * Removes all hover effects and pointer events.
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The size of the rating.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['large', 'medium', 'small']),

  /**
   * The rating value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles, {
  name: 'MuiRating'
})(Rating));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Rating/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Rating/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rating */ "./node_modules/@material-ui/lab/esm/Rating/Rating.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Rating__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js ***!
  \****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      // Create a "on paper" color with sufficient contrast retaining the color
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.text.primary, theme.palette.type === 'light' ? 0.11 : 0.13),
      height: '1.2em'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      marginTop: 0,
      marginBottom: 0,
      height: 'auto',
      transformOrigin: '0 60%',
      transform: 'scale(1, 0.60)',
      borderRadius: theme.shape.borderRadius,
      '&:empty:before': {
        content: '"\\00a0"'
      }
    },

    /* Styles applied to the root element if `variant="rect"`. */
    rect: {},

    /* Styles applied to the root element if `variant="circle"`. */
    circle: {
      borderRadius: '50%'
    },

    /* Styles applied to the root element if `animation="pulse"`. */
    pulse: {
      animation: '$pulse 1.5s ease-in-out 0.5s infinite'
    },
    '@keyframes pulse': {
      '0%': {
        opacity: 1
      },
      '50%': {
        opacity: 0.4
      },
      '100%': {
        opacity: 1
      }
    },

    /* Styles applied to the root element if `animation="wave"`. */
    wave: {
      position: 'relative',
      overflow: 'hidden',
      '&::after': {
        animation: '$wave 1.6s linear 0.5s infinite',
        background: "linear-gradient(90deg, transparent, ".concat(theme.palette.action.hover, ", transparent)"),
        content: '""',
        position: 'absolute',
        transform: 'translateX(-100%)',
        // Avoid flash during server-side hydration
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
      }
    },
    '@keyframes wave': {
      '0%': {
        transform: 'translateX(-100%)'
      },
      '60%': {
        // +0.5s of delay between each loop
        transform: 'translateX(100%)'
      },
      '100%': {
        transform: 'translateX(100%)'
      }
    },

    /* Styles applied when the component is passed children. */
    withChildren: {
      '& > *': {
        visibility: 'hidden'
      }
    },

    /* Styles applied when the component is passed children and no width. */
    fitContent: {
      maxWidth: 'fit-content'
    },

    /* Styles applied when the component is passed children and no height. */
    heightAuto: {
      height: 'auto'
    }
  };
};
var Skeleton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Skeleton(props, ref) {
  var _props$animation = props.animation,
      animation = _props$animation === void 0 ? 'pulse' : _props$animation,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'span' : _props$component,
      height = props.height,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      width = props.width,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["animation", "classes", "className", "component", "height", "variant", "width"]);

  var hasChildren = Boolean(other.children);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, classes[variant], className, hasChildren && [classes.withChildren, !width && classes.fitContent, !height && classes.heightAuto], animation !== false && classes[animation])
  }, other, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: width,
      height: height
    }, other.style)
  }));
});
 true ? Skeleton.propTypes = {
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   */
  animation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['pulse', 'wave', false]),

  /**
   * Optional children to infer width and height from.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * The type of content that will be rendered.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['text', 'rect', 'circle']),

  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiSkeleton'
})(Skeleton));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Skeleton/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Skeleton/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Skeleton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/SpeedDial/SpeedDial.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/SpeedDial/SpeedDial.js ***!
  \******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Zoom */ "./node_modules/@material-ui/core/esm/Zoom/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");











function getOrientation(direction) {
  if (direction === 'up' || direction === 'down') {
    return 'vertical';
  }

  if (direction === 'right' || direction === 'left') {
    return 'horizontal';
  }

  return undefined;
}

function clamp(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}

var dialRadius = 32;
var spacingActions = 16;
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      zIndex: theme.zIndex.speedDial,
      display: 'flex',
      alignItems: 'center',
      pointerEvents: 'none'
    },

    /* Styles applied to the Fab component. */
    fab: {
      pointerEvents: 'auto'
    },

    /* Styles applied to the root if direction="up" */
    directionUp: {
      flexDirection: 'column-reverse',
      '& $actions': {
        flexDirection: 'column-reverse',
        marginBottom: -dialRadius,
        paddingBottom: spacingActions + dialRadius
      }
    },

    /* Styles applied to the root if direction="down" */
    directionDown: {
      flexDirection: 'column',
      '& $actions': {
        flexDirection: 'column',
        marginTop: -dialRadius,
        paddingTop: spacingActions + dialRadius
      }
    },

    /* Styles applied to the root if direction="left" */
    directionLeft: {
      flexDirection: 'row-reverse',
      '& $actions': {
        flexDirection: 'row-reverse',
        marginRight: -dialRadius,
        paddingRight: spacingActions + dialRadius
      }
    },

    /* Styles applied to the root if direction="right" */
    directionRight: {
      flexDirection: 'row',
      '& $actions': {
        flexDirection: 'row',
        marginLeft: -dialRadius,
        paddingLeft: spacingActions + dialRadius
      }
    },

    /* Styles applied to the actions (`children` wrapper) element. */
    actions: {
      display: 'flex',
      pointerEvents: 'auto'
    },

    /* Styles applied to the actions (`children` wrapper) element if `open={false}`. */
    actionsClosed: {
      transition: 'top 0s linear 0.2s',
      pointerEvents: 'none'
    }
  };
};
var SpeedDial = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function SpeedDial(props, ref) {
  var ariaLabel = props.ariaLabel,
      _props$FabProps = props.FabProps;
  _props$FabProps = _props$FabProps === void 0 ? {} : _props$FabProps;

  var origDialButtonRef = _props$FabProps.ref,
      FabProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_props$FabProps, ["ref"]),
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'up' : _props$direction,
      _props$hidden = props.hidden,
      hidden = _props$hidden === void 0 ? false : _props$hidden,
      icon = props.icon,
      onBlur = props.onBlur,
      onClose = props.onClose,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onOpen = props.onOpen,
      open = props.open,
      openIcon = props.openIcon,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_7__["default"] : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? {
    enter: _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["duration"].enteringScreen,
    exit: _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["duration"].leavingScreen
  } : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["ariaLabel", "FabProps", "children", "classes", "className", "direction", "hidden", "icon", "onBlur", "onClose", "onFocus", "onKeyDown", "onMouseEnter", "onMouseLeave", "onOpen", "open", "openIcon", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  var eventTimer = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    return function () {
      clearTimeout(eventTimer.current);
    };
  }, []);
  /**
   * an index in actions.current
   */

  var focusedAction = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](0);
  /**
   * pressing this key while the focus is on a child SpeedDialAction focuses
   * the next SpeedDialAction.
   * It is equal to the first arrow key pressed while focus is on the SpeedDial
   * that is not orthogonal to the direction.
   * @type {utils.ArrowKey?}
   */

  var nextItemArrowKey = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();
  /**
   * refs to the Button that have an action associated to them in this SpeedDial
   * [Fab, ...(SpeedDialActions > Button)]
   * @type {HTMLButtonElement[]}
   */

  var actions = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]([]);
  actions.current = [actions.current[0]];
  var handleOwnFabRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (fabFef) {
    actions.current[0] = fabFef;
  }, []);
  var handleFabRef = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_9__["useForkRef"])(origDialButtonRef, handleOwnFabRef);
  /**
   * creates a ref callback for the Button in a SpeedDialAction
   * Is called before the original ref callback for Button that was set in buttonProps
   *
   * @param dialActionIndex {number}
   * @param origButtonRef {React.RefObject?}
   */

  var createHandleSpeedDialActionButtonRef = function createHandleSpeedDialActionButtonRef(dialActionIndex, origButtonRef) {
    return function (buttonRef) {
      actions.current[dialActionIndex + 1] = buttonRef;

      if (origButtonRef) {
        origButtonRef(buttonRef);
      }
    };
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (onKeyDown) {
      onKeyDown(event);
    }

    var key = event.key.replace('Arrow', '').toLowerCase();
    var _nextItemArrowKey$cur = nextItemArrowKey.current,
        nextItemArrowKeyCurrent = _nextItemArrowKey$cur === void 0 ? key : _nextItemArrowKey$cur;

    if (event.key === 'Escape') {
      if (onClose) {
        actions.current[0].focus();
        onClose(event, 'escapeKeyDown');
      }

      return;
    }

    if (getOrientation(key) === getOrientation(nextItemArrowKeyCurrent) && getOrientation(key) !== undefined) {
      event.preventDefault();
      var actionStep = key === nextItemArrowKeyCurrent ? 1 : -1; // stay within array indices

      var nextAction = clamp(focusedAction.current + actionStep, 0, actions.current.length - 1);
      actions.current[nextAction].focus();
      focusedAction.current = nextAction;
      nextItemArrowKey.current = nextItemArrowKeyCurrent;
    }
  };

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    // actions were closed while navigation state was not reset
    if (!open) {
      focusedAction.current = 0;
      nextItemArrowKey.current = undefined;
    }
  }, [open]);

  var handleClose = function handleClose(event) {
    if (event.type === 'mouseleave' && onMouseLeave) {
      onMouseLeave(event);
    }

    if (event.type === 'blur' && onBlur) {
      onBlur(event);
    }

    clearTimeout(eventTimer.current);

    if (onClose) {
      if (event.type === 'blur') {
        event.persist();
        eventTimer.current = setTimeout(function () {
          onClose(event, 'blur');
        });
      } else {
        onClose(event, 'mouseLeave');
      }
    }
  };

  var handleClick = function handleClick(event) {
    if (FabProps.onClick) {
      FabProps.onClick(event);
    }

    clearTimeout(eventTimer.current);

    if (open) {
      if (onClose) {
        onClose(event, 'toggle');
      }
    } else if (onOpen) {
      onOpen(event, 'toggle');
    }
  };

  var handleOpen = function handleOpen(event) {
    if (event.type === 'mouseenter' && onMouseEnter) {
      onMouseEnter(event);
    }

    if (event.type === 'focus' && onFocus) {
      onFocus(event);
    } // When moving the focus between two items,
    // a chain if blur and focus event is triggered.
    // We only handle the last event.


    clearTimeout(eventTimer.current);

    if (onOpen && !open) {
      event.persist(); // Wait for a future focus or click event

      eventTimer.current = setTimeout(function () {
        var eventMap = {
          focus: 'focus',
          mouseenter: 'mouseEnter'
        };
        onOpen(event, eventMap[event.type]);
      });
    }
  }; // Filter the label for valid id characters.


  var id = ariaLabel.replace(/^[^a-z]+|[^\w:.-]+/gi, '');
  var allItems = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(childrenProp).filter(function (child) {
    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isFragment"])(child)) {
        console.error(["Material-UI: The SpeedDial component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child);
  });
  var children = allItems.map(function (child, index) {
    var _child$props$FabProps = child.props.FabProps;
    _child$props$FabProps = _child$props$FabProps === void 0 ? {} : _child$props$FabProps;

    var origButtonRef = _child$props$FabProps.ref,
        ChildFabProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_child$props$FabProps, ["ref"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, {
      FabProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ChildFabProps, {
        ref: createHandleSpeedDialActionButtonRef(index, origButtonRef)
      }),
      delay: 30 * (open ? index : allItems.length - index),
      open: open,
      id: "".concat(id, "-action-").concat(index)
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes["direction".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_9__["capitalize"])(direction))], className),
    ref: ref,
    role: "presentation",
    onKeyDown: handleKeyDown,
    onBlur: handleClose,
    onFocus: handleOpen,
    onMouseEnter: handleOpen,
    onMouseLeave: handleClose
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    in: !hidden,
    timeout: transitionDuration,
    unmountOnExit: true
  }, TransitionProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "primary",
    "aria-label": ariaLabel,
    "aria-haspopup": "true",
    "aria-expanded": open,
    "aria-controls": "".concat(id, "-actions")
  }, FabProps, {
    onClick: handleClick,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.fab, FabProps.className),
    ref: handleFabRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](icon) && Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_9__["isMuiElement"])(icon, ['SpeedDialIcon']) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](icon, {
    open: open
  }) : icon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    id: "".concat(id, "-actions"),
    role: "menu",
    "aria-orientation": getOrientation(direction),
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.actions, !open && classes.actionsClosed)
  }, children));
});
 true ? SpeedDial.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The aria-label of the button element.
   * Also used to provide the `id` for the `SpeedDial` element and its children.
   */
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

  /**
   * SpeedDialActions to display when the SpeedDial is `open`.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The direction the actions open relative to the floating action button.
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['down', 'left', 'right', 'up']),

  /**
   * Props applied to the [`Fab`](/api/fab/) element.
   */
  FabProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * If `true`, the SpeedDial will be hidden.
   */
  hidden: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The icon to display in the SpeedDial Fab. The `SpeedDialIcon` component
   * provides a default Icon with animation.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggle"`, `"blur"`, `"mouseLeave"`, `"escapeKeyDown"`.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the component requests to be open.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggle"`, `"focus"`, `"mouseEnter"`.
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the SpeedDial is open.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * The icon to display in the SpeedDial Fab when the SpeedDial is open.
   */
  openIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  })]),

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiSpeedDial'
})(SpeedDial));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/SpeedDial/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/SpeedDial/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeedDial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeedDial */ "./node_modules/@material-ui/lab/esm/SpeedDial/SpeedDial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SpeedDial__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/SpeedDialAction/SpeedDialAction.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/SpeedDialAction/SpeedDialAction.js ***!
  \******************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


// @inheritedComponent Tooltip







var styles = function styles(theme) {
  return {
    /* Styles applied to the Fab component. */
    fab: {
      margin: 8,
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
      '&:hover': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["emphasize"])(theme.palette.background.paper, 0.15)
      },
      transition: "".concat(theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter
      }), ", opacity 0.8s"),
      opacity: 1
    },

    /* Styles applied to the Fab component if `open={false}`. */
    fabClosed: {
      opacity: 0,
      transform: 'scale(0)'
    },

    /* Styles applied to the root element if `tooltipOpen={true}`. */
    staticTooltip: {
      position: 'relative',
      display: 'flex',
      '& $staticTooltipLabel': {
        transition: theme.transitions.create(['transform', 'opacity'], {
          duration: theme.transitions.duration.shorter
        }),
        opacity: 1
      }
    },

    /* Styles applied to the root element if `tooltipOpen={true}` and `open={false}`. */
    staticTooltipClosed: {
      '& $staticTooltipLabel': {
        opacity: 0,
        transform: 'scale(0.5)'
      }
    },

    /* Styles applied to the static tooltip label if `tooltipOpen={true}`. */
    staticTooltipLabel: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: 'absolute'
    }, theme.typography.body1, {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[1],
      color: theme.palette.text.secondary,
      padding: '4px 16px',
      wordBreak: 'keep-all'
    }),

    /* Styles applied to the root if `tooltipOpen={true}` and `tooltipPlacement="left"`` */
    tooltipPlacementLeft: {
      alignItems: 'center',
      '& $staticTooltipLabel': {
        transformOrigin: '100% 50%',
        right: '100%',
        marginRight: 8
      }
    },

    /* Styles applied to the root if `tooltipOpen={true}` and `tooltipPlacement="right"`` */
    tooltipPlacementRight: {
      alignItems: 'center',
      '& $staticTooltipLabel': {
        transformOrigin: '0% 50%',
        left: '100%',
        marginLeft: 8
      }
    }
  };
};
var SpeedDialAction = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function SpeedDialAction(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? 0 : _props$delay,
      _props$FabProps = props.FabProps,
      FabProps = _props$FabProps === void 0 ? {} : _props$FabProps,
      icon = props.icon,
      id = props.id,
      open = props.open,
      TooltipClasses = props.TooltipClasses,
      _props$tooltipOpen = props.tooltipOpen,
      tooltipOpenProp = _props$tooltipOpen === void 0 ? false : _props$tooltipOpen,
      _props$tooltipPlaceme = props.tooltipPlacement,
      tooltipPlacement = _props$tooltipPlaceme === void 0 ? 'left' : _props$tooltipPlaceme,
      tooltipTitle = props.tooltipTitle,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "className", "delay", "FabProps", "icon", "id", "open", "TooltipClasses", "tooltipOpen", "tooltipPlacement", "tooltipTitle"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](tooltipOpenProp),
      tooltipOpen = _React$useState[0],
      setTooltipOpen = _React$useState[1];

  var handleTooltipClose = function handleTooltipClose() {
    setTooltipOpen(false);
  };

  var handleTooltipOpen = function handleTooltipOpen() {
    setTooltipOpen(true);
  };

  var transitionStyle = {
    transitionDelay: "".concat(delay, "ms")
  };
  var fab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    size: "small",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.fab, className, !open && classes.fabClosed),
    tabIndex: -1,
    role: "menuitem",
    "aria-describedby": "".concat(id, "-label")
  }, FabProps, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, transitionStyle, FabProps.style)
  }), icon);

  if (tooltipOpenProp) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      id: id,
      ref: ref,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.staticTooltip, classes["tooltipPlacement".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__["capitalize"])(tooltipPlacement))], !open && classes.staticTooltipClosed)
    }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
      style: transitionStyle,
      id: "".concat(id, "-label"),
      className: classes.staticTooltipLabel
    }, tooltipTitle), fab);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    id: id,
    ref: ref,
    title: tooltipTitle,
    placement: tooltipPlacement,
    onClose: handleTooltipClose,
    onOpen: handleTooltipOpen,
    open: open && tooltipOpen,
    classes: TooltipClasses
  }, other), fab);
});
 true ? SpeedDialAction.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Adds a transition delay, to allow a series of SpeedDialActions to be animated.
   */
  delay: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Props applied to the [`Fab`](/api/fab/) component.
   */
  FabProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The Icon to display in the SpeedDial Fab.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the tooltip is shown.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * `classes` prop applied to the [`Tooltip`](/api/tooltip/) element.
   */
  TooltipClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Make the tooltip always visible when the SpeedDial is open.
   */
  tooltipOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Placement of the tooltip.
   */
  tooltipPlacement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Label to display in the tooltip.
   */
  tooltipTitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiSpeedDialAction'
})(SpeedDialAction));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/SpeedDialAction/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/SpeedDialAction/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeedDialAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeedDialAction */ "./node_modules/@material-ui/lab/esm/SpeedDialAction/SpeedDialAction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SpeedDialAction__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/SpeedDialIcon/SpeedDialIcon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/SpeedDialIcon/SpeedDialIcon.js ***!
  \**************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _internal_svg_icons_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/svg-icons/Add */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Add.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 24
    },

    /* Styles applied to the icon component. */
    icon: {
      transition: theme.transitions.create(['transform', 'opacity'], {
        duration: theme.transitions.duration.short
      })
    },

    /* Styles applied to the icon component if `open={true}`. */
    iconOpen: {
      transform: 'rotate(45deg)'
    },

    /* Styles applied to the icon when and `openIcon` is provided and if `open={true}`. */
    iconWithOpenIconOpen: {
      opacity: 0
    },

    /* Styles applied to the `openIcon` if provided. */
    openIcon: {
      position: 'absolute',
      transition: theme.transitions.create(['transform', 'opacity'], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0,
      transform: 'rotate(-45deg)'
    },

    /* Styles applied to the `openIcon` if provided and if `open={true}`. */
    openIconOpen: {
      transform: 'rotate(0deg)',
      opacity: 1
    }
  };
};
var SpeedDialIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function SpeedDialIcon(props, ref) {
  var className = props.className,
      classes = props.classes,
      iconProp = props.icon,
      open = props.open,
      openIconProp = props.openIcon,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "classes", "icon", "open", "openIcon"]);

  var iconClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.icon, open && [classes.iconOpen, openIconProp && classes.iconWithOpenIconOpen]);
  var openIconClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.openIcon, open && classes.openIconOpen);

  function formatIcon(icon, newClassName) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](icon)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](icon, {
        className: newClassName
      });
    }

    return icon;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ref: ref
  }, other), openIconProp ? formatIcon(openIconProp, openIconClassName) : null, iconProp ? formatIcon(iconProp, iconClassName) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_Add__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: iconClassName
  }));
});
 true ? SpeedDialIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The icon to display in the SpeedDial Floating Action Button.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * @ignore
   * If `true`, the SpeedDial is open.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display in the SpeedDial Floating Action Button when the SpeedDial is open.
   */
  openIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
} : undefined;
SpeedDialIcon.muiName = 'SpeedDialIcon';
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiSpeedDialIcon'
})(SpeedDialIcon));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/SpeedDialIcon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/SpeedDialIcon/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpeedDialIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpeedDialIcon */ "./node_modules/@material-ui/lab/esm/SpeedDialIcon/SpeedDialIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SpeedDialIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TabContext/TabContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TabContext/TabContext.js ***!
  \********************************************************************/
/*! exports provided: default, useTabContext, getPanelId, getTabId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTabContext", function() { return useTabContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelId", function() { return getPanelId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabId", function() { return getTabId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @type {React.Context<{ idPrefix: string; value: string } | null>}
 */

var Context = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);

if (true) {
  Context.displayName = 'TabContext';
}

function useUniquePrefix() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      id = _React$useState[0],
      setId = _React$useState[1];

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    setId("mui-p-".concat(Math.round(Math.random() * 1e5)));
  }, []);
  return id;
}

function TabContext(props) {
  var children = props.children,
      value = props.value;
  var idPrefix = useUniquePrefix();
  var context = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return {
      idPrefix: idPrefix,
      value: value
    };
  }, [idPrefix, value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Context.Provider, {
    value: context
  }, children);
}
 true ? TabContext.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /**
   * The value of the currently selected `Tab`.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired
} : undefined;
/**
 * @returns {unknown}
 */

function useTabContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](Context);
}
function getPanelId(context, value) {
  var idPrefix = context.idPrefix;

  if (idPrefix === null) {
    return null;
  }

  return "".concat(context.idPrefix, "-P-").concat(value);
}
function getTabId(context, value) {
  var idPrefix = context.idPrefix;

  if (idPrefix === null) {
    return null;
  }

  return "".concat(context.idPrefix, "-T-").concat(value);
}

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TabContext/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TabContext/index.js ***!
  \***************************************************************/
/*! exports provided: default, useTabContext, getPanelId, getTabId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@material-ui/lab/esm/TabContext/TabContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TabContext__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTabContext", function() { return _TabContext__WEBPACK_IMPORTED_MODULE_0__["useTabContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPanelId", function() { return _TabContext__WEBPACK_IMPORTED_MODULE_0__["getPanelId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTabId", function() { return _TabContext__WEBPACK_IMPORTED_MODULE_0__["getTabId"]; });




/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TabList/TabList.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TabList/TabList.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TabContext */ "./node_modules/@material-ui/lab/esm/TabContext/index.js");






var TabList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TabList(props, ref) {
  var childrenProp = props.children,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children"]);

  var context = Object(_TabContext__WEBPACK_IMPORTED_MODULE_5__["useTabContext"])();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  var children = react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(childrenProp, function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, {
      // SOMEDAY: `Tabs` will set those themselves
      'aria-controls': Object(_TabContext__WEBPACK_IMPORTED_MODULE_5__["getPanelId"])(context, child.props.value),
      id: Object(_TabContext__WEBPACK_IMPORTED_MODULE_5__["getTabId"])(context, child.props.value)
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    ref: ref,
    value: context.value
  }), children);
});
 true ? TabList.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_3__["element"])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (TabList);

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TabList/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TabList/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabList */ "./node_modules/@material-ui/lab/esm/TabList/TabList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TabList__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TabPanel/TabPanel.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TabPanel/TabPanel.js ***!
  \****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TabContext */ "./node_modules/@material-ui/lab/esm/TabContext/index.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      padding: theme.spacing(3)
    }
  };
};
var TabPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TabPanel(props, ref) {
  var children = props.children,
      className = props.className,
      classes = props.classes,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "classes", "value"]);

  var context = Object(_TabContext__WEBPACK_IMPORTED_MODULE_6__["useTabContext"])();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  var id = Object(_TabContext__WEBPACK_IMPORTED_MODULE_6__["getPanelId"])(context, value);
  var tabId = Object(_TabContext__WEBPACK_IMPORTED_MODULE_6__["getTabId"])(context, value);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-labelledby": tabId,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel"
  }, other), value === context.value && children);
});
 true ? TabPanel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The `value` of the corresponding `Tab`. Must use the index of the `Tab` when
   * no `value` was passed to `Tab`.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiTabPanel'
})(TabPanel));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TabPanel/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TabPanel/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabPanel */ "./node_modules/@material-ui/lab/esm/TabPanel/TabPanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TabPanel__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Timeline/Timeline.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Timeline/Timeline.js ***!
  \****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _TimelineContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimelineContext */ "./node_modules/@material-ui/lab/esm/Timeline/TimelineContext.js");








var styles = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: '6px 16px',
      flexGrow: 1
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {},

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {},

    /* Styles applied to the root element if `align="alternate"`. */
    alignAlternate: {}
  };
};
var Timeline = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Timeline(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'left' : _props$align,
      classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["align", "classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_TimelineContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: {
      align: align
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("ul", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["align".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(align))], className),
    ref: ref
  }, other)));
});
 true ? Timeline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The position where the timeline's content should appear.
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['alternate', 'left', 'right']),

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiTimeline'
})(Timeline));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Timeline/TimelineContext.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Timeline/TimelineContext.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var TimelineContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});

if (true) {
  TimelineContext.displayName = 'TimelineContext';
}

/* harmony default export */ __webpack_exports__["default"] = (TimelineContext);

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Timeline/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Timeline/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline */ "./node_modules/@material-ui/lab/esm/Timeline/Timeline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Timeline__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineConnector/TimelineConnector.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineConnector/TimelineConnector.js ***!
  \**********************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      width: 2,
      backgroundColor: theme.palette.grey[400],
      flexGrow: 1
    }
  };
};
var TimelineConnector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TimelineConnector(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ref: ref
  }, other));
});
 true ? TimelineConnector.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiTimelineConnector'
})(TimelineConnector));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineConnector/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineConnector/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineConnector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineConnector */ "./node_modules/@material-ui/lab/esm/TimelineConnector/TimelineConnector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TimelineConnector__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineContent/TimelineContent.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineContent/TimelineContent.js ***!
  \******************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Timeline/TimelineContext */ "./node_modules/@material-ui/lab/esm/Timeline/TimelineContext.js");
/* harmony import */ var _TimelineItem_TimelineItemContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TimelineItem/TimelineItemContext */ "./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItemContext.js");









var styles = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: 1,
      padding: '6px 16px'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    }
  };
};
var TimelineContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TimelineContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_Timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      _React$useContext$ali = _React$useContext.align,
      align = _React$useContext$ali === void 0 ? 'left' : _React$useContext$ali;

  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_TimelineItem_TimelineItemContext__WEBPACK_IMPORTED_MODULE_8__["default"]),
      _React$useContext2$cl = _React$useContext2.classes,
      contextClasses = _React$useContext2$cl === void 0 ? {} : _React$useContext2$cl;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, contextClasses.content, classes["align".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(align))], className),
    ref: ref
  }, other));
});
 true ? TimelineContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiTimelineContent'
})(TimelineContent));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineContent/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineContent/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineContent */ "./node_modules/@material-ui/lab/esm/TimelineContent/TimelineContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TimelineContent__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineDot/TimelineDot.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineDot/TimelineDot.js ***!
  \**********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignSelf: 'baseline',
      borderStyle: 'solid',
      borderWidth: 2,
      padding: 4,
      borderRadius: '50%',
      boxShadow: theme.shadows[2],
      marginTop: 8,
      marginBottom: 8
    },

    /* Styles applied to the root element if `color="grey"` and `variant="default"`. */
    defaultGrey: {
      borderColor: 'transparent',
      color: theme.palette.grey[50],
      backgroundColor: theme.palette.grey[400]
    },

    /* Styles applied to the root element if `color="grey"` and `variant="outlined"`. */
    outlinedGrey: {
      boxShadow: 'none',
      color: theme.palette.grey.contrastText,
      borderColor: theme.palette.grey[400],
      backgroundColor: 'transparent'
    },

    /* Styles applied to the root element if `color="primary"` and `variant="default"`. */
    defaultPrimary: {
      borderColor: 'transparent',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="primary"` and `variant="outlined"`. */
    outlinedPrimary: {
      boxShadow: 'none',
      backgroundColor: 'transparent',
      borderColor: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"` and `variant="default"`. */
    defaultSecondary: {
      borderColor: 'transparent',
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="secondary"` and `variant="outlined"`. */
    outlinedSecondary: {
      boxShadow: 'none',
      backgroundColor: 'transparent',
      borderColor: theme.palette.secondary.main
    }
  };
};
var TimelineDot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TimelineDot(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'grey' : _props$color,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, color !== 'inherit' && classes["".concat(variant).concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(color))]),
    ref: ref
  }, other));
});
 true ? TimelineDot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The dot can have a different colors.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['grey', 'inherit', 'primary', 'secondary']),

  /**
   * The dot can appear filled or outlined.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'outlined'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiTimelineDot'
})(TimelineDot));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineDot/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineDot/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineDot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineDot */ "./node_modules/@material-ui/lab/esm/TimelineDot/TimelineDot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TimelineDot__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItem.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItem.js ***!
  \************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Timeline/TimelineContext */ "./node_modules/@material-ui/lab/esm/Timeline/TimelineContext.js");
/* harmony import */ var _TimelineItemContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TimelineItemContext */ "./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItemContext.js");









var styles = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      display: 'flex',
      position: 'relative',
      minHeight: 70
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {},

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `align="alternate"`. */
    alignAlternate: {
      '&:nth-child(even)': {
        flexDirection: 'row-reverse',
        '& $content': {
          textAlign: 'right'
        },
        '& $oppositeContent': {
          textAlign: 'left'
        }
      }
    },

    /* Styles applied to the root element if no there isn't TimelineOppositeContent provided. */
    missingOppositeContent: {
      '&:before': {
        content: '""',
        flex: 1,
        padding: '6px 16px'
      }
    },

    /* Styles applied to the timeline content node. */
    content: {},

    /* Styles applied to the timeline opposite content node. */
    oppositeContent: {}
  };
};
var TimelineItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TimelineItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_Timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      _React$useContext$ali = _React$useContext.align,
      align = _React$useContext$ali === void 0 ? 'left' : _React$useContext$ali;

  var hasOppositeContent = false;
  react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(props.children, function (child) {
    if (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["isMuiElement"])(child, ['TimelineOppositeContent'])) {
      hasOppositeContent = true;
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_TimelineItemContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
    value: {
      classes: {
        content: classes.content,
        oppositeContent: classes.oppositeContent
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["align".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(align))], className, !hasOppositeContent && classes.missingOppositeContent),
    ref: ref
  }, other)));
});
 true ? TimelineItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiTimelineItem'
})(TimelineItem));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItemContext.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItemContext.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var TimelineItemContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});

if (true) {
  TimelineItemContext.displayName = 'TimelineItemContext';
}

/* harmony default export */ __webpack_exports__["default"] = (TimelineItemContext);

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineItem/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineItem/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineItem */ "./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TimelineItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineOppositeContent/TimelineOppositeContent.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineOppositeContent/TimelineOppositeContent.js ***!
  \**********************************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Timeline/TimelineContext */ "./node_modules/@material-ui/lab/esm/Timeline/TimelineContext.js");
/* harmony import */ var _TimelineItem_TimelineItemContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TimelineItem/TimelineItemContext */ "./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItemContext.js");









var styles = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {
      padding: '6px 16px',
      marginRight: 'auto',
      textAlign: 'right',
      flex: 1
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'left'
    }
  };
};
var TimelineOppositeContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TimelineOppositeContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_Timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      _React$useContext$ali = _React$useContext.align,
      align = _React$useContext$ali === void 0 ? 'left' : _React$useContext$ali;

  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_TimelineItem_TimelineItemContext__WEBPACK_IMPORTED_MODULE_8__["default"]),
      _React$useContext2$cl = _React$useContext2.classes,
      contextClasses = _React$useContext2$cl === void 0 ? {} : _React$useContext2$cl;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, contextClasses.oppositeContent, classes["align".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(align))], className),
    ref: ref
  }, other));
});
 true ? TimelineOppositeContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
TimelineOppositeContent.muiName = 'TimelineOppositeContent';
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiTimelineOppositeContent'
})(TimelineOppositeContent));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineOppositeContent/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineOppositeContent/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineOppositeContent */ "./node_modules/@material-ui/lab/esm/TimelineOppositeContent/TimelineOppositeContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineSeparator/TimelineSeparator.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineSeparator/TimelineSeparator.js ***!
  \**********************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");






var styles = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center'
    }
  };
};
var TimelineSeparator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TimelineSeparator(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ref: ref
  }, other));
});
 true ? TimelineSeparator.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiTimelineSeparator'
})(TimelineSeparator));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineSeparator/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineSeparator/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineSeparator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineSeparator */ "./node_modules/@material-ui/lab/esm/TimelineSeparator/TimelineSeparator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TimelineSeparator__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js ***!
  \************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


// @inheritedComponent ButtonBase






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.button, {
      boxSizing: 'border-box',
      borderRadius: theme.shape.borderRadius,
      padding: 11,
      border: "1px solid ".concat(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.active, 0.12)),
      color: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.active, 0.38),
      '&$selected': {
        color: theme.palette.action.active,
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.active, 0.12),
        '&:hover': {
          backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.active, 0.15)
        },
        '& + &': {
          borderLeft: 0,
          marginLeft: 0
        }
      },
      '&$disabled': {
        color: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.action.disabled, 0.12)
      },
      '&:hover': {
        textDecoration: 'none',
        // Reset on mouse devices
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(theme.palette.text.primary, 0.05),
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      }
    }),

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the `label` wrapper element. */
    label: {
      width: '100%',
      // Ensure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: 7,
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {
      padding: 15,
      fontSize: theme.typography.pxToRem(15)
    }
  };
};
var ToggleButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ToggleButton(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      onChange = props.onChange,
      onClick = props.onClick,
      selected = props.selected,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "disabled", "disableFocusRipple", "onChange", "onClick", "selected", "size", "value"]);

  var handleChange = function handleChange(event) {
    if (onClick) {
      onClick(event, value);

      if (event.isDefaultPrevented()) {
        return;
      }
    }

    if (onChange) {
      onChange(event, value);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, disabled && classes.disabled, selected && classes.selected, size !== 'medium' && classes["size".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_7__["capitalize"])(size))]),
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    ref: ref,
    onClick: handleChange,
    onChange: onChange,
    value: value,
    "aria-pressed": selected
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: classes.label
  }, children));
});
 true ? ToggleButton.propTypes = {
  /**
   * The content of the button.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the button will be rendered in an active state.
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['small', 'medium', 'large']),

  /**
   * The value to associate with the button when selected in a
   * ToggleButtonGroup.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiToggleButton'
})(ToggleButton));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/ToggleButton/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/ToggleButton/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToggleButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/ToggleButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ToggleButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/ToggleButtonGroup.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/ToggleButtonGroup/ToggleButtonGroup.js ***!
  \**********************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _isValueSelected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isValueSelected */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/isValueSelected.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the children. */
    grouped: {},

    /* Styles applied to the children if `orientation="horizontal"`. */
    groupedHorizontal: {
      '&:not(:first-child)': {
        marginLeft: -1,
        borderLeft: '1px solid transparent',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      '&:not(:last-child)': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }
    },

    /* Styles applied to the children if `orientation="vertical"`. */
    groupedVertical: {
      '&:not(:first-child)': {
        marginTop: -1,
        borderTop: '1px solid transparent',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      },
      '&:not(:last-child)': {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    }
  };
};
var ToggleButtonGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ToggleButton(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$exclusive = props.exclusive,
      exclusive = _props$exclusive === void 0 ? false : _props$exclusive,
      onChange = props.onChange,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "exclusive", "onChange", "orientation", "size", "value"]);

  var handleChange = function handleChange(event, buttonValue) {
    if (!onChange) {
      return;
    }

    var index = value && value.indexOf(buttonValue);
    var newValue;

    if (value && index >= 0) {
      newValue = value.slice();
      newValue.splice(index, 1);
    } else {
      newValue = value ? value.concat(buttonValue) : [buttonValue];
    }

    onChange(event, newValue);
  };

  var handleExclusiveChange = function handleExclusiveChange(event, buttonValue) {
    if (!onChange) {
      return;
    }

    onChange(event, value === buttonValue ? null : buttonValue);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "group",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
      return null;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isFragment"])(child)) {
        console.error(["Material-UI: The ToggleButtonGroup component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.grouped, classes["grouped".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__["capitalize"])(orientation))], child.props.className),
      onChange: exclusive ? handleExclusiveChange : handleChange,
      selected: child.props.selected === undefined ? Object(_isValueSelected__WEBPACK_IMPORTED_MODULE_6__["default"])(child.props.value, value) : child.props.selected,
      size: child.props.size || size
    });
  }));
});
 true ? ToggleButtonGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the button.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, only allow one of the child ToggleButton values to be selected.
   */
  exclusive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {any} value of the selected buttons. When `exclusive` is true
   * this is a single value; when false an array of selected values. If no value
   * is selected and `exclusive` is true the value is null; when false an empty array.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The group orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['horizontal', 'vertical']),

  /**
   * The size of the buttons.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['large', 'medium', 'small']),

  /**
   * The currently selected value within the group or an array of selected
   * values when `exclusive` is false.
   *
   * The value must have reference equality with the option in order to be selected.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles, {
  name: 'MuiToggleButtonGroup'
})(ToggleButtonGroup));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/ToggleButtonGroup/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/ToggleButtonGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/isValueSelected.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/ToggleButtonGroup/isValueSelected.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isValueSelected; });
// Determine if the toggle button value matches, or is contained in, the
// candidate group value.
function isValueSelected(value, candidate) {
  if (candidate === undefined || value === undefined) {
    return false;
  }

  if (Array.isArray(candidate)) {
    return candidate.indexOf(value) >= 0;
  }

  return value === candidate;
}

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TreeItem/TreeItem.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TreeItem/TreeItem.js ***!
  \****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _TreeView_TreeViewContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TreeView/TreeViewContext */ "./node_modules/@material-ui/lab/esm/TreeView/TreeViewContext.js");



/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions  */








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      outline: 0,
      WebkitTapHighlightColor: 'transparent',
      '&:focus > $content $label': {
        backgroundColor: theme.palette.action.hover
      },
      '&$selected > $content $label': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      },
      '&$selected > $content $label:hover, &$selected:focus > $content $label': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Pseudo-class applied to the root element when expanded. */
    expanded: {},

    /* Pseudo-class applied to the root element when selected. */
    selected: {},

    /* Styles applied to the `role="group"` element. */
    group: {
      margin: 0,
      padding: 0,
      marginLeft: 17
    },

    /* Styles applied to the tree node content. */
    content: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },

    /* Styles applied to the tree node icon and collapse/expand icon. */
    iconContainer: {
      marginRight: 4,
      width: 15,
      display: 'flex',
      flexShrink: 0,
      justifyContent: 'center',
      '& svg': {
        fontSize: 18
      }
    },

    /* Styles applied to the label element. */
    label: {
      width: '100%',
      paddingLeft: 4,
      position: 'relative',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  };
};

var isPrintableCharacter = function isPrintableCharacter(str) {
  return str && str.length === 1 && str.match(/\S/);
};

var TreeItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TreeItem(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      collapseIcon = props.collapseIcon,
      endIcon = props.endIcon,
      expandIcon = props.expandIcon,
      iconProp = props.icon,
      label = props.label,
      nodeId = props.nodeId,
      onClick = props.onClick,
      onLabelClick = props.onLabelClick,
      onIconClick = props.onIconClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onMouseDown = props.onMouseDown,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6__["default"] : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "collapseIcon", "endIcon", "expandIcon", "icon", "label", "nodeId", "onClick", "onLabelClick", "onIconClick", "onFocus", "onKeyDown", "onMouseDown", "TransitionComponent", "TransitionProps"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_TreeView_TreeViewContext__WEBPACK_IMPORTED_MODULE_9__["default"]),
      contextIcons = _React$useContext.icons,
      focus = _React$useContext.focus,
      focusFirstNode = _React$useContext.focusFirstNode,
      focusLastNode = _React$useContext.focusLastNode,
      focusNextNode = _React$useContext.focusNextNode,
      focusPreviousNode = _React$useContext.focusPreviousNode,
      focusByFirstCharacter = _React$useContext.focusByFirstCharacter,
      selectNode = _React$useContext.selectNode,
      selectRange = _React$useContext.selectRange,
      selectNextNode = _React$useContext.selectNextNode,
      selectPreviousNode = _React$useContext.selectPreviousNode,
      rangeSelectToFirst = _React$useContext.rangeSelectToFirst,
      rangeSelectToLast = _React$useContext.rangeSelectToLast,
      selectAllNodes = _React$useContext.selectAllNodes,
      expandAllSiblings = _React$useContext.expandAllSiblings,
      toggleExpansion = _React$useContext.toggleExpansion,
      isExpanded = _React$useContext.isExpanded,
      isFocused = _React$useContext.isFocused,
      isSelected = _React$useContext.isSelected,
      isTabbable = _React$useContext.isTabbable,
      multiSelect = _React$useContext.multiSelect,
      getParent = _React$useContext.getParent,
      mapFirstChar = _React$useContext.mapFirstChar,
      addNodeToNodeMap = _React$useContext.addNodeToNodeMap,
      removeNodeFromNodeMap = _React$useContext.removeNodeFromNodeMap;

  var nodeRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var contentRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var handleRef = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__["useForkRef"])(nodeRef, ref);
  var icon = iconProp;
  var expandable = Boolean(Array.isArray(children) ? children.length : children);
  var expanded = isExpanded ? isExpanded(nodeId) : false;
  var focused = isFocused ? isFocused(nodeId) : false;
  var tabbable = isTabbable ? isTabbable(nodeId) : false;
  var selected = isSelected ? isSelected(nodeId) : false;
  var icons = contextIcons || {};
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();

  if (!icon) {
    if (expandable) {
      if (!expanded) {
        icon = expandIcon || icons.defaultExpandIcon;
      } else {
        icon = collapseIcon || icons.defaultCollapseIcon;
      }

      if (!icon) {
        icon = icons.defaultParentIcon;
      }
    } else {
      icon = endIcon || icons.defaultEndIcon;
    }
  }

  var handleClick = function handleClick(event) {
    if (!focused) {
      focus(nodeId);
    }

    var multiple = multiSelect && (event.shiftKey || event.ctrlKey || event.metaKey); // If already expanded and trying to toggle selection don't close

    if (expandable && !event.defaultPrevented && !(multiple && isExpanded(nodeId))) {
      toggleExpansion(event, nodeId);
    }

    if (multiple) {
      if (event.shiftKey) {
        selectRange(event, {
          end: nodeId
        });
      } else {
        selectNode(event, nodeId, true);
      }
    } else {
      selectNode(event, nodeId);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleMouseDown = function handleMouseDown(event) {
    if (event.shiftKey || event.ctrlKey || event.metaKey) {
      event.preventDefault();
    }

    if (onMouseDown) {
      onMouseDown(event);
    }
  };

  var handleNextArrow = function handleNextArrow(event) {
    if (expandable) {
      if (expanded) {
        focusNextNode(nodeId);
      } else {
        toggleExpansion(event);
      }
    }

    return true;
  };

  var handlePreviousArrow = function handlePreviousArrow(event) {
    if (expanded) {
      toggleExpansion(event, nodeId);
      return true;
    }

    var parent = getParent(nodeId);

    if (parent) {
      focus(parent);
      return true;
    }

    return false;
  };

  var handleKeyDown = function handleKeyDown(event) {
    var flag = false;
    var key = event.key;

    if (event.altKey || event.currentTarget !== event.target) {
      return;
    }

    var ctrlPressed = event.ctrlKey || event.metaKey;

    switch (key) {
      case ' ':
        if (nodeRef.current === event.currentTarget) {
          if (multiSelect && event.shiftKey) {
            flag = selectRange(event, {
              end: nodeId
            });
          } else if (multiSelect) {
            flag = selectNode(event, nodeId, true);
          } else {
            flag = selectNode(event, nodeId);
          }
        }

        event.stopPropagation();
        break;

      case 'Enter':
        if (nodeRef.current === event.currentTarget && expandable) {
          toggleExpansion(event);
          flag = true;
        }

        event.stopPropagation();
        break;

      case 'ArrowDown':
        if (multiSelect && event.shiftKey) {
          selectNextNode(event, nodeId);
        }

        focusNextNode(nodeId);
        flag = true;
        break;

      case 'ArrowUp':
        if (multiSelect && event.shiftKey) {
          selectPreviousNode(event, nodeId);
        }

        focusPreviousNode(nodeId);
        flag = true;
        break;

      case 'ArrowRight':
        if (theme.direction === 'rtl') {
          flag = handlePreviousArrow(event);
        } else {
          flag = handleNextArrow(event);
        }

        break;

      case 'ArrowLeft':
        if (theme.direction === 'rtl') {
          flag = handleNextArrow(event);
        } else {
          flag = handlePreviousArrow(event);
        }

        break;

      case 'Home':
        if (multiSelect && ctrlPressed && event.shiftKey) {
          rangeSelectToFirst(event, nodeId);
        }

        focusFirstNode();
        flag = true;
        break;

      case 'End':
        if (multiSelect && ctrlPressed && event.shiftKey) {
          rangeSelectToLast(event, nodeId);
        }

        focusLastNode();
        flag = true;
        break;

      default:
        if (key === '*') {
          expandAllSiblings(event, nodeId);
          flag = true;
        } else if (multiSelect && ctrlPressed && key.toLowerCase() === 'a') {
          flag = selectAllNodes(event);
        } else if (!ctrlPressed && !event.shiftKey && isPrintableCharacter(key)) {
          focusByFirstCharacter(nodeId, key);
          flag = true;
        }

    }

    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (!focused && event.currentTarget === event.target) {
      focus(nodeId);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (addNodeToNodeMap) {
      var childIds = [];
      react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child) {
        if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child) && child.props.nodeId) {
          childIds.push(child.props.nodeId);
        }
      });
      addNodeToNodeMap(nodeId, childIds);
    }
  }, [children, nodeId, addNodeToNodeMap]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (removeNodeFromNodeMap) {
      return function () {
        removeNodeFromNodeMap(nodeId);
      };
    }

    return undefined;
  }, [nodeId, removeNodeFromNodeMap]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (mapFirstChar && label) {
      mapFirstChar(nodeId, contentRef.current.textContent.substring(0, 1).toLowerCase());
    }
  }, [mapFirstChar, nodeId, label]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (focused) {
      nodeRef.current.focus();
    }
  }, [focused]);
  var ariaSelected;

  if (multiSelect) {
    ariaSelected = selected;
  } else if (selected) {
    // single-selection trees unset aria-selected
    ariaSelected = true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className, expanded && classes.expanded, selected && classes.selected),
    role: "treeitem",
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
    "aria-expanded": expandable ? expanded : null,
    "aria-selected": ariaSelected,
    ref: handleRef,
    tabIndex: tabbable ? 0 : -1
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.content,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    ref: contentRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    onClick: onIconClick,
    className: classes.iconContainer
  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: onLabelClick,
    component: "div",
    className: classes.label
  }, label)), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    unmountOnExit: true,
    className: classes.group,
    in: expanded,
    component: "ul",
    role: "group"
  }, TransitionProps), children));
});
 true ? TreeItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The icon used to collapse the node.
   */
  collapseIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The icon displayed next to a end node.
   */
  endIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The icon used to expand the node.
   */
  expandIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The icon to display next to the tree node's label.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The tree node label.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The id of the node.
   */
  nodeId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * `onClick` handler for the icon container. Call `event.preventDefault()` to prevent `onNodeToggle` from being called.
   */
  onIconClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * `onClick` handler for the label container. Call `event.preventDefault()` to prevent `onNodeToggle` from being called.
   */
  onLabelClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles, {
  name: 'MuiTreeItem'
})(TreeItem));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TreeItem/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TreeItem/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreeItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeItem */ "./node_modules/@material-ui/lab/esm/TreeItem/TreeItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TreeItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TreeView/TreeView.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TreeView/TreeView.js ***!
  \****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _TreeViewContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TreeViewContext */ "./node_modules/@material-ui/lab/esm/TreeView/TreeViewContext.js");









var styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 0,
    margin: 0,
    listStyle: 'none'
  }
};

function arrayDiff(arr1, arr2) {
  if (arr1.length !== arr2.length) return true;

  for (var i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return true;
  }

  return false;
}

var findNextFirstChar = function findNextFirstChar(firstChars, startIndex, char) {
  for (var i = startIndex; i < firstChars.length; i += 1) {
    if (char === firstChars[i]) {
      return i;
    }
  }

  return -1;
};

var defaultExpandedDefault = [];
var defaultSelectedDefault = [];
var TreeView = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function TreeView(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      defaultCollapseIcon = props.defaultCollapseIcon,
      defaultEndIcon = props.defaultEndIcon,
      _props$defaultExpande = props.defaultExpanded,
      defaultExpanded = _props$defaultExpande === void 0 ? defaultExpandedDefault : _props$defaultExpande,
      defaultExpandIcon = props.defaultExpandIcon,
      defaultParentIcon = props.defaultParentIcon,
      _props$defaultSelecte = props.defaultSelected,
      defaultSelected = _props$defaultSelecte === void 0 ? defaultSelectedDefault : _props$defaultSelecte,
      _props$disableSelecti = props.disableSelection,
      disableSelection = _props$disableSelecti === void 0 ? false : _props$disableSelecti,
      _props$multiSelect = props.multiSelect,
      multiSelect = _props$multiSelect === void 0 ? false : _props$multiSelect,
      expandedProp = props.expanded,
      onNodeSelect = props.onNodeSelect,
      onNodeToggle = props.onNodeToggle,
      selectedProp = props.selected,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "classes", "className", "defaultCollapseIcon", "defaultEndIcon", "defaultExpanded", "defaultExpandIcon", "defaultParentIcon", "defaultSelected", "disableSelection", "multiSelect", "expanded", "onNodeSelect", "onNodeToggle", "selected"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](null),
      tabbable = _React$useState[0],
      setTabbable = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_3__["useState"](null),
      focusedNodeId = _React$useState2[0],
      setFocusedNodeId = _React$useState2[1];

  var nodeMap = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]({});
  var firstCharMap = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]({});
  var visibleNodes = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]([]);

  var _useControlled = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_7__["useControlled"])({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'TreeView',
    state: 'expanded'
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled, 2),
      expanded = _useControlled2[0],
      setExpandedState = _useControlled2[1];

  var _useControlled3 = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_7__["useControlled"])({
    controlled: selectedProp,
    default: defaultSelected,
    name: 'TreeView',
    state: 'selected'
  }),
      _useControlled4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled3, 2),
      selected = _useControlled4[0],
      setSelectedState = _useControlled4[1];
  /*
   * Status Helpers
   */


  var isExpanded = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (id) {
    return Array.isArray(expanded) ? expanded.indexOf(id) !== -1 : false;
  }, [expanded]);
  var isSelected = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (id) {
    return Array.isArray(selected) ? selected.indexOf(id) !== -1 : selected === id;
  }, [selected]);

  var isTabbable = function isTabbable(id) {
    return tabbable === id;
  };

  var isFocused = function isFocused(id) {
    return focusedNodeId === id;
  };
  /*
   * Node Helpers
   */


  var getNextNode = function getNextNode(id) {
    var nodeIndex = visibleNodes.current.indexOf(id);

    if (nodeIndex !== -1 && nodeIndex + 1 < visibleNodes.current.length) {
      return visibleNodes.current[nodeIndex + 1];
    }

    return null;
  };

  var getPreviousNode = function getPreviousNode(id) {
    var nodeIndex = visibleNodes.current.indexOf(id);

    if (nodeIndex !== -1 && nodeIndex - 1 >= 0) {
      return visibleNodes.current[nodeIndex - 1];
    }

    return null;
  };

  var getLastNode = function getLastNode() {
    return visibleNodes.current[visibleNodes.current.length - 1];
  };

  var getFirstNode = function getFirstNode() {
    return visibleNodes.current[0];
  };

  var getParent = function getParent(id) {
    return nodeMap.current[id].parent;
  };

  var getNodesInRange = function getNodesInRange(a, b) {
    var aIndex = visibleNodes.current.indexOf(a);
    var bIndex = visibleNodes.current.indexOf(b);
    var start = Math.min(aIndex, bIndex);
    var end = Math.max(aIndex, bIndex);
    return visibleNodes.current.slice(start, end + 1);
  };
  /*
   * Focus Helpers
   */


  var focus = function focus(id) {
    if (id) {
      setTabbable(id);
      setFocusedNodeId(id);
    }
  };

  var focusNextNode = function focusNextNode(id) {
    return focus(getNextNode(id));
  };

  var focusPreviousNode = function focusPreviousNode(id) {
    return focus(getPreviousNode(id));
  };

  var focusFirstNode = function focusFirstNode() {
    return focus(getFirstNode());
  };

  var focusLastNode = function focusLastNode() {
    return focus(getLastNode());
  };

  var focusByFirstCharacter = function focusByFirstCharacter(id, char) {
    var start;
    var index;
    var lowercaseChar = char.toLowerCase();
    var firstCharIds = [];
    var firstChars = []; // This really only works since the ids are strings

    Object.keys(firstCharMap.current).forEach(function (nodeId) {
      var firstChar = firstCharMap.current[nodeId];
      var map = nodeMap.current[nodeId];
      var visible = map.parent ? isExpanded(map.parent) : true;

      if (visible) {
        firstCharIds.push(nodeId);
        firstChars.push(firstChar);
      }
    }); // Get start index for search based on position of currentItem

    start = firstCharIds.indexOf(id) + 1;

    if (start === nodeMap.current.length) {
      start = 0;
    } // Check remaining slots in the menu


    index = findNextFirstChar(firstChars, start, lowercaseChar); // If not found in remaining slots, check from beginning

    if (index === -1) {
      index = findNextFirstChar(firstChars, 0, lowercaseChar);
    } // If match was found...


    if (index > -1) {
      focus(firstCharIds[index]);
    }
  };
  /*
   * Expansion Helpers
   */


  var toggleExpansion = function toggleExpansion(event) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : focusedNodeId;
    var newExpanded;

    if (expanded.indexOf(value) !== -1) {
      newExpanded = expanded.filter(function (id) {
        return id !== value;
      });
      setTabbable(function (oldTabbable) {
        var map = nodeMap.current[oldTabbable];

        if (oldTabbable && (map && map.parent ? map.parent.id : null) === value) {
          return value;
        }

        return oldTabbable;
      });
    } else {
      newExpanded = [value].concat(expanded);
    }

    if (onNodeToggle) {
      onNodeToggle(event, newExpanded);
    }

    setExpandedState(newExpanded);
  };

  var expandAllSiblings = function expandAllSiblings(event, id) {
    var map = nodeMap.current[id];
    var parent = nodeMap.current[map.parent];
    var diff;

    if (parent) {
      diff = parent.children.filter(function (child) {
        return !isExpanded(child);
      });
    } else {
      var topLevelNodes = nodeMap.current[-1].children;
      diff = topLevelNodes.filter(function (node) {
        return !isExpanded(node);
      });
    }

    var newExpanded = expanded.concat(diff);

    if (diff.length > 0) {
      setExpandedState(newExpanded);

      if (onNodeToggle) {
        onNodeToggle(event, newExpanded);
      }
    }
  };
  /*
   * Selection Helpers
   */


  var lastSelectedNode = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var lastSelectionWasRange = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](false);
  var currentRangeSelection = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]([]);

  var handleRangeArrowSelect = function handleRangeArrowSelect(event, nodes) {
    var base = selected;
    var start = nodes.start,
        next = nodes.next,
        current = nodes.current;

    if (!next || !current) {
      return;
    }

    if (currentRangeSelection.current.indexOf(current) === -1) {
      currentRangeSelection.current = [];
    }

    if (lastSelectionWasRange.current) {
      if (currentRangeSelection.current.indexOf(next) !== -1) {
        base = base.filter(function (id) {
          return id === start || id !== current;
        });
        currentRangeSelection.current = currentRangeSelection.current.filter(function (id) {
          return id === start || id !== current;
        });
      } else {
        base.push(next);
        currentRangeSelection.current.push(next);
      }
    } else {
      base.push(next);
      currentRangeSelection.current.push(current, next);
    }

    if (onNodeSelect) {
      onNodeSelect(event, base);
    }

    setSelectedState(base);
  };

  var handleRangeSelect = function handleRangeSelect(event, nodes) {
    var base = selected;
    var start = nodes.start,
        end = nodes.end; // If last selection was a range selection ignore nodes that were selected.

    if (lastSelectionWasRange.current) {
      base = selected.filter(function (id) {
        return currentRangeSelection.current.indexOf(id) === -1;
      });
    }

    var range = getNodesInRange(start, end);
    currentRangeSelection.current = range;
    var newSelected = base.concat(range);
    newSelected = newSelected.filter(function (id, i) {
      return newSelected.indexOf(id) === i;
    });

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var handleMultipleSelect = function handleMultipleSelect(event, value) {
    var newSelected = [];

    if (selected.indexOf(value) !== -1) {
      newSelected = selected.filter(function (id) {
        return id !== value;
      });
    } else {
      newSelected = [value].concat(selected);
    }

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var handleSingleSelect = function handleSingleSelect(event, value) {
    var newSelected = multiSelect ? [value] : value;

    if (onNodeSelect) {
      onNodeSelect(event, newSelected);
    }

    setSelectedState(newSelected);
  };

  var selectNode = function selectNode(event, id) {
    var multiple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (id) {
      if (multiple) {
        handleMultipleSelect(event, id);
      } else {
        handleSingleSelect(event, id);
      }

      lastSelectedNode.current = id;
      lastSelectionWasRange.current = false;
      currentRangeSelection.current = [];
      return true;
    }

    return false;
  };

  var selectRange = function selectRange(event, nodes) {
    var stacked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var _nodes$start = nodes.start,
        start = _nodes$start === void 0 ? lastSelectedNode.current : _nodes$start,
        end = nodes.end,
        current = nodes.current;

    if (stacked) {
      handleRangeArrowSelect(event, {
        start: start,
        next: end,
        current: current
      });
    } else {
      handleRangeSelect(event, {
        start: start,
        end: end
      });
    }

    lastSelectionWasRange.current = true;
    return true;
  };

  var rangeSelectToFirst = function rangeSelectToFirst(event, id) {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }

    var start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    return selectRange(event, {
      start: start,
      end: getFirstNode()
    });
  };

  var rangeSelectToLast = function rangeSelectToLast(event, id) {
    if (!lastSelectedNode.current) {
      lastSelectedNode.current = id;
    }

    var start = lastSelectionWasRange.current ? lastSelectedNode.current : id;
    return selectRange(event, {
      start: start,
      end: getLastNode()
    });
  };

  var selectNextNode = function selectNextNode(event, id) {
    return selectRange(event, {
      end: getNextNode(id),
      current: id
    }, true);
  };

  var selectPreviousNode = function selectPreviousNode(event, id) {
    return selectRange(event, {
      end: getPreviousNode(id),
      current: id
    }, true);
  };

  var selectAllNodes = function selectAllNodes(event) {
    return selectRange(event, {
      start: getFirstNode(),
      end: getLastNode()
    });
  };
  /*
   * Mapping Helpers
   */


  var addNodeToNodeMap = function addNodeToNodeMap(id, childrenIds) {
    var currentMap = nodeMap.current[id];
    nodeMap.current[id] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentMap, {
      children: childrenIds,
      id: id
    });
    childrenIds.forEach(function (childId) {
      var currentChildMap = nodeMap.current[childId];
      nodeMap.current[childId] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentChildMap, {
        parent: id,
        id: childId
      });
    });
  };

  var getNodesToRemove = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (id) {
    var map = nodeMap.current[id];
    var nodes = [];

    if (map) {
      nodes.push(id);

      if (map.children) {
        nodes.concat(map.children);
        map.children.forEach(function (node) {
          nodes.concat(getNodesToRemove(node));
        });
      }
    }

    return nodes;
  }, []);
  var cleanUpFirstCharMap = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (nodes) {
    var newMap = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, firstCharMap.current);

    nodes.forEach(function (node) {
      if (newMap[node]) {
        delete newMap[node];
      }
    });
    firstCharMap.current = newMap;
  }, []);
  var removeNodeFromNodeMap = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (id) {
    var nodes = getNodesToRemove(id);
    cleanUpFirstCharMap(nodes);

    var newMap = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, nodeMap.current);

    nodes.forEach(function (node) {
      var map = newMap[node];

      if (map) {
        if (map.parent) {
          var parentMap = newMap[map.parent];

          if (parentMap && parentMap.children) {
            var parentChildren = parentMap.children.filter(function (c) {
              return c !== node;
            });
            newMap[map.parent] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parentMap, {
              children: parentChildren
            });
          }
        }

        delete newMap[node];
      }
    });
    nodeMap.current = newMap;
    setFocusedNodeId(function (oldFocusedNodeId) {
      if (oldFocusedNodeId === id) {
        return null;
      }

      return oldFocusedNodeId;
    });
  }, [getNodesToRemove, cleanUpFirstCharMap]);

  var mapFirstChar = function mapFirstChar(id, firstChar) {
    firstCharMap.current[id] = firstChar;
  };

  var prevChildIds = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]([]);

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      childrenCalculated = _React$useState3[0],
      setChildrenCalculated = _React$useState3[1];

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    var childIds = [];
    react__WEBPACK_IMPORTED_MODULE_3__["Children"].forEach(children, function (child) {
      if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"](child) && child.props.nodeId) {
        childIds.push(child.props.nodeId);
      }
    });

    if (arrayDiff(prevChildIds.current, childIds)) {
      nodeMap.current[-1] = {
        parent: null,
        children: childIds
      };
      childIds.forEach(function (id, index) {
        if (index === 0) {
          setTabbable(id);
        }
      });
      visibleNodes.current = nodeMap.current[-1].children;
      prevChildIds.current = childIds;
      setChildrenCalculated(true);
    }
  }, [children]);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    var buildVisible = function buildVisible(nodes) {
      var list = [];

      for (var i = 0; i < nodes.length; i += 1) {
        var item = nodes[i];
        list.push(item);
        var childs = nodeMap.current[item].children;

        if (isExpanded(item) && childs) {
          list = list.concat(buildVisible(childs));
        }
      }

      return list;
    };

    if (childrenCalculated) {
      visibleNodes.current = buildVisible(nodeMap.current[-1].children);
    }
  }, [expanded, childrenCalculated, isExpanded, children]);

  var noopSelection = function noopSelection() {
    return false;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_TreeViewContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
    value: {
      icons: {
        defaultCollapseIcon: defaultCollapseIcon,
        defaultExpandIcon: defaultExpandIcon,
        defaultParentIcon: defaultParentIcon,
        defaultEndIcon: defaultEndIcon
      },
      focus: focus,
      focusFirstNode: focusFirstNode,
      focusLastNode: focusLastNode,
      focusNextNode: focusNextNode,
      focusPreviousNode: focusPreviousNode,
      focusByFirstCharacter: focusByFirstCharacter,
      expandAllSiblings: expandAllSiblings,
      toggleExpansion: toggleExpansion,
      isExpanded: isExpanded,
      isFocused: isFocused,
      isSelected: isSelected,
      selectNode: disableSelection ? noopSelection : selectNode,
      selectRange: disableSelection ? noopSelection : selectRange,
      selectNextNode: disableSelection ? noopSelection : selectNextNode,
      selectPreviousNode: disableSelection ? noopSelection : selectPreviousNode,
      rangeSelectToFirst: disableSelection ? noopSelection : rangeSelectToFirst,
      rangeSelectToLast: disableSelection ? noopSelection : rangeSelectToLast,
      selectAllNodes: disableSelection ? noopSelection : selectAllNodes,
      isTabbable: isTabbable,
      multiSelect: multiSelect,
      getParent: getParent,
      mapFirstChar: mapFirstChar,
      addNodeToNodeMap: addNodeToNodeMap,
      removeNodeFromNodeMap: removeNodeFromNodeMap
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("ul", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "tree",
    "aria-multiselectable": multiSelect,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ref: ref
  }, other), children));
});
 true ? TreeView.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * The default icon used to collapse the node.
   */
  defaultCollapseIcon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,

  /**
   * The default icon displayed next to a end node. This is applied to all
   * tree nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultEndIcon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,

  /**
   * Expanded node ids. (Uncontrolled)
   */
  defaultExpanded: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string),

  /**
   * The default icon used to expand the node.
   */
  defaultExpandIcon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,

  /**
   * The default icon displayed next to a parent node. This is applied to all
   * parent nodes and can be overridden by the TreeItem `icon` prop.
   */
  defaultParentIcon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,

  /**
   * Selected node ids. (Uncontrolled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   */
  defaultSelected: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),

  /**
   * If `true` selection is disabled.
   */
  disableSelection: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Expanded node ids. (Controlled)
   */
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string),

  /**
   * If true `ctrl` and `shift` will trigger multiselect.
   */
  multiSelect: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Callback fired when tree items are selected/unselected.
   *
   * @param {object} event The event source of the callback
   * @param {(array|string)} value of the selected nodes. When `multiSelect` is true
   * this is an array of strings; when false (default) a string.
   */
  onNodeSelect: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback fired when tree items are expanded/collapsed.
   *
   * @param {object} event The event source of the callback.
   * @param {array} nodeIds The ids of the expanded nodes.
   */
  onNodeToggle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Selected node ids. (Controlled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiTreeView'
})(TreeView));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TreeView/TreeViewContext.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TreeView/TreeViewContext.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var TreeViewContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});

if (true) {
  TreeViewContext.displayName = 'TreeViewContext';
}

/* harmony default export */ __webpack_exports__["default"] = (TreeViewContext);

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TreeView/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TreeView/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreeView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeView */ "./node_modules/@material-ui/lab/esm/TreeView/TreeView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TreeView__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/index.js ***!
  \****************************************************/
/*! exports provided: Alert, AlertTitle, Autocomplete, createFilterOptions, AvatarGroup, Pagination, usePagination, PaginationItem, Rating, Skeleton, SpeedDial, SpeedDialAction, SpeedDialIcon, TabContext, useTabContext, getPanelId, getTabId, TabList, TabPanel, Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, ToggleButton, ToggleButtonGroup, TreeItem, TreeView, useAutocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _Alert__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _AlertTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertTitle */ "./node_modules/@material-ui/lab/esm/AlertTitle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertTitle", function() { return _AlertTitle__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return _Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilterOptions", function() { return _Autocomplete__WEBPACK_IMPORTED_MODULE_2__["createFilterOptions"]; });

/* harmony import */ var _AvatarGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AvatarGroup */ "./node_modules/@material-ui/lab/esm/AvatarGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvatarGroup", function() { return _AvatarGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pagination */ "./node_modules/@material-ui/lab/esm/Pagination/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePagination", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_4__["usePagination"]; });

/* harmony import */ var _PaginationItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PaginationItem */ "./node_modules/@material-ui/lab/esm/PaginationItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationItem", function() { return _PaginationItem__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return _Rating__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return _Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _SpeedDial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SpeedDial */ "./node_modules/@material-ui/lab/esm/SpeedDial/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeedDial", function() { return _SpeedDial__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _SpeedDialAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SpeedDialAction */ "./node_modules/@material-ui/lab/esm/SpeedDialAction/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeedDialAction", function() { return _SpeedDialAction__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _SpeedDialIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SpeedDialIcon */ "./node_modules/@material-ui/lab/esm/SpeedDialIcon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeedDialIcon", function() { return _SpeedDialIcon__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@material-ui/lab/esm/TabContext/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabContext", function() { return _TabContext__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTabContext", function() { return _TabContext__WEBPACK_IMPORTED_MODULE_11__["useTabContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPanelId", function() { return _TabContext__WEBPACK_IMPORTED_MODULE_11__["getPanelId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTabId", function() { return _TabContext__WEBPACK_IMPORTED_MODULE_11__["getTabId"]; });

/* harmony import */ var _TabList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TabList */ "./node_modules/@material-ui/lab/esm/TabList/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabList", function() { return _TabList__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TabPanel */ "./node_modules/@material-ui/lab/esm/TabPanel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return _TabPanel__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Timeline */ "./node_modules/@material-ui/lab/esm/Timeline/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return _Timeline__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _TimelineConnector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TimelineConnector */ "./node_modules/@material-ui/lab/esm/TimelineConnector/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineConnector", function() { return _TimelineConnector__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _TimelineContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TimelineContent */ "./node_modules/@material-ui/lab/esm/TimelineContent/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineContent", function() { return _TimelineContent__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _TimelineDot__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TimelineDot */ "./node_modules/@material-ui/lab/esm/TimelineDot/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineDot", function() { return _TimelineDot__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _TimelineItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./TimelineItem */ "./node_modules/@material-ui/lab/esm/TimelineItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineItem", function() { return _TimelineItem__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TimelineOppositeContent */ "./node_modules/@material-ui/lab/esm/TimelineOppositeContent/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineOppositeContent", function() { return _TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _TimelineSeparator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./TimelineSeparator */ "./node_modules/@material-ui/lab/esm/TimelineSeparator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineSeparator", function() { return _TimelineSeparator__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _ToggleButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ToggleButton */ "./node_modules/@material-ui/lab/esm/ToggleButton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return _ToggleButton__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ToggleButtonGroup */ "./node_modules/@material-ui/lab/esm/ToggleButtonGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonGroup", function() { return _ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _TreeItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./TreeItem */ "./node_modules/@material-ui/lab/esm/TreeItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeItem", function() { return _TreeItem__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _TreeView__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./TreeView */ "./node_modules/@material-ui/lab/esm/TreeView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeView", function() { return _TreeView__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _useAutocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./useAutocomplete */ "./node_modules/@material-ui/lab/esm/useAutocomplete/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAutocomplete", function() { return _useAutocomplete__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/** @license Material-UI v4.0.0-alpha.56
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable import/export */

















































 // createFilterOptions is exported from Autocomplete



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Add.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/Add.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ArrowDropDown.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/ArrowDropDown.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/FirstPage.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/FirstPage.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), 'FirstPage'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/LastPage.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/LastPage.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), 'LastPage'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/NavigateBefore.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/NavigateBefore.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'NavigateBefore'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/NavigateNext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/NavigateNext.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Star.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/Star.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), 'Star'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/useAutocomplete/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/useAutocomplete/index.js ***!
  \********************************************************************/
/*! exports provided: default, createFilterOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useAutocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAutocomplete */ "./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _useAutocomplete__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilterOptions", function() { return _useAutocomplete__WEBPACK_IMPORTED_MODULE_0__["createFilterOptions"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js ***!
  \******************************************************************************/
/*! exports provided: createFilterOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterOptions", function() { return createFilterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAutocomplete; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");




/* eslint-disable no-constant-condition */

 // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
// Give up on IE 11 support for this feature

function stripDiacritics(string) {
  return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
}

function createFilterOptions() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$ignoreAccents = config.ignoreAccents,
      ignoreAccents = _config$ignoreAccents === void 0 ? true : _config$ignoreAccents,
      _config$ignoreCase = config.ignoreCase,
      ignoreCase = _config$ignoreCase === void 0 ? true : _config$ignoreCase,
      limit = config.limit,
      _config$matchFrom = config.matchFrom,
      matchFrom = _config$matchFrom === void 0 ? 'any' : _config$matchFrom,
      stringify = config.stringify,
      _config$trim = config.trim,
      trim = _config$trim === void 0 ? false : _config$trim;
  return function (options, _ref) {
    var inputValue = _ref.inputValue,
        getOptionLabel = _ref.getOptionLabel;
    var input = trim ? inputValue.trim() : inputValue;

    if (ignoreCase) {
      input = input.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    var filteredOptions = options.filter(function (option) {
      var candidate = (stringify || getOptionLabel)(option);

      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }

      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }

      return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
  };
} // To replace with .findIndex() once we stop IE 11 support.

function findIndex(array, comp) {
  for (var i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }

  return -1;
}

var defaultFilterOptions = createFilterOptions(); // Number of options to jump in list box when pageup and pagedown keys are used.

var pageSize = 5;
function useAutocomplete(props) {
  var _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? false : _props$autoComplete,
      _props$autoHighlight = props.autoHighlight,
      autoHighlight = _props$autoHighlight === void 0 ? false : _props$autoHighlight,
      _props$autoSelect = props.autoSelect,
      autoSelect = _props$autoSelect === void 0 ? false : _props$autoSelect,
      _props$blurOnSelect = props.blurOnSelect,
      blurOnSelect = _props$blurOnSelect === void 0 ? false : _props$blurOnSelect,
      _props$clearOnBlur = props.clearOnBlur,
      clearOnBlur = _props$clearOnBlur === void 0 ? !props.freeSolo : _props$clearOnBlur,
      _props$clearOnEscape = props.clearOnEscape,
      clearOnEscape = _props$clearOnEscape === void 0 ? false : _props$clearOnEscape,
      _props$componentName = props.componentName,
      componentName = _props$componentName === void 0 ? 'useAutocomplete' : _props$componentName,
      _props$debug = props.debug,
      debug = _props$debug === void 0 ? false : _props$debug,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? props.multiple ? [] : null : _props$defaultValue,
      _props$disableClearab = props.disableClearable,
      disableClearable = _props$disableClearab === void 0 ? false : _props$disableClearab,
      _props$disableCloseOn = props.disableCloseOnSelect,
      disableCloseOnSelect = _props$disableCloseOn === void 0 ? false : _props$disableCloseOn,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      _props$filterOptions = props.filterOptions,
      filterOptions = _props$filterOptions === void 0 ? defaultFilterOptions : _props$filterOptions,
      _props$filterSelected = props.filterSelectedOptions,
      filterSelectedOptions = _props$filterSelected === void 0 ? false : _props$filterSelected,
      _props$freeSolo = props.freeSolo,
      freeSolo = _props$freeSolo === void 0 ? false : _props$freeSolo,
      getOptionDisabled = props.getOptionDisabled,
      _props$getOptionLabel = props.getOptionLabel,
      getOptionLabelProp = _props$getOptionLabel === void 0 ? function (option) {
    return option;
  } : _props$getOptionLabel,
      _props$getOptionSelec = props.getOptionSelected,
      getOptionSelected = _props$getOptionSelec === void 0 ? function (option, value) {
    return option === value;
  } : _props$getOptionSelec,
      groupBy = props.groupBy,
      _props$handleHomeEndK = props.handleHomeEndKeys,
      handleHomeEndKeys = _props$handleHomeEndK === void 0 ? !props.freeSolo : _props$handleHomeEndK,
      idProp = props.id,
      _props$includeInputIn = props.includeInputInList,
      includeInputInList = _props$includeInputIn === void 0 ? false : _props$includeInputIn,
      inputValueProp = props.inputValue,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      onChange = props.onChange,
      onClose = props.onClose,
      onHighlightChange = props.onHighlightChange,
      onInputChange = props.onInputChange,
      onOpen = props.onOpen,
      openProp = props.open,
      _props$openOnFocus = props.openOnFocus,
      openOnFocus = _props$openOnFocus === void 0 ? false : _props$openOnFocus,
      options = props.options,
      _props$selectOnFocus = props.selectOnFocus,
      selectOnFocus = _props$selectOnFocus === void 0 ? !props.freeSolo : _props$selectOnFocus,
      valueProp = props.value;
  var id = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["unstable_useId"])(idProp);
  var getOptionLabel = getOptionLabelProp;

  if (true) {
    getOptionLabel = function getOptionLabel(option) {
      var optionLabel = getOptionLabelProp(option);

      if (typeof optionLabel !== 'string') {
        var erroneousReturn = optionLabel === undefined ? 'undefined' : "".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(optionLabel), " (").concat(optionLabel, ")");
        console.error("Material-UI: The `getOptionLabel` method of ".concat(componentName, " returned ").concat(erroneousReturn, " instead of a string for ").concat(JSON.stringify(option), "."));
      }

      return optionLabel;
    };
  }

  var ignoreFocus = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](false);
  var firstFocus = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](true);
  var inputRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var listboxRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_3__["useState"](-1),
      focusedTag = _React$useState2[0],
      setFocusedTag = _React$useState2[1];

  var defaultHighlighted = autoHighlight ? 0 : -1;
  var highlightedIndexRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](defaultHighlighted);

  var _useControlled = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useControlled"])({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var _useControlled3 = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useControlled"])({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue'
  }),
      _useControlled4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled3, 2),
      inputValue = _useControlled4[0],
      setInputValue = _useControlled4[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var resetInputValue = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useEventCallback"])(function (event, newValue) {
    var newInputValue;

    if (multiple) {
      newInputValue = '';
    } else if (newValue == null) {
      newInputValue = '';
    } else {
      var optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
    }

    if (inputValue === newInputValue) {
      return;
    }

    setInputValue(newInputValue);

    if (onInputChange) {
      onInputChange(event, newInputValue, 'reset');
    }
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    resetInputValue(null, value);
  }, [value, resetInputValue]);

  var _useControlled5 = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useControlled"])({
    controlled: openProp,
    default: false,
    name: componentName,
    state: 'open'
  }),
      _useControlled6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled5, 2),
      open = _useControlled6[0],
      setOpenState = _useControlled6[1];

  var inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  var popupOpen = open;
  var filteredOptions = popupOpen ? filterOptions(options.filter(function (option) {
    if (filterSelectedOptions && (multiple ? value : [value]).some(function (value2) {
      return value2 !== null && getOptionSelected(option, value2);
    })) {
      return false;
    }

    return true;
  }), // we use the empty string to manipulate `filterOptions` to not filter any options
  // i.e. the filter predicate always returns true
  {
    inputValue: inputValueIsSelectedValue ? '' : inputValue,
    getOptionLabel: getOptionLabel
  }) : [];

  if (true) {
    if (value !== null && !freeSolo && options.length > 0) {
      var missingValue = (multiple ? value : [value]).filter(function (value2) {
        return !options.some(function (option) {
          return getOptionSelected(option, value2);
        });
      });

      if (missingValue.length > 0) {
        console.warn(["Material-UI: The value provided to ".concat(componentName, " is invalid."), "None of the options match with `".concat(missingValue.length > 1 ? JSON.stringify(missingValue) : JSON.stringify(missingValue[0]), "`."), 'You can use the `getOptionSelected` prop to customize the equality test.'].join('\n'));
      }
    }
  }

  var focusTag = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useEventCallback"])(function (tagToFocus) {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector("[data-tag-index=\"".concat(tagToFocus, "\"]")).focus();
    }
  }); // Ensure the focusedTag is never inconsistent

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);

  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === filteredOptions.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = listboxRef.current.querySelector("[data-option-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      var nextFocusDisabled = disabledItemsFocusable ? false : option && (option.disabled || option.getAttribute('aria-disabled') === 'true');

      if (option && !option.hasAttribute('tabindex') || nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var setHighlightedIndex = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useEventCallback"])(function (_ref2) {
    var event = _ref2.event,
        index = _ref2.index,
        _ref2$reason = _ref2.reason,
        reason = _ref2$reason === void 0 ? 'auto' : _ref2$reason;
    highlightedIndexRef.current = index; // does the index exist?

    if (index === -1) {
      inputRef.current.removeAttribute('aria-activedescendant');
    } else {
      inputRef.current.setAttribute('aria-activedescendant', "".concat(id, "-option-").concat(index));
    }

    if (onHighlightChange) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }

    if (!listboxRef.current) {
      return;
    }

    var prev = listboxRef.current.querySelector('[data-focus]');

    if (prev) {
      prev.removeAttribute('data-focus');
    }

    var listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]'); // "No results"

    if (!listboxNode) {
      return;
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }

    var option = listboxRef.current.querySelector("[data-option-index=\"".concat(index, "\"]"));

    if (!option) {
      return;
    }

    option.setAttribute('data-focus', 'true'); // Scroll active descendant into view.
    // Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
    //
    // Consider this API instead once it has a better browser support:
    // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });

    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
      var element = option;
      var scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      var elementBottom = element.offsetTop + element.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  var changeHighlightedIndex = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useEventCallback"])(function (_ref3) {
    var event = _ref3.event,
        diff = _ref3.diff,
        _ref3$direction = _ref3.direction,
        direction = _ref3$direction === void 0 ? 'next' : _ref3$direction,
        _ref3$reason = _ref3.reason,
        reason = _ref3$reason === void 0 ? 'auto' : _ref3$reason;

    if (!popupOpen) {
      return;
    }

    var getNextIndex = function getNextIndex() {
      var maxIndex = filteredOptions.length - 1;

      if (diff === 'reset') {
        return defaultHighlighted;
      }

      if (diff === 'start') {
        return 0;
      }

      if (diff === 'end') {
        return maxIndex;
      }

      var newIndex = highlightedIndexRef.current + diff;

      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }

        return maxIndex;
      }

      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }

        return 0;
      }

      return newIndex;
    };

    var nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason: reason,
      event: event
    }); // Sync the content of the input with the highlighted option.

    if (autoComplete && diff !== 'reset') {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        var option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option; // The portion of the selected suggestion that has not been typed by the user,
        // a completion string, appears inline after the input cursor in the textbox.

        var index = option.toLowerCase().indexOf(inputValue.toLowerCase());

        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  var syncHighlightedIndex = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function () {
    if (!popupOpen) {
      return;
    }

    var valueItem = multiple ? value[0] : value; // The popup is empty, reset

    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: 'reset'
      });
      return;
    }

    if (!listboxRef.current) {
      return;
    } // Synchronize the value with the highlighted index


    if (!filterSelectedOptions && valueItem != null) {
      var currentOption = filteredOptions[highlightedIndexRef.current]; // Keep the current highlighted index if possible

      if (multiple && currentOption && findIndex(value, function (val) {
        return getOptionSelected(currentOption, val);
      }) !== -1) {
        return;
      }

      var itemIndex = findIndex(filteredOptions, function (optionItem) {
        return getOptionSelected(optionItem, valueItem);
      });

      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: 'reset'
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }

      return;
    } // Prevent the highlighted index to leak outside the boundaries.


    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    } // Restore the focus to the previous index.


    setHighlightedIndex({
      index: highlightedIndexRef.current
    }); // Ignore filteredOptions (and options, getOptionSelected, getOptionLabel) not to break the scroll position
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [// Only sync the highlighted index when the option switch between empty and not
  // eslint-disable-next-line react-hooks/exhaustive-deps
  filteredOptions.length === 0, // Don't sync the highlighted index with the value when multiple
  // eslint-disable-next-line react-hooks/exhaustive-deps
  multiple ? false : value, filterSelectedOptions, changeHighlightedIndex, setHighlightedIndex, popupOpen, inputValue, multiple]);
  var handleListboxRef = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useEventCallback"])(function (node) {
    Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["setRef"])(listboxRef, node);

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  var handleOpen = function handleOpen(event) {
    if (open) {
      return;
    }

    setOpenState(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  var handleClose = function handleClose(event, reason) {
    if (!open) {
      return;
    }

    setOpenState(false);

    if (onClose) {
      onClose(event, reason);
    }
  };

  var handleValue = function handleValue(event, newValue, reason, details) {
    if (value === newValue) {
      return;
    }

    if (onChange) {
      onChange(event, newValue, reason, details);
    }

    setValue(newValue);
  };

  var isTouch = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](false);

  var selectNewValue = function selectNewValue(event, option) {
    var reasonProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'select-option';
    var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'options';
    var reason = reasonProp;
    var newValue = option;

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];

      if (true) {
        var matches = newValue.filter(function (val) {
          return getOptionSelected(option, val);
        });

        if (matches.length > 1) {
          console.error(["Material-UI: The `getOptionSelected` method of ".concat(componentName, " do not handle the arguments correctly."), "The component expects a single value to match a given option but found ".concat(matches.length, " matches.")].join('\n'));
        }
      }

      var itemIndex = findIndex(newValue, function (valueItem) {
        return getOptionSelected(option, valueItem);
      });

      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== 'freeSolo') {
        newValue.splice(itemIndex, 1);
        reason = 'remove-option';
      }
    }

    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option: option
    });

    if (!disableCloseOnSelect) {
      handleClose(event, reason);
    }

    if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
      inputRef.current.blur();
    }
  };

  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = anchorEl.querySelector("[data-tag-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      if (option && (!option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true')) {
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var handleFocusTag = function handleFocusTag(event, direction) {
    if (!multiple) {
      return;
    }

    handleClose(event, 'toggleInput');
    var nextTag = focusedTag;

    if (focusedTag === -1) {
      if (inputValue === '' && direction === 'previous') {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === 'next' ? 1 : -1;

      if (nextTag < 0) {
        nextTag = 0;
      }

      if (nextTag === value.length) {
        nextTag = -1;
      }
    }

    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };

  var handleClear = function handleClear(event) {
    ignoreFocus.current = true;
    setInputValue('');

    if (onInputChange) {
      onInputChange(event, '', 'clear');
    }

    handleValue(event, multiple ? [] : null, 'clear');
  };

  var handleKeyDown = function handleKeyDown(other) {
    return function (event) {
      if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
        setFocusedTag(-1);
        focusTag(-1);
      }

      switch (event.key) {
        case 'Home':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'start',
              direction: 'next',
              reason: 'keyboard',
              event: event
            });
          }

          break;

        case 'End':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'end',
              direction: 'previous',
              reason: 'keyboard',
              event: event
            });
          }

          break;

        case 'PageUp':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: 'previous',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'PageDown':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: 'next',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowDown':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: 'next',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowUp':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: 'previous',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowLeft':
          handleFocusTag(event, 'previous');
          break;

        case 'ArrowRight':
          handleFocusTag(event, 'next');
          break;

        case 'Enter':
          // Wait until IME is settled.
          if (event.which === 229) {
            break;
          }

          if (highlightedIndexRef.current !== -1 && popupOpen) {
            var option = filteredOptions[highlightedIndexRef.current];
            var disabled = getOptionDisabled ? getOptionDisabled(option) : false; // We don't want to validate the form.

            event.preventDefault();

            if (disabled) {
              return;
            }

            selectNewValue(event, option, 'select-option'); // Move the selection to the end.

            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
            if (multiple) {
              // Allow people to add new values before they submit the form.
              event.preventDefault();
            }

            selectNewValue(event, inputValue, 'create-option', 'freeSolo');
          }

          break;

        case 'Escape':
          if (popupOpen) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClose(event, 'escape');
          } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClear(event);
          }

          break;

        case 'Backspace':
          if (multiple && inputValue === '' && value.length > 0) {
            var index = focusedTag === -1 ? value.length - 1 : focusedTag;
            var newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'remove-option', {
              option: value[index]
            });
          }

          break;

        default:
      }

      if (other.onKeyDown) {
        other.onKeyDown(event);
      }
    };
  };

  var handleFocus = function handleFocus(event) {
    setFocused(true);

    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    // Ignore the event when using the scrollbar with IE 11
    if (listboxRef.current !== null && document.activeElement === listboxRef.current.parentElement) {
      inputRef.current.focus();
      return;
    }

    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;

    if (debug && inputValue !== '') {
      return;
    }

    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
    } else if (autoSelect && freeSolo && inputValue !== '') {
      selectNewValue(event, inputValue, 'blur', 'freeSolo');
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }

    handleClose(event, 'blur');
  };

  var handleInputChange = function handleInputChange(event) {
    var newValue = event.target.value;

    if (inputValue !== newValue) {
      setInputValue(newValue);

      if (onInputChange) {
        onInputChange(event, newValue, 'input');
      }
    }

    if (newValue === '') {
      if (!disableClearable && !multiple) {
        handleValue(event, null, 'clear');
      }
    } else {
      handleOpen(event);
    }
  };

  var handleOptionMouseOver = function handleOptionMouseOver(event) {
    setHighlightedIndex({
      event: event,
      index: Number(event.currentTarget.getAttribute('data-option-index')),
      reason: 'mouse'
    });
  };

  var handleOptionTouchStart = function handleOptionTouchStart() {
    isTouch.current = true;
  };

  var handleOptionClick = function handleOptionClick(event) {
    var index = Number(event.currentTarget.getAttribute('data-option-index'));
    selectNewValue(event, filteredOptions[index], 'select-option');
    isTouch.current = false;
  };

  var handleTagDelete = function handleTagDelete(index) {
    return function (event) {
      var newValue = value.slice();
      newValue.splice(index, 1);
      handleValue(event, newValue, 'remove-option', {
        option: value[index]
      });
    };
  };

  var handlePopupIndicator = function handlePopupIndicator(event) {
    if (open) {
      handleClose(event, 'toggleInput');
    } else {
      handleOpen(event);
    }
  }; // Prevent input blur when interacting with the combobox


  var handleMouseDown = function handleMouseDown(event) {
    if (event.target.getAttribute('id') !== id) {
      event.preventDefault();
    }
  }; // Focus the input when interacting with the combobox


  var handleClick = function handleClick() {
    inputRef.current.focus();

    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }

    firstFocus.current = false;
  };

  var handleInputMouseDown = function handleInputMouseDown(event) {
    if (inputValue === '' || !open) {
      handlePopupIndicator(event);
    }
  };

  var dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  var groupedOptions = filteredOptions;

  if (groupBy) {
    // used to keep track of key and indexes in the result array
    var indexBy = new Map();
    var warn = false;
    groupedOptions = filteredOptions.reduce(function (acc, option, index) {
      var group = groupBy(option);

      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (true) {
          if (indexBy.get(group) && !warn) {
            console.warn("Material-UI: The options provided combined with the `groupBy` method of ".concat(componentName, " returns duplicated headers."), 'You can solve the issue by sorting the options with the output of `groupBy`.');
            warn = true;
          }

          indexBy.set(group, true);
        }

        acc.push({
          key: index,
          index: index,
          group: group,
          options: [option]
        });
      }

      return acc;
    }, []);
  }

  return {
    getRootProps: function getRootProps() {
      var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        'aria-owns': popupOpen ? "".concat(id, "-popup") : null,
        role: 'combobox',
        'aria-expanded': popupOpen
      }, other, {
        onKeyDown: handleKeyDown(other),
        onMouseDown: handleMouseDown,
        onClick: handleClick
      });
    },
    getInputLabelProps: function getInputLabelProps() {
      return {
        id: "".concat(id, "-label"),
        htmlFor: id
      };
    },
    getInputProps: function getInputProps() {
      return {
        id: id,
        value: inputValue,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onChange: handleInputChange,
        onMouseDown: handleInputMouseDown,
        // if open then this is handled imperativeley so don't let react override
        // only have an opinion about this when closed
        'aria-activedescendant': popupOpen ? '' : null,
        'aria-autocomplete': autoComplete ? 'both' : 'list',
        'aria-controls': popupOpen ? "".concat(id, "-popup") : null,
        // Disable browser's suggestion that might overlap with the popup.
        // Handle autocomplete but not autofill.
        autoComplete: 'off',
        ref: inputRef,
        autoCapitalize: 'none',
        spellCheck: 'false'
      };
    },
    getClearProps: function getClearProps() {
      return {
        tabIndex: -1,
        onClick: handleClear
      };
    },
    getPopupIndicatorProps: function getPopupIndicatorProps() {
      return {
        tabIndex: -1,
        onClick: handlePopupIndicator
      };
    },
    getTagProps: function getTagProps(_ref4) {
      var index = _ref4.index;
      return {
        key: index,
        'data-tag-index': index,
        tabIndex: -1,
        onDelete: handleTagDelete(index)
      };
    },
    getListboxProps: function getListboxProps() {
      return {
        role: 'listbox',
        id: "".concat(id, "-popup"),
        'aria-labelledby': "".concat(id, "-label"),
        ref: handleListboxRef,
        onMouseDown: function onMouseDown(event) {
          // Prevent blur
          event.preventDefault();
        }
      };
    },
    getOptionProps: function getOptionProps(_ref5) {
      var index = _ref5.index,
          option = _ref5.option;
      var selected = (multiple ? value : [value]).some(function (value2) {
        return value2 != null && getOptionSelected(option, value2);
      });
      var disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: index,
        tabIndex: -1,
        role: 'option',
        id: "".concat(id, "-option-").concat(index),
        onMouseOver: handleOptionMouseOver,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected
      };
    },
    id: id,
    inputValue: inputValue,
    value: value,
    dirty: dirty,
    popupOpen: popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl,
    focusedTag: focusedTag,
    groupedOptions: groupedOptions
  };
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFyYWN0ZXJzQ29udGFpbmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vQWxlcnQvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9BbGVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL0FsZXJ0VGl0bGUvQWxlcnRUaXRsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL0FsZXJ0VGl0bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9BdXRvY29tcGxldGUvQXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vQXV0b2NvbXBsZXRlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vQXZhdGFyR3JvdXAvQXZhdGFyR3JvdXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9BdmF0YXJHcm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1BhZ2luYXRpb24vUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1BhZ2luYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9QYWdpbmF0aW9uL3VzZVBhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9QYWdpbmF0aW9uSXRlbS9QYWdpbmF0aW9uSXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1BhZ2luYXRpb25JdGVtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vUmF0aW5nL1JhdGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1JhdGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1NrZWxldG9uL1NrZWxldG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vU2tlbGV0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9TcGVlZERpYWwvU3BlZWREaWFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vU3BlZWREaWFsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vU3BlZWREaWFsQWN0aW9uL1NwZWVkRGlhbEFjdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1NwZWVkRGlhbEFjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1NwZWVkRGlhbEljb24vU3BlZWREaWFsSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1NwZWVkRGlhbEljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9UYWJDb250ZXh0L1RhYkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9UYWJDb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVGFiTGlzdC9UYWJMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVGFiTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1RhYlBhbmVsL1RhYlBhbmVsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVGFiUGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9UaW1lbGluZS9UaW1lbGluZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1RpbWVsaW5lL1RpbWVsaW5lQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1RpbWVsaW5lL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVGltZWxpbmVDb25uZWN0b3IvVGltZWxpbmVDb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9UaW1lbGluZUNvbm5lY3Rvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1RpbWVsaW5lQ29udGVudC9UaW1lbGluZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9UaW1lbGluZUNvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9UaW1lbGluZURvdC9UaW1lbGluZURvdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1RpbWVsaW5lRG90L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVGltZWxpbmVJdGVtL1RpbWVsaW5lSXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1RpbWVsaW5lSXRlbS9UaW1lbGluZUl0ZW1Db250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVGltZWxpbmVJdGVtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQvVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9UaW1lbGluZU9wcG9zaXRlQ29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1RpbWVsaW5lU2VwYXJhdG9yL1RpbWVsaW5lU2VwYXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVGltZWxpbmVTZXBhcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9Ub2dnbGVCdXR0b24vVG9nZ2xlQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVG9nZ2xlQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVG9nZ2xlQnV0dG9uR3JvdXAvVG9nZ2xlQnV0dG9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9Ub2dnbGVCdXR0b25Hcm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1RvZ2dsZUJ1dHRvbkdyb3VwL2lzVmFsdWVTZWxlY3RlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1RyZWVJdGVtL1RyZWVJdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVHJlZUl0ZW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9UcmVlVmlldy9UcmVlVmlldy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1RyZWVWaWV3L1RyZWVWaWV3Q29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL1RyZWVWaWV3L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvQWRkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vaW50ZXJuYWwvc3ZnLWljb25zL0Fycm93RHJvcERvd24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvQ2xvc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvRXJyb3JPdXRsaW5lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vaW50ZXJuYWwvc3ZnLWljb25zL0ZpcnN0UGFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL2ludGVybmFsL3N2Zy1pY29ucy9JbmZvT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvTGFzdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvTmF2aWdhdGVCZWZvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvTmF2aWdhdGVOZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vaW50ZXJuYWwvc3ZnLWljb25zL1JlcG9ydFByb2JsZW1PdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL2ludGVybmFsL3N2Zy1pY29ucy9TdGFyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vaW50ZXJuYWwvc3ZnLWljb25zL1N1Y2Nlc3NPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL3VzZUF1dG9jb21wbGV0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL3VzZUF1dG9jb21wbGV0ZS91c2VBdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiY29udGFpbmVyU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJDaGFyYWN0ZXJzQ29udGFpbmVyIiwicHJvcHMiLCJzdHlsZXMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxzRUFBVSxDQUFDO0FBQ2pDQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFLENBRFI7QUFFRkMsbUJBQWUsRUFBRSxTQUZmO0FBR0ZDLGdCQUFZLEVBQUUsTUFIWjtBQUlGQyxXQUFPLEVBQUU7QUFKUCxLQUtELDBCQUxDLEVBSzRCLEVBTDVCO0FBRDZCLENBQUQsQ0FBbEM7O0FBVUEsU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDLE1BQU1DLE1BQU0sR0FBR1QsZUFBZSxFQUE5QjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsc0RBQUQ7QUFDRSxlQUFTLE1BRFg7QUFFRSxhQUFPLEVBQUUsQ0FGWDtBQUdFLGtCQUFZLEVBQUMsUUFIZjtBQUlFLGFBQU8sRUFBQyxRQUpWO0FBS0UsZUFBUyxFQUFFUyxNQUFNLENBQUNQLElBTHBCO0FBQUEsZ0JBT0dNLEtBQUssQ0FBQ0U7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYs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QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsK0RBQStELEtBQUs7QUFDcEU7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxXQUFXLGtGQUFRLEdBQUc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRSx5RkFBZTtBQUN0QjtBQUNBLEtBQUssR0FBRyx5RkFBZTtBQUN2QjtBQUNBLEtBQUssR0FBRyx5RkFBZTtBQUN2QjtBQUNBLEtBQUssR0FBRyx5RkFBZTtBQUN2QjtBQUNB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O0FBQ0E7QUFDQSxhQUFhLGtGQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGYxMmQ2NDVmZjc3ZGVmMTNlN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWInO1xyXG5cclxuY29uc3QgY29udGFpbmVyU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTYxYTFkJyxcclxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgcGFkZGluZzogJzEuNWVtJyxcclxuICAgIFsnQG1lZGlhIChtaW4td2lkdGg6NzgwcHgpJ106IHt9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gQ2hhcmFjdGVyc0NvbnRhaW5lcihwcm9wcykge1xyXG4gIGNvbnN0IHN0eWxlcyA9IGNvbnRhaW5lclN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgYWxpZ25Db250ZW50PSdjZW50ZXInXHJcbiAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9XHJcbiAgICAgID5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPFBhZ2luYXRpb24gY291bnQ9ezEwfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyc0NvbnRhaW5lcjtcclxuIiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgbGlnaHRlbiwgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgU3VjY2Vzc091dGxpbmVkSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvU3VjY2Vzc091dGxpbmVkJztcbmltcG9ydCBSZXBvcnRQcm9ibGVtT3V0bGluZWRJY29uIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9SZXBvcnRQcm9ibGVtT3V0bGluZWQnO1xuaW1wb3J0IEVycm9yT3V0bGluZUljb24gZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0Vycm9yT3V0bGluZSc7XG5pbXBvcnQgSW5mb091dGxpbmVkSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvSW5mb091dGxpbmVkJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0Nsb3NlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBnZXRDb2xvciA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IGRhcmtlbiA6IGxpZ2h0ZW47XG4gIHZhciBnZXRCYWNrZ3JvdW5kQ29sb3IgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBsaWdodGVuIDogZGFya2VuO1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDogX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTIsIHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgcGFkZGluZzogJzZweCAxNnB4J1xuICAgIH0pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInN0YW5kYXJkXCJgIGFuZCBgY29sb3I9XCJzdWNjZXNzXCJgLiAqL1xuICAgIHN0YW5kYXJkU3VjY2Vzczoge1xuICAgICAgY29sb3I6IGdldENvbG9yKHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLCAwLjYpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBnZXRCYWNrZ3JvdW5kQ29sb3IodGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sIDAuOSksXG4gICAgICAnJiAkaWNvbic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzdGFuZGFyZFwiYCBhbmQgYGNvbG9yPVwiaW5mb1wiYC4gKi9cbiAgICBzdGFuZGFyZEluZm86IHtcbiAgICAgIGNvbG9yOiBnZXRDb2xvcih0aGVtZS5wYWxldHRlLmluZm8ubWFpbiwgMC42KSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ2V0QmFja2dyb3VuZENvbG9yKHRoZW1lLnBhbGV0dGUuaW5mby5tYWluLCAwLjkpLFxuICAgICAgJyYgJGljb24nOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmluZm8ubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwic3RhbmRhcmRcImAgYW5kIGBjb2xvcj1cIndhcm5pbmdcImAuICovXG4gICAgc3RhbmRhcmRXYXJuaW5nOiB7XG4gICAgICBjb2xvcjogZ2V0Q29sb3IodGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sIDAuNiksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdldEJhY2tncm91bmRDb2xvcih0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbiwgMC45KSxcbiAgICAgICcmICRpY29uJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInN0YW5kYXJkXCJgIGFuZCBgY29sb3I9XCJlcnJvclwiYC4gKi9cbiAgICBzdGFuZGFyZEVycm9yOiB7XG4gICAgICBjb2xvcjogZ2V0Q29sb3IodGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLCAwLjYpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBnZXRCYWNrZ3JvdW5kQ29sb3IodGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLCAwLjkpLFxuICAgICAgJyYgJGljb24nOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgY29sb3I9XCJzdWNjZXNzXCJgLiAqL1xuICAgIG91dGxpbmVkU3VjY2Vzczoge1xuICAgICAgY29sb3I6IGdldENvbG9yKHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLCAwLjYpLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4pLFxuICAgICAgJyYgJGljb24nOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAgYW5kIGBjb2xvcj1cImluZm9cImAuICovXG4gICAgb3V0bGluZWRJbmZvOiB7XG4gICAgICBjb2xvcjogZ2V0Q29sb3IodGhlbWUucGFsZXR0ZS5pbmZvLm1haW4sIDAuNiksXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmluZm8ubWFpbiksXG4gICAgICAnJiAkaWNvbic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuaW5mby5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYCBhbmQgYGNvbG9yPVwid2FybmluZ1wiYC4gKi9cbiAgICBvdXRsaW5lZFdhcm5pbmc6IHtcbiAgICAgIGNvbG9yOiBnZXRDb2xvcih0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbiwgMC42KSxcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluKSxcbiAgICAgICcmICRpY29uJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgY29sb3I9XCJlcnJvclwiYC4gKi9cbiAgICBvdXRsaW5lZEVycm9yOiB7XG4gICAgICBjb2xvcjogZ2V0Q29sb3IodGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLCAwLjYpLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5lcnJvci5tYWluKSxcbiAgICAgICcmICRpY29uJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAgYW5kIGBjb2xvcj1cInN1Y2Nlc3NcImAuICovXG4gICAgZmlsbGVkU3VjY2Vzczoge1xuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImZpbGxlZFwiYCBhbmQgYGNvbG9yPVwiaW5mb1wiYC4gKi9cbiAgICBmaWxsZWRJbmZvOiB7XG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmluZm8ubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiZmlsbGVkXCJgIGFuZCBgY29sb3I9XCJ3YXJuaW5nXCJgLiAqL1xuICAgIGZpbGxlZFdhcm5pbmc6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAgYW5kIGBjb2xvcj1cImVycm9yXCJgLiAqL1xuICAgIGZpbGxlZEVycm9yOiB7XG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gd3JhcHBlciBlbGVtZW50LiAqL1xuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAxMixcbiAgICAgIHBhZGRpbmc6ICc3cHggMCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmb250U2l6ZTogMjIsXG4gICAgICBvcGFjaXR5OiAwLjlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIG1lc3NhZ2Ugd3JhcHBlciBlbGVtZW50LiAqL1xuICAgIG1lc3NhZ2U6IHtcbiAgICAgIHBhZGRpbmc6ICc4cHggMCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGFjdGlvbiB3cmFwcGVyIGVsZW1lbnQgaWYgYGFjdGlvbmAgaXMgcHJvdmlkZWQuICovXG4gICAgYWN0aW9uOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiAxNixcbiAgICAgIG1hcmdpblJpZ2h0OiAtOFxuICAgIH1cbiAgfTtcbn07XG52YXIgZGVmYXVsdEljb25NYXBwaW5nID0ge1xuICBzdWNjZXNzOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdWNjZXNzT3V0bGluZWRJY29uLCB7XG4gICAgZm9udFNpemU6IFwiaW5oZXJpdFwiXG4gIH0pLFxuICB3YXJuaW5nOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXBvcnRQcm9ibGVtT3V0bGluZWRJY29uLCB7XG4gICAgZm9udFNpemU6IFwiaW5oZXJpdFwiXG4gIH0pLFxuICBlcnJvcjogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRXJyb3JPdXRsaW5lSWNvbiwge1xuICAgIGZvbnRTaXplOiBcImluaGVyaXRcIlxuICB9KSxcbiAgaW5mbzogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5mb091dGxpbmVkSWNvbiwge1xuICAgIGZvbnRTaXplOiBcImluaGVyaXRcIlxuICB9KVxufTtcblxudmFyIF9yZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDbG9zZUljb24sIHtcbiAgZm9udFNpemU6IFwic21hbGxcIlxufSk7XG5cbnZhciBBbGVydCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEFsZXJ0KHByb3BzLCByZWYpIHtcbiAgdmFyIGFjdGlvbiA9IHByb3BzLmFjdGlvbixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjbG9zZVRleHQgPSBwcm9wcy5jbG9zZVRleHQsXG4gICAgICBjbG9zZVRleHQgPSBfcHJvcHMkY2xvc2VUZXh0ID09PSB2b2lkIDAgPyAnQ2xvc2UnIDogX3Byb3BzJGNsb3NlVGV4dCxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIF9wcm9wcyRpY29uTWFwcGluZyA9IHByb3BzLmljb25NYXBwaW5nLFxuICAgICAgaWNvbk1hcHBpbmcgPSBfcHJvcHMkaWNvbk1hcHBpbmcgPT09IHZvaWQgMCA/IGRlZmF1bHRJY29uTWFwcGluZyA6IF9wcm9wcyRpY29uTWFwcGluZyxcbiAgICAgIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLFxuICAgICAgX3Byb3BzJHJvbGUgPSBwcm9wcy5yb2xlLFxuICAgICAgcm9sZSA9IF9wcm9wcyRyb2xlID09PSB2b2lkIDAgPyAnYWxlcnQnIDogX3Byb3BzJHJvbGUsXG4gICAgICBfcHJvcHMkc2V2ZXJpdHkgPSBwcm9wcy5zZXZlcml0eSxcbiAgICAgIHNldmVyaXR5ID0gX3Byb3BzJHNldmVyaXR5ID09PSB2b2lkIDAgPyAnc3VjY2VzcycgOiBfcHJvcHMkc2V2ZXJpdHksXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzdGFuZGFyZCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhY3Rpb25cIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjbG9zZVRleHRcIiwgXCJjb2xvclwiLCBcImljb25cIiwgXCJpY29uTWFwcGluZ1wiLCBcIm9uQ2xvc2VcIiwgXCJyb2xlXCIsIFwic2V2ZXJpdHlcIiwgXCJ2YXJpYW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFwZXIsIF9leHRlbmRzKHtcbiAgICByb2xlOiByb2xlLFxuICAgIHNxdWFyZTogdHJ1ZSxcbiAgICBlbGV2YXRpb246IDAsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1tcIlwiLmNvbmNhdCh2YXJpYW50KS5jb25jYXQoY2FwaXRhbGl6ZShjb2xvciB8fCBzZXZlcml0eSkpXSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGljb24gIT09IGZhbHNlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pY29uXG4gIH0sIGljb24gfHwgaWNvbk1hcHBpbmdbc2V2ZXJpdHldIHx8IGRlZmF1bHRJY29uTWFwcGluZ1tzZXZlcml0eV0pIDogbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5tZXNzYWdlXG4gIH0sIGNoaWxkcmVuKSwgYWN0aW9uICE9IG51bGwgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmFjdGlvblxuICB9LCBhY3Rpb24pIDogbnVsbCwgYWN0aW9uID09IG51bGwgJiYgb25DbG9zZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuYWN0aW9uXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGNsb3NlVGV4dCxcbiAgICB0aXRsZTogY2xvc2VUZXh0LFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBvbkNsaWNrOiBvbkNsb3NlXG4gIH0sIF9yZWYpKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBBbGVydC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgYWN0aW9uIHRvIGRpc3BsYXkuIEl0IHJlbmRlcnMgYWZ0ZXIgdGhlIG1lc3NhZ2UsIGF0IHRoZSBlbmQgb2YgdGhlIGFsZXJ0LlxuICAgKi9cbiAgYWN0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGxhYmVsIGZvciB0aGUgKmNsb3NlIHBvcHVwKiBpY29uIGJ1dHRvbi5cbiAgICpcbiAgICogRm9yIGxvY2FsaXphdGlvbiBwdXJwb3NlcywgeW91IGNhbiB1c2UgdGhlIHByb3ZpZGVkIFt0cmFuc2xhdGlvbnNdKC9ndWlkZXMvbG9jYWxpemF0aW9uLykuXG4gICAqL1xuICBjbG9zZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBtYWluIGNvbG9yIGZvciB0aGUgYWxlcnQuIFVubGVzcyBwcm92aWRlZCwgdGhlIHZhbHVlIGlzIHRha2VuIGZyb20gdGhlIGBzZXZlcml0eWAgcHJvcC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydlcnJvcicsICdpbmZvJywgJ3N1Y2Nlc3MnLCAnd2FybmluZyddKSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGljb24gZGlzcGxheWVkIGJlZm9yZSB0aGUgY2hpbGRyZW4uXG4gICAqIFVubGVzcyBwcm92aWRlZCwgdGhlIGljb24gaXMgbWFwcGVkIHRvIHRoZSB2YWx1ZSBvZiB0aGUgYHNldmVyaXR5YCBwcm9wLlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgbWFwcyB0aGUgYHNldmVyaXR5YCBwcm9wIHRvIGEgcmFuZ2Ugb2YgZGlmZmVyZW50IGljb25zLFxuICAgKiBmb3IgaW5zdGFuY2Ugc3VjY2VzcyB0byBgPFN1Y2Nlc3NPdXRsaW5lZD5gLlxuICAgKiBJZiB5b3Ugd2lzaCB0byBjaGFuZ2UgdGhpcyBtYXBwaW5nLCB5b3UgY2FuIHByb3ZpZGUgeW91ciBvd24uXG4gICAqIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gdXNlIHRoZSBgaWNvbmAgcHJvcCB0byBvdmVycmlkZSB0aGUgaWNvbiBkaXNwbGF5ZWQuXG4gICAqL1xuICBpY29uTWFwcGluZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBlcnJvcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgaW5mbzogUHJvcFR5cGVzLm5vZGUsXG4gICAgc3VjY2VzczogUHJvcFR5cGVzLm5vZGUsXG4gICAgd2FybmluZzogUHJvcFR5cGVzLm5vZGVcbiAgfSksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqIFdoZW4gcHJvdmlkZWQgYW5kIG5vIGBhY3Rpb25gIHByb3AgaXMgc2V0LCBhIGNsb3NlIGljb24gYnV0dG9uIGlzIGRpc3BsYXllZCB0aGF0IHRyaWdnZXJzIHRoZSBjYWxsYmFjayB3aGVuIGNsaWNrZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgQVJJQSByb2xlIGF0dHJpYnV0ZSBvZiB0aGUgZWxlbWVudC5cbiAgICovXG4gIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBzZXZlcml0eSBvZiB0aGUgYWxlcnQuIFRoaXMgZGVmaW5lcyB0aGUgY29sb3IgYW5kIGljb24gdXNlZC5cbiAgICovXG4gIHNldmVyaXR5OiBQcm9wVHlwZXMub25lT2YoWydlcnJvcicsICdpbmZvJywgJ3N1Y2Nlc3MnLCAnd2FybmluZyddKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUFsZXJ0J1xufSkoQWxlcnQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0FsZXJ0JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgbWFyZ2luVG9wOiAtMlxuICAgIH1cbiAgfTtcbn07XG52YXIgQWxlcnRUaXRsZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEFsZXJ0VGl0bGUocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIF9leHRlbmRzKHtcbiAgICBndXR0ZXJCb3R0b206IHRydWUsXG4gICAgY29tcG9uZW50OiBcImRpdlwiLFxuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSlcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQWxlcnRUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlBbGVydFRpdGxlJ1xufSkoQWxlcnRUaXRsZSk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQWxlcnRUaXRsZSc7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBvcHBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXInO1xuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0Nsb3NlJztcbmltcG9ydCBBcnJvd0Ryb3BEb3duSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvQXJyb3dEcm9wRG93bic7XG5pbXBvcnQgdXNlQXV0b2NvbXBsZXRlLCB7IGNyZWF0ZUZpbHRlck9wdGlvbnMgfSBmcm9tICcuLi91c2VBdXRvY29tcGxldGUnO1xuZXhwb3J0IHsgY3JlYXRlRmlsdGVyT3B0aW9ucyB9O1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIF9vcHRpb247XG5cbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgICcmJGZvY3VzZWQgJGNsZWFySW5kaWNhdG9yRGlydHknOiB7XG4gICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICAgICAgfSxcblxuICAgICAgLyogQXZvaWQgZG91YmxlIHRhcCBpc3N1ZSBvbiBpT1MgKi9cbiAgICAgICdAbWVkaWEgKHBvaW50ZXI6IGZpbmUpJzoge1xuICAgICAgICAnJjpob3ZlciAkY2xlYXJJbmRpY2F0b3JEaXJ0eSc6IHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YC4gKi9cbiAgICBmdWxsV2lkdGg6IHtcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBmb2N1c2VkLiAqL1xuICAgIGZvY3VzZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHRhZyBlbGVtZW50cywgZS5nLiB0aGUgY2hpcHMuICovXG4gICAgdGFnOiB7XG4gICAgICBtYXJnaW46IDMsXG4gICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDZweCknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSB0YWcgZWxlbWVudHMsIGUuZy4gdGhlIGNoaXBzIGlmIGBzaXplPVwic21hbGxcImAuICovXG4gICAgdGFnU2l6ZVNtYWxsOiB7XG4gICAgICBtYXJnaW46IDIsXG4gICAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDRweCknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHdoZW4gdGhlIHBvcHVwIGljb24gaXMgcmVuZGVyZWQuICovXG4gICAgaGFzUG9wdXBJY29uOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHdoZW4gdGhlIGNsZWFyIGljb24gaXMgcmVuZGVyZWQuICovXG4gICAgaGFzQ2xlYXJJY29uOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBJbnB1dCBlbGVtZW50LiAqL1xuICAgIGlucHV0Um9vdDoge1xuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgICckaGFzUG9wdXBJY29uICYsICRoYXNDbGVhckljb24gJic6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAyNiArIDRcbiAgICAgIH0sXG4gICAgICAnJGhhc1BvcHVwSWNvbiRoYXNDbGVhckljb24gJic6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiA1MiArIDRcbiAgICAgIH0sXG4gICAgICAnJiAkaW5wdXQnOiB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBtaW5XaWR0aDogMzBcbiAgICAgIH0sXG4gICAgICAnJltjbGFzcyo9XCJNdWlJbnB1dC1yb290XCJdJzoge1xuICAgICAgICBwYWRkaW5nQm90dG9tOiAxLFxuICAgICAgICAnJiAkaW5wdXQnOiB7XG4gICAgICAgICAgcGFkZGluZzogNFxuICAgICAgICB9LFxuICAgICAgICAnJiAkaW5wdXQ6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgICAgcGFkZGluZzogJzZweCAwJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyZbY2xhc3MqPVwiTXVpSW5wdXQtcm9vdFwiXVtjbGFzcyo9XCJNdWlJbnB1dC1tYXJnaW5EZW5zZVwiXSc6IHtcbiAgICAgICAgJyYgJGlucHV0Jzoge1xuICAgICAgICAgIHBhZGRpbmc6ICc0cHggNHB4IDVweCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYgJGlucHV0OmZpcnN0LWNoaWxkJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICczcHggMCA2cHgnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJltjbGFzcyo9XCJNdWlPdXRsaW5lZElucHV0LXJvb3RcIl0nOiB7XG4gICAgICAgIHBhZGRpbmc6IDksXG4gICAgICAgICckaGFzUG9wdXBJY29uICYsICRoYXNDbGVhckljb24gJic6IHtcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDI2ICsgNCArIDlcbiAgICAgICAgfSxcbiAgICAgICAgJyRoYXNQb3B1cEljb24kaGFzQ2xlYXJJY29uICYnOiB7XG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiA1MiArIDQgKyA5XG4gICAgICAgIH0sXG4gICAgICAgICcmICRpbnB1dCc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnOS41cHggNHB4J1xuICAgICAgICB9LFxuICAgICAgICAnJiAkaW5wdXQ6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IDZcbiAgICAgICAgfSxcbiAgICAgICAgJyYgJGVuZEFkb3JubWVudCc6IHtcbiAgICAgICAgICByaWdodDogOVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyZbY2xhc3MqPVwiTXVpT3V0bGluZWRJbnB1dC1yb290XCJdW2NsYXNzKj1cIk11aU91dGxpbmVkSW5wdXQtbWFyZ2luRGVuc2VcIl0nOiB7XG4gICAgICAgIHBhZGRpbmc6IDYsXG4gICAgICAgICcmICRpbnB1dCc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnNC41cHggNHB4J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyZbY2xhc3MqPVwiTXVpRmlsbGVkSW5wdXQtcm9vdFwiXSc6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMTksXG4gICAgICAgIHBhZGRpbmdMZWZ0OiA4LFxuICAgICAgICAnJGhhc1BvcHVwSWNvbiAmLCAkaGFzQ2xlYXJJY29uICYnOiB7XG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAyNiArIDQgKyA5XG4gICAgICAgIH0sXG4gICAgICAgICckaGFzUG9wdXBJY29uJGhhc0NsZWFySWNvbiAmJzoge1xuICAgICAgICAgIHBhZGRpbmdSaWdodDogNTIgKyA0ICsgOVxuICAgICAgICB9LFxuICAgICAgICAnJiAkaW5wdXQnOiB7XG4gICAgICAgICAgcGFkZGluZzogJzlweCA0cHgnXG4gICAgICAgIH0sXG4gICAgICAgICcmICRlbmRBZG9ybm1lbnQnOiB7XG4gICAgICAgICAgcmlnaHQ6IDlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmW2NsYXNzKj1cIk11aUZpbGxlZElucHV0LXJvb3RcIl1bY2xhc3MqPVwiTXVpRmlsbGVkSW5wdXQtbWFyZ2luRGVuc2VcIl0nOiB7XG4gICAgICAgIHBhZGRpbmdCb3R0b206IDEsXG4gICAgICAgICcmICRpbnB1dCc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnNC41cHggNHB4J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpbnB1dCBlbGVtZW50LiAqL1xuICAgIGlucHV0OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGlucHV0IGVsZW1lbnQgaWYgdGFnIGZvY3VzZWQuICovXG4gICAgaW5wdXRGb2N1c2VkOiB7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBlbmRBZG9ybm1lbnQgZWxlbWVudC4gKi9cbiAgICBlbmRBZG9ybm1lbnQ6IHtcbiAgICAgIC8vIFdlIHVzZSBhIHBvc2l0aW9uIGFic29sdXRlIHRvIHN1cHBvcnQgd3JhcHBpbmcgdGFncy5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6ICdjYWxjKDUwJSAtIDE0cHgpJyAvLyBDZW50ZXIgdmVydGljYWxseVxuXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjbGVhciBpbmRpY2F0b3IuICovXG4gICAgY2xlYXJJbmRpY2F0b3I6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAtMixcbiAgICAgIHBhZGRpbmc6IDQsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2xlYXIgaW5kaWNhdG9yIGlmIHRoZSBpbnB1dCBpcyBkaXJ0eS4gKi9cbiAgICBjbGVhckluZGljYXRvckRpcnR5OiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBwb3B1cCBpbmRpY2F0b3IuICovXG4gICAgcG9wdXBJbmRpY2F0b3I6IHtcbiAgICAgIHBhZGRpbmc6IDIsXG4gICAgICBtYXJnaW5SaWdodDogLTJcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHBvcHVwIGluZGljYXRvciBpZiB0aGUgcG9wdXAgaXMgb3Blbi4gKi9cbiAgICBwb3B1cEluZGljYXRvck9wZW46IHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcG9wcGVyIGVsZW1lbnQuICovXG4gICAgcG9wcGVyOiB7XG4gICAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5tb2RhbFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcG9wcGVyIGVsZW1lbnQgaWYgYGRpc2FibGVQb3J0YWw9e3RydWV9YC4gKi9cbiAgICBwb3BwZXJEaXNhYmxlUG9ydGFsOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQuICovXG4gICAgcGFwZXI6IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkxLCB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBtYXJnaW46ICc0cHggMCdcbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgbGlzdGJveGAgY29tcG9uZW50LiAqL1xuICAgIGxpc3Rib3g6IHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcGFkZGluZzogJzhweCAwJyxcbiAgICAgIG1heEhlaWdodDogJzQwdmgnLFxuICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgbG9hZGluZyB3cmFwcGVyLiAqL1xuICAgIGxvYWRpbmc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgcGFkZGluZzogJzE0cHggMTZweCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIG5vIG9wdGlvbiB3cmFwcGVyLiAqL1xuICAgIG5vT3B0aW9uczoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICBwYWRkaW5nOiAnMTRweCAxNnB4J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgb3B0aW9uIGVsZW1lbnRzLiAqL1xuICAgIG9wdGlvbjogKF9vcHRpb24gPSB7XG4gICAgICBtaW5IZWlnaHQ6IDQ4LFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBwYWRkaW5nVG9wOiA2LFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBvdXRsaW5lOiAnMCcsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIHBhZGRpbmdCb3R0b206IDYsXG4gICAgICBwYWRkaW5nTGVmdDogMTYsXG4gICAgICBwYWRkaW5nUmlnaHQ6IDE2XG4gICAgfSwgX2RlZmluZVByb3BlcnR5KF9vcHRpb24sIHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XG4gICAgICBtaW5IZWlnaHQ6ICdhdXRvJ1xuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX29wdGlvbiwgJyZbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nLCB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLnNlbGVjdGVkXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfb3B0aW9uLCAnJltkYXRhLWZvY3VzPVwidHJ1ZVwiXScsIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXJcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9vcHRpb24sICcmOmFjdGl2ZScsIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uc2VsZWN0ZWRcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9vcHRpb24sICcmW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdJywge1xuICAgICAgb3BhY2l0eTogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRPcGFjaXR5LFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSksIF9vcHRpb24pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGdyb3VwJ3MgbGFiZWwgZWxlbWVudHMuICovXG4gICAgZ3JvdXBMYWJlbDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICB0b3A6IC04XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBncm91cCdzIHVsIGVsZW1lbnRzLiAqL1xuICAgIGdyb3VwVWw6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAnJiAkb3B0aW9uJzoge1xuICAgICAgICBwYWRkaW5nTGVmdDogMjRcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBEaXNhYmxlUG9ydGFsKHByb3BzKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gIHZhciBhbmNob3JFbCA9IHByb3BzLmFuY2hvckVsLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYW5jaG9yRWxcIiwgXCJvcGVuXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgb3RoZXIpO1xufVxuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENsb3NlSWNvbiwge1xuICBmb250U2l6ZTogXCJzbWFsbFwiXG59KTtcblxudmFyIF9yZWYyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXJyb3dEcm9wRG93bkljb24sIG51bGwpO1xuXG52YXIgQXV0b2NvbXBsZXRlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQXV0b2NvbXBsZXRlKHByb3BzLCByZWYpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgdmFyIF9wcm9wcyRhdXRvQ29tcGxldGUgPSBwcm9wcy5hdXRvQ29tcGxldGUsXG4gICAgICBhdXRvQ29tcGxldGUgPSBfcHJvcHMkYXV0b0NvbXBsZXRlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvQ29tcGxldGUsXG4gICAgICBfcHJvcHMkYXV0b0hpZ2hsaWdodCA9IHByb3BzLmF1dG9IaWdobGlnaHQsXG4gICAgICBhdXRvSGlnaGxpZ2h0ID0gX3Byb3BzJGF1dG9IaWdobGlnaHQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGF1dG9IaWdobGlnaHQsXG4gICAgICBfcHJvcHMkYXV0b1NlbGVjdCA9IHByb3BzLmF1dG9TZWxlY3QsXG4gICAgICBhdXRvU2VsZWN0ID0gX3Byb3BzJGF1dG9TZWxlY3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGF1dG9TZWxlY3QsXG4gICAgICBfcHJvcHMkYmx1ck9uU2VsZWN0ID0gcHJvcHMuYmx1ck9uU2VsZWN0LFxuICAgICAgYmx1ck9uU2VsZWN0ID0gX3Byb3BzJGJsdXJPblNlbGVjdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYmx1ck9uU2VsZWN0LFxuICAgICAgQ2hpcFByb3BzID0gcHJvcHMuQ2hpcFByb3BzLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY2xlYXJPbkJsdXIgPSBwcm9wcy5jbGVhck9uQmx1cixcbiAgICAgIGNsZWFyT25CbHVyID0gX3Byb3BzJGNsZWFyT25CbHVyID09PSB2b2lkIDAgPyAhcHJvcHMuZnJlZVNvbG8gOiBfcHJvcHMkY2xlYXJPbkJsdXIsXG4gICAgICBfcHJvcHMkY2xlYXJPbkVzY2FwZSA9IHByb3BzLmNsZWFyT25Fc2NhcGUsXG4gICAgICBjbGVhck9uRXNjYXBlID0gX3Byb3BzJGNsZWFyT25Fc2NhcGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGNsZWFyT25Fc2NhcGUsXG4gICAgICBfcHJvcHMkY2xlYXJUZXh0ID0gcHJvcHMuY2xlYXJUZXh0LFxuICAgICAgY2xlYXJUZXh0ID0gX3Byb3BzJGNsZWFyVGV4dCA9PT0gdm9pZCAwID8gJ0NsZWFyJyA6IF9wcm9wcyRjbGVhclRleHQsXG4gICAgICBfcHJvcHMkY2xvc2VJY29uID0gcHJvcHMuY2xvc2VJY29uLFxuICAgICAgY2xvc2VJY29uID0gX3Byb3BzJGNsb3NlSWNvbiA9PT0gdm9pZCAwID8gX3JlZiA6IF9wcm9wcyRjbG9zZUljb24sXG4gICAgICBfcHJvcHMkY2xvc2VUZXh0ID0gcHJvcHMuY2xvc2VUZXh0LFxuICAgICAgY2xvc2VUZXh0ID0gX3Byb3BzJGNsb3NlVGV4dCA9PT0gdm9pZCAwID8gJ0Nsb3NlJyA6IF9wcm9wcyRjbG9zZVRleHQsXG4gICAgICBfcHJvcHMkZGVidWcgPSBwcm9wcy5kZWJ1ZyxcbiAgICAgIGRlYnVnID0gX3Byb3BzJGRlYnVnID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkZWJ1ZyxcbiAgICAgIF9wcm9wcyRkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUgPSBfcHJvcHMkZGVmYXVsdFZhbHVlID09PSB2b2lkIDAgPyBwcm9wcy5tdWx0aXBsZSA/IFtdIDogbnVsbCA6IF9wcm9wcyRkZWZhdWx0VmFsdWUsXG4gICAgICBfcHJvcHMkZGlzYWJsZUNsZWFyYWIgPSBwcm9wcy5kaXNhYmxlQ2xlYXJhYmxlLFxuICAgICAgZGlzYWJsZUNsZWFyYWJsZSA9IF9wcm9wcyRkaXNhYmxlQ2xlYXJhYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUNsZWFyYWIsXG4gICAgICBfcHJvcHMkZGlzYWJsZUNsb3NlT24gPSBwcm9wcy5kaXNhYmxlQ2xvc2VPblNlbGVjdCxcbiAgICAgIGRpc2FibGVDbG9zZU9uU2VsZWN0ID0gX3Byb3BzJGRpc2FibGVDbG9zZU9uID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQ2xvc2VPbixcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGRpc2FibGVkSXRlbXNGID0gcHJvcHMuZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSxcbiAgICAgIGRpc2FibGVkSXRlbXNGb2N1c2FibGUgPSBfcHJvcHMkZGlzYWJsZWRJdGVtc0YgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkSXRlbXNGLFxuICAgICAgX3Byb3BzJGRpc2FibGVMaXN0V3JhID0gcHJvcHMuZGlzYWJsZUxpc3RXcmFwLFxuICAgICAgZGlzYWJsZUxpc3RXcmFwID0gX3Byb3BzJGRpc2FibGVMaXN0V3JhID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlTGlzdFdyYSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlUG9ydGFsID0gcHJvcHMuZGlzYWJsZVBvcnRhbCxcbiAgICAgIGRpc2FibGVQb3J0YWwgPSBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVBvcnRhbCxcbiAgICAgIGZpbHRlck9wdGlvbnMgPSBwcm9wcy5maWx0ZXJPcHRpb25zLFxuICAgICAgX3Byb3BzJGZpbHRlclNlbGVjdGVkID0gcHJvcHMuZmlsdGVyU2VsZWN0ZWRPcHRpb25zLFxuICAgICAgZmlsdGVyU2VsZWN0ZWRPcHRpb25zID0gX3Byb3BzJGZpbHRlclNlbGVjdGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmaWx0ZXJTZWxlY3RlZCxcbiAgICAgIF9wcm9wcyRmb3JjZVBvcHVwSWNvbiA9IHByb3BzLmZvcmNlUG9wdXBJY29uLFxuICAgICAgZm9yY2VQb3B1cEljb24gPSBfcHJvcHMkZm9yY2VQb3B1cEljb24gPT09IHZvaWQgMCA/ICdhdXRvJyA6IF9wcm9wcyRmb3JjZVBvcHVwSWNvbixcbiAgICAgIF9wcm9wcyRmcmVlU29sbyA9IHByb3BzLmZyZWVTb2xvLFxuICAgICAgZnJlZVNvbG8gPSBfcHJvcHMkZnJlZVNvbG8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZyZWVTb2xvLFxuICAgICAgX3Byb3BzJGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcyRmdWxsV2lkdGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZ1bGxXaWR0aCxcbiAgICAgIF9wcm9wcyRnZXRMaW1pdFRhZ3NUZSA9IHByb3BzLmdldExpbWl0VGFnc1RleHQsXG4gICAgICBnZXRMaW1pdFRhZ3NUZXh0ID0gX3Byb3BzJGdldExpbWl0VGFnc1RlID09PSB2b2lkIDAgPyBmdW5jdGlvbiAobW9yZSkge1xuICAgIHJldHVybiBcIitcIi5jb25jYXQobW9yZSk7XG4gIH0gOiBfcHJvcHMkZ2V0TGltaXRUYWdzVGUsXG4gICAgICBnZXRPcHRpb25EaXNhYmxlZCA9IHByb3BzLmdldE9wdGlvbkRpc2FibGVkLFxuICAgICAgX3Byb3BzJGdldE9wdGlvbkxhYmVsID0gcHJvcHMuZ2V0T3B0aW9uTGFiZWwsXG4gICAgICBnZXRPcHRpb25MYWJlbCA9IF9wcm9wcyRnZXRPcHRpb25MYWJlbCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSA6IF9wcm9wcyRnZXRPcHRpb25MYWJlbCxcbiAgICAgIGdldE9wdGlvblNlbGVjdGVkID0gcHJvcHMuZ2V0T3B0aW9uU2VsZWN0ZWQsXG4gICAgICBncm91cEJ5ID0gcHJvcHMuZ3JvdXBCeSxcbiAgICAgIF9wcm9wcyRoYW5kbGVIb21lRW5kSyA9IHByb3BzLmhhbmRsZUhvbWVFbmRLZXlzLFxuICAgICAgaGFuZGxlSG9tZUVuZEtleXMgPSBfcHJvcHMkaGFuZGxlSG9tZUVuZEsgPT09IHZvaWQgMCA/ICFwcm9wcy5mcmVlU29sbyA6IF9wcm9wcyRoYW5kbGVIb21lRW5kSyxcbiAgICAgIGlkUHJvcCA9IHByb3BzLmlkLFxuICAgICAgX3Byb3BzJGluY2x1ZGVJbnB1dEluID0gcHJvcHMuaW5jbHVkZUlucHV0SW5MaXN0LFxuICAgICAgaW5jbHVkZUlucHV0SW5MaXN0ID0gX3Byb3BzJGluY2x1ZGVJbnB1dEluID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRpbmNsdWRlSW5wdXRJbixcbiAgICAgIGlucHV0VmFsdWVQcm9wID0gcHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgIF9wcm9wcyRsaW1pdFRhZ3MgPSBwcm9wcy5saW1pdFRhZ3MsXG4gICAgICBsaW1pdFRhZ3MgPSBfcHJvcHMkbGltaXRUYWdzID09PSB2b2lkIDAgPyAtMSA6IF9wcm9wcyRsaW1pdFRhZ3MsXG4gICAgICBfcHJvcHMkTGlzdGJveENvbXBvbmUgPSBwcm9wcy5MaXN0Ym94Q29tcG9uZW50LFxuICAgICAgTGlzdGJveENvbXBvbmVudCA9IF9wcm9wcyRMaXN0Ym94Q29tcG9uZSA9PT0gdm9pZCAwID8gJ3VsJyA6IF9wcm9wcyRMaXN0Ym94Q29tcG9uZSxcbiAgICAgIExpc3Rib3hQcm9wcyA9IHByb3BzLkxpc3Rib3hQcm9wcyxcbiAgICAgIF9wcm9wcyRsb2FkaW5nID0gcHJvcHMubG9hZGluZyxcbiAgICAgIGxvYWRpbmcgPSBfcHJvcHMkbG9hZGluZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbG9hZGluZyxcbiAgICAgIF9wcm9wcyRsb2FkaW5nVGV4dCA9IHByb3BzLmxvYWRpbmdUZXh0LFxuICAgICAgbG9hZGluZ1RleHQgPSBfcHJvcHMkbG9hZGluZ1RleHQgPT09IHZvaWQgMCA/ICdMb2FkaW5n4oCmJyA6IF9wcm9wcyRsb2FkaW5nVGV4dCxcbiAgICAgIF9wcm9wcyRtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgbXVsdGlwbGUgPSBfcHJvcHMkbXVsdGlwbGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpcGxlLFxuICAgICAgX3Byb3BzJG5vT3B0aW9uc1RleHQgPSBwcm9wcy5ub09wdGlvbnNUZXh0LFxuICAgICAgbm9PcHRpb25zVGV4dCA9IF9wcm9wcyRub09wdGlvbnNUZXh0ID09PSB2b2lkIDAgPyAnTm8gb3B0aW9ucycgOiBfcHJvcHMkbm9PcHRpb25zVGV4dCxcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbkNsb3NlID0gcHJvcHMub25DbG9zZSxcbiAgICAgIG9uSGlnaGxpZ2h0Q2hhbmdlID0gcHJvcHMub25IaWdobGlnaHRDaGFuZ2UsXG4gICAgICBvbklucHV0Q2hhbmdlID0gcHJvcHMub25JbnB1dENoYW5nZSxcbiAgICAgIG9uT3BlbiA9IHByb3BzLm9uT3BlbixcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgX3Byb3BzJG9wZW5PbkZvY3VzID0gcHJvcHMub3Blbk9uRm9jdXMsXG4gICAgICBvcGVuT25Gb2N1cyA9IF9wcm9wcyRvcGVuT25Gb2N1cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkb3Blbk9uRm9jdXMsXG4gICAgICBfcHJvcHMkb3BlblRleHQgPSBwcm9wcy5vcGVuVGV4dCxcbiAgICAgIG9wZW5UZXh0ID0gX3Byb3BzJG9wZW5UZXh0ID09PSB2b2lkIDAgPyAnT3BlbicgOiBfcHJvcHMkb3BlblRleHQsXG4gICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcbiAgICAgIF9wcm9wcyRQYXBlckNvbXBvbmVudCA9IHByb3BzLlBhcGVyQ29tcG9uZW50LFxuICAgICAgUGFwZXJDb21wb25lbnQgPSBfcHJvcHMkUGFwZXJDb21wb25lbnQgPT09IHZvaWQgMCA/IFBhcGVyIDogX3Byb3BzJFBhcGVyQ29tcG9uZW50LFxuICAgICAgX3Byb3BzJFBvcHBlckNvbXBvbmVuID0gcHJvcHMuUG9wcGVyQ29tcG9uZW50LFxuICAgICAgUG9wcGVyQ29tcG9uZW50UHJvcCA9IF9wcm9wcyRQb3BwZXJDb21wb25lbiA9PT0gdm9pZCAwID8gUG9wcGVyIDogX3Byb3BzJFBvcHBlckNvbXBvbmVuLFxuICAgICAgX3Byb3BzJHBvcHVwSWNvbiA9IHByb3BzLnBvcHVwSWNvbixcbiAgICAgIHBvcHVwSWNvbiA9IF9wcm9wcyRwb3B1cEljb24gPT09IHZvaWQgMCA/IF9yZWYyIDogX3Byb3BzJHBvcHVwSWNvbixcbiAgICAgIHJlbmRlckdyb3VwUHJvcCA9IHByb3BzLnJlbmRlckdyb3VwLFxuICAgICAgcmVuZGVySW5wdXQgPSBwcm9wcy5yZW5kZXJJbnB1dCxcbiAgICAgIHJlbmRlck9wdGlvblByb3AgPSBwcm9wcy5yZW5kZXJPcHRpb24sXG4gICAgICByZW5kZXJUYWdzID0gcHJvcHMucmVuZGVyVGFncyxcbiAgICAgIF9wcm9wcyRzZWxlY3RPbkZvY3VzID0gcHJvcHMuc2VsZWN0T25Gb2N1cyxcbiAgICAgIHNlbGVjdE9uRm9jdXMgPSBfcHJvcHMkc2VsZWN0T25Gb2N1cyA9PT0gdm9pZCAwID8gIXByb3BzLmZyZWVTb2xvIDogX3Byb3BzJHNlbGVjdE9uRm9jdXMsXG4gICAgICBfcHJvcHMkc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzaXplID0gX3Byb3BzJHNpemUgPT09IHZvaWQgMCA/ICdtZWRpdW0nIDogX3Byb3BzJHNpemUsXG4gICAgICB2YWx1ZVByb3AgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvSGlnaGxpZ2h0XCIsIFwiYXV0b1NlbGVjdFwiLCBcImJsdXJPblNlbGVjdFwiLCBcIkNoaXBQcm9wc1wiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGVhck9uQmx1clwiLCBcImNsZWFyT25Fc2NhcGVcIiwgXCJjbGVhclRleHRcIiwgXCJjbG9zZUljb25cIiwgXCJjbG9zZVRleHRcIiwgXCJkZWJ1Z1wiLCBcImRlZmF1bHRWYWx1ZVwiLCBcImRpc2FibGVDbGVhcmFibGVcIiwgXCJkaXNhYmxlQ2xvc2VPblNlbGVjdFwiLCBcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZVwiLCBcImRpc2FibGVMaXN0V3JhcFwiLCBcImRpc2FibGVQb3J0YWxcIiwgXCJmaWx0ZXJPcHRpb25zXCIsIFwiZmlsdGVyU2VsZWN0ZWRPcHRpb25zXCIsIFwiZm9yY2VQb3B1cEljb25cIiwgXCJmcmVlU29sb1wiLCBcImZ1bGxXaWR0aFwiLCBcImdldExpbWl0VGFnc1RleHRcIiwgXCJnZXRPcHRpb25EaXNhYmxlZFwiLCBcImdldE9wdGlvbkxhYmVsXCIsIFwiZ2V0T3B0aW9uU2VsZWN0ZWRcIiwgXCJncm91cEJ5XCIsIFwiaGFuZGxlSG9tZUVuZEtleXNcIiwgXCJpZFwiLCBcImluY2x1ZGVJbnB1dEluTGlzdFwiLCBcImlucHV0VmFsdWVcIiwgXCJsaW1pdFRhZ3NcIiwgXCJMaXN0Ym94Q29tcG9uZW50XCIsIFwiTGlzdGJveFByb3BzXCIsIFwibG9hZGluZ1wiLCBcImxvYWRpbmdUZXh0XCIsIFwibXVsdGlwbGVcIiwgXCJub09wdGlvbnNUZXh0XCIsIFwib25DaGFuZ2VcIiwgXCJvbkNsb3NlXCIsIFwib25IaWdobGlnaHRDaGFuZ2VcIiwgXCJvbklucHV0Q2hhbmdlXCIsIFwib25PcGVuXCIsIFwib3BlblwiLCBcIm9wZW5PbkZvY3VzXCIsIFwib3BlblRleHRcIiwgXCJvcHRpb25zXCIsIFwiUGFwZXJDb21wb25lbnRcIiwgXCJQb3BwZXJDb21wb25lbnRcIiwgXCJwb3B1cEljb25cIiwgXCJyZW5kZXJHcm91cFwiLCBcInJlbmRlcklucHV0XCIsIFwicmVuZGVyT3B0aW9uXCIsIFwicmVuZGVyVGFnc1wiLCBcInNlbGVjdE9uRm9jdXNcIiwgXCJzaXplXCIsIFwidmFsdWVcIl0pO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cblxuICB2YXIgUG9wcGVyQ29tcG9uZW50ID0gZGlzYWJsZVBvcnRhbCA/IERpc2FibGVQb3J0YWwgOiBQb3BwZXJDb21wb25lbnRQcm9wO1xuXG4gIHZhciBfdXNlQXV0b2NvbXBsZXRlID0gdXNlQXV0b2NvbXBsZXRlKF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGNvbXBvbmVudE5hbWU6ICdBdXRvY29tcGxldGUnXG4gIH0pKSxcbiAgICAgIGdldFJvb3RQcm9wcyA9IF91c2VBdXRvY29tcGxldGUuZ2V0Um9vdFByb3BzLFxuICAgICAgZ2V0SW5wdXRQcm9wcyA9IF91c2VBdXRvY29tcGxldGUuZ2V0SW5wdXRQcm9wcyxcbiAgICAgIGdldElucHV0TGFiZWxQcm9wcyA9IF91c2VBdXRvY29tcGxldGUuZ2V0SW5wdXRMYWJlbFByb3BzLFxuICAgICAgZ2V0UG9wdXBJbmRpY2F0b3JQcm9wcyA9IF91c2VBdXRvY29tcGxldGUuZ2V0UG9wdXBJbmRpY2F0b3JQcm9wcyxcbiAgICAgIGdldENsZWFyUHJvcHMgPSBfdXNlQXV0b2NvbXBsZXRlLmdldENsZWFyUHJvcHMsXG4gICAgICBnZXRUYWdQcm9wcyA9IF91c2VBdXRvY29tcGxldGUuZ2V0VGFnUHJvcHMsXG4gICAgICBnZXRMaXN0Ym94UHJvcHMgPSBfdXNlQXV0b2NvbXBsZXRlLmdldExpc3Rib3hQcm9wcyxcbiAgICAgIGdldE9wdGlvblByb3BzID0gX3VzZUF1dG9jb21wbGV0ZS5nZXRPcHRpb25Qcm9wcyxcbiAgICAgIHZhbHVlID0gX3VzZUF1dG9jb21wbGV0ZS52YWx1ZSxcbiAgICAgIGRpcnR5ID0gX3VzZUF1dG9jb21wbGV0ZS5kaXJ0eSxcbiAgICAgIGlkID0gX3VzZUF1dG9jb21wbGV0ZS5pZCxcbiAgICAgIHBvcHVwT3BlbiA9IF91c2VBdXRvY29tcGxldGUucG9wdXBPcGVuLFxuICAgICAgZm9jdXNlZCA9IF91c2VBdXRvY29tcGxldGUuZm9jdXNlZCxcbiAgICAgIGZvY3VzZWRUYWcgPSBfdXNlQXV0b2NvbXBsZXRlLmZvY3VzZWRUYWcsXG4gICAgICBhbmNob3JFbCA9IF91c2VBdXRvY29tcGxldGUuYW5jaG9yRWwsXG4gICAgICBzZXRBbmNob3JFbCA9IF91c2VBdXRvY29tcGxldGUuc2V0QW5jaG9yRWwsXG4gICAgICBpbnB1dFZhbHVlID0gX3VzZUF1dG9jb21wbGV0ZS5pbnB1dFZhbHVlLFxuICAgICAgZ3JvdXBlZE9wdGlvbnMgPSBfdXNlQXV0b2NvbXBsZXRlLmdyb3VwZWRPcHRpb25zO1xuXG4gIHZhciBzdGFydEFkb3JubWVudDtcblxuICBpZiAobXVsdGlwbGUgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgIHZhciBnZXRDdXN0b21pemVkVGFnUHJvcHMgPSBmdW5jdGlvbiBnZXRDdXN0b21pemVkVGFnUHJvcHMocGFyYW1zKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy50YWcsIHNpemUgPT09ICdzbWFsbCcgJiYgY2xhc3Nlcy50YWdTaXplU21hbGwpLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgIH0sIGdldFRhZ1Byb3BzKHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBpZiAocmVuZGVyVGFncykge1xuICAgICAgc3RhcnRBZG9ybm1lbnQgPSByZW5kZXJUYWdzKHZhbHVlLCBnZXRDdXN0b21pemVkVGFnUHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEFkb3JubWVudCA9IHZhbHVlLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hpcCwgX2V4dGVuZHMoe1xuICAgICAgICAgIGxhYmVsOiBnZXRPcHRpb25MYWJlbChvcHRpb24pLFxuICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgfSwgZ2V0Q3VzdG9taXplZFRhZ1Byb3BzKHtcbiAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgfSksIENoaXBQcm9wcykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxpbWl0VGFncyA+IC0xICYmIEFycmF5LmlzQXJyYXkoc3RhcnRBZG9ybm1lbnQpKSB7XG4gICAgdmFyIG1vcmUgPSBzdGFydEFkb3JubWVudC5sZW5ndGggLSBsaW1pdFRhZ3M7XG5cbiAgICBpZiAoIWZvY3VzZWQgJiYgbW9yZSA+IDApIHtcbiAgICAgIHN0YXJ0QWRvcm5tZW50ID0gc3RhcnRBZG9ybm1lbnQuc3BsaWNlKDAsIGxpbWl0VGFncyk7XG4gICAgICBzdGFydEFkb3JubWVudC5wdXNoKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGFnLFxuICAgICAgICBrZXk6IHN0YXJ0QWRvcm5tZW50Lmxlbmd0aFxuICAgICAgfSwgZ2V0TGltaXRUYWdzVGV4dChtb3JlKSkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBkZWZhdWx0UmVuZGVyR3JvdXAgPSBmdW5jdGlvbiBkZWZhdWx0UmVuZGVyR3JvdXAocGFyYW1zKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAga2V5OiBwYXJhbXMua2V5XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFN1YmhlYWRlciwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmdyb3VwTGFiZWwsXG4gICAgICBjb21wb25lbnQ6IFwiZGl2XCJcbiAgICB9LCBwYXJhbXMuZ3JvdXApLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5ncm91cFVsXG4gICAgfSwgcGFyYW1zLmNoaWxkcmVuKSk7XG4gIH07XG5cbiAgdmFyIHJlbmRlckdyb3VwID0gcmVuZGVyR3JvdXBQcm9wIHx8IGRlZmF1bHRSZW5kZXJHcm91cDtcbiAgdmFyIHJlbmRlck9wdGlvbiA9IHJlbmRlck9wdGlvblByb3AgfHwgZ2V0T3B0aW9uTGFiZWw7XG5cbiAgdmFyIHJlbmRlckxpc3RPcHRpb24gPSBmdW5jdGlvbiByZW5kZXJMaXN0T3B0aW9uKG9wdGlvbiwgaW5kZXgpIHtcbiAgICB2YXIgb3B0aW9uUHJvcHMgPSBnZXRPcHRpb25Qcm9wcyh7XG4gICAgICBvcHRpb246IG9wdGlvbixcbiAgICAgIGluZGV4OiBpbmRleFxuICAgIH0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIF9leHRlbmRzKHt9LCBvcHRpb25Qcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLm9wdGlvblxuICAgIH0pLCByZW5kZXJPcHRpb24ob3B0aW9uLCB7XG4gICAgICBzZWxlY3RlZDogb3B0aW9uUHJvcHNbJ2FyaWEtc2VsZWN0ZWQnXSxcbiAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICB9KSk7XG4gIH07XG5cbiAgdmFyIGhhc0NsZWFySWNvbiA9ICFkaXNhYmxlQ2xlYXJhYmxlICYmICFkaXNhYmxlZDtcbiAgdmFyIGhhc1BvcHVwSWNvbiA9ICghZnJlZVNvbG8gfHwgZm9yY2VQb3B1cEljb24gPT09IHRydWUpICYmIGZvcmNlUG9wdXBJY29uICE9PSBmYWxzZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBmb2N1c2VkICYmIGNsYXNzZXMuZm9jdXNlZCwgZnVsbFdpZHRoICYmIGNsYXNzZXMuZnVsbFdpZHRoLCBoYXNDbGVhckljb24gJiYgY2xhc3Nlcy5oYXNDbGVhckljb24sIGhhc1BvcHVwSWNvbiAmJiBjbGFzc2VzLmhhc1BvcHVwSWNvbilcbiAgfSwgZ2V0Um9vdFByb3BzKG90aGVyKSksIHJlbmRlcklucHV0KHtcbiAgICBpZDogaWQsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICBzaXplOiBzaXplID09PSAnc21hbGwnID8gJ3NtYWxsJyA6IHVuZGVmaW5lZCxcbiAgICBJbnB1dExhYmVsUHJvcHM6IGdldElucHV0TGFiZWxQcm9wcygpLFxuICAgIElucHV0UHJvcHM6IHtcbiAgICAgIHJlZjogc2V0QW5jaG9yRWwsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMuaW5wdXRSb290LFxuICAgICAgc3RhcnRBZG9ybm1lbnQ6IHN0YXJ0QWRvcm5tZW50LFxuICAgICAgZW5kQWRvcm5tZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5lbmRBZG9ybm1lbnRcbiAgICAgIH0sIGhhc0NsZWFySWNvbiA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIF9leHRlbmRzKHt9LCBnZXRDbGVhclByb3BzKCksIHtcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGNsZWFyVGV4dCxcbiAgICAgICAgdGl0bGU6IGNsZWFyVGV4dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuY2xlYXJJbmRpY2F0b3IsIGRpcnR5ICYmIGNsYXNzZXMuY2xlYXJJbmRpY2F0b3JEaXJ0eSlcbiAgICAgIH0pLCBjbG9zZUljb24pIDogbnVsbCwgaGFzUG9wdXBJY29uID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkJ1dHRvbiwgX2V4dGVuZHMoe30sIGdldFBvcHVwSW5kaWNhdG9yUHJvcHMoKSwge1xuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBwb3B1cE9wZW4gPyBjbG9zZVRleHQgOiBvcGVuVGV4dCxcbiAgICAgICAgdGl0bGU6IHBvcHVwT3BlbiA/IGNsb3NlVGV4dCA6IG9wZW5UZXh0LFxuICAgICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5wb3B1cEluZGljYXRvciwgcG9wdXBPcGVuICYmIGNsYXNzZXMucG9wdXBJbmRpY2F0b3JPcGVuKVxuICAgICAgfSksIHBvcHVwSWNvbikgOiBudWxsKVxuICAgIH0sXG4gICAgaW5wdXRQcm9wczogX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuaW5wdXQsIGZvY3VzZWRUYWcgPT09IC0xICYmIGNsYXNzZXMuaW5wdXRGb2N1c2VkKSxcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgIH0sIGdldElucHV0UHJvcHMoKSlcbiAgfSkpLCBwb3B1cE9wZW4gJiYgYW5jaG9yRWwgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3BwZXJDb21wb25lbnQsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5wb3BwZXIsIGRpc2FibGVQb3J0YWwgJiYgY2xhc3Nlcy5wb3BwZXJEaXNhYmxlUG9ydGFsKSxcbiAgICBzdHlsZToge1xuICAgICAgd2lkdGg6IGFuY2hvckVsID8gYW5jaG9yRWwuY2xpZW50V2lkdGggOiBudWxsXG4gICAgfSxcbiAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgIGFuY2hvckVsOiBhbmNob3JFbCxcbiAgICBvcGVuOiB0cnVlXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhcGVyQ29tcG9uZW50LCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnBhcGVyXG4gIH0sIGxvYWRpbmcgJiYgZ3JvdXBlZE9wdGlvbnMubGVuZ3RoID09PSAwID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5sb2FkaW5nXG4gIH0sIGxvYWRpbmdUZXh0KSA6IG51bGwsIGdyb3VwZWRPcHRpb25zLmxlbmd0aCA9PT0gMCAmJiAhZnJlZVNvbG8gJiYgIWxvYWRpbmcgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLm5vT3B0aW9uc1xuICB9LCBub09wdGlvbnNUZXh0KSA6IG51bGwsIGdyb3VwZWRPcHRpb25zLmxlbmd0aCA+IDAgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXN0Ym94Q29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmxpc3Rib3hcbiAgfSwgZ2V0TGlzdGJveFByb3BzKCksIExpc3Rib3hQcm9wcyksIGdyb3VwZWRPcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpbmRleCkge1xuICAgIGlmIChncm91cEJ5KSB7XG4gICAgICByZXR1cm4gcmVuZGVyR3JvdXAoe1xuICAgICAgICBrZXk6IG9wdGlvbi5rZXksXG4gICAgICAgIGdyb3VwOiBvcHRpb24uZ3JvdXAsXG4gICAgICAgIGNoaWxkcmVuOiBvcHRpb24ub3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbjIsIGluZGV4Mikge1xuICAgICAgICAgIHJldHVybiByZW5kZXJMaXN0T3B0aW9uKG9wdGlvbjIsIG9wdGlvbi5pbmRleCArIGluZGV4Mik7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyTGlzdE9wdGlvbihvcHRpb24sIGluZGV4KTtcbiAgfSkpIDogbnVsbCkpIDogbnVsbCk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEF1dG9jb21wbGV0ZS5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBwb3J0aW9uIG9mIHRoZSBzZWxlY3RlZCBzdWdnZXN0aW9uIHRoYXQgaGFzIG5vdCBiZWVuIHR5cGVkIGJ5IHRoZSB1c2VyLFxuICAgKiBrbm93biBhcyB0aGUgY29tcGxldGlvbiBzdHJpbmcsIGFwcGVhcnMgaW5saW5lIGFmdGVyIHRoZSBpbnB1dCBjdXJzb3IgaW4gdGhlIHRleHRib3guXG4gICAqIFRoZSBpbmxpbmUgY29tcGxldGlvbiBzdHJpbmcgaXMgdmlzdWFsbHkgaGlnaGxpZ2h0ZWQgYW5kIGhhcyBhIHNlbGVjdGVkIHN0YXRlLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgZmlyc3Qgb3B0aW9uIGlzIGF1dG9tYXRpY2FsbHkgaGlnaGxpZ2h0ZWQuXG4gICAqL1xuICBhdXRvSGlnaGxpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc2VsZWN0ZWQgb3B0aW9uIGJlY29tZXMgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dFxuICAgKiB3aGVuIHRoZSBBdXRvY29tcGxldGUgbG9zZXMgZm9jdXMgdW5sZXNzIHRoZSB1c2VyIGNob29zZXNcbiAgICogYSBkaWZmZXJlbnQgb3B0aW9uIG9yIGNoYW5nZXMgdGhlIGNoYXJhY3RlciBzdHJpbmcgaW4gdGhlIGlucHV0LlxuICAgKi9cbiAgYXV0b1NlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIENvbnRyb2wgaWYgdGhlIGlucHV0IHNob3VsZCBiZSBibHVycmVkIHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkOlxuICAgKlxuICAgKiAtIGBmYWxzZWAgdGhlIGlucHV0IGlzIG5vdCBibHVycmVkLlxuICAgKiAtIGB0cnVlYCB0aGUgaW5wdXQgaXMgYWx3YXlzIGJsdXJyZWQuXG4gICAqIC0gYHRvdWNoYCB0aGUgaW5wdXQgaXMgYmx1cnJlZCBhZnRlciBhIHRvdWNoIGV2ZW50LlxuICAgKiAtIGBtb3VzZWAgdGhlIGlucHV0IGlzIGJsdXJyZWQgYWZ0ZXIgYSBtb3VzZSBldmVudC5cbiAgICovXG4gIGJsdXJPblNlbGVjdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnbW91c2UnLCAndG91Y2gnXSksIFByb3BUeXBlcy5ib29sXSksXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgQ2hpcGBdKC9hcGkvY2hpcC8pIGVsZW1lbnQuXG4gICAqL1xuICBDaGlwUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCdzIHRleHQgd2lsbCBiZSBjbGVhcmVkIG9uIGJsdXIgaWYgbm8gdmFsdWUgaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIFNldCB0byBgdHJ1ZWAgaWYgeW91IHdhbnQgdG8gaGVscCB0aGUgdXNlciBlbnRlciBhIG5ldyB2YWx1ZS5cbiAgICogU2V0IHRvIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gaGVscCB0aGUgdXNlciByZXN1bWUgaGlzIHNlYXJjaC5cbiAgICovXG4gIGNsZWFyT25CbHVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBjbGVhciBhbGwgdmFsdWVzIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBlc2NhcGUgYW5kIHRoZSBwb3B1cCBpcyBjbG9zZWQuXG4gICAqL1xuICBjbGVhck9uRXNjYXBlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBmb3IgdGhlICpjbGVhciogaWNvbiBidXR0b24uXG4gICAqXG4gICAqIEZvciBsb2NhbGl6YXRpb24gcHVycG9zZXMsIHlvdSBjYW4gdXNlIHRoZSBwcm92aWRlZCBbdHJhbnNsYXRpb25zXSgvZ3VpZGVzL2xvY2FsaXphdGlvbi8pLlxuICAgKi9cbiAgY2xlYXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0byBkaXNwbGF5IGluIHBsYWNlIG9mIHRoZSBkZWZhdWx0IGNsb3NlIGljb24uXG4gICAqL1xuICBjbG9zZUljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCB0ZXh0IGZvciB0aGUgKmNsb3NlIHBvcHVwKiBpY29uIGJ1dHRvbi5cbiAgICpcbiAgICogRm9yIGxvY2FsaXphdGlvbiBwdXJwb3NlcywgeW91IGNhbiB1c2UgdGhlIHByb3ZpZGVkIFt0cmFuc2xhdGlvbnNdKC9ndWlkZXMvbG9jYWxpemF0aW9uLykuXG4gICAqL1xuICBjbG9zZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHBvcHVwIHdpbGwgaWdub3JlIHRoZSBibHVyIGV2ZW50IGlmIHRoZSBpbnB1dCBpcyBmaWxsZWQuXG4gICAqIFlvdSBjYW4gaW5zcGVjdCB0aGUgcG9wdXAgbWFya3VwIHdpdGggeW91ciBicm93c2VyIHRvb2xzLlxuICAgKiBDb25zaWRlciB0aGlzIG9wdGlvbiB3aGVuIHlvdSBuZWVkIHRvIGN1c3RvbWl6ZSB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgZGVidWc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBpbnB1dCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgY2FuJ3QgYmUgY2xlYXJlZC5cbiAgICovXG4gIGRpc2FibGVDbGVhcmFibGU6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBwb3B1cCB3b24ndCBjbG9zZSB3aGVuIGEgdmFsdWUgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICBkaXNhYmxlQ2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2lsbCBhbGxvdyBmb2N1cyBvbiBkaXNhYmxlZCBpdGVtcy5cbiAgICovXG4gIGRpc2FibGVkSXRlbXNGb2N1c2FibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsaXN0IGJveCBpbiB0aGUgcG9wdXAgd2lsbCBub3Qgd3JhcCBmb2N1cy5cbiAgICovXG4gIGRpc2FibGVMaXN0V3JhcDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIHBvcnRhbCBiZWhhdmlvci5cbiAgICogVGhlIGNoaWxkcmVuIHN0YXkgd2l0aGluIGl0J3MgcGFyZW50IERPTSBoaWVyYXJjaHkuXG4gICAqL1xuICBkaXNhYmxlUG9ydGFsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBmaWx0ZXIgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHRoZSBvcHRpb25zIHRoYXQgYXJlIGVsaWdpYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ge1RbXX0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byByZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBUaGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogQHJldHVybnMge1RbXX1cbiAgICovXG4gIGZpbHRlck9wdGlvbnM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGhpZGUgdGhlIHNlbGVjdGVkIG9wdGlvbnMgZnJvbSB0aGUgbGlzdCBib3guXG4gICAqL1xuICBmaWx0ZXJTZWxlY3RlZE9wdGlvbnM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBGb3JjZSB0aGUgdmlzaWJpbGl0eSBkaXNwbGF5IG9mIHRoZSBwb3B1cCBpY29uLlxuICAgKi9cbiAgZm9yY2VQb3B1cEljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksIFByb3BUeXBlcy5ib29sXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIEF1dG9jb21wbGV0ZSBpcyBmcmVlIHNvbG8sIG1lYW5pbmcgdGhhdCB0aGUgdXNlciBpbnB1dCBpcyBub3QgYm91bmQgdG8gcHJvdmlkZWQgb3B0aW9ucy5cbiAgICovXG4gIGZyZWVTb2xvOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gZGlzcGxheSB3aGVuIHRoZSB0YWdzIGFyZSB0cnVuY2F0ZWQgKGBsaW1pdFRhZ3NgKS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vcmUgVGhlIG51bWJlciBvZiB0cnVuY2F0ZWQgdGFncy5cbiAgICogQHJldHVybnMge1JlYWN0Tm9kZX1cbiAgICovXG4gIGdldExpbWl0VGFnc1RleHQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGRldGVybWluZSB0aGUgZGlzYWJsZWQgc3RhdGUgZm9yIGEgZ2l2ZW4gb3B0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1R9IG9wdGlvbiBUaGUgb3B0aW9uIHRvIHRlc3QuXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0T3B0aW9uRGlzYWJsZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGRldGVybWluZSB0aGUgc3RyaW5nIHZhbHVlIGZvciBhIGdpdmVuIG9wdGlvbi5cbiAgICogSXQncyB1c2VkIHRvIGZpbGwgdGhlIGlucHV0IChhbmQgdGhlIGxpc3QgYm94IG9wdGlvbnMgaWYgYHJlbmRlck9wdGlvbmAgaXMgbm90IHByb3ZpZGVkKS5cbiAgICpcbiAgICogQHBhcmFtIHtUfSBvcHRpb25cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldE9wdGlvbkxhYmVsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVXNlZCB0byBkZXRlcm1pbmUgaWYgYW4gb3B0aW9uIGlzIHNlbGVjdGVkLCBjb25zaWRlcmluZyB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICogVXNlcyBzdHJpY3QgZXF1YWxpdHkgYnkgZGVmYXVsdC5cbiAgICpcbiAgICogQHBhcmFtIHtUfSBvcHRpb24gVGhlIG9wdGlvbiB0byB0ZXN0LlxuICAgKiBAcGFyYW0ge1R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0IGFnYWluc3QuXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZ2V0T3B0aW9uU2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBwcm92aWRlZCwgdGhlIG9wdGlvbnMgd2lsbCBiZSBncm91cGVkIHVuZGVyIHRoZSByZXR1cm5lZCBzdHJpbmcuXG4gICAqIFRoZSBncm91cEJ5IHZhbHVlIGlzIGFsc28gdXNlZCBhcyB0aGUgdGV4dCBmb3IgZ3JvdXAgaGVhZGluZ3Mgd2hlbiBgcmVuZGVyR3JvdXBgIGlzIG5vdCBwcm92aWRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtUfSBvcHRpb25zIFRoZSBvcHRpb25zIHRvIGdyb3VwLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ3JvdXBCeTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBcIkhvbWVcIiBhbmQgXCJFbmRcIiBrZXlzIHdoZW4gdGhlIHBvcHVwIGlzIG9wZW4uXG4gICAqIEl0IHNob3VsZCBtb3ZlIGZvY3VzIHRvIHRoZSBmaXJzdCBvcHRpb24gYW5kIGxhc3Qgb3B0aW9uLCByZXNwZWN0aXZlbHkuXG4gICAqL1xuICBoYW5kbGVIb21lRW5kS2V5czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoaXMgcHJvcCBpcyB1c2VkIHRvIGhlbHAgaW1wbGVtZW50IHRoZSBhY2Nlc3NpYmlsaXR5IGxvZ2ljLlxuICAgKiBJZiB5b3UgZG9uJ3QgcHJvdmlkZSB0aGlzIHByb3AuIEl0IGZhbGxzIGJhY2sgdG8gYSByYW5kb21seSBnZW5lcmF0ZWQgaWQuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaGlnaGxpZ2h0IGNhbiBtb3ZlIHRvIHRoZSBpbnB1dC5cbiAgICovXG4gIGluY2x1ZGVJbnB1dEluTGlzdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCB2YWx1ZS5cbiAgICovXG4gIGlucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0YWdzIHRoYXQgd2lsbCBiZSB2aXNpYmxlIHdoZW4gbm90IGZvY3VzZWQuXG4gICAqIFNldCBgLTFgIHRvIGRpc2FibGUgdGhlIGxpbWl0LlxuICAgKi9cbiAgbGltaXRUYWdzOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgdG8gcmVuZGVyIHRoZSBsaXN0Ym94LlxuICAgKi9cbiAgTGlzdGJveENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBMaXN0Ym94IGVsZW1lbnQuXG4gICAqL1xuICBMaXN0Ym94UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCBpcyBpbiBhIGxvYWRpbmcgc3RhdGUuXG4gICAqL1xuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gaW4gYSBsb2FkaW5nIHN0YXRlLlxuICAgKlxuICAgKiBGb3IgbG9jYWxpemF0aW9uIHB1cnBvc2VzLCB5b3UgY2FuIHVzZSB0aGUgcHJvdmlkZWQgW3RyYW5zbGF0aW9uc10oL2d1aWRlcy9sb2NhbGl6YXRpb24vKS5cbiAgICovXG4gIGxvYWRpbmdUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBgdmFsdWVgIG11c3QgYmUgYW4gYXJyYXkgYW5kIHRoZSBtZW51IHdpbGwgc3VwcG9ydCBtdWx0aXBsZSBzZWxlY3Rpb25zLlxuICAgKi9cbiAgbXVsdGlwbGU6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5ib29sLFxuXG4gIC8qKlxuICAgKiBUZXh0IHRvIGRpc3BsYXkgd2hlbiB0aGVyZSBhcmUgbm8gb3B0aW9ucy5cbiAgICpcbiAgICogRm9yIGxvY2FsaXphdGlvbiBwdXJwb3NlcywgeW91IGNhbiB1c2UgdGhlIHByb3ZpZGVkIFt0cmFuc2xhdGlvbnNdKC9ndWlkZXMvbG9jYWxpemF0aW9uLykuXG4gICAqL1xuICBub09wdGlvbnNUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0ge1R8VFtdfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gT25lIG9mIFwiY3JlYXRlLW9wdGlvblwiLCBcInNlbGVjdC1vcHRpb25cIiwgXCJyZW1vdmUtb3B0aW9uXCIsIFwiYmx1clwiIG9yIFwiY2xlYXJcIi5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgcG9wdXAgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKiBVc2UgaW4gY29udHJvbGxlZCBtb2RlIChzZWUgb3BlbikuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiBDYW4gYmU6IGBcInRvZ2dsZUlucHV0XCJgLCBgXCJlc2NhcGVcImAsIGBcInNlbGVjdC1vcHRpb25cImAsIGBcImJsdXJcImAuXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgaGlnaGxpZ2h0IG9wdGlvbiBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7VH0gb3B0aW9uIFRoZSBoaWdobGlnaHRlZCBvcHRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gQ2FuIGJlOiBgXCJrZXlib2FyZFwiYCwgYFwiYXV0b1wiYCwgYFwibW91c2VcImAuXG4gICAqL1xuICBvbkhpZ2hsaWdodENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBuZXcgdmFsdWUgb2YgdGhlIHRleHQgaW5wdXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gQ2FuIGJlOiBgXCJpbnB1dFwiYCAodXNlciBpbnB1dCksIGBcInJlc2V0XCJgIChwcm9ncmFtbWF0aWMgY2hhbmdlKSwgYFwiY2xlYXJcImAuXG4gICAqL1xuICBvbklucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgcG9wdXAgcmVxdWVzdHMgdG8gYmUgb3BlbmVkLlxuICAgKiBVc2UgaW4gY29udHJvbGxlZCBtb2RlIChzZWUgb3BlbikuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICovXG4gIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENvbnRyb2wgdGhlIHBvcHVwYCBvcGVuIHN0YXRlLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHBvcHVwIHdpbGwgb3BlbiBvbiBpbnB1dCBmb2N1cy5cbiAgICovXG4gIG9wZW5PbkZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBmb3IgdGhlICpvcGVuIHBvcHVwKiBpY29uIGJ1dHRvbi5cbiAgICpcbiAgICogRm9yIGxvY2FsaXphdGlvbiBwdXJwb3NlcywgeW91IGNhbiB1c2UgdGhlIHByb3ZpZGVkIFt0cmFuc2xhdGlvbnNdKC9ndWlkZXMvbG9jYWxpemF0aW9uLykuXG4gICAqL1xuICBvcGVuVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQXJyYXkgb2Ygb3B0aW9ucy5cbiAgICovXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgdG8gcmVuZGVyIHRoZSBib2R5IG9mIHRoZSBwb3B1cC5cbiAgICovXG4gIFBhcGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wdXAuXG4gICAqL1xuICBQb3BwZXJDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogVGhlIGljb24gdG8gZGlzcGxheSBpbiBwbGFjZSBvZiB0aGUgZGVmYXVsdCBwb3B1cCBpY29uLlxuICAgKi9cbiAgcG9wdXBJY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBncm91cC5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IG9wdGlvbiBUaGUgZ3JvdXAgdG8gcmVuZGVyLlxuICAgKiBAcmV0dXJucyB7UmVhY3ROb2RlfVxuICAgKi9cbiAgcmVuZGVyR3JvdXA6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGlucHV0LlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtSZWFjdE5vZGV9XG4gICAqL1xuICByZW5kZXJJbnB1dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBvcHRpb24sIHVzZSBgZ2V0T3B0aW9uTGFiZWxgIGJ5IGRlZmF1bHQuXG4gICAqXG4gICAqIEBwYXJhbSB7VH0gb3B0aW9uIFRoZSBvcHRpb24gdG8gcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgVGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIEByZXR1cm5zIHtSZWFjdE5vZGV9XG4gICAqL1xuICByZW5kZXJPcHRpb246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIHNlbGVjdGVkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1RbXX0gdmFsdWUgVGhlIGB2YWx1ZWAgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZ2V0VGFnUHJvcHMgQSB0YWcgcHJvcHMgZ2V0dGVyLlxuICAgKiBAcmV0dXJucyB7UmVhY3ROb2RlfVxuICAgKi9cbiAgcmVuZGVyVGFnczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0J3MgdGV4dCB3aWxsIGJlIHNlbGVjdGVkIG9uIGZvY3VzLlxuICAgKiBJdCBoZWxwcyB0aGUgdXNlciBjbGVhciB0aGUgc2VsZWN0ZWQgdmFsdWUuXG4gICAqL1xuICBzZWxlY3RPbkZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGF1dG9jb21wbGV0ZS5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBhdXRvY29tcGxldGUuXG4gICAqXG4gICAqIFRoZSB2YWx1ZSBtdXN0IGhhdmUgcmVmZXJlbmNlIGVxdWFsaXR5IHdpdGggdGhlIG9wdGlvbiBpbiBvcmRlciB0byBiZSBzZWxlY3RlZC5cbiAgICogWW91IGNhbiBjdXN0b21pemUgdGhlIGVxdWFsaXR5IGJlaGF2aW9yIHdpdGggdGhlIGBnZXRPcHRpb25TZWxlY3RlZGAgcHJvcC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUF1dG9jb21wbGV0ZSdcbn0pKEF1dG9jb21wbGV0ZSk7IiwiZXhwb3J0IHsgZGVmYXVsdCwgY3JlYXRlRmlsdGVyT3B0aW9ucyB9IGZyb20gJy4vQXV0b2NvbXBsZXRlJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG52YXIgU1BBQ0lOR1MgPSB7XG4gIHNtYWxsOiAtMTYsXG4gIG1lZGl1bTogbnVsbFxufTtcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGF2YXRhciBlbGVtZW50cy4gKi9cbiAgICBhdmF0YXI6IHtcbiAgICAgIGJvcmRlcjogXCIycHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0KSxcbiAgICAgIG1hcmdpbkxlZnQ6IC04LFxuICAgICAgJyY6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IDBcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xudmFyIEF2YXRhckdyb3VwID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQXZhdGFyR3JvdXAocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW5Qcm9wID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRtYXggPSBwcm9wcy5tYXgsXG4gICAgICBtYXggPSBfcHJvcHMkbWF4ID09PSB2b2lkIDAgPyA1IDogX3Byb3BzJG1heCxcbiAgICAgIF9wcm9wcyRzcGFjaW5nID0gcHJvcHMuc3BhY2luZyxcbiAgICAgIHNwYWNpbmcgPSBfcHJvcHMkc3BhY2luZyA9PT0gdm9pZCAwID8gJ21lZGl1bScgOiBfcHJvcHMkc3BhY2luZyxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJtYXhcIiwgXCJzcGFjaW5nXCJdKTtcblxuICB2YXIgY2xhbXBlZE1heCA9IG1heCA8IDIgPyAyIDogbWF4O1xuICB2YXIgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuUHJvcCkuZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIEF2YXRhckdyb3VwIGNvbXBvbmVudCBkb2Vzbid0IGFjY2VwdCBhIEZyYWdtZW50IGFzIGEgY2hpbGQuXCIsICdDb25zaWRlciBwcm92aWRpbmcgYW4gYXJyYXkgaW5zdGVhZC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCk7XG4gIH0pO1xuICB2YXIgZXh0cmFBdmF0YXJzID0gY2hpbGRyZW4ubGVuZ3RoID4gY2xhbXBlZE1heCA/IGNoaWxkcmVuLmxlbmd0aCAtIGNsYW1wZWRNYXggKyAxIDogMDtcbiAgdmFyIG1hcmdpbkxlZnQgPSBzcGFjaW5nICYmIFNQQUNJTkdTW3NwYWNpbmddICE9PSB1bmRlZmluZWQgPyBTUEFDSU5HU1tzcGFjaW5nXSA6IC1zcGFjaW5nO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbi5zbGljZSgwLCBjaGlsZHJlbi5sZW5ndGggLSBleHRyYUF2YXRhcnMpLm1hcChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjaGlsZC5wcm9wcy5jbGFzc05hbWUsIGNsYXNzZXMuYXZhdGFyKSxcbiAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICAgIHpJbmRleDogY2hpbGRyZW4ubGVuZ3RoIC0gaW5kZXgsXG4gICAgICAgIG1hcmdpbkxlZnQ6IGluZGV4ID09PSAwID8gdW5kZWZpbmVkIDogbWFyZ2luTGVmdFxuICAgICAgfSwgY2hpbGQucHJvcHMuc3R5bGUpXG4gICAgfSk7XG4gIH0pLCBleHRyYUF2YXRhcnMgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBdmF0YXIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuYXZhdGFyLFxuICAgIHN0eWxlOiB7XG4gICAgICB6SW5kZXg6IDAsXG4gICAgICBtYXJnaW5MZWZ0OiBtYXJnaW5MZWZ0XG4gICAgfVxuICB9LCBcIitcIiwgZXh0cmFBdmF0YXJzKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBBdmF0YXJHcm91cC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgYXZhdGFycyB0byBzdGFjay5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE1heCBhdmF0YXJzIHRvIHNob3cgYmVmb3JlICt4LlxuICAgKi9cbiAgbWF4OiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMubnVtYmVyLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMubWF4IDwgMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBwcm9wIGBtYXhgIHNob3VsZCBiZSBlcXVhbCB0byAyIG9yIGFib3ZlLicsICdBIHZhbHVlIGJlbG93IGlzIGNsYW1wZWQgdG8gMi4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9KSxcblxuICAvKipcbiAgICogU3BhY2luZyBiZXR3ZWVuIGF2YXRhcnMuXG4gICAqL1xuICBzcGFjaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydtZWRpdW0nLCAnc21hbGwnXSksIFByb3BUeXBlcy5udW1iZXJdKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlBdmF0YXJHcm91cCdcbn0pKEF2YXRhckdyb3VwKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BdmF0YXJHcm91cCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgdXNlUGFnaW5hdGlvbiBmcm9tICcuL3VzZVBhZ2luYXRpb24nO1xuaW1wb3J0IFBhZ2luYXRpb25JdGVtIGZyb20gJy4uL1BhZ2luYXRpb25JdGVtJztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7fSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgdWwgZWxlbWVudC4gKi9cbiAgdWw6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICBsaXN0U3R5bGU6ICdub25lJ1xuICB9XG59O1xuXG5mdW5jdGlvbiBkZWZhdWx0R2V0QXJpYUxhYmVsKHR5cGUsIHBhZ2UsIHNlbGVjdGVkKSB7XG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoc2VsZWN0ZWQgPyAnJyA6ICdHbyB0byAnLCBcInBhZ2UgXCIpLmNvbmNhdChwYWdlKTtcbiAgfVxuXG4gIHJldHVybiBcIkdvIHRvIFwiLmNvbmNhdCh0eXBlLCBcIiBwYWdlXCIpO1xufVxuXG52YXIgUGFnaW5hdGlvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFBhZ2luYXRpb24ocHJvcHMsIHJlZikge1xuICB2YXIgYm91bmRhcnlDb3VudCA9IHByb3BzLmJvdW5kYXJ5Q291bnQsXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY29sb3IgPSBfcHJvcHMkY29sb3IgPT09IHZvaWQgMCA/ICdzdGFuZGFyZCcgOiBfcHJvcHMkY29sb3IsXG4gICAgICBjb3VudCA9IHByb3BzLmNvdW50LFxuICAgICAgZGVmYXVsdFBhZ2UgPSBwcm9wcy5kZWZhdWx0UGFnZSxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBfcHJvcHMkZ2V0SXRlbUFyaWFMYWIgPSBwcm9wcy5nZXRJdGVtQXJpYUxhYmVsLFxuICAgICAgZ2V0SXRlbUFyaWFMYWJlbCA9IF9wcm9wcyRnZXRJdGVtQXJpYUxhYiA9PT0gdm9pZCAwID8gZGVmYXVsdEdldEFyaWFMYWJlbCA6IF9wcm9wcyRnZXRJdGVtQXJpYUxhYixcbiAgICAgIGhpZGVOZXh0QnV0dG9uID0gcHJvcHMuaGlkZU5leHRCdXR0b24sXG4gICAgICBoaWRlUHJldkJ1dHRvbiA9IHByb3BzLmhpZGVQcmV2QnV0dG9uLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIHBhZ2UgPSBwcm9wcy5wYWdlLFxuICAgICAgX3Byb3BzJHJlbmRlckl0ZW0gPSBwcm9wcy5yZW5kZXJJdGVtLFxuICAgICAgcmVuZGVySXRlbSA9IF9wcm9wcyRyZW5kZXJJdGVtID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQYWdpbmF0aW9uSXRlbSwgaXRlbSk7XG4gIH0gOiBfcHJvcHMkcmVuZGVySXRlbSxcbiAgICAgIF9wcm9wcyRzaGFwZSA9IHByb3BzLnNoYXBlLFxuICAgICAgc2hhcGUgPSBfcHJvcHMkc2hhcGUgPT09IHZvaWQgMCA/ICdyb3VuZCcgOiBfcHJvcHMkc2hhcGUsXG4gICAgICBzaG93Rmlyc3RCdXR0b24gPSBwcm9wcy5zaG93Rmlyc3RCdXR0b24sXG4gICAgICBzaG93TGFzdEJ1dHRvbiA9IHByb3BzLnNob3dMYXN0QnV0dG9uLFxuICAgICAgc2libGluZ0NvdW50ID0gcHJvcHMuc2libGluZ0NvdW50LFxuICAgICAgX3Byb3BzJHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc2l6ZSA9IF9wcm9wcyRzaXplID09PSB2b2lkIDAgPyAnbWVkaXVtJyA6IF9wcm9wcyRzaXplLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJib3VuZGFyeUNvdW50XCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY291bnRcIiwgXCJkZWZhdWx0UGFnZVwiLCBcImRpc2FibGVkXCIsIFwiZ2V0SXRlbUFyaWFMYWJlbFwiLCBcImhpZGVOZXh0QnV0dG9uXCIsIFwiaGlkZVByZXZCdXR0b25cIiwgXCJvbkNoYW5nZVwiLCBcInBhZ2VcIiwgXCJyZW5kZXJJdGVtXCIsIFwic2hhcGVcIiwgXCJzaG93Rmlyc3RCdXR0b25cIiwgXCJzaG93TGFzdEJ1dHRvblwiLCBcInNpYmxpbmdDb3VudFwiLCBcInNpemVcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgX3VzZVBhZ2luYXRpb24gPSB1c2VQYWdpbmF0aW9uKF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGNvbXBvbmVudE5hbWU6ICdQYWdpbmF0aW9uJ1xuICB9KSksXG4gICAgICBpdGVtcyA9IF91c2VQYWdpbmF0aW9uLml0ZW1zO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcIm5hdlwiLCBfZXh0ZW5kcyh7XG4gICAgXCJhcmlhLWxhYmVsXCI6IFwicGFnaW5hdGlvbiBuYXZpZ2F0aW9uXCIsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy51bFxuICB9LCBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAga2V5OiBpbmRleFxuICAgIH0sIHJlbmRlckl0ZW0oX2V4dGVuZHMoe30sIGl0ZW0sIHtcbiAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICdhcmlhLWxhYmVsJzogZ2V0SXRlbUFyaWFMYWJlbChpdGVtLnR5cGUsIGl0ZW0ucGFnZSwgaXRlbS5zZWxlY3RlZCksXG4gICAgICBzaGFwZTogc2hhcGUsXG4gICAgICBzaXplOiBzaXplLFxuICAgICAgdmFyaWFudDogdmFyaWFudFxuICAgIH0pKSk7XG4gIH0pKSk7XG59KTsgLy8gQGRlZmF1bHQgdGFncyBzeW5jZWQgd2l0aCBkZWZhdWx0IHZhbHVlcyBmcm9tIHVzZVBhZ2luYXRpb25cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgYWx3YXlzIHZpc2libGUgcGFnZXMgYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kLlxuICAgKiBAZGVmYXVsdCAxXG4gICAqL1xuICBib3VuZGFyeUNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGFjdGl2ZSBjb2xvci5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICdzdGFuZGFyZCddKSxcblxuICAvKipcbiAgICogVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlcy5cbiAgICogQGRlZmF1bHQgMVxuICAgKi9cbiAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoZSBwYWdlIHNlbGVjdGVkIGJ5IGRlZmF1bHQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVuY29udHJvbGxlZC5cbiAgICogQGRlZmF1bHQgMVxuICAgKi9cbiAgZGVmYXVsdFBhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgcHJvdmlkZXMgYSB1c2VyLWZyaWVuZGx5IG5hbWUgZm9yIHRoZSBjdXJyZW50IHBhZ2UuXG4gICAqXG4gICAqIEZvciBsb2NhbGl6YXRpb24gcHVycG9zZXMsIHlvdSBjYW4gdXNlIHRoZSBwcm92aWRlZCBbdHJhbnNsYXRpb25zXSgvZ3VpZGVzL2xvY2FsaXphdGlvbi8pLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgbGluayBvciBidXR0b24gdHlwZSB0byBmb3JtYXQgKCdwYWdlJyB8ICdmaXJzdCcgfCAnbGFzdCcgfCAnbmV4dCcgfCAncHJldmlvdXMnKS4gRGVmYXVsdHMgdG8gJ3BhZ2UnLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBUaGUgcGFnZSBudW1iZXIgdG8gZm9ybWF0LlxuICAgKiBAcGFyYW0ge2Jvb2x9IHNlbGVjdGVkIElmIHRydWUsIHRoZSBjdXJyZW50IHBhZ2UgaXMgc2VsZWN0ZWQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRJdGVtQXJpYUxhYmVsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBoaWRlIHRoZSBuZXh0LXBhZ2UgYnV0dG9uLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgaGlkZU5leHRCdXR0b246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGhpZGUgdGhlIHByZXZpb3VzLXBhZ2UgYnV0dG9uLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgaGlkZVByZXZCdXR0b246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBwYWdlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgVGhlIHBhZ2Ugc2VsZWN0ZWQuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHBhZ2UuXG4gICAqL1xuICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSB7UGFnaW5hdGlvblJlbmRlckl0ZW1QYXJhbXN9IHBhcmFtcyBUaGUgcHJvcHMgdG8gc3ByZWFkIG9uIGEgUGFnaW5hdGlvbkl0ZW0uXG4gICAqIEByZXR1cm5zIHtSZWFjdE5vZGV9XG4gICAqL1xuICByZW5kZXJJdGVtOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHNoYXBlIG9mIHRoZSBwYWdpbmF0aW9uIGl0ZW1zLlxuICAgKi9cbiAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbJ3JvdW5kJywgJ3JvdW5kZWQnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgc2hvdyB0aGUgZmlyc3QtcGFnZSBidXR0b24uXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBzaG93Rmlyc3RCdXR0b246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHNob3cgdGhlIGxhc3QtcGFnZSBidXR0b24uXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBzaG93TGFzdEJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBhbHdheXMgdmlzaWJsZSBwYWdlcyBiZWZvcmUgYW5kIGFmdGVyIHRoZSBjdXJyZW50IHBhZ2UuXG4gICAqIEBkZWZhdWx0IDFcbiAgICovXG4gIHNpYmxpbmdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50LlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnbGFyZ2UnLCAnbWVkaXVtJywgJ3NtYWxsJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydvdXRsaW5lZCcsICd0ZXh0J10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVBhZ2luYXRpb24nXG59KShQYWdpbmF0aW9uKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYWdpbmF0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUGFnaW5hdGlvbiB9IGZyb20gJy4vdXNlUGFnaW5hdGlvbic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgdXNlQ29udHJvbGxlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVBhZ2luYXRpb24oKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgLy8ga2VlcCBkZWZhdWx0IHZhbHVlcyBpbiBzeW5jIHdpdGggQGRlZmF1bHQgdGFncyBpbiBQYWdpbmF0aW9uLnByb3BUeXBlc1xuICB2YXIgX3Byb3BzJGJvdW5kYXJ5Q291bnQgPSBwcm9wcy5ib3VuZGFyeUNvdW50LFxuICAgICAgYm91bmRhcnlDb3VudCA9IF9wcm9wcyRib3VuZGFyeUNvdW50ID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJGJvdW5kYXJ5Q291bnQsXG4gICAgICBfcHJvcHMkY29tcG9uZW50TmFtZSA9IHByb3BzLmNvbXBvbmVudE5hbWUsXG4gICAgICBjb21wb25lbnROYW1lID0gX3Byb3BzJGNvbXBvbmVudE5hbWUgPT09IHZvaWQgMCA/ICd1c2VQYWdpbmF0aW9uJyA6IF9wcm9wcyRjb21wb25lbnROYW1lLFxuICAgICAgX3Byb3BzJGNvdW50ID0gcHJvcHMuY291bnQsXG4gICAgICBjb3VudCA9IF9wcm9wcyRjb3VudCA9PT0gdm9pZCAwID8gMSA6IF9wcm9wcyRjb3VudCxcbiAgICAgIF9wcm9wcyRkZWZhdWx0UGFnZSA9IHByb3BzLmRlZmF1bHRQYWdlLFxuICAgICAgZGVmYXVsdFBhZ2UgPSBfcHJvcHMkZGVmYXVsdFBhZ2UgPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkZGVmYXVsdFBhZ2UsXG4gICAgICBfcHJvcHMkZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkID0gX3Byb3BzJGRpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZCxcbiAgICAgIF9wcm9wcyRoaWRlTmV4dEJ1dHRvbiA9IHByb3BzLmhpZGVOZXh0QnV0dG9uLFxuICAgICAgaGlkZU5leHRCdXR0b24gPSBfcHJvcHMkaGlkZU5leHRCdXR0b24gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGhpZGVOZXh0QnV0dG9uLFxuICAgICAgX3Byb3BzJGhpZGVQcmV2QnV0dG9uID0gcHJvcHMuaGlkZVByZXZCdXR0b24sXG4gICAgICBoaWRlUHJldkJ1dHRvbiA9IF9wcm9wcyRoaWRlUHJldkJ1dHRvbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaGlkZVByZXZCdXR0b24sXG4gICAgICBoYW5kbGVDaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIHBhZ2VQcm9wID0gcHJvcHMucGFnZSxcbiAgICAgIF9wcm9wcyRzaG93Rmlyc3RCdXR0byA9IHByb3BzLnNob3dGaXJzdEJ1dHRvbixcbiAgICAgIHNob3dGaXJzdEJ1dHRvbiA9IF9wcm9wcyRzaG93Rmlyc3RCdXR0byA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkc2hvd0ZpcnN0QnV0dG8sXG4gICAgICBfcHJvcHMkc2hvd0xhc3RCdXR0b24gPSBwcm9wcy5zaG93TGFzdEJ1dHRvbixcbiAgICAgIHNob3dMYXN0QnV0dG9uID0gX3Byb3BzJHNob3dMYXN0QnV0dG9uID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRzaG93TGFzdEJ1dHRvbixcbiAgICAgIF9wcm9wcyRzaWJsaW5nQ291bnQgPSBwcm9wcy5zaWJsaW5nQ291bnQsXG4gICAgICBzaWJsaW5nQ291bnQgPSBfcHJvcHMkc2libGluZ0NvdW50ID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJHNpYmxpbmdDb3VudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJib3VuZGFyeUNvdW50XCIsIFwiY29tcG9uZW50TmFtZVwiLCBcImNvdW50XCIsIFwiZGVmYXVsdFBhZ2VcIiwgXCJkaXNhYmxlZFwiLCBcImhpZGVOZXh0QnV0dG9uXCIsIFwiaGlkZVByZXZCdXR0b25cIiwgXCJvbkNoYW5nZVwiLCBcInBhZ2VcIiwgXCJzaG93Rmlyc3RCdXR0b25cIiwgXCJzaG93TGFzdEJ1dHRvblwiLCBcInNpYmxpbmdDb3VudFwiXSk7XG5cbiAgdmFyIF91c2VDb250cm9sbGVkID0gdXNlQ29udHJvbGxlZCh7XG4gICAgY29udHJvbGxlZDogcGFnZVByb3AsXG4gICAgZGVmYXVsdDogZGVmYXVsdFBhZ2UsXG4gICAgbmFtZTogY29tcG9uZW50TmFtZSxcbiAgICBzdGF0ZTogJ3BhZ2UnXG4gIH0pLFxuICAgICAgX3VzZUNvbnRyb2xsZWQyID0gX3NsaWNlZFRvQXJyYXkoX3VzZUNvbnRyb2xsZWQsIDIpLFxuICAgICAgcGFnZSA9IF91c2VDb250cm9sbGVkMlswXSxcbiAgICAgIHNldFBhZ2VTdGF0ZSA9IF91c2VDb250cm9sbGVkMlsxXTtcblxuICB2YXIgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCwgdmFsdWUpIHtcbiAgICBpZiAoIXBhZ2VQcm9wKSB7XG4gICAgICBzZXRQYWdlU3RhdGUodmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGVDaGFuZ2UpIHtcbiAgICAgIGhhbmRsZUNoYW5nZShldmVudCwgdmFsdWUpO1xuICAgIH1cbiAgfTsgLy8gaHR0cHM6Ly9kZXYudG8vbmFtaXJzYWIvY29tbWVudC8yMDUwXG5cblxuICB2YXIgcmFuZ2UgPSBmdW5jdGlvbiByYW5nZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIGxlbmd0aCA9IGVuZCAtIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7XG4gICAgICBsZW5ndGg6IGxlbmd0aFxuICAgIH0sIGZ1bmN0aW9uIChfLCBpKSB7XG4gICAgICByZXR1cm4gc3RhcnQgKyBpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBzdGFydFBhZ2VzID0gcmFuZ2UoMSwgTWF0aC5taW4oYm91bmRhcnlDb3VudCwgY291bnQpKTtcbiAgdmFyIGVuZFBhZ2VzID0gcmFuZ2UoTWF0aC5tYXgoY291bnQgLSBib3VuZGFyeUNvdW50ICsgMSwgYm91bmRhcnlDb3VudCArIDEpLCBjb3VudCk7XG4gIHZhciBzaWJsaW5nc1N0YXJ0ID0gTWF0aC5tYXgoTWF0aC5taW4oIC8vIE5hdHVyYWwgc3RhcnRcbiAgcGFnZSAtIHNpYmxpbmdDb3VudCwgLy8gTG93ZXIgYm91bmRhcnkgd2hlbiBwYWdlIGlzIGhpZ2hcbiAgY291bnQgLSBib3VuZGFyeUNvdW50IC0gc2libGluZ0NvdW50ICogMiAtIDEpLCAvLyBHcmVhdGVyIHRoYW4gc3RhcnRQYWdlc1xuICBib3VuZGFyeUNvdW50ICsgMik7XG4gIHZhciBzaWJsaW5nc0VuZCA9IE1hdGgubWluKE1hdGgubWF4KCAvLyBOYXR1cmFsIGVuZFxuICBwYWdlICsgc2libGluZ0NvdW50LCAvLyBVcHBlciBib3VuZGFyeSB3aGVuIHBhZ2UgaXMgbG93XG4gIGJvdW5kYXJ5Q291bnQgKyBzaWJsaW5nQ291bnQgKiAyICsgMiksIC8vIExlc3MgdGhhbiBlbmRQYWdlc1xuICBlbmRQYWdlc1swXSAtIDIpOyAvLyBCYXNpYyBsaXN0IG9mIGl0ZW1zIHRvIHJlbmRlclxuICAvLyBlLmcuIGl0ZW1MaXN0ID0gWydmaXJzdCcsICdwcmV2aW91cycsIDEsICdlbGxpcHNpcycsIDQsIDUsIDYsICdlbGxpcHNpcycsIDEwLCAnbmV4dCcsICdsYXN0J11cblxuICB2YXIgaXRlbUxpc3QgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHNob3dGaXJzdEJ1dHRvbiA/IFsnZmlyc3QnXSA6IFtdKSwgX3RvQ29uc3VtYWJsZUFycmF5KGhpZGVQcmV2QnV0dG9uID8gW10gOiBbJ3ByZXZpb3VzJ10pLCBfdG9Db25zdW1hYmxlQXJyYXkoc3RhcnRQYWdlcyksIF90b0NvbnN1bWFibGVBcnJheShzaWJsaW5nc1N0YXJ0ID4gYm91bmRhcnlDb3VudCArIDIgPyBbJ3N0YXJ0LWVsbGlwc2lzJ10gOiBib3VuZGFyeUNvdW50ICsgMSA8IGNvdW50IC0gYm91bmRhcnlDb3VudCA/IFtib3VuZGFyeUNvdW50ICsgMV0gOiBbXSksIF90b0NvbnN1bWFibGVBcnJheShyYW5nZShzaWJsaW5nc1N0YXJ0LCBzaWJsaW5nc0VuZCkpLCBfdG9Db25zdW1hYmxlQXJyYXkoc2libGluZ3NFbmQgPCBjb3VudCAtIGJvdW5kYXJ5Q291bnQgLSAxID8gWydlbmQtZWxsaXBzaXMnXSA6IGNvdW50IC0gYm91bmRhcnlDb3VudCA+IGJvdW5kYXJ5Q291bnQgPyBbY291bnQgLSBib3VuZGFyeUNvdW50XSA6IFtdKSwgX3RvQ29uc3VtYWJsZUFycmF5KGVuZFBhZ2VzKSwgX3RvQ29uc3VtYWJsZUFycmF5KGhpZGVOZXh0QnV0dG9uID8gW10gOiBbJ25leHQnXSksIF90b0NvbnN1bWFibGVBcnJheShzaG93TGFzdEJ1dHRvbiA/IFsnbGFzdCddIDogW10pKTsgLy8gTWFwIHRoZSBidXR0b24gdHlwZSB0byBpdHMgcGFnZSBudW1iZXJcblxuICB2YXIgYnV0dG9uUGFnZSA9IGZ1bmN0aW9uIGJ1dHRvblBhZ2UodHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZmlyc3QnOlxuICAgICAgICByZXR1cm4gMTtcblxuICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICByZXR1cm4gcGFnZSAtIDE7XG5cbiAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICByZXR1cm4gcGFnZSArIDE7XG5cbiAgICAgIGNhc2UgJ2xhc3QnOlxuICAgICAgICByZXR1cm4gY291bnQ7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTsgLy8gQ29udmVydCB0aGUgYmFzaWMgaXRlbSBsaXN0IHRvIFBhZ2luYXRpb25JdGVtIHByb3BzIG9iamVjdHNcblxuXG4gIHZhciBpdGVtcyA9IGl0ZW1MaXN0Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ251bWJlcicgPyB7XG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGhhbmRsZUNsaWNrKGV2ZW50LCBpdGVtKTtcbiAgICAgIH0sXG4gICAgICB0eXBlOiAncGFnZScsXG4gICAgICBwYWdlOiBpdGVtLFxuICAgICAgc2VsZWN0ZWQ6IGl0ZW0gPT09IHBhZ2UsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAnYXJpYS1jdXJyZW50JzogaXRlbSA9PT0gcGFnZSA/ICd0cnVlJyA6IHVuZGVmaW5lZFxuICAgIH0gOiB7XG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGhhbmRsZUNsaWNrKGV2ZW50LCBidXR0b25QYWdlKGl0ZW0pKTtcbiAgICAgIH0sXG4gICAgICB0eXBlOiBpdGVtLFxuICAgICAgcGFnZTogYnV0dG9uUGFnZShpdGVtKSxcbiAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB8fCBpdGVtLmluZGV4T2YoJ2VsbGlwc2lzJykgPT09IC0xICYmIChpdGVtID09PSAnbmV4dCcgfHwgaXRlbSA9PT0gJ2xhc3QnID8gcGFnZSA+PSBjb3VudCA6IHBhZ2UgPD0gMSlcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBpdGVtczogaXRlbXNcbiAgfSwgb3RoZXIpO1xufSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IGZhZGUsIHVzZVRoZW1lLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xuaW1wb3J0IEZpcnN0UGFnZUljb24gZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0ZpcnN0UGFnZSc7XG5pbXBvcnQgTGFzdFBhZ2VJY29uIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9MYXN0UGFnZSc7XG5pbXBvcnQgTmF2aWdhdGVCZWZvcmVJY29uIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9OYXZpZ2F0ZUJlZm9yZSc7XG5pbXBvcnQgTmF2aWdhdGVOZXh0SWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvTmF2aWdhdGVOZXh0JztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91dGlscyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDogX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTIsIHtcbiAgICAgIGJvcmRlclJhZGl1czogMzIgLyAyLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWluV2lkdGg6IDMyLFxuICAgICAgaGVpZ2h0OiAzMixcbiAgICAgIHBhZGRpbmc6ICcwIDZweCcsXG4gICAgICBtYXJnaW46ICcwIDNweCcsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHR5cGU9XCJwYWdlXCJgLiAqL1xuICAgIHBhZ2U6IHtcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ2NvbG9yJywgJ2JhY2tncm91bmQtY29sb3InXSwge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRcbiAgICAgIH0pLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXIsXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzVmlzaWJsZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5mb2N1c1xuICAgICAgfSxcbiAgICAgICcmJHNlbGVjdGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLnNlbGVjdGVkLFxuICAgICAgICAnJjpob3ZlciwgJiRmb2N1c1Zpc2libGUnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuYWN0aW9uLnNlbGVjdGVkLCB0aGVtZS5wYWxldHRlLmFjdGlvbi5zZWxlY3RlZE9wYWNpdHkgKyB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3Zlck9wYWNpdHkpLFxuICAgICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5zZWxlY3RlZFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWQsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5zZWxlY3RlZFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIG9wYWNpdHk6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkT3BhY2l0eVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJzbWFsbFwiYC4gKi9cbiAgICBzaXplU21hbGw6IHtcbiAgICAgIG1pbldpZHRoOiAyNixcbiAgICAgIGhlaWdodDogMjYsXG4gICAgICBib3JkZXJSYWRpdXM6IDI2IC8gMixcbiAgICAgIG1hcmdpbjogJzAgMXB4JyxcbiAgICAgIHBhZGRpbmc6ICcwIDRweCcsXG4gICAgICAnJiAkaWNvbic6IHtcbiAgICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxOClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzaXplPVwibGFyZ2VcImAuICovXG4gICAgc2l6ZUxhcmdlOiB7XG4gICAgICBtaW5XaWR0aDogNDAsXG4gICAgICBoZWlnaHQ6IDQwLFxuICAgICAgYm9yZGVyUmFkaXVzOiA0MCAvIDIsXG4gICAgICBwYWRkaW5nOiAnMCAxMHB4JyxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTUpLFxuICAgICAgJyYgJGljb24nOiB7XG4gICAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMjIpXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJ0ZXh0XCJgIGFuZCBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIHRleHRQcmltYXJ5OiB7XG4gICAgICAnJiRzZWxlY3RlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgICcmOmhvdmVyLCAmJGZvY3VzVmlzaWJsZSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInRleHRcImAgYW5kIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICB0ZXh0U2Vjb25kYXJ5OiB7XG4gICAgICAnJiRzZWxlY3RlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgICAnJjpob3ZlciwgJiRmb2N1c1Zpc2libGUnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxuICAgICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBvdXRsaW5lZD1cInRydWVcImAuICovXG4gICAgb3V0bGluZWQ6IHtcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/ICdyZ2JhKDAsIDAsIDAsIDAuMjMpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjMpJyksXG4gICAgICAnJiRzZWxlY3RlZCc6IHtcbiAgICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRCYWNrZ3JvdW5kKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYCBhbmQgYGNvbG9yPVwicHJpbWFyeVwiYC4gKi9cbiAgICBvdXRsaW5lZFByaW1hcnk6IHtcbiAgICAgICcmJHNlbGVjdGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIuY29uY2F0KGZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIDAuNSkpLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIHRoZW1lLnBhbGV0dGUuYWN0aW9uLmFjdGl2YXRlZE9wYWNpdHkpLFxuICAgICAgICAnJjpob3ZlciwgJiRmb2N1c1Zpc2libGUnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCB0aGVtZS5wYWxldHRlLmFjdGlvbi5hY3RpdmF0ZWRPcGFjaXR5ICsgdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXJPcGFjaXR5KSxcbiAgICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgb3V0bGluZWRTZWNvbmRhcnk6IHtcbiAgICAgICcmJHNlbGVjdGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQoZmFkZSh0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLCAwLjUpKSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sIHRoZW1lLnBhbGV0dGUuYWN0aW9uLmFjdGl2YXRlZE9wYWNpdHkpLFxuICAgICAgICAnJjpob3ZlciwgJiRmb2N1c1Zpc2libGUnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sIHRoZW1lLnBhbGV0dGUuYWN0aW9uLmFjdGl2YXRlZE9wYWNpdHkgKyB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3Zlck9wYWNpdHkpLFxuICAgICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGByb3VuZGVkPVwidHJ1ZVwiYC4gKi9cbiAgICByb3VuZGVkOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1c1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB0eXBlPVwic3RhcnQtZWxsaXBzaXNcImAgb3IgYHR5cGU9XCJlbmQtZWxsaXBzaXNcImAuICovXG4gICAgZWxsaXBzaXM6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIG9wYWNpdHk6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkT3BhY2l0eVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGtleWJvYXJkIGZvY3VzZWQuICovXG4gICAgZm9jdXNWaXNpYmxlOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2VsZWN0ZWQ9e3RydWV9YC4gKi9cbiAgICBzZWxlY3RlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBlbGVtZW50LiAqL1xuICAgIGljb246IHtcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMjApLFxuICAgICAgbWFyZ2luOiAnMCAtOHB4J1xuICAgIH1cbiAgfTtcbn07XG52YXIgUGFnaW5hdGlvbkl0ZW0gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQYWdpbmF0aW9uSXRlbShwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY29sb3IgPSBfcHJvcHMkY29sb3IgPT09IHZvaWQgMCA/ICdzdGFuZGFyZCcgOiBfcHJvcHMkY29sb3IsXG4gICAgICBjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBfcHJvcHMkZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkID0gX3Byb3BzJGRpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZCxcbiAgICAgIHBhZ2UgPSBwcm9wcy5wYWdlLFxuICAgICAgX3Byb3BzJHNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWQsXG4gICAgICBzZWxlY3RlZCA9IF9wcm9wcyRzZWxlY3RlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkc2VsZWN0ZWQsXG4gICAgICBfcHJvcHMkc2hhcGUgPSBwcm9wcy5zaGFwZSxcbiAgICAgIHNoYXBlID0gX3Byb3BzJHNoYXBlID09PSB2b2lkIDAgPyAncm91bmQnIDogX3Byb3BzJHNoYXBlLFxuICAgICAgX3Byb3BzJHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc2l6ZSA9IF9wcm9wcyRzaXplID09PSB2b2lkIDAgPyAnbWVkaXVtJyA6IF9wcm9wcyRzaXplLFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAncGFnZScgOiBfcHJvcHMkdHlwZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3RleHQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZWRcIiwgXCJwYWdlXCIsIFwic2VsZWN0ZWRcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJ0eXBlXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIG5vcm1hbGl6ZWRJY29ucyA9IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyB7XG4gICAgcHJldmlvdXM6IE5hdmlnYXRlTmV4dEljb24sXG4gICAgbmV4dDogTmF2aWdhdGVCZWZvcmVJY29uLFxuICAgIGxhc3Q6IEZpcnN0UGFnZUljb24sXG4gICAgZmlyc3Q6IExhc3RQYWdlSWNvblxuICB9IDoge1xuICAgIHByZXZpb3VzOiBOYXZpZ2F0ZUJlZm9yZUljb24sXG4gICAgbmV4dDogTmF2aWdhdGVOZXh0SWNvbixcbiAgICBmaXJzdDogRmlyc3RQYWdlSWNvbixcbiAgICBsYXN0OiBMYXN0UGFnZUljb25cbiAgfTtcbiAgdmFyIEljb24gPSBub3JtYWxpemVkSWNvbnNbdHlwZV07XG4gIHJldHVybiB0eXBlID09PSAnc3RhcnQtZWxsaXBzaXMnIHx8IHR5cGUgPT09ICdlbmQtZWxsaXBzaXMnID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXMuZWxsaXBzaXMsIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIHNpemUgIT09ICdtZWRpdW0nICYmIGNsYXNzZXNbXCJzaXplXCIuY29uY2F0KGNhcGl0YWxpemUoc2l6ZSkpXSlcbiAgfSwgXCJcXHUyMDI2XCIpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uQmFzZSwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU6IGNsYXNzZXMuZm9jdXNWaXNpYmxlLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXMucGFnZSwgY2xhc3Nlc1t2YXJpYW50XSwgY2xhc3Nlc1tzaGFwZV0sIGNsYXNzTmFtZSwgY29sb3IgIT09ICdzdGFuZGFyZCcgJiYgY2xhc3Nlc1tcIlwiLmNvbmNhdCh2YXJpYW50KS5jb25jYXQoY2FwaXRhbGl6ZShjb2xvcikpXSwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgc2VsZWN0ZWQgJiYgY2xhc3Nlcy5zZWxlY3RlZCwgc2l6ZSAhPT0gJ21lZGl1bScgJiYgY2xhc3Nlc1tcInNpemVcIi5jb25jYXQoY2FwaXRhbGl6ZShzaXplKSldKVxuICB9LCBvdGhlciksIHR5cGUgPT09ICdwYWdlJyAmJiBwYWdlLCBJY29uID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pY29uXG4gIH0pIDogbnVsbCk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFBhZ2luYXRpb25JdGVtLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgYWN0aXZlIGNvbG9yLlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3N0YW5kYXJkJywgJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaXRlbSB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCBwYWdlIG51bWJlci5cbiAgICovXG4gIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCB0aGUgcGFnaW5hdGlvbiBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgc2hhcGUgb2YgdGhlIHBhZ2luYXRpb24gaXRlbS5cbiAgICovXG4gIHNoYXBlOiBQcm9wVHlwZXMub25lT2YoWydyb3VuZCcsICdyb3VuZGVkJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgcGFnaW5hdGlvbiBpdGVtLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiBwYWdpbmF0aW9uIGl0ZW0uXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydwYWdlJywgJ2ZpcnN0JywgJ2xhc3QnLCAnbmV4dCcsICdwcmV2aW91cycsICdzdGFydC1lbGxpcHNpcycsICdlbmQtZWxsaXBzaXMnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBwYWdpbmF0aW9uIGl0ZW0gdmFyaWFudC5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3RleHQnLCAnb3V0bGluZWQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGFnaW5hdGlvbkl0ZW0nXG59KShQYWdpbmF0aW9uSXRlbSk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUGFnaW5hdGlvbkl0ZW0nOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHsgdXNlVGhlbWUsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgdXNlRm9ya1JlZiwgdXNlSXNGb2N1c1Zpc2libGUsIHVzZUNvbnRyb2xsZWQsIHVuc3RhYmxlX3VzZUlkIGFzIHVzZUlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuaW1wb3J0IFN0YXIgZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL1N0YXInO1xuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIGlmICh2YWx1ZSA+IG1heCkge1xuICAgIHJldHVybiBtYXg7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldERlY2ltYWxQcmVjaXNpb24obnVtKSB7XG4gIHZhciBkZWNpbWFsUGFydCA9IG51bS50b1N0cmluZygpLnNwbGl0KCcuJylbMV07XG4gIHJldHVybiBkZWNpbWFsUGFydCA/IGRlY2ltYWxQYXJ0Lmxlbmd0aCA6IDA7XG59XG5cbmZ1bmN0aW9uIHJvdW5kVmFsdWVUb1ByZWNpc2lvbih2YWx1ZSwgcHJlY2lzaW9uKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdmFyIG5lYXJlc3QgPSBNYXRoLnJvdW5kKHZhbHVlIC8gcHJlY2lzaW9uKSAqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE51bWJlcihuZWFyZXN0LnRvRml4ZWQoZ2V0RGVjaW1hbFByZWNpc2lvbihwcmVjaXNpb24pKSk7XG59XG5cbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDI0KSxcbiAgICAgIGNvbG9yOiAnI2ZmYjQwMCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJiRmb2N1c1Zpc2libGUgJGljb25BY3RpdmUnOiB7XG4gICAgICAgIG91dGxpbmU6ICcxcHggc29saWQgIzk5OSdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2l6ZT1cInNtYWxsXCJgLiAqL1xuICAgIHNpemVTbWFsbDoge1xuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxOClcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2l6ZT1cImxhcmdlXCJgLiAqL1xuICAgIHNpemVMYXJnZToge1xuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgzMClcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcmVhZE9ubHk9e3RydWV9YC4gKi9cbiAgICByZWFkT25seToge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBrZXlib2FyZCBmb2N1c2VkLiAqL1xuICAgIGZvY3VzVmlzaWJsZToge30sXG5cbiAgICAvKiBWaXN1YWxseSBoaWRlIGFuIGVsZW1lbnQuICovXG4gICAgdmlzdWFsbHloaWRkZW46IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICAgIGhlaWdodDogMSxcbiAgICAgIG1hcmdpbjogLTEsXG4gICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAyMCxcbiAgICAgIHdpZHRoOiAxXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBwcmlzdGluZSBsYWJlbC4gKi9cbiAgICBwcmlzdGluZToge1xuICAgICAgJ2lucHV0OmZvY3VzICsgJic6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBvdXRsaW5lOiAnMXB4IHNvbGlkICM5OTknLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBsYWJlbCBlbGVtZW50cy4gKi9cbiAgICBsYWJlbDoge1xuICAgICAgY3Vyc29yOiAnaW5oZXJpdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gd3JhcHBpbmcgZWxlbWVudHMuICovXG4gICAgaWNvbjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVzdFxuICAgICAgfSksXG4gICAgICAvLyBGaXggbW91c2VMZWF2ZSBpc3N1ZS5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNDQ5MlxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpY29uIHdyYXBwaW5nIGVsZW1lbnRzIHdoZW4gZW1wdHkuICovXG4gICAgaWNvbkVtcHR5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gd3JhcHBpbmcgZWxlbWVudHMgd2hlbiBmaWxsZWQuICovXG4gICAgaWNvbkZpbGxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiB3cmFwcGluZyBlbGVtZW50cyB3aGVuIGhvdmVyLiAqL1xuICAgIGljb25Ib3Zlcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiB3cmFwcGluZyBlbGVtZW50cyB3aGVuIGZvY3VzLiAqL1xuICAgIGljb25Gb2N1czoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiB3cmFwcGluZyBlbGVtZW50cyB3aGVuIGFjdGl2ZS4gKi9cbiAgICBpY29uQWN0aXZlOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiB3cmFwcGluZyBlbGVtZW50cyB3aGVuIGRlY2ltYWxzIGFyZSBuZWNlc3NhcnkuICovXG4gICAgZGVjaW1hbDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiBJY29uQ29udGFpbmVyKHByb3BzKSB7XG4gIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcInZhbHVlXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG90aGVyKTtcbn1cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gSWNvbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG52YXIgZGVmYXVsdEljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdGFyLCB7XG4gIGZvbnRTaXplOiBcImluaGVyaXRcIlxufSk7XG5cbmZ1bmN0aW9uIGRlZmF1bHRMYWJlbFRleHQodmFsdWUpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHZhbHVlLCBcIiBTdGFyXCIpLmNvbmNhdCh2YWx1ZSAhPT0gMSA/ICdzJyA6ICcnKTtcbn1cblxudmFyIFJhdGluZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFJhdGluZyhwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUgPSBfcHJvcHMkZGVmYXVsdFZhbHVlID09PSB2b2lkIDAgPyBudWxsIDogX3Byb3BzJGRlZmF1bHRWYWx1ZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgZW1wdHlJY29uID0gcHJvcHMuZW1wdHlJY29uLFxuICAgICAgX3Byb3BzJGVtcHR5TGFiZWxUZXh0ID0gcHJvcHMuZW1wdHlMYWJlbFRleHQsXG4gICAgICBlbXB0eUxhYmVsVGV4dCA9IF9wcm9wcyRlbXB0eUxhYmVsVGV4dCA9PT0gdm9pZCAwID8gJ0VtcHR5JyA6IF9wcm9wcyRlbXB0eUxhYmVsVGV4dCxcbiAgICAgIF9wcm9wcyRnZXRMYWJlbFRleHQgPSBwcm9wcy5nZXRMYWJlbFRleHQsXG4gICAgICBnZXRMYWJlbFRleHQgPSBfcHJvcHMkZ2V0TGFiZWxUZXh0ID09PSB2b2lkIDAgPyBkZWZhdWx0TGFiZWxUZXh0IDogX3Byb3BzJGdldExhYmVsVGV4dCxcbiAgICAgIF9wcm9wcyRpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIGljb24gPSBfcHJvcHMkaWNvbiA9PT0gdm9pZCAwID8gZGVmYXVsdEljb24gOiBfcHJvcHMkaWNvbixcbiAgICAgIF9wcm9wcyRJY29uQ29udGFpbmVyQyA9IHByb3BzLkljb25Db250YWluZXJDb21wb25lbnQsXG4gICAgICBJY29uQ29udGFpbmVyQ29tcG9uZW50ID0gX3Byb3BzJEljb25Db250YWluZXJDID09PSB2b2lkIDAgPyBJY29uQ29udGFpbmVyIDogX3Byb3BzJEljb25Db250YWluZXJDLFxuICAgICAgX3Byb3BzJG1heCA9IHByb3BzLm1heCxcbiAgICAgIG1heCA9IF9wcm9wcyRtYXggPT09IHZvaWQgMCA/IDUgOiBfcHJvcHMkbWF4LFxuICAgICAgbmFtZVByb3AgPSBwcm9wcy5uYW1lLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uQ2hhbmdlQWN0aXZlID0gcHJvcHMub25DaGFuZ2VBY3RpdmUsXG4gICAgICBvbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICBvbk1vdXNlTW92ZSA9IHByb3BzLm9uTW91c2VNb3ZlLFxuICAgICAgX3Byb3BzJHByZWNpc2lvbiA9IHByb3BzLnByZWNpc2lvbixcbiAgICAgIHByZWNpc2lvbiA9IF9wcm9wcyRwcmVjaXNpb24gPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkcHJlY2lzaW9uLFxuICAgICAgX3Byb3BzJHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksXG4gICAgICByZWFkT25seSA9IF9wcm9wcyRyZWFkT25seSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkcmVhZE9ubHksXG4gICAgICBfcHJvcHMkc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzaXplID0gX3Byb3BzJHNpemUgPT09IHZvaWQgMCA/ICdtZWRpdW0nIDogX3Byb3BzJHNpemUsXG4gICAgICB2YWx1ZVByb3AgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiZGlzYWJsZWRcIiwgXCJlbXB0eUljb25cIiwgXCJlbXB0eUxhYmVsVGV4dFwiLCBcImdldExhYmVsVGV4dFwiLCBcImljb25cIiwgXCJJY29uQ29udGFpbmVyQ29tcG9uZW50XCIsIFwibWF4XCIsIFwibmFtZVwiLCBcIm9uQ2hhbmdlXCIsIFwib25DaGFuZ2VBY3RpdmVcIiwgXCJvbk1vdXNlTGVhdmVcIiwgXCJvbk1vdXNlTW92ZVwiLCBcInByZWNpc2lvblwiLCBcInJlYWRPbmx5XCIsIFwic2l6ZVwiLCBcInZhbHVlXCJdKTtcblxuICB2YXIgbmFtZSA9IHVzZUlkKG5hbWVQcm9wKTtcblxuICB2YXIgX3VzZUNvbnRyb2xsZWQgPSB1c2VDb250cm9sbGVkKHtcbiAgICBjb250cm9sbGVkOiB2YWx1ZVByb3AsXG4gICAgZGVmYXVsdDogZGVmYXVsdFZhbHVlLFxuICAgIG5hbWU6ICdSYXRpbmcnXG4gIH0pLFxuICAgICAgX3VzZUNvbnRyb2xsZWQyID0gX3NsaWNlZFRvQXJyYXkoX3VzZUNvbnRyb2xsZWQsIDIpLFxuICAgICAgdmFsdWVEZXJpdmVkID0gX3VzZUNvbnRyb2xsZWQyWzBdLFxuICAgICAgc2V0VmFsdWVTdGF0ZSA9IF91c2VDb250cm9sbGVkMlsxXTtcblxuICB2YXIgdmFsdWVSb3VuZGVkID0gcm91bmRWYWx1ZVRvUHJlY2lzaW9uKHZhbHVlRGVyaXZlZCwgcHJlY2lzaW9uKTtcbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGhvdmVyOiAtMSxcbiAgICBmb2N1czogLTFcbiAgfSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgaG92ZXIgPSBfUmVhY3QkdXNlU3RhdGUkLmhvdmVyLFxuICAgICAgZm9jdXMgPSBfUmVhY3QkdXNlU3RhdGUkLmZvY3VzLFxuICAgICAgc2V0U3RhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIHZhbHVlID0gdmFsdWVSb3VuZGVkO1xuXG4gIGlmIChob3ZlciAhPT0gLTEpIHtcbiAgICB2YWx1ZSA9IGhvdmVyO1xuICB9XG5cbiAgaWYgKGZvY3VzICE9PSAtMSkge1xuICAgIHZhbHVlID0gZm9jdXM7XG4gIH1cblxuICB2YXIgX3VzZUlzRm9jdXNWaXNpYmxlID0gdXNlSXNGb2N1c1Zpc2libGUoKSxcbiAgICAgIGlzRm9jdXNWaXNpYmxlID0gX3VzZUlzRm9jdXNWaXNpYmxlLmlzRm9jdXNWaXNpYmxlLFxuICAgICAgb25CbHVyVmlzaWJsZSA9IF91c2VJc0ZvY3VzVmlzaWJsZS5vbkJsdXJWaXNpYmxlLFxuICAgICAgZm9jdXNWaXNpYmxlUmVmID0gX3VzZUlzRm9jdXNWaXNpYmxlLnJlZjtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIGZvY3VzVmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRGb2N1c1Zpc2libGUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciByb290UmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBoYW5kbGVGb2N1c1JlZiA9IHVzZUZvcmtSZWYoZm9jdXNWaXNpYmxlUmVmLCByb290UmVmKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYoaGFuZGxlRm9jdXNSZWYsIHJlZik7XG5cbiAgdmFyIGhhbmRsZU1vdXNlTW92ZSA9IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShldmVudCkge1xuICAgIGlmIChvbk1vdXNlTW92ZSkge1xuICAgICAgb25Nb3VzZU1vdmUoZXZlbnQpO1xuICAgIH1cblxuICAgIHZhciByb290Tm9kZSA9IHJvb3RSZWYuY3VycmVudDtcblxuICAgIHZhciBfcm9vdE5vZGUkZ2V0Qm91bmRpbmcgPSByb290Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgcmlnaHQgPSBfcm9vdE5vZGUkZ2V0Qm91bmRpbmcucmlnaHQsXG4gICAgICAgIGxlZnQgPSBfcm9vdE5vZGUkZ2V0Qm91bmRpbmcubGVmdDtcblxuICAgIHZhciBfcm9vdE5vZGUkZmlyc3RDaGlsZCQgPSByb290Tm9kZS5maXJzdENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB3aWR0aCA9IF9yb290Tm9kZSRmaXJzdENoaWxkJC53aWR0aDtcblxuICAgIHZhciBwZXJjZW50O1xuXG4gICAgaWYgKHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIHBlcmNlbnQgPSAocmlnaHQgLSBldmVudC5jbGllbnRYKSAvICh3aWR0aCAqIG1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlcmNlbnQgPSAoZXZlbnQuY2xpZW50WCAtIGxlZnQpIC8gKHdpZHRoICogbWF4KTtcbiAgICB9XG5cbiAgICB2YXIgbmV3SG92ZXIgPSByb3VuZFZhbHVlVG9QcmVjaXNpb24obWF4ICogcGVyY2VudCArIHByZWNpc2lvbiAvIDIsIHByZWNpc2lvbik7XG4gICAgbmV3SG92ZXIgPSBjbGFtcChuZXdIb3ZlciwgcHJlY2lzaW9uLCBtYXgpO1xuICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2KSB7XG4gICAgICByZXR1cm4gcHJldi5ob3ZlciA9PT0gbmV3SG92ZXIgJiYgcHJldi5mb2N1cyA9PT0gbmV3SG92ZXIgPyBwcmV2IDoge1xuICAgICAgICBob3ZlcjogbmV3SG92ZXIsXG4gICAgICAgIGZvY3VzOiBuZXdIb3ZlclxuICAgICAgfTtcbiAgICB9KTtcbiAgICBzZXRGb2N1c1Zpc2libGUoZmFsc2UpO1xuXG4gICAgaWYgKG9uQ2hhbmdlQWN0aXZlICYmIGhvdmVyICE9PSBuZXdIb3Zlcikge1xuICAgICAgb25DaGFuZ2VBY3RpdmUoZXZlbnQsIG5ld0hvdmVyKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKGV2ZW50KSB7XG4gICAgaWYgKG9uTW91c2VMZWF2ZSkge1xuICAgICAgb25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICB9XG5cbiAgICB2YXIgbmV3SG92ZXIgPSAtMTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBob3ZlcjogbmV3SG92ZXIsXG4gICAgICBmb2N1czogbmV3SG92ZXJcbiAgICB9KTtcblxuICAgIGlmIChvbkNoYW5nZUFjdGl2ZSAmJiBob3ZlciAhPT0gbmV3SG92ZXIpIHtcbiAgICAgIG9uQ2hhbmdlQWN0aXZlKGV2ZW50LCBuZXdIb3Zlcik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0VmFsdWVTdGF0ZShuZXdWYWx1ZSk7XG5cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKGV2ZW50LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVDbGVhciA9IGZ1bmN0aW9uIGhhbmRsZUNsZWFyKGV2ZW50KSB7XG4gICAgLy8gSWdub3JlIGtleWJvYXJkIGV2ZW50c1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNzQwN1xuICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZSh7XG4gICAgICBob3ZlcjogLTEsXG4gICAgICBmb2N1czogLTFcbiAgICB9KTtcbiAgICBzZXRWYWx1ZVN0YXRlKG51bGwpO1xuXG4gICAgaWYgKG9uQ2hhbmdlICYmIHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LnZhbHVlKSA9PT0gdmFsdWVSb3VuZGVkKSB7XG4gICAgICBvbkNoYW5nZShldmVudCwgbnVsbCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gICAgaWYgKGlzRm9jdXNWaXNpYmxlKGV2ZW50KSkge1xuICAgICAgc2V0Rm9jdXNWaXNpYmxlKHRydWUpO1xuICAgIH1cblxuICAgIHZhciBuZXdGb2N1cyA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaG92ZXI6IHByZXYuaG92ZXIsXG4gICAgICAgIGZvY3VzOiBuZXdGb2N1c1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChvbkNoYW5nZUFjdGl2ZSAmJiBmb2N1cyAhPT0gbmV3Rm9jdXMpIHtcbiAgICAgIG9uQ2hhbmdlQWN0aXZlKGV2ZW50LCBuZXdGb2N1cyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVCbHVyID0gZnVuY3Rpb24gaGFuZGxlQmx1cihldmVudCkge1xuICAgIGlmIChob3ZlciAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZm9jdXNWaXNpYmxlICE9PSBmYWxzZSkge1xuICAgICAgc2V0Rm9jdXNWaXNpYmxlKGZhbHNlKTtcbiAgICAgIG9uQmx1clZpc2libGUoKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3Rm9jdXMgPSAtMTtcbiAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaG92ZXI6IHByZXYuaG92ZXIsXG4gICAgICAgIGZvY3VzOiBuZXdGb2N1c1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChvbkNoYW5nZUFjdGl2ZSAmJiBmb2N1cyAhPT0gbmV3Rm9jdXMpIHtcbiAgICAgIG9uQ2hhbmdlQWN0aXZlKGV2ZW50LCBuZXdGb2N1cyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpdGVtID0gZnVuY3Rpb24gaXRlbShzdGF0ZSwgbGFiZWxQcm9wcykge1xuICAgIHZhciBpZCA9IFwiXCIuY29uY2F0KG5hbWUsIFwiLVwiKS5jb25jYXQoU3RyaW5nKHN0YXRlLnZhbHVlKS5yZXBsYWNlKCcuJywgJy0nKSk7XG4gICAgdmFyIGNvbnRhaW5lciA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25Db250YWluZXJDb21wb25lbnQsIHtcbiAgICAgIHZhbHVlOiBzdGF0ZS52YWx1ZSxcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmljb24sIHN0YXRlLmZpbGxlZCA/IGNsYXNzZXMuaWNvbkZpbGxlZCA6IGNsYXNzZXMuaWNvbkVtcHR5LCBzdGF0ZS5ob3ZlciAmJiBjbGFzc2VzLmljb25Ib3Zlciwgc3RhdGUuZm9jdXMgJiYgY2xhc3Nlcy5pY29uRm9jdXMsIHN0YXRlLmFjdGl2ZSAmJiBjbGFzc2VzLmljb25BY3RpdmUpXG4gICAgfSwgZW1wdHlJY29uICYmICFzdGF0ZS5maWxsZWQgPyBlbXB0eUljb24gOiBpY29uKTtcblxuICAgIGlmIChyZWFkT25seSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogc3RhdGUudmFsdWVcbiAgICAgIH0sIGxhYmVsUHJvcHMpLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge1xuICAgICAga2V5OiBzdGF0ZS52YWx1ZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgX2V4dGVuZHMoe1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmxhYmVsLFxuICAgICAgaHRtbEZvcjogaWRcbiAgICB9LCBsYWJlbFByb3BzKSwgY29udGFpbmVyLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnZpc3VhbGx5aGlkZGVuXG4gICAgfSwgZ2V0TGFiZWxUZXh0KHN0YXRlLnZhbHVlKSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzLFxuICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsZWFyLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgdmFsdWU6IHN0YXRlLnZhbHVlLFxuICAgICAgaWQ6IGlkLFxuICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGNoZWNrZWQ6IHN0YXRlLmNoZWNrZWQsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMudmlzdWFsbHloaWRkZW5cbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBoYW5kbGVSZWYsXG4gICAgb25Nb3VzZU1vdmU6IGhhbmRsZU1vdXNlTW92ZSxcbiAgICBvbk1vdXNlTGVhdmU6IGhhbmRsZU1vdXNlTGVhdmUsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBzaXplICE9PSAnbWVkaXVtJyAmJiBjbGFzc2VzW1wic2l6ZVwiLmNvbmNhdChjYXBpdGFsaXplKHNpemUpKV0sIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIGZvY3VzVmlzaWJsZSAmJiBjbGFzc2VzLmZvY3VzVmlzaWJsZSwgcmVhZE9ubHkgJiYgY2xhc3Nlcy5yZWFkT25seSksXG4gICAgcm9sZTogcmVhZE9ubHkgPyAnaW1nJyA6IG51bGwsXG4gICAgXCJhcmlhLWxhYmVsXCI6IHJlYWRPbmx5ID8gZ2V0TGFiZWxUZXh0KHZhbHVlKSA6IG51bGxcbiAgfSwgb3RoZXIpLCBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpKS5tYXAoZnVuY3Rpb24gKF8sIGluZGV4KSB7XG4gICAgdmFyIGl0ZW1WYWx1ZSA9IGluZGV4ICsgMTtcblxuICAgIGlmIChwcmVjaXNpb24gPCAxKSB7XG4gICAgICB2YXIgaXRlbXMgPSBBcnJheS5mcm9tKG5ldyBBcnJheSgxIC8gcHJlY2lzaW9uKSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAga2V5OiBpdGVtVmFsdWUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmRlY2ltYWwsIGl0ZW1WYWx1ZSA9PT0gTWF0aC5jZWlsKHZhbHVlKSAmJiAoaG92ZXIgIT09IC0xIHx8IGZvY3VzICE9PSAtMSkgJiYgY2xhc3Nlcy5pY29uQWN0aXZlKVxuICAgICAgfSwgaXRlbXMubWFwKGZ1bmN0aW9uICgkLCBpbmRleERlY2ltYWwpIHtcbiAgICAgICAgdmFyIGl0ZW1EZWNpbWFsVmFsdWUgPSByb3VuZFZhbHVlVG9QcmVjaXNpb24oaXRlbVZhbHVlIC0gMSArIChpbmRleERlY2ltYWwgKyAxKSAqIHByZWNpc2lvbiwgcHJlY2lzaW9uKTtcbiAgICAgICAgcmV0dXJuIGl0ZW0oe1xuICAgICAgICAgIHZhbHVlOiBpdGVtRGVjaW1hbFZhbHVlLFxuICAgICAgICAgIGZpbGxlZDogaXRlbURlY2ltYWxWYWx1ZSA8PSB2YWx1ZSxcbiAgICAgICAgICBob3ZlcjogaXRlbURlY2ltYWxWYWx1ZSA8PSBob3ZlcixcbiAgICAgICAgICBmb2N1czogaXRlbURlY2ltYWxWYWx1ZSA8PSBmb2N1cyxcbiAgICAgICAgICBjaGVja2VkOiBpdGVtRGVjaW1hbFZhbHVlID09PSB2YWx1ZVJvdW5kZWRcbiAgICAgICAgfSwge1xuICAgICAgICAgIHN0eWxlOiBpdGVtcy5sZW5ndGggLSAxID09PSBpbmRleERlY2ltYWwgPyB7fSA6IHtcbiAgICAgICAgICAgIHdpZHRoOiBpdGVtRGVjaW1hbFZhbHVlID09PSB2YWx1ZSA/IFwiXCIuY29uY2F0KChpbmRleERlY2ltYWwgKyAxKSAqIHByZWNpc2lvbiAqIDEwMCwgXCIlXCIpIDogJzAlJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbSh7XG4gICAgICB2YWx1ZTogaXRlbVZhbHVlLFxuICAgICAgYWN0aXZlOiBpdGVtVmFsdWUgPT09IHZhbHVlICYmIChob3ZlciAhPT0gLTEgfHwgZm9jdXMgIT09IC0xKSxcbiAgICAgIGZpbGxlZDogaXRlbVZhbHVlIDw9IHZhbHVlLFxuICAgICAgaG92ZXI6IGl0ZW1WYWx1ZSA8PSBob3ZlcixcbiAgICAgIGZvY3VzOiBpdGVtVmFsdWUgPD0gZm9jdXMsXG4gICAgICBjaGVja2VkOiBpdGVtVmFsdWUgPT09IHZhbHVlUm91bmRlZFxuICAgIH0pO1xuICB9KSwgIXJlYWRPbmx5ICYmICFkaXNhYmxlZCAmJiB2YWx1ZVJvdW5kZWQgPT0gbnVsbCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgdmFsdWU6IFwiXCIsXG4gICAgaWQ6IFwiXCIuY29uY2F0KG5hbWUsIFwiLWVtcHR5XCIpLFxuICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICBuYW1lOiBuYW1lLFxuICAgIGRlZmF1bHRDaGVja2VkOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy52aXN1YWxseWhpZGRlblxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnByaXN0aW5lLFxuICAgIGh0bWxGb3I6IFwiXCIuY29uY2F0KG5hbWUsIFwiLWVtcHR5XCIpXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnZpc3VhbGx5aGlkZGVuXG4gIH0sIGVtcHR5TGFiZWxUZXh0KSkpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUmF0aW5nLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcmF0aW5nIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRvIGRpc3BsYXkgd2hlbiBlbXB0eS5cbiAgICovXG4gIGVtcHR5SWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCByZWFkIHdoZW4gdGhlIHJhdGluZyBpbnB1dCBpcyBlbXB0eS5cbiAgICovXG4gIGVtcHR5TGFiZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQWNjZXB0cyBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCBwcm92aWRlcyBhIHVzZXItZnJpZW5kbHkgbmFtZSBmb3IgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIHJhdGluZy5cbiAgICpcbiAgICogRm9yIGxvY2FsaXphdGlvbiBwdXJwb3NlcywgeW91IGNhbiB1c2UgdGhlIHByb3ZpZGVkIFt0cmFuc2xhdGlvbnNdKC9ndWlkZXMvbG9jYWxpemF0aW9uLykuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgcmF0aW5nIGxhYmVsJ3MgdmFsdWUgdG8gZm9ybWF0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0TGFiZWxUZXh0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIGljb24gdG8gZGlzcGxheS5cbiAgICovXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IGNvbnRhaW5pbmcgdGhlIGljb24uXG4gICAqL1xuICBJY29uQ29udGFpbmVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIE1heGltdW0gcmF0aW5nLlxuICAgKi9cbiAgbWF4OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvIGBpbnB1dGAgZWxlbWVudHMuXG4gICAqIElmIGByZWFkT25seWAgaXMgZmFsc2UsIHRoZSBwcm9wIGlzIHJlcXVpcmVkLFxuICAgKiB0aGlzIGlucHV0IG5hbWVgc2hvdWxkIGJlIHVuaXF1ZSB3aXRoaW4gdGhlIHBhcmVudCBmb3JtLlxuICAgKi9cbiAgbmFtZTogY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLnN0cmluZywgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgaWYgKCFwcm9wcy5yZWFkT25seSAmJiAhcHJvcHMubmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgcHJvcCBgbmFtZWAgaXMgcmVxdWlyZWQgKHdoZW4gYHJlYWRPbmx5YCBpcyBmYWxzZSkuJywgJ0FkZGl0aW9uYWxseSwgdGhlIGlucHV0IG5hbWUgc2hvdWxkIGJlIHVuaXF1ZSB3aXRoaW4gdGhlIHBhcmVudCBmb3JtLiddLmpvaW4oJ1xcbicpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBuZXcgdmFsdWUuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgaG92ZXIgc3RhdGUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIG5ldyB2YWx1ZS5cbiAgICovXG4gIG9uQ2hhbmdlQWN0aXZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Nb3VzZU1vdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBpbmNyZW1lbnQgdmFsdWUgY2hhbmdlIGFsbG93ZWQuXG4gICAqL1xuICBwcmVjaXNpb246IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5udW1iZXIsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcy5wcmVjaXNpb24gPCAwLjEpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIHByb3AgYHByZWNpc2lvbmAgc2hvdWxkIGJlIGFib3ZlIDAuMS4nLCAnQSB2YWx1ZSBiZWxvdyB0aGlzIGxpbWl0IGhhcyBhbiBpbXBlcmNlcHRpYmxlIGltcGFjdC4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLFxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBob3ZlciBlZmZlY3RzIGFuZCBwb2ludGVyIGV2ZW50cy5cbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIHJhdGluZy5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ2xhcmdlJywgJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVGhlIHJhdGluZyB2YWx1ZS5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVJhdGluZydcbn0pKFJhdGluZyk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUmF0aW5nJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmYWRlLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgLy8gQ3JlYXRlIGEgXCJvbiBwYXBlclwiIGNvbG9yIHdpdGggc3VmZmljaWVudCBjb250cmFzdCByZXRhaW5pbmcgdGhlIGNvbG9yXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksIHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IDAuMTEgOiAwLjEzKSxcbiAgICAgIGhlaWdodDogJzEuMmVtJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwidGV4dFwiYC4gKi9cbiAgICB0ZXh0OiB7XG4gICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgNjAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEsIDAuNjApJyxcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgJyY6ZW1wdHk6YmVmb3JlJzoge1xuICAgICAgICBjb250ZW50OiAnXCJcXFxcMDBhMFwiJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwicmVjdFwiYC4gKi9cbiAgICByZWN0OiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJjaXJjbGVcImAuICovXG4gICAgY2lyY2xlOiB7XG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFuaW1hdGlvbj1cInB1bHNlXCJgLiAqL1xuICAgIHB1bHNlOiB7XG4gICAgICBhbmltYXRpb246ICckcHVsc2UgMS41cyBlYXNlLWluLW91dCAwLjVzIGluZmluaXRlJ1xuICAgIH0sXG4gICAgJ0BrZXlmcmFtZXMgcHVsc2UnOiB7XG4gICAgICAnMCUnOiB7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sXG4gICAgICAnNTAlJzoge1xuICAgICAgICBvcGFjaXR5OiAwLjRcbiAgICAgIH0sXG4gICAgICAnMTAwJSc6IHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbmltYXRpb249XCJ3YXZlXCJgLiAqL1xuICAgIHdhdmU6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgJyY6OmFmdGVyJzoge1xuICAgICAgICBhbmltYXRpb246ICckd2F2ZSAxLjZzIGxpbmVhciAwLjVzIGluZmluaXRlJyxcbiAgICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXIsIFwiLCB0cmFuc3BhcmVudClcIiksXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJyxcbiAgICAgICAgLy8gQXZvaWQgZmxhc2ggZHVyaW5nIHNlcnZlci1zaWRlIGh5ZHJhdGlvblxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IDBcbiAgICAgIH1cbiAgICB9LFxuICAgICdAa2V5ZnJhbWVzIHdhdmUnOiB7XG4gICAgICAnMCUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xuICAgICAgfSxcbiAgICAgICc2MCUnOiB7XG4gICAgICAgIC8vICswLjVzIG9mIGRlbGF5IGJldHdlZW4gZWFjaCBsb29wXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknXG4gICAgICB9LFxuICAgICAgJzEwMCUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBwYXNzZWQgY2hpbGRyZW4uICovXG4gICAgd2l0aENoaWxkcmVuOiB7XG4gICAgICAnJiA+IConOiB7XG4gICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBwYXNzZWQgY2hpbGRyZW4gYW5kIG5vIHdpZHRoLiAqL1xuICAgIGZpdENvbnRlbnQ6IHtcbiAgICAgIG1heFdpZHRoOiAnZml0LWNvbnRlbnQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBwYXNzZWQgY2hpbGRyZW4gYW5kIG5vIGhlaWdodC4gKi9cbiAgICBoZWlnaHRBdXRvOiB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJ1xuICAgIH1cbiAgfTtcbn07XG52YXIgU2tlbGV0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTa2VsZXRvbihwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkYW5pbWF0aW9uID0gcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgYW5pbWF0aW9uID0gX3Byb3BzJGFuaW1hdGlvbiA9PT0gdm9pZCAwID8gJ3B1bHNlJyA6IF9wcm9wcyRhbmltYXRpb24sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnc3BhbicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0LFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIHdpZHRoID0gcHJvcHMud2lkdGgsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYW5pbWF0aW9uXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImhlaWdodFwiLCBcInZhcmlhbnRcIiwgXCJ3aWR0aFwiXSk7XG5cbiAgdmFyIGhhc0NoaWxkcmVuID0gQm9vbGVhbihvdGhlci5jaGlsZHJlbik7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW3ZhcmlhbnRdLCBjbGFzc05hbWUsIGhhc0NoaWxkcmVuICYmIFtjbGFzc2VzLndpdGhDaGlsZHJlbiwgIXdpZHRoICYmIGNsYXNzZXMuZml0Q29udGVudCwgIWhlaWdodCAmJiBjbGFzc2VzLmhlaWdodEF1dG9dLCBhbmltYXRpb24gIT09IGZhbHNlICYmIGNsYXNzZXNbYW5pbWF0aW9uXSlcbiAgfSwgb3RoZXIsIHtcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9LCBvdGhlci5zdHlsZSlcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTa2VsZXRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgYW5pbWF0aW9uLlxuICAgKiBJZiBgZmFsc2VgIHRoZSBhbmltYXRpb24gZWZmZWN0IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMub25lT2YoWydwdWxzZScsICd3YXZlJywgZmFsc2VdKSxcblxuICAvKipcbiAgICogT3B0aW9uYWwgY2hpbGRyZW4gdG8gaW5mZXIgd2lkdGggYW5kIGhlaWdodCBmcm9tLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSGVpZ2h0IG9mIHRoZSBza2VsZXRvbi5cbiAgICogVXNlZnVsIHdoZW4geW91IGRvbid0IHdhbnQgdG8gYWRhcHQgdGhlIHNrZWxldG9uIHRvIGEgdGV4dCBlbGVtZW50IGJ1dCBmb3IgaW5zdGFuY2UgYSBjYXJkLlxuICAgKi9cbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIGNvbnRlbnQgdGhhdCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsndGV4dCcsICdyZWN0JywgJ2NpcmNsZSddKSxcblxuICAvKipcbiAgICogV2lkdGggb2YgdGhlIHNrZWxldG9uLlxuICAgKiBVc2VmdWwgd2hlbiB0aGUgc2tlbGV0b24gaXMgaW5zaWRlIGFuIGlubGluZSBlbGVtZW50IHdpdGggbm8gd2lkdGggb2YgaXRzIG93bi5cbiAgICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpU2tlbGV0b24nXG59KShTa2VsZXRvbik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2tlbGV0b24nOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzRnJhZ21lbnQgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBkdXJhdGlvbiwgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgWm9vbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9ab29tJztcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcbmltcG9ydCB7IGNhcGl0YWxpemUsIGlzTXVpRWxlbWVudCwgdXNlRm9ya1JlZiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcblxuZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oZGlyZWN0aW9uKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09ICd1cCcgfHwgZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgfVxuXG4gIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcgfHwgZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gJ2hvcml6b250YWwnO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIGlmICh2YWx1ZSA8IG1pbikge1xuICAgIHJldHVybiBtaW47XG4gIH1cblxuICBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgZGlhbFJhZGl1cyA9IDMyO1xudmFyIHNwYWNpbmdBY3Rpb25zID0gMTY7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgekluZGV4OiB0aGVtZS56SW5kZXguc3BlZWREaWFsLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIEZhYiBjb21wb25lbnQuICovXG4gICAgZmFiOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnYXV0bydcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgaWYgZGlyZWN0aW9uPVwidXBcIiAqL1xuICAgIGRpcmVjdGlvblVwOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxuICAgICAgJyYgJGFjdGlvbnMnOiB7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogLWRpYWxSYWRpdXMsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IHNwYWNpbmdBY3Rpb25zICsgZGlhbFJhZGl1c1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBpZiBkaXJlY3Rpb249XCJkb3duXCIgKi9cbiAgICBkaXJlY3Rpb25Eb3duOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICcmICRhY3Rpb25zJzoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgbWFyZ2luVG9wOiAtZGlhbFJhZGl1cyxcbiAgICAgICAgcGFkZGluZ1RvcDogc3BhY2luZ0FjdGlvbnMgKyBkaWFsUmFkaXVzXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGlmIGRpcmVjdGlvbj1cImxlZnRcIiAqL1xuICAgIGRpcmVjdGlvbkxlZnQ6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gICAgICAnJiAkYWN0aW9ucyc6IHtcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IC1kaWFsUmFkaXVzLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmdBY3Rpb25zICsgZGlhbFJhZGl1c1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBpZiBkaXJlY3Rpb249XCJyaWdodFwiICovXG4gICAgZGlyZWN0aW9uUmlnaHQ6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgJyYgJGFjdGlvbnMnOiB7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICBtYXJnaW5MZWZ0OiAtZGlhbFJhZGl1cyxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmdBY3Rpb25zICsgZGlhbFJhZGl1c1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYWN0aW9ucyAoYGNoaWxkcmVuYCB3cmFwcGVyKSBlbGVtZW50LiAqL1xuICAgIGFjdGlvbnM6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYWN0aW9ucyAoYGNoaWxkcmVuYCB3cmFwcGVyKSBlbGVtZW50IGlmIGBvcGVuPXtmYWxzZX1gLiAqL1xuICAgIGFjdGlvbnNDbG9zZWQ6IHtcbiAgICAgIHRyYW5zaXRpb246ICd0b3AgMHMgbGluZWFyIDAuMnMnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfVxuICB9O1xufTtcbnZhciBTcGVlZERpYWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTcGVlZERpYWwocHJvcHMsIHJlZikge1xuICB2YXIgYXJpYUxhYmVsID0gcHJvcHMuYXJpYUxhYmVsLFxuICAgICAgX3Byb3BzJEZhYlByb3BzID0gcHJvcHMuRmFiUHJvcHM7XG4gIF9wcm9wcyRGYWJQcm9wcyA9IF9wcm9wcyRGYWJQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkRmFiUHJvcHM7XG5cbiAgdmFyIG9yaWdEaWFsQnV0dG9uUmVmID0gX3Byb3BzJEZhYlByb3BzLnJlZixcbiAgICAgIEZhYlByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcyRGYWJQcm9wcywgW1wicmVmXCJdKSxcbiAgICAgIGNoaWxkcmVuUHJvcCA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgZGlyZWN0aW9uID0gX3Byb3BzJGRpcmVjdGlvbiA9PT0gdm9pZCAwID8gJ3VwJyA6IF9wcm9wcyRkaXJlY3Rpb24sXG4gICAgICBfcHJvcHMkaGlkZGVuID0gcHJvcHMuaGlkZGVuLFxuICAgICAgaGlkZGVuID0gX3Byb3BzJGhpZGRlbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaGlkZGVuLFxuICAgICAgaWNvbiA9IHByb3BzLmljb24sXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBvbkNsb3NlID0gcHJvcHMub25DbG9zZSxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgb25LZXlEb3duID0gcHJvcHMub25LZXlEb3duLFxuICAgICAgb25Nb3VzZUVudGVyID0gcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgb25Nb3VzZUxlYXZlID0gcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgb25PcGVuID0gcHJvcHMub25PcGVuLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICBvcGVuSWNvbiA9IHByb3BzLm9wZW5JY29uLFxuICAgICAgX3Byb3BzJFRyYW5zaXRpb25Db21wID0gcHJvcHMuVHJhbnNpdGlvbkNvbXBvbmVudCxcbiAgICAgIFRyYW5zaXRpb25Db21wb25lbnQgPSBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPT09IHZvaWQgMCA/IFpvb20gOiBfcHJvcHMkVHJhbnNpdGlvbkNvbXAsXG4gICAgICBfcHJvcHMkdHJhbnNpdGlvbkR1cmEgPSBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBfcHJvcHMkdHJhbnNpdGlvbkR1cmEgPT09IHZvaWQgMCA/IHtcbiAgICBlbnRlcjogZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXG4gICAgZXhpdDogZHVyYXRpb24ubGVhdmluZ1NjcmVlblxuICB9IDogX3Byb3BzJHRyYW5zaXRpb25EdXJhLFxuICAgICAgVHJhbnNpdGlvblByb3BzID0gcHJvcHMuVHJhbnNpdGlvblByb3BzLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFyaWFMYWJlbFwiLCBcIkZhYlByb3BzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlyZWN0aW9uXCIsIFwiaGlkZGVuXCIsIFwiaWNvblwiLCBcIm9uQmx1clwiLCBcIm9uQ2xvc2VcIiwgXCJvbkZvY3VzXCIsIFwib25LZXlEb3duXCIsIFwib25Nb3VzZUVudGVyXCIsIFwib25Nb3VzZUxlYXZlXCIsIFwib25PcGVuXCIsIFwib3BlblwiLCBcIm9wZW5JY29uXCIsIFwiVHJhbnNpdGlvbkNvbXBvbmVudFwiLCBcInRyYW5zaXRpb25EdXJhdGlvblwiLCBcIlRyYW5zaXRpb25Qcm9wc1wiXSk7XG5cbiAgdmFyIGV2ZW50VGltZXIgPSBSZWFjdC51c2VSZWYoKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGV2ZW50VGltZXIuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICAvKipcbiAgICogYW4gaW5kZXggaW4gYWN0aW9ucy5jdXJyZW50XG4gICAqL1xuXG4gIHZhciBmb2N1c2VkQWN0aW9uID0gUmVhY3QudXNlUmVmKDApO1xuICAvKipcbiAgICogcHJlc3NpbmcgdGhpcyBrZXkgd2hpbGUgdGhlIGZvY3VzIGlzIG9uIGEgY2hpbGQgU3BlZWREaWFsQWN0aW9uIGZvY3VzZXNcbiAgICogdGhlIG5leHQgU3BlZWREaWFsQWN0aW9uLlxuICAgKiBJdCBpcyBlcXVhbCB0byB0aGUgZmlyc3QgYXJyb3cga2V5IHByZXNzZWQgd2hpbGUgZm9jdXMgaXMgb24gdGhlIFNwZWVkRGlhbFxuICAgKiB0aGF0IGlzIG5vdCBvcnRob2dvbmFsIHRvIHRoZSBkaXJlY3Rpb24uXG4gICAqIEB0eXBlIHt1dGlscy5BcnJvd0tleT99XG4gICAqL1xuXG4gIHZhciBuZXh0SXRlbUFycm93S2V5ID0gUmVhY3QudXNlUmVmKCk7XG4gIC8qKlxuICAgKiByZWZzIHRvIHRoZSBCdXR0b24gdGhhdCBoYXZlIGFuIGFjdGlvbiBhc3NvY2lhdGVkIHRvIHRoZW0gaW4gdGhpcyBTcGVlZERpYWxcbiAgICogW0ZhYiwgLi4uKFNwZWVkRGlhbEFjdGlvbnMgPiBCdXR0b24pXVxuICAgKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnRbXX1cbiAgICovXG5cbiAgdmFyIGFjdGlvbnMgPSBSZWFjdC51c2VSZWYoW10pO1xuICBhY3Rpb25zLmN1cnJlbnQgPSBbYWN0aW9ucy5jdXJyZW50WzBdXTtcbiAgdmFyIGhhbmRsZU93bkZhYlJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChmYWJGZWYpIHtcbiAgICBhY3Rpb25zLmN1cnJlbnRbMF0gPSBmYWJGZWY7XG4gIH0sIFtdKTtcbiAgdmFyIGhhbmRsZUZhYlJlZiA9IHVzZUZvcmtSZWYob3JpZ0RpYWxCdXR0b25SZWYsIGhhbmRsZU93bkZhYlJlZik7XG4gIC8qKlxuICAgKiBjcmVhdGVzIGEgcmVmIGNhbGxiYWNrIGZvciB0aGUgQnV0dG9uIGluIGEgU3BlZWREaWFsQWN0aW9uXG4gICAqIElzIGNhbGxlZCBiZWZvcmUgdGhlIG9yaWdpbmFsIHJlZiBjYWxsYmFjayBmb3IgQnV0dG9uIHRoYXQgd2FzIHNldCBpbiBidXR0b25Qcm9wc1xuICAgKlxuICAgKiBAcGFyYW0gZGlhbEFjdGlvbkluZGV4IHtudW1iZXJ9XG4gICAqIEBwYXJhbSBvcmlnQnV0dG9uUmVmIHtSZWFjdC5SZWZPYmplY3Q/fVxuICAgKi9cblxuICB2YXIgY3JlYXRlSGFuZGxlU3BlZWREaWFsQWN0aW9uQnV0dG9uUmVmID0gZnVuY3Rpb24gY3JlYXRlSGFuZGxlU3BlZWREaWFsQWN0aW9uQnV0dG9uUmVmKGRpYWxBY3Rpb25JbmRleCwgb3JpZ0J1dHRvblJlZikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYnV0dG9uUmVmKSB7XG4gICAgICBhY3Rpb25zLmN1cnJlbnRbZGlhbEFjdGlvbkluZGV4ICsgMV0gPSBidXR0b25SZWY7XG5cbiAgICAgIGlmIChvcmlnQnV0dG9uUmVmKSB7XG4gICAgICAgIG9yaWdCdXR0b25SZWYoYnV0dG9uUmVmKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIGlmIChvbktleURvd24pIHtcbiAgICAgIG9uS2V5RG93bihldmVudCk7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IGV2ZW50LmtleS5yZXBsYWNlKCdBcnJvdycsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBfbmV4dEl0ZW1BcnJvd0tleSRjdXIgPSBuZXh0SXRlbUFycm93S2V5LmN1cnJlbnQsXG4gICAgICAgIG5leHRJdGVtQXJyb3dLZXlDdXJyZW50ID0gX25leHRJdGVtQXJyb3dLZXkkY3VyID09PSB2b2lkIDAgPyBrZXkgOiBfbmV4dEl0ZW1BcnJvd0tleSRjdXI7XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgYWN0aW9ucy5jdXJyZW50WzBdLmZvY3VzKCk7XG4gICAgICAgIG9uQ2xvc2UoZXZlbnQsICdlc2NhcGVLZXlEb3duJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZ2V0T3JpZW50YXRpb24oa2V5KSA9PT0gZ2V0T3JpZW50YXRpb24obmV4dEl0ZW1BcnJvd0tleUN1cnJlbnQpICYmIGdldE9yaWVudGF0aW9uKGtleSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBhY3Rpb25TdGVwID0ga2V5ID09PSBuZXh0SXRlbUFycm93S2V5Q3VycmVudCA/IDEgOiAtMTsgLy8gc3RheSB3aXRoaW4gYXJyYXkgaW5kaWNlc1xuXG4gICAgICB2YXIgbmV4dEFjdGlvbiA9IGNsYW1wKGZvY3VzZWRBY3Rpb24uY3VycmVudCArIGFjdGlvblN0ZXAsIDAsIGFjdGlvbnMuY3VycmVudC5sZW5ndGggLSAxKTtcbiAgICAgIGFjdGlvbnMuY3VycmVudFtuZXh0QWN0aW9uXS5mb2N1cygpO1xuICAgICAgZm9jdXNlZEFjdGlvbi5jdXJyZW50ID0gbmV4dEFjdGlvbjtcbiAgICAgIG5leHRJdGVtQXJyb3dLZXkuY3VycmVudCA9IG5leHRJdGVtQXJyb3dLZXlDdXJyZW50O1xuICAgIH1cbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIGFjdGlvbnMgd2VyZSBjbG9zZWQgd2hpbGUgbmF2aWdhdGlvbiBzdGF0ZSB3YXMgbm90IHJlc2V0XG4gICAgaWYgKCFvcGVuKSB7XG4gICAgICBmb2N1c2VkQWN0aW9uLmN1cnJlbnQgPSAwO1xuICAgICAgbmV4dEl0ZW1BcnJvd0tleS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwgW29wZW5dKTtcblxuICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiBoYW5kbGVDbG9zZShldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2VsZWF2ZScgJiYgb25Nb3VzZUxlYXZlKSB7XG4gICAgICBvbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAnYmx1cicgJiYgb25CbHVyKSB7XG4gICAgICBvbkJsdXIoZXZlbnQpO1xuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChldmVudFRpbWVyLmN1cnJlbnQpO1xuXG4gICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSAnYmx1cicpIHtcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgICBldmVudFRpbWVyLmN1cnJlbnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvbkNsb3NlKGV2ZW50LCAnYmx1cicpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uQ2xvc2UoZXZlbnQsICdtb3VzZUxlYXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKEZhYlByb3BzLm9uQ2xpY2spIHtcbiAgICAgIEZhYlByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChldmVudFRpbWVyLmN1cnJlbnQpO1xuXG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgIG9uQ2xvc2UoZXZlbnQsICd0b2dnbGUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9uT3Blbikge1xuICAgICAgb25PcGVuKGV2ZW50LCAndG9nZ2xlJyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVPcGVuID0gZnVuY3Rpb24gaGFuZGxlT3BlbihldmVudCkge1xuICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2VlbnRlcicgJiYgb25Nb3VzZUVudGVyKSB7XG4gICAgICBvbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAnZm9jdXMnICYmIG9uRm9jdXMpIHtcbiAgICAgIG9uRm9jdXMoZXZlbnQpO1xuICAgIH0gLy8gV2hlbiBtb3ZpbmcgdGhlIGZvY3VzIGJldHdlZW4gdHdvIGl0ZW1zLFxuICAgIC8vIGEgY2hhaW4gaWYgYmx1ciBhbmQgZm9jdXMgZXZlbnQgaXMgdHJpZ2dlcmVkLlxuICAgIC8vIFdlIG9ubHkgaGFuZGxlIHRoZSBsYXN0IGV2ZW50LlxuXG5cbiAgICBjbGVhclRpbWVvdXQoZXZlbnRUaW1lci5jdXJyZW50KTtcblxuICAgIGlmIChvbk9wZW4gJiYgIW9wZW4pIHtcbiAgICAgIGV2ZW50LnBlcnNpc3QoKTsgLy8gV2FpdCBmb3IgYSBmdXR1cmUgZm9jdXMgb3IgY2xpY2sgZXZlbnRcblxuICAgICAgZXZlbnRUaW1lci5jdXJyZW50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBldmVudE1hcCA9IHtcbiAgICAgICAgICBmb2N1czogJ2ZvY3VzJyxcbiAgICAgICAgICBtb3VzZWVudGVyOiAnbW91c2VFbnRlcidcbiAgICAgICAgfTtcbiAgICAgICAgb25PcGVuKGV2ZW50LCBldmVudE1hcFtldmVudC50eXBlXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07IC8vIEZpbHRlciB0aGUgbGFiZWwgZm9yIHZhbGlkIGlkIGNoYXJhY3RlcnMuXG5cblxuICB2YXIgaWQgPSBhcmlhTGFiZWwucmVwbGFjZSgvXlteYS16XSt8W15cXHc6Li1dKy9naSwgJycpO1xuICB2YXIgYWxsSXRlbXMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuUHJvcCkuZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIFNwZWVkRGlhbCBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpO1xuICB9KTtcbiAgdmFyIGNoaWxkcmVuID0gYWxsSXRlbXMubWFwKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIgX2NoaWxkJHByb3BzJEZhYlByb3BzID0gY2hpbGQucHJvcHMuRmFiUHJvcHM7XG4gICAgX2NoaWxkJHByb3BzJEZhYlByb3BzID0gX2NoaWxkJHByb3BzJEZhYlByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9jaGlsZCRwcm9wcyRGYWJQcm9wcztcblxuICAgIHZhciBvcmlnQnV0dG9uUmVmID0gX2NoaWxkJHByb3BzJEZhYlByb3BzLnJlZixcbiAgICAgICAgQ2hpbGRGYWJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfY2hpbGQkcHJvcHMkRmFiUHJvcHMsIFtcInJlZlwiXSk7XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgRmFiUHJvcHM6IF9leHRlbmRzKHt9LCBDaGlsZEZhYlByb3BzLCB7XG4gICAgICAgIHJlZjogY3JlYXRlSGFuZGxlU3BlZWREaWFsQWN0aW9uQnV0dG9uUmVmKGluZGV4LCBvcmlnQnV0dG9uUmVmKVxuICAgICAgfSksXG4gICAgICBkZWxheTogMzAgKiAob3BlbiA/IGluZGV4IDogYWxsSXRlbXMubGVuZ3RoIC0gaW5kZXgpLFxuICAgICAgb3Blbjogb3BlbixcbiAgICAgIGlkOiBcIlwiLmNvbmNhdChpZCwgXCItYWN0aW9uLVwiKS5jb25jYXQoaW5kZXgpXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbXCJkaXJlY3Rpb25cIi5jb25jYXQoY2FwaXRhbGl6ZShkaXJlY3Rpb24pKV0sIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWYsXG4gICAgcm9sZTogXCJwcmVzZW50YXRpb25cIixcbiAgICBvbktleURvd246IGhhbmRsZUtleURvd24sXG4gICAgb25CbHVyOiBoYW5kbGVDbG9zZSxcbiAgICBvbkZvY3VzOiBoYW5kbGVPcGVuLFxuICAgIG9uTW91c2VFbnRlcjogaGFuZGxlT3BlbixcbiAgICBvbk1vdXNlTGVhdmU6IGhhbmRsZUNsb3NlXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGluOiAhaGlkZGVuLFxuICAgIHRpbWVvdXQ6IHRyYW5zaXRpb25EdXJhdGlvbixcbiAgICB1bm1vdW50T25FeGl0OiB0cnVlXG4gIH0sIFRyYW5zaXRpb25Qcm9wcyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZhYiwgX2V4dGVuZHMoe1xuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIixcbiAgICBcImFyaWEtZXhwYW5kZWRcIjogb3BlbixcbiAgICBcImFyaWEtY29udHJvbHNcIjogXCJcIi5jb25jYXQoaWQsIFwiLWFjdGlvbnNcIilcbiAgfSwgRmFiUHJvcHMsIHtcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5mYWIsIEZhYlByb3BzLmNsYXNzTmFtZSksXG4gICAgcmVmOiBoYW5kbGVGYWJSZWZcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChpY29uKSAmJiBpc011aUVsZW1lbnQoaWNvbiwgWydTcGVlZERpYWxJY29uJ10pID8gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChpY29uLCB7XG4gICAgb3Blbjogb3BlblxuICB9KSA6IGljb24pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGlkOiBcIlwiLmNvbmNhdChpZCwgXCItYWN0aW9uc1wiKSxcbiAgICByb2xlOiBcIm1lbnVcIixcbiAgICBcImFyaWEtb3JpZW50YXRpb25cIjogZ2V0T3JpZW50YXRpb24oZGlyZWN0aW9uKSxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5hY3Rpb25zLCAhb3BlbiAmJiBjbGFzc2VzLmFjdGlvbnNDbG9zZWQpXG4gIH0sIGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFNwZWVkRGlhbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgYXJpYS1sYWJlbCBvZiB0aGUgYnV0dG9uIGVsZW1lbnQuXG4gICAqIEFsc28gdXNlZCB0byBwcm92aWRlIHRoZSBgaWRgIGZvciB0aGUgYFNwZWVkRGlhbGAgZWxlbWVudCBhbmQgaXRzIGNoaWxkcmVuLlxuICAgKi9cbiAgYXJpYUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFNwZWVkRGlhbEFjdGlvbnMgdG8gZGlzcGxheSB3aGVuIHRoZSBTcGVlZERpYWwgaXMgYG9wZW5gLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGRpcmVjdGlvbiB0aGUgYWN0aW9ucyBvcGVuIHJlbGF0aXZlIHRvIHRoZSBmbG9hdGluZyBhY3Rpb24gYnV0dG9uLlxuICAgKi9cbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydkb3duJywgJ2xlZnQnLCAncmlnaHQnLCAndXAnXSksXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgRmFiYF0oL2FwaS9mYWIvKSBlbGVtZW50LlxuICAgKi9cbiAgRmFiUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIFNwZWVkRGlhbCB3aWxsIGJlIGhpZGRlbi5cbiAgICovXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRvIGRpc3BsYXkgaW4gdGhlIFNwZWVkRGlhbCBGYWIuIFRoZSBgU3BlZWREaWFsSWNvbmAgY29tcG9uZW50XG4gICAqIHByb3ZpZGVzIGEgZGVmYXVsdCBJY29uIHdpdGggYW5pbWF0aW9uLlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiBDYW4gYmU6IGBcInRvZ2dsZVwiYCwgYFwiYmx1clwiYCwgYFwibW91c2VMZWF2ZVwiYCwgYFwiZXNjYXBlS2V5RG93blwiYC5cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIG9wZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiBDYW4gYmU6IGBcInRvZ2dsZVwiYCwgYFwiZm9jdXNcImAsIGBcIm1vdXNlRW50ZXJcImAuXG4gICAqL1xuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBTcGVlZERpYWwgaXMgb3Blbi5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRvIGRpc3BsYXkgaW4gdGhlIFNwZWVkRGlhbCBGYWIgd2hlbiB0aGUgU3BlZWREaWFsIGlzIG9wZW4uXG4gICAqL1xuICBvcGVuSWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHRyYW5zaXRpb24uXG4gICAqIFtGb2xsb3cgdGhpcyBndWlkZV0oL2NvbXBvbmVudHMvdHJhbnNpdGlvbnMvI3RyYW5zaXRpb25jb21wb25lbnQtcHJvcCkgdG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgcmVxdWlyZW1lbnRzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIFRyYW5zaXRpb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zLCBvciBpbmRpdmlkdWFsbHkgd2l0aCBhbiBvYmplY3QuXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKSxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BUcmFuc2l0aW9uYF0oaHR0cDovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24jVHJhbnNpdGlvbi1wcm9wcykgZWxlbWVudC5cbiAgICovXG4gIFRyYW5zaXRpb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTcGVlZERpYWwnXG59KShTcGVlZERpYWwpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NwZWVkRGlhbCc7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuLy8gQGluaGVyaXRlZENvbXBvbmVudCBUb29sdGlwXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBlbXBoYXNpemUsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgRmFiIGNvbXBvbmVudC4gKi9cbiAgICBmYWI6IHtcbiAgICAgIG1hcmdpbjogOCxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlbXBoYXNpemUodGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLCAwLjE1KVxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb246IFwiXCIuY29uY2F0KHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlclxuICAgICAgfSksIFwiLCBvcGFjaXR5IDAuOHNcIiksXG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBGYWIgY29tcG9uZW50IGlmIGBvcGVuPXtmYWxzZX1gLiAqL1xuICAgIGZhYkNsb3NlZDoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB0b29sdGlwT3Blbj17dHJ1ZX1gLiAqL1xuICAgIHN0YXRpY1Rvb2x0aXA6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgJyYgJHN0YXRpY1Rvb2x0aXBMYWJlbCc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsndHJhbnNmb3JtJywgJ29wYWNpdHknXSwge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICAgIH0pLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHRvb2x0aXBPcGVuPXt0cnVlfWAgYW5kIGBvcGVuPXtmYWxzZX1gLiAqL1xuICAgIHN0YXRpY1Rvb2x0aXBDbG9zZWQ6IHtcbiAgICAgICcmICRzdGF0aWNUb29sdGlwTGFiZWwnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuNSknXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzdGF0aWMgdG9vbHRpcCBsYWJlbCBpZiBgdG9vbHRpcE9wZW49e3RydWV9YC4gKi9cbiAgICBzdGF0aWNUb29sdGlwTGFiZWw6IF9leHRlbmRzKHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSwgdGhlbWUudHlwb2dyYXBoeS5ib2R5MSwge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgcGFkZGluZzogJzRweCAxNnB4JyxcbiAgICAgIHdvcmRCcmVhazogJ2tlZXAtYWxsJ1xuICAgIH0pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgaWYgYHRvb2x0aXBPcGVuPXt0cnVlfWAgYW5kIGB0b29sdGlwUGxhY2VtZW50PVwibGVmdFwiYGAgKi9cbiAgICB0b29sdGlwUGxhY2VtZW50TGVmdDoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJiAkc3RhdGljVG9vbHRpcExhYmVsJzoge1xuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcxMDAlIDUwJScsXG4gICAgICAgIHJpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1hcmdpblJpZ2h0OiA4XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGlmIGB0b29sdGlwT3Blbj17dHJ1ZX1gIGFuZCBgdG9vbHRpcFBsYWNlbWVudD1cInJpZ2h0XCJgYCAqL1xuICAgIHRvb2x0aXBQbGFjZW1lbnRSaWdodDoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJiAkc3RhdGljVG9vbHRpcExhYmVsJzoge1xuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSA1MCUnLFxuICAgICAgICBsZWZ0OiAnMTAwJScsXG4gICAgICAgIG1hcmdpbkxlZnQ6IDhcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xudmFyIFNwZWVkRGlhbEFjdGlvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFNwZWVkRGlhbEFjdGlvbihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRkZWxheSA9IHByb3BzLmRlbGF5LFxuICAgICAgZGVsYXkgPSBfcHJvcHMkZGVsYXkgPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkZGVsYXksXG4gICAgICBfcHJvcHMkRmFiUHJvcHMgPSBwcm9wcy5GYWJQcm9wcyxcbiAgICAgIEZhYlByb3BzID0gX3Byb3BzJEZhYlByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRGYWJQcm9wcyxcbiAgICAgIGljb24gPSBwcm9wcy5pY29uLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgVG9vbHRpcENsYXNzZXMgPSBwcm9wcy5Ub29sdGlwQ2xhc3NlcyxcbiAgICAgIF9wcm9wcyR0b29sdGlwT3BlbiA9IHByb3BzLnRvb2x0aXBPcGVuLFxuICAgICAgdG9vbHRpcE9wZW5Qcm9wID0gX3Byb3BzJHRvb2x0aXBPcGVuID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyR0b29sdGlwT3BlbixcbiAgICAgIF9wcm9wcyR0b29sdGlwUGxhY2VtZSA9IHByb3BzLnRvb2x0aXBQbGFjZW1lbnQsXG4gICAgICB0b29sdGlwUGxhY2VtZW50ID0gX3Byb3BzJHRvb2x0aXBQbGFjZW1lID09PSB2b2lkIDAgPyAnbGVmdCcgOiBfcHJvcHMkdG9vbHRpcFBsYWNlbWUsXG4gICAgICB0b29sdGlwVGl0bGUgPSBwcm9wcy50b29sdGlwVGl0bGUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRlbGF5XCIsIFwiRmFiUHJvcHNcIiwgXCJpY29uXCIsIFwiaWRcIiwgXCJvcGVuXCIsIFwiVG9vbHRpcENsYXNzZXNcIiwgXCJ0b29sdGlwT3BlblwiLCBcInRvb2x0aXBQbGFjZW1lbnRcIiwgXCJ0b29sdGlwVGl0bGVcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSh0b29sdGlwT3BlblByb3ApLFxuICAgICAgdG9vbHRpcE9wZW4gPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRUb29sdGlwT3BlbiA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgaGFuZGxlVG9vbHRpcENsb3NlID0gZnVuY3Rpb24gaGFuZGxlVG9vbHRpcENsb3NlKCkge1xuICAgIHNldFRvb2x0aXBPcGVuKGZhbHNlKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlVG9vbHRpcE9wZW4gPSBmdW5jdGlvbiBoYW5kbGVUb29sdGlwT3BlbigpIHtcbiAgICBzZXRUb29sdGlwT3Blbih0cnVlKTtcbiAgfTtcblxuICB2YXIgdHJhbnNpdGlvblN0eWxlID0ge1xuICAgIHRyYW5zaXRpb25EZWxheTogXCJcIi5jb25jYXQoZGVsYXksIFwibXNcIilcbiAgfTtcbiAgdmFyIGZhYiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZhYiwgX2V4dGVuZHMoe1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5mYWIsIGNsYXNzTmFtZSwgIW9wZW4gJiYgY2xhc3Nlcy5mYWJDbG9zZWQpLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICByb2xlOiBcIm1lbnVpdGVtXCIsXG4gICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IFwiXCIuY29uY2F0KGlkLCBcIi1sYWJlbFwiKVxuICB9LCBGYWJQcm9wcywge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgdHJhbnNpdGlvblN0eWxlLCBGYWJQcm9wcy5zdHlsZSlcbiAgfSksIGljb24pO1xuXG4gIGlmICh0b29sdGlwT3BlblByb3ApIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIF9leHRlbmRzKHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHJlZjogcmVmLFxuICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuc3RhdGljVG9vbHRpcCwgY2xhc3Nlc1tcInRvb2x0aXBQbGFjZW1lbnRcIi5jb25jYXQoY2FwaXRhbGl6ZSh0b29sdGlwUGxhY2VtZW50KSldLCAhb3BlbiAmJiBjbGFzc2VzLnN0YXRpY1Rvb2x0aXBDbG9zZWQpXG4gICAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgc3R5bGU6IHRyYW5zaXRpb25TdHlsZSxcbiAgICAgIGlkOiBcIlwiLmNvbmNhdChpZCwgXCItbGFiZWxcIiksXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMuc3RhdGljVG9vbHRpcExhYmVsXG4gICAgfSwgdG9vbHRpcFRpdGxlKSwgZmFiKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUb29sdGlwLCBfZXh0ZW5kcyh7XG4gICAgaWQ6IGlkLFxuICAgIHJlZjogcmVmLFxuICAgIHRpdGxlOiB0b29sdGlwVGl0bGUsXG4gICAgcGxhY2VtZW50OiB0b29sdGlwUGxhY2VtZW50LFxuICAgIG9uQ2xvc2U6IGhhbmRsZVRvb2x0aXBDbG9zZSxcbiAgICBvbk9wZW46IGhhbmRsZVRvb2x0aXBPcGVuLFxuICAgIG9wZW46IG9wZW4gJiYgdG9vbHRpcE9wZW4sXG4gICAgY2xhc3NlczogVG9vbHRpcENsYXNzZXNcbiAgfSwgb3RoZXIpLCBmYWIpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTcGVlZERpYWxBY3Rpb24ucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEFkZHMgYSB0cmFuc2l0aW9uIGRlbGF5LCB0byBhbGxvdyBhIHNlcmllcyBvZiBTcGVlZERpYWxBY3Rpb25zIHRvIGJlIGFuaW1hdGVkLlxuICAgKi9cbiAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgRmFiYF0oL2FwaS9mYWIvKSBjb21wb25lbnQuXG4gICAqL1xuICBGYWJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIEljb24gdG8gZGlzcGxheSBpbiB0aGUgU3BlZWREaWFsIEZhYi5cbiAgICovXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaXMgdXNlZCB0byBoZWxwIGltcGxlbWVudCB0aGUgYWNjZXNzaWJpbGl0eSBsb2dpYy5cbiAgICogSWYgeW91IGRvbid0IHByb3ZpZGUgdGhpcyBwcm9wLiBJdCBmYWxscyBiYWNrIHRvIGEgcmFuZG9tbHkgZ2VuZXJhdGVkIGlkLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRvb2x0aXAgaXMgc2hvd24uXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogYGNsYXNzZXNgIHByb3AgYXBwbGllZCB0byB0aGUgW2BUb29sdGlwYF0oL2FwaS90b29sdGlwLykgZWxlbWVudC5cbiAgICovXG4gIFRvb2x0aXBDbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBNYWtlIHRoZSB0b29sdGlwIGFsd2F5cyB2aXNpYmxlIHdoZW4gdGhlIFNwZWVkRGlhbCBpcyBvcGVuLlxuICAgKi9cbiAgdG9vbHRpcE9wZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgdGhlIHRvb2x0aXAuXG4gICAqL1xuICB0b29sdGlwUGxhY2VtZW50OiBQcm9wVHlwZXMub25lT2YoWydib3R0b20tZW5kJywgJ2JvdHRvbS1zdGFydCcsICdib3R0b20nLCAnbGVmdC1lbmQnLCAnbGVmdC1zdGFydCcsICdsZWZ0JywgJ3JpZ2h0LWVuZCcsICdyaWdodC1zdGFydCcsICdyaWdodCcsICd0b3AtZW5kJywgJ3RvcC1zdGFydCcsICd0b3AnXSksXG5cbiAgLyoqXG4gICAqIExhYmVsIHRvIGRpc3BsYXkgaW4gdGhlIHRvb2x0aXAuXG4gICAqL1xuICB0b29sdGlwVGl0bGU6IFByb3BUeXBlcy5ub2RlXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVNwZWVkRGlhbEFjdGlvbidcbn0pKFNwZWVkRGlhbEFjdGlvbik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3BlZWREaWFsQWN0aW9uJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBZGRJY29uIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9BZGQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGhlaWdodDogMjRcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gY29tcG9uZW50LiAqL1xuICAgIGljb246IHtcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3RyYW5zZm9ybScsICdvcGFjaXR5J10sIHtcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBjb21wb25lbnQgaWYgYG9wZW49e3RydWV9YC4gKi9cbiAgICBpY29uT3Blbjoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gd2hlbiBhbmQgYG9wZW5JY29uYCBpcyBwcm92aWRlZCBhbmQgaWYgYG9wZW49e3RydWV9YC4gKi9cbiAgICBpY29uV2l0aE9wZW5JY29uT3Blbjoge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYG9wZW5JY29uYCBpZiBwcm92aWRlZC4gKi9cbiAgICBvcGVuSWNvbjoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd0cmFuc2Zvcm0nLCAnb3BhY2l0eSddLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydFxuICAgICAgfSksXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgb3Blbkljb25gIGlmIHByb3ZpZGVkIGFuZCBpZiBgb3Blbj17dHJ1ZX1gLiAqL1xuICAgIG9wZW5JY29uT3Blbjoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyxcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG4gIH07XG59O1xudmFyIFNwZWVkRGlhbEljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTcGVlZERpYWxJY29uKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgaWNvblByb3AgPSBwcm9wcy5pY29uLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICBvcGVuSWNvblByb3AgPSBwcm9wcy5vcGVuSWNvbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc05hbWVcIiwgXCJjbGFzc2VzXCIsIFwiaWNvblwiLCBcIm9wZW5cIiwgXCJvcGVuSWNvblwiXSk7XG5cbiAgdmFyIGljb25DbGFzc05hbWUgPSBjbHN4KGNsYXNzZXMuaWNvbiwgb3BlbiAmJiBbY2xhc3Nlcy5pY29uT3Blbiwgb3Blbkljb25Qcm9wICYmIGNsYXNzZXMuaWNvbldpdGhPcGVuSWNvbk9wZW5dKTtcbiAgdmFyIG9wZW5JY29uQ2xhc3NOYW1lID0gY2xzeChjbGFzc2VzLm9wZW5JY29uLCBvcGVuICYmIGNsYXNzZXMub3Blbkljb25PcGVuKTtcblxuICBmdW5jdGlvbiBmb3JtYXRJY29uKGljb24sIG5ld0NsYXNzTmFtZSkge1xuICAgIGlmICggLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGljb24pKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChpY29uLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbmV3Q2xhc3NOYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWNvbjtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBvcGVuSWNvblByb3AgPyBmb3JtYXRJY29uKG9wZW5JY29uUHJvcCwgb3Blbkljb25DbGFzc05hbWUpIDogbnVsbCwgaWNvblByb3AgPyBmb3JtYXRJY29uKGljb25Qcm9wLCBpY29uQ2xhc3NOYW1lKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFkZEljb24sIHtcbiAgICBjbGFzc05hbWU6IGljb25DbGFzc05hbWVcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTcGVlZERpYWxJY29uLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0byBkaXNwbGF5IGluIHRoZSBTcGVlZERpYWwgRmxvYXRpbmcgQWN0aW9uIEJ1dHRvbi5cbiAgICovXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIElmIGB0cnVlYCwgdGhlIFNwZWVkRGlhbCBpcyBvcGVuLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRvIGRpc3BsYXkgaW4gdGhlIFNwZWVkRGlhbCBGbG9hdGluZyBBY3Rpb24gQnV0dG9uIHdoZW4gdGhlIFNwZWVkRGlhbCBpcyBvcGVuLlxuICAgKi9cbiAgb3Blbkljb246IFByb3BUeXBlcy5ub2RlXG59IDogdm9pZCAwO1xuU3BlZWREaWFsSWNvbi5tdWlOYW1lID0gJ1NwZWVkRGlhbEljb24nO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVNwZWVkRGlhbEljb24nXG59KShTcGVlZERpYWxJY29uKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TcGVlZERpYWxJY29uJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vKipcbiAqIEB0eXBlIHtSZWFjdC5Db250ZXh0PHsgaWRQcmVmaXg6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9IHwgbnVsbD59XG4gKi9cblxudmFyIENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1RhYkNvbnRleHQnO1xufVxuXG5mdW5jdGlvbiB1c2VVbmlxdWVQcmVmaXgoKSB7XG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShudWxsKSxcbiAgICAgIGlkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0SWQgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRJZChcIm11aS1wLVwiLmNvbmNhdChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTUpKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJDb250ZXh0KHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgdmFyIGlkUHJlZml4ID0gdXNlVW5pcXVlUHJlZml4KCk7XG4gIHZhciBjb250ZXh0ID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkUHJlZml4OiBpZFByZWZpeCxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gIH0sIFtpZFByZWZpeCwgdmFsdWVdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFxuICB9LCBjaGlsZHJlbik7XG59XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJDb250ZXh0LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGBUYWJgLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcbi8qKlxuICogQHJldHVybnMge3Vua25vd259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYkNvbnRleHQoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhbmVsSWQoY29udGV4dCwgdmFsdWUpIHtcbiAgdmFyIGlkUHJlZml4ID0gY29udGV4dC5pZFByZWZpeDtcblxuICBpZiAoaWRQcmVmaXggPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdChjb250ZXh0LmlkUHJlZml4LCBcIi1QLVwiKS5jb25jYXQodmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhYklkKGNvbnRleHQsIHZhbHVlKSB7XG4gIHZhciBpZFByZWZpeCA9IGNvbnRleHQuaWRQcmVmaXg7XG5cbiAgaWYgKGlkUHJlZml4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gXCJcIi5jb25jYXQoY29udGV4dC5pZFByZWZpeCwgXCItVC1cIikuY29uY2F0KHZhbHVlKTtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UYWJDb250ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vVGFiQ29udGV4dCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgeyB1c2VUYWJDb250ZXh0LCBnZXRUYWJJZCwgZ2V0UGFuZWxJZCB9IGZyb20gJy4uL1RhYkNvbnRleHQnO1xudmFyIFRhYkxpc3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUYWJMaXN0KHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuUHJvcCA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCJdKTtcblxuICB2YXIgY29udGV4dCA9IHVzZVRhYkNvbnRleHQoKTtcblxuICBpZiAoY29udGV4dCA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIFRhYkNvbnRleHQgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlblByb3AsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAvLyBTT01FREFZOiBgVGFic2Agd2lsbCBzZXQgdGhvc2UgdGhlbXNlbHZlc1xuICAgICAgJ2FyaWEtY29udHJvbHMnOiBnZXRQYW5lbElkKGNvbnRleHQsIGNoaWxkLnByb3BzLnZhbHVlKSxcbiAgICAgIGlkOiBnZXRUYWJJZChjb250ZXh0LCBjaGlsZC5wcm9wcy52YWx1ZSlcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWJzLCBfZXh0ZW5kcyh7fSwgb3RoZXIsIHtcbiAgICByZWY6IHJlZixcbiAgICB2YWx1ZTogY29udGV4dC52YWx1ZVxuICB9KSwgY2hpbGRyZW4pO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJMaXN0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFRhYkxpc3Q7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGFiTGlzdCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBnZXRQYW5lbElkLCBnZXRUYWJJZCwgdXNlVGFiQ29udGV4dCB9IGZyb20gJy4uL1RhYkNvbnRleHQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMylcbiAgICB9XG4gIH07XG59O1xudmFyIFRhYlBhbmVsID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGFiUGFuZWwocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImNsYXNzZXNcIiwgXCJ2YWx1ZVwiXSk7XG5cbiAgdmFyIGNvbnRleHQgPSB1c2VUYWJDb250ZXh0KCk7XG5cbiAgaWYgKGNvbnRleHQgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBUYWJDb250ZXh0IHByb3ZpZGVkJyk7XG4gIH1cblxuICB2YXIgaWQgPSBnZXRQYW5lbElkKGNvbnRleHQsIHZhbHVlKTtcbiAgdmFyIHRhYklkID0gZ2V0VGFiSWQoY29udGV4dCwgdmFsdWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRhYklkLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgaGlkZGVuOiB2YWx1ZSAhPT0gY29udGV4dC52YWx1ZSxcbiAgICBpZDogaWQsXG4gICAgcmVmOiByZWYsXG4gICAgcm9sZTogXCJ0YWJwYW5lbFwiXG4gIH0sIG90aGVyKSwgdmFsdWUgPT09IGNvbnRleHQudmFsdWUgJiYgY2hpbGRyZW4pO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJQYW5lbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGB2YWx1ZWAgb2YgdGhlIGNvcnJlc3BvbmRpbmcgYFRhYmAuIE11c3QgdXNlIHRoZSBpbmRleCBvZiB0aGUgYFRhYmAgd2hlblxuICAgKiBubyBgdmFsdWVgIHdhcyBwYXNzZWQgdG8gYFRhYmAuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRhYlBhbmVsJ1xufSkoVGFiUGFuZWwpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RhYlBhbmVsJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGltZWxpbmVDb250ZXh0IGZyb20gJy4vVGltZWxpbmVDb250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKCkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBwYWRkaW5nOiAnNnB4IDE2cHgnLFxuICAgICAgZmxleEdyb3c6IDFcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJsZWZ0XCJgLiAqL1xuICAgIGFsaWduTGVmdDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cInJpZ2h0XCJgLiAqL1xuICAgIGFsaWduUmlnaHQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJhbHRlcm5hdGVcImAuICovXG4gICAgYWxpZ25BbHRlcm5hdGU6IHt9XG4gIH07XG59O1xudmFyIFRpbWVsaW5lID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGltZWxpbmUocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGFsaWduID0gcHJvcHMuYWxpZ24sXG4gICAgICBhbGlnbiA9IF9wcm9wcyRhbGlnbiA9PT0gdm9pZCAwID8gJ2xlZnQnIDogX3Byb3BzJGFsaWduLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWxpZ25cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGltZWxpbmVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIGFsaWduOiBhbGlnblxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1tcImFsaWduXCIuY29uY2F0KGNhcGl0YWxpemUoYWxpZ24pKV0sIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRpbWVsaW5lLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiB3aGVyZSB0aGUgdGltZWxpbmUncyBjb250ZW50IHNob3VsZCBhcHBlYXIuXG4gICAqL1xuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnYWx0ZXJuYXRlJywgJ2xlZnQnLCAncmlnaHQnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRpbWVsaW5lJ1xufSkoVGltZWxpbmUpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgVGltZWxpbmVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFRpbWVsaW5lQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdUaW1lbGluZUNvbnRleHQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZUNvbnRleHQ7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGltZWxpbmUnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIHdpZHRoOiAyLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbNDAwXSxcbiAgICAgIGZsZXhHcm93OiAxXG4gICAgfVxuICB9O1xufTtcbnZhciBUaW1lbGluZUNvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRpbWVsaW5lQ29ubmVjdG9yKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGltZWxpbmVDb25uZWN0b3IucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGltZWxpbmVDb25uZWN0b3InXG59KShUaW1lbGluZUNvbm5lY3Rvcik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGltZWxpbmVDb25uZWN0b3InOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91dGlscyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUaW1lbGluZUNvbnRleHQgZnJvbSAnLi4vVGltZWxpbmUvVGltZWxpbmVDb250ZXh0JztcbmltcG9ydCBUaW1lbGluZUl0ZW1Db250ZXh0IGZyb20gJy4uL1RpbWVsaW5lSXRlbS9UaW1lbGluZUl0ZW1Db250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKCkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgZmxleDogMSxcbiAgICAgIHBhZGRpbmc6ICc2cHggMTZweCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJyaWdodFwiYC4gKi9cbiAgICBhbGlnblJpZ2h0OiB7XG4gICAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgICB9XG4gIH07XG59O1xudmFyIFRpbWVsaW5lQ29udGVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRpbWVsaW5lQ29udGVudChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFRpbWVsaW5lQ29udGV4dCksXG4gICAgICBfUmVhY3QkdXNlQ29udGV4dCRhbGkgPSBfUmVhY3QkdXNlQ29udGV4dC5hbGlnbixcbiAgICAgIGFsaWduID0gX1JlYWN0JHVzZUNvbnRleHQkYWxpID09PSB2b2lkIDAgPyAnbGVmdCcgOiBfUmVhY3QkdXNlQ29udGV4dCRhbGk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0MiA9IFJlYWN0LnVzZUNvbnRleHQoVGltZWxpbmVJdGVtQ29udGV4dCksXG4gICAgICBfUmVhY3QkdXNlQ29udGV4dDIkY2wgPSBfUmVhY3QkdXNlQ29udGV4dDIuY2xhc3NlcyxcbiAgICAgIGNvbnRleHRDbGFzc2VzID0gX1JlYWN0JHVzZUNvbnRleHQyJGNsID09PSB2b2lkIDAgPyB7fSA6IF9SZWFjdCR1c2VDb250ZXh0MiRjbDtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNvbnRleHRDbGFzc2VzLmNvbnRlbnQsIGNsYXNzZXNbXCJhbGlnblwiLmNvbmNhdChjYXBpdGFsaXplKGFsaWduKSldLCBjbGFzc05hbWUpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRpbWVsaW5lQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUaW1lbGluZUNvbnRlbnQnXG59KShUaW1lbGluZUNvbnRlbnQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RpbWVsaW5lQ29udGVudCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduU2VsZjogJ2Jhc2VsaW5lJyxcbiAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICBwYWRkaW5nOiA0LFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXSxcbiAgICAgIG1hcmdpblRvcDogOCxcbiAgICAgIG1hcmdpbkJvdHRvbTogOFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImdyZXlcImAgYW5kIGB2YXJpYW50PVwiZGVmYXVsdFwiYC4gKi9cbiAgICBkZWZhdWx0R3JleToge1xuICAgICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzQwMF1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJncmV5XCJgIGFuZCBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIG91dGxpbmVkR3JleToge1xuICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5LmNvbnRyYXN0VGV4dCxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbNDAwXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAgYW5kIGB2YXJpYW50PVwiZGVmYXVsdFwiYC4gKi9cbiAgICBkZWZhdWx0UHJpbWFyeToge1xuICAgICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJwcmltYXJ5XCJgIGFuZCBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIG91dGxpbmVkUHJpbWFyeToge1xuICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAgYW5kIGB2YXJpYW50PVwiZGVmYXVsdFwiYC4gKi9cbiAgICBkZWZhdWx0U2Vjb25kYXJ5OiB7XG4gICAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5jb250cmFzdFRleHQsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAgYW5kIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgb3V0bGluZWRTZWNvbmRhcnk6IHtcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICB9XG4gIH07XG59O1xudmFyIFRpbWVsaW5lRG90ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGltZWxpbmVEb3QocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAnZ3JleScgOiBfcHJvcHMkY29sb3IsXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdkZWZhdWx0JyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgY29sb3IgIT09ICdpbmhlcml0JyAmJiBjbGFzc2VzW1wiXCIuY29uY2F0KHZhcmlhbnQpLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUaW1lbGluZURvdC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGRvdCBjYW4gaGF2ZSBhIGRpZmZlcmVudCBjb2xvcnMuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnZ3JleScsICdpbmhlcml0JywgJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgZG90IGNhbiBhcHBlYXIgZmlsbGVkIG9yIG91dGxpbmVkLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdvdXRsaW5lZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUaW1lbGluZURvdCdcbn0pKFRpbWVsaW5lRG90KTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UaW1lbGluZURvdCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgaXNNdWlFbGVtZW50IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGltZWxpbmVDb250ZXh0IGZyb20gJy4uL1RpbWVsaW5lL1RpbWVsaW5lQ29udGV4dCc7XG5pbXBvcnQgVGltZWxpbmVJdGVtQ29udGV4dCBmcm9tICcuL1RpbWVsaW5lSXRlbUNvbnRleHQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXMoKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgbWluSGVpZ2h0OiA3MFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImxlZnRcImAuICovXG4gICAgYWxpZ25MZWZ0OiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduPVwicmlnaHRcImAuICovXG4gICAgYWxpZ25SaWdodDoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cImFsdGVybmF0ZVwiYC4gKi9cbiAgICBhbGlnbkFsdGVybmF0ZToge1xuICAgICAgJyY6bnRoLWNoaWxkKGV2ZW4pJzoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93LXJldmVyc2UnLFxuICAgICAgICAnJiAkY29udGVudCc6IHtcbiAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYgJG9wcG9zaXRlQ29udGVudCc6IHtcbiAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgbm8gdGhlcmUgaXNuJ3QgVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQgcHJvdmlkZWQuICovXG4gICAgbWlzc2luZ09wcG9zaXRlQ29udGVudDoge1xuICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIHBhZGRpbmc6ICc2cHggMTZweCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHRpbWVsaW5lIGNvbnRlbnQgbm9kZS4gKi9cbiAgICBjb250ZW50OiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSB0aW1lbGluZSBvcHBvc2l0ZSBjb250ZW50IG5vZGUuICovXG4gICAgb3Bwb3NpdGVDb250ZW50OiB7fVxuICB9O1xufTtcbnZhciBUaW1lbGluZUl0ZW0gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUaW1lbGluZUl0ZW0ocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChUaW1lbGluZUNvbnRleHQpLFxuICAgICAgX1JlYWN0JHVzZUNvbnRleHQkYWxpID0gX1JlYWN0JHVzZUNvbnRleHQuYWxpZ24sXG4gICAgICBhbGlnbiA9IF9SZWFjdCR1c2VDb250ZXh0JGFsaSA9PT0gdm9pZCAwID8gJ2xlZnQnIDogX1JlYWN0JHVzZUNvbnRleHQkYWxpO1xuXG4gIHZhciBoYXNPcHBvc2l0ZUNvbnRlbnQgPSBmYWxzZTtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGlzTXVpRWxlbWVudChjaGlsZCwgWydUaW1lbGluZU9wcG9zaXRlQ29udGVudCddKSkge1xuICAgICAgaGFzT3Bwb3NpdGVDb250ZW50ID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGltZWxpbmVJdGVtQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB7XG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIGNvbnRlbnQ6IGNsYXNzZXMuY29udGVudCxcbiAgICAgICAgb3Bwb3NpdGVDb250ZW50OiBjbGFzc2VzLm9wcG9zaXRlQ29udGVudFxuICAgICAgfVxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1tcImFsaWduXCIuY29uY2F0KGNhcGl0YWxpemUoYWxpZ24pKV0sIGNsYXNzTmFtZSwgIWhhc09wcG9zaXRlQ29udGVudCAmJiBjbGFzc2VzLm1pc3NpbmdPcHBvc2l0ZUNvbnRlbnQpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUaW1lbGluZUl0ZW0ucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGltZWxpbmVJdGVtJ1xufSkoVGltZWxpbmVJdGVtKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxudmFyIFRpbWVsaW5lSXRlbUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVGltZWxpbmVJdGVtQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdUaW1lbGluZUl0ZW1Db250ZXh0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVJdGVtQ29udGV4dDsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UaW1lbGluZUl0ZW0nOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91dGlscyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUaW1lbGluZUNvbnRleHQgZnJvbSAnLi4vVGltZWxpbmUvVGltZWxpbmVDb250ZXh0JztcbmltcG9ydCBUaW1lbGluZUl0ZW1Db250ZXh0IGZyb20gJy4uL1RpbWVsaW5lSXRlbS9UaW1lbGluZUl0ZW1Db250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKCkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcGFkZGluZzogJzZweCAxNnB4JyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICBmbGV4OiAxXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsaWduPVwicmlnaHRcImAuICovXG4gICAgYWxpZ25SaWdodDoge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCdcbiAgICB9XG4gIH07XG59O1xudmFyIFRpbWVsaW5lT3Bwb3NpdGVDb250ZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChUaW1lbGluZUNvbnRleHQpLFxuICAgICAgX1JlYWN0JHVzZUNvbnRleHQkYWxpID0gX1JlYWN0JHVzZUNvbnRleHQuYWxpZ24sXG4gICAgICBhbGlnbiA9IF9SZWFjdCR1c2VDb250ZXh0JGFsaSA9PT0gdm9pZCAwID8gJ2xlZnQnIDogX1JlYWN0JHVzZUNvbnRleHQkYWxpO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dDIgPSBSZWFjdC51c2VDb250ZXh0KFRpbWVsaW5lSXRlbUNvbnRleHQpLFxuICAgICAgX1JlYWN0JHVzZUNvbnRleHQyJGNsID0gX1JlYWN0JHVzZUNvbnRleHQyLmNsYXNzZXMsXG4gICAgICBjb250ZXh0Q2xhc3NlcyA9IF9SZWFjdCR1c2VDb250ZXh0MiRjbCA9PT0gdm9pZCAwID8ge30gOiBfUmVhY3QkdXNlQ29udGV4dDIkY2w7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjb250ZXh0Q2xhc3Nlcy5vcHBvc2l0ZUNvbnRlbnQsIGNsYXNzZXNbXCJhbGlnblwiLmNvbmNhdChjYXBpdGFsaXplKGFsaWduKSldLCBjbGFzc05hbWUpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRpbWVsaW5lT3Bwb3NpdGVDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59IDogdm9pZCAwO1xuVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQubXVpTmFtZSA9ICdUaW1lbGluZU9wcG9zaXRlQ29udGVudCc7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQnXG59KShUaW1lbGluZU9wcG9zaXRlQ29udGVudCk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXMoKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGZsZXg6IDAsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICAgIH1cbiAgfTtcbn07XG52YXIgVGltZWxpbmVTZXBhcmF0b3IgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUaW1lbGluZVNlcGFyYXRvcihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGltZWxpbmVTZXBhcmF0b3IucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVGltZWxpbmVTZXBhcmF0b3InXG59KShUaW1lbGluZVNlcGFyYXRvcik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGltZWxpbmVTZXBhcmF0b3InOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbi8vIEBpbmhlcml0ZWRDb21wb25lbnQgQnV0dG9uQmFzZVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgZmFkZSwgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91dGlscyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDogX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLCB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgcGFkZGluZzogMTEsXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdChmYWRlKHRoZW1lLnBhbGV0dGUuYWN0aW9uLmFjdGl2ZSwgMC4xMikpLFxuICAgICAgY29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5hY3Rpb24uYWN0aXZlLCAwLjM4KSxcbiAgICAgICcmJHNlbGVjdGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uYWN0aXZlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5hY3Rpb24uYWN0aXZlLCAwLjEyKSxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuYWN0aW9uLmFjdGl2ZSwgMC4xNSlcbiAgICAgICAgfSxcbiAgICAgICAgJyYgKyAmJzoge1xuICAgICAgICAgIGJvcmRlckxlZnQ6IDAsXG4gICAgICAgICAgbWFyZ2luTGVmdDogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkLCAwLjEyKVxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICAvLyBSZXNldCBvbiBtb3VzZSBkZXZpY2VzXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSwgMC4wNSksXG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2VsZWN0ZWQ9e3RydWV9YC4gKi9cbiAgICBzZWxlY3RlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGxhYmVsYCB3cmFwcGVyIGVsZW1lbnQuICovXG4gICAgbGFiZWw6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAvLyBFbnN1cmUgdGhlIGNvcnJlY3Qgd2lkdGggZm9yIGlPUyBTYWZhcmlcbiAgICAgIGRpc3BsYXk6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2l6ZT1cInNtYWxsXCJgLiAqL1xuICAgIHNpemVTbWFsbDoge1xuICAgICAgcGFkZGluZzogNyxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTMpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHNpemU9XCJsYXJnZVwiYC4gKi9cbiAgICBzaXplTGFyZ2U6IHtcbiAgICAgIHBhZGRpbmc6IDE1LFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNSlcbiAgICB9XG4gIH07XG59O1xudmFyIFRvZ2dsZUJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRvZ2dsZUJ1dHRvbihwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkID0gX3Byb3BzJGRpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlRm9jdXNSaSA9IHByb3BzLmRpc2FibGVGb2N1c1JpcHBsZSxcbiAgICAgIGRpc2FibGVGb2N1c1JpcHBsZSA9IF9wcm9wcyRkaXNhYmxlRm9jdXNSaSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUZvY3VzUmksXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBzZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkLFxuICAgICAgX3Byb3BzJHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc2l6ZSA9IF9wcm9wcyRzaXplID09PSB2b2lkIDAgPyAnbWVkaXVtJyA6IF9wcm9wcyRzaXplLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiLCBcImRpc2FibGVGb2N1c1JpcHBsZVwiLCBcIm9uQ2hhbmdlXCIsIFwib25DbGlja1wiLCBcInNlbGVjdGVkXCIsIFwic2l6ZVwiLCBcInZhbHVlXCJdKTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZXZlbnQsIHZhbHVlKTtcblxuICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKGV2ZW50LCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25CYXNlLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBzZWxlY3RlZCAmJiBjbGFzc2VzLnNlbGVjdGVkLCBzaXplICE9PSAnbWVkaXVtJyAmJiBjbGFzc2VzW1wic2l6ZVwiLmNvbmNhdChjYXBpdGFsaXplKHNpemUpKV0pLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBmb2N1c1JpcHBsZTogIWRpc2FibGVGb2N1c1JpcHBsZSxcbiAgICByZWY6IHJlZixcbiAgICBvbkNsaWNrOiBoYW5kbGVDaGFuZ2UsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBcImFyaWEtcHJlc3NlZFwiOiBzZWxlY3RlZFxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmxhYmVsXG4gIH0sIGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRvZ2dsZUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSAga2V5Ym9hcmQgZm9jdXMgcmlwcGxlIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlRm9jdXNSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSByaXBwbGUgZWZmZWN0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYnV0dG9uIHdpbGwgYmUgcmVuZGVyZWQgaW4gYW4gYWN0aXZlIHN0YXRlLlxuICAgKi9cbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgYnV0dG9uIHdoZW4gc2VsZWN0ZWQgaW4gYVxuICAgKiBUb2dnbGVCdXR0b25Hcm91cC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVG9nZ2xlQnV0dG9uJ1xufSkoVG9nZ2xlQnV0dG9uKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ub2dnbGVCdXR0b24nOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzRnJhZ21lbnQgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgaXNWYWx1ZVNlbGVjdGVkIGZyb20gJy4vaXNWYWx1ZVNlbGVjdGVkJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXNcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiYC4gKi9cbiAgICB2ZXJ0aWNhbDoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuLiAqL1xuICAgIGdyb3VwZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGBvcmllbnRhdGlvbj1cImhvcml6b250YWxcImAuICovXG4gICAgZ3JvdXBlZEhvcml6b250YWw6IHtcbiAgICAgICcmOm5vdCg6Zmlyc3QtY2hpbGQpJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAtMSxcbiAgICAgICAgYm9yZGVyTGVmdDogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDAsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDBcbiAgICAgIH0sXG4gICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogMCxcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICAgIGdyb3VwZWRWZXJ0aWNhbDoge1xuICAgICAgJyY6bm90KDpmaXJzdC1jaGlsZCknOiB7XG4gICAgICAgIG1hcmdpblRvcDogLTEsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDAsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAwXG4gICAgICB9LFxuICAgICAgJyY6bm90KDpsYXN0LWNoaWxkKSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogMCxcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDBcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xudmFyIFRvZ2dsZUJ1dHRvbkdyb3VwID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVG9nZ2xlQnV0dG9uKHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRleGNsdXNpdmUgPSBwcm9wcy5leGNsdXNpdmUsXG4gICAgICBleGNsdXNpdmUgPSBfcHJvcHMkZXhjbHVzaXZlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRleGNsdXNpdmUsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgX3Byb3BzJG9yaWVudGF0aW9uID0gcHJvcHMub3JpZW50YXRpb24sXG4gICAgICBvcmllbnRhdGlvbiA9IF9wcm9wcyRvcmllbnRhdGlvbiA9PT0gdm9pZCAwID8gJ2hvcml6b250YWwnIDogX3Byb3BzJG9yaWVudGF0aW9uLFxuICAgICAgX3Byb3BzJHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc2l6ZSA9IF9wcm9wcyRzaXplID09PSB2b2lkIDAgPyAnbWVkaXVtJyA6IF9wcm9wcyRzaXplLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJleGNsdXNpdmVcIiwgXCJvbkNoYW5nZVwiLCBcIm9yaWVudGF0aW9uXCIsIFwic2l6ZVwiLCBcInZhbHVlXCJdKTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50LCBidXR0b25WYWx1ZSkge1xuICAgIGlmICghb25DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKGJ1dHRvblZhbHVlKTtcbiAgICB2YXIgbmV3VmFsdWU7XG5cbiAgICBpZiAodmFsdWUgJiYgaW5kZXggPj0gMCkge1xuICAgICAgbmV3VmFsdWUgPSB2YWx1ZS5zbGljZSgpO1xuICAgICAgbmV3VmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWUgPSB2YWx1ZSA/IHZhbHVlLmNvbmNhdChidXR0b25WYWx1ZSkgOiBbYnV0dG9uVmFsdWVdO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKGV2ZW50LCBuZXdWYWx1ZSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUV4Y2x1c2l2ZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUV4Y2x1c2l2ZUNoYW5nZShldmVudCwgYnV0dG9uVmFsdWUpIHtcbiAgICBpZiAoIW9uQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25DaGFuZ2UoZXZlbnQsIHZhbHVlID09PSBidXR0b25WYWx1ZSA/IG51bGwgOiBidXR0b25WYWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByb2xlOiBcImdyb3VwXCIsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJiBjbGFzc2VzLnZlcnRpY2FsKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgVG9nZ2xlQnV0dG9uR3JvdXAgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuZ3JvdXBlZCwgY2xhc3Nlc1tcImdyb3VwZWRcIi5jb25jYXQoY2FwaXRhbGl6ZShvcmllbnRhdGlvbikpXSwgY2hpbGQucHJvcHMuY2xhc3NOYW1lKSxcbiAgICAgIG9uQ2hhbmdlOiBleGNsdXNpdmUgPyBoYW5kbGVFeGNsdXNpdmVDaGFuZ2UgOiBoYW5kbGVDaGFuZ2UsXG4gICAgICBzZWxlY3RlZDogY2hpbGQucHJvcHMuc2VsZWN0ZWQgPT09IHVuZGVmaW5lZCA/IGlzVmFsdWVTZWxlY3RlZChjaGlsZC5wcm9wcy52YWx1ZSwgdmFsdWUpIDogY2hpbGQucHJvcHMuc2VsZWN0ZWQsXG4gICAgICBzaXplOiBjaGlsZC5wcm9wcy5zaXplIHx8IHNpemVcbiAgICB9KTtcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUb2dnbGVCdXR0b25Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBvbmx5IGFsbG93IG9uZSBvZiB0aGUgY2hpbGQgVG9nZ2xlQnV0dG9uIHZhbHVlcyB0byBiZSBzZWxlY3RlZC5cbiAgICovXG4gIGV4Y2x1c2l2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBidXR0b25zLiBXaGVuIGBleGNsdXNpdmVgIGlzIHRydWVcbiAgICogdGhpcyBpcyBhIHNpbmdsZSB2YWx1ZTsgd2hlbiBmYWxzZSBhbiBhcnJheSBvZiBzZWxlY3RlZCB2YWx1ZXMuIElmIG5vIHZhbHVlXG4gICAqIGlzIHNlbGVjdGVkIGFuZCBgZXhjbHVzaXZlYCBpcyB0cnVlIHRoZSB2YWx1ZSBpcyBudWxsOyB3aGVuIGZhbHNlIGFuIGVtcHR5IGFycmF5LlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgZ3JvdXAgb3JpZW50YXRpb24gKGxheW91dCBmbG93IGRpcmVjdGlvbikuXG4gICAqL1xuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKSxcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGJ1dHRvbnMuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydsYXJnZScsICdtZWRpdW0nLCAnc21hbGwnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdmFsdWUgd2l0aGluIHRoZSBncm91cCBvciBhbiBhcnJheSBvZiBzZWxlY3RlZFxuICAgKiB2YWx1ZXMgd2hlbiBgZXhjbHVzaXZlYCBpcyBmYWxzZS5cbiAgICpcbiAgICogVGhlIHZhbHVlIG11c3QgaGF2ZSByZWZlcmVuY2UgZXF1YWxpdHkgd2l0aCB0aGUgb3B0aW9uIGluIG9yZGVyIHRvIGJlIHNlbGVjdGVkLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVG9nZ2xlQnV0dG9uR3JvdXAnXG59KShUb2dnbGVCdXR0b25Hcm91cCk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVG9nZ2xlQnV0dG9uR3JvdXAnOyIsIi8vIERldGVybWluZSBpZiB0aGUgdG9nZ2xlIGJ1dHRvbiB2YWx1ZSBtYXRjaGVzLCBvciBpcyBjb250YWluZWQgaW4sIHRoZVxuLy8gY2FuZGlkYXRlIGdyb3VwIHZhbHVlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWx1ZVNlbGVjdGVkKHZhbHVlLCBjYW5kaWRhdGUpIHtcbiAgaWYgKGNhbmRpZGF0ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShjYW5kaWRhdGUpKSB7XG4gICAgcmV0dXJuIGNhbmRpZGF0ZS5pbmRleE9mKHZhbHVlKSA+PSAwO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlID09PSBjYW5kaWRhdGU7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzLCBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnMgICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSc7XG5pbXBvcnQgeyBmYWRlLCB3aXRoU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VGb3JrUmVmIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuaW1wb3J0IFRyZWVWaWV3Q29udGV4dCBmcm9tICcuLi9UcmVlVmlldy9UcmVlVmlld0NvbnRleHQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICcmOmZvY3VzID4gJGNvbnRlbnQgJGxhYmVsJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyXG4gICAgICB9LFxuICAgICAgJyYkc2VsZWN0ZWQgPiAkY29udGVudCAkbGFiZWwnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgdGhlbWUucGFsZXR0ZS5hY3Rpb24uc2VsZWN0ZWRPcGFjaXR5KVxuICAgICAgfSxcbiAgICAgICcmJHNlbGVjdGVkID4gJGNvbnRlbnQgJGxhYmVsOmhvdmVyLCAmJHNlbGVjdGVkOmZvY3VzID4gJGNvbnRlbnQgJGxhYmVsJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIHRoZW1lLnBhbGV0dGUuYWN0aW9uLnNlbGVjdGVkT3BhY2l0eSArIHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyT3BhY2l0eSksXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IHdoZW4gZXhwYW5kZWQuICovXG4gICAgZXhwYW5kZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCB3aGVuIHNlbGVjdGVkLiAqL1xuICAgIHNlbGVjdGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgcm9sZT1cImdyb3VwXCJgIGVsZW1lbnQuICovXG4gICAgZ3JvdXA6IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBtYXJnaW5MZWZ0OiAxN1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgdHJlZSBub2RlIGNvbnRlbnQuICovXG4gICAgY29udGVudDoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHRyZWUgbm9kZSBpY29uIGFuZCBjb2xsYXBzZS9leHBhbmQgaWNvbi4gKi9cbiAgICBpY29uQ29udGFpbmVyOiB7XG4gICAgICBtYXJnaW5SaWdodDogNCxcbiAgICAgIHdpZHRoOiAxNSxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAnJiBzdmcnOiB7XG4gICAgICAgIGZvbnRTaXplOiAxOFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgbGFiZWwgZWxlbWVudC4gKi9cbiAgICBsYWJlbDoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiA0LFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3ZlcixcbiAgICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcbiAgICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxudmFyIGlzUHJpbnRhYmxlQ2hhcmFjdGVyID0gZnVuY3Rpb24gaXNQcmludGFibGVDaGFyYWN0ZXIoc3RyKSB7XG4gIHJldHVybiBzdHIgJiYgc3RyLmxlbmd0aCA9PT0gMSAmJiBzdHIubWF0Y2goL1xcUy8pO1xufTtcblxudmFyIFRyZWVJdGVtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVHJlZUl0ZW0ocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29sbGFwc2VJY29uID0gcHJvcHMuY29sbGFwc2VJY29uLFxuICAgICAgZW5kSWNvbiA9IHByb3BzLmVuZEljb24sXG4gICAgICBleHBhbmRJY29uID0gcHJvcHMuZXhwYW5kSWNvbixcbiAgICAgIGljb25Qcm9wID0gcHJvcHMuaWNvbixcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBub2RlSWQgPSBwcm9wcy5ub2RlSWQsXG4gICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgIG9uTGFiZWxDbGljayA9IHByb3BzLm9uTGFiZWxDbGljayxcbiAgICAgIG9uSWNvbkNsaWNrID0gcHJvcHMub25JY29uQ2xpY2ssXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uS2V5RG93biA9IHByb3BzLm9uS2V5RG93bixcbiAgICAgIG9uTW91c2VEb3duID0gcHJvcHMub25Nb3VzZURvd24sXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPSBwcm9wcy5UcmFuc2l0aW9uQ29tcG9uZW50LFxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudCA9IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9PT0gdm9pZCAwID8gQ29sbGFwc2UgOiBfcHJvcHMkVHJhbnNpdGlvbkNvbXAsXG4gICAgICBUcmFuc2l0aW9uUHJvcHMgPSBwcm9wcy5UcmFuc2l0aW9uUHJvcHMsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sbGFwc2VJY29uXCIsIFwiZW5kSWNvblwiLCBcImV4cGFuZEljb25cIiwgXCJpY29uXCIsIFwibGFiZWxcIiwgXCJub2RlSWRcIiwgXCJvbkNsaWNrXCIsIFwib25MYWJlbENsaWNrXCIsIFwib25JY29uQ2xpY2tcIiwgXCJvbkZvY3VzXCIsIFwib25LZXlEb3duXCIsIFwib25Nb3VzZURvd25cIiwgXCJUcmFuc2l0aW9uQ29tcG9uZW50XCIsIFwiVHJhbnNpdGlvblByb3BzXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFRyZWVWaWV3Q29udGV4dCksXG4gICAgICBjb250ZXh0SWNvbnMgPSBfUmVhY3QkdXNlQ29udGV4dC5pY29ucyxcbiAgICAgIGZvY3VzID0gX1JlYWN0JHVzZUNvbnRleHQuZm9jdXMsXG4gICAgICBmb2N1c0ZpcnN0Tm9kZSA9IF9SZWFjdCR1c2VDb250ZXh0LmZvY3VzRmlyc3ROb2RlLFxuICAgICAgZm9jdXNMYXN0Tm9kZSA9IF9SZWFjdCR1c2VDb250ZXh0LmZvY3VzTGFzdE5vZGUsXG4gICAgICBmb2N1c05leHROb2RlID0gX1JlYWN0JHVzZUNvbnRleHQuZm9jdXNOZXh0Tm9kZSxcbiAgICAgIGZvY3VzUHJldmlvdXNOb2RlID0gX1JlYWN0JHVzZUNvbnRleHQuZm9jdXNQcmV2aW91c05vZGUsXG4gICAgICBmb2N1c0J5Rmlyc3RDaGFyYWN0ZXIgPSBfUmVhY3QkdXNlQ29udGV4dC5mb2N1c0J5Rmlyc3RDaGFyYWN0ZXIsXG4gICAgICBzZWxlY3ROb2RlID0gX1JlYWN0JHVzZUNvbnRleHQuc2VsZWN0Tm9kZSxcbiAgICAgIHNlbGVjdFJhbmdlID0gX1JlYWN0JHVzZUNvbnRleHQuc2VsZWN0UmFuZ2UsXG4gICAgICBzZWxlY3ROZXh0Tm9kZSA9IF9SZWFjdCR1c2VDb250ZXh0LnNlbGVjdE5leHROb2RlLFxuICAgICAgc2VsZWN0UHJldmlvdXNOb2RlID0gX1JlYWN0JHVzZUNvbnRleHQuc2VsZWN0UHJldmlvdXNOb2RlLFxuICAgICAgcmFuZ2VTZWxlY3RUb0ZpcnN0ID0gX1JlYWN0JHVzZUNvbnRleHQucmFuZ2VTZWxlY3RUb0ZpcnN0LFxuICAgICAgcmFuZ2VTZWxlY3RUb0xhc3QgPSBfUmVhY3QkdXNlQ29udGV4dC5yYW5nZVNlbGVjdFRvTGFzdCxcbiAgICAgIHNlbGVjdEFsbE5vZGVzID0gX1JlYWN0JHVzZUNvbnRleHQuc2VsZWN0QWxsTm9kZXMsXG4gICAgICBleHBhbmRBbGxTaWJsaW5ncyA9IF9SZWFjdCR1c2VDb250ZXh0LmV4cGFuZEFsbFNpYmxpbmdzLFxuICAgICAgdG9nZ2xlRXhwYW5zaW9uID0gX1JlYWN0JHVzZUNvbnRleHQudG9nZ2xlRXhwYW5zaW9uLFxuICAgICAgaXNFeHBhbmRlZCA9IF9SZWFjdCR1c2VDb250ZXh0LmlzRXhwYW5kZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBfUmVhY3QkdXNlQ29udGV4dC5pc0ZvY3VzZWQsXG4gICAgICBpc1NlbGVjdGVkID0gX1JlYWN0JHVzZUNvbnRleHQuaXNTZWxlY3RlZCxcbiAgICAgIGlzVGFiYmFibGUgPSBfUmVhY3QkdXNlQ29udGV4dC5pc1RhYmJhYmxlLFxuICAgICAgbXVsdGlTZWxlY3QgPSBfUmVhY3QkdXNlQ29udGV4dC5tdWx0aVNlbGVjdCxcbiAgICAgIGdldFBhcmVudCA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFBhcmVudCxcbiAgICAgIG1hcEZpcnN0Q2hhciA9IF9SZWFjdCR1c2VDb250ZXh0Lm1hcEZpcnN0Q2hhcixcbiAgICAgIGFkZE5vZGVUb05vZGVNYXAgPSBfUmVhY3QkdXNlQ29udGV4dC5hZGROb2RlVG9Ob2RlTWFwLFxuICAgICAgcmVtb3ZlTm9kZUZyb21Ob2RlTWFwID0gX1JlYWN0JHVzZUNvbnRleHQucmVtb3ZlTm9kZUZyb21Ob2RlTWFwO1xuXG4gIHZhciBub2RlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgY29udGVudFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYobm9kZVJlZiwgcmVmKTtcbiAgdmFyIGljb24gPSBpY29uUHJvcDtcbiAgdmFyIGV4cGFuZGFibGUgPSBCb29sZWFuKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4ubGVuZ3RoIDogY2hpbGRyZW4pO1xuICB2YXIgZXhwYW5kZWQgPSBpc0V4cGFuZGVkID8gaXNFeHBhbmRlZChub2RlSWQpIDogZmFsc2U7XG4gIHZhciBmb2N1c2VkID0gaXNGb2N1c2VkID8gaXNGb2N1c2VkKG5vZGVJZCkgOiBmYWxzZTtcbiAgdmFyIHRhYmJhYmxlID0gaXNUYWJiYWJsZSA/IGlzVGFiYmFibGUobm9kZUlkKSA6IGZhbHNlO1xuICB2YXIgc2VsZWN0ZWQgPSBpc1NlbGVjdGVkID8gaXNTZWxlY3RlZChub2RlSWQpIDogZmFsc2U7XG4gIHZhciBpY29ucyA9IGNvbnRleHRJY29ucyB8fCB7fTtcbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICBpZiAoIWljb24pIHtcbiAgICBpZiAoZXhwYW5kYWJsZSkge1xuICAgICAgaWYgKCFleHBhbmRlZCkge1xuICAgICAgICBpY29uID0gZXhwYW5kSWNvbiB8fCBpY29ucy5kZWZhdWx0RXhwYW5kSWNvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGljb24gPSBjb2xsYXBzZUljb24gfHwgaWNvbnMuZGVmYXVsdENvbGxhcHNlSWNvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgIGljb24gPSBpY29ucy5kZWZhdWx0UGFyZW50SWNvbjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWNvbiA9IGVuZEljb24gfHwgaWNvbnMuZGVmYXVsdEVuZEljb247XG4gICAgfVxuICB9XG5cbiAgdmFyIGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAoIWZvY3VzZWQpIHtcbiAgICAgIGZvY3VzKG5vZGVJZCk7XG4gICAgfVxuXG4gICAgdmFyIG11bHRpcGxlID0gbXVsdGlTZWxlY3QgJiYgKGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSk7IC8vIElmIGFscmVhZHkgZXhwYW5kZWQgYW5kIHRyeWluZyB0byB0b2dnbGUgc2VsZWN0aW9uIGRvbid0IGNsb3NlXG5cbiAgICBpZiAoZXhwYW5kYWJsZSAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAhKG11bHRpcGxlICYmIGlzRXhwYW5kZWQobm9kZUlkKSkpIHtcbiAgICAgIHRvZ2dsZUV4cGFuc2lvbihldmVudCwgbm9kZUlkKTtcbiAgICB9XG5cbiAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICBzZWxlY3RSYW5nZShldmVudCwge1xuICAgICAgICAgIGVuZDogbm9kZUlkXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0Tm9kZShldmVudCwgbm9kZUlkLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0Tm9kZShldmVudCwgbm9kZUlkKTtcbiAgICB9XG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljayhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChvbk1vdXNlRG93bikge1xuICAgICAgb25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlTmV4dEFycm93ID0gZnVuY3Rpb24gaGFuZGxlTmV4dEFycm93KGV2ZW50KSB7XG4gICAgaWYgKGV4cGFuZGFibGUpIHtcbiAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICBmb2N1c05leHROb2RlKG5vZGVJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVFeHBhbnNpb24oZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHZhciBoYW5kbGVQcmV2aW91c0Fycm93ID0gZnVuY3Rpb24gaGFuZGxlUHJldmlvdXNBcnJvdyhldmVudCkge1xuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgdG9nZ2xlRXhwYW5zaW9uKGV2ZW50LCBub2RlSWQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IGdldFBhcmVudChub2RlSWQpO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgZm9jdXMocGFyZW50KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICB2YXIgZmxhZyA9IGZhbHNlO1xuICAgIHZhciBrZXkgPSBldmVudC5rZXk7XG5cbiAgICBpZiAoZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQgIT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdHJsUHJlc3NlZCA9IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleTtcblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICcgJzpcbiAgICAgICAgaWYgKG5vZGVSZWYuY3VycmVudCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIGlmIChtdWx0aVNlbGVjdCAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgZmxhZyA9IHNlbGVjdFJhbmdlKGV2ZW50LCB7XG4gICAgICAgICAgICAgIGVuZDogbm9kZUlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG11bHRpU2VsZWN0KSB7XG4gICAgICAgICAgICBmbGFnID0gc2VsZWN0Tm9kZShldmVudCwgbm9kZUlkLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmxhZyA9IHNlbGVjdE5vZGUoZXZlbnQsIG5vZGVJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGlmIChub2RlUmVmLmN1cnJlbnQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQgJiYgZXhwYW5kYWJsZSkge1xuICAgICAgICAgIHRvZ2dsZUV4cGFuc2lvbihldmVudCk7XG4gICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGlmIChtdWx0aVNlbGVjdCAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHNlbGVjdE5leHROb2RlKGV2ZW50LCBub2RlSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9jdXNOZXh0Tm9kZShub2RlSWQpO1xuICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBpZiAobXVsdGlTZWxlY3QgJiYgZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICBzZWxlY3RQcmV2aW91c05vZGUoZXZlbnQsIG5vZGVJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb2N1c1ByZXZpb3VzTm9kZShub2RlSWQpO1xuICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBpZiAodGhlbWUuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgICAgIGZsYWcgPSBoYW5kbGVQcmV2aW91c0Fycm93KGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbGFnID0gaGFuZGxlTmV4dEFycm93KGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBpZiAodGhlbWUuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgICAgIGZsYWcgPSBoYW5kbGVOZXh0QXJyb3coZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZsYWcgPSBoYW5kbGVQcmV2aW91c0Fycm93KGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgaWYgKG11bHRpU2VsZWN0ICYmIGN0cmxQcmVzc2VkICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgcmFuZ2VTZWxlY3RUb0ZpcnN0KGV2ZW50LCBub2RlSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9jdXNGaXJzdE5vZGUoKTtcbiAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdFbmQnOlxuICAgICAgICBpZiAobXVsdGlTZWxlY3QgJiYgY3RybFByZXNzZWQgJiYgZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICByYW5nZVNlbGVjdFRvTGFzdChldmVudCwgbm9kZUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvY3VzTGFzdE5vZGUoKTtcbiAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoa2V5ID09PSAnKicpIHtcbiAgICAgICAgICBleHBhbmRBbGxTaWJsaW5ncyhldmVudCwgbm9kZUlkKTtcbiAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChtdWx0aVNlbGVjdCAmJiBjdHJsUHJlc3NlZCAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2EnKSB7XG4gICAgICAgICAgZmxhZyA9IHNlbGVjdEFsbE5vZGVzKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICghY3RybFByZXNzZWQgJiYgIWV2ZW50LnNoaWZ0S2V5ICYmIGlzUHJpbnRhYmxlQ2hhcmFjdGVyKGtleSkpIHtcbiAgICAgICAgICBmb2N1c0J5Rmlyc3RDaGFyYWN0ZXIobm9kZUlkLCBrZXkpO1xuICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpZiAoZmxhZykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGlmIChvbktleURvd24pIHtcbiAgICAgIG9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gICAgaWYgKCFmb2N1c2VkICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQgPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgZm9jdXMobm9kZUlkKTtcbiAgICB9XG5cbiAgICBpZiAob25Gb2N1cykge1xuICAgICAgb25Gb2N1cyhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFkZE5vZGVUb05vZGVNYXApIHtcbiAgICAgIHZhciBjaGlsZElkcyA9IFtdO1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICggLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSAmJiBjaGlsZC5wcm9wcy5ub2RlSWQpIHtcbiAgICAgICAgICBjaGlsZElkcy5wdXNoKGNoaWxkLnByb3BzLm5vZGVJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYWRkTm9kZVRvTm9kZU1hcChub2RlSWQsIGNoaWxkSWRzKTtcbiAgICB9XG4gIH0sIFtjaGlsZHJlbiwgbm9kZUlkLCBhZGROb2RlVG9Ob2RlTWFwXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlbW92ZU5vZGVGcm9tTm9kZU1hcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVtb3ZlTm9kZUZyb21Ob2RlTWFwKG5vZGVJZCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sIFtub2RlSWQsIHJlbW92ZU5vZGVGcm9tTm9kZU1hcF0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtYXBGaXJzdENoYXIgJiYgbGFiZWwpIHtcbiAgICAgIG1hcEZpcnN0Q2hhcihub2RlSWQsIGNvbnRlbnRSZWYuY3VycmVudC50ZXh0Q29udGVudC5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICB9LCBbbWFwRmlyc3RDaGFyLCBub2RlSWQsIGxhYmVsXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZvY3VzZWQpIHtcbiAgICAgIG5vZGVSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgW2ZvY3VzZWRdKTtcbiAgdmFyIGFyaWFTZWxlY3RlZDtcblxuICBpZiAobXVsdGlTZWxlY3QpIHtcbiAgICBhcmlhU2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZCkge1xuICAgIC8vIHNpbmdsZS1zZWxlY3Rpb24gdHJlZXMgdW5zZXQgYXJpYS1zZWxlY3RlZFxuICAgIGFyaWFTZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBleHBhbmRlZCAmJiBjbGFzc2VzLmV4cGFuZGVkLCBzZWxlY3RlZCAmJiBjbGFzc2VzLnNlbGVjdGVkKSxcbiAgICByb2xlOiBcInRyZWVpdGVtXCIsXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzLFxuICAgIFwiYXJpYS1leHBhbmRlZFwiOiBleHBhbmRhYmxlID8gZXhwYW5kZWQgOiBudWxsLFxuICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBhcmlhU2VsZWN0ZWQsXG4gICAgcmVmOiBoYW5kbGVSZWYsXG4gICAgdGFiSW5kZXg6IHRhYmJhYmxlID8gMCA6IC0xXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5jb250ZW50LFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgIG9uTW91c2VEb3duOiBoYW5kbGVNb3VzZURvd24sXG4gICAgcmVmOiBjb250ZW50UmVmXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBvbkNsaWNrOiBvbkljb25DbGljayxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuaWNvbkNvbnRhaW5lclxuICB9LCBpY29uKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeSwge1xuICAgIG9uQ2xpY2s6IG9uTGFiZWxDbGljayxcbiAgICBjb21wb25lbnQ6IFwiZGl2XCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmxhYmVsXG4gIH0sIGxhYmVsKSksIGNoaWxkcmVuICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICB1bm1vdW50T25FeGl0OiB0cnVlLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5ncm91cCxcbiAgICBpbjogZXhwYW5kZWQsXG4gICAgY29tcG9uZW50OiBcInVsXCIsXG4gICAgcm9sZTogXCJncm91cFwiXG4gIH0sIFRyYW5zaXRpb25Qcm9wcyksIGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRyZWVJdGVtLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB1c2VkIHRvIGNvbGxhcHNlIHRoZSBub2RlLlxuICAgKi9cbiAgY29sbGFwc2VJY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGljb24gZGlzcGxheWVkIG5leHQgdG8gYSBlbmQgbm9kZS5cbiAgICovXG4gIGVuZEljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB1c2VkIHRvIGV4cGFuZCB0aGUgbm9kZS5cbiAgICovXG4gIGV4cGFuZEljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0byBkaXNwbGF5IG5leHQgdG8gdGhlIHRyZWUgbm9kZSdzIGxhYmVsLlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSB0cmVlIG5vZGUgbGFiZWwuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgbm9kZS5cbiAgICovXG4gIG5vZGVJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIGBvbkNsaWNrYCBoYW5kbGVyIGZvciB0aGUgaWNvbiBjb250YWluZXIuIENhbGwgYGV2ZW50LnByZXZlbnREZWZhdWx0KClgIHRvIHByZXZlbnQgYG9uTm9kZVRvZ2dsZWAgZnJvbSBiZWluZyBjYWxsZWQuXG4gICAqL1xuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIGBvbkNsaWNrYCBoYW5kbGVyIGZvciB0aGUgbGFiZWwgY29udGFpbmVyLiBDYWxsIGBldmVudC5wcmV2ZW50RGVmYXVsdCgpYCB0byBwcmV2ZW50IGBvbk5vZGVUb2dnbGVgIGZyb20gYmVpbmcgY2FsbGVkLlxuICAgKi9cbiAgb25MYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSB0cmFuc2l0aW9uLlxuICAgKiBbRm9sbG93IHRoaXMgZ3VpZGVdKC9jb21wb25lbnRzL3RyYW5zaXRpb25zLyN0cmFuc2l0aW9uY29tcG9uZW50LXByb3ApIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHJlcXVpcmVtZW50cyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBUcmFuc2l0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgVHJhbnNpdGlvbmBdKGh0dHA6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC90cmFuc2l0aW9uI1RyYW5zaXRpb24tcHJvcHMpIGVsZW1lbnQuXG4gICAqL1xuICBUcmFuc2l0aW9uUHJvcHM6IFByb3BUeXBlcy5vYmplY3Rcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVHJlZUl0ZW0nXG59KShUcmVlSXRlbSk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVHJlZUl0ZW0nOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VDb250cm9sbGVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuaW1wb3J0IFRyZWVWaWV3Q29udGV4dCBmcm9tICcuL1RyZWVWaWV3Q29udGV4dCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGxpc3RTdHlsZTogJ25vbmUnXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFycmF5RGlmZihhcnIxLCBhcnIyKSB7XG4gIGlmIChhcnIxLmxlbmd0aCAhPT0gYXJyMi5sZW5ndGgpIHJldHVybiB0cnVlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyMS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnIxW2ldICE9PSBhcnIyW2ldKSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxudmFyIGZpbmROZXh0Rmlyc3RDaGFyID0gZnVuY3Rpb24gZmluZE5leHRGaXJzdENoYXIoZmlyc3RDaGFycywgc3RhcnRJbmRleCwgY2hhcikge1xuICBmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8IGZpcnN0Q2hhcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoY2hhciA9PT0gZmlyc3RDaGFyc1tpXSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufTtcblxudmFyIGRlZmF1bHRFeHBhbmRlZERlZmF1bHQgPSBbXTtcbnZhciBkZWZhdWx0U2VsZWN0ZWREZWZhdWx0ID0gW107XG52YXIgVHJlZVZpZXcgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUcmVlVmlldyhwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBkZWZhdWx0Q29sbGFwc2VJY29uID0gcHJvcHMuZGVmYXVsdENvbGxhcHNlSWNvbixcbiAgICAgIGRlZmF1bHRFbmRJY29uID0gcHJvcHMuZGVmYXVsdEVuZEljb24sXG4gICAgICBfcHJvcHMkZGVmYXVsdEV4cGFuZGUgPSBwcm9wcy5kZWZhdWx0RXhwYW5kZWQsXG4gICAgICBkZWZhdWx0RXhwYW5kZWQgPSBfcHJvcHMkZGVmYXVsdEV4cGFuZGUgPT09IHZvaWQgMCA/IGRlZmF1bHRFeHBhbmRlZERlZmF1bHQgOiBfcHJvcHMkZGVmYXVsdEV4cGFuZGUsXG4gICAgICBkZWZhdWx0RXhwYW5kSWNvbiA9IHByb3BzLmRlZmF1bHRFeHBhbmRJY29uLFxuICAgICAgZGVmYXVsdFBhcmVudEljb24gPSBwcm9wcy5kZWZhdWx0UGFyZW50SWNvbixcbiAgICAgIF9wcm9wcyRkZWZhdWx0U2VsZWN0ZSA9IHByb3BzLmRlZmF1bHRTZWxlY3RlZCxcbiAgICAgIGRlZmF1bHRTZWxlY3RlZCA9IF9wcm9wcyRkZWZhdWx0U2VsZWN0ZSA9PT0gdm9pZCAwID8gZGVmYXVsdFNlbGVjdGVkRGVmYXVsdCA6IF9wcm9wcyRkZWZhdWx0U2VsZWN0ZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlU2VsZWN0aSA9IHByb3BzLmRpc2FibGVTZWxlY3Rpb24sXG4gICAgICBkaXNhYmxlU2VsZWN0aW9uID0gX3Byb3BzJGRpc2FibGVTZWxlY3RpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlU2VsZWN0aSxcbiAgICAgIF9wcm9wcyRtdWx0aVNlbGVjdCA9IHByb3BzLm11bHRpU2VsZWN0LFxuICAgICAgbXVsdGlTZWxlY3QgPSBfcHJvcHMkbXVsdGlTZWxlY3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpU2VsZWN0LFxuICAgICAgZXhwYW5kZWRQcm9wID0gcHJvcHMuZXhwYW5kZWQsXG4gICAgICBvbk5vZGVTZWxlY3QgPSBwcm9wcy5vbk5vZGVTZWxlY3QsXG4gICAgICBvbk5vZGVUb2dnbGUgPSBwcm9wcy5vbk5vZGVUb2dnbGUsXG4gICAgICBzZWxlY3RlZFByb3AgPSBwcm9wcy5zZWxlY3RlZCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkZWZhdWx0Q29sbGFwc2VJY29uXCIsIFwiZGVmYXVsdEVuZEljb25cIiwgXCJkZWZhdWx0RXhwYW5kZWRcIiwgXCJkZWZhdWx0RXhwYW5kSWNvblwiLCBcImRlZmF1bHRQYXJlbnRJY29uXCIsIFwiZGVmYXVsdFNlbGVjdGVkXCIsIFwiZGlzYWJsZVNlbGVjdGlvblwiLCBcIm11bHRpU2VsZWN0XCIsIFwiZXhwYW5kZWRcIiwgXCJvbk5vZGVTZWxlY3RcIiwgXCJvbk5vZGVUb2dnbGVcIiwgXCJzZWxlY3RlZFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpLFxuICAgICAgdGFiYmFibGUgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRUYWJiYWJsZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKG51bGwpLFxuICAgICAgZm9jdXNlZE5vZGVJZCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRGb2N1c2VkTm9kZUlkID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgbm9kZU1hcCA9IFJlYWN0LnVzZVJlZih7fSk7XG4gIHZhciBmaXJzdENoYXJNYXAgPSBSZWFjdC51c2VSZWYoe30pO1xuICB2YXIgdmlzaWJsZU5vZGVzID0gUmVhY3QudXNlUmVmKFtdKTtcblxuICB2YXIgX3VzZUNvbnRyb2xsZWQgPSB1c2VDb250cm9sbGVkKHtcbiAgICBjb250cm9sbGVkOiBleHBhbmRlZFByb3AsXG4gICAgZGVmYXVsdDogZGVmYXVsdEV4cGFuZGVkLFxuICAgIG5hbWU6ICdUcmVlVmlldycsXG4gICAgc3RhdGU6ICdleHBhbmRlZCdcbiAgfSksXG4gICAgICBfdXNlQ29udHJvbGxlZDIgPSBfc2xpY2VkVG9BcnJheShfdXNlQ29udHJvbGxlZCwgMiksXG4gICAgICBleHBhbmRlZCA9IF91c2VDb250cm9sbGVkMlswXSxcbiAgICAgIHNldEV4cGFuZGVkU3RhdGUgPSBfdXNlQ29udHJvbGxlZDJbMV07XG5cbiAgdmFyIF91c2VDb250cm9sbGVkMyA9IHVzZUNvbnRyb2xsZWQoe1xuICAgIGNvbnRyb2xsZWQ6IHNlbGVjdGVkUHJvcCxcbiAgICBkZWZhdWx0OiBkZWZhdWx0U2VsZWN0ZWQsXG4gICAgbmFtZTogJ1RyZWVWaWV3JyxcbiAgICBzdGF0ZTogJ3NlbGVjdGVkJ1xuICB9KSxcbiAgICAgIF91c2VDb250cm9sbGVkNCA9IF9zbGljZWRUb0FycmF5KF91c2VDb250cm9sbGVkMywgMiksXG4gICAgICBzZWxlY3RlZCA9IF91c2VDb250cm9sbGVkNFswXSxcbiAgICAgIHNldFNlbGVjdGVkU3RhdGUgPSBfdXNlQ29udHJvbGxlZDRbMV07XG4gIC8qXG4gICAqIFN0YXR1cyBIZWxwZXJzXG4gICAqL1xuXG5cbiAgdmFyIGlzRXhwYW5kZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaWQpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShleHBhbmRlZCkgPyBleHBhbmRlZC5pbmRleE9mKGlkKSAhPT0gLTEgOiBmYWxzZTtcbiAgfSwgW2V4cGFuZGVkXSk7XG4gIHZhciBpc1NlbGVjdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc2VsZWN0ZWQpID8gc2VsZWN0ZWQuaW5kZXhPZihpZCkgIT09IC0xIDogc2VsZWN0ZWQgPT09IGlkO1xuICB9LCBbc2VsZWN0ZWRdKTtcblxuICB2YXIgaXNUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzVGFiYmFibGUoaWQpIHtcbiAgICByZXR1cm4gdGFiYmFibGUgPT09IGlkO1xuICB9O1xuXG4gIHZhciBpc0ZvY3VzZWQgPSBmdW5jdGlvbiBpc0ZvY3VzZWQoaWQpIHtcbiAgICByZXR1cm4gZm9jdXNlZE5vZGVJZCA9PT0gaWQ7XG4gIH07XG4gIC8qXG4gICAqIE5vZGUgSGVscGVyc1xuICAgKi9cblxuXG4gIHZhciBnZXROZXh0Tm9kZSA9IGZ1bmN0aW9uIGdldE5leHROb2RlKGlkKSB7XG4gICAgdmFyIG5vZGVJbmRleCA9IHZpc2libGVOb2Rlcy5jdXJyZW50LmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKG5vZGVJbmRleCAhPT0gLTEgJiYgbm9kZUluZGV4ICsgMSA8IHZpc2libGVOb2Rlcy5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHZpc2libGVOb2Rlcy5jdXJyZW50W25vZGVJbmRleCArIDFdO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHZhciBnZXRQcmV2aW91c05vZGUgPSBmdW5jdGlvbiBnZXRQcmV2aW91c05vZGUoaWQpIHtcbiAgICB2YXIgbm9kZUluZGV4ID0gdmlzaWJsZU5vZGVzLmN1cnJlbnQuaW5kZXhPZihpZCk7XG5cbiAgICBpZiAobm9kZUluZGV4ICE9PSAtMSAmJiBub2RlSW5kZXggLSAxID49IDApIHtcbiAgICAgIHJldHVybiB2aXNpYmxlTm9kZXMuY3VycmVudFtub2RlSW5kZXggLSAxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB2YXIgZ2V0TGFzdE5vZGUgPSBmdW5jdGlvbiBnZXRMYXN0Tm9kZSgpIHtcbiAgICByZXR1cm4gdmlzaWJsZU5vZGVzLmN1cnJlbnRbdmlzaWJsZU5vZGVzLmN1cnJlbnQubGVuZ3RoIC0gMV07XG4gIH07XG5cbiAgdmFyIGdldEZpcnN0Tm9kZSA9IGZ1bmN0aW9uIGdldEZpcnN0Tm9kZSgpIHtcbiAgICByZXR1cm4gdmlzaWJsZU5vZGVzLmN1cnJlbnRbMF07XG4gIH07XG5cbiAgdmFyIGdldFBhcmVudCA9IGZ1bmN0aW9uIGdldFBhcmVudChpZCkge1xuICAgIHJldHVybiBub2RlTWFwLmN1cnJlbnRbaWRdLnBhcmVudDtcbiAgfTtcblxuICB2YXIgZ2V0Tm9kZXNJblJhbmdlID0gZnVuY3Rpb24gZ2V0Tm9kZXNJblJhbmdlKGEsIGIpIHtcbiAgICB2YXIgYUluZGV4ID0gdmlzaWJsZU5vZGVzLmN1cnJlbnQuaW5kZXhPZihhKTtcbiAgICB2YXIgYkluZGV4ID0gdmlzaWJsZU5vZGVzLmN1cnJlbnQuaW5kZXhPZihiKTtcbiAgICB2YXIgc3RhcnQgPSBNYXRoLm1pbihhSW5kZXgsIGJJbmRleCk7XG4gICAgdmFyIGVuZCA9IE1hdGgubWF4KGFJbmRleCwgYkluZGV4KTtcbiAgICByZXR1cm4gdmlzaWJsZU5vZGVzLmN1cnJlbnQuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xuICB9O1xuICAvKlxuICAgKiBGb2N1cyBIZWxwZXJzXG4gICAqL1xuXG5cbiAgdmFyIGZvY3VzID0gZnVuY3Rpb24gZm9jdXMoaWQpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHNldFRhYmJhYmxlKGlkKTtcbiAgICAgIHNldEZvY3VzZWROb2RlSWQoaWQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZm9jdXNOZXh0Tm9kZSA9IGZ1bmN0aW9uIGZvY3VzTmV4dE5vZGUoaWQpIHtcbiAgICByZXR1cm4gZm9jdXMoZ2V0TmV4dE5vZGUoaWQpKTtcbiAgfTtcblxuICB2YXIgZm9jdXNQcmV2aW91c05vZGUgPSBmdW5jdGlvbiBmb2N1c1ByZXZpb3VzTm9kZShpZCkge1xuICAgIHJldHVybiBmb2N1cyhnZXRQcmV2aW91c05vZGUoaWQpKTtcbiAgfTtcblxuICB2YXIgZm9jdXNGaXJzdE5vZGUgPSBmdW5jdGlvbiBmb2N1c0ZpcnN0Tm9kZSgpIHtcbiAgICByZXR1cm4gZm9jdXMoZ2V0Rmlyc3ROb2RlKCkpO1xuICB9O1xuXG4gIHZhciBmb2N1c0xhc3ROb2RlID0gZnVuY3Rpb24gZm9jdXNMYXN0Tm9kZSgpIHtcbiAgICByZXR1cm4gZm9jdXMoZ2V0TGFzdE5vZGUoKSk7XG4gIH07XG5cbiAgdmFyIGZvY3VzQnlGaXJzdENoYXJhY3RlciA9IGZ1bmN0aW9uIGZvY3VzQnlGaXJzdENoYXJhY3RlcihpZCwgY2hhcikge1xuICAgIHZhciBzdGFydDtcbiAgICB2YXIgaW5kZXg7XG4gICAgdmFyIGxvd2VyY2FzZUNoYXIgPSBjaGFyLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGZpcnN0Q2hhcklkcyA9IFtdO1xuICAgIHZhciBmaXJzdENoYXJzID0gW107IC8vIFRoaXMgcmVhbGx5IG9ubHkgd29ya3Mgc2luY2UgdGhlIGlkcyBhcmUgc3RyaW5nc1xuXG4gICAgT2JqZWN0LmtleXMoZmlyc3RDaGFyTWFwLmN1cnJlbnQpLmZvckVhY2goZnVuY3Rpb24gKG5vZGVJZCkge1xuICAgICAgdmFyIGZpcnN0Q2hhciA9IGZpcnN0Q2hhck1hcC5jdXJyZW50W25vZGVJZF07XG4gICAgICB2YXIgbWFwID0gbm9kZU1hcC5jdXJyZW50W25vZGVJZF07XG4gICAgICB2YXIgdmlzaWJsZSA9IG1hcC5wYXJlbnQgPyBpc0V4cGFuZGVkKG1hcC5wYXJlbnQpIDogdHJ1ZTtcblxuICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgZmlyc3RDaGFySWRzLnB1c2gobm9kZUlkKTtcbiAgICAgICAgZmlyc3RDaGFycy5wdXNoKGZpcnN0Q2hhcik7XG4gICAgICB9XG4gICAgfSk7IC8vIEdldCBzdGFydCBpbmRleCBmb3Igc2VhcmNoIGJhc2VkIG9uIHBvc2l0aW9uIG9mIGN1cnJlbnRJdGVtXG5cbiAgICBzdGFydCA9IGZpcnN0Q2hhcklkcy5pbmRleE9mKGlkKSArIDE7XG5cbiAgICBpZiAoc3RhcnQgPT09IG5vZGVNYXAuY3VycmVudC5sZW5ndGgpIHtcbiAgICAgIHN0YXJ0ID0gMDtcbiAgICB9IC8vIENoZWNrIHJlbWFpbmluZyBzbG90cyBpbiB0aGUgbWVudVxuXG5cbiAgICBpbmRleCA9IGZpbmROZXh0Rmlyc3RDaGFyKGZpcnN0Q2hhcnMsIHN0YXJ0LCBsb3dlcmNhc2VDaGFyKTsgLy8gSWYgbm90IGZvdW5kIGluIHJlbWFpbmluZyBzbG90cywgY2hlY2sgZnJvbSBiZWdpbm5pbmdcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gZmluZE5leHRGaXJzdENoYXIoZmlyc3RDaGFycywgMCwgbG93ZXJjYXNlQ2hhcik7XG4gICAgfSAvLyBJZiBtYXRjaCB3YXMgZm91bmQuLi5cblxuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGZvY3VzKGZpcnN0Q2hhcklkc1tpbmRleF0pO1xuICAgIH1cbiAgfTtcbiAgLypcbiAgICogRXhwYW5zaW9uIEhlbHBlcnNcbiAgICovXG5cblxuICB2YXIgdG9nZ2xlRXhwYW5zaW9uID0gZnVuY3Rpb24gdG9nZ2xlRXhwYW5zaW9uKGV2ZW50KSB7XG4gICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmb2N1c2VkTm9kZUlkO1xuICAgIHZhciBuZXdFeHBhbmRlZDtcblxuICAgIGlmIChleHBhbmRlZC5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgIG5ld0V4cGFuZGVkID0gZXhwYW5kZWQuZmlsdGVyKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gaWQgIT09IHZhbHVlO1xuICAgICAgfSk7XG4gICAgICBzZXRUYWJiYWJsZShmdW5jdGlvbiAob2xkVGFiYmFibGUpIHtcbiAgICAgICAgdmFyIG1hcCA9IG5vZGVNYXAuY3VycmVudFtvbGRUYWJiYWJsZV07XG5cbiAgICAgICAgaWYgKG9sZFRhYmJhYmxlICYmIChtYXAgJiYgbWFwLnBhcmVudCA/IG1hcC5wYXJlbnQuaWQgOiBudWxsKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2xkVGFiYmFibGU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3RXhwYW5kZWQgPSBbdmFsdWVdLmNvbmNhdChleHBhbmRlZCk7XG4gICAgfVxuXG4gICAgaWYgKG9uTm9kZVRvZ2dsZSkge1xuICAgICAgb25Ob2RlVG9nZ2xlKGV2ZW50LCBuZXdFeHBhbmRlZCk7XG4gICAgfVxuXG4gICAgc2V0RXhwYW5kZWRTdGF0ZShuZXdFeHBhbmRlZCk7XG4gIH07XG5cbiAgdmFyIGV4cGFuZEFsbFNpYmxpbmdzID0gZnVuY3Rpb24gZXhwYW5kQWxsU2libGluZ3MoZXZlbnQsIGlkKSB7XG4gICAgdmFyIG1hcCA9IG5vZGVNYXAuY3VycmVudFtpZF07XG4gICAgdmFyIHBhcmVudCA9IG5vZGVNYXAuY3VycmVudFttYXAucGFyZW50XTtcbiAgICB2YXIgZGlmZjtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGRpZmYgPSBwYXJlbnQuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gIWlzRXhwYW5kZWQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0b3BMZXZlbE5vZGVzID0gbm9kZU1hcC5jdXJyZW50Wy0xXS5jaGlsZHJlbjtcbiAgICAgIGRpZmYgPSB0b3BMZXZlbE5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gIWlzRXhwYW5kZWQobm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgbmV3RXhwYW5kZWQgPSBleHBhbmRlZC5jb25jYXQoZGlmZik7XG5cbiAgICBpZiAoZGlmZi5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRFeHBhbmRlZFN0YXRlKG5ld0V4cGFuZGVkKTtcblxuICAgICAgaWYgKG9uTm9kZVRvZ2dsZSkge1xuICAgICAgICBvbk5vZGVUb2dnbGUoZXZlbnQsIG5ld0V4cGFuZGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8qXG4gICAqIFNlbGVjdGlvbiBIZWxwZXJzXG4gICAqL1xuXG5cbiAgdmFyIGxhc3RTZWxlY3RlZE5vZGUgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBsYXN0U2VsZWN0aW9uV2FzUmFuZ2UgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB2YXIgY3VycmVudFJhbmdlU2VsZWN0aW9uID0gUmVhY3QudXNlUmVmKFtdKTtcblxuICB2YXIgaGFuZGxlUmFuZ2VBcnJvd1NlbGVjdCA9IGZ1bmN0aW9uIGhhbmRsZVJhbmdlQXJyb3dTZWxlY3QoZXZlbnQsIG5vZGVzKSB7XG4gICAgdmFyIGJhc2UgPSBzZWxlY3RlZDtcbiAgICB2YXIgc3RhcnQgPSBub2Rlcy5zdGFydCxcbiAgICAgICAgbmV4dCA9IG5vZGVzLm5leHQsXG4gICAgICAgIGN1cnJlbnQgPSBub2Rlcy5jdXJyZW50O1xuXG4gICAgaWYgKCFuZXh0IHx8ICFjdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRSYW5nZVNlbGVjdGlvbi5jdXJyZW50LmluZGV4T2YoY3VycmVudCkgPT09IC0xKSB7XG4gICAgICBjdXJyZW50UmFuZ2VTZWxlY3Rpb24uY3VycmVudCA9IFtdO1xuICAgIH1cblxuICAgIGlmIChsYXN0U2VsZWN0aW9uV2FzUmFuZ2UuY3VycmVudCkge1xuICAgICAgaWYgKGN1cnJlbnRSYW5nZVNlbGVjdGlvbi5jdXJyZW50LmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIGJhc2UgPSBiYXNlLmZpbHRlcihmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICByZXR1cm4gaWQgPT09IHN0YXJ0IHx8IGlkICE9PSBjdXJyZW50O1xuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudFJhbmdlU2VsZWN0aW9uLmN1cnJlbnQgPSBjdXJyZW50UmFuZ2VTZWxlY3Rpb24uY3VycmVudC5maWx0ZXIoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgcmV0dXJuIGlkID09PSBzdGFydCB8fCBpZCAhPT0gY3VycmVudDtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYXNlLnB1c2gobmV4dCk7XG4gICAgICAgIGN1cnJlbnRSYW5nZVNlbGVjdGlvbi5jdXJyZW50LnB1c2gobmV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2UucHVzaChuZXh0KTtcbiAgICAgIGN1cnJlbnRSYW5nZVNlbGVjdGlvbi5jdXJyZW50LnB1c2goY3VycmVudCwgbmV4dCk7XG4gICAgfVxuXG4gICAgaWYgKG9uTm9kZVNlbGVjdCkge1xuICAgICAgb25Ob2RlU2VsZWN0KGV2ZW50LCBiYXNlKTtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3RlZFN0YXRlKGJhc2UpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVSYW5nZVNlbGVjdCA9IGZ1bmN0aW9uIGhhbmRsZVJhbmdlU2VsZWN0KGV2ZW50LCBub2Rlcykge1xuICAgIHZhciBiYXNlID0gc2VsZWN0ZWQ7XG4gICAgdmFyIHN0YXJ0ID0gbm9kZXMuc3RhcnQsXG4gICAgICAgIGVuZCA9IG5vZGVzLmVuZDsgLy8gSWYgbGFzdCBzZWxlY3Rpb24gd2FzIGEgcmFuZ2Ugc2VsZWN0aW9uIGlnbm9yZSBub2RlcyB0aGF0IHdlcmUgc2VsZWN0ZWQuXG5cbiAgICBpZiAobGFzdFNlbGVjdGlvbldhc1JhbmdlLmN1cnJlbnQpIHtcbiAgICAgIGJhc2UgPSBzZWxlY3RlZC5maWx0ZXIoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UmFuZ2VTZWxlY3Rpb24uY3VycmVudC5pbmRleE9mKGlkKSA9PT0gLTE7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcmFuZ2UgPSBnZXROb2Rlc0luUmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgY3VycmVudFJhbmdlU2VsZWN0aW9uLmN1cnJlbnQgPSByYW5nZTtcbiAgICB2YXIgbmV3U2VsZWN0ZWQgPSBiYXNlLmNvbmNhdChyYW5nZSk7XG4gICAgbmV3U2VsZWN0ZWQgPSBuZXdTZWxlY3RlZC5maWx0ZXIoZnVuY3Rpb24gKGlkLCBpKSB7XG4gICAgICByZXR1cm4gbmV3U2VsZWN0ZWQuaW5kZXhPZihpZCkgPT09IGk7XG4gICAgfSk7XG5cbiAgICBpZiAob25Ob2RlU2VsZWN0KSB7XG4gICAgICBvbk5vZGVTZWxlY3QoZXZlbnQsIG5ld1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3RlZFN0YXRlKG5ld1NlbGVjdGVkKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlTXVsdGlwbGVTZWxlY3QgPSBmdW5jdGlvbiBoYW5kbGVNdWx0aXBsZVNlbGVjdChldmVudCwgdmFsdWUpIHtcbiAgICB2YXIgbmV3U2VsZWN0ZWQgPSBbXTtcblxuICAgIGlmIChzZWxlY3RlZC5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgIG5ld1NlbGVjdGVkID0gc2VsZWN0ZWQuZmlsdGVyKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gaWQgIT09IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkID0gW3ZhbHVlXS5jb25jYXQoc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmIChvbk5vZGVTZWxlY3QpIHtcbiAgICAgIG9uTm9kZVNlbGVjdChldmVudCwgbmV3U2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIHNldFNlbGVjdGVkU3RhdGUobmV3U2VsZWN0ZWQpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVTaW5nbGVTZWxlY3QgPSBmdW5jdGlvbiBoYW5kbGVTaW5nbGVTZWxlY3QoZXZlbnQsIHZhbHVlKSB7XG4gICAgdmFyIG5ld1NlbGVjdGVkID0gbXVsdGlTZWxlY3QgPyBbdmFsdWVdIDogdmFsdWU7XG5cbiAgICBpZiAob25Ob2RlU2VsZWN0KSB7XG4gICAgICBvbk5vZGVTZWxlY3QoZXZlbnQsIG5ld1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3RlZFN0YXRlKG5ld1NlbGVjdGVkKTtcbiAgfTtcblxuICB2YXIgc2VsZWN0Tm9kZSA9IGZ1bmN0aW9uIHNlbGVjdE5vZGUoZXZlbnQsIGlkKSB7XG4gICAgdmFyIG11bHRpcGxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgIGlmIChpZCkge1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIGhhbmRsZU11bHRpcGxlU2VsZWN0KGV2ZW50LCBpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGVTaW5nbGVTZWxlY3QoZXZlbnQsIGlkKTtcbiAgICAgIH1cblxuICAgICAgbGFzdFNlbGVjdGVkTm9kZS5jdXJyZW50ID0gaWQ7XG4gICAgICBsYXN0U2VsZWN0aW9uV2FzUmFuZ2UuY3VycmVudCA9IGZhbHNlO1xuICAgICAgY3VycmVudFJhbmdlU2VsZWN0aW9uLmN1cnJlbnQgPSBbXTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB2YXIgc2VsZWN0UmFuZ2UgPSBmdW5jdGlvbiBzZWxlY3RSYW5nZShldmVudCwgbm9kZXMpIHtcbiAgICB2YXIgc3RhY2tlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gICAgdmFyIF9ub2RlcyRzdGFydCA9IG5vZGVzLnN0YXJ0LFxuICAgICAgICBzdGFydCA9IF9ub2RlcyRzdGFydCA9PT0gdm9pZCAwID8gbGFzdFNlbGVjdGVkTm9kZS5jdXJyZW50IDogX25vZGVzJHN0YXJ0LFxuICAgICAgICBlbmQgPSBub2Rlcy5lbmQsXG4gICAgICAgIGN1cnJlbnQgPSBub2Rlcy5jdXJyZW50O1xuXG4gICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgIGhhbmRsZVJhbmdlQXJyb3dTZWxlY3QoZXZlbnQsIHtcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICBuZXh0OiBlbmQsXG4gICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVSYW5nZVNlbGVjdChldmVudCwge1xuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIGVuZDogZW5kXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsYXN0U2VsZWN0aW9uV2FzUmFuZ2UuY3VycmVudCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgdmFyIHJhbmdlU2VsZWN0VG9GaXJzdCA9IGZ1bmN0aW9uIHJhbmdlU2VsZWN0VG9GaXJzdChldmVudCwgaWQpIHtcbiAgICBpZiAoIWxhc3RTZWxlY3RlZE5vZGUuY3VycmVudCkge1xuICAgICAgbGFzdFNlbGVjdGVkTm9kZS5jdXJyZW50ID0gaWQ7XG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0ID0gbGFzdFNlbGVjdGlvbldhc1JhbmdlLmN1cnJlbnQgPyBsYXN0U2VsZWN0ZWROb2RlLmN1cnJlbnQgOiBpZDtcbiAgICByZXR1cm4gc2VsZWN0UmFuZ2UoZXZlbnQsIHtcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogZ2V0Rmlyc3ROb2RlKClcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmFuZ2VTZWxlY3RUb0xhc3QgPSBmdW5jdGlvbiByYW5nZVNlbGVjdFRvTGFzdChldmVudCwgaWQpIHtcbiAgICBpZiAoIWxhc3RTZWxlY3RlZE5vZGUuY3VycmVudCkge1xuICAgICAgbGFzdFNlbGVjdGVkTm9kZS5jdXJyZW50ID0gaWQ7XG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0ID0gbGFzdFNlbGVjdGlvbldhc1JhbmdlLmN1cnJlbnQgPyBsYXN0U2VsZWN0ZWROb2RlLmN1cnJlbnQgOiBpZDtcbiAgICByZXR1cm4gc2VsZWN0UmFuZ2UoZXZlbnQsIHtcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogZ2V0TGFzdE5vZGUoKVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBzZWxlY3ROZXh0Tm9kZSA9IGZ1bmN0aW9uIHNlbGVjdE5leHROb2RlKGV2ZW50LCBpZCkge1xuICAgIHJldHVybiBzZWxlY3RSYW5nZShldmVudCwge1xuICAgICAgZW5kOiBnZXROZXh0Tm9kZShpZCksXG4gICAgICBjdXJyZW50OiBpZFxuICAgIH0sIHRydWUpO1xuICB9O1xuXG4gIHZhciBzZWxlY3RQcmV2aW91c05vZGUgPSBmdW5jdGlvbiBzZWxlY3RQcmV2aW91c05vZGUoZXZlbnQsIGlkKSB7XG4gICAgcmV0dXJuIHNlbGVjdFJhbmdlKGV2ZW50LCB7XG4gICAgICBlbmQ6IGdldFByZXZpb3VzTm9kZShpZCksXG4gICAgICBjdXJyZW50OiBpZFxuICAgIH0sIHRydWUpO1xuICB9O1xuXG4gIHZhciBzZWxlY3RBbGxOb2RlcyA9IGZ1bmN0aW9uIHNlbGVjdEFsbE5vZGVzKGV2ZW50KSB7XG4gICAgcmV0dXJuIHNlbGVjdFJhbmdlKGV2ZW50LCB7XG4gICAgICBzdGFydDogZ2V0Rmlyc3ROb2RlKCksXG4gICAgICBlbmQ6IGdldExhc3ROb2RlKClcbiAgICB9KTtcbiAgfTtcbiAgLypcbiAgICogTWFwcGluZyBIZWxwZXJzXG4gICAqL1xuXG5cbiAgdmFyIGFkZE5vZGVUb05vZGVNYXAgPSBmdW5jdGlvbiBhZGROb2RlVG9Ob2RlTWFwKGlkLCBjaGlsZHJlbklkcykge1xuICAgIHZhciBjdXJyZW50TWFwID0gbm9kZU1hcC5jdXJyZW50W2lkXTtcbiAgICBub2RlTWFwLmN1cnJlbnRbaWRdID0gX2V4dGVuZHMoe30sIGN1cnJlbnRNYXAsIHtcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbklkcyxcbiAgICAgIGlkOiBpZFxuICAgIH0pO1xuICAgIGNoaWxkcmVuSWRzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkSWQpIHtcbiAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXAgPSBub2RlTWFwLmN1cnJlbnRbY2hpbGRJZF07XG4gICAgICBub2RlTWFwLmN1cnJlbnRbY2hpbGRJZF0gPSBfZXh0ZW5kcyh7fSwgY3VycmVudENoaWxkTWFwLCB7XG4gICAgICAgIHBhcmVudDogaWQsXG4gICAgICAgIGlkOiBjaGlsZElkXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ2V0Tm9kZXNUb1JlbW92ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBtYXAgPSBub2RlTWFwLmN1cnJlbnRbaWRdO1xuICAgIHZhciBub2RlcyA9IFtdO1xuXG4gICAgaWYgKG1hcCkge1xuICAgICAgbm9kZXMucHVzaChpZCk7XG5cbiAgICAgIGlmIChtYXAuY2hpbGRyZW4pIHtcbiAgICAgICAgbm9kZXMuY29uY2F0KG1hcC5jaGlsZHJlbik7XG4gICAgICAgIG1hcC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgbm9kZXMuY29uY2F0KGdldE5vZGVzVG9SZW1vdmUobm9kZSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH0sIFtdKTtcbiAgdmFyIGNsZWFuVXBGaXJzdENoYXJNYXAgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAobm9kZXMpIHtcbiAgICB2YXIgbmV3TWFwID0gX2V4dGVuZHMoe30sIGZpcnN0Q2hhck1hcC5jdXJyZW50KTtcblxuICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIGlmIChuZXdNYXBbbm9kZV0pIHtcbiAgICAgICAgZGVsZXRlIG5ld01hcFtub2RlXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmaXJzdENoYXJNYXAuY3VycmVudCA9IG5ld01hcDtcbiAgfSwgW10pO1xuICB2YXIgcmVtb3ZlTm9kZUZyb21Ob2RlTWFwID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIG5vZGVzID0gZ2V0Tm9kZXNUb1JlbW92ZShpZCk7XG4gICAgY2xlYW5VcEZpcnN0Q2hhck1hcChub2Rlcyk7XG5cbiAgICB2YXIgbmV3TWFwID0gX2V4dGVuZHMoe30sIG5vZGVNYXAuY3VycmVudCk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgbWFwID0gbmV3TWFwW25vZGVdO1xuXG4gICAgICBpZiAobWFwKSB7XG4gICAgICAgIGlmIChtYXAucGFyZW50KSB7XG4gICAgICAgICAgdmFyIHBhcmVudE1hcCA9IG5ld01hcFttYXAucGFyZW50XTtcblxuICAgICAgICAgIGlmIChwYXJlbnRNYXAgJiYgcGFyZW50TWFwLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50Q2hpbGRyZW4gPSBwYXJlbnRNYXAuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjICE9PSBub2RlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdNYXBbbWFwLnBhcmVudF0gPSBfZXh0ZW5kcyh7fSwgcGFyZW50TWFwLCB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBwYXJlbnRDaGlsZHJlblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIG5ld01hcFtub2RlXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBub2RlTWFwLmN1cnJlbnQgPSBuZXdNYXA7XG4gICAgc2V0Rm9jdXNlZE5vZGVJZChmdW5jdGlvbiAob2xkRm9jdXNlZE5vZGVJZCkge1xuICAgICAgaWYgKG9sZEZvY3VzZWROb2RlSWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2xkRm9jdXNlZE5vZGVJZDtcbiAgICB9KTtcbiAgfSwgW2dldE5vZGVzVG9SZW1vdmUsIGNsZWFuVXBGaXJzdENoYXJNYXBdKTtcblxuICB2YXIgbWFwRmlyc3RDaGFyID0gZnVuY3Rpb24gbWFwRmlyc3RDaGFyKGlkLCBmaXJzdENoYXIpIHtcbiAgICBmaXJzdENoYXJNYXAuY3VycmVudFtpZF0gPSBmaXJzdENoYXI7XG4gIH07XG5cbiAgdmFyIHByZXZDaGlsZElkcyA9IFJlYWN0LnVzZVJlZihbXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBjaGlsZHJlbkNhbGN1bGF0ZWQgPSBfUmVhY3QkdXNlU3RhdGUzWzBdLFxuICAgICAgc2V0Q2hpbGRyZW5DYWxjdWxhdGVkID0gX1JlYWN0JHVzZVN0YXRlM1sxXTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaGlsZElkcyA9IFtdO1xuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKCAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpICYmIGNoaWxkLnByb3BzLm5vZGVJZCkge1xuICAgICAgICBjaGlsZElkcy5wdXNoKGNoaWxkLnByb3BzLm5vZGVJZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoYXJyYXlEaWZmKHByZXZDaGlsZElkcy5jdXJyZW50LCBjaGlsZElkcykpIHtcbiAgICAgIG5vZGVNYXAuY3VycmVudFstMV0gPSB7XG4gICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkSWRzXG4gICAgICB9O1xuICAgICAgY2hpbGRJZHMuZm9yRWFjaChmdW5jdGlvbiAoaWQsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIHNldFRhYmJhYmxlKGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB2aXNpYmxlTm9kZXMuY3VycmVudCA9IG5vZGVNYXAuY3VycmVudFstMV0uY2hpbGRyZW47XG4gICAgICBwcmV2Q2hpbGRJZHMuY3VycmVudCA9IGNoaWxkSWRzO1xuICAgICAgc2V0Q2hpbGRyZW5DYWxjdWxhdGVkKHRydWUpO1xuICAgIH1cbiAgfSwgW2NoaWxkcmVuXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJ1aWxkVmlzaWJsZSA9IGZ1bmN0aW9uIGJ1aWxkVmlzaWJsZShub2Rlcykge1xuICAgICAgdmFyIGxpc3QgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgaXRlbSA9IG5vZGVzW2ldO1xuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICAgIHZhciBjaGlsZHMgPSBub2RlTWFwLmN1cnJlbnRbaXRlbV0uY2hpbGRyZW47XG5cbiAgICAgICAgaWYgKGlzRXhwYW5kZWQoaXRlbSkgJiYgY2hpbGRzKSB7XG4gICAgICAgICAgbGlzdCA9IGxpc3QuY29uY2F0KGJ1aWxkVmlzaWJsZShjaGlsZHMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgaWYgKGNoaWxkcmVuQ2FsY3VsYXRlZCkge1xuICAgICAgdmlzaWJsZU5vZGVzLmN1cnJlbnQgPSBidWlsZFZpc2libGUobm9kZU1hcC5jdXJyZW50Wy0xXS5jaGlsZHJlbik7XG4gICAgfVxuICB9LCBbZXhwYW5kZWQsIGNoaWxkcmVuQ2FsY3VsYXRlZCwgaXNFeHBhbmRlZCwgY2hpbGRyZW5dKTtcblxuICB2YXIgbm9vcFNlbGVjdGlvbiA9IGZ1bmN0aW9uIG5vb3BTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmVlVmlld0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZToge1xuICAgICAgaWNvbnM6IHtcbiAgICAgICAgZGVmYXVsdENvbGxhcHNlSWNvbjogZGVmYXVsdENvbGxhcHNlSWNvbixcbiAgICAgICAgZGVmYXVsdEV4cGFuZEljb246IGRlZmF1bHRFeHBhbmRJY29uLFxuICAgICAgICBkZWZhdWx0UGFyZW50SWNvbjogZGVmYXVsdFBhcmVudEljb24sXG4gICAgICAgIGRlZmF1bHRFbmRJY29uOiBkZWZhdWx0RW5kSWNvblxuICAgICAgfSxcbiAgICAgIGZvY3VzOiBmb2N1cyxcbiAgICAgIGZvY3VzRmlyc3ROb2RlOiBmb2N1c0ZpcnN0Tm9kZSxcbiAgICAgIGZvY3VzTGFzdE5vZGU6IGZvY3VzTGFzdE5vZGUsXG4gICAgICBmb2N1c05leHROb2RlOiBmb2N1c05leHROb2RlLFxuICAgICAgZm9jdXNQcmV2aW91c05vZGU6IGZvY3VzUHJldmlvdXNOb2RlLFxuICAgICAgZm9jdXNCeUZpcnN0Q2hhcmFjdGVyOiBmb2N1c0J5Rmlyc3RDaGFyYWN0ZXIsXG4gICAgICBleHBhbmRBbGxTaWJsaW5nczogZXhwYW5kQWxsU2libGluZ3MsXG4gICAgICB0b2dnbGVFeHBhbnNpb246IHRvZ2dsZUV4cGFuc2lvbixcbiAgICAgIGlzRXhwYW5kZWQ6IGlzRXhwYW5kZWQsXG4gICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgICBzZWxlY3ROb2RlOiBkaXNhYmxlU2VsZWN0aW9uID8gbm9vcFNlbGVjdGlvbiA6IHNlbGVjdE5vZGUsXG4gICAgICBzZWxlY3RSYW5nZTogZGlzYWJsZVNlbGVjdGlvbiA/IG5vb3BTZWxlY3Rpb24gOiBzZWxlY3RSYW5nZSxcbiAgICAgIHNlbGVjdE5leHROb2RlOiBkaXNhYmxlU2VsZWN0aW9uID8gbm9vcFNlbGVjdGlvbiA6IHNlbGVjdE5leHROb2RlLFxuICAgICAgc2VsZWN0UHJldmlvdXNOb2RlOiBkaXNhYmxlU2VsZWN0aW9uID8gbm9vcFNlbGVjdGlvbiA6IHNlbGVjdFByZXZpb3VzTm9kZSxcbiAgICAgIHJhbmdlU2VsZWN0VG9GaXJzdDogZGlzYWJsZVNlbGVjdGlvbiA/IG5vb3BTZWxlY3Rpb24gOiByYW5nZVNlbGVjdFRvRmlyc3QsXG4gICAgICByYW5nZVNlbGVjdFRvTGFzdDogZGlzYWJsZVNlbGVjdGlvbiA/IG5vb3BTZWxlY3Rpb24gOiByYW5nZVNlbGVjdFRvTGFzdCxcbiAgICAgIHNlbGVjdEFsbE5vZGVzOiBkaXNhYmxlU2VsZWN0aW9uID8gbm9vcFNlbGVjdGlvbiA6IHNlbGVjdEFsbE5vZGVzLFxuICAgICAgaXNUYWJiYWJsZTogaXNUYWJiYWJsZSxcbiAgICAgIG11bHRpU2VsZWN0OiBtdWx0aVNlbGVjdCxcbiAgICAgIGdldFBhcmVudDogZ2V0UGFyZW50LFxuICAgICAgbWFwRmlyc3RDaGFyOiBtYXBGaXJzdENoYXIsXG4gICAgICBhZGROb2RlVG9Ob2RlTWFwOiBhZGROb2RlVG9Ob2RlTWFwLFxuICAgICAgcmVtb3ZlTm9kZUZyb21Ob2RlTWFwOiByZW1vdmVOb2RlRnJvbU5vZGVNYXBcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwidHJlZVwiLFxuICAgIFwiYXJpYS1tdWx0aXNlbGVjdGFibGVcIjogbXVsdGlTZWxlY3QsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRyZWVWaWV3LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBpY29uIHVzZWQgdG8gY29sbGFwc2UgdGhlIG5vZGUuXG4gICAqL1xuICBkZWZhdWx0Q29sbGFwc2VJY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgaWNvbiBkaXNwbGF5ZWQgbmV4dCB0byBhIGVuZCBub2RlLiBUaGlzIGlzIGFwcGxpZWQgdG8gYWxsXG4gICAqIHRyZWUgbm9kZXMgYW5kIGNhbiBiZSBvdmVycmlkZGVuIGJ5IHRoZSBUcmVlSXRlbSBgaWNvbmAgcHJvcC5cbiAgICovXG4gIGRlZmF1bHRFbmRJY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogRXhwYW5kZWQgbm9kZSBpZHMuIChVbmNvbnRyb2xsZWQpXG4gICAqL1xuICBkZWZhdWx0RXhwYW5kZWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBpY29uIHVzZWQgdG8gZXhwYW5kIHRoZSBub2RlLlxuICAgKi9cbiAgZGVmYXVsdEV4cGFuZEljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBpY29uIGRpc3BsYXllZCBuZXh0IHRvIGEgcGFyZW50IG5vZGUuIFRoaXMgaXMgYXBwbGllZCB0byBhbGxcbiAgICogcGFyZW50IG5vZGVzIGFuZCBjYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgVHJlZUl0ZW0gYGljb25gIHByb3AuXG4gICAqL1xuICBkZWZhdWx0UGFyZW50SWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFNlbGVjdGVkIG5vZGUgaWRzLiAoVW5jb250cm9sbGVkKVxuICAgKiBXaGVuIGBtdWx0aVNlbGVjdGAgaXMgdHJ1ZSB0aGlzIHRha2VzIGFuIGFycmF5IG9mIHN0cmluZ3M7IHdoZW4gZmFsc2UgKGRlZmF1bHQpIGEgc3RyaW5nLlxuICAgKi9cbiAgZGVmYXVsdFNlbGVjdGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAgc2VsZWN0aW9uIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZVNlbGVjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEV4cGFuZGVkIG5vZGUgaWRzLiAoQ29udHJvbGxlZClcbiAgICovXG4gIGV4cGFuZGVkOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcblxuICAvKipcbiAgICogSWYgdHJ1ZSBgY3RybGAgYW5kIGBzaGlmdGAgd2lsbCB0cmlnZ2VyIG11bHRpc2VsZWN0LlxuICAgKi9cbiAgbXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRyZWUgaXRlbXMgYXJlIHNlbGVjdGVkL3Vuc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFja1xuICAgKiBAcGFyYW0geyhhcnJheXxzdHJpbmcpfSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgbm9kZXMuIFdoZW4gYG11bHRpU2VsZWN0YCBpcyB0cnVlXG4gICAqIHRoaXMgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nczsgd2hlbiBmYWxzZSAoZGVmYXVsdCkgYSBzdHJpbmcuXG4gICAqL1xuICBvbk5vZGVTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRyZWUgaXRlbXMgYXJlIGV4cGFuZGVkL2NvbGxhcHNlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0ge2FycmF5fSBub2RlSWRzIFRoZSBpZHMgb2YgdGhlIGV4cGFuZGVkIG5vZGVzLlxuICAgKi9cbiAgb25Ob2RlVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogU2VsZWN0ZWQgbm9kZSBpZHMuIChDb250cm9sbGVkKVxuICAgKiBXaGVuIGBtdWx0aVNlbGVjdGAgaXMgdHJ1ZSB0aGlzIHRha2VzIGFuIGFycmF5IG9mIHN0cmluZ3M7IHdoZW4gZmFsc2UgKGRlZmF1bHQpIGEgc3RyaW5nLlxuICAgKi9cbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLCBQcm9wVHlwZXMuc3RyaW5nXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVHJlZVZpZXcnXG59KShUcmVlVmlldyk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBUcmVlVmlld0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVHJlZVZpZXdDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1RyZWVWaWV3Q29udGV4dCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVWaWV3Q29udGV4dDsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UcmVlVmlldyc7IiwiLyoqIEBsaWNlbnNlIE1hdGVyaWFsLVVJIHY0LjAuMC1hbHBoYS41NlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXhwb3J0ICovXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFsZXJ0IH0gZnJvbSAnLi9BbGVydCc7XG5leHBvcnQgKiBmcm9tICcuL0FsZXJ0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWxlcnRUaXRsZSB9IGZyb20gJy4vQWxlcnRUaXRsZSc7XG5leHBvcnQgKiBmcm9tICcuL0FsZXJ0VGl0bGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBdXRvY29tcGxldGUgfSBmcm9tICcuL0F1dG9jb21wbGV0ZSc7XG5leHBvcnQgKiBmcm9tICcuL0F1dG9jb21wbGV0ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEF2YXRhckdyb3VwIH0gZnJvbSAnLi9BdmF0YXJHcm91cCc7XG5leHBvcnQgKiBmcm9tICcuL0F2YXRhckdyb3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnaW5hdGlvbiB9IGZyb20gJy4vUGFnaW5hdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL1BhZ2luYXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYWdpbmF0aW9uSXRlbSB9IGZyb20gJy4vUGFnaW5hdGlvbkl0ZW0nO1xuZXhwb3J0ICogZnJvbSAnLi9QYWdpbmF0aW9uSXRlbSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJhdGluZyB9IGZyb20gJy4vUmF0aW5nJztcbmV4cG9ydCAqIGZyb20gJy4vUmF0aW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2tlbGV0b24gfSBmcm9tICcuL1NrZWxldG9uJztcbmV4cG9ydCAqIGZyb20gJy4vU2tlbGV0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGVlZERpYWwgfSBmcm9tICcuL1NwZWVkRGlhbCc7XG5leHBvcnQgKiBmcm9tICcuL1NwZWVkRGlhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNwZWVkRGlhbEFjdGlvbiB9IGZyb20gJy4vU3BlZWREaWFsQWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vU3BlZWREaWFsQWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3BlZWREaWFsSWNvbiB9IGZyb20gJy4vU3BlZWREaWFsSWNvbic7XG5leHBvcnQgKiBmcm9tICcuL1NwZWVkRGlhbEljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJDb250ZXh0IH0gZnJvbSAnLi9UYWJDb250ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vVGFiQ29udGV4dCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYkxpc3QgfSBmcm9tICcuL1RhYkxpc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9UYWJMaXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFiUGFuZWwgfSBmcm9tICcuL1RhYlBhbmVsJztcbmV4cG9ydCAqIGZyb20gJy4vVGFiUGFuZWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaW1lbGluZSB9IGZyb20gJy4vVGltZWxpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9UaW1lbGluZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRpbWVsaW5lQ29ubmVjdG9yIH0gZnJvbSAnLi9UaW1lbGluZUNvbm5lY3Rvcic7XG5leHBvcnQgKiBmcm9tICcuL1RpbWVsaW5lQ29ubmVjdG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGltZWxpbmVDb250ZW50IH0gZnJvbSAnLi9UaW1lbGluZUNvbnRlbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9UaW1lbGluZUNvbnRlbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaW1lbGluZURvdCB9IGZyb20gJy4vVGltZWxpbmVEb3QnO1xuZXhwb3J0ICogZnJvbSAnLi9UaW1lbGluZURvdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRpbWVsaW5lSXRlbSB9IGZyb20gJy4vVGltZWxpbmVJdGVtJztcbmV4cG9ydCAqIGZyb20gJy4vVGltZWxpbmVJdGVtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQgfSBmcm9tICcuL1RpbWVsaW5lT3Bwb3NpdGVDb250ZW50JztcbmV4cG9ydCAqIGZyb20gJy4vVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaW1lbGluZVNlcGFyYXRvciB9IGZyb20gJy4vVGltZWxpbmVTZXBhcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9UaW1lbGluZVNlcGFyYXRvcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvZ2dsZUJ1dHRvbiB9IGZyb20gJy4vVG9nZ2xlQnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vVG9nZ2xlQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9nZ2xlQnV0dG9uR3JvdXAgfSBmcm9tICcuL1RvZ2dsZUJ1dHRvbkdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vVG9nZ2xlQnV0dG9uR3JvdXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUcmVlSXRlbSB9IGZyb20gJy4vVHJlZUl0ZW0nO1xuZXhwb3J0ICogZnJvbSAnLi9UcmVlSXRlbSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyZWVWaWV3IH0gZnJvbSAnLi9UcmVlVmlldyc7XG5leHBvcnQgKiBmcm9tICcuL1RyZWVWaWV3JzsgLy8gY3JlYXRlRmlsdGVyT3B0aW9ucyBpcyBleHBvcnRlZCBmcm9tIEF1dG9jb21wbGV0ZVxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUF1dG9jb21wbGV0ZSB9IGZyb20gJy4vdXNlQXV0b2NvbXBsZXRlJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnpcIlxufSksICdBZGQnKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcgMTBsNSA1IDUtNXpcIlxufSksICdBcnJvd0Ryb3BEb3duJyk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCJcbn0pLCAnQ2xvc2UnKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTExIDE1aDJ2MmgtMnptMC04aDJ2NmgtMnptLjk5LTVDNi40NyAyIDIgNi40OCAyIDEyczQuNDcgMTAgOS45OSAxMEMxNy41MiAyMiAyMiAxNy41MiAyMiAxMlMxNy41MiAyIDExLjk5IDJ6TTEyIDIwYy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHpcIlxufSksICdFcnJvck91dGxpbmUnKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE4LjQxIDE2LjU5TDEzLjgyIDEybDQuNTktNC41OUwxNyA2bC02IDYgNiA2ek02IDZoMnYxMkg2elwiXG59KSwgJ0ZpcnN0UGFnZScpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91dGlscyc7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEsOUgxM1Y3SDExTTEyLDIwQzcuNTksMjAgNCwxNi40MSA0LDEyQzQsNy41OSA3LjU5LDQgMTIsNEMxNi40MSw0IDIwLDcuNTkgMjAsIDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwgMTAgMCAwLDAgMTIsMk0xMSwxN0gxM1YxMUgxMVYxN1pcIlxufSksICdJbmZvT3V0bGluZWQnKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTUuNTkgNy40MUwxMC4xOCAxMmwtNC41OSA0LjU5TDcgMThsNi02LTYtNnpNMTYgNmgydjEyaC0yelwiXG59KSwgJ0xhc3RQYWdlJyk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiXG59KSwgJ05hdmlnYXRlQmVmb3JlJyk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xMCA2TDguNTkgNy40MSAxMy4xNyAxMmwtNC41OCA0LjU5TDEwIDE4bDYtNnpcIlxufSksICdOYXZpZ2F0ZU5leHQnKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDUuOTlMMTkuNTMgMTlINC40N0wxMiA1Ljk5TTEyIDJMMSAyMWgyMkwxMiAyem0xIDE0aC0ydjJoMnYtMnptMC02aC0ydjRoMnYtNHpcIlxufSksICdSZXBvcnRQcm9ibGVtT3V0bGluZWQnKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxelwiXG59KSwgJ1N0YXInKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIwLDEyQTgsOCAwIDAsMSAxMiwyMEE4LDggMCAwLDEgNCwxMkE4LDggMCAwLDEgMTIsNEMxMi43Niw0IDEzLjUsNC4xMSAxNC4yLCA0LjMxTDE1Ljc3LDIuNzRDMTQuNjEsMi4yNiAxMy4zNCwyIDEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsIDAgMjIsMTJNNy45MSwxMC4wOEw2LjUsMTEuNUwxMSwxNkwyMSw2TDE5LjU5LDQuNThMMTEsMTMuMTdMNy45MSwxMC4wOFpcIlxufSksICdTdWNjZXNzT3V0bGluZWQnKTsiLCJleHBvcnQgeyBkZWZhdWx0LCBjcmVhdGVGaWx0ZXJPcHRpb25zIH0gZnJvbSAnLi91c2VBdXRvY29tcGxldGUnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2V0UmVmLCB1c2VFdmVudENhbGxiYWNrLCB1c2VDb250cm9sbGVkLCB1bnN0YWJsZV91c2VJZCBhcyB1c2VJZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJzsgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTkwOTA0L3JlbW92ZS1hY2NlbnRzLWRpYWNyaXRpY3MtaW4tYS1zdHJpbmctaW4tamF2YXNjcmlwdFxuLy8gR2l2ZSB1cCBvbiBJRSAxMSBzdXBwb3J0IGZvciB0aGlzIGZlYXR1cmVcblxuZnVuY3Rpb24gc3RyaXBEaWFjcml0aWNzKHN0cmluZykge1xuICByZXR1cm4gdHlwZW9mIHN0cmluZy5ub3JtYWxpemUgIT09ICd1bmRlZmluZWQnID8gc3RyaW5nLm5vcm1hbGl6ZSgnTkZEJykucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpIDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsdGVyT3B0aW9ucygpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBfY29uZmlnJGlnbm9yZUFjY2VudHMgPSBjb25maWcuaWdub3JlQWNjZW50cyxcbiAgICAgIGlnbm9yZUFjY2VudHMgPSBfY29uZmlnJGlnbm9yZUFjY2VudHMgPT09IHZvaWQgMCA/IHRydWUgOiBfY29uZmlnJGlnbm9yZUFjY2VudHMsXG4gICAgICBfY29uZmlnJGlnbm9yZUNhc2UgPSBjb25maWcuaWdub3JlQ2FzZSxcbiAgICAgIGlnbm9yZUNhc2UgPSBfY29uZmlnJGlnbm9yZUNhc2UgPT09IHZvaWQgMCA/IHRydWUgOiBfY29uZmlnJGlnbm9yZUNhc2UsXG4gICAgICBsaW1pdCA9IGNvbmZpZy5saW1pdCxcbiAgICAgIF9jb25maWckbWF0Y2hGcm9tID0gY29uZmlnLm1hdGNoRnJvbSxcbiAgICAgIG1hdGNoRnJvbSA9IF9jb25maWckbWF0Y2hGcm9tID09PSB2b2lkIDAgPyAnYW55JyA6IF9jb25maWckbWF0Y2hGcm9tLFxuICAgICAgc3RyaW5naWZ5ID0gY29uZmlnLnN0cmluZ2lmeSxcbiAgICAgIF9jb25maWckdHJpbSA9IGNvbmZpZy50cmltLFxuICAgICAgdHJpbSA9IF9jb25maWckdHJpbSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfY29uZmlnJHRyaW07XG4gIHJldHVybiBmdW5jdGlvbiAob3B0aW9ucywgX3JlZikge1xuICAgIHZhciBpbnB1dFZhbHVlID0gX3JlZi5pbnB1dFZhbHVlLFxuICAgICAgICBnZXRPcHRpb25MYWJlbCA9IF9yZWYuZ2V0T3B0aW9uTGFiZWw7XG4gICAgdmFyIGlucHV0ID0gdHJpbSA/IGlucHV0VmFsdWUudHJpbSgpIDogaW5wdXRWYWx1ZTtcblxuICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICBpbnB1dCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKGlnbm9yZUFjY2VudHMpIHtcbiAgICAgIGlucHV0ID0gc3RyaXBEaWFjcml0aWNzKGlucHV0KTtcbiAgICB9XG5cbiAgICB2YXIgZmlsdGVyZWRPcHRpb25zID0gb3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgdmFyIGNhbmRpZGF0ZSA9IChzdHJpbmdpZnkgfHwgZ2V0T3B0aW9uTGFiZWwpKG9wdGlvbik7XG5cbiAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaWdub3JlQWNjZW50cykge1xuICAgICAgICBjYW5kaWRhdGUgPSBzdHJpcERpYWNyaXRpY3MoY2FuZGlkYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hdGNoRnJvbSA9PT0gJ3N0YXJ0JyA/IGNhbmRpZGF0ZS5pbmRleE9mKGlucHV0KSA9PT0gMCA6IGNhbmRpZGF0ZS5pbmRleE9mKGlucHV0KSA+IC0xO1xuICAgIH0pO1xuICAgIHJldHVybiB0eXBlb2YgbGltaXQgPT09ICdudW1iZXInID8gZmlsdGVyZWRPcHRpb25zLnNsaWNlKDAsIGxpbWl0KSA6IGZpbHRlcmVkT3B0aW9ucztcbiAgfTtcbn0gLy8gVG8gcmVwbGFjZSB3aXRoIC5maW5kSW5kZXgoKSBvbmNlIHdlIHN0b3AgSUUgMTEgc3VwcG9ydC5cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBjb21wKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoY29tcChhcnJheVtpXSkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxudmFyIGRlZmF1bHRGaWx0ZXJPcHRpb25zID0gY3JlYXRlRmlsdGVyT3B0aW9ucygpOyAvLyBOdW1iZXIgb2Ygb3B0aW9ucyB0byBqdW1wIGluIGxpc3QgYm94IHdoZW4gcGFnZXVwIGFuZCBwYWdlZG93biBrZXlzIGFyZSB1c2VkLlxuXG52YXIgcGFnZVNpemUgPSA1O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0b2NvbXBsZXRlKHByb3BzKSB7XG4gIHZhciBfcHJvcHMkYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgYXV0b0NvbXBsZXRlID0gX3Byb3BzJGF1dG9Db21wbGV0ZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXV0b0NvbXBsZXRlLFxuICAgICAgX3Byb3BzJGF1dG9IaWdobGlnaHQgPSBwcm9wcy5hdXRvSGlnaGxpZ2h0LFxuICAgICAgYXV0b0hpZ2hsaWdodCA9IF9wcm9wcyRhdXRvSGlnaGxpZ2h0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvSGlnaGxpZ2h0LFxuICAgICAgX3Byb3BzJGF1dG9TZWxlY3QgPSBwcm9wcy5hdXRvU2VsZWN0LFxuICAgICAgYXV0b1NlbGVjdCA9IF9wcm9wcyRhdXRvU2VsZWN0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvU2VsZWN0LFxuICAgICAgX3Byb3BzJGJsdXJPblNlbGVjdCA9IHByb3BzLmJsdXJPblNlbGVjdCxcbiAgICAgIGJsdXJPblNlbGVjdCA9IF9wcm9wcyRibHVyT25TZWxlY3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGJsdXJPblNlbGVjdCxcbiAgICAgIF9wcm9wcyRjbGVhck9uQmx1ciA9IHByb3BzLmNsZWFyT25CbHVyLFxuICAgICAgY2xlYXJPbkJsdXIgPSBfcHJvcHMkY2xlYXJPbkJsdXIgPT09IHZvaWQgMCA/ICFwcm9wcy5mcmVlU29sbyA6IF9wcm9wcyRjbGVhck9uQmx1cixcbiAgICAgIF9wcm9wcyRjbGVhck9uRXNjYXBlID0gcHJvcHMuY2xlYXJPbkVzY2FwZSxcbiAgICAgIGNsZWFyT25Fc2NhcGUgPSBfcHJvcHMkY2xlYXJPbkVzY2FwZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkY2xlYXJPbkVzY2FwZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnROYW1lID0gcHJvcHMuY29tcG9uZW50TmFtZSxcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBfcHJvcHMkY29tcG9uZW50TmFtZSA9PT0gdm9pZCAwID8gJ3VzZUF1dG9jb21wbGV0ZScgOiBfcHJvcHMkY29tcG9uZW50TmFtZSxcbiAgICAgIF9wcm9wcyRkZWJ1ZyA9IHByb3BzLmRlYnVnLFxuICAgICAgZGVidWcgPSBfcHJvcHMkZGVidWcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRlYnVnLFxuICAgICAgX3Byb3BzJGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IF9wcm9wcyRkZWZhdWx0VmFsdWUgPT09IHZvaWQgMCA/IHByb3BzLm11bHRpcGxlID8gW10gOiBudWxsIDogX3Byb3BzJGRlZmF1bHRWYWx1ZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlQ2xlYXJhYiA9IHByb3BzLmRpc2FibGVDbGVhcmFibGUsXG4gICAgICBkaXNhYmxlQ2xlYXJhYmxlID0gX3Byb3BzJGRpc2FibGVDbGVhcmFiID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQ2xlYXJhYixcbiAgICAgIF9wcm9wcyRkaXNhYmxlQ2xvc2VPbiA9IHByb3BzLmRpc2FibGVDbG9zZU9uU2VsZWN0LFxuICAgICAgZGlzYWJsZUNsb3NlT25TZWxlY3QgPSBfcHJvcHMkZGlzYWJsZUNsb3NlT24gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVDbG9zZU9uLFxuICAgICAgX3Byb3BzJGRpc2FibGVkSXRlbXNGID0gcHJvcHMuZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSxcbiAgICAgIGRpc2FibGVkSXRlbXNGb2N1c2FibGUgPSBfcHJvcHMkZGlzYWJsZWRJdGVtc0YgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkSXRlbXNGLFxuICAgICAgX3Byb3BzJGRpc2FibGVMaXN0V3JhID0gcHJvcHMuZGlzYWJsZUxpc3RXcmFwLFxuICAgICAgZGlzYWJsZUxpc3RXcmFwID0gX3Byb3BzJGRpc2FibGVMaXN0V3JhID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlTGlzdFdyYSxcbiAgICAgIF9wcm9wcyRmaWx0ZXJPcHRpb25zID0gcHJvcHMuZmlsdGVyT3B0aW9ucyxcbiAgICAgIGZpbHRlck9wdGlvbnMgPSBfcHJvcHMkZmlsdGVyT3B0aW9ucyA9PT0gdm9pZCAwID8gZGVmYXVsdEZpbHRlck9wdGlvbnMgOiBfcHJvcHMkZmlsdGVyT3B0aW9ucyxcbiAgICAgIF9wcm9wcyRmaWx0ZXJTZWxlY3RlZCA9IHByb3BzLmZpbHRlclNlbGVjdGVkT3B0aW9ucyxcbiAgICAgIGZpbHRlclNlbGVjdGVkT3B0aW9ucyA9IF9wcm9wcyRmaWx0ZXJTZWxlY3RlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZmlsdGVyU2VsZWN0ZWQsXG4gICAgICBfcHJvcHMkZnJlZVNvbG8gPSBwcm9wcy5mcmVlU29sbyxcbiAgICAgIGZyZWVTb2xvID0gX3Byb3BzJGZyZWVTb2xvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmcmVlU29sbyxcbiAgICAgIGdldE9wdGlvbkRpc2FibGVkID0gcHJvcHMuZ2V0T3B0aW9uRGlzYWJsZWQsXG4gICAgICBfcHJvcHMkZ2V0T3B0aW9uTGFiZWwgPSBwcm9wcy5nZXRPcHRpb25MYWJlbCxcbiAgICAgIGdldE9wdGlvbkxhYmVsUHJvcCA9IF9wcm9wcyRnZXRPcHRpb25MYWJlbCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHJldHVybiBvcHRpb247XG4gIH0gOiBfcHJvcHMkZ2V0T3B0aW9uTGFiZWwsXG4gICAgICBfcHJvcHMkZ2V0T3B0aW9uU2VsZWMgPSBwcm9wcy5nZXRPcHRpb25TZWxlY3RlZCxcbiAgICAgIGdldE9wdGlvblNlbGVjdGVkID0gX3Byb3BzJGdldE9wdGlvblNlbGVjID09PSB2b2lkIDAgPyBmdW5jdGlvbiAob3B0aW9uLCB2YWx1ZSkge1xuICAgIHJldHVybiBvcHRpb24gPT09IHZhbHVlO1xuICB9IDogX3Byb3BzJGdldE9wdGlvblNlbGVjLFxuICAgICAgZ3JvdXBCeSA9IHByb3BzLmdyb3VwQnksXG4gICAgICBfcHJvcHMkaGFuZGxlSG9tZUVuZEsgPSBwcm9wcy5oYW5kbGVIb21lRW5kS2V5cyxcbiAgICAgIGhhbmRsZUhvbWVFbmRLZXlzID0gX3Byb3BzJGhhbmRsZUhvbWVFbmRLID09PSB2b2lkIDAgPyAhcHJvcHMuZnJlZVNvbG8gOiBfcHJvcHMkaGFuZGxlSG9tZUVuZEssXG4gICAgICBpZFByb3AgPSBwcm9wcy5pZCxcbiAgICAgIF9wcm9wcyRpbmNsdWRlSW5wdXRJbiA9IHByb3BzLmluY2x1ZGVJbnB1dEluTGlzdCxcbiAgICAgIGluY2x1ZGVJbnB1dEluTGlzdCA9IF9wcm9wcyRpbmNsdWRlSW5wdXRJbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaW5jbHVkZUlucHV0SW4sXG4gICAgICBpbnB1dFZhbHVlUHJvcCA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICBfcHJvcHMkbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZSxcbiAgICAgIG11bHRpcGxlID0gX3Byb3BzJG11bHRpcGxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aXBsZSxcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbkNsb3NlID0gcHJvcHMub25DbG9zZSxcbiAgICAgIG9uSGlnaGxpZ2h0Q2hhbmdlID0gcHJvcHMub25IaWdobGlnaHRDaGFuZ2UsXG4gICAgICBvbklucHV0Q2hhbmdlID0gcHJvcHMub25JbnB1dENoYW5nZSxcbiAgICAgIG9uT3BlbiA9IHByb3BzLm9uT3BlbixcbiAgICAgIG9wZW5Qcm9wID0gcHJvcHMub3BlbixcbiAgICAgIF9wcm9wcyRvcGVuT25Gb2N1cyA9IHByb3BzLm9wZW5PbkZvY3VzLFxuICAgICAgb3Blbk9uRm9jdXMgPSBfcHJvcHMkb3Blbk9uRm9jdXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG9wZW5PbkZvY3VzLFxuICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICBfcHJvcHMkc2VsZWN0T25Gb2N1cyA9IHByb3BzLnNlbGVjdE9uRm9jdXMsXG4gICAgICBzZWxlY3RPbkZvY3VzID0gX3Byb3BzJHNlbGVjdE9uRm9jdXMgPT09IHZvaWQgMCA/ICFwcm9wcy5mcmVlU29sbyA6IF9wcm9wcyRzZWxlY3RPbkZvY3VzLFxuICAgICAgdmFsdWVQcm9wID0gcHJvcHMudmFsdWU7XG4gIHZhciBpZCA9IHVzZUlkKGlkUHJvcCk7XG4gIHZhciBnZXRPcHRpb25MYWJlbCA9IGdldE9wdGlvbkxhYmVsUHJvcDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGdldE9wdGlvbkxhYmVsID0gZnVuY3Rpb24gZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB7XG4gICAgICB2YXIgb3B0aW9uTGFiZWwgPSBnZXRPcHRpb25MYWJlbFByb3Aob3B0aW9uKTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25MYWJlbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGVycm9uZW91c1JldHVybiA9IG9wdGlvbkxhYmVsID09PSB1bmRlZmluZWQgPyAndW5kZWZpbmVkJyA6IFwiXCIuY29uY2F0KF90eXBlb2Yob3B0aW9uTGFiZWwpLCBcIiAoXCIpLmNvbmNhdChvcHRpb25MYWJlbCwgXCIpXCIpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSBgZ2V0T3B0aW9uTGFiZWxgIG1ldGhvZCBvZiBcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIgcmV0dXJuZWQgXCIpLmNvbmNhdChlcnJvbmVvdXNSZXR1cm4sIFwiIGluc3RlYWQgb2YgYSBzdHJpbmcgZm9yIFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkob3B0aW9uKSwgXCIuXCIpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbkxhYmVsO1xuICAgIH07XG4gIH1cblxuICB2YXIgaWdub3JlRm9jdXMgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB2YXIgZmlyc3RGb2N1cyA9IFJlYWN0LnVzZVJlZih0cnVlKTtcbiAgdmFyIGlucHV0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgbGlzdGJveFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUobnVsbCksXG4gICAgICBhbmNob3JFbCA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldEFuY2hvckVsID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoLTEpLFxuICAgICAgZm9jdXNlZFRhZyA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRGb2N1c2VkVGFnID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgZGVmYXVsdEhpZ2hsaWdodGVkID0gYXV0b0hpZ2hsaWdodCA/IDAgOiAtMTtcbiAgdmFyIGhpZ2hsaWdodGVkSW5kZXhSZWYgPSBSZWFjdC51c2VSZWYoZGVmYXVsdEhpZ2hsaWdodGVkKTtcblxuICB2YXIgX3VzZUNvbnRyb2xsZWQgPSB1c2VDb250cm9sbGVkKHtcbiAgICBjb250cm9sbGVkOiB2YWx1ZVByb3AsXG4gICAgZGVmYXVsdDogZGVmYXVsdFZhbHVlLFxuICAgIG5hbWU6IGNvbXBvbmVudE5hbWVcbiAgfSksXG4gICAgICBfdXNlQ29udHJvbGxlZDIgPSBfc2xpY2VkVG9BcnJheShfdXNlQ29udHJvbGxlZCwgMiksXG4gICAgICB2YWx1ZSA9IF91c2VDb250cm9sbGVkMlswXSxcbiAgICAgIHNldFZhbHVlID0gX3VzZUNvbnRyb2xsZWQyWzFdO1xuXG4gIHZhciBfdXNlQ29udHJvbGxlZDMgPSB1c2VDb250cm9sbGVkKHtcbiAgICBjb250cm9sbGVkOiBpbnB1dFZhbHVlUHJvcCxcbiAgICBkZWZhdWx0OiAnJyxcbiAgICBuYW1lOiBjb21wb25lbnROYW1lLFxuICAgIHN0YXRlOiAnaW5wdXRWYWx1ZSdcbiAgfSksXG4gICAgICBfdXNlQ29udHJvbGxlZDQgPSBfc2xpY2VkVG9BcnJheShfdXNlQ29udHJvbGxlZDMsIDIpLFxuICAgICAgaW5wdXRWYWx1ZSA9IF91c2VDb250cm9sbGVkNFswXSxcbiAgICAgIHNldElucHV0VmFsdWUgPSBfdXNlQ29udHJvbGxlZDRbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBmb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlM1swXSxcbiAgICAgIHNldEZvY3VzZWQgPSBfUmVhY3QkdXNlU3RhdGUzWzFdO1xuXG4gIHZhciByZXNldElucHV0VmFsdWUgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uIChldmVudCwgbmV3VmFsdWUpIHtcbiAgICB2YXIgbmV3SW5wdXRWYWx1ZTtcblxuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgbmV3SW5wdXRWYWx1ZSA9ICcnO1xuICAgIH0gZWxzZSBpZiAobmV3VmFsdWUgPT0gbnVsbCkge1xuICAgICAgbmV3SW5wdXRWYWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb3B0aW9uTGFiZWwgPSBnZXRPcHRpb25MYWJlbChuZXdWYWx1ZSk7XG4gICAgICBuZXdJbnB1dFZhbHVlID0gdHlwZW9mIG9wdGlvbkxhYmVsID09PSAnc3RyaW5nJyA/IG9wdGlvbkxhYmVsIDogJyc7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0VmFsdWUgPT09IG5ld0lucHV0VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpO1xuXG4gICAgaWYgKG9uSW5wdXRDaGFuZ2UpIHtcbiAgICAgIG9uSW5wdXRDaGFuZ2UoZXZlbnQsIG5ld0lucHV0VmFsdWUsICdyZXNldCcpO1xuICAgIH1cbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVzZXRJbnB1dFZhbHVlKG51bGwsIHZhbHVlKTtcbiAgfSwgW3ZhbHVlLCByZXNldElucHV0VmFsdWVdKTtcblxuICB2YXIgX3VzZUNvbnRyb2xsZWQ1ID0gdXNlQ29udHJvbGxlZCh7XG4gICAgY29udHJvbGxlZDogb3BlblByb3AsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgbmFtZTogY29tcG9uZW50TmFtZSxcbiAgICBzdGF0ZTogJ29wZW4nXG4gIH0pLFxuICAgICAgX3VzZUNvbnRyb2xsZWQ2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZUNvbnRyb2xsZWQ1LCAyKSxcbiAgICAgIG9wZW4gPSBfdXNlQ29udHJvbGxlZDZbMF0sXG4gICAgICBzZXRPcGVuU3RhdGUgPSBfdXNlQ29udHJvbGxlZDZbMV07XG5cbiAgdmFyIGlucHV0VmFsdWVJc1NlbGVjdGVkVmFsdWUgPSAhbXVsdGlwbGUgJiYgdmFsdWUgIT0gbnVsbCAmJiBpbnB1dFZhbHVlID09PSBnZXRPcHRpb25MYWJlbCh2YWx1ZSk7XG4gIHZhciBwb3B1cE9wZW4gPSBvcGVuO1xuICB2YXIgZmlsdGVyZWRPcHRpb25zID0gcG9wdXBPcGVuID8gZmlsdGVyT3B0aW9ucyhvcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgaWYgKGZpbHRlclNlbGVjdGVkT3B0aW9ucyAmJiAobXVsdGlwbGUgPyB2YWx1ZSA6IFt2YWx1ZV0pLnNvbWUoZnVuY3Rpb24gKHZhbHVlMikge1xuICAgICAgcmV0dXJuIHZhbHVlMiAhPT0gbnVsbCAmJiBnZXRPcHRpb25TZWxlY3RlZChvcHRpb24sIHZhbHVlMik7XG4gICAgfSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSksIC8vIHdlIHVzZSB0aGUgZW1wdHkgc3RyaW5nIHRvIG1hbmlwdWxhdGUgYGZpbHRlck9wdGlvbnNgIHRvIG5vdCBmaWx0ZXIgYW55IG9wdGlvbnNcbiAgLy8gaS5lLiB0aGUgZmlsdGVyIHByZWRpY2F0ZSBhbHdheXMgcmV0dXJucyB0cnVlXG4gIHtcbiAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlSXNTZWxlY3RlZFZhbHVlID8gJycgOiBpbnB1dFZhbHVlLFxuICAgIGdldE9wdGlvbkxhYmVsOiBnZXRPcHRpb25MYWJlbFxuICB9KSA6IFtdO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmICFmcmVlU29sbyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBtaXNzaW5nVmFsdWUgPSAobXVsdGlwbGUgPyB2YWx1ZSA6IFt2YWx1ZV0pLmZpbHRlcihmdW5jdGlvbiAodmFsdWUyKSB7XG4gICAgICAgIHJldHVybiAhb3B0aW9ucy5zb21lKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICByZXR1cm4gZ2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCB2YWx1ZTIpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWlzc2luZ1ZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFtcIk1hdGVyaWFsLVVJOiBUaGUgdmFsdWUgcHJvdmlkZWQgdG8gXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiIGlzIGludmFsaWQuXCIpLCBcIk5vbmUgb2YgdGhlIG9wdGlvbnMgbWF0Y2ggd2l0aCBgXCIuY29uY2F0KG1pc3NpbmdWYWx1ZS5sZW5ndGggPiAxID8gSlNPTi5zdHJpbmdpZnkobWlzc2luZ1ZhbHVlKSA6IEpTT04uc3RyaW5naWZ5KG1pc3NpbmdWYWx1ZVswXSksIFwiYC5cIiksICdZb3UgY2FuIHVzZSB0aGUgYGdldE9wdGlvblNlbGVjdGVkYCBwcm9wIHRvIGN1c3RvbWl6ZSB0aGUgZXF1YWxpdHkgdGVzdC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGZvY3VzVGFnID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAodGFnVG9Gb2N1cykge1xuICAgIGlmICh0YWdUb0ZvY3VzID09PSAtMSkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmNob3JFbC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFnLWluZGV4PVxcXCJcIi5jb25jYXQodGFnVG9Gb2N1cywgXCJcXFwiXVwiKSkuZm9jdXMoKTtcbiAgICB9XG4gIH0pOyAvLyBFbnN1cmUgdGhlIGZvY3VzZWRUYWcgaXMgbmV2ZXIgaW5jb25zaXN0ZW50XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobXVsdGlwbGUgJiYgZm9jdXNlZFRhZyA+IHZhbHVlLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldEZvY3VzZWRUYWcoLTEpO1xuICAgICAgZm9jdXNUYWcoLTEpO1xuICAgIH1cbiAgfSwgW3ZhbHVlLCBtdWx0aXBsZSwgZm9jdXNlZFRhZywgZm9jdXNUYWddKTtcblxuICBmdW5jdGlvbiB2YWxpZE9wdGlvbkluZGV4KGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoIWxpc3Rib3hSZWYuY3VycmVudCB8fCBpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEZvY3VzID0gaW5kZXg7XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgLy8gT3V0IG9mIHJhbmdlXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcgJiYgbmV4dEZvY3VzID09PSBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoIHx8IGRpcmVjdGlvbiA9PT0gJ3ByZXZpb3VzJyAmJiBuZXh0Rm9jdXMgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9wdGlvbiA9IGxpc3Rib3hSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtb3B0aW9uLWluZGV4PVxcXCJcIi5jb25jYXQobmV4dEZvY3VzLCBcIlxcXCJdXCIpKTsgLy8gU2FtZSBsb2dpYyBhcyBNZW51TGlzdC5qc1xuXG4gICAgICB2YXIgbmV4dEZvY3VzRGlzYWJsZWQgPSBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlID8gZmFsc2UgOiBvcHRpb24gJiYgKG9wdGlvbi5kaXNhYmxlZCB8fCBvcHRpb24uZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJyk7XG5cbiAgICAgIGlmIChvcHRpb24gJiYgIW9wdGlvbi5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykgfHwgbmV4dEZvY3VzRGlzYWJsZWQpIHtcbiAgICAgICAgLy8gTW92ZSB0byB0aGUgbmV4dCBlbGVtZW50LlxuICAgICAgICBuZXh0Rm9jdXMgKz0gZGlyZWN0aW9uID09PSAnbmV4dCcgPyAxIDogLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV4dEZvY3VzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBzZXRIaWdobGlnaHRlZEluZGV4ID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgZXZlbnQgPSBfcmVmMi5ldmVudCxcbiAgICAgICAgaW5kZXggPSBfcmVmMi5pbmRleCxcbiAgICAgICAgX3JlZjIkcmVhc29uID0gX3JlZjIucmVhc29uLFxuICAgICAgICByZWFzb24gPSBfcmVmMiRyZWFzb24gPT09IHZvaWQgMCA/ICdhdXRvJyA6IF9yZWYyJHJlYXNvbjtcbiAgICBoaWdobGlnaHRlZEluZGV4UmVmLmN1cnJlbnQgPSBpbmRleDsgLy8gZG9lcyB0aGUgaW5kZXggZXhpc3Q/XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBcIlwiLmNvbmNhdChpZCwgXCItb3B0aW9uLVwiKS5jb25jYXQoaW5kZXgpKTtcbiAgICB9XG5cbiAgICBpZiAob25IaWdobGlnaHRDaGFuZ2UpIHtcbiAgICAgIG9uSGlnaGxpZ2h0Q2hhbmdlKGV2ZW50LCBpbmRleCA9PT0gLTEgPyBudWxsIDogZmlsdGVyZWRPcHRpb25zW2luZGV4XSwgcmVhc29uKTtcbiAgICB9XG5cbiAgICBpZiAoIWxpc3Rib3hSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmV2ID0gbGlzdGJveFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvY3VzXScpO1xuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIHByZXYucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZvY3VzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxpc3Rib3hOb2RlID0gbGlzdGJveFJlZi5jdXJyZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJsaXN0Ym94XCJdJyk7IC8vIFwiTm8gcmVzdWx0c1wiXG5cbiAgICBpZiAoIWxpc3Rib3hOb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgbGlzdGJveE5vZGUuc2Nyb2xsVG9wID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9uID0gbGlzdGJveFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1vcHRpb24taW5kZXg9XFxcIlwiLmNvbmNhdChpbmRleCwgXCJcXFwiXVwiKSk7XG5cbiAgICBpZiAoIW9wdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMnLCAndHJ1ZScpOyAvLyBTY3JvbGwgYWN0aXZlIGRlc2NlbmRhbnQgaW50byB2aWV3LlxuICAgIC8vIExvZ2ljIGNvcGllZCBmcm9tIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvZXhhbXBsZXMvbGlzdGJveC9qcy9saXN0Ym94LmpzXG4gICAgLy9cbiAgICAvLyBDb25zaWRlciB0aGlzIEFQSSBpbnN0ZWFkIG9uY2UgaXQgaGFzIGEgYmV0dGVyIGJyb3dzZXIgc3VwcG9ydDpcbiAgICAvLyAuc2Nyb2xsSW50b1ZpZXcoeyBzY3JvbGxNb2RlOiAnaWYtbmVlZGVkJywgYmxvY2s6ICduZWFyZXN0JyB9KTtcblxuICAgIGlmIChsaXN0Ym94Tm9kZS5zY3JvbGxIZWlnaHQgPiBsaXN0Ym94Tm9kZS5jbGllbnRIZWlnaHQgJiYgcmVhc29uICE9PSAnbW91c2UnKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IG9wdGlvbjtcbiAgICAgIHZhciBzY3JvbGxCb3R0b20gPSBsaXN0Ym94Tm9kZS5jbGllbnRIZWlnaHQgKyBsaXN0Ym94Tm9kZS5zY3JvbGxUb3A7XG4gICAgICB2YXIgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnQub2Zmc2V0VG9wICsgZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIGlmIChlbGVtZW50Qm90dG9tID4gc2Nyb2xsQm90dG9tKSB7XG4gICAgICAgIGxpc3Rib3hOb2RlLnNjcm9sbFRvcCA9IGVsZW1lbnRCb3R0b20gLSBsaXN0Ym94Tm9kZS5jbGllbnRIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5vZmZzZXRIZWlnaHQgKiAoZ3JvdXBCeSA/IDEuMyA6IDApIDwgbGlzdGJveE5vZGUuc2Nyb2xsVG9wKSB7XG4gICAgICAgIGxpc3Rib3hOb2RlLnNjcm9sbFRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5vZmZzZXRIZWlnaHQgKiAoZ3JvdXBCeSA/IDEuMyA6IDApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHZhciBjaGFuZ2VIaWdobGlnaHRlZEluZGV4ID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICB2YXIgZXZlbnQgPSBfcmVmMy5ldmVudCxcbiAgICAgICAgZGlmZiA9IF9yZWYzLmRpZmYsXG4gICAgICAgIF9yZWYzJGRpcmVjdGlvbiA9IF9yZWYzLmRpcmVjdGlvbixcbiAgICAgICAgZGlyZWN0aW9uID0gX3JlZjMkZGlyZWN0aW9uID09PSB2b2lkIDAgPyAnbmV4dCcgOiBfcmVmMyRkaXJlY3Rpb24sXG4gICAgICAgIF9yZWYzJHJlYXNvbiA9IF9yZWYzLnJlYXNvbixcbiAgICAgICAgcmVhc29uID0gX3JlZjMkcmVhc29uID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcmVmMyRyZWFzb247XG5cbiAgICBpZiAoIXBvcHVwT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBnZXROZXh0SW5kZXggPSBmdW5jdGlvbiBnZXROZXh0SW5kZXgoKSB7XG4gICAgICB2YXIgbWF4SW5kZXggPSBmaWx0ZXJlZE9wdGlvbnMubGVuZ3RoIC0gMTtcblxuICAgICAgaWYgKGRpZmYgPT09ICdyZXNldCcpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRIaWdobGlnaHRlZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpZmYgPT09ICdzdGFydCcpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWZmID09PSAnZW5kJykge1xuICAgICAgICByZXR1cm4gbWF4SW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdJbmRleCA9IGhpZ2hsaWdodGVkSW5kZXhSZWYuY3VycmVudCArIGRpZmY7XG5cbiAgICAgIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICAgICAgaWYgKG5ld0luZGV4ID09PSAtMSAmJiBpbmNsdWRlSW5wdXRJbkxpc3QpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlzYWJsZUxpc3RXcmFwICYmIGhpZ2hsaWdodGVkSW5kZXhSZWYuY3VycmVudCAhPT0gLTEgfHwgTWF0aC5hYnMoZGlmZikgPiAxKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF4SW5kZXg7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdJbmRleCA+IG1heEluZGV4KSB7XG4gICAgICAgIGlmIChuZXdJbmRleCA9PT0gbWF4SW5kZXggKyAxICYmIGluY2x1ZGVJbnB1dEluTGlzdCkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXNhYmxlTGlzdFdyYXAgfHwgTWF0aC5hYnMoZGlmZikgPiAxKSB7XG4gICAgICAgICAgcmV0dXJuIG1heEluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdJbmRleDtcbiAgICB9O1xuXG4gICAgdmFyIG5leHRJbmRleCA9IHZhbGlkT3B0aW9uSW5kZXgoZ2V0TmV4dEluZGV4KCksIGRpcmVjdGlvbik7XG4gICAgc2V0SGlnaGxpZ2h0ZWRJbmRleCh7XG4gICAgICBpbmRleDogbmV4dEluZGV4LFxuICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICBldmVudDogZXZlbnRcbiAgICB9KTsgLy8gU3luYyB0aGUgY29udGVudCBvZiB0aGUgaW5wdXQgd2l0aCB0aGUgaGlnaGxpZ2h0ZWQgb3B0aW9uLlxuXG4gICAgaWYgKGF1dG9Db21wbGV0ZSAmJiBkaWZmICE9PSAncmVzZXQnKSB7XG4gICAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBvcHRpb24gPSBnZXRPcHRpb25MYWJlbChmaWx0ZXJlZE9wdGlvbnNbbmV4dEluZGV4XSk7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBvcHRpb247IC8vIFRoZSBwb3J0aW9uIG9mIHRoZSBzZWxlY3RlZCBzdWdnZXN0aW9uIHRoYXQgaGFzIG5vdCBiZWVuIHR5cGVkIGJ5IHRoZSB1c2VyLFxuICAgICAgICAvLyBhIGNvbXBsZXRpb24gc3RyaW5nLCBhcHBlYXJzIGlubGluZSBhZnRlciB0aGUgaW5wdXQgY3Vyc29yIGluIHRoZSB0ZXh0Ym94LlxuXG4gICAgICAgIHZhciBpbmRleCA9IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgaW5wdXRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5wdXRSZWYuY3VycmVudC5zZXRTZWxlY3Rpb25SYW5nZShpbnB1dFZhbHVlLmxlbmd0aCwgb3B0aW9uLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICB2YXIgc3luY0hpZ2hsaWdodGVkSW5kZXggPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwb3B1cE9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVJdGVtID0gbXVsdGlwbGUgPyB2YWx1ZVswXSA6IHZhbHVlOyAvLyBUaGUgcG9wdXAgaXMgZW1wdHksIHJlc2V0XG5cbiAgICBpZiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMCB8fCB2YWx1ZUl0ZW0gPT0gbnVsbCkge1xuICAgICAgY2hhbmdlSGlnaGxpZ2h0ZWRJbmRleCh7XG4gICAgICAgIGRpZmY6ICdyZXNldCdcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghbGlzdGJveFJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBTeW5jaHJvbml6ZSB0aGUgdmFsdWUgd2l0aCB0aGUgaGlnaGxpZ2h0ZWQgaW5kZXhcblxuXG4gICAgaWYgKCFmaWx0ZXJTZWxlY3RlZE9wdGlvbnMgJiYgdmFsdWVJdGVtICE9IG51bGwpIHtcbiAgICAgIHZhciBjdXJyZW50T3B0aW9uID0gZmlsdGVyZWRPcHRpb25zW2hpZ2hsaWdodGVkSW5kZXhSZWYuY3VycmVudF07IC8vIEtlZXAgdGhlIGN1cnJlbnQgaGlnaGxpZ2h0ZWQgaW5kZXggaWYgcG9zc2libGVcblxuICAgICAgaWYgKG11bHRpcGxlICYmIGN1cnJlbnRPcHRpb24gJiYgZmluZEluZGV4KHZhbHVlLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiBnZXRPcHRpb25TZWxlY3RlZChjdXJyZW50T3B0aW9uLCB2YWwpO1xuICAgICAgfSkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZW1JbmRleCA9IGZpbmRJbmRleChmaWx0ZXJlZE9wdGlvbnMsIGZ1bmN0aW9uIChvcHRpb25JdGVtKSB7XG4gICAgICAgIHJldHVybiBnZXRPcHRpb25TZWxlY3RlZChvcHRpb25JdGVtLCB2YWx1ZUl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNoYW5nZUhpZ2hsaWdodGVkSW5kZXgoe1xuICAgICAgICAgIGRpZmY6ICdyZXNldCdcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRIaWdobGlnaHRlZEluZGV4KHtcbiAgICAgICAgICBpbmRleDogaXRlbUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBQcmV2ZW50IHRoZSBoaWdobGlnaHRlZCBpbmRleCB0byBsZWFrIG91dHNpZGUgdGhlIGJvdW5kYXJpZXMuXG5cblxuICAgIGlmIChoaWdobGlnaHRlZEluZGV4UmVmLmN1cnJlbnQgPj0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldEhpZ2hsaWdodGVkSW5kZXgoe1xuICAgICAgICBpbmRleDogZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDFcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUmVzdG9yZSB0aGUgZm9jdXMgdG8gdGhlIHByZXZpb3VzIGluZGV4LlxuXG5cbiAgICBzZXRIaWdobGlnaHRlZEluZGV4KHtcbiAgICAgIGluZGV4OiBoaWdobGlnaHRlZEluZGV4UmVmLmN1cnJlbnRcbiAgICB9KTsgLy8gSWdub3JlIGZpbHRlcmVkT3B0aW9ucyAoYW5kIG9wdGlvbnMsIGdldE9wdGlvblNlbGVjdGVkLCBnZXRPcHRpb25MYWJlbCkgbm90IHRvIGJyZWFrIHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFsvLyBPbmx5IHN5bmMgdGhlIGhpZ2hsaWdodGVkIGluZGV4IHdoZW4gdGhlIG9wdGlvbiBzd2l0Y2ggYmV0d2VlbiBlbXB0eSBhbmQgbm90XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMCwgLy8gRG9uJ3Qgc3luYyB0aGUgaGlnaGxpZ2h0ZWQgaW5kZXggd2l0aCB0aGUgdmFsdWUgd2hlbiBtdWx0aXBsZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIG11bHRpcGxlID8gZmFsc2UgOiB2YWx1ZSwgZmlsdGVyU2VsZWN0ZWRPcHRpb25zLCBjaGFuZ2VIaWdobGlnaHRlZEluZGV4LCBzZXRIaWdobGlnaHRlZEluZGV4LCBwb3B1cE9wZW4sIGlucHV0VmFsdWUsIG11bHRpcGxlXSk7XG4gIHZhciBoYW5kbGVMaXN0Ym94UmVmID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAobm9kZSkge1xuICAgIHNldFJlZihsaXN0Ym94UmVmLCBub2RlKTtcblxuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN5bmNIaWdobGlnaHRlZEluZGV4KCk7XG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHN5bmNIaWdobGlnaHRlZEluZGV4KCk7XG4gIH0sIFtzeW5jSGlnaGxpZ2h0ZWRJbmRleF0pO1xuXG4gIHZhciBoYW5kbGVPcGVuID0gZnVuY3Rpb24gaGFuZGxlT3BlbihldmVudCkge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0T3BlblN0YXRlKHRydWUpO1xuXG4gICAgaWYgKG9uT3Blbikge1xuICAgICAgb25PcGVuKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gaGFuZGxlQ2xvc2UoZXZlbnQsIHJlYXNvbikge1xuICAgIGlmICghb3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE9wZW5TdGF0ZShmYWxzZSk7XG5cbiAgICBpZiAob25DbG9zZSkge1xuICAgICAgb25DbG9zZShldmVudCwgcmVhc29uKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZVZhbHVlID0gZnVuY3Rpb24gaGFuZGxlVmFsdWUoZXZlbnQsIG5ld1ZhbHVlLCByZWFzb24sIGRldGFpbHMpIHtcbiAgICBpZiAodmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShldmVudCwgbmV3VmFsdWUsIHJlYXNvbiwgZGV0YWlscyk7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICB9O1xuXG4gIHZhciBpc1RvdWNoID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcblxuICB2YXIgc2VsZWN0TmV3VmFsdWUgPSBmdW5jdGlvbiBzZWxlY3ROZXdWYWx1ZShldmVudCwgb3B0aW9uKSB7XG4gICAgdmFyIHJlYXNvblByb3AgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICdzZWxlY3Qtb3B0aW9uJztcbiAgICB2YXIgb3JpZ2luID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAnb3B0aW9ucyc7XG4gICAgdmFyIHJlYXNvbiA9IHJlYXNvblByb3A7XG4gICAgdmFyIG5ld1ZhbHVlID0gb3B0aW9uO1xuXG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICBuZXdWYWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuc2xpY2UoKSA6IFtdO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IG5ld1ZhbHVlLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIGdldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgdmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBgZ2V0T3B0aW9uU2VsZWN0ZWRgIG1ldGhvZCBvZiBcIi5jb25jYXQoY29tcG9uZW50TmFtZSwgXCIgZG8gbm90IGhhbmRsZSB0aGUgYXJndW1lbnRzIGNvcnJlY3RseS5cIiksIFwiVGhlIGNvbXBvbmVudCBleHBlY3RzIGEgc2luZ2xlIHZhbHVlIHRvIG1hdGNoIGEgZ2l2ZW4gb3B0aW9uIGJ1dCBmb3VuZCBcIi5jb25jYXQobWF0Y2hlcy5sZW5ndGgsIFwiIG1hdGNoZXMuXCIpXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZW1JbmRleCA9IGZpbmRJbmRleChuZXdWYWx1ZSwgZnVuY3Rpb24gKHZhbHVlSXRlbSkge1xuICAgICAgICByZXR1cm4gZ2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCB2YWx1ZUl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgIG5ld1ZhbHVlLnB1c2gob3B0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAob3JpZ2luICE9PSAnZnJlZVNvbG8nKSB7XG4gICAgICAgIG5ld1ZhbHVlLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICAgICAgICByZWFzb24gPSAncmVtb3ZlLW9wdGlvbic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRJbnB1dFZhbHVlKGV2ZW50LCBuZXdWYWx1ZSk7XG4gICAgaGFuZGxlVmFsdWUoZXZlbnQsIG5ld1ZhbHVlLCByZWFzb24sIHtcbiAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgfSk7XG5cbiAgICBpZiAoIWRpc2FibGVDbG9zZU9uU2VsZWN0KSB7XG4gICAgICBoYW5kbGVDbG9zZShldmVudCwgcmVhc29uKTtcbiAgICB9XG5cbiAgICBpZiAoYmx1ck9uU2VsZWN0ID09PSB0cnVlIHx8IGJsdXJPblNlbGVjdCA9PT0gJ3RvdWNoJyAmJiBpc1RvdWNoLmN1cnJlbnQgfHwgYmx1ck9uU2VsZWN0ID09PSAnbW91c2UnICYmICFpc1RvdWNoLmN1cnJlbnQpIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuYmx1cigpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiB2YWxpZFRhZ0luZGV4KGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgdmFyIG5leHRGb2N1cyA9IGluZGV4O1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIC8vIE91dCBvZiByYW5nZVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnICYmIG5leHRGb2N1cyA9PT0gdmFsdWUubGVuZ3RoIHx8IGRpcmVjdGlvbiA9PT0gJ3ByZXZpb3VzJyAmJiBuZXh0Rm9jdXMgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9wdGlvbiA9IGFuY2hvckVsLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YWctaW5kZXg9XFxcIlwiLmNvbmNhdChuZXh0Rm9jdXMsIFwiXFxcIl1cIikpOyAvLyBTYW1lIGxvZ2ljIGFzIE1lbnVMaXN0LmpzXG5cbiAgICAgIGlmIChvcHRpb24gJiYgKCFvcHRpb24uaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpIHx8IG9wdGlvbi5kaXNhYmxlZCB8fCBvcHRpb24uZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJykpIHtcbiAgICAgICAgbmV4dEZvY3VzICs9IGRpcmVjdGlvbiA9PT0gJ25leHQnID8gMSA6IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5leHRGb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgaGFuZGxlRm9jdXNUYWcgPSBmdW5jdGlvbiBoYW5kbGVGb2N1c1RhZyhldmVudCwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZUNsb3NlKGV2ZW50LCAndG9nZ2xlSW5wdXQnKTtcbiAgICB2YXIgbmV4dFRhZyA9IGZvY3VzZWRUYWc7XG5cbiAgICBpZiAoZm9jdXNlZFRhZyA9PT0gLTEpIHtcbiAgICAgIGlmIChpbnB1dFZhbHVlID09PSAnJyAmJiBkaXJlY3Rpb24gPT09ICdwcmV2aW91cycpIHtcbiAgICAgICAgbmV4dFRhZyA9IHZhbHVlLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRUYWcgKz0gZGlyZWN0aW9uID09PSAnbmV4dCcgPyAxIDogLTE7XG5cbiAgICAgIGlmIChuZXh0VGFnIDwgMCkge1xuICAgICAgICBuZXh0VGFnID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRUYWcgPT09IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBuZXh0VGFnID0gLTE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV4dFRhZyA9IHZhbGlkVGFnSW5kZXgobmV4dFRhZywgZGlyZWN0aW9uKTtcbiAgICBzZXRGb2N1c2VkVGFnKG5leHRUYWcpO1xuICAgIGZvY3VzVGFnKG5leHRUYWcpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVDbGVhciA9IGZ1bmN0aW9uIGhhbmRsZUNsZWFyKGV2ZW50KSB7XG4gICAgaWdub3JlRm9jdXMuY3VycmVudCA9IHRydWU7XG4gICAgc2V0SW5wdXRWYWx1ZSgnJyk7XG5cbiAgICBpZiAob25JbnB1dENoYW5nZSkge1xuICAgICAgb25JbnB1dENoYW5nZShldmVudCwgJycsICdjbGVhcicpO1xuICAgIH1cblxuICAgIGhhbmRsZVZhbHVlKGV2ZW50LCBtdWx0aXBsZSA/IFtdIDogbnVsbCwgJ2NsZWFyJyk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKG90aGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGZvY3VzZWRUYWcgIT09IC0xICYmIFsnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnXS5pbmRleE9mKGV2ZW50LmtleSkgPT09IC0xKSB7XG4gICAgICAgIHNldEZvY3VzZWRUYWcoLTEpO1xuICAgICAgICBmb2N1c1RhZygtMSk7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgIGlmIChwb3B1cE9wZW4gJiYgaGFuZGxlSG9tZUVuZEtleXMpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgc2Nyb2xsIG9mIHRoZSBwYWdlXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2hhbmdlSGlnaGxpZ2h0ZWRJbmRleCh7XG4gICAgICAgICAgICAgIGRpZmY6ICdzdGFydCcsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogJ25leHQnLFxuICAgICAgICAgICAgICByZWFzb246ICdrZXlib2FyZCcsXG4gICAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgICBpZiAocG9wdXBPcGVuICYmIGhhbmRsZUhvbWVFbmRLZXlzKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IHNjcm9sbCBvZiB0aGUgcGFnZVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNoYW5nZUhpZ2hsaWdodGVkSW5kZXgoe1xuICAgICAgICAgICAgICBkaWZmOiAnZW5kJyxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncHJldmlvdXMnLFxuICAgICAgICAgICAgICByZWFzb246ICdrZXlib2FyZCcsXG4gICAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUGFnZVVwJzpcbiAgICAgICAgICAvLyBQcmV2ZW50IHNjcm9sbCBvZiB0aGUgcGFnZVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY2hhbmdlSGlnaGxpZ2h0ZWRJbmRleCh7XG4gICAgICAgICAgICBkaWZmOiAtcGFnZVNpemUsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdwcmV2aW91cycsXG4gICAgICAgICAgICByZWFzb246ICdrZXlib2FyZCcsXG4gICAgICAgICAgICBldmVudDogZXZlbnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBoYW5kbGVPcGVuKGV2ZW50KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdQYWdlRG93bic6XG4gICAgICAgICAgLy8gUHJldmVudCBzY3JvbGwgb2YgdGhlIHBhZ2VcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNoYW5nZUhpZ2hsaWdodGVkSW5kZXgoe1xuICAgICAgICAgICAgZGlmZjogcGFnZVNpemUsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICduZXh0JyxcbiAgICAgICAgICAgIHJlYXNvbjogJ2tleWJvYXJkJyxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGhhbmRsZU9wZW4oZXZlbnQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgLy8gUHJldmVudCBjdXJzb3IgbW92ZVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY2hhbmdlSGlnaGxpZ2h0ZWRJbmRleCh7XG4gICAgICAgICAgICBkaWZmOiAxLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnbmV4dCcsXG4gICAgICAgICAgICByZWFzb246ICdrZXlib2FyZCcsXG4gICAgICAgICAgICBldmVudDogZXZlbnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBoYW5kbGVPcGVuKGV2ZW50KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAvLyBQcmV2ZW50IGN1cnNvciBtb3ZlXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjaGFuZ2VIaWdobGlnaHRlZEluZGV4KHtcbiAgICAgICAgICAgIGRpZmY6IC0xLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAncHJldmlvdXMnLFxuICAgICAgICAgICAgcmVhc29uOiAna2V5Ym9hcmQnLFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaGFuZGxlT3BlbihldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICBoYW5kbGVGb2N1c1RhZyhldmVudCwgJ3ByZXZpb3VzJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgaGFuZGxlRm9jdXNUYWcoZXZlbnQsICduZXh0Jyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgIC8vIFdhaXQgdW50aWwgSU1FIGlzIHNldHRsZWQuXG4gICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAyMjkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChoaWdobGlnaHRlZEluZGV4UmVmLmN1cnJlbnQgIT09IC0xICYmIHBvcHVwT3Blbikge1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGZpbHRlcmVkT3B0aW9uc1toaWdobGlnaHRlZEluZGV4UmVmLmN1cnJlbnRdO1xuICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gZ2V0T3B0aW9uRGlzYWJsZWQgPyBnZXRPcHRpb25EaXNhYmxlZChvcHRpb24pIDogZmFsc2U7IC8vIFdlIGRvbid0IHdhbnQgdG8gdmFsaWRhdGUgdGhlIGZvcm0uXG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGVjdE5ld1ZhbHVlKGV2ZW50LCBvcHRpb24sICdzZWxlY3Qtb3B0aW9uJyk7IC8vIE1vdmUgdGhlIHNlbGVjdGlvbiB0byB0aGUgZW5kLlxuXG4gICAgICAgICAgICBpZiAoYXV0b0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQuc2V0U2VsZWN0aW9uUmFuZ2UoaW5wdXRSZWYuY3VycmVudC52YWx1ZS5sZW5ndGgsIGlucHV0UmVmLmN1cnJlbnQudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGZyZWVTb2xvICYmIGlucHV0VmFsdWUgIT09ICcnICYmIGlucHV0VmFsdWVJc1NlbGVjdGVkVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgLy8gQWxsb3cgcGVvcGxlIHRvIGFkZCBuZXcgdmFsdWVzIGJlZm9yZSB0aGV5IHN1Ym1pdCB0aGUgZm9ybS5cbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZWN0TmV3VmFsdWUoZXZlbnQsIGlucHV0VmFsdWUsICdjcmVhdGUtb3B0aW9uJywgJ2ZyZWVTb2xvJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICBpZiAocG9wdXBPcGVuKSB7XG4gICAgICAgICAgICAvLyBBdm9pZCBPcGVyYSB0byBleGl0IGZ1bGxzY3JlZW4gbW9kZS5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIEF2b2lkIHRoZSBNb2RhbCB0byBoYW5kbGUgdGhlIGV2ZW50LlxuXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGhhbmRsZUNsb3NlKGV2ZW50LCAnZXNjYXBlJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjbGVhck9uRXNjYXBlICYmIChpbnB1dFZhbHVlICE9PSAnJyB8fCBtdWx0aXBsZSAmJiB2YWx1ZS5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgLy8gQXZvaWQgT3BlcmEgdG8gZXhpdCBmdWxsc2NyZWVuIG1vZGUuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBBdm9pZCB0aGUgTW9kYWwgdG8gaGFuZGxlIHRoZSBldmVudC5cblxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBoYW5kbGVDbGVhcihldmVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICBpZiAobXVsdGlwbGUgJiYgaW5wdXRWYWx1ZSA9PT0gJycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZm9jdXNlZFRhZyA9PT0gLTEgPyB2YWx1ZS5sZW5ndGggLSAxIDogZm9jdXNlZFRhZztcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlLnNsaWNlKCk7XG4gICAgICAgICAgICBuZXdWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgaGFuZGxlVmFsdWUoZXZlbnQsIG5ld1ZhbHVlLCAncmVtb3ZlLW9wdGlvbicsIHtcbiAgICAgICAgICAgICAgb3B0aW9uOiB2YWx1ZVtpbmRleF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG5cbiAgICAgIGlmIChvdGhlci5vbktleURvd24pIHtcbiAgICAgICAgb3RoZXIub25LZXlEb3duKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gICAgc2V0Rm9jdXNlZCh0cnVlKTtcblxuICAgIGlmIChvcGVuT25Gb2N1cyAmJiAhaWdub3JlRm9jdXMuY3VycmVudCkge1xuICAgICAgaGFuZGxlT3BlbihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVCbHVyID0gZnVuY3Rpb24gaGFuZGxlQmx1cihldmVudCkge1xuICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgd2hlbiB1c2luZyB0aGUgc2Nyb2xsYmFyIHdpdGggSUUgMTFcbiAgICBpZiAobGlzdGJveFJlZi5jdXJyZW50ICE9PSBudWxsICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxpc3Rib3hSZWYuY3VycmVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgZmlyc3RGb2N1cy5jdXJyZW50ID0gdHJ1ZTtcbiAgICBpZ25vcmVGb2N1cy5jdXJyZW50ID0gZmFsc2U7XG5cbiAgICBpZiAoZGVidWcgJiYgaW5wdXRWYWx1ZSAhPT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYXV0b1NlbGVjdCAmJiBoaWdobGlnaHRlZEluZGV4UmVmLmN1cnJlbnQgIT09IC0xICYmIHBvcHVwT3Blbikge1xuICAgICAgc2VsZWN0TmV3VmFsdWUoZXZlbnQsIGZpbHRlcmVkT3B0aW9uc1toaWdobGlnaHRlZEluZGV4UmVmLmN1cnJlbnRdLCAnYmx1cicpO1xuICAgIH0gZWxzZSBpZiAoYXV0b1NlbGVjdCAmJiBmcmVlU29sbyAmJiBpbnB1dFZhbHVlICE9PSAnJykge1xuICAgICAgc2VsZWN0TmV3VmFsdWUoZXZlbnQsIGlucHV0VmFsdWUsICdibHVyJywgJ2ZyZWVTb2xvJyk7XG4gICAgfSBlbHNlIGlmIChjbGVhck9uQmx1cikge1xuICAgICAgcmVzZXRJbnB1dFZhbHVlKGV2ZW50LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xvc2UoZXZlbnQsICdibHVyJyk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUlucHV0Q2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAoaW5wdXRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHNldElucHV0VmFsdWUobmV3VmFsdWUpO1xuXG4gICAgICBpZiAob25JbnB1dENoYW5nZSkge1xuICAgICAgICBvbklucHV0Q2hhbmdlKGV2ZW50LCBuZXdWYWx1ZSwgJ2lucHV0Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbHVlID09PSAnJykge1xuICAgICAgaWYgKCFkaXNhYmxlQ2xlYXJhYmxlICYmICFtdWx0aXBsZSkge1xuICAgICAgICBoYW5kbGVWYWx1ZShldmVudCwgbnVsbCwgJ2NsZWFyJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZU9wZW4oZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlT3B0aW9uTW91c2VPdmVyID0gZnVuY3Rpb24gaGFuZGxlT3B0aW9uTW91c2VPdmVyKGV2ZW50KSB7XG4gICAgc2V0SGlnaGxpZ2h0ZWRJbmRleCh7XG4gICAgICBldmVudDogZXZlbnQsXG4gICAgICBpbmRleDogTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbi1pbmRleCcpKSxcbiAgICAgIHJlYXNvbjogJ21vdXNlJ1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBoYW5kbGVPcHRpb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gaGFuZGxlT3B0aW9uVG91Y2hTdGFydCgpIHtcbiAgICBpc1RvdWNoLmN1cnJlbnQgPSB0cnVlO1xuICB9O1xuXG4gIHZhciBoYW5kbGVPcHRpb25DbGljayA9IGZ1bmN0aW9uIGhhbmRsZU9wdGlvbkNsaWNrKGV2ZW50KSB7XG4gICAgdmFyIGluZGV4ID0gTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbi1pbmRleCcpKTtcbiAgICBzZWxlY3ROZXdWYWx1ZShldmVudCwgZmlsdGVyZWRPcHRpb25zW2luZGV4XSwgJ3NlbGVjdC1vcHRpb24nKTtcbiAgICBpc1RvdWNoLmN1cnJlbnQgPSBmYWxzZTtcbiAgfTtcblxuICB2YXIgaGFuZGxlVGFnRGVsZXRlID0gZnVuY3Rpb24gaGFuZGxlVGFnRGVsZXRlKGluZGV4KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIG5ld1ZhbHVlID0gdmFsdWUuc2xpY2UoKTtcbiAgICAgIG5ld1ZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBoYW5kbGVWYWx1ZShldmVudCwgbmV3VmFsdWUsICdyZW1vdmUtb3B0aW9uJywge1xuICAgICAgICBvcHRpb246IHZhbHVlW2luZGV4XVxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wdXBJbmRpY2F0b3IgPSBmdW5jdGlvbiBoYW5kbGVQb3B1cEluZGljYXRvcihldmVudCkge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBoYW5kbGVDbG9zZShldmVudCwgJ3RvZ2dsZUlucHV0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZU9wZW4oZXZlbnQpO1xuICAgIH1cbiAgfTsgLy8gUHJldmVudCBpbnB1dCBibHVyIHdoZW4gaW50ZXJhY3Rpbmcgd2l0aCB0aGUgY29tYm9ib3hcblxuXG4gIHZhciBoYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gaWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9OyAvLyBGb2N1cyB0aGUgaW5wdXQgd2hlbiBpbnRlcmFjdGluZyB3aXRoIHRoZSBjb21ib2JveFxuXG5cbiAgdmFyIGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuXG4gICAgaWYgKHNlbGVjdE9uRm9jdXMgJiYgZmlyc3RGb2N1cy5jdXJyZW50ICYmIGlucHV0UmVmLmN1cnJlbnQuc2VsZWN0aW9uRW5kIC0gaW5wdXRSZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydCA9PT0gMCkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5zZWxlY3QoKTtcbiAgICB9XG5cbiAgICBmaXJzdEZvY3VzLmN1cnJlbnQgPSBmYWxzZTtcbiAgfTtcblxuICB2YXIgaGFuZGxlSW5wdXRNb3VzZURvd24gPSBmdW5jdGlvbiBoYW5kbGVJbnB1dE1vdXNlRG93bihldmVudCkge1xuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJyB8fCAhb3Blbikge1xuICAgICAgaGFuZGxlUG9wdXBJbmRpY2F0b3IoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZGlydHkgPSBmcmVlU29sbyAmJiBpbnB1dFZhbHVlLmxlbmd0aCA+IDA7XG4gIGRpcnR5ID0gZGlydHkgfHwgKG11bHRpcGxlID8gdmFsdWUubGVuZ3RoID4gMCA6IHZhbHVlICE9PSBudWxsKTtcbiAgdmFyIGdyb3VwZWRPcHRpb25zID0gZmlsdGVyZWRPcHRpb25zO1xuXG4gIGlmIChncm91cEJ5KSB7XG4gICAgLy8gdXNlZCB0byBrZWVwIHRyYWNrIG9mIGtleSBhbmQgaW5kZXhlcyBpbiB0aGUgcmVzdWx0IGFycmF5XG4gICAgdmFyIGluZGV4QnkgPSBuZXcgTWFwKCk7XG4gICAgdmFyIHdhcm4gPSBmYWxzZTtcbiAgICBncm91cGVkT3B0aW9ucyA9IGZpbHRlcmVkT3B0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgb3B0aW9uLCBpbmRleCkge1xuICAgICAgdmFyIGdyb3VwID0gZ3JvdXBCeShvcHRpb24pO1xuXG4gICAgICBpZiAoYWNjLmxlbmd0aCA+IDAgJiYgYWNjW2FjYy5sZW5ndGggLSAxXS5ncm91cCA9PT0gZ3JvdXApIHtcbiAgICAgICAgYWNjW2FjYy5sZW5ndGggLSAxXS5vcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKGluZGV4QnkuZ2V0KGdyb3VwKSAmJiAhd2Fybikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTWF0ZXJpYWwtVUk6IFRoZSBvcHRpb25zIHByb3ZpZGVkIGNvbWJpbmVkIHdpdGggdGhlIGBncm91cEJ5YCBtZXRob2Qgb2YgXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiIHJldHVybnMgZHVwbGljYXRlZCBoZWFkZXJzLlwiKSwgJ1lvdSBjYW4gc29sdmUgdGhlIGlzc3VlIGJ5IHNvcnRpbmcgdGhlIG9wdGlvbnMgd2l0aCB0aGUgb3V0cHV0IG9mIGBncm91cEJ5YC4nKTtcbiAgICAgICAgICAgIHdhcm4gPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZGV4Qnkuc2V0KGdyb3VwLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBncm91cDogZ3JvdXAsXG4gICAgICAgICAgb3B0aW9uczogW29wdGlvbl1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRSb290UHJvcHM6IGZ1bmN0aW9uIGdldFJvb3RQcm9wcygpIHtcbiAgICAgIHZhciBvdGhlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICAnYXJpYS1vd25zJzogcG9wdXBPcGVuID8gXCJcIi5jb25jYXQoaWQsIFwiLXBvcHVwXCIpIDogbnVsbCxcbiAgICAgICAgcm9sZTogJ2NvbWJvYm94JyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBwb3B1cE9wZW5cbiAgICAgIH0sIG90aGVyLCB7XG4gICAgICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bihvdGhlciksXG4gICAgICAgIG9uTW91c2VEb3duOiBoYW5kbGVNb3VzZURvd24sXG4gICAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldElucHV0TGFiZWxQcm9wczogZnVuY3Rpb24gZ2V0SW5wdXRMYWJlbFByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IFwiXCIuY29uY2F0KGlkLCBcIi1sYWJlbFwiKSxcbiAgICAgICAgaHRtbEZvcjogaWRcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRJbnB1dFByb3BzOiBmdW5jdGlvbiBnZXRJbnB1dFByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgICAgICBvbkZvY3VzOiBoYW5kbGVGb2N1cyxcbiAgICAgICAgb25DaGFuZ2U6IGhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICBvbk1vdXNlRG93bjogaGFuZGxlSW5wdXRNb3VzZURvd24sXG4gICAgICAgIC8vIGlmIG9wZW4gdGhlbiB0aGlzIGlzIGhhbmRsZWQgaW1wZXJhdGl2ZWxleSBzbyBkb24ndCBsZXQgcmVhY3Qgb3ZlcnJpZGVcbiAgICAgICAgLy8gb25seSBoYXZlIGFuIG9waW5pb24gYWJvdXQgdGhpcyB3aGVuIGNsb3NlZFxuICAgICAgICAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogcG9wdXBPcGVuID8gJycgOiBudWxsLFxuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiBhdXRvQ29tcGxldGUgPyAnYm90aCcgOiAnbGlzdCcsXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogcG9wdXBPcGVuID8gXCJcIi5jb25jYXQoaWQsIFwiLXBvcHVwXCIpIDogbnVsbCxcbiAgICAgICAgLy8gRGlzYWJsZSBicm93c2VyJ3Mgc3VnZ2VzdGlvbiB0aGF0IG1pZ2h0IG92ZXJsYXAgd2l0aCB0aGUgcG9wdXAuXG4gICAgICAgIC8vIEhhbmRsZSBhdXRvY29tcGxldGUgYnV0IG5vdCBhdXRvZmlsbC5cbiAgICAgICAgYXV0b0NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgICAgcmVmOiBpbnB1dFJlZixcbiAgICAgICAgYXV0b0NhcGl0YWxpemU6ICdub25lJyxcbiAgICAgICAgc3BlbGxDaGVjazogJ2ZhbHNlJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIGdldENsZWFyUHJvcHM6IGZ1bmN0aW9uIGdldENsZWFyUHJvcHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YWJJbmRleDogLTEsXG4gICAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsZWFyXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0UG9wdXBJbmRpY2F0b3JQcm9wczogZnVuY3Rpb24gZ2V0UG9wdXBJbmRpY2F0b3JQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgb25DbGljazogaGFuZGxlUG9wdXBJbmRpY2F0b3JcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRUYWdQcm9wczogZnVuY3Rpb24gZ2V0VGFnUHJvcHMoX3JlZjQpIHtcbiAgICAgIHZhciBpbmRleCA9IF9yZWY0LmluZGV4O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgJ2RhdGEtdGFnLWluZGV4JzogaW5kZXgsXG4gICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgb25EZWxldGU6IGhhbmRsZVRhZ0RlbGV0ZShpbmRleClcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRMaXN0Ym94UHJvcHM6IGZ1bmN0aW9uIGdldExpc3Rib3hQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvbGU6ICdsaXN0Ym94JyxcbiAgICAgICAgaWQ6IFwiXCIuY29uY2F0KGlkLCBcIi1wb3B1cFwiKSxcbiAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IFwiXCIuY29uY2F0KGlkLCBcIi1sYWJlbFwiKSxcbiAgICAgICAgcmVmOiBoYW5kbGVMaXN0Ym94UmVmLFxuICAgICAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgICAvLyBQcmV2ZW50IGJsdXJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0T3B0aW9uUHJvcHM6IGZ1bmN0aW9uIGdldE9wdGlvblByb3BzKF9yZWY1KSB7XG4gICAgICB2YXIgaW5kZXggPSBfcmVmNS5pbmRleCxcbiAgICAgICAgICBvcHRpb24gPSBfcmVmNS5vcHRpb247XG4gICAgICB2YXIgc2VsZWN0ZWQgPSAobXVsdGlwbGUgPyB2YWx1ZSA6IFt2YWx1ZV0pLnNvbWUoZnVuY3Rpb24gKHZhbHVlMikge1xuICAgICAgICByZXR1cm4gdmFsdWUyICE9IG51bGwgJiYgZ2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCB2YWx1ZTIpO1xuICAgICAgfSk7XG4gICAgICB2YXIgZGlzYWJsZWQgPSBnZXRPcHRpb25EaXNhYmxlZCA/IGdldE9wdGlvbkRpc2FibGVkKG9wdGlvbikgOiBmYWxzZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICAgIGlkOiBcIlwiLmNvbmNhdChpZCwgXCItb3B0aW9uLVwiKS5jb25jYXQoaW5kZXgpLFxuICAgICAgICBvbk1vdXNlT3ZlcjogaGFuZGxlT3B0aW9uTW91c2VPdmVyLFxuICAgICAgICBvbkNsaWNrOiBoYW5kbGVPcHRpb25DbGljayxcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiBoYW5kbGVPcHRpb25Ub3VjaFN0YXJ0LFxuICAgICAgICAnZGF0YS1vcHRpb24taW5kZXgnOiBpbmRleCxcbiAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBzZWxlY3RlZFxuICAgICAgfTtcbiAgICB9LFxuICAgIGlkOiBpZCxcbiAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkaXJ0eTogZGlydHksXG4gICAgcG9wdXBPcGVuOiBwb3B1cE9wZW4sXG4gICAgZm9jdXNlZDogZm9jdXNlZCB8fCBmb2N1c2VkVGFnICE9PSAtMSxcbiAgICBhbmNob3JFbDogYW5jaG9yRWwsXG4gICAgc2V0QW5jaG9yRWw6IHNldEFuY2hvckVsLFxuICAgIGZvY3VzZWRUYWc6IGZvY3VzZWRUYWcsXG4gICAgZ3JvdXBlZE9wdGlvbnM6IGdyb3VwZWRPcHRpb25zXG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==