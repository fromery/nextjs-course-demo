"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new-meetup",{

/***/ "(pages-dir-browser)/./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"(pages-dir-browser)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"(pages-dir-browser)/./components/meetups/NewMeetupForm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst NewMeetupPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const addMeetupHandler = async (meetupData)=>{\n        const response = await fetch(\"/api/new-meetup\", {\n            method: \"POST\",\n            body: JSON.stringify(meetupData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (!response.ok) {\n            throw new Error(\"Something went wrong!\");\n        }\n        const data = await response.json();\n        console.log(data);\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Head, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drumm\\\\AWebProjects\\\\reactUdemy\\\\25c after diff router 06-onwards-to-a-bigger-project-starter\\\\pages\\\\new-meetup\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onAddMeetup: addMeetupHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drumm\\\\AWebProjects\\\\reactUdemy\\\\25c after diff router 06-onwards-to-a-bigger-project-starter\\\\pages\\\\new-meetup\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(NewMeetupPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = NewMeetupPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewMeetupPage);\nvar _c;\n$RefreshReg$(_c, \"NewMeetupPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL3BhZ2VzL25ldy1tZWV0dXAvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDMkI7QUFFbkUsTUFBTUUsZ0JBQWdCOztJQUNwQixNQUFNQyxTQUFTSCxzREFBU0E7SUFFeEIsTUFBTUksbUJBQW1CLE9BQU9DO1FBQzlCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxtQkFBbUI7WUFDOUNDLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTjtZQUNyQk8sU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtRQUVBLElBQUksQ0FBQ04sU0FBU08sRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUVBLE1BQU1DLE9BQU8sTUFBTVQsU0FBU1UsSUFBSTtRQUVoQ0MsUUFBUUMsR0FBRyxDQUFDSDtRQUVaWixPQUFPZ0IsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFBTzs7MEJBQ1AsOERBQUNDOzs7OzswQkFDRCw4REFBQ25CLHlFQUFhQTtnQkFBQ29CLGFBQWFqQjs7Ozs7Ozs7QUFFOUI7R0EzQk1GOztRQUNXRixrREFBU0E7OztLQURwQkU7QUE2Qk4saUVBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZHJ1bW1cXEFXZWJQcm9qZWN0c1xccmVhY3RVZGVteVxcMjVjIGFmdGVyIGRpZmYgcm91dGVyIDA2LW9ud2FyZHMtdG8tYS1iaWdnZXItcHJvamVjdC1zdGFydGVyXFxwYWdlc1xcbmV3LW1lZXR1cFxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm1cIjtcblxuY29uc3QgTmV3TWVldHVwUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgYWRkTWVldHVwSGFuZGxlciA9IGFzeW5jIChtZWV0dXBEYXRhKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbmV3LW1lZXR1cFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobWVldHVwRGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgcmV0dXJuIDw+XG4gIDxIZWFkPjwvSGVhZD5cbiAgPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE1lZXR1cEhhbmRsZXJ9IC8+PC8+XG4gIDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTmV3TWVldHVwRm9ybSIsIk5ld01lZXR1cFBhZ2UiLCJyb3V0ZXIiLCJhZGRNZWV0dXBIYW5kbGVyIiwibWVldHVwRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIkhlYWQiLCJvbkFkZE1lZXR1cCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./pages/new-meetup/index.js\n"));

/***/ })

});