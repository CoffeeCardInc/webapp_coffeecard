webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Register.module.css */ "./styles/Register.module.css");
/* harmony import */ var _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/auth */ "./components/auth.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-social-login-buttons */ "./node_modules/react-social-login-buttons/dist/index.js");
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");


var _this = undefined,
    _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/pages/register.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* /pages/register.js */








 // register a new user

var Register = function Register() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: '',
    username: '',
    password: ''
  }),
      data = _useState[0],
      setData = _useState[1]; // takes in these three values


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      error = _useState3[0],
      setError = _useState3[1];

  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: "12",
    md: {
      size: 5,
      offset: 3
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2226224009" + " " + 'paper',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "jsx-2226224009" + " " + 'wrapper',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, Object.entries(error).length !== 0 && error.constructor === Object && error.message.map(function (error) {
    return __jsx("div", {
      // error message
      key: error.messages[0].id,
      style: {
        marginBottom: 10
      },
      className: "jsx-2226224009",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, __jsx("small", {
      style: {
        color: 'red'
      },
      className: "jsx-2226224009",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 23
      }
    }, error.messages[0].message));
  }), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginButton"], {
    onClick: function onClick() {
      return alert('Hello');
    },
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "jsx-2226224009",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Sign up with Facebook")), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginButton"], {
    onClick: function onClick() {
      return alert('Hello');
    },
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "jsx-2226224009",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "Sign up with Google")), __jsx(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_7__["AppleLoginButton"], {
    onClick: function onClick() {
      return alert('Hello');
    } // style={{ color: 'white', background: 'black' }}
    ,
    className: _styles_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "jsx-2226224009",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Sign up with Apple")), __jsx("div", {
    className: "jsx-2226224009" + " " + (_styles_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.or || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "or"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    disabled: loading,
    className: "jsx-2226224009",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "Username:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    disabled: loading,
    onChange: function onChange(e) {
      return setData(_objectSpread(_objectSpread({}, data), {}, {
        username: e.target.value
      }));
    } // update username
    ,
    value: data.username,
    type: "text",
    name: "username",
    style: {
      height: 50,
      fontSize: '1.2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, "Email:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    onChange: function onChange(e) {
      return setData(_objectSpread(_objectSpread({}, data), {}, {
        email: e.target.value
      }));
    } // update email
    ,
    value: data.email,
    type: "email",
    name: "email",
    style: {
      height: 50,
      fontSize: '1.2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    style: {
      marginBottom: 30
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, "Password:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    onChange: function onChange(e) {
      return setData(_objectSpread(_objectSpread({}, data), {}, {
        password: e.target.value
      }));
    } // update password
    ,
    value: data.password,
    type: "password",
    name: "password",
    style: {
      height: 50,
      fontSize: '1.2em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      // float: 'middle',
      width: 180,
      backgroundColor: '#40312e'
    },
    className: "col-sm-12" // color='primary'
    ,
    disabled: false,
    onClick: function onClick() {
      setLoading(true);
      Object(_components_auth__WEBPACK_IMPORTED_MODULE_5__["registerUser"])(data.username, data.email, data.password) // this puts it in the Strapi database, from
      .then(function (res) {
        // set authed user in global context object
        appContext.setUser(res.data.user);
        setLoading(false);
        console.log("registered user: ".concat(JSON.stringify(res.data)));
      })["catch"](function (error) {
        console.log("error in register: ".concat(error)); //setError(error.response.data);

        setLoading(false);
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, loading ? 'Loading..' : 'Register', ' ')))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2226224009",
    __self: _this
  }, ".paper.jsx-2226224009{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);border-radius:6px;margin-top:40px;}.notification.jsx-2226224009{color:#ab003c;}.header.jsx-2226224009{width:100%;height:120px;background-color:#2196f3;margin-bottom:30px;border-radius-top:6px;}.wrapper.jsx-2226224009{padding:10px 30px 20px 30px !important;}a.jsx-2226224009{color:blue !important;}img.jsx-2226224009{margin:15px 30px 10px 50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9yL1Byb2plY3RzL0NvZmZlZUNhcmQvd2ViYXBwX2NvZmZlZWNhcmQvZnJvbnRlbmQvcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUpTLEFBR3dDLEFBUWIsQUFHSCxBQU80QixBQUdqQixBQUdLLFdBWmQsR0FIZixRQWFBLEVBVDJCLEdBVmEsQUFzQnhDLFlBTkEsVUFMcUIsbUJBQ0csc0JBQ3hCLGlEQVpvQixrQkFDRixnQkFDbEIiLCJmaWxlIjoiL2hvbWUvYW5kb3IvUHJvamVjdHMvQ29mZmVlQ2FyZC93ZWJhcHBfY29mZmVlY2FyZC9mcm9udGVuZC9wYWdlcy9yZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9wYWdlcy9yZWdpc3Rlci5qcyAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZWdpc3RlclN0eWxlIGZyb20gJy4uL3N0eWxlcy9SZWdpc3Rlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBGb3JtR3JvdXAsXG4gIExhYmVsLFxuICBJbnB1dCxcbn0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IHJlZ2lzdGVyVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aCdcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dCdcbmltcG9ydCB7IEZhY2Vib29rTG9naW5CdXR0b24gfSBmcm9tICdyZWFjdC1zb2NpYWwtbG9naW4tYnV0dG9ucydcbmltcG9ydCB7IEdvb2dsZUxvZ2luQnV0dG9uIH0gZnJvbSAncmVhY3Qtc29jaWFsLWxvZ2luLWJ1dHRvbnMnXG5pbXBvcnQgeyBBcHBsZUxvZ2luQnV0dG9uIH0gZnJvbSAncmVhY3Qtc29jaWFsLWxvZ2luLWJ1dHRvbnMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuXG4vLyByZWdpc3RlciBhIG5ldyB1c2VyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyBlbWFpbDogJycsIHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnIH0pIC8vIHRha2VzIGluIHRoZXNlIHRocmVlIHZhbHVlc1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzbT0nMTInIG1kPXt7IHNpemU6IDUsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFwZXInPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGVycm9yKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IC8vIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Vycm9yLm1lc3NhZ2VzWzBdLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IubWVzc2FnZXNbMF0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPEZhY2Vib29rTG9naW5CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydCgnSGVsbG8nKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21iLTMnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TaWduIHVwIHdpdGggRmFjZWJvb2s8L3NwYW4+XG4gICAgICAgICAgICAgIDwvRmFjZWJvb2tMb2dpbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoJ0hlbGxvJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtYi0zJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+U2lnbiB1cCB3aXRoIEdvb2dsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9Hb29nbGVMb2dpbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEFwcGxlTG9naW5CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydCgnSGVsbG8nKX1cbiAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgYmFja2dyb3VuZDogJ2JsYWNrJyB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cmVnaXN0ZXJTdHlsZS5pY29uc31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPlNpZ24gdXAgd2l0aCBBcHBsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9BcHBsZUxvZ2luQnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVnaXN0ZXJTdHlsZS5vcn0+b3I8L2Rpdj5cbiAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5Vc2VybmFtZTo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAoZSkgPT4gc2V0RGF0YSh7IC4uLmRhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KSAvLyB1cGRhdGUgdXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogJzEuMmVtJyB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+RW1haWw6PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgKGUpID0+IHNldERhdGEoeyAuLi5kYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSkgLy8gdXBkYXRlIGVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiAnMS4yZW0nIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPlBhc3N3b3JkOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiBzZXREYXRhKHsgLi4uZGF0YSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pIC8vIHVwZGF0ZSBwYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogJzEuMmVtJyB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5Gb3Jnb3QgUGFzc3dvcmQ/PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxvYXQ6ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MDMxMmUnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb2wtc20tMTInXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyVXNlcihkYXRhLnVzZXJuYW1lLCBkYXRhLmVtYWlsLCBkYXRhLnBhc3N3b3JkKSAvLyB0aGlzIHB1dHMgaXQgaW4gdGhlIFN0cmFwaSBkYXRhYmFzZSwgZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGF1dGhlZCB1c2VyIGluIGdsb2JhbCBjb250ZXh0IG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbnRleHQuc2V0VXNlcihyZXMuZGF0YS51c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgcmVnaXN0ZXJlZCB1c2VyOiAke0pTT04uc3RyaW5naWZ5KHJlcy5kYXRhKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIGluIHJlZ2lzdGVyOiAke2Vycm9yfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICdMb2FkaW5nLi4nIDogJ1JlZ2lzdGVyJ317JyAnfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBpZiBsb2FkaW5nLCBzaG93IGxvYWRpbmcsIGVsc2Ugc2hvdyByZWdpc3RlciAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5wYXBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2FiMDAzYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMtdG9wOiA2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDMwcHggMTBweCA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyXG4iXX0= */\n/*@ sourceURL=/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/pages/register.js */"));
};

_s(Register, "s5sgdvM7D7kQAPtrzJmR4Mf0/uU=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsImVtYWlsIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiYXBwQ29udGV4dCIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0Iiwic2l6ZSIsIm9mZnNldCIsIk9iamVjdCIsImVudHJpZXMiLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJtYXAiLCJtZXNzYWdlcyIsImlkIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJhbGVydCIsInJlZ2lzdGVyU3R5bGUiLCJpY29ucyIsIm9yIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInJlZ2lzdGVyVXNlciIsInRoZW4iLCJyZXMiLCJzZXRVc2VyIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDO0FBQUVDLFNBQUssRUFBRSxFQUFUO0FBQWFDLFlBQVEsRUFBRSxFQUF2QjtBQUEyQkMsWUFBUSxFQUFFO0FBQXJDLEdBQUQsQ0FEWDtBQUFBLE1BQ2RDLElBRGM7QUFBQSxNQUNSQyxPQURRLGlCQUN1RDs7O0FBRHZELG1CQUVTTCxzREFBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVkTSxPQUZjO0FBQUEsTUFFTEMsVUFGSzs7QUFBQSxtQkFHS1Asc0RBQVEsQ0FBQyxFQUFELENB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QUksQ0FBQ0MsU0FBTCxDQUFlTixHQUFHLENBQUNsQyxJQUFuQixDQUR0QjtBQUdELE9BUkgsV0FTUyxVQUFDSSxLQUFELEVBQVc7QUFDaEJpQyxlQUFPLENBQUNDLEdBQVIsOEJBQWtDbEMsS0FBbEMsR0FEZ0IsQ0FFaEI7O0FBQ0FELGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FiSDtBQWNELEtBekJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EyQkdELE9BQU8sR0FBRyxXQUFILEdBQWlCLFVBM0IzQixFQTJCdUMsR0EzQnZDLENBTkYsQ0F0Q0YsQ0FERixDQW5DRixDQUZGLENBREYsQ0FERixDQURGO0FBQUE7QUFBQTtBQUFBLDArVEFERjtBQTRKRCxDQWpLRDs7R0FBTVAsUTs7S0FBQUEsUTtBQWtLU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuM2M3ZTkwZTgxMWM4ZWQ2YzAzMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9wYWdlcy9yZWdpc3Rlci5qcyAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZWdpc3RlclN0eWxlIGZyb20gJy4uL3N0eWxlcy9SZWdpc3Rlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBGb3JtR3JvdXAsXG4gIExhYmVsLFxuICBJbnB1dCxcbn0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCB7IHJlZ2lzdGVyVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aCdcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dCdcbmltcG9ydCB7IEZhY2Vib29rTG9naW5CdXR0b24gfSBmcm9tICdyZWFjdC1zb2NpYWwtbG9naW4tYnV0dG9ucydcbmltcG9ydCB7IEdvb2dsZUxvZ2luQnV0dG9uIH0gZnJvbSAncmVhY3Qtc29jaWFsLWxvZ2luLWJ1dHRvbnMnXG5pbXBvcnQgeyBBcHBsZUxvZ2luQnV0dG9uIH0gZnJvbSAncmVhY3Qtc29jaWFsLWxvZ2luLWJ1dHRvbnMnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuXG4vLyByZWdpc3RlciBhIG5ldyB1c2VyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyBlbWFpbDogJycsIHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnIH0pIC8vIHRha2VzIGluIHRoZXNlIHRocmVlIHZhbHVlc1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzbT0nMTInIG1kPXt7IHNpemU6IDUsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFwZXInPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGVycm9yKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IC8vIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Vycm9yLm1lc3NhZ2VzWzBdLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IubWVzc2FnZXNbMF0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPEZhY2Vib29rTG9naW5CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydCgnSGVsbG8nKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21iLTMnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TaWduIHVwIHdpdGggRmFjZWJvb2s8L3NwYW4+XG4gICAgICAgICAgICAgIDwvRmFjZWJvb2tMb2dpbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoJ0hlbGxvJyl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtYi0zJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+U2lnbiB1cCB3aXRoIEdvb2dsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9Hb29nbGVMb2dpbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEFwcGxlTG9naW5CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydCgnSGVsbG8nKX1cbiAgICAgICAgICAgICAgICAvLyBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgYmFja2dyb3VuZDogJ2JsYWNrJyB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cmVnaXN0ZXJTdHlsZS5pY29uc31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPlNpZ24gdXAgd2l0aCBBcHBsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9BcHBsZUxvZ2luQnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cmVnaXN0ZXJTdHlsZS5vcn0+b3I8L2Rpdj5cbiAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5Vc2VybmFtZTo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAoZSkgPT4gc2V0RGF0YSh7IC4uLmRhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KSAvLyB1cGRhdGUgdXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogJzEuMmVtJyB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+RW1haWw6PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgKGUpID0+IHNldERhdGEoeyAuLi5kYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSkgLy8gdXBkYXRlIGVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiAnMS4yZW0nIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPlBhc3N3b3JkOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiBzZXREYXRhKHsgLi4uZGF0YSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pIC8vIHVwZGF0ZSBwYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogJzEuMmVtJyB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5Gb3Jnb3QgUGFzc3dvcmQ/PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxvYXQ6ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0MDMxMmUnLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb2wtc20tMTInXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyVXNlcihkYXRhLnVzZXJuYW1lLCBkYXRhLmVtYWlsLCBkYXRhLnBhc3N3b3JkKSAvLyB0aGlzIHB1dHMgaXQgaW4gdGhlIFN0cmFwaSBkYXRhYmFzZSwgZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGF1dGhlZCB1c2VyIGluIGdsb2JhbCBjb250ZXh0IG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbnRleHQuc2V0VXNlcihyZXMuZGF0YS51c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgcmVnaXN0ZXJlZCB1c2VyOiAke0pTT04uc3RyaW5naWZ5KHJlcy5kYXRhKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIGluIHJlZ2lzdGVyOiAke2Vycm9yfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/ICdMb2FkaW5nLi4nIDogJ1JlZ2lzdGVyJ317JyAnfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBpZiBsb2FkaW5nLCBzaG93IGxvYWRpbmcsIGVsc2Ugc2hvdyByZWdpc3RlciAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5wYXBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2FiMDAzYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMtdG9wOiA2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDMwcHggMTBweCA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyXG4iXSwic291cmNlUm9vdCI6IiJ9