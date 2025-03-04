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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(pages-dir-browser)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-browser)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"(pages-dir-browser)/./components/meetups/NewMeetupForm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst NewMeetupPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const addMeetupHandler = async (meetupData)=>{\n        const response = await fetch(\"/api/new-meetup\", {\n            method: \"POST\",\n            body: JSON.stringify(meetupData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (!response.ok) {\n            throw new Error(\"Something went wrong!\");\n        }\n        const data = await response.json();\n        console.log(data);\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Add a New Meetup\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\drumm\\\\AWebProjects\\\\reactUdemy\\\\25c after diff router 06-onwards-to-a-bigger-project-starter\\\\pages\\\\new-meetup\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Add your own meetups and create amazing networking opportunities.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\drumm\\\\AWebProjects\\\\reactUdemy\\\\25c after diff router 06-onwards-to-a-bigger-project-starter\\\\pages\\\\new-meetup\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\drumm\\\\AWebProjects\\\\reactUdemy\\\\25c after diff router 06-onwards-to-a-bigger-project-starter\\\\pages\\\\new-meetup\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onAddMeetup: addMeetupHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\drumm\\\\AWebProjects\\\\reactUdemy\\\\25c after diff router 06-onwards-to-a-bigger-project-starter\\\\pages\\\\new-meetup\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(NewMeetupPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NewMeetupPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewMeetupPage);\nvar _c;\n$RefreshReg$(_c, \"NewMeetupPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL3BhZ2VzL25ldy1tZWV0dXAvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBQzJCO0FBRW5FLE1BQU1HLGdCQUFnQjs7SUFDcEIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCLE1BQU1JLG1CQUFtQixPQUFPQztRQUM5QixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sbUJBQW1CO1lBQzlDQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047WUFDckJPLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFFQSxJQUFJLENBQUNOLFNBQVNPLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFFQSxNQUFNQyxPQUFPLE1BQU1ULFNBQVNVLElBQUk7UUFFaENDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFFWlosT0FBT2dCLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQU87OzBCQUNQLDhEQUFDcEIsa0RBQUlBOztrQ0FDSCw4REFBQ3FCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBR1osOERBQUN0Qix5RUFBYUE7Z0JBQUN1QixhQUFhcEI7Ozs7Ozs7O0FBRTlCO0dBakNNRjs7UUFDV0Ysa0RBQVNBOzs7S0FEcEJFO0FBbUNOLGlFQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGRydW1tXFxBV2ViUHJvamVjdHNcXHJlYWN0VWRlbXlcXDI1YyBhZnRlciBkaWZmIHJvdXRlciAwNi1vbndhcmRzLXRvLWEtYmlnZ2VyLXByb2plY3Qtc3RhcnRlclxccGFnZXNcXG5ldy1tZWV0dXBcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtXCI7XG5cbmNvbnN0IE5ld01lZXR1cFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGFkZE1lZXR1cEhhbmRsZXIgPSBhc3luYyAobWVldHVwRGF0YSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL25ldy1tZWV0dXBcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lZXR1cERhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIHJldHVybiA8PlxuICA8SGVhZD5cbiAgICA8dGl0bGU+QWRkIGEgTmV3IE1lZXR1cDwvdGl0bGU+XG4gICAgPG1ldGFcbiAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICBjb250ZW50PVwiQWRkIHlvdXIgb3duIG1lZXR1cHMgYW5kIGNyZWF0ZSBhbWF6aW5nIG5ldHdvcmtpbmcgb3Bwb3J0dW5pdGllcy5cIlxuICAgIC8+XG4gIDwvSGVhZD5cbiAgPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE1lZXR1cEhhbmRsZXJ9IC8+PC8+XG4gIDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cFBhZ2U7XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsIk5ld01lZXR1cEZvcm0iLCJOZXdNZWV0dXBQYWdlIiwicm91dGVyIiwiYWRkTWVldHVwSGFuZGxlciIsIm1lZXR1cERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm9uQWRkTWVldHVwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./pages/new-meetup/index.js\n"));

/***/ })

});