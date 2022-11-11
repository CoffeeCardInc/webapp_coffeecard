webpackHotUpdate_N_E("pages/landing",{

/***/ "./components/Landing.js":
/*!*******************************!*\
  !*** ./components/Landing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Landing = function Landing() {
  return __jsx("section", {
    id: "about-us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-12 col-lg-12 img-fluid p-0 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "col text-col",
    style: {
      fontSize: '18px',
      letterSpacing: '.1rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Your most refined ritual yet."), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "about-text-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "The best coffee in New York now has a subscirption."), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "btn col-md-12 col-lg-3 ",
    style: {
      backgroundColor: '#40312e',
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/quote",
    className: "nav-item nav-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, "Contact")), __jsx("button", {
    className: "btn col-md-12 col-lg-3",
    style: {
      backgroundColor: '#40312e',
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/quote",
    className: "nav-item nav-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, "Contact"))))))));
};

_c = Landing;
/* harmony default export */ __webpack_exports__["default"] = (Landing);

var _c;

$RefreshReg$(_c, "Landing");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nLmpzIl0sIm5hbWVzIjpbIkxhbmRpbmciLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixTQUNFO0FBQVMsTUFBRSxFQUFDLFVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0U7QUFDRSxhQUFTLEVBQUMsY0FEWjtBQUVFLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsTUFBWjtBQUFvQkMsbUJBQWEsRUFBRTtBQUFuQyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyREFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyx5QkFEWjtBQUVFLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFLFNBQW5CO0FBQThCQyxXQUFLLEVBQUU7QUFBckMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQW9CLGFBQVMsRUFBQyxtQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLENBREYsRUFTRTtBQUNFLGFBQVMsRUFBQyx3QkFEWjtBQUVFLFNBQUssRUFBRTtBQUFFRCxxQkFBZSxFQUFFLFNBQW5CO0FBQThCQyxXQUFLLEVBQUU7QUFBckMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQW9CLGFBQVMsRUFBQyxtQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLENBVEYsQ0FKRixDQU5GLENBVEYsQ0FERixDQURGLENBREY7QUE4Q0QsQ0EvQ0Q7O0tBQU1KLE87QUFpRFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhbmRpbmcuZTE4OGU1NjJhNWNkMmMyMmQ5MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgTGFuZGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD0nYWJvdXQtdXMnPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMTIgY29sLWxnLTEyIGltZy1mbHVpZCBwLTAgJz5cbiAgICAgICAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgc3JjPSdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNjYxOTIxNjU5OS05ZDE2ZDA5MDNkZmQ/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE0NjkmcT04MCdcbiAgICAgICAgICAgICAgYWx0PSdjb21wYW55LWxvZ28nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncC0wJ1xuICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjb2wgdGV4dC1jb2wnXG4gICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzE4cHgnLCBsZXR0ZXJTcGFjaW5nOiAnLjFyZW0nIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyPllvdXIgbW9zdCByZWZpbmVkIHJpdHVhbCB5ZXQuPC9oMj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhYm91dC10ZXh0LTInPlxuICAgICAgICAgICAgICAgIFRoZSBiZXN0IGNvZmZlZSBpbiBOZXcgWW9yayBub3cgaGFzIGEgc3Vic2NpcnB0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gY29sLW1kLTEyIGNvbC1sZy0zICdcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM0MDMxMmUnLCBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9xdW90ZScgY2xhc3NOYW1lPSduYXYtaXRlbSBuYXYtbGluayc+XG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBjb2wtbWQtMTIgY29sLWxnLTMnXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNDAzMTJlJywgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcXVvdGUnIGNsYXNzTmFtZT0nbmF2LWl0ZW0gbmF2LWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdcbiJdLCJzb3VyY2VSb290IjoiIn0=