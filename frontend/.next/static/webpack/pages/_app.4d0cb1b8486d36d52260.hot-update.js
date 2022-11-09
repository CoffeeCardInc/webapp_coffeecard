webpackHotUpdate_N_E("pages/_app",{

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
var _this = undefined,
    _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* /components/Layout.js */






var Layout = function Layout(props, args) {
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
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, title), __jsx("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "https://js.stripe.com/v3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    expand: "sm",
    className: "bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "reactstrap"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "container-fluid justify-content-end",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/",
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, user ? __jsx("h5", {
    className: "m-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, user.username) : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/register",
    className: "inactive",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Sign up")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, user ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/",
    onClick: function onClick() {
      logout();
      setUser(null);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Logout") : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "Sign In")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, user ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/",
    onClick: function onClick() {
      logout();
      setUser(null);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "Logout") : null)))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJhcmdzIiwidGl0bGUiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSIsInVzZXIiLCJ1c2VybmFtZSIsImNvbG9yIiwibG9nb3V0Iiwic2V0VXNlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFBQTs7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLG1CQUFkLENBRDhCLENBRTlCOztBQUY4QixrQkFJRkMsc0RBQVEsQ0FBQyxLQUFELENBSk47QUFBQSxNQUl2QkMsTUFKdUI7QUFBQSxNQUlmQyxTQUplOztBQU05QixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFmOztBQUNBLE1BQU1HLElBQUksR0FBRztBQUFFQyxZQUFRLEVBQUU7QUFBWixHQUFiO0FBRUEsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFOLEtBQVIsQ0FERixFQUVFO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsdUVBRlA7QUFHRSxhQUFTLEVBQUMseUVBSFo7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFVRTtBQUFRLE9BQUcsRUFBQywwQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERixFQWNFLE1BQUMsaURBQUQ7QUFBUSxVQUFNLEVBQUMsSUFBZjtBQUFvQixhQUFTLEVBQUMsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBYSxRQUFJLEVBQUMsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFLE1BQUMsd0RBQUQ7QUFBZSxXQUFPLEVBQUVJLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsbURBQUQ7QUFBVSxVQUFNLEVBQUVGLE1BQWxCO0FBQTBCLFVBQU0sTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBSyxhQUFTLEVBQUMscUNBQWY7QUFBcUQsVUFBTSxNQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFTLFFBQUksRUFBQyxHQUFkO0FBQWtCLFNBQUssRUFBRTtBQUFFSyxXQUFLLEVBQUU7QUFBVCxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixFQU1FLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixJQUFJLEdBQ0g7QUFBSSxhQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCQSxJQUFJLENBQUNDLFFBQTdCLENBREcsR0FHSCxNQUFDLGtEQUFEO0FBQVMsUUFBSSxFQUFDLFdBQWQ7QUFBMEIsYUFBUyxFQUFDLFVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixDQU5GLEVBZUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELElBQUksR0FDSCxNQUFDLGtEQUFEO0FBQ0UsUUFBSSxFQUFDLEdBRFA7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYkcsWUFBTTtBQUNOQyxhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREcsR0FXSCxNQUFDLGtEQUFEO0FBQVMsUUFBSSxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpKLENBZkYsRUE4QkUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLElBQUksR0FDSCxNQUFDLGtEQUFEO0FBQ0UsUUFBSSxFQUFDLEdBRFA7QUFFRSxXQUFPLEVBQUUsbUJBQU07QUFDYkcsWUFBTTtBQUNOQyxhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREcsR0FVRCxJQVhOLENBOUJGLENBREYsQ0FIRixDQWRGLEVBaUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWVgsS0FBSyxDQUFDWSxRQUFsQixDQURGLENBakVGLENBREY7QUF1RUQsQ0FoRkQ7O0dBQU1iLE07O0tBQUFBLE07QUFrRlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGQwY2IxYjg0ODZkMzZkNTIyNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9jb21wb25lbnRzL0xheW91dC5qcyAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgQ29sbGFwc2UsXG4gIE5hdmJhcixcbiAgTmF2YmFyVG9nZ2xlcixcbiAgTmF2YmFyQnJhbmQsXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbn0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4vY29udGV4dCdcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzLCBhcmdzKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gJ1dlbGNvbWUgdG8gTmV4dGpzJ1xuICAvLyBjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcblxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pXG4gIGNvbnN0IHVzZXIgPSB7IHVzZXJuYW1lOiAnYm9iJyB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcbiAgICAgICAgICBocmVmPSdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG4gICAgICAgICAgaW50ZWdyaXR5PSdzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbSdcbiAgICAgICAgICBjcm9zc09yaWdpbj0nYW5vbnltb3VzJ1xuICAgICAgICAvPlxuICAgICAgICA8c2NyaXB0IHNyYz0naHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzJyAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TmF2YmFyIGV4cGFuZD0nc20nIGNsYXNzTmFtZT0nYmctZGFyayc+XG4gICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPScvJz5yZWFjdHN0cmFwPC9OYXZiYXJCcmFuZD5cbiAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxuICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkIGp1c3RpZnktY29udGVudC1lbmQnIG5hdmJhcj5cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPScvJyBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdtLWF1dG8nPnt1c2VyLnVzZXJuYW1lfTwvaDU+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj0nL3JlZ2lzdGVyJyBjbGFzc05hbWU9J2luYWN0aXZlJz5cbiAgICAgICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9Jy8nXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ291dCgpXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy9sb2dpbic+U2lnbiBJbjwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj0nLydcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0KClcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcihudWxsKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgPC9OYXZiYXI+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxDb250YWluZXI+e3Byb3BzLmNoaWxkcmVufTwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwic291cmNlUm9vdCI6IiJ9