webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/pages/_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








function MyApp(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem,
      user = _useContext.user,
      setUser = _useContext.setUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cart: cart
  }),
      state = _useState[0],
      setState = _useState[1];

  var Component = props.Component,
      pageProps = props.pageProps;

  setUser = function setUser(user) {
    setState({
      user: user
    });
  };

  addItem = function addItem(item) {
    var items = state.cart.items; //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    // we dont want to add the same item UI twice just the number property and price difference

    var foundItem = true;

    if (items.length > 0) {
      foundItem = items.find(function (i) {
        return i.id === item.id;
      });
      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    console.log("Found Item value: ".concat(JSON.stringify(foundItem))); // if item is not new, add to cart, set quantity to 1

    if (!foundItem) {
      //set quantity property to 1
      var temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.cart.items), [temp]),
        total: state.cart.total + item.price
      };
      setState({
        cart: newCart
      });
      console.log("Total items: ".concat(JSON.stringify(newCart)));
    } else {
      // we already have it so just increase quantity ++
      console.log("Total so far:  ".concat(state.cart.total));
      newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price
      };
    }

    setState({
      cart: newCart
    }); // problem is this is not updated yet

    console.log("state reset to cart:".concat(JSON.stringify(state)));
  };

  removeItem = function removeItem(item) {
    var items = state.cart.items; //check for item already in cart

    var foundItem = items.find(function (i) {
      return i.id === item.id;
    });

    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity - 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price
      }; //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      console.log("Try remove item ".concat(JSON.stringify(foundItem)));
      var index = items.findIndex(function (i) {
        return i.id === foundItem.id;
      });
      items.splice(index, 1);
      var newCart = {
        items: items,
        total: state.cart.total - item.price
      };
    }

    setState({
      cart: newCart
    });
  };

  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: {
      cart: state.cart,
      addItem: addItem,
      removeItem: removeItem,
      isAuthenticated: false,
      user: null,
      setUser: function setUser() {}
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, ' ', __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "container m-0 p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }))));
}

_s(MyApp, "0uoHFV+lB8Ch75c38zIt7ZJVV+U=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIml0ZW0iLCJpdGVtcyIsImZvdW5kSXRlbSIsImxlbmd0aCIsImZpbmQiLCJpIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJwYXJzZSIsInF1YW50aXR5IiwibmV3Q2FydCIsInRvdGFsIiwicHJpY2UiLCJtYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImlzQXV0aGVudGljYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQSxvQkFDK0JDLHdEQUFVLENBQUNDLDJEQUFELENBRHpDO0FBQUEsTUFDZEMsSUFEYyxlQUNkQSxJQURjO0FBQUEsTUFDUkMsT0FEUSxlQUNSQSxPQURRO0FBQUEsTUFDQ0MsVUFERCxlQUNDQSxVQUREO0FBQUEsTUFDYUMsSUFEYixlQUNhQSxJQURiO0FBQUEsTUFDbUJDLE9BRG5CLGVBQ21CQSxPQURuQjs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQztBQUFFTCxRQUFJLEVBQUVBO0FBQVIsR0FBRCxDQUZkO0FBQUEsTUFFYk0sS0FGYTtBQUFBLE1BRU5DLFFBRk07O0FBQUEsTUFHWkMsU0FIWSxHQUdhWCxLQUhiLENBR1pXLFNBSFk7QUFBQSxNQUdEQyxTQUhDLEdBR2FaLEtBSGIsQ0FHRFksU0FIQzs7QUFLcEJMLFNBQU8sR0FBRyxp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SyxDQUFDTixJQURQO0FBRUxDLGFBQU8sRUFBRUEsT0FGSjtBQUdMQyxnQkFBVSxFQUFFQSxVQUhQO0FBSUwrQixxQkFBZSxFQUFFLEtBSlo7QUFLTDlCLFVBQUksRUFBRSxJQUxEO0FBTUxDLGFBQU8sRUFBRSxtQkFBTSxDQUFFO0FBTlosS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUUsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csR0FESCxFQUVFLGtFQUZGLEVBR0U7QUFDRSxPQUFHLEVBQUMsWUFETjtBQUVFLFFBQUksRUFBQyx1RUFGUDtBQUdFLGFBQVMsRUFBQyx5RUFIWjtBQUlFLGVBQVcsRUFBQyxXQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQVZGLEVBcUJFLE1BQUMsMERBQUQ7QUFBUSxhQUFTLEVBQUMsbUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQseUZBQWVLLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBckJGLENBREY7QUEyQkQ7O0dBekdRYixLOztLQUFBQSxLO0FBMkdNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjlmNmM1YzJmZDcyZDNjNTU4YjFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRleHQnXG5pbXBvcnQgSG9tZSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJ1xuXG5mdW5jdGlvbiBNeUFwcChwcm9wcykge1xuICB2YXIgeyBjYXJ0LCBhZGRJdGVtLCByZW1vdmVJdGVtLCB1c2VyLCBzZXRVc2VyIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBjYXJ0OiBjYXJ0IH0pXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzXG5cbiAgc2V0VXNlciA9ICh1c2VyKSA9PiB7XG4gICAgc2V0U3RhdGUoeyB1c2VyIH0pXG4gIH1cblxuICBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydFxuICAgIC8vY2hlY2sgZm9yIGl0ZW0gYWxyZWFkeSBpbiBjYXJ0XG4gICAgLy9pZiBub3QgaW4gY2FydCwgYWRkIGl0ZW0gaWYgaXRlbSBpcyBmb3VuZCBpbmNyZWFzZSBxdWFuaXR5ICsrXG4gICAgLy8gd2UgZG9udCB3YW50IHRvIGFkZCB0aGUgc2FtZSBpdGVtIFVJIHR3aWNlIGp1c3QgdGhlIG51bWJlciBwcm9wZXJ0eSBhbmQgcHJpY2UgZGlmZmVyZW5jZVxuICAgIGxldCBmb3VuZEl0ZW0gPSB0cnVlXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpXG5cbiAgICAgIGlmICghZm91bmRJdGVtKSBmb3VuZEl0ZW0gPSBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3VuZEl0ZW0gPSBmYWxzZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgRm91bmQgSXRlbSB2YWx1ZTogJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApXG4gICAgLy8gaWYgaXRlbSBpcyBub3QgbmV3LCBhZGQgdG8gY2FydCwgc2V0IHF1YW50aXR5IHRvIDFcbiAgICBpZiAoIWZvdW5kSXRlbSkge1xuICAgICAgLy9zZXQgcXVhbnRpdHkgcHJvcGVydHkgdG8gMVxuXG4gICAgICBsZXQgdGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG4gICAgICB0ZW1wLnF1YW50aXR5ID0gMVxuICAgICAgdmFyIG5ld0NhcnQgPSB7XG4gICAgICAgIGl0ZW1zOiBbLi4uc3RhdGUuY2FydC5pdGVtcywgdGVtcF0sXG4gICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcbiAgICAgIH1cbiAgICAgIHNldFN0YXRlKHsgY2FydDogbmV3Q2FydCB9KVxuICAgICAgY29uc29sZS5sb2coYFRvdGFsIGl0ZW1zOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIGFscmVhZHkgaGF2ZSBpdCBzbyBqdXN0IGluY3JlYXNlIHF1YW50aXR5ICsrXG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgc28gZmFyOiAgJHtzdGF0ZS5jYXJ0LnRvdGFsfWApXG4gICAgICBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgfVxuICAgIH1cbiAgICBzZXRTdGF0ZSh7IGNhcnQ6IG5ld0NhcnQgfSkgLy8gcHJvYmxlbSBpcyB0aGlzIGlzIG5vdCB1cGRhdGVkIHlldFxuICAgIGNvbnNvbGUubG9nKGBzdGF0ZSByZXNldCB0byBjYXJ0OiR7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfWApXG4gIH1cbiAgcmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnRcbiAgICAvL2NoZWNrIGZvciBpdGVtIGFscmVhZHkgaW4gY2FydFxuICAgIGNvbnN0IGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpXG4gICAgaWYgKGZvdW5kSXRlbS5xdWFudGl0eSA+IDEpIHtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgLSAxIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgLSBpdGVtLnByaWNlLFxuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhgTmV3Q2FydCBhZnRlciByZW1vdmU6ICR7SlNPTi5zdHJpbmdpZnkobmV3Q2FydCl9YClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb25seSAxIGluIHRoZSBjYXJ0IHNvIHJlbW92ZSB0aGUgd2hvbGUgaXRlbVxuICAgICAgY29uc29sZS5sb2coYFRyeSByZW1vdmUgaXRlbSAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YClcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpKSA9PiBpLmlkID09PSBmb3VuZEl0ZW0uaWQpXG4gICAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB2YXIgbmV3Q2FydCA9IHsgaXRlbXM6IGl0ZW1zLCB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UgfVxuICAgIH1cbiAgICBzZXRTdGF0ZSh7IGNhcnQ6IG5ld0NhcnQgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNhcnQ6IHN0YXRlLmNhcnQsXG4gICAgICAgIGFkZEl0ZW06IGFkZEl0ZW0sXG4gICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgIHNldFVzZXI6ICgpID0+IHt9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgeycgJ31cbiAgICAgICAgPD57LyogQ0ROIGZvciByZWFjdHN0cmFwKi99PC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzcydcbiAgICAgICAgICBpbnRlZ3JpdHk9J3NoYTM4NC1HbjUzODR4cVExYW9XWEErMDU4UlhQeFBnNmZ5NElXdlROaDBFMjYzWG1GY0psU0F3aUdnRkFXL2RBaVM2SlhtJ1xuICAgICAgICAgIGNyb3NzT3JpZ2luPSdhbm9ueW1vdXMnXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPSdjb250YWluZXIgbS0wIHAtMCc+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==