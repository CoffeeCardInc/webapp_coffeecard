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
    className: "card user-card",
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
      src: "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmRzIiwidHlwZSIsInN0b3JlIiwiY3VwcyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFwIiwiY3VwIiwiaW5kZXgiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFxQjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDakMsTUFBTUMsSUFBSSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBYjtBQUNBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsZ0JBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRSxTQUFuQjtBQUE4QkMsV0FBSyxFQUFFO0FBQXJDLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxFQUFDLGtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtKLElBQUwsVUFERixFQUVFO0FBQVEsYUFBUyxFQUFDLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixDQUpGLEVBUUU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQyxLQUFMLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFJRTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUN4QixXQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFlLFNBQUcsRUFBRUEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsU0FBRyxFQUFDLEVBRE47QUFFRSxTQUFHLEVBQUMsTUFGTjtBQUdFLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUUsTUFBVDtBQUFpQkMsY0FBTSxFQUFFO0FBQXpCLE9BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFTRCxHQVZBLENBREgsQ0FKRixFQWlCRTtBQUFLLGFBQVMsRUFBQyxnRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FqQkYsRUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCRixFQXFCRTtBQUFHLGFBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBckJGLENBUkYsQ0FERixDQURGLENBREYsQ0FERixDQURGO0FBMENELENBNUNEOztLQUFNVixLO0FBOENTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmEyOWU2NzMxNTQ1MzMzNzZjYjk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IENhcmRzID0gKHsgdHlwZSwgc3RvcmUgfSkgPT4ge1xuICBjb25zdCBjdXBzID0gWzEsIDIsIDMsIDQsIDVdXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQgbXQtMyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00IGNvbC1sZy00IHAtMCBteC0wIHB4LTAnPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcmQgdXNlci1jYXJkJ1xuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNmE1MTNiJywgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyIHJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwLTAgbS0wICc+XG4gICAgICAgICAgICAgICAgPGg1Pnt0eXBlfSBQYXNzPC9oNT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuJz5SZWRlZW08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJsb2NrJz5cbiAgICAgICAgICAgICAgICA8aDY+e3N0b3JlfTwvaDY+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCBtLXQtMTUnPkNvZmZlZSBBdmFpbGFibGU6IDU8L3A+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWFyb3VuZCBtLTAnPlxuICAgICAgICAgICAgICAgICAge2N1cHMubWFwKChjdXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2N1cHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGhlaWdodDogJzUwcHgnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBiZy1jLWJsdWUgY291bnRlci1ibG9jayBtLXQtMTAgcC0yMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNCc+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtLXQtMTUgJz4gRGF5cyBSZW1haW5pbmc6IDU8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNcbiJdLCJzb3VyY2VSb290IjoiIn0=