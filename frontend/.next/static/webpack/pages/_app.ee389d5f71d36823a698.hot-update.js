webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Cards = function Cards(_ref) {
  var type = _ref.type,
      store = _ref.store;
  // const imageSrc = require('../public/ccupnobg.png')
  var cups = [1, 2, 3, 4, 5];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "container-fluid mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-4 col-lg-4 p-0 mx-0 px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "card user-card",
    style: {
      backgroundColor: '#40312e'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card-header row justify-content-between p-0 m-0 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, type, " Pass"), __jsx("button", {
    className: "btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Redeem")), __jsx("div", {
    className: "card-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, store), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "row justify-content-around m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, cups.map(function (cup, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://static.vecteezy.com/system/resources/previews/005/656/694/original/take-away-coffee-cup-icon-in-doodle-style-sign-coffee-to-go-disposable-plastic-cup-fast-food-classic-paper-cup-isolated-on-white-background-logo-for-coffee-shop-vector.jpg",
      alt: "cups",
      style: {
        width: '50px',
        height: '50px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }));
  })), __jsx("div", {
    className: "row bg-c-blue counter-block m-t-10 p-20 justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  })), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "m-t-15 text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, " Days Remaining: 5")))))));
};

_c = Cards;
/* harmony default export */ __webpack_exports__["default"] = (Cards);

var _c;

$RefreshReg$(_c, "Cards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmRzIiwidHlwZSIsInN0b3JlIiwiY3VwcyIsImJhY2tncm91bmRDb2xvciIsIm1hcCIsImN1cCIsImluZGV4Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBcUI7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ2pDO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBYjtBQUNBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsZ0JBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRTtBQUFuQixLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFLLGFBQVMsRUFBQyxrREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSCxJQUFMLFVBREYsRUFFRTtBQUFRLGFBQVMsRUFBQyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsQ0FKRixFQVFFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0MsS0FBTCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBSUU7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDeEIsV0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBZSxTQUFHLEVBQUVBLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFNBQUcsRUFBQyx3UEFETjtBQUVFLFNBQUcsRUFBQyxNQUZOO0FBR0UsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxNQUFUO0FBQWlCQyxjQUFNLEVBQUU7QUFBekIsT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERjtBQVNELEdBVkEsQ0FESCxDQUpGLEVBaUJFO0FBQUssYUFBUyxFQUFDLGdFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWpCRixFQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLEVBcUJFO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBckJGLENBUkYsQ0FERixDQURGLENBREYsQ0FERixDQURGO0FBMENELENBN0NEOztLQUFNVCxLO0FBK0NTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVlMzg5ZDVmNzFkMzY4MjNhNjk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IENhcmRzID0gKHsgdHlwZSwgc3RvcmUgfSkgPT4ge1xuICAvLyBjb25zdCBpbWFnZVNyYyA9IHJlcXVpcmUoJy4uL3B1YmxpYy9jY3Vwbm9iZy5wbmcnKVxuICBjb25zdCBjdXBzID0gWzEsIDIsIDMsIDQsIDVdXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQgbXQtMyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00IGNvbC1sZy00IHAtMCBteC0wIHB4LTAnPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQgdXNlci1jYXJkJ1xuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNDAzMTJlJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1oZWFkZXIgcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHAtMCBtLTAgJz5cbiAgICAgICAgICAgICAgICA8aDU+e3R5cGV9IFBhc3M8L2g1PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4nPlJlZGVlbTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmxvY2snPlxuICAgICAgICAgICAgICAgIDxoNj57c3RvcmV9PC9oNj5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPSd0ZXh0LW11dGVkIG0tdC0xNSc+Q29mZmVlIEF2YWlsYWJsZTogNTwvcD4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIG0tMCc+XG4gICAgICAgICAgICAgICAgICB7Y3Vwcy5tYXAoKGN1cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL3N0YXRpYy52ZWN0ZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDUvNjU2LzY5NC9vcmlnaW5hbC90YWtlLWF3YXktY29mZmVlLWN1cC1pY29uLWluLWRvb2RsZS1zdHlsZS1zaWduLWNvZmZlZS10by1nby1kaXNwb3NhYmxlLXBsYXN0aWMtY3VwLWZhc3QtZm9vZC1jbGFzc2ljLXBhcGVyLWN1cC1pc29sYXRlZC1vbi13aGl0ZS1iYWNrZ3JvdW5kLWxvZ28tZm9yLWNvZmZlZS1zaG9wLXZlY3Rvci5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nY3VwcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnNTBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGJnLWMtYmx1ZSBjb3VudGVyLWJsb2NrIG0tdC0xMCBwLTIwIGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J20tdC0xNSB0ZXh0LW11dGVkJz4gRGF5cyBSZW1haW5pbmc6IDU8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNcbiJdLCJzb3VyY2VSb290IjoiIn0=