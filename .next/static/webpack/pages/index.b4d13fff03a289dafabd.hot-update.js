webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainContainer.js":
/*!*************************************!*\
  !*** ./components/MainContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\MainContainer.js";





function MainContainer(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Rick & Morty Wiki"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
      src: "img/rick-and-morty-logo.png",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = MainContainer;
/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

var _c;

$RefreshReg$(_c, "MainContainer");

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

/***/ "./components/Navigation.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
var loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
var VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
var imageData = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]};
var configDeviceSizes = imageData.deviceSizes,
    configImageSizes = imageData.imageSizes,
    configLoader = imageData.loader,
    configPath = imageData.path,
    configDomains = imageData.domains; // sort smallest to largest

var allSizes = [].concat(_toConsumableArray(configDeviceSizes), _toConsumableArray(configImageSizes));
configDeviceSizes.sort(function (a, b) {
  return a - b;
});
allSizes.sort(function (a, b) {
  return a - b;
});
var cachedObserver;

function getObserver() {
  var IntersectionObserver = true ? window.IntersectionObserver : undefined; // Return shared instance of IntersectionObserver if already created

  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var lazyImage = entry.target;
        unLazifyImage(lazyImage);
        cachedObserver.unobserve(lazyImage);
      }
    });
  }, {
    rootMargin: '200px'
  });
}

function unLazifyImage(lazyImage) {
  if (lazyImage.dataset.src) {
    lazyImage.src = lazyImage.dataset.src;
  }

  if (lazyImage.dataset.srcset) {
    lazyImage.srcset = lazyImage.dataset.srcset;
  }

  lazyImage.style.visibility = 'visible';
  lazyImage.classList.remove('__lazy');
}

function getSizes(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      sizes: configDeviceSizes,
      kind: 'w'
    };
  }

  var sizes = _toConsumableArray(new Set([width, width * 2, width * 3].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    sizes: sizes,
    kind: 'x'
  };
}

function computeSrc(src, unoptimized, layout, width, quality) {
  if (unoptimized) {
    return src;
  }

  var _getSizes = getSizes(width, layout),
      sizes = _getSizes.sizes;

  var largest = sizes[sizes.length - 1];
  return callLoader({
    src: src,
    width: largest,
    quality: quality
  });
}

function callLoader(loaderProps) {
  var load = loaders.get(configLoader) || defaultLoader;
  return load((0, _extends2["default"])({
    root: configPath
  }, loaderProps));
}

function generateSrcSet(_ref2) {
  var src = _ref2.src,
      unoptimized = _ref2.unoptimized,
      layout = _ref2.layout,
      width = _ref2.width,
      quality = _ref2.quality;

  // At each breakpoint, generate an image url using the loader, such as:
  // ' www.example.com/foo.jpg?w=480 480w, '
  if (unoptimized) {
    return undefined;
  }

  var _getSizes2 = getSizes(width, layout),
      sizes = _getSizes2.sizes,
      kind = _getSizes2.kind;

  return sizes.map(function (size, i) {
    return "".concat(callLoader({
      src: src,
      width: size,
      quality: quality
    }), " ").concat(kind === 'w' ? size : i + 1).concat(kind);
  }).join(', ');
}

function generatePreload(_ref3) {
  var src = _ref3.src,
      _ref3$unoptimized = _ref3.unoptimized,
      unoptimized = _ref3$unoptimized === void 0 ? false : _ref3$unoptimized,
      layout = _ref3.layout,
      width = _ref3.width,
      sizes = _ref3.sizes,
      quality = _ref3.quality;
  // This function generates an image preload that makes use of the "imagesrcset" and "imagesizes"
  // attributes for preloading responsive images. They're still experimental, but fully backward
  // compatible, as the link tag includes all necessary attributes, even if the final two are ignored.
  // See: https://web.dev/preload-responsive-images/
  return /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", {
    rel: "preload",
    as: "image",
    href: computeSrc(src, unoptimized, layout, width, quality) // @ts-ignore: imagesrcset and imagesizes not yet in the link element type
    ,
    imagesrcset: generateSrcSet({
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: width,
      quality: quality
    }),
    imagesizes: sizes
  }));
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  var src = _ref.src,
      sizes = _ref.sizes,
      _ref$unoptimized = _ref.unoptimized,
      unoptimized = _ref$unoptimized === void 0 ? false : _ref$unoptimized,
      _ref$priority = _ref.priority,
      priority = _ref$priority === void 0 ? false : _ref$priority,
      loading = _ref.loading,
      className = _ref.className,
      quality = _ref.quality,
      width = _ref.width,
      height = _ref.height,
      all = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height"]);
  var thisEl = (0, _react.useRef)(null);
  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';
  var unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error("Image is missing required \"src\" property. Make sure you pass \"src\" in props to the `next/image` component. Received: ".concat(JSON.stringify({
        width: width,
        height: height,
        quality: quality
      })));
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"layout\" property. Provided \"").concat(layout, "\" should be one of ").concat(VALID_LAYOUT_VALUES.map(String).join(','), "."));
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"loading\" property. Provided \"").concat(loading, "\" should be one of ").concat(VALID_LOADING_VALUES.map(String).join(','), "."));
    }

    if (priority && loading === 'lazy') {
      throw new Error("Image with src \"".concat(src, "\" has both \"priority\" and \"loading='lazy'\" properties. Only one should be used."));
    }

    if (unsized) {
      throw new Error("Image with src \"".concat(src, "\" has deprecated \"unsized\" property, which was removed in favor of the \"layout='fill'\" property"));
    }
  }

  var lazy = loading === 'lazy';

  if (!priority && typeof loading === 'undefined') {
    lazy = true;
  }

  if ( true && !window.IntersectionObserver) {
    // Rendering client side on browser without intersection observer
    lazy = false;
  }

  (0, _react.useEffect)(function () {
    var target = thisEl.current;

    if (target && lazy) {
      var observer = getObserver();

      if (observer) {
        observer.observe(target);
        return function () {
          observer.unobserve(target);
        };
      } else {
        //browsers without intersection observer
        unLazifyImage(target);
      }
    }
  }, [thisEl, lazy]);
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);
  var wrapperStyle;
  var sizerStyle;
  var sizerSvg;
  var imgStyle = {
    visibility: lazy ? 'hidden' : 'visible',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%'
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop: paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = "<svg width=\"".concat(widthInt, "\" height=\"").concat(heightInt, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"/>");
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error("Image with src \"".concat(src, "\" must use \"width\" and \"height\" properties or \"layout='fill'\" property."));
    }
  } // Generate attribute values


  var imgSrc = computeSrc(src, unoptimized, layout, widthInt, qualityInt);
  var imgSrcSet = generateSrcSet({
    src: src,
    unoptimized: unoptimized,
    layout: layout,
    width: widthInt,
    quality: qualityInt
  });
  var imgAttributes;

  if (!lazy) {
    imgAttributes = {
      src: imgSrc
    };

    if (imgSrcSet) {
      imgAttributes.srcSet = imgSrcSet;
    }
  } else {
    imgAttributes = {
      'data-src': imgSrc
    };

    if (imgSrcSet) {
      imgAttributes['data-srcset'] = imgSrcSet;
    }

    className = className ? className + ' __lazy' : '__lazy';
  } // No need to add preloads on the client side--by the time the application is hydrated,
  // it's too late for preloads


  var shouldPreload = priority && false;

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle
  }, shouldPreload ? generatePreload({
    src: src,
    layout: layout,
    unoptimized: unoptimized,
    width: widthInt,
    sizes: sizes,
    quality: qualityInt
  }) : null, sizerStyle ? /*#__PURE__*/_react["default"].createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: "data:image/svg+xml;charset=utf-8,".concat(sizerSvg)
  }) : null) : null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    sizes: sizes,
    ref: thisEl,
    style: imgStyle
  })));
} //BUILT IN LOADERS


_c = Image;

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader(_ref4) {
  var root = _ref4.root,
      src = _ref4.src,
      width = _ref4.width,
      quality = _ref4.quality;
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  var params = ['auto=format', 'fit=max', 'w=' + width];
  var paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return "".concat(root).concat(normalizeSrc(src)).concat(paramsString);
}

function akamaiLoader(_ref5) {
  var root = _ref5.root,
      src = _ref5.src,
      width = _ref5.width;
  return "".concat(root).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref6) {
  var root = _ref6.root,
      src = _ref6.src,
      width = _ref6.width,
      quality = _ref6.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width];
  var paramsString = '';

  if (quality) {
    params.push('q_' + quality);
  }

  if (params.length) {
    paramsString = params.join(',') + '/';
  }

  return "".concat(root).concat(paramsString).concat(normalizeSrc(src));
}

function defaultLoader(_ref7) {
  var root = _ref7.root,
      src = _ref7.src,
      width = _ref7.width,
      quality = _ref7.quality;

  if (true) {
    var missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error("Next Image Optimization requires ".concat(missingValues.join(', '), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
        src: src,
        width: width,
        quality: quality
      })));
    }

    if (src && !src.startsWith('/') && configDomains) {
      var parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error("Failed to parse \"".concat(src, "\" in \"next/image\", if using relative image it must start with a leading slash \"/\" or be an absolute URL (http:// or https://)"));
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error("Invalid src prop (".concat(src, ") on `next/image`, hostname \"").concat(parsedSrc.hostname, "\" is not configured under images in your `next.config.js`\n") + "See more info: https://err.sh/nextjs/next-image-unconfigured-host");
      }
    }
  }

  return "".concat(root, "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

var _c;

$RefreshReg$(_c, "Image");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluQ29udGFpbmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiXSwibmFtZXMiOlsiTWFpbkNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaW1hZ2VEYXRhIiwicHJvY2VzcyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwiYWxsU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImEiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwibGF6eUltYWdlIiwidW5MYXppZnlJbWFnZSIsInJvb3RNYXJnaW4iLCJsYXlvdXQiLCJzaXplcyIsImtpbmQiLCJ3aWR0aCIsInciLCJwIiwiZ2V0U2l6ZXMiLCJsYXJnZXN0IiwiY2FsbExvYWRlciIsInNyYyIsInF1YWxpdHkiLCJsb2FkIiwicm9vdCIsImkiLCJ1bm9wdGltaXplZCIsImNvbXB1dGVTcmMiLCJnZW5lcmF0ZVNyY1NldCIsInBhcnNlSW50IiwicHJpb3JpdHkiLCJhbGwiLCJ0aGlzRWwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwiaGVpZ2h0IiwibG9hZGluZyIsImxhenkiLCJ0YXJnZXQiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3JjIiwiaW1nU3JjU2V0IiwiaW1nQXR0cmlidXRlcyIsImNsYXNzTmFtZSIsInNob3VsZFByZWxvYWQiLCJnZW5lcmF0ZVByZWxvYWQiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uc29sZSIsImNvbmZpZ0RvbWFpbnMiLCJlbmNvZGVVUklDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUM1QixzQkFDRSxxRUFBQywyREFBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQyxpREFBRDtBQUFPLFNBQUcsRUFBQyw2QkFBWDtBQUF5QyxTQUFHLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBS0dBLEtBQUssQ0FBQ0MsUUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztLQVZRRixhO0FBWU1BLDRFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFJZixHQUFHLElBQUksQ0FBQ0EsR0FBRyxDQUFIQSxXQUFSQSxHQUFRQSxDQUFSQSxJQUFKLGVBQWtEO0FBQ2hEOztBQUNBLFVBQUk7QUFDRjJELGlCQUFTLEdBQUcsUUFBWkEsR0FBWSxDQUFaQTtBQUNBLE9BRkYsQ0FFRSxZQUFZO0FBQ1pDLGVBQU8sQ0FBUEE7QUFDQSxjQUFNLHNDQUFOLEdBQU0sd0lBQU47QUFLRjs7QUFBQSxVQUFJLENBQUNDLGFBQWEsQ0FBYkEsU0FBdUJGLFNBQVMsQ0FBckMsUUFBS0UsQ0FBTCxFQUFpRDtBQUMvQyxjQUFNLFVBQ0gsNEJBQW9CN0QsR0FBcEIsMkNBQXlEMkQsU0FBUyxDQURyRSxRQUNHLHVJQURHLENBQU47QUFLSDtBQUNGO0FBRUQ7O0FBQUEsbUJBQVV4RCxJQUFWLGtCQUFzQjJELGtCQUFrQixLQUF4QyxnQkFBbURwRSxLQUFuRCxnQkFBOERPLE9BQU8sSUFBckU7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbmxCRCxpQkFBaUIsbUJBQU8sQ0FBQyxxRUFBcUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjRkMTNmZmYwM2EyODlkYWZhYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuZnVuY3Rpb24gTWFpbkNvbnRhaW5lcihwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmljayAmIE1vcnR5IFdpa2k8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxJbWFnZSBzcmM9J2ltZy9yaWNrLWFuZC1tb3J0eS1sb2dvLnBuZycgYWx0PScnIC8+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXI7XHJcbiIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPExvYWRlcktleSwgKHByb3BzOiBMb2FkZXJQcm9wcykgPT4gc3RyaW5nPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxudHlwZSBMb2FkZXJLZXkgPSAnaW1naXgnIHwgJ2Nsb3VkaW5hcnknIHwgJ2FrYW1haScgfCAnZGVmYXVsdCdcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltYWdlRGF0YSA9IHtcbiAgZGV2aWNlU2l6ZXM6IG51bWJlcltdXG4gIGltYWdlU2l6ZXM6IG51bWJlcltdXG4gIGxvYWRlcjogTG9hZGVyS2V5XG4gIHBhdGg6IHN0cmluZ1xuICBkb21haW5zPzogc3RyaW5nW11cbn1cblxudHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCBpbWFnZURhdGE6IEltYWdlRGF0YSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueVxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9IGltYWdlRGF0YVxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICBjb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICBsZXQgbGF6eUltYWdlID0gZW50cnkudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnRcbiAgICAgICAgICB1bkxhemlmeUltYWdlKGxhenlJbWFnZSlcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUobGF6eUltYWdlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuZnVuY3Rpb24gdW5MYXppZnlJbWFnZShsYXp5SW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpOiB2b2lkIHtcbiAgaWYgKGxhenlJbWFnZS5kYXRhc2V0LnNyYykge1xuICAgIGxhenlJbWFnZS5zcmMgPSBsYXp5SW1hZ2UuZGF0YXNldC5zcmNcbiAgfVxuICBpZiAobGF6eUltYWdlLmRhdGFzZXQuc3Jjc2V0KSB7XG4gICAgbGF6eUltYWdlLnNyY3NldCA9IGxhenlJbWFnZS5kYXRhc2V0LnNyY3NldFxuICB9XG4gIGxhenlJbWFnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gIGxhenlJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdfX2xhenknKVxufVxuXG5mdW5jdGlvbiBnZXRTaXplcyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuKTogeyBzaXplczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHNpemVzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHNpemVzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiwgd2lkdGggKiAzXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyBzaXplcywga2luZDogJ3gnIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZVNyYyhcbiAgc3JjOiBzdHJpbmcsXG4gIHVub3B0aW1pemVkOiBib29sZWFuLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICB3aWR0aD86IG51bWJlcixcbiAgcXVhbGl0eT86IG51bWJlclxuKTogc3RyaW5nIHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHNyY1xuICB9XG4gIGNvbnN0IHsgc2l6ZXMgfSA9IGdldFNpemVzKHdpZHRoLCBsYXlvdXQpXG4gIGNvbnN0IGxhcmdlc3QgPSBzaXplc1tzaXplcy5sZW5ndGggLSAxXVxuICByZXR1cm4gY2FsbExvYWRlcih7IHNyYywgd2lkdGg6IGxhcmdlc3QsIHF1YWxpdHkgfSlcbn1cblxudHlwZSBDYWxsTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG5mdW5jdGlvbiBjYWxsTG9hZGVyKGxvYWRlclByb3BzOiBDYWxsTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcikgfHwgZGVmYXVsdExvYWRlclxuICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG59XG5cbnR5cGUgU3JjU2V0RGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3JjU2V0KHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IFNyY1NldERhdGEpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAvLyBBdCBlYWNoIGJyZWFrcG9pbnQsIGdlbmVyYXRlIGFuIGltYWdlIHVybCB1c2luZyB0aGUgbG9hZGVyLCBzdWNoIGFzOlxuICAvLyAnIHd3dy5leGFtcGxlLmNvbS9mb28uanBnP3c9NDgwIDQ4MHcsICdcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgY29uc3QgeyBzaXplcywga2luZCB9ID0gZ2V0U2l6ZXMod2lkdGgsIGxheW91dClcbiAgcmV0dXJuIHNpemVzXG4gICAgLm1hcChcbiAgICAgIChzaXplLCBpKSA9PlxuICAgICAgICBgJHtjYWxsTG9hZGVyKHsgc3JjLCB3aWR0aDogc2l6ZSwgcXVhbGl0eSB9KX0gJHtcbiAgICAgICAgICBraW5kID09PSAndycgPyBzaXplIDogaSArIDFcbiAgICAgICAgfSR7a2luZH1gXG4gICAgKVxuICAgIC5qb2luKCcsICcpXG59XG5cbnR5cGUgUHJlbG9hZERhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZFxuICBzaXplcz86IHN0cmluZ1xuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJlbG9hZCh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgc2l6ZXMsXG4gIHF1YWxpdHksXG59OiBQcmVsb2FkRGF0YSk6IFJlYWN0RWxlbWVudCB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gZ2VuZXJhdGVzIGFuIGltYWdlIHByZWxvYWQgdGhhdCBtYWtlcyB1c2Ugb2YgdGhlIFwiaW1hZ2VzcmNzZXRcIiBhbmQgXCJpbWFnZXNpemVzXCJcbiAgLy8gYXR0cmlidXRlcyBmb3IgcHJlbG9hZGluZyByZXNwb25zaXZlIGltYWdlcy4gVGhleSdyZSBzdGlsbCBleHBlcmltZW50YWwsIGJ1dCBmdWxseSBiYWNrd2FyZFxuICAvLyBjb21wYXRpYmxlLCBhcyB0aGUgbGluayB0YWcgaW5jbHVkZXMgYWxsIG5lY2Vzc2FyeSBhdHRyaWJ1dGVzLCBldmVuIGlmIHRoZSBmaW5hbCB0d28gYXJlIGlnbm9yZWQuXG4gIC8vIFNlZTogaHR0cHM6Ly93ZWIuZGV2L3ByZWxvYWQtcmVzcG9uc2l2ZS1pbWFnZXMvXG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgIGhyZWY9e2NvbXB1dGVTcmMoc3JjLCB1bm9wdGltaXplZCwgbGF5b3V0LCB3aWR0aCwgcXVhbGl0eSl9XG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGFuZCBpbWFnZXNpemVzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgIGltYWdlc3Jjc2V0PXtnZW5lcmF0ZVNyY1NldCh7XG4gICAgICAgICAgc3JjLFxuICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICB9KX1cbiAgICAgICAgaW1hZ2VzaXplcz17c2l6ZXN9XG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgKVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGNvbnN0IHRoaXNFbCA9IHVzZVJlZjxIVE1MSW1hZ2VFbGVtZW50PihudWxsKVxuXG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgbGF6eSA9IGxvYWRpbmcgPT09ICdsYXp5J1xuICBpZiAoIXByaW9yaXR5ICYmIHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIGxhenkgPSB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIC8vIFJlbmRlcmluZyBjbGllbnQgc2lkZSBvbiBicm93c2VyIHdpdGhvdXQgaW50ZXJzZWN0aW9uIG9ic2VydmVyXG4gICAgbGF6eSA9IGZhbHNlXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNFbC5jdXJyZW50XG5cbiAgICBpZiAodGFyZ2V0ICYmIGxhenkpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuXG4gICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUodGFyZ2V0KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2Jyb3dzZXJzIHdpdGhvdXQgaW50ZXJzZWN0aW9uIG9ic2VydmVyXG4gICAgICAgIHVuTGF6aWZ5SW1hZ2UodGFyZ2V0KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3RoaXNFbCwgbGF6eV0pXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXSA9IHtcbiAgICB2aXNpYmlsaXR5OiBsYXp5ID8gJ2hpZGRlbicgOiAndmlzaWJsZScsXG5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdlbmVyYXRlIGF0dHJpYnV0ZSB2YWx1ZXNcbiAgY29uc3QgaW1nU3JjID0gY29tcHV0ZVNyYyhzcmMsIHVub3B0aW1pemVkLCBsYXlvdXQsIHdpZHRoSW50LCBxdWFsaXR5SW50KVxuICBjb25zdCBpbWdTcmNTZXQgPSBnZW5lcmF0ZVNyY1NldCh7XG4gICAgc3JjLFxuICAgIHVub3B0aW1pemVkLFxuICAgIGxheW91dCxcbiAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgfSlcblxuICBsZXQgaW1nQXR0cmlidXRlczpcbiAgICB8IHtcbiAgICAgICAgc3JjOiBzdHJpbmdcbiAgICAgICAgc3JjU2V0Pzogc3RyaW5nXG4gICAgICB9XG4gICAgfCB7XG4gICAgICAgICdkYXRhLXNyYyc6IHN0cmluZ1xuICAgICAgICAnZGF0YS1zcmNzZXQnPzogc3RyaW5nXG4gICAgICB9XG4gIGlmICghbGF6eSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICBzcmM6IGltZ1NyYyxcbiAgICB9XG4gICAgaWYgKGltZ1NyY1NldCkge1xuICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgPSBpbWdTcmNTZXRcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICdkYXRhLXNyYyc6IGltZ1NyYyxcbiAgICB9XG4gICAgaWYgKGltZ1NyY1NldCkge1xuICAgICAgaW1nQXR0cmlidXRlc1snZGF0YS1zcmNzZXQnXSA9IGltZ1NyY1NldFxuICAgIH1cbiAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgPyBjbGFzc05hbWUgKyAnIF9fbGF6eScgOiAnX19sYXp5J1xuICB9XG5cbiAgLy8gTm8gbmVlZCB0byBhZGQgcHJlbG9hZHMgb24gdGhlIGNsaWVudCBzaWRlLS1ieSB0aGUgdGltZSB0aGUgYXBwbGljYXRpb24gaXMgaHlkcmF0ZWQsXG4gIC8vIGl0J3MgdG9vIGxhdGUgZm9yIHByZWxvYWRzXG4gIGNvbnN0IHNob3VsZFByZWxvYWQgPSBwcmlvcml0eSAmJiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3Nob3VsZFByZWxvYWRcbiAgICAgICAgPyBnZW5lcmF0ZVByZWxvYWQoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBudWxsfVxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2Jsb2NrJyB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCR7c2l6ZXJTdmd9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBzaXplcz17c2l6ZXN9XG4gICAgICAgIHJlZj17dGhpc0VsfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG50eXBlIExvYWRlclByb3BzID0gQ2FsbExvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCwgcXVhbGl0eSB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCwgcXVhbGl0eSB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQvdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3FfJyArIHF1YWxpdHkpXG4gIH1cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoLCBxdWFsaXR5IH06IExvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMgJiYgIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2UgXCIke3NyY31cIiBpbiBcIm5leHQvaW1hZ2VcIiwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dGpzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiJdLCJzb3VyY2VSb290IjoiIn0=