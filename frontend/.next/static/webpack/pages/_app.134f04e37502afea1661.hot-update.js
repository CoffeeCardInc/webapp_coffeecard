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
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Hi! This project is currently under construction")), __jsx("div", {
    className: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, " Local Caf\xE9s"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, " Search "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    onChange: function onChange(e) {
      return setQuery(e.target.value.toLocaleLowerCase());
    },
    value: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    search: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, " "));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b0xvY2FsZUxvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ2QsTUFBTUMsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBQW5EO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixnQkFBb0JMLE9BQXBCOztBQUZjLGtCQUdZTSxzREFBUSxDQUFDLEVBQUQsQ0FIcEI7QUFBQSxNQUdQQyxLQUhPO0FBQUEsTUFHQUMsUUFIQTs7QUFJZCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsdURBQUosQ0FBYTtBQUFFQyxPQUFHLFlBQUtYLE9BQUw7QUFBTCxHQUFiLENBQWI7QUFDQSxNQUFNWSxLQUFLLEdBQUcsSUFBSUMsNERBQUosRUFBZDtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQywyREFBSixDQUFpQjtBQUFFTixRQUFJLEVBQUpBLElBQUY7QUFBUUcsU0FBSyxFQUFMQTtBQUFSLEdBQWpCLENBQWY7QUFFQSxTQUNFLE1BQUMsNkRBQUQ7QUFBZ0IsVUFBTSxFQUFFRSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTyxTQUFLLEVBQUMsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQURGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUUsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFpQixhQUFTLEVBQUMsUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFLE1BQUMsZ0RBQUQ7QUFDRSxZQUFRLEVBQUUsa0JBQUNFLENBQUQ7QUFBQSxhQUFPUixRQUFRLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLGlCQUFmLEVBQUQsQ0FBZjtBQUFBLEtBRFo7QUFFRSxTQUFLLEVBQUVaLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FORixFQWlCRSxNQUFDLGtFQUFEO0FBQWdCLFVBQU0sRUFBRUEsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixFQWtCRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FsQkYsQ0FERjtBQXNCRDs7R0E5QlFSLEk7O0tBQUFBLEk7QUErQk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTM0ZjA0ZTM3NTAyYWZlYTE2NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJ0J1xuaW1wb3J0IHtcbiAgQXBvbGxvUHJvdmlkZXIsXG4gIEFwb2xsb0NsaWVudCxcbiAgSHR0cExpbmssXG4gIEluTWVtb3J5Q2FjaGUsXG59IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IFJlc3RhdXJhbnRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdGF1cmFudExpc3QnXG5pbXBvcnQgeyBBbGVydCwgSW5wdXRHcm91cCwgSW5wdXRHcm91cEFkZG9uLCBJbnB1dCB9IGZyb20gJ3JlYWN0c3RyYXAnXG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjEzMzcnXG4gIGNvbnNvbGUubG9nKGBVUkw6ICR7QVBJX1VSTH1gKVxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBsaW5rID0gbmV3IEh0dHBMaW5rKHsgdXJpOiBgJHtBUElfVVJMfS9ncmFwaHFsYCB9KVxuICBjb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKClcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7IGxpbmssIGNhY2hlIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0IGNvbG9yPSdwcmltYXJ5Jz5cbiAgICAgICAgICBIaSEgVGhpcyBwcm9qZWN0IGlzIGN1cnJlbnRseSB1bmRlciBjb25zdHJ1Y3Rpb25cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XG4gICAgICAgIDxoMj4gTG9jYWwgQ2Fmw6lzPC9oMj5cbiAgICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9J2FwcGVuZCc+IFNlYXJjaCA8L0lucHV0R3JvdXBBZGRvbj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSl9XG4gICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFJlc3RhdXJhbnRMaXN0IHNlYXJjaD17cXVlcnl9IC8+XG4gICAgICA8Q2FydD4gPC9DYXJ0PlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=