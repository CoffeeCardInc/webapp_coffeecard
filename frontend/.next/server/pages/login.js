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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Header.module.css */ "./styles/Header.module.css");
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = ({
  title
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, title)));
};

Header.defaultProps = {
  title: 'Welcome to CoffeeCard'
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/auth.js":
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/*! exports provided: registerUser, login, logout, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* /lib/auth.js */
// this is where registerUser and login components are defined


 // client-side cookie


const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; //register a new user

const registerUser = (username, email, password) => {
  //prevent function from being ran on the server
  if (true) {
    return;
  }

  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${API_URL}/auth/local/register`, {
      username,
      email,
      password
    }).then(res => {
      //set JWT token response from Strapi for server validation
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("token", res.data.jwt); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
    }).catch(error => {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
const login = (identifier, password) => {
  //prevent function from being ran on the server
  if (true) {
    return;
  }

  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${API_URL}/auth/local/`, {
      identifier,
      password
    }).then(res => {
      //set token response from Strapi for server validation
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("token", res.data.jwt); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
    }).catch(error => {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
const logout = () => {
  //remove token and user cookie
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("token");
  delete window.__user; // sync logout between multiple windows

  window.localStorage.setItem("logout", Date.now()); //redirect to the home page

  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
}; //Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement

const withAuthSync = Component => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === "logout") {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener("storage", syncLogout);
      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);
    return __jsx(Component, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 12
      }
    }));
  };

  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
};

/***/ }),

/***/ "./components/context.js":
/*!*******************************!*\
  !*** ./components/context.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* /context/AppContext.js */
 // create auth context with default value
// set backup default for isAuthenticated if none is provided in Provider

const AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  isAuthenticated: true,
  cart: {
    items: [],
    total: 0
  },
  addItem: () => {},
  removeItem: () => {},
  user: false,
  // default logged out
  setUser: () => {}
});
/* harmony default export */ __webpack_exports__["default"] = (AppContext);

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/auth */ "./components/auth.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-social-login-buttons */ "react-social-login-buttons");
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Register.module.css */ "./styles/Register.module.css");
/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/pages/login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* /pages/login.js */











function Login(props) {
  const {
    0: data,
    1: updateData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    identifier: '',
    password: ''
  }); //identifier is the username or email

  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const appContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (appContext.isAuthenticated) {
      router.push('/'); // redirect if you're already logged in
    }
  }, []);

  function onChange(event) {
    updateData(_objectSpread(_objectSpread({}, data), {}, {
      [event.target.name]: event.target.value
    }));
  }

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "12",
    md: {
      size: 6,
      offset: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3719387492" + " " + 'paper',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: 'Welcome back',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "jsx-3719387492" + " " + 'wrapper',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, Object.entries(error).length !== 0 && error.constructor === Object && error.message.map(error => {
    return __jsx("div", {
      key: error.messages[0].id,
      style: {
        marginBottom: 10
      },
      className: "jsx-3719387492",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx("small", {
      style: {
        color: 'red'
      },
      className: "jsx-3719387492",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 23
      }
    }, error.messages[0].message));
  }), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginButton"], {
    onClick: () => alert('Hello'),
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginButton"], {
    onClick: () => alert('Hello'),
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_6__["AppleLoginButton"], {
    onClick: () => alert('Hello') // style={{ color: 'white', background: 'black' }}
    ,
    className: _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.icons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-3719387492" + " " + (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.or || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "or"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    disabled: loading,
    className: "jsx-3719387492",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, "Email:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    onChange: event => onChange(event),
    name: "identifier",
    style: {
      height: 50,
      fontSize: '1.2em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    style: {
      marginBottom: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, "Password:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    onChange: event => onChange(event),
    type: "password",
    name: "password",
    style: {
      height: 50,
      fontSize: '1.2em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-3719387492" + " " + 'row justify-content-center mb-3 ',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "",
    className: "jsx-3719387492",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 23
    }
  }, __jsx("small", {
    style: {
      color: '#40312e'
    },
    className: "jsx-3719387492",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, "Forgot Password?"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      backgroundColor: '#40312e'
    },
    className: "col-sm-12",
    onClick: () => {
      setLoading(true);
      Object(_components_auth__WEBPACK_IMPORTED_MODULE_4__["login"])(data.identifier, data.password).then(res => {
        setLoading(false); // set authed User in global context to update header/app state

        appContext.setUser(res.data.user);
      }).catch(error => {
        //setError(error.response.data);
        setLoading(false);
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, loading ? 'Loading... ' : 'Submit')))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3719387492",
    __self: this
  }, ".paper.jsx-3719387492{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);border-radius:6px;margin-top:70px;}.notification.jsx-3719387492{color:#ab003c;}.header.jsx-3719387492{width:100%;height:120px;background-color:#2196f3;margin-bottom:30px;border-radius-top:6px;}.wrapper.jsx-3719387492{padding:10px 30px 20px 30px !important;}a.jsx-3719387492{color:blue !important;}img.jsx-3719387492{margin:15px 30px 10px 50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9yL1Byb2plY3RzL0NvZmZlZUNhcmQvd2ViYXBwX2NvZmZlZWNhcmQvZnJvbnRlbmQvcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUlTLEFBR3dDLEFBUWIsQUFHSCxBQU80QixBQUdqQixBQUdLLFdBWmQsR0FIZixRQWFBLEVBVDJCLEdBVmEsQUFzQnhDLFlBTkEsVUFMcUIsbUJBQ0csc0JBQ3hCLGlEQVpvQixrQkFDRixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvYW5kb3IvUHJvamVjdHMvQ29mZmVlQ2FyZC93ZWJhcHBfY29mZmVlY2FyZC9mcm9udGVuZC9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9wYWdlcy9sb2dpbi5qcyAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxuICBCdXR0b24sXG4gIEZvcm0sXG4gIEZvcm1Hcm91cCxcbiAgTGFiZWwsXG4gIElucHV0LFxufSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHQnXG5pbXBvcnQgeyBGYWNlYm9va0xvZ2luQnV0dG9uIH0gZnJvbSAncmVhY3Qtc29jaWFsLWxvZ2luLWJ1dHRvbnMnXG5pbXBvcnQgeyBHb29nbGVMb2dpbkJ1dHRvbiB9IGZyb20gJ3JlYWN0LXNvY2lhbC1sb2dpbi1idXR0b25zJ1xuaW1wb3J0IHsgQXBwbGVMb2dpbkJ1dHRvbiB9IGZyb20gJ3JlYWN0LXNvY2lhbC1sb2dpbi1idXR0b25zJ1xuaW1wb3J0IHJlZ2lzdGVyU3R5bGUgZnJvbSAnLi4vc3R5bGVzL1JlZ2lzdGVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuXG5mdW5jdGlvbiBMb2dpbihwcm9wcykge1xuICBjb25zdCBbZGF0YSwgdXBkYXRlRGF0YV0gPSB1c2VTdGF0ZSh7IGlkZW50aWZpZXI6ICcnLCBwYXNzd29yZDogJycgfSkgLy9pZGVudGlmaWVyIGlzIHRoZSB1c2VybmFtZSBvciBlbWFpbFxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhcHBDb250ZXh0LmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgcm91dGVyLnB1c2goJy8nKSAvLyByZWRpcmVjdCBpZiB5b3UncmUgYWxyZWFkeSBsb2dnZWQgaW5cbiAgICB9XG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdXBkYXRlRGF0YSh7IC4uLmRhdGEsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzbT0nMTInIG1kPXt7IHNpemU6IDYsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFwZXInPlxuICAgICAgICAgICAgPEhlYWRlciB0aXRsZT17J1dlbGNvbWUgYmFjayd9IC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZXJyb3IpLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Vycm9yLm1lc3NhZ2VzWzBdLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IubWVzc2FnZXNbMF0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPEZhY2Vib29rTG9naW5CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydCgnSGVsbG8nKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21iLTMnXG4gICAgICAgICAgICAgID48L0ZhY2Vib29rTG9naW5CdXR0b24+XG4gICAgICAgICAgICAgIDxHb29nbGVMb2dpbkJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdIZWxsbycpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWItMydcbiAgICAgICAgICAgICAgPjwvR29vZ2xlTG9naW5CdXR0b24+XG4gICAgICAgICAgICAgIDxBcHBsZUxvZ2luQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoJ0hlbGxvJyl9XG4gICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGJhY2tncm91bmQ6ICdibGFjaycgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JlZ2lzdGVyU3R5bGUuaWNvbnN9XG4gICAgICAgICAgICAgID48L0FwcGxlTG9naW5CdXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtyZWdpc3RlclN0eWxlLm9yfT5vcjwvZGl2PlxuICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPkVtYWlsOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiAnMS4yZW0nIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPlBhc3N3b3JkOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogJzEuMmVtJyB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItMyAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgY29sb3I6ICcjNDAzMTJlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yZ290IFBhc3N3b3JkP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM0MDMxMmUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb2wtc20tMTInXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW4oZGF0YS5pZGVudGlmaWVyLCBkYXRhLnBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgYXV0aGVkIFVzZXIgaW4gZ2xvYmFsIGNvbnRleHQgdG8gdXBkYXRlIGhlYWRlci9hcHAgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBDb250ZXh0LnNldFVzZXIocmVzLmRhdGEudXNlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAnTG9hZGluZy4uLiAnIDogJ1N1Ym1pdCd9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICNhYjAwM2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzLXRvcDogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHggMjBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAzMHB4IDEwcHggNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG4iXX0= */\n/*@ sourceURL=/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/pages/login.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./styles/Header.module.css":
/*!**********************************!*\
  !*** ./styles/Header.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "Header_title__1vi4d",
	"description": "Header_description__1lhe1"
};


/***/ }),

/***/ "./styles/Register.module.css":
/*!************************************!*\
  !*** ./styles/Register.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"icons": "Register_icons__FiUuu",
	"or": "Register_or__29Lmf"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-social-login-buttons":
/*!*********************************************!*\
  !*** external "react-social-login-buttons" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-social-login-buttons");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1JlZ2lzdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc29jaWFsLWxvZ2luLWJ1dHRvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkhlYWRlciIsInRpdGxlIiwiaGVhZGVyU3R5bGVzIiwiZGVmYXVsdFByb3BzIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwicmVnaXN0ZXJVc2VyIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiQ29va2llIiwic2V0IiwiZGF0YSIsImp3dCIsIlJvdXRlciIsInB1c2giLCJjYXRjaCIsImVycm9yIiwibG9naW4iLCJpZGVudGlmaWVyIiwibG9nb3V0IiwicmVtb3ZlIiwid2luZG93IiwiX191c2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkRhdGUiLCJub3ciLCJ3aXRoQXV0aFN5bmMiLCJDb21wb25lbnQiLCJXcmFwcGVyIiwicHJvcHMiLCJzeW5jTG9nb3V0IiwiZXZlbnQiLCJrZXkiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUl0ZW0iLCJnZXRJbml0aWFsUHJvcHMiLCJBcHBDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwiY2FydCIsIml0ZW1zIiwidG90YWwiLCJhZGRJdGVtIiwidXNlciIsInNldFVzZXIiLCJMb2dpbiIsInVwZGF0ZURhdGEiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2l6ZSIsIm9mZnNldCIsIk9iamVjdCIsImVudHJpZXMiLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJtYXAiLCJtZXNzYWdlcyIsImlkIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJhbGVydCIsInJlZ2lzdGVyU3R5bGUiLCJpY29ucyIsIm9yIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FB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dkIsQ0FBTCxDQUNHTSxJQURILENBQ1NDLEdBQUQsSUFBUztBQUNiNkMsa0JBQVUsQ0FBQyxLQUFELENBQVYsQ0FEYSxDQUViOztBQUNBSSxrQkFBVSxDQUFDVCxPQUFYLENBQW1CeEMsR0FBRyxDQUFDRyxJQUFKLENBQVNvQyxJQUE1QjtBQUNELE9BTEgsRUFNR2hDLEtBTkgsQ0FNVUMsS0FBRCxJQUFXO0FBQ2hCO0FBQ0FxQyxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELE9BVEg7QUFVRCxLQWZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FpQkdELE9BQU8sR0FBRyxhQUFILEdBQW1CLFFBakI3QixDQVJGLENBbkJGLENBREYsQ0E3QkYsQ0FGRixDQURGLENBREYsQ0FERjtBQUFBO0FBQUE7QUFBQSwrN1FBREY7QUEwSEQ7O0FBRWNILG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi5qc1wiKTtcbiIsImltcG9ydCBoZWFkZXJTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzJ1xuXG5jb25zdCBIZWFkZXIgPSAoeyB0aXRsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy50aXRsZX0+XG4gICAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICA8L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogJ1dlbGNvbWUgdG8gQ29mZmVlQ2FyZCcsXG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiIsIi8qIC9saWIvYXV0aC5qcyAqL1xuLy8gdGhpcyBpcyB3aGVyZSByZWdpc3RlclVzZXIgYW5kIGxvZ2luIGNvbXBvbmVudHMgYXJlIGRlZmluZWRcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7IC8vIGNsaWVudC1zaWRlIGNvb2tpZVxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiO1xuXG4vL3JlZ2lzdGVyIGEgbmV3IHVzZXJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSAodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAvL3ByZXZlbnQgZnVuY3Rpb24gZnJvbSBiZWluZyByYW4gb24gdGhlIHNlcnZlclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtBUElfVVJMfS9hdXRoL2xvY2FsL3JlZ2lzdGVyYCwgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vc2V0IEpXVCB0b2tlbiByZXNwb25zZSBmcm9tIFN0cmFwaSBmb3Igc2VydmVyIHZhbGlkYXRpb25cbiAgICAgICAgQ29va2llLnNldChcInRva2VuXCIsIHJlcy5kYXRhLmp3dCk7XG5cbiAgICAgICAgLy9yZXNvbHZlIHRoZSBwcm9taXNlIHRvIHNldCBsb2FkaW5nIHRvIGZhbHNlIGluIFNpZ25VcCBmb3JtXG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgLy9yZWRpcmVjdCBiYWNrIHRvIGhvbWUgcGFnZSBmb3IgcmVzdGF1cmFuY2Ugc2VsZWN0aW9uXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vcmVqZWN0IHRoZSBwcm9taXNlIGFuZCBwYXNzIHRoZSBlcnJvciBvYmplY3QgYmFjayB0byB0aGUgZm9ybVxuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGlkZW50aWZpZXIsIHBhc3N3b3JkKSA9PiB7XG4gIC8vcHJldmVudCBmdW5jdGlvbiBmcm9tIGJlaW5nIHJhbiBvbiB0aGUgc2VydmVyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoYCR7QVBJX1VSTH0vYXV0aC9sb2NhbC9gLCB7IGlkZW50aWZpZXIsIHBhc3N3b3JkIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vc2V0IHRva2VuIHJlc3BvbnNlIGZyb20gU3RyYXBpIGZvciBzZXJ2ZXIgdmFsaWRhdGlvblxuICAgICAgICBDb29raWUuc2V0KFwidG9rZW5cIiwgcmVzLmRhdGEuand0KTtcblxuICAgICAgICAvL3Jlc29sdmUgdGhlIHByb21pc2UgdG8gc2V0IGxvYWRpbmcgdG8gZmFsc2UgaW4gU2lnblVwIGZvcm1cbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAvL3JlZGlyZWN0IGJhY2sgdG8gaG9tZSBwYWdlIGZvciByZXN0YXVyYW5jZSBzZWxlY3Rpb25cbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy9yZWplY3QgdGhlIHByb21pc2UgYW5kIHBhc3MgdGhlIGVycm9yIG9iamVjdCBiYWNrIHRvIHRoZSBmb3JtXG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAvL3JlbW92ZSB0b2tlbiBhbmQgdXNlciBjb29raWVcbiAgQ29va2llLnJlbW92ZShcInRva2VuXCIpO1xuICBkZWxldGUgd2luZG93Ll9fdXNlcjtcbiAgLy8gc3luYyBsb2dvdXQgYmV0d2VlbiBtdWx0aXBsZSB3aW5kb3dzXG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ291dFwiLCBEYXRlLm5vdygpKTtcbiAgLy9yZWRpcmVjdCB0byB0aGUgaG9tZSBwYWdlXG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcbn07XG5cbi8vSGlnaGVyIE9yZGVyIENvbXBvbmVudCB0byB3cmFwIG91ciBwYWdlcyBhbmQgbG9nb3V0IHNpbXVsdGFuZW91c2x5IGxvZ2dlZCBpbiB0YWJzXG4vLyBUSElTIElTIE5PVCBVU0VEIGluIHRoZSB0dXRvcmlhbCwgb25seSBwcm92aWRlZCBpZiB5b3Ugd2FudGVkIHRvIGltcGxlbWVudFxuZXhwb3J0IGNvbnN0IHdpdGhBdXRoU3luYyA9IChDb21wb25lbnQpID0+IHtcbiAgY29uc3QgV3JhcHBlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHN5bmNMb2dvdXQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwibG9nb3V0XCIpIHtcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgc3luY0xvZ291dCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBzeW5jTG9nb3V0KTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9nb3V0XCIpO1xuICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xuICB9O1xuXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICB9XG5cbiAgcmV0dXJuIFdyYXBwZXI7XG59O1xuIiwiLyogL2NvbnRleHQvQXBwQ29udGV4dC5qcyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBjcmVhdGUgYXV0aCBjb250ZXh0IHdpdGggZGVmYXVsdCB2YWx1ZVxuXG4vLyBzZXQgYmFja3VwIGRlZmF1bHQgZm9yIGlzQXV0aGVudGljYXRlZCBpZiBub25lIGlzIHByb3ZpZGVkIGluIFByb3ZpZGVyXG5jb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCggXG4gICAge2lzQXV0aGVudGljYXRlZDp0cnVlLCBcbiAgICAgICAgY2FydDoge2l0ZW1zOltdLCBcbiAgICAgICAgdG90YWw6MH0sIFxuICAgICAgICBhZGRJdGVtOigpPT57fSwgXG4gICAgICAgIHJlbW92ZUl0ZW06KCk9Pnt9LCBcbiAgICAgICAgdXNlcjpmYWxzZSwgLy8gZGVmYXVsdCBsb2dnZWQgb3V0XG4gICAgICAgIHNldFVzZXI6KCk9Pnt9IFxuICAgIH0pO1xuICAgIFxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dDsiLCIvKiAvcGFnZXMvbG9naW4uanMgKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBGb3JtR3JvdXAsXG4gIExhYmVsLFxuICBJbnB1dCxcbn0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoJ1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb250ZXh0J1xuaW1wb3J0IHsgRmFjZWJvb2tMb2dpbkJ1dHRvbiB9IGZyb20gJ3JlYWN0LXNvY2lhbC1sb2dpbi1idXR0b25zJ1xuaW1wb3J0IHsgR29vZ2xlTG9naW5CdXR0b24gfSBmcm9tICdyZWFjdC1zb2NpYWwtbG9naW4tYnV0dG9ucydcbmltcG9ydCB7IEFwcGxlTG9naW5CdXR0b24gfSBmcm9tICdyZWFjdC1zb2NpYWwtbG9naW4tYnV0dG9ucydcbmltcG9ydCByZWdpc3RlclN0eWxlIGZyb20gJy4uL3N0eWxlcy9SZWdpc3Rlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcblxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgY29uc3QgW2RhdGEsIHVwZGF0ZURhdGFdID0gdXNlU3RhdGUoeyBpZGVudGlmaWVyOiAnJywgcGFzc3dvcmQ6ICcnIH0pIC8vaWRlbnRpZmllciBpcyB0aGUgdXNlcm5hbWUgb3IgZW1haWxcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXBwQ29udGV4dC5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJykgLy8gcmVkaXJlY3QgaWYgeW91J3JlIGFscmVhZHkgbG9nZ2VkIGluXG4gICAgfVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgIHVwZGF0ZURhdGEoeyAuLi5kYXRhLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc209JzEyJyBtZD17eyBzaXplOiA2LCBvZmZzZXQ6IDMgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhcGVyJz5cbiAgICAgICAgICAgIDxIZWFkZXIgdGl0bGU9eydXZWxjb21lIGJhY2snfSAvPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGVycm9yKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtlcnJvci5tZXNzYWdlc1swXS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2VzWzBdLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxGYWNlYm9va0xvZ2luQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoJ0hlbGxvJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtYi0zJ1xuICAgICAgICAgICAgICA+PC9GYWNlYm9va0xvZ2luQnV0dG9uPlxuICAgICAgICAgICAgICA8R29vZ2xlTG9naW5CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydCgnSGVsbG8nKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21iLTMnXG4gICAgICAgICAgICAgID48L0dvb2dsZUxvZ2luQnV0dG9uPlxuICAgICAgICAgICAgICA8QXBwbGVMb2dpbkJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdIZWxsbycpfVxuICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBiYWNrZ3JvdW5kOiAnYmxhY2snIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyZWdpc3RlclN0eWxlLmljb25zfVxuICAgICAgICAgICAgICA+PC9BcHBsZUxvZ2luQnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVnaXN0ZXJTdHlsZS5vcn0+b3I8L2Rpdj5cbiAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5FbWFpbDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0naWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogJzEuMmVtJyB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5QYXNzd29yZDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1MCwgZm9udFNpemU6ICcxLjJlbScgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTMgJz5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGNvbG9yOiAnIzQwMzEyZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNDAzMTJlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY29sLXNtLTEyJ1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luKGRhdGEuaWRlbnRpZmllciwgZGF0YS5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGF1dGhlZCBVc2VyIGluIGdsb2JhbCBjb250ZXh0IHRvIHVwZGF0ZSBoZWFkZXIvYXBwIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29udGV4dC5zZXRVc2VyKHJlcy5kYXRhLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4gJyA6ICdTdWJtaXQnfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnBhcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYWIwMDNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cy10b3A6IDZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMzBweCAxMHB4IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGl0bGVcIjogXCJIZWFkZXJfdGl0bGVfXzF2aTRkXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIZWFkZXJfZGVzY3JpcHRpb25fXzFsaGUxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpY29uc1wiOiBcIlJlZ2lzdGVyX2ljb25zX19GaVV1dVwiLFxuXHRcIm9yXCI6IFwiUmVnaXN0ZXJfb3JfXzI5TG1mXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc29jaWFsLWxvZ2luLWJ1dHRvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=