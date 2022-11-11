webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cart */ "./components/cart.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _components_restaurantList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/restaurantList */ "./components/restaurantList.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Landing */ "./components/Landing.js");
var _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/pages/index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Home() {
  _s();

  var API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
  console.log("URL: ".concat(API_URL));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      query = _useState[0],
      setQuery = _useState[1];

  var link = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
    uri: "".concat(API_URL, "/graphql")
  });
  var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]();
  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
    link: link,
    cache: cache
  });
  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
    client: client,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })));
}

_s(Home, "qO/HZodsWTfJhuzZtdaxiosei2U=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUNkLE1BQU1DLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLHVCQUFuRDtBQUNBQyxTQUFPLENBQUNDLEdBQVIsZ0JBQW9CTCxPQUFwQjs7QUFGYyxrQkFHWU0sc0RBQVEsQ0FBQyxFQUFELENBSHBCO0FBQUEsTUFHUEMsS0FITztBQUFBLE1BR0FDLFFBSEE7O0FBSWQsTUFBTUMsSUFBSSxHQUFHLElBQUlDLHVEQUFKLENBQWE7QUFBRUMsT0FBRyxZQUFLWCxPQUFMO0FBQUwsR0FBYixDQUFiO0FBQ0EsTUFBTVksS0FBSyxHQUFHLElBQUlDLDREQUFKLEVBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFBRU4sUUFBSSxFQUFKQSxJQUFGO0FBQVFHLFNBQUssRUFBTEE7QUFBUixHQUFqQixDQUFmO0FBRUEsU0FDRSxNQUFDLDZEQUFEO0FBQWdCLFVBQU0sRUFBRUUsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FjRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixDQURGLENBREY7QUFzQkQ7O0dBOUJRZixJOztLQUFBQSxJO0FBK0JNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNlNjI3ZThhOTA1YmVkNTRlMGRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2FydCdcbmltcG9ydCB7XG4gIEFwb2xsb1Byb3ZpZGVyLFxuICBBcG9sbG9DbGllbnQsXG4gIEh0dHBMaW5rLFxuICBJbk1lbW9yeUNhY2hlLFxufSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCBSZXN0YXVyYW50TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3RhdXJhbnRMaXN0J1xuaW1wb3J0IHsgQWxlcnQsIElucHV0R3JvdXAsIElucHV0R3JvdXBBZGRvbiwgSW5wdXQgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IExhbmRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5kaW5nJ1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J1xuICBjb25zb2xlLmxvZyhgVVJMOiAke0FQSV9VUkx9YClcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgbGluayA9IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX1VSTH0vZ3JhcGhxbGAgfSlcbiAgY29uc3QgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSgpXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoeyBsaW5rLCBjYWNoZSB9KVxuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiA8QWxlcnQgY29sb3I9J3ByaW1hcnknPlxuICAgICAgICAgIEhpISBUaGlzIHByb2plY3QgaXMgY3VycmVudGx5IHVuZGVyIGNvbnN0cnVjdGlvblxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJz5cbiAgICAgICAgPGgyPiBMb2NhbCBDYWbDqXM8L2gyPlxuICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT0nYXBwZW5kJz4gU2VhcmNoIDwvSW5wdXRHcm91cEFkZG9uPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKX1cbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lucHV0R3JvdXA+ICovfVxuICAgICAgICA8TGFuZGluZyAvPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxSZXN0YXVyYW50TGlzdCBzZWFyY2g9e3F1ZXJ5fSAvPiAqL31cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9