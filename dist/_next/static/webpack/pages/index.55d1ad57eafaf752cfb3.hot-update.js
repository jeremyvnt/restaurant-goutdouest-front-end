/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index", {
  /***/ "./src/views/Home/styles.js":
    /*!**********************************!*\
  !*** ./src/views/Home/styles.js ***!
  \**********************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jeremy_Workspace_restaurant_goutdouest_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");\n/* harmony import */ var _theme_palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/palette */ "./src/theme/palette.js");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(_c = function _c(theme) {\n  return {\n    fontWeight900: {\n      fontWeight: 900\n    },\n    leftSideContent: {\n      "& .section-header__cta-container": (0,_Users_jeremy_Workspace_restaurant_goutdouest_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.breakpoints.down("xs"), {\n        flexDirection: "column",\n        "& .section-header__cta-item-wrapper": {\n          width: "100%",\n          "&:last-child": {\n            marginLeft: 0,\n            marginTop: theme.spacing(1)\n          },\n          "& .MuiButtonBase-root": {\n            width: "100%"\n          }\n        }\n      })\n    },\n    heroShaped: (0,_Users_jeremy_Workspace_restaurant_goutdouest_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({\n      "& .hero-shaped__image": {\n        backgroundColor: theme.palette.alternate.main\n      }\n    }, theme.breakpoints.down("sm"), {\n      "& .hero-shaped__image": {\n        position: "relative"\n      },\n      "& .hero-shaped__wrapper": {\n        flexDirection: "column"\n      }\n    }),\n    imageAnimation: (0,_Users_jeremy_Workspace_restaurant_goutdouest_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({\n      background: "url(\\"restaurant.jpeg\\")",\n      backgroundRepeat: "no-repeat",\n      backgroundSize: "400px auto",\n      width: "600%",\n      height: "600%",\n      position: "absolute"\n    }, theme.breakpoints.up("sm"), {\n      backgroundSize: "800px auto"\n    }),\n    imageSection: {\n      borderRadius: 10\n    },\n    sectionImageContainer: {\n      paddingLeft: "1rem",\n      paddingRight: "1rem"\n    },\n    pagePaddingTop: (0,_Users_jeremy_Workspace_restaurant_goutdouest_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({\n      paddingTop: theme.spacing(3)\n    }, theme.breakpoints.up(\'md\'), {\n      paddingTop: theme.spacing(5)\n    }),\n    sectionNoPaddingTop: {\n      paddingTop: 0\n    },\n    shape: {\n      background: theme.palette.alternate.main,\n      borderBottomRightRadius: \'45%\',\n      borderBottom: "1px solid ".concat(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.colors.grey[200])\n    },\n    menuPreview: {\n      paddingLeft: "2rem"\n    }\n  };\n}));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, "%default%$makeStyles");\n$RefreshReg$(_c2, "%default%");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0hvbWUvc3R5bGVzLmpzP2EzNDgiXSwibmFtZXMiOlsibWFrZVN0eWxlcyIsInRoZW1lIiwiZm9udFdlaWdodDkwMCIsImZvbnRXZWlnaHQiLCJsZWZ0U2lkZUNvbnRlbnQiLCJicmVha3BvaW50cyIsImRvd24iLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwic3BhY2luZyIsImhlcm9TaGFwZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYWx0ZXJuYXRlIiwibWFpbiIsInBvc2l0aW9uIiwiaW1hZ2VBbmltYXRpb24iLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiaGVpZ2h0IiwidXAiLCJpbWFnZVNlY3Rpb24iLCJib3JkZXJSYWRpdXMiLCJzZWN0aW9uSW1hZ2VDb250YWluZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZ2VQYWRkaW5nVG9wIiwicGFkZGluZ1RvcCIsInNlY3Rpb25Ob1BhZGRpbmdUb3AiLCJzaGFwZSIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tIiwiY29sb3JzIiwibWVudVByZXZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSwrREFBZSxNQUFBQSxvRUFBVSxNQUFDLFlBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3BDQyxpQkFBYSxFQUFFO0FBQ2JDLGdCQUFVLEVBQUU7QUFEQyxLQURxQjtBQUlwQ0MsbUJBQWUsRUFBRTtBQUNmLHVOQUNHSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBREgsRUFDa0M7QUFDOUJDLHFCQUFhLEVBQUUsUUFEZTtBQUU5QiwrQ0FBdUM7QUFDckNDLGVBQUssRUFBRSxNQUQ4QjtBQUVyQywwQkFBZ0I7QUFDZEMsc0JBQVUsRUFBRSxDQURFO0FBRWRDLHFCQUFTLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjLENBQWQ7QUFGRyxXQUZxQjtBQU1yQyxtQ0FBeUI7QUFDdkJILGlCQUFLLEVBQUU7QUFEZ0I7QUFOWTtBQUZULE9BRGxDO0FBRGUsS0FKbUI7QUFxQnBDSSxjQUFVLEVBQUU7QUFDViwrQkFBeUI7QUFDdkJDLHVCQUFlLEVBQUVaLEtBQUssQ0FBQ2EsT0FBTixDQUFjQyxTQUFkLENBQXdCQztBQURsQjtBQURqQixPQUlQZixLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBSk8sRUFJd0I7QUFDOUIsK0JBQXlCO0FBQ3ZCVyxnQkFBUSxFQUFFO0FBRGEsT0FESztBQUk5QixpQ0FBMkI7QUFDekJWLHFCQUFhLEVBQUU7QUFEVTtBQUpHLEtBSnhCLENBckIwQjtBQWtDcENXLGtCQUFjLEVBQUU7QUFDZEMsZ0JBQVUsNEJBREU7QUFFWkMsc0JBQWdCLEVBQUUsV0FGTjtBQUdaQyxvQkFBYyxFQUFFLFlBSEo7QUFJWmIsV0FBSyxFQUFFLE1BSks7QUFLWmMsWUFBTSxFQUFFLE1BTEk7QUFNWkwsY0FBUSxFQUFFO0FBTkUsT0FPWGhCLEtBQUssQ0FBQ0ksV0FBTixDQUFrQmtCLEVBQWxCLENBQXFCLElBQXJCLENBUFcsRUFPa0I7QUFDNUJGLG9CQUFjLEVBQUU7QUFEWSxLQVBsQixDQWxDc0I7QUE2Q3BDRyxnQkFBWSxFQUFFO0FBQ1pDLGtCQUFZLEVBQUU7QUFERixLQTdDc0I7QUFnRHBDQyx5QkFBcUIsRUFBRTtBQUNyQkMsaUJBQVcsRUFBRSxNQURRO0FBRXJCQyxrQkFBWSxFQUFFO0FBRk8sS0FoRGE7QUFvRGxDQyxrQkFBYyxFQUFFO0FBQ2RDLGdCQUFVLEVBQUU3QixLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkO0FBREEsT0FFWFYsS0FBSyxDQUFDSSxXQUFOLENBQWtCa0IsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGVyxFQUVrQjtBQUM1Qk8sZ0JBQVUsRUFBRTdCLEtBQUssQ0FBQ1UsT0FBTixDQUFjLENBQWQ7QUFEZ0IsS0FGbEIsQ0FwRG9CO0FBMERsQ29CLHVCQUFtQixFQUFFO0FBQ25CRCxnQkFBVSxFQUFFO0FBRE8sS0ExRGE7QUE2RGxDRSxTQUFLLEVBQUU7QUFDTGIsZ0JBQVUsRUFBRWxCLEtBQUssQ0FBQ2EsT0FBTixDQUFjQyxTQUFkLENBQXdCQyxJQUQvQjtBQUVMaUIsNkJBQXVCLEVBQUUsS0FGcEI7QUFHTEMsa0JBQVksc0JBQWVDLCtEQUFmO0FBSFAsS0E3RDJCO0FBa0VwQ0MsZUFBVyxFQUFFO0FBQ1hULGlCQUFXLEVBQUU7QUFERjtBQWxFdUIsR0FBWjtBQUFBLENBQUQsQ0FBekIiLCJmaWxlIjoiLi9zcmMvdmlld3MvSG9tZS9zdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHtjb2xvcnN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHt5ZWxsb3d9IGZyb20gXCIuLi8uLi90aGVtZS9wYWxldHRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBmb250V2VpZ2h0OTAwOiB7XG4gICAgZm9udFdlaWdodDogOTAwLFxuICB9LFxuICBsZWZ0U2lkZUNvbnRlbnQ6IHtcbiAgICBcIiYgLnNlY3Rpb24taGVhZGVyX19jdGEtY29udGFpbmVyXCI6IHtcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIFwiJiAuc2VjdGlvbi1oZWFkZXJfX2N0YS1pdGVtLXdyYXBwZXJcIjoge1xuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBcIiY6bGFzdC1jaGlsZFwiOiB7XG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCImIC5NdWlCdXR0b25CYXNlLXJvb3RcIjoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGhlcm9TaGFwZWQ6IHtcbiAgICBcIiYgLmhlcm8tc2hhcGVkX19pbWFnZVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWx0ZXJuYXRlLm1haW4sXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgXCImIC5oZXJvLXNoYXBlZF9faW1hZ2VcIjoge1xuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgfSxcbiAgICAgIFwiJiAuaGVyby1zaGFwZWRfX3dyYXBwZXJcIjoge1xuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBpbWFnZUFuaW1hdGlvbjoge1xuICAgIGJhY2tncm91bmQ6IGB1cmwoXCJyZXN0YXVyYW50LmpwZWdcIilgLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiNDAwcHggYXV0b1wiLFxuICAgIHdpZHRoOiBcIjYwMCVcIixcbiAgICBoZWlnaHQ6IFwiNjAwJVwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCI4MDBweCBhdXRvXCIsXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2VTZWN0aW9uOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgfSxcbiAgc2VjdGlvbkltYWdlQ29udGFpbmVyOiB7XG4gICAgcGFkZGluZ0xlZnQ6IFwiMXJlbVwiLFxuICAgIHBhZGRpbmdSaWdodDogXCIxcmVtXCIsXG4gIH0sXG4gICAgcGFnZVBhZGRpbmdUb3A6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VjdGlvbk5vUGFkZGluZ1RvcDoge1xuICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICB9LFxuICAgIHNoYXBlOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmFsdGVybmF0ZS5tYWluLFxuICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICc0NSUnLFxuICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyZXlbMjAwXX1gLFxuICAgIH0sXG4gIG1lbnVQcmV2aWV3OiB7XG4gICAgcGFkZGluZ0xlZnQ6IFwiMnJlbVwiLFxuICB9XG59KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/views/Home/styles.js\n'
      );

      /***/
    },
});
