"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Confirm.js":
/*!*******************************!*\
  !*** ./components/Confirm.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Confirm = ()=>{\n    _s();\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggle = ()=>setModal(!modal);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center mx-auto\",\n        style: {\n            paddingTop: \"120px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: toggle,\n                className: \"btn col-10\",\n                style: {\n                    backgroundColor: \"#fff\",\n                    color: \"#40312e\"\n                },\n                children: \"Redeem\"\n            }, void 0, false, {\n                fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Confirm.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                isOpen: modal,\n                toggle: toggle,\n                centered: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {\n                        toggle: toggle,\n                        className: \" text-center\",\n                        children: \"Redeem Your Cup\"\n                    }, void 0, false, {\n                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Confirm.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.ModalBody, {\n                        children: \"Are your sure you want to redeem this cup now? Once your order is activated it will be available for use for the next 10 minutes.\"\n                    }, void 0, false, {\n                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Confirm.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/cup\",\n                                className: \"col-sm-6 p-1 m-0 col-lg-6 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    onClick: toggle,\n                                    className: \"col-sm-6 col-lg-11 \",\n                                    style: {\n                                        backgroundColor: \"#6a513b\",\n                                        color: \"white\"\n                                    },\n                                    children: \"Confirm\"\n                                }, void 0, false, {\n                                    fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Confirm.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Confirm.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                className: \"col-sm-6 p-1 m-0 col-lg-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    onClick: toggle,\n                                    className: \"col-sm-6 col-lg-11 \",\n                                    style: {\n                                        backgroundColor: \"#6a513b\",\n                                        color: \"white\"\n                                    },\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Confirm.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Confirm.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Confirm.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Confirm.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Confirm.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Confirm, \"FxRBWQPa/dKnwvdbY5qed8chvVc=\");\n_c = Confirm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Confirm);\nvar _c;\n$RefreshReg$(_c, \"Confirm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbmZpcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDd0M7QUFDbkQ7QUFFNUIsTUFBTVEsVUFBVSxJQUFNOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUN4QyxNQUFNVSxTQUFTLElBQU1ELFNBQVMsQ0FBQ0Q7SUFFL0IscUJBQ0UsOERBQUNHO1FBQ0NDLFdBQVU7UUFDVkMsT0FBTztZQUFFQyxZQUFZO1FBQVE7OzBCQUU3Qiw4REFBQ2IsOENBQU1BO2dCQUNMYyxTQUFTTDtnQkFDVEUsV0FBVTtnQkFDVkMsT0FBTztvQkFBRUcsaUJBQWlCO29CQUFRQyxPQUFPO2dCQUFVOzBCQUNwRDs7Ozs7OzBCQUdELDhEQUFDZiw2Q0FBS0E7Z0JBQUNnQixRQUFRVjtnQkFBT0UsUUFBUUE7Z0JBQVFTLFFBQVE7O2tDQUM1Qyw4REFBQ2hCLG1EQUFXQTt3QkFBQ08sUUFBUUE7d0JBQVFFLFdBQVU7a0NBQWU7Ozs7OztrQ0FHdEQsOERBQUNSLGlEQUFTQTtrQ0FBQzs7Ozs7O2tDQUlYLDhEQUFDQyxtREFBV0E7OzBDQUNWLDhEQUFDQyxrREFBSUE7Z0NBQUNjLE1BQUs7Z0NBQU9SLFdBQVU7MENBQzFCLDRFQUFDWCw4Q0FBTUE7b0NBQ0xjLFNBQVNMO29DQUNURSxXQUFVO29DQUNWQyxPQUFPO3dDQUFFRyxpQkFBaUI7d0NBQVdDLE9BQU87b0NBQVE7OENBQ3JEOzs7Ozs7Ozs7OzswQ0FLSCw4REFBQ1gsa0RBQUlBO2dDQUFDYyxNQUFLO2dDQUFJUixXQUFVOzBDQUN2Qiw0RUFBQ1gsOENBQU1BO29DQUNMYyxTQUFTTDtvQ0FDVEUsV0FBVTtvQ0FDVkMsT0FBTzt3Q0FBRUcsaUJBQWlCO3dDQUFXQyxPQUFPO29DQUFROzhDQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQWhETVY7S0FBQUE7QUFrRE4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25maXJtLmpzP2M2OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IENvbmZpcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldE1vZGFsKCFtb2RhbClcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXgtYXV0bydcbiAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcxMjBweCcgfX1cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cbiAgICAgICAgY2xhc3NOYW1lPSdidG4gY29sLTEwJ1xuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgY29sb3I6ICcjNDAzMTJlJyB9fVxuICAgICAgPlxuICAgICAgICBSZWRlZW1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPE1vZGFsIGlzT3Blbj17bW9kYWx9IHRvZ2dsZT17dG9nZ2xlfSBjZW50ZXJlZD5cbiAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dG9nZ2xlfSBjbGFzc05hbWU9JyB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgUmVkZWVtIFlvdXIgQ3VwXG4gICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgQXJlIHlvdXIgc3VyZSB5b3Ugd2FudCB0byByZWRlZW0gdGhpcyBjdXAgbm93PyBPbmNlIHlvdXIgb3JkZXIgaXNcbiAgICAgICAgICBhY3RpdmF0ZWQgaXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yIHVzZSBmb3IgdGhlIG5leHQgMTAgbWludXRlcy5cbiAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgIDxNb2RhbEZvb3Rlcj5cbiAgICAgICAgICA8TGluayBocmVmPScvY3VwJyBjbGFzc05hbWU9J2NvbC1zbS02IHAtMSBtLTAgY29sLWxnLTYgJz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvbC1zbS02IGNvbC1sZy0xMSAnXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM2YTUxM2InLCBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8TGluayBocmVmPScvJyBjbGFzc05hbWU9J2NvbC1zbS02IHAtMSBtLTAgY29sLWxnLTYnPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nY29sLXNtLTYgY29sLWxnLTExICdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzZhNTEzYicsIGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIk1vZGFsIiwiTW9kYWxIZWFkZXIiLCJNb2RhbEJvZHkiLCJNb2RhbEZvb3RlciIsIkxpbmsiLCJDb25maXJtIiwibW9kYWwiLCJzZXRNb2RhbCIsInRvZ2dsZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImlzT3BlbiIsImNlbnRlcmVkIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Confirm.js\n"));

/***/ })

});