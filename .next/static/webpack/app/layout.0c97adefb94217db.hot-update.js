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

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9uYXZpZ2F0aW9uLmpzPzJiZmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/app/layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/app/layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sidebar */ \"(app-pages-browser)/./src/app/components/Sidebar.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ \"(app-pages-browser)/./src/app/components/Header.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RootLayout = (param)=>{\n    let { children, user } = param;\n    _s();\n    const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const storedUsername = localStorage.getItem(\"username\");\n        if (storedUsername) {\n            setUsername(storedUsername);\n        } else {\n        // Optionally handle no username found, e.g., redirect to login\n        }\n    }, []);\n    const handleLogout = ()=>{\n        console.log(\"Logging out...\");\n        localStorage.removeItem(\"userToken\");\n        localStorage.removeItem(\"username\");\n        // Redirect to login or perform other cleanup\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"].push;\n    };\n    const toggleSidebar = ()=>{\n        setSidebarOpen(!sidebarOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Ohm Base\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/layout.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Is anyone gonna read this?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/layout.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/layout.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default().className),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        username: username || \"Guest\",\n                        onLogout: handleLogout,\n                        onToggleSidebar: toggleSidebar,\n                        sidebarOpen: sidebarOpen\n                    }, void 0, false, {\n                        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/layout.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        isOpen: sidebarOpen\n                    }, void 0, false, {\n                        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/layout.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        style: {\n                            paddingLeft: sidebarOpen ? \"250px\" : \"0\",\n                            transition: \"padding-left 0.3s ease-in-out\"\n                        },\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/layout.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RootLayout, \"DI/cEthoh+HcuQHx8wWlQ8FGV2E=\");\n_c = RootLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RootLayout);\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUU1BO0FBUHVCO0FBQ2M7QUFDRjtBQUNVO0FBRWQ7QUFJckMsTUFBTVEsYUFBYTtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFOztJQUNwQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1TLGlCQUFpQkMsYUFBYUMsT0FBTyxDQUFDO1FBQzVDLElBQUlGLGdCQUFnQjtZQUNsQkQsWUFBWUM7UUFDZCxPQUFPO1FBQ0wsK0RBQStEO1FBQ2pFO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUcsZUFBZTtRQUNuQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1pKLGFBQWFLLFVBQVUsQ0FBQztRQUN4QkwsYUFBYUssVUFBVSxDQUFDO1FBQ3hCLDZDQUE2QztRQUM3Q2QsNERBQVc7SUFDYjtJQUVBLE1BQU1nQixnQkFBZ0I7UUFDcEJYLGVBQWUsQ0FBQ0Q7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ2E7OzBCQUNDLDhEQUFDdkIsa0RBQUlBOztrQ0FDSCw4REFBQ3dCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRW5DLDhEQUFDQztnQkFBS0MsV0FBVzlCLCtKQUFlOztrQ0FDaEMsOERBQUNHLDBEQUFNQTt3QkFBQ1UsVUFBVUEsWUFBWTt3QkFBU2tCLFVBQVViO3dCQUFjYyxpQkFBaUJUO3dCQUFlWixhQUFhQTs7Ozs7O2tDQUM1Ryw4REFBQ1QsMkRBQU9BO3dCQUFDK0IsUUFBUXRCOzs7Ozs7a0NBQ2pCLDhEQUFDdUI7d0JBQUtDLE9BQU87NEJBQUVDLGFBQWF6QixjQUFjLFVBQVU7NEJBQUswQixZQUFZO3dCQUFnQztrQ0FDbEc1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Q7R0F4Q01EO0tBQUFBO0FBMENOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGF5b3V0LnRzeD81N2E5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9jb21wb25lbnRzL1NpZGViYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuY29uc3QgUm9vdExheW91dCA9ICh7IGNoaWxkcmVuLCB1c2VyIH0pID0+IHtcbiAgY29uc3QgW3NpZGViYXJPcGVuLCBzZXRTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkVXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKTtcbiAgICBpZiAoc3RvcmVkVXNlcm5hbWUpIHtcbiAgICAgIHNldFVzZXJuYW1lKHN0b3JlZFVzZXJuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3B0aW9uYWxseSBoYW5kbGUgbm8gdXNlcm5hbWUgZm91bmQsIGUuZy4sIHJlZGlyZWN0IHRvIGxvZ2luXG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdMb2dnaW5nIG91dC4uLicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyVG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcm5hbWUnKTtcbiAgICAvLyBSZWRpcmVjdCB0byBsb2dpbiBvciBwZXJmb3JtIG90aGVyIGNsZWFudXBcbiAgICBSb3V0ZXIucHVzaFxuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgc2V0U2lkZWJhck9wZW4oIXNpZGViYXJPcGVuKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5PaG0gQmFzZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJJcyBhbnlvbmUgZ29ubmEgcmVhZCB0aGlzP1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+IFxuICAgICAgPEhlYWRlciB1c2VybmFtZT17dXNlcm5hbWUgfHwgJ0d1ZXN0J30gb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH0gb25Ub2dnbGVTaWRlYmFyPXt0b2dnbGVTaWRlYmFyfSBzaWRlYmFyT3Blbj17c2lkZWJhck9wZW59IC8+XG4gICAgICA8U2lkZWJhciBpc09wZW49e3NpZGViYXJPcGVufSAvPlxuICAgICAgPG1haW4gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IHNpZGViYXJPcGVuID8gJzI1MHB4JyA6ICcwJywgdHJhbnNpdGlvbjogJ3BhZGRpbmctbGVmdCAwLjNzIGVhc2UtaW4tb3V0JyB9fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3RMYXlvdXQ7Il0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIlNpZGViYXIiLCJIZWFkZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwidXNlciIsInNpZGViYXJPcGVuIiwic2V0U2lkZWJhck9wZW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic3RvcmVkVXNlcm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlTG9nb3V0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iLCJwdXNoIiwidG9nZ2xlU2lkZWJhciIsImh0bWwiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImJvZHkiLCJjbGFzc05hbWUiLCJvbkxvZ291dCIsIm9uVG9nZ2xlU2lkZWJhciIsImlzT3BlbiIsIm1haW4iLCJzdHlsZSIsInBhZGRpbmdMZWZ0IiwidHJhbnNpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});