"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/components/Header.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Header.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst onLogout = ()=>{\n    localStorage.removeItem(\"userToken\"); // Clear token\n    localStorage.removeItem(\"username\"); // Clear stored username\n    router.push(\"/login\"); // Redirect to login page\n};\nconst Header = (param)=>{\n    let { username, onLogout, onToggleSidebar, sidebarOpen } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            padding: \"10px 20px\",\n            backgroundColor: \"#333\",\n            color: \"white\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onToggleSidebar,\n                style: {\n                    background: \"none\",\n                    border: \"none\",\n                    color: \"white\",\n                    cursor: \"pointer\",\n                    fontSize: \"24px\",\n                    transform: sidebarOpen ? \"translateX(250px)\" : \"translateX(0)\",\n                    transition: \"transform 0.3s ease-in-out\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"35px\",\n                            height: \"5px\",\n                            backgroundColor: \"white\",\n                            margin: \"6px 0\",\n                            transition: \"0.4s\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/components/Header.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"35px\",\n                            height: \"5px\",\n                            backgroundColor: \"white\",\n                            margin: \"6px 0\",\n                            transition: \"0.4s\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/components/Header.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"35px\",\n                            height: \"5px\",\n                            backgroundColor: \"white\",\n                            margin: \"6px 0\",\n                            transition: \"0.4s\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/components/Header.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/components/Header.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"OhmEV Dashboard - Welcome, \",\n                    username\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/components/Header.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onLogout,\n                className: \"logout-button\",\n                style: {\n                    backgroundColor: \"transparent\",\n                    border: \"none\",\n                    color: \"white\",\n                    cursor: \"pointer\",\n                    fontSize: \"16px\"\n                },\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/components/Header.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/components/Header.tsx\",\n        lineNumber: 11,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLFdBQVc7SUFDZkMsYUFBYUMsVUFBVSxDQUFDLGNBQWMsY0FBYztJQUNwREQsYUFBYUMsVUFBVSxDQUFDLGFBQWEsd0JBQXdCO0lBQzdEQyxPQUFPQyxJQUFJLENBQUMsV0FBVyx5QkFBeUI7QUFDbEQ7QUFFQSxNQUFNQyxTQUFTO1FBQUMsRUFBRUMsUUFBUSxFQUFFTixRQUFRLEVBQUVPLGVBQWUsRUFBRUMsV0FBVyxFQUFFO0lBQ2hFLHFCQUNFLDhEQUFDQztRQUFPQyxPQUFPO1lBQ1hDLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1lBQ1pDLFNBQVM7WUFDVEMsaUJBQWlCO1lBQ2pCQyxPQUFPO1FBQ1g7OzBCQUNFLDhEQUFDQztnQkFDQ0MsU0FBU1g7Z0JBQ1RHLE9BQU87b0JBQ0hTLFlBQVk7b0JBQ1pDLFFBQVE7b0JBQ1JKLE9BQU87b0JBQ1BLLFFBQVE7b0JBQ1JDLFVBQVU7b0JBQ1ZDLFdBQVdmLGNBQWMsc0JBQXNCO29CQUMvQ2dCLFlBQVk7Z0JBQ2hCOztrQ0FFQSw4REFBQ0M7d0JBQUlmLE9BQU87NEJBQUVnQixPQUFPOzRCQUFRQyxRQUFROzRCQUFPWixpQkFBaUI7NEJBQVNhLFFBQVE7NEJBQVNKLFlBQVk7d0JBQU87Ozs7OztrQ0FDMUcsOERBQUNDO3dCQUFJZixPQUFPOzRCQUFFZ0IsT0FBTzs0QkFBUUMsUUFBUTs0QkFBT1osaUJBQWlCOzRCQUFTYSxRQUFROzRCQUFTSixZQUFZO3dCQUFPOzs7Ozs7a0NBQzFHLDhEQUFDQzt3QkFBSWYsT0FBTzs0QkFBRWdCLE9BQU87NEJBQVFDLFFBQVE7NEJBQU9aLGlCQUFpQjs0QkFBU2EsUUFBUTs0QkFBU0osWUFBWTt3QkFBTzs7Ozs7Ozs7Ozs7OzBCQUU1Ryw4REFBQ0s7O29CQUFHO29CQUE0QnZCOzs7Ozs7OzBCQUNoQyw4REFBQ1c7Z0JBQU9DLFNBQVNsQjtnQkFBVThCLFdBQVU7Z0JBQWdCcEIsT0FBTztvQkFDeERLLGlCQUFpQjtvQkFDakJLLFFBQVE7b0JBQ1JKLE9BQU87b0JBQ1BLLFFBQVE7b0JBQ1JDLFVBQVU7Z0JBQ2Q7MEJBQUc7Ozs7Ozs7Ozs7OztBQUdUO0tBcENJakI7QUFzQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3g/OGZkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBvbkxvZ291dCA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJUb2tlbicpOyAvLyBDbGVhciB0b2tlblxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcm5hbWUnKTsgLy8gQ2xlYXIgc3RvcmVkIHVzZXJuYW1lXG4gIHJvdXRlci5wdXNoKCcvbG9naW4nKTsgLy8gUmVkaXJlY3QgdG8gbG9naW4gcGFnZVxufTtcblxuY29uc3QgSGVhZGVyID0gKHsgdXNlcm5hbWUsIG9uTG9nb3V0LCBvblRvZ2dsZVNpZGViYXIsIHNpZGViYXJPcGVuIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsIFxuICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDIwcHgnLCBcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJywgXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgIH19PlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlU2lkZWJhcn0gXG4gICAgICAgICAgc3R5bGU9e3sgXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJywgXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLCBcbiAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsIFxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJywgXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMjRweCcsIFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNpZGViYXJPcGVuID8gJ3RyYW5zbGF0ZVgoMjUwcHgpJyA6ICd0cmFuc2xhdGVYKDApJywgXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dCdcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzM1cHgnLCBoZWlnaHQ6ICc1cHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIG1hcmdpbjogJzZweCAwJywgdHJhbnNpdGlvbjogJzAuNHMnIH19PjwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICczNXB4JywgaGVpZ2h0OiAnNXB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBtYXJnaW46ICc2cHggMCcsIHRyYW5zaXRpb246ICcwLjRzJyB9fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMzVweCcsIGhlaWdodDogJzVweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbWFyZ2luOiAnNnB4IDAnLCB0cmFuc2l0aW9uOiAnMC40cycgfX0+PC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aDM+T2htRVYgRGFzaGJvYXJkIC0gV2VsY29tZSwge3VzZXJuYW1lfTwvaDM+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25Mb2dvdXR9IGNsYXNzTmFtZT1cImxvZ291dC1idXR0b25cIiBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4J1xuICAgICAgICB9fT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm9uTG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInJvdXRlciIsInB1c2giLCJIZWFkZXIiLCJ1c2VybmFtZSIsIm9uVG9nZ2xlU2lkZWJhciIsInNpZGViYXJPcGVuIiwiaGVhZGVyIiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYnV0dG9uIiwib25DbGljayIsImJhY2tncm91bmQiLCJib3JkZXIiLCJjdXJzb3IiLCJmb250U2l6ZSIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJkaXYiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImgzIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Header.tsx\n"));

/***/ })

});