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

/***/ "./components/libs/theme.js":
/*!**********************************!*\
  !*** ./components/libs/theme.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#f0e7db', '#202023')(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            'section-title': {\n                textDecoration: 'underline',\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationCOlor: '#525252',\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#3d7aed', '#ff63c3')(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n    glassTeal: '#88ccca'\n};\nvar config = {\n    initialColorMode: 'dark',\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    colors: colors,\n    fonts: fonts\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpYnMvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE4QztBQUNIO0FBRTNDLEdBQUssQ0FBQ0UsTUFBTSxHQUFHLENBQUM7SUFDWkMsTUFBTSxFQUFFQyxRQUFRLENBQVJBLEtBQUs7UUFBSSxNQUNuQixDQURvQixDQUFDO1lBQ2ZDLElBQUksRUFBRSxDQUFDO2dCQUNIQyxFQUFFLEVBQUVMLDREQUFJLENBQUMsQ0FBUyxVQUFFLENBQVMsVUFBRUcsS0FBSztZQUN4QyxDQUFDO1FBQ0wsQ0FBQzs7QUFDTCxDQUFDO0FBRUQsR0FBSyxDQUFDRyxVQUFVLEdBQUcsQ0FBQztJQUNoQkMsT0FBTyxFQUFDLENBQUM7UUFDTEMsUUFBUSxFQUFFLENBQUM7WUFDUCxDQUFlLGdCQUFFLENBQUM7Z0JBQ2RDLGNBQWMsRUFBRSxDQUFXO2dCQUMzQkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3RCQyxtQkFBbUIsRUFBRSxDQUFTO2dCQUM5QkMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDMUJDLFNBQVMsRUFBRSxDQUFDO2dCQUNaQyxZQUFZLEVBQUUsQ0FBQztZQUNuQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFREMsSUFBSSxFQUFDLENBQUM7UUFDRkMsU0FBUyxFQUFFZCxRQUFRLENBQVJBLEtBQUs7WUFBRyxNQUN6QixDQUQwQixDQUFDO2dCQUNqQmUsS0FBSyxFQUFFbEIsNERBQUksQ0FBQyxDQUFTLFVBQUUsQ0FBUyxVQUFFRyxLQUFLO2dCQUN2Q1EsbUJBQW1CLEVBQUUsQ0FBQztZQUMxQixDQUFDOztJQUNMLENBQUM7QUFDTCxDQUFDO0FBRUQsR0FBSyxDQUFDUSxLQUFLLEdBQUcsQ0FBQztJQUNYQyxPQUFPLEVBQUUsQ0FBcUI7QUFDbEMsQ0FBQztBQUVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDWkMsU0FBUyxFQUFFLENBQVM7QUFDeEIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDWkMsZ0JBQWdCLEVBQUUsQ0FBTTtJQUN4QkMsa0JBQWtCLEVBQUUsSUFBSTtBQUM1QixDQUFDO0FBRUQsR0FBSyxDQUFDQyxLQUFLLEdBQUczQiw2REFBVyxDQUFDLENBQUM7SUFDdkJ3QixNQUFNLEVBQU5BLE1BQU07SUFDTnRCLE1BQU0sRUFBTkEsTUFBTTtJQUNOSyxVQUFVLEVBQVZBLFVBQVU7SUFDVmUsTUFBTSxFQUFOQSxNQUFNO0lBQ05GLEtBQUssRUFBTEEsS0FBSztBQUNULENBQUM7QUFFRCwrREFBZU8sS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xpYnMvdGhlbWUuanM/NjNhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuaW1wb3J0IHttb2RlfSBmcm9tICdAY2hha3JhLXVpL3RoZW1lLXRvb2xzJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZ2xvYmFsOiBwcm9wcyA9PiAoe1xyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgYmc6IG1vZGUoJyNmMGU3ZGInLCAnIzIwMjAyMycpKHByb3BzKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBIZWFkaW5nOntcclxuICAgICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICAgICAnc2VjdGlvbi10aXRsZSc6IHtcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbkNPbG9yOiAnIzUyNTI1MicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogNCxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBMaW5rOntcclxuICAgICAgICBiYXNlU3R5bGU6IHByb3BzID0+KHtcclxuICAgICAgICAgICAgY29sb3I6IG1vZGUoJyMzZDdhZWQnLCAnI2ZmNjNjMycpKHByb3BzKSxcclxuICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogM1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGZvbnRzID0ge1xyXG4gICAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcclxufVxyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgZ2xhc3NUZWFsOiAnIzg4Y2NjYSdcclxufVxyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxyXG4gICAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlXHJcbn1cclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gICAgY29uZmlnLFxyXG4gICAgc3R5bGVzLFxyXG4gICAgY29tcG9uZW50cyxcclxuICAgIGNvbG9ycyxcclxuICAgIGZvbnRzXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxyXG5cclxuIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJsaW5lT2Zmc2V0IiwidGV4dERlY29yYXRpb25DT2xvciIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwiZm9udHMiLCJoZWFkaW5nIiwiY29sb3JzIiwiZ2xhc3NUZWFsIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/libs/theme.js\n");

/***/ })

});