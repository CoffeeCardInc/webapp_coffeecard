webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./components/context.js");
var _this = undefined,
    _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Navbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Navibar = function Navibar() {
  _s();

  var title = 'Welcome to Nextjs'; // const { user } = useContext(AppContext)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  var user = {
    username: 'bob'
  };
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    expand: "sm",
    className: "bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "reactstrap"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "container-fluid justify-content-end",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/",
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, user ? __jsx("h5", {
    className: "m-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, user.username) : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/register",
    className: "inactive",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "Sign up")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, user ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/",
    onClick: function onClick() {
      logout();
      setUser(null);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Logout") : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Sign In")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, user ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/",
    onClick: function onClick() {
      logout();
      setUser(null);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "Logout") : null))));
};

_s(Navibar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Navibar;
/* harmony default export */ __webpack_exports__["default"] = (Navibar);

var _c;

$RefreshReg$(_c, "Navibar");

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

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
var _this = undefined,
    _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* /components/Layout.js */







var Layout = function Layout(props) {
  _s();

  var title = 'Welcome to Nextjs'; // const { user } = useContext(AppContext)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  var user = {
    username: 'bob'
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, title), __jsx("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "https://js.stripe.com/v3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, props.children)));
};

_s(Layout, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIk5hdmliYXIiLCJ0aXRsZSIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwidXNlciIsInVzZXJuYW1lIiwiY29sb3IiLCJsb2dvdXQiLCJzZXRVc2VyIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLEtBQUssR0FBRyxtQkFBZCxDQURvQixDQUVwQjs7QUFGb0Isa0JBSVFDLHNEQUFRLENBQUMsS0FBRCxDQUpoQjtBQUFBLE1BSWJDLE1BSmE7QUFBQSxNQUlMQyxTQUpLOztBQU1wQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFmOztBQUNBLE1BQU1HLElBQUksR0FBRztBQUFFQyxZQUFRLEVBQUU7QUFBWixHQUFiO0FBRUEsU0FDRSxNQUFDLGlEQUFEO0FBQVEsVUFBTSxFQUFDLElBQWY7QUFBb0IsYUFBUyxFQUFDLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQWEsUUFBSSxFQUFDLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRSxNQUFDLHdEQUFEO0FBQWUsV0FBTyxFQUFFRixNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLG1EQUFEO0FBQVUsVUFBTSxFQUFFRixNQUFsQjtBQUEwQixVQUFNLE1BQWhDO0FBQUE7QUFBQTtB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O0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsdUVBRlA7QUFHRSxhQUFTLEVBQUMseUVBSFo7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFVRTtBQUFRLE9BQUcsRUFBQywwQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERixFQWlFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVlXLEtBQUssQ0FBQ0MsUUFBbEIsQ0FERixDQWpFRixDQURGO0FBdUVELENBaEZEOztHQUFNRixNOztLQUFBQSxNO0FBa0ZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjVmNWVlMjVjNmEyYjQ3ZGFlM2E1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgQ29sbGFwc2UsXG4gIE5hdmJhcixcbiAgTmF2YmFyVG9nZ2xlcixcbiAgTmF2YmFyQnJhbmQsXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbn0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4vY29udGV4dCdcblxuY29uc3QgTmF2aWJhciA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAnV2VsY29tZSB0byBOZXh0anMnXG4gIC8vIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3BlbilcbiAgY29uc3QgdXNlciA9IHsgdXNlcm5hbWU6ICdib2InIH1cblxuICByZXR1cm4gKFxuICAgIDxOYXZiYXIgZXhwYW5kPSdzbScgY2xhc3NOYW1lPSdiZy1kYXJrJz5cbiAgICAgIDxOYXZiYXJCcmFuZCBocmVmPScvJz5yZWFjdHN0cmFwPC9OYXZiYXJCcmFuZD5cbiAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cbiAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxuICAgICAgICA8TmF2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkIGp1c3RpZnktY29udGVudC1lbmQnIG5hdmJhcj5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy8nIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J20tYXV0byc+e3VzZXIudXNlcm5hbWV9PC9oNT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy9yZWdpc3RlcicgY2xhc3NOYW1lPSdpbmFjdGl2ZSc+XG4gICAgICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9Jy8nXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbG9nb3V0KClcbiAgICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy9sb2dpbic+U2lnbiBJbjwvTmF2TGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj0nLydcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsb2dvdXQoKVxuICAgICAgICAgICAgICAgICAgc2V0VXNlcihudWxsKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICA8L05hdj5cbiAgICAgIDwvQ29sbGFwc2U+XG4gICAgPC9OYXZiYXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWJhclxuIiwiLyogL2NvbXBvbmVudHMvTGF5b3V0LmpzICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBDb2xsYXBzZSxcbiAgTmF2YmFyLFxuICBOYXZiYXJUb2dnbGVyLFxuICBOYXZiYXJCcmFuZCxcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxufSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi9jb250ZXh0J1xuaW1wb3J0IE5hdmliYXIgZnJvbSAnLi9OYXZiYXInXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aXRsZSA9ICdXZWxjb21lIHRvIE5leHRqcydcbiAgLy8gY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKVxuICBjb25zdCB1c2VyID0geyB1c2VybmFtZTogJ2JvYicgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xuICAgICAgICAgIGludGVncml0eT0nc2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG0nXG4gICAgICAgICAgY3Jvc3NPcmlnaW49J2Fub255bW91cydcbiAgICAgICAgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9J2h0dHBzOi8vanMuc3RyaXBlLmNvbS92MycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgey8qIDxOYXZiYXIgZXhwYW5kPSdzbScgY2xhc3NOYW1lPSdiZy1kYXJrJz5cbiAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9Jy8nPnJlYWN0c3RyYXA8L05hdmJhckJyYW5kPlxuICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XG4gICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQganVzdGlmeS1jb250ZW50LWVuZCcgbmF2YmFyPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy8nIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J20tYXV0byc+e3VzZXIudXNlcm5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPScvcmVnaXN0ZXInIGNsYXNzTmFtZT0naW5hY3RpdmUnPlxuICAgICAgICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj0nLydcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0KClcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcihudWxsKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj0nL2xvZ2luJz5TaWduIEluPC9OYXZMaW5rPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPScvJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2dvdXQoKVxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICA8L05hdmJhcj4gKi99XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxDb250YWluZXI+e3Byb3BzLmNoaWxkcmVufTwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwic291cmNlUm9vdCI6IiJ9