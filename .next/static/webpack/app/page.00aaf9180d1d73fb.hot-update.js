"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _ailments_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ailments.json */ \"(app-pages-browser)/./ailments.json\");\n/* harmony import */ var _components_ChargerDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ChargerDetails */ \"(app-pages-browser)/./src/app/components/ChargerDetails.tsx\");\n/* harmony import */ var _components_SummaryStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SummaryStats */ \"(app-pages-browser)/./src/app/components/SummaryStats.tsx\");\n/* harmony import */ var _components_SiteListView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SiteListView */ \"(app-pages-browser)/./src/app/components/SiteListView.tsx\");\n/* harmony import */ var _components_SiteSummaryStats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SiteSummaryStats */ \"(app-pages-browser)/./src/app/components/SiteSummaryStats.tsx\");\n/* harmony import */ var _components_ChargerGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ChargerGrid */ \"(app-pages-browser)/./src/app/components/ChargerGrid.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // This will be a new component\n\n\nfunction Home() {\n    _s();\n    const [ailmentsData, setAilmentsData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [selectedChargerID, setSelectedChargerID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [siteAilments, setSiteAilments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [chargerIssueCount, setChargerIssueCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [selectedSite, setSelectedSite] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [sitesWithIssues, setSitesWithIssues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const storedUsername = \"admin\";\n    //localStorage.getItem('username');\n    const chargerImages = {\n        \"Admin-HQ-Charger-002\": \"https://m.media-amazon.com/images/I/61qyH+7K6AL._AC_UF894,1000_QL80_.jpg\",\n        \"Admin-Second-Site-Charger-001\": \"https://www.cnet.com/a/img/resize/e8aca7d90e5a230e42be7262df1dfa76163e67d5/hub/2022/03/07/64ae327b-4478-4893-b46b-49a15920a35e/dsc02028.jpg?auto=webp&width=1920\",\n        \"Admin-HQ-Charger-003\": \"https://cyberswitching.com/wp-content/uploads/2022/06/Dual-Charger-scaled-e1656358174762.jpg\",\n        \"Admin-HQ-Charger-001\": \"https://m.media-amazon.com/images/I/61ZBEiQ1EVL.jpg\",\n        \"Admin-Second-Site-Charger-002\": \"https://evocharge.com/wp-content/uploads/2021/02/GettyImages-1249775796.jpg\",\n        \"Admin-Second-Site-Charger-003\": \"https://m.media-amazon.com/images/I/71exSgr9XWL._AC_UF894,1000_QL80_.jpg\"\n    };\n    const summaryData = {\n        totalIssues: 9,\n        chargersDown: 2,\n        uptime: \"93%\",\n        lastSiteIssueTime: \"Yesterday 16:24\"\n    };\n    const handleChargerSelection = (chargerID)=>{\n        setSelectedChargerID(chargerID); // To use for displaying the full biography\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!storedUsername) {\n            router.push(\"/login\");\n            return;\n        }\n        // Filter ailments based on the logged-in user's clientID\n        const userAilments = _ailments_json__WEBPACK_IMPORTED_MODULE_4__.filter((ailment)=>ailment.clientID === storedUsername);\n        setAilmentsData(userAilments);\n        // Aggregate issue counts per site\n        const siteIssueCounts = userAilments.reduce((acc, ailment)=>{\n            const siteKey = ailment.siteID; // Correcting to 'site' from 'siteID'\n            if (acc[siteKey]) {\n                acc[siteKey]++;\n            } else {\n                acc[siteKey] = 1;\n            }\n            return acc;\n        }, {});\n        // Transform the object into an array suitable for the SiteListView component\n        const sites = Object.keys(siteIssueCounts).map((siteID)=>({\n                siteID,\n                issues: siteIssueCounts[siteID]\n            }));\n        setSitesWithIssues(sites);\n        if (selectedSite) {\n            const issuesAtSite = userAilments.filter((ailment)=>ailment.siteID === selectedSite);\n            const chargersWithIssues = new Set(issuesAtSite.map((ailment)=>ailment.chargerID));\n            setChargerIssueCount(chargersWithIssues.size);\n            setSiteAilments(issuesAtSite);\n        }\n        setLoading(false);\n    }, [\n        selectedSite,\n        ailmentsData,\n        storedUsername\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n            lineNumber: 109,\n            columnNumber: 12\n        }, this);\n    }\n    const chargerOptions = ailmentsData.filter((ailment)=>ailment.siteID === selectedSite).map((ailment)=>ailment.chargerID).filter((value, index, self)=>self.indexOf(value) === index);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-3d5e9a6c2e73de67\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-3d5e9a6c2e73de67\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SummaryStats__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        ailments: ailmentsData\n                    }, void 0, false, {\n                        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-3d5e9a6c2e73de67\" + \" \" + \"site-selection\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SiteListView__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                sites: sitesWithIssues,\n                                onSelectSite: setSelectedSite\n                            }, void 0, false, {\n                                fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 9\n                            }, this),\n                            selectedSite && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SiteSummaryStats__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                site: selectedSite,\n                                chargerIssueCount: chargerIssueCount\n                            }, void 0, false, {\n                                fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-3d5e9a6c2e73de67\" + \" \" + \"charger-grid\",\n                                children: selectedSite && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChargerGrid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    ailments: siteAilments,\n                                    onSelectCharger: handleChargerSelection\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 7\n                    }, this),\n                    selectedChargerID && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChargerDetails__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        ailments: _ailments_json__WEBPACK_IMPORTED_MODULE_4__,\n                        selectedSite: selectedSite,\n                        selectedCharger: selectedChargerID\n                    }, void 0, false, {\n                        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"3d5e9a6c2e73de67\",\n                children: \".container.jsx-3d5e9a6c2e73de67{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100vh;width:100%;margin:0;background-color:white}header.jsx-3d5e9a6c2e73de67{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px;background-color:#333;color:white}.menu-button.jsx-3d5e9a6c2e73de67{font-size:24px;background:none;border:none;color:white;cursor:pointer;-webkit-transition:-webkit-transform.3s ease-in-out;-moz-transition:-moz-transform.3s ease-in-out;-o-transition:-o-transform.3s ease-in-out;transition:-webkit-transform.3s ease-in-out;transition:-moz-transform.3s ease-in-out;transition:-o-transform.3s ease-in-out;transition:transform.3s ease-in-out}.menu-button-shifted.jsx-3d5e9a6c2e73de67{-webkit-transform:translatex(250px);-moz-transform:translatex(250px);-ms-transform:translatex(250px);-o-transform:translatex(250px);transform:translatex(250px)}.sidebar.jsx-3d5e9a6c2e73de67{position:fixed;top:0;left:0;width:250px;height:100%;background-color:#444;color:white;-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-ms-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%);-webkit-transition:-webkit-transform.3s ease-in-out;-moz-transition:-moz-transform.3s ease-in-out;-o-transition:-o-transform.3s ease-in-out;transition:-webkit-transform.3s ease-in-out;transition:-moz-transform.3s ease-in-out;transition:-o-transform.3s ease-in-out;transition:transform.3s ease-in-out}.sidebar.open.jsx-3d5e9a6c2e73de67{-webkit-transform:translatex(0);-moz-transform:translatex(0);-ms-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}nav.jsx-3d5e9a6c2e73de67 ul.jsx-3d5e9a6c2e73de67{list-style:none;padding:0}nav.jsx-3d5e9a6c2e73de67 ul.jsx-3d5e9a6c2e73de67 li.jsx-3d5e9a6c2e73de67{padding:15px 20px;cursor:pointer}main.jsx-3d5e9a6c2e73de67{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto}.site-selection.jsx-3d5e9a6c2e73de67{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:20px}.site-summary-stats.jsx-3d5e9a6c2e73de67,.charger-grid.jsx-3d5e9a6c2e73de67{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding:10px;min-height:300px;border-left:1px solid black}.filters.jsx-3d5e9a6c2e73de67{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px;margin-bottom:20px}.filters.jsx-3d5e9a6c2e73de67 select.jsx-3d5e9a6c2e73de67{padding:10px;border:1px solid#ccc;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.info-boxes.jsx-3d5e9a6c2e73de67{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:20px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.info-box.jsx-3d5e9a6c2e73de67{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding:20px;background-color:#f9f9f9;border:1px solid#ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.info-box.jsx-3d5e9a6c2e73de67 h2.jsx-3d5e9a6c2e73de67{margin-top:0}.info-box.jsx-3d5e9a6c2e73de67 button.jsx-3d5e9a6c2e73de67{display:block;margin:10px 0;padding:10px;border:1px solid#ccc;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-color:#fff;cursor:pointer}.info-box.jsx-3d5e9a6c2e73de67 button.jsx-3d5e9a6c2e73de67:hover{background-color:#f0f0f0}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"HnHxRzJH3xqgKukynjq73CAdeZs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNBO0FBRUQ7QUFDYztBQUNKO0FBQ0EsQ0FBQywrQkFBK0I7QUFDeEI7QUFDVjtBQXdCcEMsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFZLEVBQUU7SUFDOUQsTUFBTSxDQUFDWSxtQkFBbUJDLHFCQUFxQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNLENBQUNjLGNBQWNDLGdCQUFnQixHQUFHZiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQzlELE1BQU0sQ0FBQ2dCLG1CQUFtQkMscUJBQXFCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNLENBQUNrQixjQUFjQyxnQkFBZ0IsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ29CLGlCQUFpQkMsbUJBQW1CLEdBQUdyQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pELE1BQU0sQ0FBQ3NCLFNBQVNDLFdBQVcsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU13QixTQUFTdEIsMERBQVNBO0lBQ3hCLE1BQU11QixpQkFBaUI7SUFDdkIsbUNBQW1DO0lBRW5DLE1BQU1DLGdCQUFnQjtRQUNwQix3QkFBd0I7UUFDeEIsaUNBQWlDO1FBQ2pDLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsaUNBQWlDO1FBQ2pDLGlDQUFpQztJQUNuQztJQUVBLE1BQU1DLGNBQWM7UUFDbEJDLGFBQWE7UUFDYkMsY0FBYztRQUNkQyxRQUFRO1FBQ1JDLG1CQUFtQjtJQUNyQjtJQUVBLE1BQU1DLHlCQUF5QixDQUFDQztRQUM5QnBCLHFCQUFxQm9CLFlBQVksMkNBQTJDO0lBQzlFO0lBRUFoQyxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ3dCLGdCQUFnQjtZQUNuQkQsT0FBT1UsSUFBSSxDQUFDO1lBQ1o7UUFDRjtRQUVBLHlEQUF5RDtRQUN6RCxNQUFNQyxlQUFlaEMsMkNBQVFBLENBQUNpQyxNQUFNLENBQUNDLENBQUFBLFVBQVdBLFFBQVFDLFFBQVEsS0FBS2I7UUFDckVkLGdCQUFnQndCO1FBQ2hCLGtDQUFrQztRQUNsQyxNQUFNSSxrQkFBa0JKLGFBQWFLLE1BQU0sQ0FBQyxDQUFDQyxLQUFLSjtZQUNoRCxNQUFNSyxVQUFVTCxRQUFRTSxNQUFNLEVBQUUscUNBQXFDO1lBQ3JFLElBQUlGLEdBQUcsQ0FBQ0MsUUFBUSxFQUFFO2dCQUNoQkQsR0FBRyxDQUFDQyxRQUFRO1lBQ2QsT0FBTztnQkFDTEQsR0FBRyxDQUFDQyxRQUFRLEdBQUc7WUFDakI7WUFDQSxPQUFPRDtRQUNULEdBQUcsQ0FBQztRQUVKLDZFQUE2RTtRQUM3RSxNQUFNRyxRQUFRQyxPQUFPQyxJQUFJLENBQUNQLGlCQUFpQlEsR0FBRyxDQUFDSixDQUFBQSxTQUFXO2dCQUN4REE7Z0JBQ0FLLFFBQVFULGVBQWUsQ0FBQ0ksT0FBTztZQUNqQztRQUNBdEIsbUJBQW1CdUI7UUFFbkIsSUFBSTFCLGNBQWM7WUFDaEIsTUFBTStCLGVBQWVkLGFBQWFDLE1BQU0sQ0FBQ0MsQ0FBQUEsVUFBV0EsUUFBUU0sTUFBTSxLQUFLekI7WUFDdkUsTUFBTWdDLHFCQUFxQixJQUFJQyxJQUFJRixhQUFhRixHQUFHLENBQUNWLENBQUFBLFVBQVdBLFFBQVFKLFNBQVM7WUFDaEZoQixxQkFBcUJpQyxtQkFBbUJFLElBQUk7WUFDNUNyQyxnQkFBZ0JrQztRQUNsQjtRQUdBMUIsV0FBVztJQUViLEdBQUc7UUFBQ0w7UUFBY1I7UUFBY2U7S0FBZTtJQUsvQyxJQUFJSCxTQUFTO1FBQ1gscUJBQU8sOERBQUMrQjtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxNQUFNQyxpQkFBaUI1QyxhQUNwQjBCLE1BQU0sQ0FBQ0MsQ0FBQUEsVUFBV0EsUUFBUU0sTUFBTSxLQUFLekIsY0FDckM2QixHQUFHLENBQUNWLENBQUFBLFVBQVdBLFFBQVFKLFNBQVMsRUFDaENHLE1BQU0sQ0FBQyxDQUFDbUIsT0FBT0MsT0FBT0MsT0FBU0EsS0FBS0MsT0FBTyxDQUFDSCxXQUFXQztJQUUxRCxxQkFDRSw4REFBQ0g7a0RBQWM7OzBCQUNiLDhEQUFDTTs7O2tDQUNELDhEQUFDdEQsZ0VBQVlBO3dCQUFDRixVQUFVTzs7Ozs7O2tDQUN4Qiw4REFBQzJDO2tFQUFjOzswQ0FDYiw4REFBQy9DLGdFQUFZQTtnQ0FBQ3NDLE9BQU94QjtnQ0FBaUJ3QyxjQUFjekM7Ozs7Ozs0QkFDbkRELDhCQUFnQiw4REFBQ1gsb0VBQWdCQTtnQ0FBQ3NELE1BQU0zQztnQ0FBY0YsbUJBQW1CQTs7Ozs7OzBDQUMxRSw4REFBQ3FDOzBFQUFjOzBDQUNabkMsOEJBQ0MsOERBQUNWLCtEQUFXQTtvQ0FDVkwsVUFBVVc7b0NBQ1ZnRCxpQkFBaUI5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBS3hCcEIsbUNBQXFCLDhEQUFDUixrRUFBY0E7d0JBQUNELFVBQVVBLDJDQUFRQTt3QkFBRWUsY0FBY0E7d0JBQWM2QyxpQkFBaUJuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThHN0c7R0FqTndCSDs7UUFRUFAsc0RBQVNBOzs7S0FSRk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHVzZXJzIGZyb20gJy4uLy4uL3VzZXJzLmpzb24nO1xuaW1wb3J0IGFpbG1lbnRzIGZyb20gJy4uLy4uL2FpbG1lbnRzLmpzb24nO1xuaW1wb3J0IENoYXJnZXJEZXRhaWxzIGZyb20gXCIuL2NvbXBvbmVudHMvQ2hhcmdlckRldGFpbHNcIjtcbmltcG9ydCBTdW1tYXJ5U3RhdHMgZnJvbSAnLi9jb21wb25lbnRzL1N1bW1hcnlTdGF0cyc7XG5pbXBvcnQgU2l0ZUxpc3RWaWV3IGZyb20gJy4vY29tcG9uZW50cy9TaXRlTGlzdFZpZXcnOyAvLyBUaGlzIHdpbGwgYmUgYSBuZXcgY29tcG9uZW50XG5pbXBvcnQgU2l0ZVN1bW1hcnlTdGF0cyBmcm9tIFwiLi9jb21wb25lbnRzL1NpdGVTdW1tYXJ5U3RhdHNcIjtcbmltcG9ydCBDaGFyZ2VyR3JpZCBmcm9tICcuL2NvbXBvbmVudHMvQ2hhcmdlckdyaWQnO1xuXG50eXBlIEFpbG1lbnQgPSB7XG4gIGFpbG1lbnRJRDogc3RyaW5nO1xuICBzaXRlSUQ6IHN0cmluZztcbiAgY2hhcmdlcklEOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGlzc3VlOiBzdHJpbmc7XG4gIHJlc29sdmVkOiBib29sZWFuO1xuICBjbGllbnRJRDogc3RyaW5nO1xuICBhaWxtZW50X3R5cGU6IHN0cmluZztcbiAgYWlsbWVudF9kZXNjOiBzdHJpbmc7XG4gIGFpbG1lbnRfaW1hZ2U6IHN0cmluZztcbiAgcmVzb2x2ZWRfZmxhZzogYm9vbGVhbjtcbiAgZnVuY3Rpb25hbGl0eTogYm9vbGVhbjtcbiAgcGFydElEPzogc3RyaW5nO1xuICBkYXRlX2NyZWF0ZWQ6IG51bWJlcjtcbiAgZGF0ZV9yZXNvbHZlZDogbnVtYmVyIHwgbnVsbDtcbiAgaWRlbnRpZmllZF90ZWNobmljaWFuSUQ6IG51bWJlcjtcbiAgcmVzb2x2ZWRfdGVjaG5pY2lhbklEPzogbnVtYmVyO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWlsbWVudHNEYXRhLCBzZXRBaWxtZW50c0RhdGFdID0gdXNlU3RhdGU8QWlsbWVudFtdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZENoYXJnZXJJRCwgc2V0U2VsZWN0ZWRDaGFyZ2VySURdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaXRlQWlsbWVudHMsIHNldFNpdGVBaWxtZW50c10gPSB1c2VTdGF0ZTxBaWxtZW50W10+KFtdKTtcbiAgY29uc3QgW2NoYXJnZXJJc3N1ZUNvdW50LCBzZXRDaGFyZ2VySXNzdWVDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkU2l0ZSwgc2V0U2VsZWN0ZWRTaXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NpdGVzV2l0aElzc3Vlcywgc2V0U2l0ZXNXaXRoSXNzdWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzdG9yZWRVc2VybmFtZSA9ICdhZG1pbic7XG4gIC8vbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyk7XG5cbiAgY29uc3QgY2hhcmdlckltYWdlcyA9IHtcbiAgICBcIkFkbWluLUhRLUNoYXJnZXItMDAyXCI6IFwiaHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFxeUgrN0s2QUwuX0FDX1VGODk0LDEwMDBfUUw4MF8uanBnXCIsXG4gICAgXCJBZG1pbi1TZWNvbmQtU2l0ZS1DaGFyZ2VyLTAwMVwiOiBcImh0dHBzOi8vd3d3LmNuZXQuY29tL2EvaW1nL3Jlc2l6ZS9lOGFjYTdkOTBlNWEyMzBlNDJiZTcyNjJkZjFkZmE3NjE2M2U2N2Q1L2h1Yi8yMDIyLzAzLzA3LzY0YWUzMjdiLTQ0NzgtNDg5My1iNDZiLTQ5YTE1OTIwYTM1ZS9kc2MwMjAyOC5qcGc/YXV0bz13ZWJwJndpZHRoPTE5MjBcIixcbiAgICBcIkFkbWluLUhRLUNoYXJnZXItMDAzXCI6IFwiaHR0cHM6Ly9jeWJlcnN3aXRjaGluZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDYvRHVhbC1DaGFyZ2VyLXNjYWxlZC1lMTY1NjM1ODE3NDc2Mi5qcGdcIixcbiAgICBcIkFkbWluLUhRLUNoYXJnZXItMDAxXCI6IFwiaHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFaQkVpUTFFVkwuanBnXCIsXG4gICAgXCJBZG1pbi1TZWNvbmQtU2l0ZS1DaGFyZ2VyLTAwMlwiOiBcImh0dHBzOi8vZXZvY2hhcmdlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMi9HZXR0eUltYWdlcy0xMjQ5Nzc1Nzk2LmpwZ1wiLFxuICAgIFwiQWRtaW4tU2Vjb25kLVNpdGUtQ2hhcmdlci0wMDNcIjogXCJodHRwczovL20ubWVkaWEtYW1hem9uLmNvbS9pbWFnZXMvSS83MWV4U2dyOVhXTC5fQUNfVUY4OTQsMTAwMF9RTDgwXy5qcGdcIixcbiAgfTtcblxuICBjb25zdCBzdW1tYXJ5RGF0YSA9IHtcbiAgICB0b3RhbElzc3VlczogOSxcbiAgICBjaGFyZ2Vyc0Rvd246IDIsXG4gICAgdXB0aW1lOiAnOTMlJyxcbiAgICBsYXN0U2l0ZUlzc3VlVGltZTogJ1llc3RlcmRheSAxNjoyNCdcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFyZ2VyU2VsZWN0aW9uID0gKGNoYXJnZXJJRCkgPT4ge1xuICAgIHNldFNlbGVjdGVkQ2hhcmdlcklEKGNoYXJnZXJJRCk7IC8vIFRvIHVzZSBmb3IgZGlzcGxheWluZyB0aGUgZnVsbCBiaW9ncmFwaHlcbiAgfTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzdG9yZWRVc2VybmFtZSkge1xuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgLy8gRmlsdGVyIGFpbG1lbnRzIGJhc2VkIG9uIHRoZSBsb2dnZWQtaW4gdXNlcidzIGNsaWVudElEXG4gICAgY29uc3QgdXNlckFpbG1lbnRzID0gYWlsbWVudHMuZmlsdGVyKGFpbG1lbnQgPT4gYWlsbWVudC5jbGllbnRJRCA9PT0gc3RvcmVkVXNlcm5hbWUpO1xuICAgIHNldEFpbG1lbnRzRGF0YSh1c2VyQWlsbWVudHMpO1xuICAgIC8vIEFnZ3JlZ2F0ZSBpc3N1ZSBjb3VudHMgcGVyIHNpdGVcbiAgICBjb25zdCBzaXRlSXNzdWVDb3VudHMgPSB1c2VyQWlsbWVudHMucmVkdWNlKChhY2MsIGFpbG1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHNpdGVLZXkgPSBhaWxtZW50LnNpdGVJRDsgLy8gQ29ycmVjdGluZyB0byAnc2l0ZScgZnJvbSAnc2l0ZUlEJ1xuICAgICAgaWYgKGFjY1tzaXRlS2V5XSkge1xuICAgICAgICBhY2Nbc2l0ZUtleV0rKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjY1tzaXRlS2V5XSA9IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgXG4gICAgLy8gVHJhbnNmb3JtIHRoZSBvYmplY3QgaW50byBhbiBhcnJheSBzdWl0YWJsZSBmb3IgdGhlIFNpdGVMaXN0VmlldyBjb21wb25lbnRcbiAgICBjb25zdCBzaXRlcyA9IE9iamVjdC5rZXlzKHNpdGVJc3N1ZUNvdW50cykubWFwKHNpdGVJRCA9PiAoe1xuICAgICAgc2l0ZUlELFxuICAgICAgaXNzdWVzOiBzaXRlSXNzdWVDb3VudHNbc2l0ZUlEXVxuICAgIH0pKTtcbiAgICBzZXRTaXRlc1dpdGhJc3N1ZXMoc2l0ZXMpO1xuXG4gICAgaWYgKHNlbGVjdGVkU2l0ZSkge1xuICAgICAgY29uc3QgaXNzdWVzQXRTaXRlID0gdXNlckFpbG1lbnRzLmZpbHRlcihhaWxtZW50ID0+IGFpbG1lbnQuc2l0ZUlEID09PSBzZWxlY3RlZFNpdGUpO1xuICAgICAgY29uc3QgY2hhcmdlcnNXaXRoSXNzdWVzID0gbmV3IFNldChpc3N1ZXNBdFNpdGUubWFwKGFpbG1lbnQgPT4gYWlsbWVudC5jaGFyZ2VySUQpKTtcbiAgICAgIHNldENoYXJnZXJJc3N1ZUNvdW50KGNoYXJnZXJzV2l0aElzc3Vlcy5zaXplKTsgXG4gICAgICBzZXRTaXRlQWlsbWVudHMoaXNzdWVzQXRTaXRlKTtcbiAgICB9XG5cblxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIFxuICB9LCBbc2VsZWN0ZWRTaXRlLCBhaWxtZW50c0RhdGEsIHN0b3JlZFVzZXJuYW1lXSk7XG4gIFxuXG4gIFxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuICBcbiAgY29uc3QgY2hhcmdlck9wdGlvbnMgPSBhaWxtZW50c0RhdGFcbiAgICAuZmlsdGVyKGFpbG1lbnQgPT4gYWlsbWVudC5zaXRlSUQgPT09IHNlbGVjdGVkU2l0ZSlcbiAgICAubWFwKGFpbG1lbnQgPT4gYWlsbWVudC5jaGFyZ2VySUQpXG4gICAgLmZpbHRlcigodmFsdWUsIGluZGV4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleCk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8bWFpbj5cbiAgICAgIDxTdW1tYXJ5U3RhdHMgYWlsbWVudHM9e2FpbG1lbnRzRGF0YX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1zZWxlY3Rpb25cIj5cbiAgICAgICAgPFNpdGVMaXN0VmlldyBzaXRlcz17c2l0ZXNXaXRoSXNzdWVzfSBvblNlbGVjdFNpdGU9e3NldFNlbGVjdGVkU2l0ZX0gLz5cbiAgICAgICAge3NlbGVjdGVkU2l0ZSAmJiA8U2l0ZVN1bW1hcnlTdGF0cyBzaXRlPXtzZWxlY3RlZFNpdGV9IGNoYXJnZXJJc3N1ZUNvdW50PXtjaGFyZ2VySXNzdWVDb3VudH0gLz59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmdlci1ncmlkXCI+XG4gICAgICAgICAge3NlbGVjdGVkU2l0ZSAmJiAoXG4gICAgICAgICAgICA8Q2hhcmdlckdyaWRcbiAgICAgICAgICAgICAgYWlsbWVudHM9e3NpdGVBaWxtZW50c31cbiAgICAgICAgICAgICAgb25TZWxlY3RDaGFyZ2VyPXtoYW5kbGVDaGFyZ2VyU2VsZWN0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3NlbGVjdGVkQ2hhcmdlcklEICYmIDxDaGFyZ2VyRGV0YWlscyBhaWxtZW50cz17YWlsbWVudHN9IHNlbGVjdGVkU2l0ZT17c2VsZWN0ZWRTaXRlfSBzZWxlY3RlZENoYXJnZXI9e3NlbGVjdGVkQ2hhcmdlcklEfSAvPn1cbiAgICA8L21haW4+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwJTsgLyogRW5zdXJlIGZ1bGwgd2lkdGggKi9cbiAgICAgICAgICBtYXJnaW46IDA7IC8qIFJlbW92ZSBhbnkgZGVmYXVsdCBtYXJnaW4gKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51LWJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7IC8qIFNtb290aCB0cmFuc2l0aW9uICovXG4gICAgICAgIH1cbiAgICAgICAgLm1lbnUtYnV0dG9uLXNoaWZ0ZWQge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNTBweCk7IC8qIE1vdmUgYnV0dG9uIHRvIHRoZSByaWdodCAqL1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLm9wZW4ge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBuYXYgdWwgbGkge1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5zdXJlIHNjcm9sbGluZyBpZiBjb250ZW50IG92ZXJmbG93cyAqL1xuICAgICAgICB9XG4gICAgICAgICAuc2l0ZS1zZWxlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG59XG5cbi5zaXRlLXN1bW1hcnktc3RhdHMsIC5jaGFyZ2VyLWdyaWQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAzMDBweDsgLy8gTWluaW11bSBoZWlnaHQgZm9yIGxheW91dCBzdGFiaWxpdHlcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjazsgLy8gU2VwYXJhdGUgY29sdW1ucyB2aXN1YWxseVxufVxuICAgICAgICAuZmlsdGVycyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuZmlsdGVycyBzZWxlY3Qge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8tYm94ZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiAyMHB4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDsgLyogQWxsb3cgd3JhcHBpbmcgaWYgbmVlZGVkICovXG4gICAgICAgIH1cbiAgICAgICAgLmluZm8tYm94IHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuaW5mby1ib3ggaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmluZm8tYm94IGJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaW5mby1ib3ggYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJhaWxtZW50cyIsIkNoYXJnZXJEZXRhaWxzIiwiU3VtbWFyeVN0YXRzIiwiU2l0ZUxpc3RWaWV3IiwiU2l0ZVN1bW1hcnlTdGF0cyIsIkNoYXJnZXJHcmlkIiwiSG9tZSIsImFpbG1lbnRzRGF0YSIsInNldEFpbG1lbnRzRGF0YSIsInNlbGVjdGVkQ2hhcmdlcklEIiwic2V0U2VsZWN0ZWRDaGFyZ2VySUQiLCJzaXRlQWlsbWVudHMiLCJzZXRTaXRlQWlsbWVudHMiLCJjaGFyZ2VySXNzdWVDb3VudCIsInNldENoYXJnZXJJc3N1ZUNvdW50Iiwic2VsZWN0ZWRTaXRlIiwic2V0U2VsZWN0ZWRTaXRlIiwic2l0ZXNXaXRoSXNzdWVzIiwic2V0U2l0ZXNXaXRoSXNzdWVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJzdG9yZWRVc2VybmFtZSIsImNoYXJnZXJJbWFnZXMiLCJzdW1tYXJ5RGF0YSIsInRvdGFsSXNzdWVzIiwiY2hhcmdlcnNEb3duIiwidXB0aW1lIiwibGFzdFNpdGVJc3N1ZVRpbWUiLCJoYW5kbGVDaGFyZ2VyU2VsZWN0aW9uIiwiY2hhcmdlcklEIiwicHVzaCIsInVzZXJBaWxtZW50cyIsImZpbHRlciIsImFpbG1lbnQiLCJjbGllbnRJRCIsInNpdGVJc3N1ZUNvdW50cyIsInJlZHVjZSIsImFjYyIsInNpdGVLZXkiLCJzaXRlSUQiLCJzaXRlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpc3N1ZXMiLCJpc3N1ZXNBdFNpdGUiLCJjaGFyZ2Vyc1dpdGhJc3N1ZXMiLCJTZXQiLCJzaXplIiwiZGl2IiwiY2hhcmdlck9wdGlvbnMiLCJ2YWx1ZSIsImluZGV4Iiwic2VsZiIsImluZGV4T2YiLCJtYWluIiwib25TZWxlY3RTaXRlIiwic2l0ZSIsIm9uU2VsZWN0Q2hhcmdlciIsInNlbGVjdGVkQ2hhcmdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});