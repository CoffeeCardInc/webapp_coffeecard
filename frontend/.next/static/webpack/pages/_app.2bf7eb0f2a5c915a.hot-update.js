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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./styles/globals.css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./styles/globals.css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/getUrl.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_cup2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/cup2.jpg */ \"./public/cup2.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_cup2_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  /* background-color: var(--color-lightbrown); */\\n}\\n\\n:root {\\n  --color-primary: #000000;\\n  --color-secondary: #40312e;\\n  --color-coffee: #6a513b;\\n  --color-white: #ffffff;\\n  --color-lightbrown: #fffdf1;\\n  --box-shadow-1: 0 3px 15px rgba(0, 0, 0, 0.2);\\n  --background-image-1: linear-gradient(\\n    to bottom,\\n    #fffdf1,\\n    #f9f6e2,\\n    #fef7cf,\\n    #d8d1a5,\\n    #c6bc82\\n  );\\n}\\n\\n.bg-img {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-position: center;\\n  box-shadow: var(--box-shadow-1);\\n}\\n\\n/* LANDING */\\n\\n.ld-btn {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 200px;\\n  align-items: center;\\n}\\n\\n/*BUTTON STYLE*/\\n.btn-style {\\n  background-color: '#6a513b';\\n  color: 'white';\\n}\\n\\n/*Spinner*/\\n\\n.spinner {\\n  animation: spinner 6s linear infinite;\\n}\\n\\n@keyframes spinner {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n/*Navbar*/\\n\\n.navbar-toggler {\\n  border: none;\\n}\\n\\n/*CUP page*/\\n\\n.box {\\n  position: relative;\\n  background: #40312e;\\n  outline: 0;\\n  overflow: hidden;\\n  /* border-bottom-right-radius: 5px;\\n  border-bottom-left-radius: 5px; */\\n  color: var(--color-white);\\n}\\n\\n.box::before {\\n  /* content: 'fill'; */\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.box::after {\\n  content: '';\\n  position: absolute;\\n  height: 700px;\\n  width: 700px;\\n  background-color: white;\\n  bottom: -50%;\\n  left: -50%;\\n  border-radius: 40%;\\n  animation: spin 6s ease-in-out infinite;\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: translateY(0) rotate(0deg);\\n  }\\n  100% {\\n    transform: translateY(-100%) rotate(500deg);\\n  }\\n}\\n\\n/*CARDS*/\\n\\n.cards {\\n}\\n\\n.card:not(:first-child) {\\n  margin-top: -10rem;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAU;EACV,SAAS;EACT;wEACsE;AACxE;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,+CAA+C;AACjD;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,2BAA2B;EAC3B,6CAA6C;EAC7C;;;;;;;GAOC;AACH;;AAEA;EACE,yDAA2C;EAC3C,sBAAsB;EACtB,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA,YAAY;;AAEZ;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;AACrB;;AAEA,eAAe;AACf;EACE,2BAA2B;EAC3B,cAAc;AAChB;;AAEA,UAAU;;AAEV;EACE,qCAAqC;AACvC;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA,SAAS;;AAET;EACE,YAAY;AACd;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,gBAAgB;EAChB;mCACiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE;IACE,qCAAqC;EACvC;EACA;IACE,2CAA2C;EAC7C;AACF;;AAEA,QAAQ;;AAER;AACA;;AAEA;EACE,kBAAkB;AACpB\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  /* background-color: var(--color-lightbrown); */\\n}\\n\\n:root {\\n  --color-primary: #000000;\\n  --color-secondary: #40312e;\\n  --color-coffee: #6a513b;\\n  --color-white: #ffffff;\\n  --color-lightbrown: #fffdf1;\\n  --box-shadow-1: 0 3px 15px rgba(0, 0, 0, 0.2);\\n  --background-image-1: linear-gradient(\\n    to bottom,\\n    #fffdf1,\\n    #f9f6e2,\\n    #fef7cf,\\n    #d8d1a5,\\n    #c6bc82\\n  );\\n}\\n\\n.bg-img {\\n  background-image: url('../public/cup2.jpg');\\n  background-size: cover;\\n  background-position: center;\\n  box-shadow: var(--box-shadow-1);\\n}\\n\\n/* LANDING */\\n\\n.ld-btn {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 200px;\\n  align-items: center;\\n}\\n\\n/*BUTTON STYLE*/\\n.btn-style {\\n  background-color: '#6a513b';\\n  color: 'white';\\n}\\n\\n/*Spinner*/\\n\\n.spinner {\\n  animation: spinner 6s linear infinite;\\n}\\n\\n@keyframes spinner {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n/*Navbar*/\\n\\n.navbar-toggler {\\n  border: none;\\n}\\n\\n/*CUP page*/\\n\\n.box {\\n  position: relative;\\n  background: #40312e;\\n  outline: 0;\\n  overflow: hidden;\\n  /* border-bottom-right-radius: 5px;\\n  border-bottom-left-radius: 5px; */\\n  color: var(--color-white);\\n}\\n\\n.box::before {\\n  /* content: 'fill'; */\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.box::after {\\n  content: '';\\n  position: absolute;\\n  height: 700px;\\n  width: 700px;\\n  background-color: white;\\n  bottom: -50%;\\n  left: -50%;\\n  border-radius: 40%;\\n  animation: spin 6s ease-in-out infinite;\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: translateY(0) rotate(0deg);\\n  }\\n  100% {\\n    transform: translateY(-100%) rotate(500deg);\\n  }\\n}\\n\\n/*CARDS*/\\n\\n.cards {\\n}\\n\\n.card:not(:first-child) {\\n  margin-top: -10rem;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOV0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ3dIO0FBQ087QUFDaEU7QUFDL0QsOEJBQThCLGtIQUEyQjtBQUN6RCx5Q0FBeUMscUhBQStCLENBQUMsNkNBQTZCO0FBQ3RHO0FBQ0EsdURBQXVELGVBQWUsY0FBYyx3SkFBd0osR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyxPQUFPLDJCQUEyQixrREFBa0QsS0FBSyxXQUFXLDZCQUE2QiwrQkFBK0IsNEJBQTRCLDJCQUEyQixnQ0FBZ0Msa0RBQWtELHFJQUFxSSxHQUFHLGFBQWEsc0VBQXNFLDJCQUEyQixnQ0FBZ0Msb0NBQW9DLEdBQUcsOEJBQThCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLGtCQUFrQix3QkFBd0IsR0FBRyxrQ0FBa0MsZ0NBQWdDLG1CQUFtQixHQUFHLDZCQUE2QiwwQ0FBMEMsR0FBRyx3QkFBd0IsUUFBUSw4QkFBOEIsS0FBSyxVQUFVLGdDQUFnQyxLQUFLLEdBQUcsbUNBQW1DLGlCQUFpQixHQUFHLDBCQUEwQix1QkFBdUIsd0JBQXdCLGVBQWUscUJBQXFCLHVDQUF1QyxvQ0FBb0MsZ0NBQWdDLEdBQUcsa0JBQWtCLHdCQUF3QixrQkFBa0IsaUJBQWlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsaUJBQWlCLGdCQUFnQix1QkFBdUIsa0JBQWtCLGlCQUFpQiw0QkFBNEIsaUJBQWlCLGVBQWUsdUJBQXVCLDRDQUE0QyxHQUFHLHFCQUFxQixRQUFRLDRDQUE0QyxLQUFLLFVBQVUsa0RBQWtELEtBQUssR0FBRyx5QkFBeUIsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsU0FBUyxvRkFBb0YsVUFBVSxVQUFVLEtBQUssT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSx1Q0FBdUMsZUFBZSxjQUFjLHdKQUF3SixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLE9BQU8sMkJBQTJCLGtEQUFrRCxLQUFLLFdBQVcsNkJBQTZCLCtCQUErQiw0QkFBNEIsMkJBQTJCLGdDQUFnQyxrREFBa0QscUlBQXFJLEdBQUcsYUFBYSxnREFBZ0QsMkJBQTJCLGdDQUFnQyxvQ0FBb0MsR0FBRyw4QkFBOEIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsa0JBQWtCLHdCQUF3QixHQUFHLGtDQUFrQyxnQ0FBZ0MsbUJBQW1CLEdBQUcsNkJBQTZCLDBDQUEwQyxHQUFHLHdCQUF3QixRQUFRLDhCQUE4QixLQUFLLFVBQVUsZ0NBQWdDLEtBQUssR0FBRyxtQ0FBbUMsaUJBQWlCLEdBQUcsMEJBQTBCLHVCQUF1Qix3QkFBd0IsZUFBZSxxQkFBcUIsdUNBQXVDLG9DQUFvQyxnQ0FBZ0MsR0FBRyxrQkFBa0Isd0JBQXdCLGtCQUFrQixpQkFBaUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxpQkFBaUIsZ0JBQWdCLHVCQUF1QixrQkFBa0IsaUJBQWlCLDRCQUE0QixpQkFBaUIsZUFBZSx1QkFBdUIsNENBQTRDLEdBQUcscUJBQXFCLFFBQVEsNENBQTRDLEtBQUssVUFBVSxrREFBa0QsS0FBSyxHQUFHLHlCQUF5QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxxQkFBcUI7QUFDOXlLO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzRiNTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9wdWJsaWMvY3VwMi5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0YnJvd24pOyAqL1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXByaW1hcnk6ICMwMDAwMDA7XFxuICAtLWNvbG9yLXNlY29uZGFyeTogIzQwMzEyZTtcXG4gIC0tY29sb3ItY29mZmVlOiAjNmE1MTNiO1xcbiAgLS1jb2xvci13aGl0ZTogI2ZmZmZmZjtcXG4gIC0tY29sb3ItbGlnaHRicm93bjogI2ZmZmRmMTtcXG4gIC0tYm94LXNoYWRvdy0xOiAwIDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIC0tYmFja2dyb3VuZC1pbWFnZS0xOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGJvdHRvbSxcXG4gICAgI2ZmZmRmMSxcXG4gICAgI2Y5ZjZlMixcXG4gICAgI2ZlZjdjZixcXG4gICAgI2Q4ZDFhNSxcXG4gICAgI2M2YmM4MlxcbiAgKTtcXG59XFxuXFxuLmJnLWltZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctMSk7XFxufVxcblxcbi8qIExBTkRJTkcgKi9cXG5cXG4ubGQtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qQlVUVE9OIFNUWUxFKi9cXG4uYnRuLXN0eWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICcjNmE1MTNiJztcXG4gIGNvbG9yOiAnd2hpdGUnO1xcbn1cXG5cXG4vKlNwaW5uZXIqL1xcblxcbi5zcGlubmVyIHtcXG4gIGFuaW1hdGlvbjogc3Bpbm5lciA2cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbm5lciB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi8qTmF2YmFyKi9cXG5cXG4ubmF2YmFyLXRvZ2dsZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKkNVUCBwYWdlKi9cXG5cXG4uYm94IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICM0MDMxMmU7XFxuICBvdXRsaW5lOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7ICovXFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbn1cXG5cXG4uYm94OjpiZWZvcmUge1xcbiAgLyogY29udGVudDogJ2ZpbGwnOyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm94OjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogNzAwcHg7XFxuICB3aWR0aDogNzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvdHRvbTogLTUwJTtcXG4gIGxlZnQ6IC01MCU7XFxuICBib3JkZXItcmFkaXVzOiA0MCU7XFxuICBhbmltYXRpb246IHNwaW4gNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSByb3RhdGUoNTAwZGVnKTtcXG4gIH1cXG59XFxuXFxuLypDQVJEUyovXFxuXFxuLmNhcmRzIHtcXG59XFxuXFxuLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgbWFyZ2luLXRvcDogLTEwcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFVBQVU7RUFDVixTQUFTO0VBQ1Q7d0VBQ3NFO0FBQ3hFOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDZDQUE2QztFQUM3Qzs7Ozs7OztHQU9DO0FBQ0g7O0FBRUE7RUFDRSx5REFBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiwrQkFBK0I7QUFDakM7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UsWUFBWTtBQUNkOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEI7bUNBQ2lDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztFQUNBO0lBQ0UsMkNBQTJDO0VBQzdDO0FBQ0Y7O0FBRUEsUUFBUTs7QUFFUjtBQUNBOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHRicm93bik7ICovXFxufVxcblxcbjpyb290IHtcXG4gIC0tY29sb3ItcHJpbWFyeTogIzAwMDAwMDtcXG4gIC0tY29sb3Itc2Vjb25kYXJ5OiAjNDAzMTJlO1xcbiAgLS1jb2xvci1jb2ZmZWU6ICM2YTUxM2I7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcbiAgLS1jb2xvci1saWdodGJyb3duOiAjZmZmZGYxO1xcbiAgLS1ib3gtc2hhZG93LTE6IDAgM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgLS1iYWNrZ3JvdW5kLWltYWdlLTE6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gYm90dG9tLFxcbiAgICAjZmZmZGYxLFxcbiAgICAjZjlmNmUyLFxcbiAgICAjZmVmN2NmLFxcbiAgICAjZDhkMWE1LFxcbiAgICAjYzZiYzgyXFxuICApO1xcbn1cXG5cXG4uYmctaW1nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL2N1cDIuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy0xKTtcXG59XFxuXFxuLyogTEFORElORyAqL1xcblxcbi5sZC1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLypCVVRUT04gU1RZTEUqL1xcbi5idG4tc3R5bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJyM2YTUxM2InO1xcbiAgY29sb3I6ICd3aGl0ZSc7XFxufVxcblxcbi8qU3Bpbm5lciovXFxuXFxuLnNwaW5uZXIge1xcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDZzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGlubmVyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLypOYXZiYXIqL1xcblxcbi5uYXZiYXItdG9nZ2xlciB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi8qQ1VQIHBhZ2UqL1xcblxcbi5ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogIzQwMzEyZTtcXG4gIG91dGxpbmU6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDsgKi9cXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbi5ib3g6OmJlZm9yZSB7XFxuICAvKiBjb250ZW50OiAnZmlsbCc7ICovXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib3g6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiA3MDBweDtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm90dG9tOiAtNTAlO1xcbiAgbGVmdDogLTUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDQwJTtcXG4gIGFuaW1hdGlvbjogc3BpbiA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHJvdGF0ZSg1MDBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKkNBUkRTKi9cXG5cXG4uY2FyZHMge1xcbn1cXG5cXG4uY2FyZDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBtYXJnaW4tdG9wOiAtMTByZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./styles/globals.css\n"));

/***/ })

});