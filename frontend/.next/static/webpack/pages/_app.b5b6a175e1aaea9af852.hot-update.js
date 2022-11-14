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
  var cups = [1, 2, 3, 4, 5];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "container-fluid mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-4 col-lg-4 p-0 mx-0 px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "card user-card bg-img",
    style: {
      backgroundColor: '#6a513b',
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "card-header row justify-content-between p-0 m-0 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, type, " Pass"), __jsx("button", {
    className: "btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Redeem")), __jsx("div", {
    className: "card-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, store), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "row justify-content-around m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, cups.map(function (cup, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "https://o.remove.bg/downloads/31c6a214-d1b9-4914-ac72-5a340cef6197/take-away-coffee-cup-icon-in-doodle-style-sign-coffee-to-go-disposable-plastic-cup-fast-food-classic-paper-cup-isolated-on-white-background-logo-for-coffee-shop-vector-removebg-preview.png",
      alt: "cups",
      style: {
        width: '50px',
        height: '50px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }));
  })), __jsx("div", {
    className: "row bg-c-blue counter-block m-t-10 p-20 justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }
  })), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "m-t-15 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmRzIiwidHlwZSIsInN0b3JlIiwiY3VwcyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFwIiwiY3VwIiwiaW5kZXgiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFxQjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDakMsTUFBTUMsSUFBSSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBYjtBQUNBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsdUJBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRSxTQUFuQjtBQUE4QkMsV0FBSyxFQUFFO0FBQXJDLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxFQUFDLGtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtKLElBQUwsVUFERixFQUVFO0FBQVEsYUFBUyxFQUFDLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixDQUpGLEVBUUU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQyxLQUFMLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFJRTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUN4QixXQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFlLFNBQUcsRUFBRUEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFDLGlRQUROO0FBRUUsU0FBRyxFQUFDLE1BRk47QUFHRSxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGNBQU0sRUFBRTtBQUF6QixPQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGO0FBU0QsR0FWQSxDQURILENBSkYsRUFpQkU7QUFBSyxhQUFTLEVBQUMsZ0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakJGLEVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkYsRUFxQkU7QUFBRyxhQUFTLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXJCRixDQVJGLENBREYsQ0FERixDQURGLENBREYsQ0FERjtBQTBDRCxDQTVDRDs7S0FBTVYsSztBQThDU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iNWI2YTE3NWUxYWFlYTlhZjg1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBDYXJkcyA9ICh7IHR5cGUsIHN0b3JlIH0pID0+IHtcbiAgY29uc3QgY3VwcyA9IFsxLCAyLCAzLCA0LCA1XVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkIG10LTMnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCBjb2wtbGctNCBwLTAgbXgtMCBweC0wJz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXJkIHVzZXItY2FyZCBiZy1pbWcnXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM2YTUxM2InLCBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1oZWFkZXIgcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHAtMCBtLTAgJz5cbiAgICAgICAgICAgICAgICA8aDU+e3R5cGV9IFBhc3M8L2g1PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4nPlJlZGVlbTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYmxvY2snPlxuICAgICAgICAgICAgICAgIDxoNj57c3RvcmV9PC9oNj5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPSd0ZXh0LW11dGVkIG0tdC0xNSc+Q29mZmVlIEF2YWlsYWJsZTogNTwvcD4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIG0tMCc+XG4gICAgICAgICAgICAgICAgICB7Y3Vwcy5tYXAoKGN1cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL28ucmVtb3ZlLmJnL2Rvd25sb2Fkcy8zMWM2YTIxNC1kMWI5LTQ5MTQtYWM3Mi01YTM0MGNlZjYxOTcvdGFrZS1hd2F5LWNvZmZlZS1jdXAtaWNvbi1pbi1kb29kbGUtc3R5bGUtc2lnbi1jb2ZmZWUtdG8tZ28tZGlzcG9zYWJsZS1wbGFzdGljLWN1cC1mYXN0LWZvb2QtY2xhc3NpYy1wYXBlci1jdXAtaXNvbGF0ZWQtb24td2hpdGUtYmFja2dyb3VuZC1sb2dvLWZvci1jb2ZmZWUtc2hvcC12ZWN0b3ItcmVtb3ZlYmctcHJldmlldy5wbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nY3VwcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnNTBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGJnLWMtYmx1ZSBjb3VudGVyLWJsb2NrIG0tdC0xMCBwLTIwIGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC00Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J20tdC0xNSAnPiBEYXlzIFJlbWFpbmluZzogNTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==