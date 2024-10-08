/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/ThemeContext.tsx":
/*!**********************************!*\
  !*** ./context/ThemeContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),\n/* harmony export */   useTheme: () => (/* binding */ useTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    theme: \"light\",\n    toggleTheme: ()=>{}\n});\nconst ThemeProvider = ({ children })=>{\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedTheme = localStorage.getItem(\"theme\");\n        if (storedTheme) {\n            setTheme(storedTheme);\n            document.documentElement.classList.add(storedTheme);\n        }\n    }, []);\n    const toggleTheme = ()=>{\n        const newTheme = theme === \"light\" ? \"dark\" : \"light\";\n        setTheme(newTheme);\n        document.documentElement.classList.remove(theme);\n        document.documentElement.classList.add(newTheme);\n        localStorage.setItem(\"theme\", newTheme);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/stuartgarner/Projects/StuartGarner/stuartgarner.dev.v2/context/ThemeContext.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n// Custom hook to use the ThemeContext\nconst useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RoZW1lQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1RTtBQUV2RSxNQUFNSSw2QkFBZUosb0RBQWFBLENBQUM7SUFBRUssT0FBTztJQUFTQyxhQUFhLEtBQU87QUFBRTtBQU1wRSxNQUFNQyxnQkFBZ0IsQ0FBQyxFQUFFQyxRQUFRLEVBQVM7SUFDL0MsTUFBTSxDQUFDSCxPQUFPSSxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1TLGNBQWNDLGFBQWFDLE9BQU8sQ0FBQztRQUN6QyxJQUFJRixhQUFhO1lBQ2ZELFNBQVNDO1lBQ1RHLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUNOO1FBQ3pDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUosY0FBYztRQUNsQixNQUFNVyxXQUFXWixVQUFVLFVBQVUsU0FBUztRQUU5Q0ksU0FBU1E7UUFDVEosU0FBU0MsZUFBZSxDQUFDQyxTQUFTLENBQUNHLE1BQU0sQ0FBQ2I7UUFDMUNRLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUNDO1FBQ3ZDTixhQUFhUSxPQUFPLENBQUMsU0FBU0Y7SUFDaEM7SUFFQSxxQkFDRSw4REFBQ2IsYUFBYWdCLFFBQVE7UUFBQ0MsT0FBTztZQUFFaEI7WUFBT0M7UUFBWTtrQkFDaERFOzs7Ozs7QUFHUCxFQUFFO0FBRUYsc0NBQXNDO0FBQy9CLE1BQU1jLFdBQVcsSUFBTW5CLGlEQUFVQSxDQUFDQyxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1YXJ0Z2FybmVyLmRldi12NS4wLy4vY29udGV4dC9UaGVtZUNvbnRleHQudHN4PzkzMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHsgdGhlbWU6IFwibGlnaHRcIiwgdG9nZ2xlVGhlbWU6ICgpID0+IHt9IH0pO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwibGlnaHRcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG4gICAgaWYgKHN0b3JlZFRoZW1lKSB7XG4gICAgICBzZXRUaGVtZShzdG9yZWRUaGVtZSk7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdG9yZWRUaGVtZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3VGhlbWUgPSB0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG5cbiAgICBzZXRUaGVtZShuZXdUaGVtZSk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhlbWUpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKG5ld1RoZW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld1RoZW1lKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIHRvZ2dsZVRoZW1lIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuLy8gQ3VzdG9tIGhvb2sgdG8gdXNlIHRoZSBUaGVtZUNvbnRleHRcbmV4cG9ydCBjb25zdCB1c2VUaGVtZSA9ICgpID0+IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwidGhlbWUiLCJ0b2dnbGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFRoZW1lIiwic3RvcmVkVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJuZXdUaGVtZSIsInJlbW92ZSIsInNldEl0ZW0iLCJQcm92aWRlciIsInZhbHVlIiwidXNlVGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/ThemeContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prismicio/react */ \"@prismicio/react\");\n/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _prismicio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../prismicio */ \"./prismicio.ts\");\n/* harmony import */ var _sg_context_ThemeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sg/context/ThemeContext */ \"./context/ThemeContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__, _prismicio__WEBPACK_IMPORTED_MODULE_6__]);\n([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__, _prismicio__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sg_context_ThemeContext__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__.PrismicProvider, {\n            internalLinkComponent: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    ...props\n                }, void 0, false, {\n                    fileName: \"/Users/stuartgarner/Projects/StuartGarner/stuartgarner.dev.v2/pages/_app.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 58\n                }, void 0),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prismicio_next__WEBPACK_IMPORTED_MODULE_5__.PrismicPreview, {\n                repositoryName: _prismicio__WEBPACK_IMPORTED_MODULE_6__.repositoryName,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/stuartgarner/Projects/StuartGarner/stuartgarner.dev.v2/pages/_app.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__.Analytics, {}, void 0, false, {\n                        fileName: \"/Users/stuartgarner/Projects/StuartGarner/stuartgarner.dev.v2/pages/_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stuartgarner/Projects/StuartGarner/stuartgarner.dev.v2/pages/_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/stuartgarner/Projects/StuartGarner/stuartgarner.dev.v2/pages/_app.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/stuartgarner/Projects/StuartGarner/stuartgarner.dev.v2/pages/_app.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUVxQjtBQUV2QjtBQUNzQjtBQUNGO0FBQ0g7QUFDVztBQUNiO0FBRTdCLFNBQVNRLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDRCxnREFBU0EsQ0FBQztRQUNSTSxXQUFXO0lBQ2IsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRCxTQUFTLE9BQU87SUFDckIscUJBQ0UsOERBQUNOLG1FQUFhQTtrQkFDWiw0RUFBQ0gsNkRBQWVBO1lBQUNXLHVCQUF1QixDQUFDQyxzQkFBVSw4REFBQ2Isa0RBQUlBO29CQUFFLEdBQUdhLEtBQUs7Ozs7OztzQkFDaEUsNEVBQUNYLDJEQUFjQTtnQkFBQ0MsZ0JBQWdCQSxzREFBY0E7O2tDQUM1Qyw4REFBQ0s7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7O2tDQUN4Qiw4REFBQ1YsOERBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVhcnRnYXJuZXIuZGV2LXY1LjAvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgQW5hbHl0aWNzIH0gZnJvbSBcIkB2ZXJjZWwvYW5hbHl0aWNzL3JlYWN0XCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFByaXNtaWNQcm92aWRlciB9IGZyb20gXCJAcHJpc21pY2lvL3JlYWN0XCI7XG5pbXBvcnQgeyBQcmlzbWljUHJldmlldyB9IGZyb20gXCJAcHJpc21pY2lvL25leHRcIjtcbmltcG9ydCB7IHJlcG9zaXRvcnlOYW1lIH0gZnJvbSBcIi4uL3ByaXNtaWNpb1wiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAc2cvY29udGV4dC9UaGVtZUNvbnRleHRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIW1vdW50ZWQpIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgPFByaXNtaWNQcm92aWRlciBpbnRlcm5hbExpbmtDb21wb25lbnQ9eyhwcm9wcykgPT4gPExpbmsgey4uLnByb3BzfSAvPn0+XG4gICAgICAgIDxQcmlzbWljUHJldmlldyByZXBvc2l0b3J5TmFtZT17cmVwb3NpdG9yeU5hbWV9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8QW5hbHl0aWNzIC8+XG4gICAgICAgIDwvUHJpc21pY1ByZXZpZXc+XG4gICAgICA8L1ByaXNtaWNQcm92aWRlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQW5hbHl0aWNzIiwiTGluayIsIlByaXNtaWNQcm92aWRlciIsIlByaXNtaWNQcmV2aWV3IiwicmVwb3NpdG9yeU5hbWUiLCJUaGVtZVByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsImludGVybmFsTGlua0NvbXBvbmVudCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./prismicio.ts":
/*!**********************!*\
  !*** ./prismicio.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient),\n/* harmony export */   repositoryName: () => (/* binding */ repositoryName)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/next */ \"@prismicio/next\");\n/* harmony import */ var _prismicio_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slicemachine_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slicemachine.config.json */ \"./slicemachine.config.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__]);\n_prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n/**\n * The project's Prismic repository name.\n */ const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || _slicemachine_config_json__WEBPACK_IMPORTED_MODULE_2__.repositoryName;\n/**\n * A list of Route Resolver objects that define how a document's `url` field is resolved.\n *\n * {@link https://prismic.io/docs/route-resolver#route-resolver}\n */ // TODO: Update the routes array to match your project's route structure.\nconst routes = [\n    {\n        type: \"homepage\",\n        path: \"/\"\n    },\n    {\n        type: \"article\",\n        path: \"/blog/:uid\"\n    }\n];\n/**\n * Creates a Prismic client for the project's repository. The client is used to\n * query content from the Prismic API.\n *\n * @param config - Configuration for the Prismic client.\n */ const createClient = (config = {})=>{\n    const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient(repositoryName, {\n        routes,\n        fetchOptions:  false ? 0 : {\n            next: {\n                revalidate: 5\n            }\n        },\n        ...config\n    });\n    _prismicio_next__WEBPACK_IMPORTED_MODULE_1__.enableAutoPreviews({\n        client,\n        previewData: config.previewData,\n        req: config.req\n    });\n    return client;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcmlzbWljaW8udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0U7QUFDQztBQUVoRDs7Q0FFQyxHQUNNLE1BQU1HLGlCQUNYQyxRQUFRQyxHQUFHLENBQUNDLCtCQUErQixJQUFJSixxRUFBcUIsQ0FBQztBQUV2RTs7OztDQUlDLEdBQ0QseUVBQXlFO0FBQ3pFLE1BQU1LLFNBQXlDO0lBQzdDO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRDtBQUVEOzs7OztDQUtDLEdBQ00sTUFBTUMsZUFBZSxDQUFDUixTQUF5QyxDQUFDLENBQUM7SUFDdEUsTUFBTVMsU0FBU1gsMkRBQW9CLENBQUNHLGdCQUFnQjtRQUNsREk7UUFDQUssY0FDRVIsTUFBcUMsR0FDakMsQ0FBcUQsR0FDckQ7WUFBRVMsTUFBTTtnQkFBRUcsWUFBWTtZQUFFO1FBQUU7UUFDaEMsR0FBR2QsTUFBTTtJQUNYO0lBRUFELCtEQUE4QixDQUFDO1FBQzdCVTtRQUNBTyxhQUFhaEIsT0FBT2dCLFdBQVc7UUFDL0JDLEtBQUtqQixPQUFPaUIsR0FBRztJQUNqQjtJQUVBLE9BQU9SO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0dWFydGdhcm5lci5kZXYtdjUuMC8uL3ByaXNtaWNpby50cz9iYzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHByaXNtaWMgZnJvbSBcIkBwcmlzbWljaW8vY2xpZW50XCI7XG5pbXBvcnQgKiBhcyBwcmlzbWljTmV4dCBmcm9tIFwiQHByaXNtaWNpby9uZXh0XCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL3NsaWNlbWFjaGluZS5jb25maWcuanNvblwiO1xuXG4vKipcbiAqIFRoZSBwcm9qZWN0J3MgUHJpc21pYyByZXBvc2l0b3J5IG5hbWUuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBvc2l0b3J5TmFtZSA9XG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BSSVNNSUNfRU5WSVJPTk1FTlQgfHwgY29uZmlnLnJlcG9zaXRvcnlOYW1lO1xuXG4vKipcbiAqIEEgbGlzdCBvZiBSb3V0ZSBSZXNvbHZlciBvYmplY3RzIHRoYXQgZGVmaW5lIGhvdyBhIGRvY3VtZW50J3MgYHVybGAgZmllbGQgaXMgcmVzb2x2ZWQuXG4gKlxuICoge0BsaW5rIGh0dHBzOi8vcHJpc21pYy5pby9kb2NzL3JvdXRlLXJlc29sdmVyI3JvdXRlLXJlc29sdmVyfVxuICovXG4vLyBUT0RPOiBVcGRhdGUgdGhlIHJvdXRlcyBhcnJheSB0byBtYXRjaCB5b3VyIHByb2plY3QncyByb3V0ZSBzdHJ1Y3R1cmUuXG5jb25zdCByb3V0ZXM6IHByaXNtaWMuQ2xpZW50Q29uZmlnW1wicm91dGVzXCJdID0gW1xuICB7XG4gICAgdHlwZTogXCJob21lcGFnZVwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgdHlwZTogXCJhcnRpY2xlXCIsXG4gICAgcGF0aDogXCIvYmxvZy86dWlkXCIsXG4gIH0sXG5dO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBQcmlzbWljIGNsaWVudCBmb3IgdGhlIHByb2plY3QncyByZXBvc2l0b3J5LiBUaGUgY2xpZW50IGlzIHVzZWQgdG9cbiAqIHF1ZXJ5IGNvbnRlbnQgZnJvbSB0aGUgUHJpc21pYyBBUEkuXG4gKlxuICogQHBhcmFtIGNvbmZpZyAtIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBQcmlzbWljIGNsaWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNsaWVudCA9IChjb25maWc6IHByaXNtaWNOZXh0LkNyZWF0ZUNsaWVudENvbmZpZyA9IHt9KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IHByaXNtaWMuY3JlYXRlQ2xpZW50KHJlcG9zaXRvcnlOYW1lLCB7XG4gICAgcm91dGVzLFxuICAgIGZldGNoT3B0aW9uczpcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgICA/IHsgbmV4dDogeyB0YWdzOiBbXCJwcmlzbWljXCJdIH0sIGNhY2hlOiBcImZvcmNlLWNhY2hlXCIgfVxuICAgICAgICA6IHsgbmV4dDogeyByZXZhbGlkYXRlOiA1IH0gfSxcbiAgICAuLi5jb25maWcsXG4gIH0pO1xuXG4gIHByaXNtaWNOZXh0LmVuYWJsZUF1dG9QcmV2aWV3cyh7XG4gICAgY2xpZW50LFxuICAgIHByZXZpZXdEYXRhOiBjb25maWcucHJldmlld0RhdGEsXG4gICAgcmVxOiBjb25maWcucmVxLFxuICB9KTtcblxuICByZXR1cm4gY2xpZW50O1xufTtcbiJdLCJuYW1lcyI6WyJwcmlzbWljIiwicHJpc21pY05leHQiLCJjb25maWciLCJyZXBvc2l0b3J5TmFtZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19QUklTTUlDX0VOVklST05NRU5UIiwicm91dGVzIiwidHlwZSIsInBhdGgiLCJjcmVhdGVDbGllbnQiLCJjbGllbnQiLCJmZXRjaE9wdGlvbnMiLCJuZXh0IiwidGFncyIsImNhY2hlIiwicmV2YWxpZGF0ZSIsImVuYWJsZUF1dG9QcmV2aWV3cyIsInByZXZpZXdEYXRhIiwicmVxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./prismicio.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@prismicio/next":
/*!**********************************!*\
  !*** external "@prismicio/next" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/next");

/***/ }),

/***/ "@prismicio/react":
/*!***********************************!*\
  !*** external "@prismicio/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prismicio/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@prismicio/client");;

/***/ }),

/***/ "@vercel/analytics/react":
/*!******************************************!*\
  !*** external "@vercel/analytics/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ "./slicemachine.config.json":
/*!**********************************!*\
  !*** ./slicemachine.config.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"repositoryName":"stuartgarnerstarter","adapter":"@slicemachine/adapter-next","libraries":["./slices"],"localSliceSimulatorURL":"http://localhost:3000/slice-simulator"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();