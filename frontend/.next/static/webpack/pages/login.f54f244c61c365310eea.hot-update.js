webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/auth */ "./components/auth.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-social-login-buttons */ "./node_modules/react-social-login-buttons/dist/index.js");
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Register.module.css */ "./styles/Register.module.css");
/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/pages/login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* /pages/login.js */










function Login(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    identifier: '',
    password: ''
  }),
      data = _useState[0],
      updateData = _useState[1]; //identifier is the username or email


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState3[0],
      setError = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (appContext.isAuthenticated) {
      router.push('/'); // redirect if you're already logged in
    }
  }, []);

  function _onChange(event) {
    updateData(_objectSpread(_objectSpread({}, data), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value)));
  }

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: "12",
    md: {
      size: 5,
      offset: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1470127334" + " " + 'paper',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1470127334" + " " + 'header',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "http://localhost:1337/uploads/5a60a9d26a764e7cba1099d8b157b5e9.png",
    className: "jsx-1470127334",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  })), __jsx("section", {
    className: "jsx-1470127334" + " " + 'wrapper',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, Object.entries(error).length !== 0 && error.constructor === Object && error.message.map(function (error) {
    return __jsx("div", {
      key: error.messages[0].id,
      style: {
        marginBottom: 10
      },
      className: "jsx-1470127334",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }, __jsx("small", {
      style: {
        color: 'red'
      },
      className: "jsx-1470127334",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 23
      }
    }, error.messages[0].message));
  }), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginButton"], {
    onClick: function onClick() {
      return alert('Hello');
    },
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginButton"], {
    onClick: function onClick() {
      return alert('Hello');
    },
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7__["AppleLoginButton"], {
    onClick: function onClick() {
      return alert('Hello');
    } // style={{ color: 'white', background: 'black' }}
    ,
    className: _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.icons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-1470127334" + " " + (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.or || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "or"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    disabled: loading,
    className: "jsx-1470127334",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "Email:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    onChange: function onChange(event) {
      return _onChange(event);
    },
    name: "identifier",
    style: {
      height: 50,
      fontSize: '1.2em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    style: {
      marginBottom: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "Password:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    onChange: function onChange(event) {
      return _onChange(event);
    },
    type: "password",
    name: "password",
    style: {
      height: 50,
      fontSize: '1.2em'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-1470127334",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "",
    className: "jsx-1470127334",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 23
    }
  }, __jsx("small", {
    className: "jsx-1470127334",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, "Forgot Password?"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      "float": 'right',
      width: 120
    },
    color: "primary",
    onClick: function onClick() {
      setLoading(true);
      Object(_components_auth__WEBPACK_IMPORTED_MODULE_5__["login"])(data.identifier, data.password).then(function (res) {
        setLoading(false); // set authed User in global context to update header/app state

        appContext.setUser(res.data.user);
      })["catch"](function (error) {
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
  }, loading ? 'Loading... ' : 'Submit')))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1470127334",
    __self: this
  }, ".paper.jsx-1470127334{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);border-radius:6px;margin-top:90px;}.notification.jsx-1470127334{color:#ab003c;}.header.jsx-1470127334{width:100%;height:120px;background-color:#2196f3;margin-bottom:30px;border-radius-top:6px;}.wrapper.jsx-1470127334{padding:10px 30px 20px 30px !important;}a.jsx-1470127334{color:blue !important;}img.jsx-1470127334{margin:15px 30px 10px 50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9yL1Byb2plY3RzL0NvZmZlZUNhcmQvd2ViYXBwX2NvZmZlZWNhcmQvZnJvbnRlbmQvcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUlTLEFBR3dDLEFBUWIsQUFHSCxBQU80QixBQUdqQixBQUdLLFdBWmQsR0FIZixRQWFBLEVBVDJCLEdBVmEsQUFzQnhDLFlBTkEsVUFMcUIsbUJBQ0csc0JBQ3hCLGlEQVpvQixrQkFDRixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvYW5kb3IvUHJvamVjdHMvQ29mZmVlQ2FyZC93ZWJhcHBfY29mZmVlY2FyZC9mcm9udGVuZC9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9wYWdlcy9sb2dpbi5qcyAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxuICBCdXR0b24sXG4gIEZvcm0sXG4gIEZvcm1Hcm91cCxcbiAgTGFiZWwsXG4gIElucHV0LFxufSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHQnXG5pbXBvcnQgeyBGYWNlYm9va0xvZ2luQnV0dG9uIH0gZnJvbSAncmVhY3Qtc29jaWFsLWxvZ2luLWJ1dHRvbnMnXG5pbXBvcnQgeyBHb29nbGVMb2dpbkJ1dHRvbiB9IGZyb20gJ3JlYWN0LXNvY2lhbC1sb2dpbi1idXR0b25zJ1xuaW1wb3J0IHsgQXBwbGVMb2dpbkJ1dHRvbiB9IGZyb20gJ3JlYWN0LXNvY2lhbC1sb2dpbi1idXR0b25zJ1xuaW1wb3J0IHJlZ2lzdGVyU3R5bGUgZnJvbSAnLi4vc3R5bGVzL1JlZ2lzdGVyLm1vZHVsZS5jc3MnXG5cbmZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XG4gIGNvbnN0IFtkYXRhLCB1cGRhdGVEYXRhXSA9IHVzZVN0YXRlKHsgaWRlbnRpZmllcjogJycsIHBhc3N3b3JkOiAnJyB9KSAvL2lkZW50aWZpZXIgaXMgdGhlIHVzZXJuYW1lIG9yIGVtYWlsXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFwcENvbnRleHQuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICByb3V0ZXIucHVzaCgnLycpIC8vIHJlZGlyZWN0IGlmIHlvdSdyZSBhbHJlYWR5IGxvZ2dlZCBpblxuICAgIH1cbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICB1cGRhdGVEYXRhKHsgLi4uZGF0YSwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNtPScxMicgbWQ9e3sgc2l6ZTogNSwgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXBlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgICAgICAgey8qIGxvZ28gaGVyZSAqL31cbiAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy91cGxvYWRzLzVhNjBhOWQyNmE3NjRlN2NiYTEwOTlkOGIxNTdiNWU5LnBuZycgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGVycm9yKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtlcnJvci5tZXNzYWdlc1swXS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2VzWzBdLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxGYWNlYm9va0xvZ2luQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoJ0hlbGxvJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtYi0zJ1xuICAgICAgICAgICAgICA+PC9GYWNlYm9va0xvZ2luQnV0dG9uPlxuICAgICAgICAgICAgICA8R29vZ2xlTG9naW5CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydCgnSGVsbG8nKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21iLTMnXG4gICAgICAgICAgICAgID48L0dvb2dsZUxvZ2luQnV0dG9uPlxuICAgICAgICAgICAgICA8QXBwbGVMb2dpbkJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdIZWxsbycpfVxuICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBiYWNrZ3JvdW5kOiAnYmxhY2snIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyZWdpc3RlclN0eWxlLmljb25zfVxuICAgICAgICAgICAgICA+PC9BcHBsZUxvZ2luQnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVnaXN0ZXJTdHlsZS5vcn0+b3I8L2Rpdj5cbiAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5FbWFpbDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0naWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogJzEuMmVtJyB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5QYXNzd29yZDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1MCwgZm9udFNpemU6ICcxLjJlbScgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkZvcmdvdCBQYXNzd29yZD88L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIHdpZHRoOiAxMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpbihkYXRhLmlkZW50aWZpZXIsIGRhdGEucGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBhdXRoZWQgVXNlciBpbiBnbG9iYWwgY29udGV4dCB0byB1cGRhdGUgaGVhZGVyL2FwcCBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbnRleHQuc2V0VXNlcihyZXMuZGF0YS51c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICdMb2FkaW5nLi4uICcgOiAnU3VibWl0J31cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5wYXBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2FiMDAzYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMtdG9wOiA2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDMwcHggMTBweCA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiJdfQ== */\n/*@ sourceURL=/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/pages/login.js */"));
}

_s(Login, "YNxEPLgoKTxghLfNWlSNbAd4Xcc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwiZGF0YSIsInVwZGF0ZURhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJ1c2VFZmZlY3QiLCJpc0F1dGhlbnRpY2F0ZWQiLCJwdXNoIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNpemUiLCJvZmZzZXQiLCJPYmplY3QiLCJlbnRyaWVzIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwibWFwIiwibWVzc2FnZXMiLCJpZCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiYWxlcnQiLCJyZWdpc3RlclN0eWxlIiwiaWNvbnMiLCJvciIsImhlaWdodCIsImZvbnRTaXplIiwid2lkdGgiLCJsb2dpbiIsInRoZW4iLCJyZXMiLCJzZXRVc2VyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDO0FBQUVDLGNBQVUsRUFBRSxFQUFkO0FBQWtCQyxZQUFRLEVBQUU7QUFBNUIsR0FBRCxDQURmO0FBQUEsTUFDYkMsSUFEYTtBQUFBLE1BQ1BDLFVBRE8saUJBQ2tEOzs7QUFEbEQsbUJBRVVKLHNEQUFRLENBQUMsS0FBRCxDQUZsQjtBQUFBLE1BRWJLLE9BRmE7QUFBQSxNQUVKQyxVQUZJOztBQUFBLG1CQUdNTixzREFBUSxDQUFDLEtBQUQsQ0FI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O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGLENBREYsRUFNRSxNQUFDLGlEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUUsZUFBTyxPQUFUO0FBQWtCQyxXQUFLLEVBQUU7QUFBekIsS0FEVDtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2JsQyxnQkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBbUMsb0VBQUssQ0FBQ3RDLElBQUksQ0FBQ0YsVUFBTixFQUFrQkUsSUFBSSxDQUFDRCxRQUF2QixDQUFMLENBQ0d3QyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JyQyxrQkFBVSxDQUFDLEtBQUQsQ0FBVixDQURhLENBRWI7O0FBQ0FLLGtCQUFVLENBQUNpQyxPQUFYLENBQW1CRCxHQUFHLENBQUN4QyxJQUFKLENBQVMwQyxJQUE1QjtBQUNELE9BTEgsV0FNUyxVQUFDdEMsS0FBRCxFQUFXO0FBQ2hCO0FBQ0FELGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FUSDtBQVVELEtBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWlCR0QsT0FBTyxHQUFHLGFBQUgsR0FBbUIsUUFqQjdCLENBTkYsQ0FuQkYsQ0FERixDQTdCRixDQUxGLENBREYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLCs0UUFERjtBQTJIRDs7R0E1SVFQLEs7VUFJUVkscUQ7OztLQUpSWixLO0FBOElNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5mNTRmMjQ0YzYxYzM2NTMxMGVlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL3BhZ2VzL2xvZ2luLmpzICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIEJ1dHRvbixcbiAgRm9ybSxcbiAgRm9ybUdyb3VwLFxuICBMYWJlbCxcbiAgSW5wdXQsXG59IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aCdcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dCdcbmltcG9ydCB7IEZhY2Vib29rTG9naW5CdXR0b24gfSBmcm9tICdyZWFjdC1zb2NpYWwtbG9naW4tYnV0dG9ucydcbmltcG9ydCB7IEdvb2dsZUxvZ2luQnV0dG9uIH0gZnJvbSAncmVhY3Qtc29jaWFsLWxvZ2luLWJ1dHRvbnMnXG5pbXBvcnQgeyBBcHBsZUxvZ2luQnV0dG9uIH0gZnJvbSAncmVhY3Qtc29jaWFsLWxvZ2luLWJ1dHRvbnMnXG5pbXBvcnQgcmVnaXN0ZXJTdHlsZSBmcm9tICcuLi9zdHlsZXMvUmVnaXN0ZXIubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgY29uc3QgW2RhdGEsIHVwZGF0ZURhdGFdID0gdXNlU3RhdGUoeyBpZGVudGlmaWVyOiAnJywgcGFzc3dvcmQ6ICcnIH0pIC8vaWRlbnRpZmllciBpcyB0aGUgdXNlcm5hbWUgb3IgZW1haWxcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXBwQ29udGV4dC5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJykgLy8gcmVkaXJlY3QgaWYgeW91J3JlIGFscmVhZHkgbG9nZ2VkIGluXG4gICAgfVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgIHVwZGF0ZURhdGEoeyAuLi5kYXRhLCBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc209JzEyJyBtZD17eyBzaXplOiA1LCBvZmZzZXQ6IDMgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhcGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICAgICAgICB7LyogbG9nbyBoZXJlICovfVxuICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cDovL2xvY2FsaG9zdDoxMzM3L3VwbG9hZHMvNWE2MGE5ZDI2YTc2NGU3Y2JhMTA5OWQ4YjE1N2I1ZTkucG5nJyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3dyYXBwZXInPlxuICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZXJyb3IpLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Vycm9yLm1lc3NhZ2VzWzBdLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IubWVzc2FnZXNbMF0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPEZhY2Vib29rTG9naW5CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydCgnSGVsbG8nKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21iLTMnXG4gICAgICAgICAgICAgID48L0ZhY2Vib29rTG9naW5CdXR0b24+XG4gICAgICAgICAgICAgIDxHb29nbGVMb2dpbkJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdIZWxsbycpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWItMydcbiAgICAgICAgICAgICAgPjwvR29vZ2xlTG9naW5CdXR0b24+XG4gICAgICAgICAgICAgIDxBcHBsZUxvZ2luQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoJ0hlbGxvJyl9XG4gICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGJhY2tncm91bmQ6ICdibGFjaycgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JlZ2lzdGVyU3R5bGUuaWNvbnN9XG4gICAgICAgICAgICAgID48L0FwcGxlTG9naW5CdXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtyZWdpc3RlclN0eWxlLm9yfT5vcjwvZGl2PlxuICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPkVtYWlsOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiAnMS4yZW0nIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPlBhc3N3b3JkOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG9uQ2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogJzEuMmVtJyB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+Rm9yZ290IFBhc3N3b3JkPzwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0Jywgd2lkdGg6IDEyMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luKGRhdGEuaWRlbnRpZmllciwgZGF0YS5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGF1dGhlZCBVc2VyIGluIGdsb2JhbCBjb250ZXh0IHRvIHVwZGF0ZSBoZWFkZXIvYXBwIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29udGV4dC5zZXRVc2VyKHJlcy5kYXRhLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldEVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4gJyA6ICdTdWJtaXQnfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnBhcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYWIwMDNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cy10b3A6IDZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMzBweCAxMHB4IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuIl0sInNvdXJjZVJvb3QiOiIifQ==