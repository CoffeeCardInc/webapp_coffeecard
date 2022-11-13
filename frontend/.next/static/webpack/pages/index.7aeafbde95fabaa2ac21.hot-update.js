webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
var _this = undefined,
    _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Landing = function Landing() {
  var loggedIn = true;
  var cups = [1, 2, 3, 4, 5];

  switch (loggedIn) {
    case false:
      return __jsx("section", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row align-items-center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-md-12 p-0 bg-img shadow-lg rounded",
        style: {
          height: '450px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "col text-col mt-5",
        style: {
          fontSize: '18px',
          letterSpacing: '.1rem'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }
      }, __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }
      }, "Your most refined ritual yet."), __jsx("br", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "about-text-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 19
        }
      }, "CoffeeCard empowers local coffee shops to turn their customers into reoccuring subscribers."), __jsx("div", {
        className: "d-sm-flex flex-column align-items-center justify-content-around",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/login",
        className: "nav-item nav-link",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }, __jsx("button", {
        className: "btn col-md-12 col-lg-3 mt-4",
        style: {
          backgroundColor: '#40312e',
          color: 'white'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 23
        }
      }, "Log In")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/register",
        className: "nav-item nav-link",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }
      }, __jsx("button", {
        className: "btn col-md-12 col-lg-3 mt-4",
        style: {
          backgroundColor: '#40312e',
          color: 'white'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 23
        }
      }, "Join"))))))));

    default:
      return __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 14
        }
      });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nLmpzIl0sIm5hbWVzIjpbIkxhbmRpbmciLCJsb2dnZWRJbiIsImN1cHMiLCJoZWlnaHQiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixNQUFNQyxRQUFRLEdBQUcsSUFBakI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFiOztBQUVBLFVBQVFELFFBQVI7QUFDRSxTQUFLLEtBQUw7QUFDRSxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLGlCQUFTLEVBQUMsd0NBRFo7QUFFRSxhQUFLLEVBQUU7QUFBRUUsZ0JBQU0sRUFBRTtBQUFWLFNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBS0U7QUFDRSxpQkFBUyxFQUFDLG1CQURaO0FBRUUsYUFBSyxFQUFFO0FBQUVDLGtCQUFRLEVBQUUsTUFBWjtBQUFvQkMsdUJBQWEsRUFBRTtBQUFuQyxTQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUdBREYsRUFLRTtBQUFLLGlCQUFTLEVBQUMsaUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFvQixpQkFBUyxFQUFDLG1CQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxpQkFBUyxFQUFDLDZCQURaO0FBRUUsYUFBSyxFQUFFO0FBQUVDLHlCQUFlLEVBQUUsU0FBbkI7QUFBOEJDLGVBQUssRUFBRTtBQUFyQyxTQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixFQVNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUF1QixpQkFBUyxFQUFDLG1CQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxpQkFBUyxFQUFDLDZCQURaO0FBRUUsYUFBSyxFQUFFO0FBQUVELHlCQUFlLEVBQUUsU0FBbkI7QUFBOEJDLGVBQUssRUFBRTtBQUFyQyxTQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FURixDQUxGLENBTkYsQ0FMRixDQURGLENBREYsQ0FERjs7QUE0Q0Y7QUFDRSxhQUFPLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBL0NKO0FBaURELENBckREOztLQUFNUCxPO0FBdURTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YWVhZmJkZTk1ZmFiYWEyYWMyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IENhcmRzIGZyb20gJy4vQ2FyZCdcblxuY29uc3QgTGFuZGluZyA9ICgpID0+IHtcbiAgY29uc3QgbG9nZ2VkSW4gPSB0cnVlXG4gIGNvbnN0IGN1cHMgPSBbMSwgMiwgMywgNCwgNV1cblxuICBzd2l0Y2ggKGxvZ2dlZEluKSB7XG4gICAgY2FzZSBmYWxzZTpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvbC1tZC0xMiBwLTAgYmctaW1nIHNoYWRvdy1sZyByb3VuZGVkJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzQ1MHB4JyB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvbCB0ZXh0LWNvbCBtdC01J1xuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMThweCcsIGxldHRlclNwYWNpbmc6ICcuMXJlbScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMj5Zb3VyIG1vc3QgcmVmaW5lZCByaXR1YWwgeWV0LjwvaDI+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWJvdXQtdGV4dC0yJz5cbiAgICAgICAgICAgICAgICAgICAgQ29mZmVlQ2FyZCBlbXBvd2VycyBsb2NhbCBjb2ZmZWUgc2hvcHMgdG8gdHVybiB0aGVpclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lcnMgaW50byByZW9jY3VyaW5nIHN1YnNjcmliZXJzLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Qtc20tZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWFyb3VuZCc+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9sb2dpbicgY2xhc3NOYW1lPSduYXYtaXRlbSBuYXYtbGluayc+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gY29sLW1kLTEyIGNvbC1sZy0zIG10LTQnXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNDAzMTJlJywgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgSW5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcmVnaXN0ZXInIGNsYXNzTmFtZT0nbmF2LWl0ZW0gbmF2LWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGNvbC1tZC0xMiBjb2wtbGctMyBtdC00J1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzQwMzEyZScsIGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgSm9pblxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiA8Q2FyZHMgLz5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nXG4iXSwic291cmNlUm9vdCI6IiJ9