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
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jeremy_Workspace_restaurant_goutdouest_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(_c = function _c(theme) {\n  return {\n    fontWeight900: {\n      fontWeight: 900\n    },\n    leftSideContent: {\n      "& .section-header__cta-container": (0,_Users_jeremy_Workspace_restaurant_goutdouest_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.breakpoints.down("xs"), {\n        flexDirection: "column",\n        "& .section-header__cta-item-wrapper": {\n          width: "100%",\n          "&:last-child": {\n            marginLeft: 0,\n            marginTop: theme.spacing(1)\n          },\n          "& .MuiButtonBase-root": {\n            width: "100%"\n          }\n        }\n      })\n    },\n    heroShaped: (0,_Users_jeremy_Workspace_restaurant_goutdouest_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({\n      "& .hero-shaped__image": {\n        backgroundColor: theme.palette.alternate.main\n      }\n    }, theme.breakpoints.down("sm"), {\n      "& .hero-shaped__image": {\n        position: "relative"\n      },\n      "& .hero-shaped__wrapper": {\n        flexDirection: "column"\n      }\n    }),\n    imageAnimation: (0,_Users_jeremy_Workspace_restaurant_goutdouest_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({\n      background: "url(\\"restaurant.jpeg\\")",\n      backgroundRepeat: "no-repeat",\n      backgroundSize: "400px auto",\n      width: "600%",\n      height: "600%",\n      position: "absolute"\n    }, theme.breakpoints.up("sm"), {\n      backgroundSize: "800px auto"\n    }),\n    imageSection: {\n      borderRadius: 10\n    },\n    sectionImageContainer: {\n      paddingLeft: "1rem",\n      paddingRight: "1rem"\n    },\n    pagePaddingTop: (0,_Users_jeremy_Workspace_restaurant_goutdouest_front_end_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({\n      paddingTop: theme.spacing(3)\n    }, theme.breakpoints.up(\'md\'), {\n      paddingTop: theme.spacing(5)\n    }),\n    sectionNoPaddingTop: {\n      paddingTop: 0\n    },\n    shape: {\n      background: theme.palette.alternate.main,\n      borderBottomRightRadius: \'45%\',\n      borderBottom: "1px solid ".concat(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.colors.grey[200])\n    },\n    noPadding: {\n      padding: 0\n    }\n  };\n}));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, "%default%$makeStyles");\n$RefreshReg$(_c2, "%default%");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXdzL0hvbWUvc3R5bGVzLmpzP2EzNDgiXSwibmFtZXMiOlsibWFrZVN0eWxlcyIsInRoZW1lIiwiZm9udFdlaWdodDkwMCIsImZvbnRXZWlnaHQiLCJsZWZ0U2lkZUNvbnRlbnQiLCJicmVha3BvaW50cyIsImRvd24iLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwic3BhY2luZyIsImhlcm9TaGFwZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYWx0ZXJuYXRlIiwibWFpbiIsInBvc2l0aW9uIiwiaW1hZ2VBbmltYXRpb24iLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiaGVpZ2h0IiwidXAiLCJpbWFnZVNlY3Rpb24iLCJib3JkZXJSYWRpdXMiLCJzZWN0aW9uSW1hZ2VDb250YWluZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZ2VQYWRkaW5nVG9wIiwicGFkZGluZ1RvcCIsInNlY3Rpb25Ob1BhZGRpbmdUb3AiLCJzaGFwZSIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tIiwiY29sb3JzIiwibm9QYWRkaW5nIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlLE1BQUFBLG9FQUFVLE1BQUMsWUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDcENDLGlCQUFhLEVBQUU7QUFDYkMsZ0JBQVUsRUFBRTtBQURDLEtBRHFCO0FBSXBDQyxtQkFBZSxFQUFFO0FBQ2YsdU5BQ0dILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FESCxFQUNrQztBQUM5QkMscUJBQWEsRUFBRSxRQURlO0FBRTlCLCtDQUF1QztBQUNyQ0MsZUFBSyxFQUFFLE1BRDhCO0FBRXJDLDBCQUFnQjtBQUNkQyxzQkFBVSxFQUFFLENBREU7QUFFZEMscUJBQVMsRUFBRVQsS0FBSyxDQUFDVSxPQUFOLENBQWMsQ0FBZDtBQUZHLFdBRnFCO0FBTXJDLG1DQUF5QjtBQUN2QkgsaUJBQUssRUFBRTtBQURnQjtBQU5ZO0FBRlQsT0FEbEM7QUFEZSxLQUptQjtBQXFCcENJLGNBQVUsRUFBRTtBQUNWLCtCQUF5QjtBQUN2QkMsdUJBQWUsRUFBRVosS0FBSyxDQUFDYSxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDO0FBRGxCO0FBRGpCLE9BSVBmLEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FKTyxFQUl3QjtBQUM5QiwrQkFBeUI7QUFDdkJXLGdCQUFRLEVBQUU7QUFEYSxPQURLO0FBSTlCLGlDQUEyQjtBQUN6QlYscUJBQWEsRUFBRTtBQURVO0FBSkcsS0FKeEIsQ0FyQjBCO0FBa0NwQ1csa0JBQWMsRUFBRTtBQUNkQyxnQkFBVSw0QkFERTtBQUVaQyxzQkFBZ0IsRUFBRSxXQUZOO0FBR1pDLG9CQUFjLEVBQUUsWUFISjtBQUlaYixXQUFLLEVBQUUsTUFKSztBQUtaYyxZQUFNLEVBQUUsTUFMSTtBQU1aTCxjQUFRLEVBQUU7QUFORSxPQU9YaEIsS0FBSyxDQUFDSSxXQUFOLENBQWtCa0IsRUFBbEIsQ0FBcUIsSUFBckIsQ0FQVyxFQU9rQjtBQUM1QkYsb0JBQWMsRUFBRTtBQURZLEtBUGxCLENBbENzQjtBQTZDcENHLGdCQUFZLEVBQUU7QUFDWkMsa0JBQVksRUFBRTtBQURGLEtBN0NzQjtBQWdEcENDLHlCQUFxQixFQUFFO0FBQ3JCQyxpQkFBVyxFQUFFLE1BRFE7QUFFckJDLGtCQUFZLEVBQUU7QUFGTyxLQWhEYTtBQW9EbENDLGtCQUFjLEVBQUU7QUFDZEMsZ0JBQVUsRUFBRTdCLEtBQUssQ0FBQ1UsT0FBTixDQUFjLENBQWQ7QUFEQSxPQUVYVixLQUFLLENBQUNJLFdBQU4sQ0FBa0JrQixFQUFsQixDQUFxQixJQUFyQixDQUZXLEVBRWtCO0FBQzVCTyxnQkFBVSxFQUFFN0IsS0FBSyxDQUFDVSxPQUFOLENBQWMsQ0FBZDtBQURnQixLQUZsQixDQXBEb0I7QUEwRGxDb0IsdUJBQW1CLEVBQUU7QUFDbkJELGdCQUFVLEVBQUU7QUFETyxLQTFEYTtBQTZEbENFLFNBQUssRUFBRTtBQUNMYixnQkFBVSxFQUFFbEIsS0FBSyxDQUFDYSxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLElBRC9CO0FBRUxpQiw2QkFBdUIsRUFBRSxLQUZwQjtBQUdMQyxrQkFBWSxzQkFBZUMsK0RBQWY7QUFIUCxLQTdEMkI7QUFrRXBDQyxhQUFTLEVBQUU7QUFDVEMsYUFBTyxFQUFFO0FBREE7QUFsRXlCLEdBQVo7QUFBQSxDQUFELENBQXpCIiwiZmlsZSI6Ii4vc3JjL3ZpZXdzL0hvbWUvc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7Y29sb3JzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGZvbnRXZWlnaHQ5MDA6IHtcbiAgICBmb250V2VpZ2h0OiA5MDAsXG4gIH0sXG4gIGxlZnRTaWRlQ29udGVudDoge1xuICAgIFwiJiAuc2VjdGlvbi1oZWFkZXJfX2N0YS1jb250YWluZXJcIjoge1xuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgXCImIC5zZWN0aW9uLWhlYWRlcl9fY3RhLWl0ZW0td3JhcHBlclwiOiB7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIFwiJjpsYXN0LWNoaWxkXCI6IHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDAsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIiYgLk11aUJ1dHRvbkJhc2Utcm9vdFwiOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaGVyb1NoYXBlZDoge1xuICAgIFwiJiAuaGVyby1zaGFwZWRfX2ltYWdlXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5hbHRlcm5hdGUubWFpbixcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XG4gICAgICBcIiYgLmhlcm8tc2hhcGVkX19pbWFnZVwiOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICB9LFxuICAgICAgXCImIC5oZXJvLXNoYXBlZF9fd3JhcHBlclwiOiB7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGltYWdlQW5pbWF0aW9uOiB7XG4gICAgYmFja2dyb3VuZDogYHVybChcInJlc3RhdXJhbnQuanBlZ1wiKWAsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCI0MDBweCBhdXRvXCIsXG4gICAgd2lkdGg6IFwiNjAwJVwiLFxuICAgIGhlaWdodDogXCI2MDAlXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcbiAgICAgIGJhY2tncm91bmRTaXplOiBcIjgwMHB4IGF1dG9cIixcbiAgICB9LFxuICB9LFxuICBpbWFnZVNlY3Rpb246IHtcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICB9LFxuICBzZWN0aW9uSW1hZ2VDb250YWluZXI6IHtcbiAgICBwYWRkaW5nTGVmdDogXCIxcmVtXCIsXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjFyZW1cIixcbiAgfSxcbiAgICBwYWdlUGFkZGluZ1RvcDoge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZWN0aW9uTm9QYWRkaW5nVG9wOiB7XG4gICAgICBwYWRkaW5nVG9wOiAwLFxuICAgIH0sXG4gICAgc2hhcGU6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYWx0ZXJuYXRlLm1haW4sXG4gICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzQ1JScsXG4gICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtjb2xvcnMuZ3JleVsyMDBdfWAsXG4gICAgfSxcbiAgbm9QYWRkaW5nOiB7XG4gICAgcGFkZGluZzogMCxcbiAgfVxufSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/Home/styles.js\n'
      );

      /***/
    },
});