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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./components/context.js");
var _this = undefined,
    _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Navbar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Navibar = function Navibar() {
  _s();

  var title = 'Welcome to Nextjs'; // const { user } = useContext(AppContext)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  var user = {
    username: 'bob'
  };
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    expand: "sm",
    className: "bg-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2443259488",
    __self: _this
  }, "h5.jsx-2443259488{color:white;padding-top:11px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZG9yL1Byb2plY3RzL0NvZmZlZUNhcmQvd2ViYXBwX2NvZmZlZWNhcmQvZnJvbnRlbmQvY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJTLEFBR3lCLFlBQ0ssaUJBQ25CIiwiZmlsZSI6Ii9ob21lL2FuZG9yL1Byb2plY3RzL0NvZmZlZUNhcmQvd2ViYXBwX2NvZmZlZWNhcmQvZnJvbnRlbmQvY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtcbiAgQ29sbGFwc2UsXG4gIE5hdmJhcixcbiAgTmF2YmFyVG9nZ2xlcixcbiAgTmF2YmFyQnJhbmQsXG4gIE5hdixcbiAgTmF2SXRlbSxcbiAgTmF2TGluayxcbn0gZnJvbSAncmVhY3RzdHJhcCdcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gJy4vY29udGV4dCdcblxuY29uc3QgTmF2aWJhciA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAnV2VsY29tZSB0byBOZXh0anMnXG4gIC8vIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3BlbilcbiAgY29uc3QgdXNlciA9IHsgdXNlcm5hbWU6ICdib2InIH1cblxuICByZXR1cm4gKFxuICAgIDxOYXZiYXIgZXhwYW5kPSdzbScgY2xhc3NOYW1lPSdiZy1kYXJrJz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxOYXZiYXJCcmFuZCBocmVmPScvJz5yZWFjdHN0cmFwPC9OYXZiYXJCcmFuZD5cbiAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cbiAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxuICAgICAgICA8TmF2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkIGp1c3RpZnktY29udGVudC1lbmQnIG5hdmJhcj5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy8nIGNsYXNzTmFtZT0nY29sb3Itd2hpdGUnPlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J20tYXV0byc+e3VzZXIudXNlcm5hbWV9PC9oNT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy9yZWdpc3RlcicgY2xhc3NOYW1lPSdpbmFjdGl2ZSc+XG4gICAgICAgICAgICAgICAgU2lnbiB1cFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9Jy8nXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbG9nb3V0KClcbiAgICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy9sb2dpbic+U2lnbiBJbjwvTmF2TGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj0nLydcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsb2dvdXQoKVxuICAgICAgICAgICAgICAgICAgc2V0VXNlcihudWxsKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICA8L05hdj5cbiAgICAgIDwvQ29sbGFwc2U+XG4gICAgPC9OYXZiYXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWJhclxuIl19 */\n/*@ sourceURL=/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Navbar.js */"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "reactstrap"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "container-fluid justify-content-end",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/",
    className: "color-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, user ? __jsx("h5", {
    className: "jsx-2443259488" + " " + 'm-auto',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, user.username) : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/register",
    className: "inactive",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "Sign up")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
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
      lineNumber: 54,
      columnNumber: 15
    }
  }, "Logout") : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Sign In")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
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
      lineNumber: 69,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2aWJhciIsInRpdGxlIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiLCJ1c2VyIiwidXNlcm5hbWUiLCJsb2dvdXQiLCJzZXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQVNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsS0FBSyxHQUFHLG1CQUFkLENBRG9CLENBRXBCOztBQUZvQixrQkFJUUMsc0RBQVEsQ0FBQyxLQUFELENBSmhCO0FBQUEsTUFJYkMsTUFKYTtBQUFBLE1BSUxDLFNBSks7O0FBTXBCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTUQsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLEdBQWY7O0FBQ0EsTUFBTUcsSUFBSSxHQUFHO0FBQUVDLFlBQVEsRUFBRTtBQUFaLEdBQWI7QUFFQSxTQUNFLE1BQUMsaURBQUQ7QUFBUSxVQUFNLEVBQUMsSUFBZjtBQUFvQixhQUFTLEVBQUMsU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxekdBU0UsTUFBQyxzREFBRDtBQUFhLFFBQUksRUFBQyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGLEVBVUUsTUFBQyx3REFBRDtBQUFlLFdBQU8sRUFBRUYsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0UsTUFBQyxtREFBRDtBQUFVLFVBQU0sRUFBRUYsTUFBbEI7QUFBMEIsVUFBTSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFLLGFBQVMsRUFBQyxxQ0FBZjtBQUFxRCxVQUFNLE1BQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQVMsUUFBSSxFQUFDLEdBQWQ7QUFBa0IsYUFBUyxFQUFDLGFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLEVBTUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLElBQUksR0FDSDtBQUFBLHdDQUFjLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QkEsSUFBSSxDQUFDQyxRQUE3QixDQURHLEdBR0gsTUFBQyxrREFBRDtBQUFTLFFBQUksRUFBQyxXQUFkO0FBQTBCLGFBQVMsRUFBQyxVQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosQ0FORixFQWVFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxJQUFJLEdBQ0gsTUFBQyxrREFBRDtBQUNFLFFBQUksRUFBQyxHQURQO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JFLFlBQU07QUFDTkMsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNELEtBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURHLEdBV0gsTUFBQyxrREFBRDtBQUFTLFFBQUksRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSixDQWZGLEVBOEJFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxJQUFJLEdBQ0gsTUFBQyxrREFBRDtBQUNFLFFBQUksRUFBQyxHQURQO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JFLFlBQU07QUFDTkMsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNELEtBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURHLEdBVUQsSUFYTixDQTlCRixDQURGLENBWEYsQ0FERjtBQTRERCxDQXJFRDs7R0FBTVQsTzs7S0FBQUEsTztBQXVFU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40Y2IwZGJmMTIyODVkMzJhOGNlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7XG4gIENvbGxhcHNlLFxuICBOYXZiYXIsXG4gIE5hdmJhclRvZ2dsZXIsXG4gIE5hdmJhckJyYW5kLFxuICBOYXYsXG4gIE5hdkl0ZW0sXG4gIE5hdkxpbmssXG59IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuL2NvbnRleHQnXG5cbmNvbnN0IE5hdmliYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gJ1dlbGNvbWUgdG8gTmV4dGpzJ1xuICAvLyBjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcblxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pXG4gIGNvbnN0IHVzZXIgPSB7IHVzZXJuYW1lOiAnYm9iJyB9XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyIGV4cGFuZD0nc20nIGNsYXNzTmFtZT0nYmctZGFyayc+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8TmF2YmFyQnJhbmQgaHJlZj0nLyc+cmVhY3RzdHJhcDwvTmF2YmFyQnJhbmQ+XG4gICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XG4gICAgICA8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cbiAgICAgICAgPE5hdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCBqdXN0aWZ5LWNvbnRlbnQtZW5kJyBuYXZiYXI+XG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2TGluayBocmVmPScvJyBjbGFzc05hbWU9J2NvbG9yLXdoaXRlJz5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdtLWF1dG8nPnt1c2VyLnVzZXJuYW1lfTwvaDU+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPScvcmVnaXN0ZXInIGNsYXNzTmFtZT0naW5hY3RpdmUnPlxuICAgICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICBocmVmPScvJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxvZ291dCgpXG4gICAgICAgICAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPScvbG9naW4nPlNpZ24gSW48L05hdkxpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9Jy8nXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbG9nb3V0KClcbiAgICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgPC9OYXY+XG4gICAgICA8L0NvbGxhcHNlPlxuICAgIDwvTmF2YmFyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmliYXJcbiJdLCJzb3VyY2VSb290IjoiIn0=