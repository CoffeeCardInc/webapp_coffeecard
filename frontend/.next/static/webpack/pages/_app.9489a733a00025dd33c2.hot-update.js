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


var Cards = function Cards() {
  // const imageSrc = require('../public/ccupnobg.png')
  var cups = [1, 2, 3, 4];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "container-fluid",
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
    className: "col-md-4 col-lg-4 p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "card user-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card-header row justify-content-between p-0 m-0 ",
    style: {
      backgroundColor: '#fff'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Espresso Pass"), __jsx("button", {
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
  }, "Froth"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "row ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmRzIiwiY3VwcyIsImJhY2tncm91bmRDb2xvciIsIm1hcCIsImN1cCIsImluZGV4Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQjtBQUNBLE1BQU1DLElBQUksR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBYjtBQUNBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGtEQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUU7QUFBbkIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixFQUtFO0FBQVEsYUFBUyxFQUFDLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBSUU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUN4QixXQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFlLFNBQUcsRUFBRUEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFDLHdQQUROO0FBRUUsU0FBRyxFQUFDLE1BRk47QUFHRSxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGNBQU0sRUFBRTtBQUF6QixPQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGO0FBU0QsR0FWQSxDQURILENBSkYsRUFpQkU7QUFBSyxhQUFTLEVBQUMsZ0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakJGLEVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkYsRUFxQkU7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFyQkYsQ0FSRixDQURGLENBREYsQ0FERixDQURGLENBREY7QUEwQ0QsQ0E3Q0Q7O0tBQU1QLEs7QUErQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTQ4OWE3MzNhMDAwMjVkZDMzYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgQ2FyZHMgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IGltYWdlU3JjID0gcmVxdWlyZSgnLi4vcHVibGljL2NjdXBub2JnLnBuZycpXG4gIGNvbnN0IGN1cHMgPSBbMSwgMiwgMywgNF1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00IGNvbC1sZy00IHAtMCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCB1c2VyLWNhcmQnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkLWhlYWRlciByb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gcC0wIG0tMCAnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoNT5Fc3ByZXNzbyBQYXNzPC9oNT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuJz5SZWRlZW08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJsb2NrJz5cbiAgICAgICAgICAgICAgICA8aDY+RnJvdGg8L2g2PlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9J3RleHQtbXV0ZWQgbS10LTE1Jz5Db2ZmZWUgQXZhaWxhYmxlOiA1PC9wPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93ICc+XG4gICAgICAgICAgICAgICAgICB7Y3Vwcy5tYXAoKGN1cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL3N0YXRpYy52ZWN0ZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDUvNjU2LzY5NC9vcmlnaW5hbC90YWtlLWF3YXktY29mZmVlLWN1cC1pY29uLWluLWRvb2RsZS1zdHlsZS1zaWduLWNvZmZlZS10by1nby1kaXNwb3NhYmxlLXBsYXN0aWMtY3VwLWZhc3QtZm9vZC1jbGFzc2ljLXBhcGVyLWN1cC1pc29sYXRlZC1vbi13aGl0ZS1iYWNrZ3JvdW5kLWxvZ28tZm9yLWNvZmZlZS1zaG9wLXZlY3Rvci5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nY3VwcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnNTBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGJnLWMtYmx1ZSBjb3VudGVyLWJsb2NrIG0tdC0xMCBwLTIwIGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J20tdC0xNSB0ZXh0LW11dGVkJz4gRGF5cyBSZW1haW5pbmc6IDU8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNcbiJdLCJzb3VyY2VSb290IjoiIn0=