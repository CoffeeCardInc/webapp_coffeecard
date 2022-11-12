webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Navibar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Navibar.module.css */ "./styles/Navibar.module.css");
/* harmony import */ var _styles_Navibar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Navibar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./components/context.js");
var _this = undefined,
    _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Navbar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Navibar = function Navibar() {
  _s();

  // const { user } = useContext(AppContext)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  var user = true;

  switch (user) {
    case true:
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
        expand: "sm",
        light: true,
        className: _styles_Navibar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.zindex,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarBrand"], {
        href: "/",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }, ' ', __jsx("img", {
        src: "https://coffeecard.nyc/images/logo.png",
        style: {
          width: '30px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarToggler"], {
        onClick: toggle,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
        isOpen: isOpen,
        navbar: true,
        fixed: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
        className: "container-fluid justify-content-end",
        navbar: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
        href: "/",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }
      }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
        href: "/cart",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }
      }, "Cart")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
        href: "/",
        onClick: function onClick() {
          logout();
          setUser(null);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }, "Logout")))));

    default:
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
        expand: "sm",
        light: true,
        className: _styles_Navibar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.zindex,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "3559625505",
        __self: _this
      }, "h5.jsx-3559625505{color:white;padding-top:11px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9yL1Byb2plY3RzL0NvZmZlZUNhcmQvd2ViYXBwX2NvZmZlZWNhcmQvZnJvbnRlbmQvY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERhLEFBRzZCLFlBQ0ssaUJBQ25CIiwiZmlsZSI6Ii9ob21lL2FuZG9yL1Byb2plY3RzL0NvZmZlZUNhcmQvd2ViYXBwX2NvZmZlZWNhcmQvZnJvbnRlbmQvY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBuYXZTdHlsZSBmcm9tICcuLi9zdHlsZXMvTmF2aWJhci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtcbiAgQ29sbGFwc2UsXG4gIE5hdmJhcixcbiAgTmF2YmFyVG9nZ2xlcixcbiAgTmF2YmFyQnJhbmQsXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbn0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4vY29udGV4dCdcblxuY29uc3QgTmF2aWJhciA9ICgpID0+IHtcbiAgLy8gY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pXG4gIGNvbnN0IHVzZXIgPSB0cnVlXG5cbiAgc3dpdGNoICh1c2VyKSB7XG4gICAgY2FzZSB0cnVlOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5hdmJhciBleHBhbmQ9J3NtJyBsaWdodCBjbGFzc05hbWU9e25hdlN0eWxlLnppbmRleH0+XG4gICAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9Jy8nPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPSdodHRwczovL2NvZmZlZWNhcmQubnljL2ltYWdlcy9sb2dvLnBuZydcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICczMHB4JyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L05hdmJhckJyYW5kPlxuICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cbiAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhciBmaXhlZD5cbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQganVzdGlmeS1jb250ZW50LWVuZCcgbmF2YmFyPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPScvJz5Ib21lPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy9jYXJ0Jz5DYXJ0PC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPScvJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2dvdXQoKVxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgPC9OYXZiYXI+XG4gICAgICApXG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5hdmJhciBleHBhbmQ9J3NtJyBsaWdodCBjbGFzc05hbWU9e25hdlN0eWxlLnppbmRleH0+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj0nLyc+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vY29mZmVlY2FyZC5ueWMvaW1hZ2VzL2xvZ28ucG5nJ1xuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzMwcHgnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTmF2YmFyQnJhbmQ+XG4gICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxuICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyIGZpeGVkPlxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCBqdXN0aWZ5LWNvbnRlbnQtZW5kJyBuYXZiYXI+XG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy8nPkhvbWU8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj0nL3JlZ2lzdGVyJyBjbGFzc05hbWU9J2luYWN0aXZlJz5cbiAgICAgICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj0nL2xvZ2luJz5TaWduIEluPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8L05hdmJhcj5cbiAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpYmFyXG4iXX0= */\n/*@ sourceURL=/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Navbar.js */"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarBrand"], {
        href: "/",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }, ' ', __jsx("img", {
        src: "https://coffeecard.nyc/images/logo.png",
        style: {
          width: '30px'
        },
        className: "jsx-3559625505",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarToggler"], {
        onClick: toggle,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
        isOpen: isOpen,
        navbar: true,
        fixed: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
        className: "container-fluid justify-content-end",
        navbar: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
        href: "/",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
        href: "/register",
        className: "inactive",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }
      }, "Sign up")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
        href: "/login",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }
      }, "Sign In")))));
  }
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2aWJhciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwidXNlciIsIm5hdlN0eWxlIiwiemluZGV4Iiwid2lkdGgiLCJsb2dvdXQiLCJzZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCO0FBRG9CLGtCQUVRQyxzREFBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUViQyxNQUZhO0FBQUEsTUFFTEMsU0FGSzs7QUFHcEIsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsR0FBZjs7QUFDQSxNQUFNRyxJQUFJLEdBQUcsSUFBYjs7QUFFQSxVQUFRQSxJQUFSO0FBQ0UsU0FBSyxJQUFMO0FBQ0UsYUFDRSxNQUFDLGlEQUFEO0FBQVEsY0FBTSxFQUFDLElBQWY7QUFBb0IsYUFBSyxNQUF6QjtBQUEwQixpQkFBUyxFQUFFQyxpRUFBUSxDQUFDQyxNQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFhLFlBQUksRUFBQyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csR0FESCxFQUVFO0FBQ0UsV0FBRyxFQUFDLHdDQUROO0FBRUUsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREYsRUFRRSxNQUFDLHdEQUFEO0FBQWUsZUFBTyxFQUFFSixNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkYs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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTZlMzc2NTMwMjRmODYyMGRjNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG5hdlN0eWxlIGZyb20gJy4uL3N0eWxlcy9OYXZpYmFyLm1vZHVsZS5jc3MnXG5pbXBvcnQge1xuICBDb2xsYXBzZSxcbiAgTmF2YmFyLFxuICBOYXZiYXJUb2dnbGVyLFxuICBOYXZiYXJCcmFuZCxcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxufSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi9jb250ZXh0J1xuXG5jb25zdCBOYXZpYmFyID0gKCkgPT4ge1xuICAvLyBjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3BlbilcbiAgY29uc3QgdXNlciA9IHRydWVcblxuICBzd2l0Y2ggKHVzZXIpIHtcbiAgICBjYXNlIHRydWU6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2YmFyIGV4cGFuZD0nc20nIGxpZ2h0IGNsYXNzTmFtZT17bmF2U3R5bGUuemluZGV4fT5cbiAgICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj0nLyc+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vY29mZmVlY2FyZC5ueWMvaW1hZ2VzL2xvZ28ucG5nJ1xuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzMwcHgnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTmF2YmFyQnJhbmQ+XG4gICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxuICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyIGZpeGVkPlxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCBqdXN0aWZ5LWNvbnRlbnQtZW5kJyBuYXZiYXI+XG4gICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy8nPkhvbWU8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj0nL2NhcnQnPkNhcnQ8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9Jy8nXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ291dCgpXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8L05hdmJhcj5cbiAgICAgIClcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2YmFyIGV4cGFuZD0nc20nIGxpZ2h0IGNsYXNzTmFtZT17bmF2U3R5bGUuemluZGV4fT5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPScvJz5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9jb2ZmZWVjYXJkLm55Yy9pbWFnZXMvbG9nby5wbmcnXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMzBweCcgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9OYXZiYXJCcmFuZD5cbiAgICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XG4gICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXIgZml4ZWQ+XG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkIGp1c3RpZnktY29udGVudC1lbmQnIG5hdmJhcj5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj0nLyc+SG9tZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPScvcmVnaXN0ZXInIGNsYXNzTmFtZT0naW5hY3RpdmUnPlxuICAgICAgICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPScvbG9naW4nPlNpZ24gSW48L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDwvTmF2YmFyPlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmliYXJcbiJdLCJzb3VyY2VSb290IjoiIn0=