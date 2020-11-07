module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CharacterCard.js":
/*!*************************************!*\
  !*** ./components/CharacterCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StatusBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StatusBar */ "./components/StatusBar.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\CharacterCard.js";



const cardStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    backgroundColor: '#ebe8ce',
    borderRadius: '20px',
    boxShadow: '4px 2px 5px -3px #000000',
    color: 'black',
    display: 'grid',
    fontFamily: 'Roboto',
    fontSize: '0.8em',
    lineHeight: '1px',
    padding: '0.2em',
    textAlign: 'center'
  },
  img: {
    borderRadius: '50%',
    margin: 'auto',
    marginTop: '1em',
    width: '10em'
  },
  title: {
    fontSize: '1.2em',
    fontWeight: 'bold'
  }
});

function CharacterCard({
  character
}) {
  const styles = cardStyles();
  const {
    name,
    image,
    status,
    species,
    location
  } = character;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: image,
      alt: `${name} avatar`,
      className: styles.img
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: styles.title,
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StatusBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      status: status
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: species
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: location.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CharacterCard);

/***/ }),

/***/ "./components/CharactersContainer.js":
/*!*******************************************!*\
  !*** ./components/CharactersContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab */ "@material-ui/lab");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\CharactersContainer.js";




const containerStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(to bottom, #159957, #155799);',
    borderRadius: '20px',
    padding: '1.5em',
    ['@media (min-width:780px)']: {}
  }
});

function CharactersContainer(props) {
  const styles = containerStyles();
  console.log(props.pageCount);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      spacing: 2,
      alignContent: "center",
      justify: "center",
      className: styles.root,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["Pagination"], {
      count: props.pageCount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CharactersContainer);

/***/ }),

/***/ "./components/MainContainer.js":
/*!*************************************!*\
  !*** ./components/MainContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CharactersContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CharactersContainer */ "./components/CharactersContainer.js");

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\MainContainer.js";






function MainContainer(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Rick & Morty Wiki"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Rick & Morty Wiki"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\Navigation.js";


function Navigation() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: "About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\SearchBar.js";


const searchBarStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    margin: '2em 0em'
  },
  input: {
    width: 'auto',
    height: '1.5em',
    borderRadius: '10px',
    position: 'relative',
    margin: '1em auto',
    border: 'solid #159857 2px'
  }
});

function SearchBar({
  search
}) {
  const styles = searchBarStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: styles.input,
      type: "text",
      placeholder: "Find by name...",
      onChange: e => search(e.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./components/StatusBar.js":
/*!*********************************!*\
  !*** ./components/StatusBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\components\\StatusBar.js";


const StatusBarStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    color: 'white',
    width: '60%',
    margin: 'auto'
  }
});

function StatusBar({
  status
}) {
  const styles = StatusBarStyles();

  switch (status) {
    case 'Alive':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles.root,
        style: {
          backgroundColor: 'green'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this);

    case 'Dead':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles.root,
        style: {
          backgroundColor: 'red'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this);

    case 'unknown':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: styles.root,
        style: {
          backgroundColor: 'purple'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (StatusBar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.js");
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainContainer */ "./components/MainContainer.js");
/* harmony import */ var _components_CharacterCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CharacterCard */ "./components/CharacterCard.js");
/* harmony import */ var _components_CharactersContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CharactersContainer */ "./components/CharactersContainer.js");

var _jsxFileName = "C:\\Users\\Nayely Rodarte\\Desktop\\rick-and-morty-wiki\\pages\\index.js";








function Index(props) {
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('1');
  const {
    0: searchCharacter,
    1: setSearchCharacter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: characters,
    1: setCharacters
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.data.results);
  const filterCharacters = characters.filter(character => character.name.toLowerCase().includes(searchCharacter.toLowerCase()));
  const displayCharacters = filterCharacters.map(character => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 10,
    sm: 6,
    md: 5,
    lg: 3,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CharacterCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      character: character
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, character.id, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MainContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        search: setSearchCharacter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CharactersContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
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

Index.getInitialProps = async () => {
  let res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://rickandmortyapi.com/api/character/`);
  let data = res.data;
  return {
    data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/lab":
/*!***********************************!*\
  !*** external "@material-ui/lab" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGFyYWN0ZXJDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hhcmFjdGVyc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW5Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3RhdHVzQmFyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiY2FyZFN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiY29sb3IiLCJkaXNwbGF5IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJpbWciLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsInRpdGxlIiwiZm9udFdlaWdodCIsIkNoYXJhY3RlckNhcmQiLCJjaGFyYWN0ZXIiLCJzdHlsZXMiLCJuYW1lIiwiaW1hZ2UiLCJzdGF0dXMiLCJzcGVjaWVzIiwibG9jYXRpb24iLCJjb250YWluZXJTdHlsZXMiLCJmbGV4R3JvdyIsImJhY2tncm91bmQiLCJDaGFyYWN0ZXJzQ29udGFpbmVyIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicGFnZUNvdW50IiwiY2hpbGRyZW4iLCJNYWluQ29udGFpbmVyIiwiTmF2aWdhdGlvbiIsInNlYXJjaEJhclN0eWxlcyIsImlucHV0IiwiaGVpZ2h0IiwicG9zaXRpb24iLCJib3JkZXIiLCJTZWFyY2hCYXIiLCJzZWFyY2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJTdGF0dXNCYXJTdHlsZXMiLCJTdGF0dXNCYXIiLCJJbmRleCIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJ1c2VTdGF0ZSIsInNlYXJjaENoYXJhY3RlciIsInNldFNlYXJjaENoYXJhY3RlciIsImNoYXJhY3RlcnMiLCJzZXRDaGFyYWN0ZXJzIiwiZGF0YSIsInJlc3VsdHMiLCJmaWx0ZXJDaGFyYWN0ZXJzIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRpc3BsYXlDaGFyYWN0ZXJzIiwibWFwIiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJheGlvcyIsImdldCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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QUdKLGdCQUFnQixDQUFDSyxHQUFqQixDQUFzQjdDLFNBQUQsaUJBQzdDLHFFQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQTBCLE1BQUUsRUFBRSxDQUE5QjtBQUFpQyxNQUFFLEVBQUUsQ0FBckM7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFlLGVBQVMsRUFBRUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEtBQTZDQSxTQUFTLENBQUM4QyxFQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRHdCLENBQTFCO0FBTUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFBLDhCQUNFLHFFQUFDLDZEQUFEO0FBQVcsY0FBTSxFQUFFWDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyx1RUFBRDtBQUFBLGtCQUFxQlM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQUVEZCxLQUFLLENBQUNpQixlQUFOLEdBQXdCLFlBQVk7QUFDbEMsTUFBSUMsR0FBRyxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVyw0Q0FBWCxDQUFoQjtBQUNBLE1BQUlaLElBQUksR0FBR1UsR0FBRyxDQUFDVixJQUFmO0FBRUEsU0FBTztBQUFFQTtBQUFGLEdBQVA7QUFDRCxDQUxEOztBQU9lUixvRUFBZixFOzs7Ozs7Ozs7OztBQ3pDQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RhdHVzQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU3RhdHVzQmFyJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5cclxuY29uc3QgY2FyZFN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlYmU4Y2UnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICBib3hTaGFkb3c6ICc0cHggMnB4IDVweCAtM3B4ICMwMDAwMDAnLFxyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcclxuICAgIGZvbnRTaXplOiAnMC44ZW0nLFxyXG4gICAgbGluZUhlaWdodDogJzFweCcsXHJcbiAgICBwYWRkaW5nOiAnMC4yZW0nLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGltZzoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgbWFyZ2luVG9wOiAnMWVtJyxcclxuICAgIHdpZHRoOiAnMTBlbScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxLjJlbScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBDaGFyYWN0ZXJDYXJkKHsgY2hhcmFjdGVyIH0pIHtcclxuICBjb25zdCBzdHlsZXMgPSBjYXJkU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBuYW1lLCBpbWFnZSwgc3RhdHVzLCBzcGVjaWVzLCBsb2NhdGlvbiB9ID0gY2hhcmFjdGVyO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cclxuICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e2Ake25hbWV9IGF2YXRhcmB9IGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntuYW1lfTwvcD5cclxuICAgICAgPFN0YXR1c0JhciBzdGF0dXM9e3N0YXR1c30gLz5cclxuICAgICAgPHA+e3NwZWNpZXN9PC9wPlxyXG4gICAgICA8cD57bG9jYXRpb24ubmFtZX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiJztcclxuXHJcbmNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxNTk5NTcsICMxNTU3OTkpOycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgIHBhZGRpbmc6ICcxLjVlbScsXHJcbiAgICBbJ0BtZWRpYSAobWluLXdpZHRoOjc4MHB4KSddOiB7fSxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENoYXJhY3RlcnNDb250YWluZXIocHJvcHMpIHtcclxuICBjb25zdCBzdHlsZXMgPSBjb250YWluZXJTdHlsZXMoKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5wYWdlQ291bnQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgIHNwYWNpbmc9ezJ9XHJcbiAgICAgICAgYWxpZ25Db250ZW50PSdjZW50ZXInXHJcbiAgICAgICAganVzdGlmeT0nY2VudGVyJ1xyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9XHJcbiAgICAgID5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPFBhZ2luYXRpb24gY291bnQ9e3Byb3BzLnBhZ2VDb3VudH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcnNDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IENoYXJhY3RlcnNDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFyYWN0ZXJzQ29udGFpbmVyJztcclxuXHJcbmZ1bmN0aW9uIE1haW5Db250YWluZXIocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJpY2sgJiBNb3J0eSBXaWtpPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aDE+UmljayAmIE1vcnR5IFdpa2k8L2gxPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5Ib21lPC9saT5cclxuICAgICAgICA8bGk+QWJvdXQ8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5cclxuY29uc3Qgc2VhcmNoQmFyU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luOiAnMmVtIDBlbScsXHJcbiAgfSxcclxuICBpbnB1dDoge1xyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICAgIGhlaWdodDogJzEuNWVtJyxcclxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtYXJnaW46ICcxZW0gYXV0bycsXHJcbiAgICBib3JkZXI6ICdzb2xpZCAjMTU5ODU3IDJweCcsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hCYXIoeyBzZWFyY2ggfSkge1xyXG4gIGNvbnN0IHN0eWxlcyA9IHNlYXJjaEJhclN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICBwbGFjZWhvbGRlcj0nRmluZCBieSBuYW1lLi4uJ1xyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5cclxuY29uc3QgU3RhdHVzQmFyU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB3aWR0aDogJzYwJScsXHJcbiAgICBtYXJnaW46ICdhdXRvJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFN0YXR1c0Jhcih7IHN0YXR1cyB9KSB7XHJcbiAgY29uc3Qgc3R5bGVzID0gU3RhdHVzQmFyU3R5bGVzKCk7XHJcblxyXG4gIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICBjYXNlICdBbGl2ZSc6XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicgfX0+XHJcbiAgICAgICAgICA8cD57c3RhdHVzfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIGNhc2UgJ0RlYWQnOlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmVkJyB9fT5cclxuICAgICAgICAgIDxwPntzdGF0dXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgY2FzZSAndW5rbm93bic6XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb290fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdwdXJwbGUnIH19PlxyXG4gICAgICAgICAgPHA+e3N0YXR1c308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXNCYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcic7XHJcblxyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xyXG5pbXBvcnQgQ2hhcmFjdGVyQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJhY3RlckNhcmQnO1xyXG5pbXBvcnQgQ2hhcmFjdGVyQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyc0NvbnRhaW5lcic7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoJzEnKTtcclxuICBjb25zdCBbc2VhcmNoQ2hhcmFjdGVyLCBzZXRTZWFyY2hDaGFyYWN0ZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKHByb3BzLmRhdGEucmVzdWx0cyk7XHJcblxyXG4gIGNvbnN0IGZpbHRlckNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzLmZpbHRlcigoY2hhcmFjdGVyKSA9PlxyXG4gICAgY2hhcmFjdGVyLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hDaGFyYWN0ZXIudG9Mb3dlckNhc2UoKSlcclxuICApO1xyXG5cclxuICBjb25zdCBkaXNwbGF5Q2hhcmFjdGVycyA9IGZpbHRlckNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IChcclxuICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBzbT17Nn0gbWQ9ezV9IGxnPXszfSBrZXk9e2NoYXJhY3Rlci5pZH0+XHJcbiAgICAgIDxDaGFyYWN0ZXJDYXJkIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSAvPlxyXG4gICAgPC9HcmlkPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1haW5Db250YWluZXI+XHJcbiAgICAgICAgPFNlYXJjaEJhciBzZWFyY2g9e3NldFNlYXJjaENoYXJhY3Rlcn0gLz5cclxuICAgICAgICA8Q2hhcmFjdGVyQ29udGFpbmVyPntkaXNwbGF5Q2hhcmFjdGVyc308L0NoYXJhY3RlckNvbnRhaW5lcj5cclxuICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL2ApO1xyXG4gIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblxyXG4gIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9