"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "(pages-dir-browser)/./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: () => (/* binding */ __N_SSG),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"(pages-dir-browser)/./components/meetups/MeetupList.js\");\n\n\nconst DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"This is a first meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Meetupstreet 5, 12345 Meetup City\",\n        description: \"This is a first, amazing meetup which you definitely should not miss. It will be a great success!\"\n    },\n    {\n        id: \"m2\",\n        title: \"This is a second meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Meetupstreet 5, 12345 Meetup City\",\n        description: \"This is a second, amazing meetup which you definitely should not miss. It will be a great success!\"\n    }\n];\nconst HomePage = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\drumm\\\\AWebProjects\\\\reactUdemy\\\\25c after diff router 06-onwards-to-a-bigger-project-starter\\\\pages\\\\index.js\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, undefined);\n};\n_c = HomePage;\nvar __N_SSG = true;\n// export const getServerSideProps = async (context) => {\n//   const req = context.req;\n//   const res = context.res;\n//   // fetch data from an API\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//   };\n// };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL3BhZ2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUwRDtBQUUxRCxNQUFNQyxnQkFBZ0I7SUFDcEI7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQ0U7UUFDRkMsU0FBUztRQUNUQyxhQUNFO0lBQ0o7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FDRTtRQUNGQyxTQUFTO1FBQ1RDLGFBQ0U7SUFDSjtDQUNEO0FBRUQsTUFBTUMsV0FBVyxDQUFDQztJQUNoQixxQkFBTyw4REFBQ1Isc0VBQVVBO1FBQUNTLFNBQVNELE1BQU1DLE9BQU87Ozs7OztBQUMzQztLQUZNRjs7QUEwQk4seURBQXlEO0FBQ3pELDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFFN0IsOEJBQThCO0FBRTlCLGFBQWE7QUFDYixlQUFlO0FBQ2YsZ0NBQWdDO0FBQ2hDLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUVMLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGRydW1tXFxBV2ViUHJvamVjdHNcXHJlYWN0VWRlbXlcXDI1YyBhZnRlciBkaWZmIHJvdXRlciAwNi1vbndhcmRzLXRvLWEtYmlnZ2VyLXByb2plY3Qtc3RhcnRlclxccGFnZXNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5cbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xuXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xuICB7XG4gICAgaWQ6IFwibTFcIixcbiAgICB0aXRsZTogXCJUaGlzIGlzIGEgZmlyc3QgbWVldHVwXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIixcbiAgICBhZGRyZXNzOiBcIk1lZXR1cHN0cmVldCA1LCAxMjM0NSBNZWV0dXAgQ2l0eVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGlzIGEgZmlyc3QsIGFtYXppbmcgbWVldHVwIHdoaWNoIHlvdSBkZWZpbml0ZWx5IHNob3VsZCBub3QgbWlzcy4gSXQgd2lsbCBiZSBhIGdyZWF0IHN1Y2Nlc3MhXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJtMlwiLFxuICAgIHRpdGxlOiBcIlRoaXMgaXMgYSBzZWNvbmQgbWVldHVwXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIixcbiAgICBhZGRyZXNzOiBcIk1lZXR1cHN0cmVldCA1LCAxMjM0NSBNZWV0dXAgQ2l0eVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGlzIGEgc2Vjb25kLCBhbWF6aW5nIG1lZXR1cCB3aGljaCB5b3UgZGVmaW5pdGVseSBzaG91bGQgbm90IG1pc3MuIEl0IHdpbGwgYmUgYSBncmVhdCBzdWNjZXNzIVwiLFxuICB9LFxuXTtcblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXG5cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vc29rb2w6c29rb2xOZXh0SlNAY2x1c3RlcjAuMjNjN20ubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMFwiXG4gICk7XG5cbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTsgXG5cbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcblxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcblxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxMCxcbiAgfTtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XG5cbi8vICAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXG4vLyAgICAgfSxcbi8vICAgfTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIk1lZXR1cExpc3QiLCJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./pages/index.js\n"));

/***/ })

});