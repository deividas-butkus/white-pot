(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_front_js_vue_src_views_Courses_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Card',
  props: {
    cardData: Object
  },
  data: function data() {
    var _this$cardData$requir;

    return _objectSpread(_objectSpread({}, this.cardData), {}, {
      requiredCourses: (_this$cardData$requir = this.cardData.requiredCourses) !== null && _this$cardData$requir !== void 0 ? _this$cardData$requir : []
    });
  },
  methods: {
    getLocationTitles: function getLocationTitles(locationIds) {
      return this.$store.getters['locations/getLocationTitles'](locationIds);
    },
    getCourseTitles: function getCourseTitles(courseIds) {
      return this.$store.getters['courses/getCourseTitles'](courseIds);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/ContainerLayout.vue */ "./resources/assets/front/js/vue/src/layouts/ContainerLayout.vue");
/* harmony import */ var _components_courses_Card_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/courses/Card.vue */ "./resources/assets/front/js/vue/src/components/courses/Card.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Courses',
  components: {
    ContainerLayout: _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    Card: _components_courses_Card_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      locationFilters: this.$store.getters['locations/getLocations'].map(function (loc) {
        return _objectSpread(_objectSpread({}, loc), {}, {
          checked: true
        });
      })
    };
  },
  computed: {
    filteredCourses: function filteredCourses() {
      return this.$store.getters['courses/getCoursesByLocations'](this.locationFilters.filter(function (_ref) {
        var checked = _ref.checked;
        return checked;
      }).map(function (_ref2) {
        var id = _ref2.id;
        return id;
      }));
    }
  }
});

/***/ }),

/***/ "./resources/assets/front/js/vue/src/components/courses/Card.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/components/courses/Card.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_bec9eaa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=bec9eaa0& */ "./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=template&id=bec9eaa0&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Card_vue_vue_type_template_id_bec9eaa0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Card_vue_vue_type_template_id_bec9eaa0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/front/js/vue/src/components/courses/Card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/Courses.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/Courses.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Courses.vue?vue&type=template&id=da98eeb2& */ "./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2&");
/* harmony import */ var _Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Courses.vue?vue&type=script&lang=js& */ "./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/front/js/vue/src/views/Courses.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Courses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=template&id=bec9eaa0&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=template&id=bec9eaa0& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_bec9eaa0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_bec9eaa0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_bec9eaa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=template&id=bec9eaa0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=template&id=bec9eaa0&");


/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Courses_vue_vue_type_template_id_da98eeb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Courses.vue?vue&type=template&id=da98eeb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=template&id=bec9eaa0&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/components/courses/Card.vue?vue&type=template&id=bec9eaa0& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "shadow mb-3" },
    [
      _c(
        "b-row",
        { attrs: { "no-gutters": "" } },
        [
          _c("b-col", { attrs: { cols: "8" } }, [
            _c("h3", { staticClass: "mb-0" }, [_vm._v(_vm._s(_vm.title))]),
            _vm._v(" "),
            _c(
              "div",
              _vm._l(_vm.tags, function(tag) {
                return _c("b-badge", { key: tag, staticClass: "mr-2" }, [
                  _vm._v(_vm._s(tag))
                ])
              }),
              1
            ),
            _vm._v(" "),
            _c("p", { staticClass: "my-3" }, [_vm._v(_vm._s(_vm.description))])
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "pl-3 border-left", attrs: { cols: "2" } },
            [
              _c("h3", { staticClass: "h5" }, [_vm._v("Locations:")]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "list-unstyled" },
                _vm._l(_vm.getLocationTitles(_vm.locations), function(loc) {
                  return _c("li", { key: loc }, [
                    _vm._v("\n          " + _vm._s(loc) + "\n        ")
                  ])
                }),
                0
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "pl-3 border-left", attrs: { cols: "2" } },
            [
              _c("h3", { staticClass: "h5" }, [_vm._v("Required courses")]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "list-unstyled" },
                _vm._l(_vm.getCourseTitles(_vm.requiredCourses), function(
                  reqCourse
                ) {
                  return _c("li", { key: reqCourse }, [
                    _vm._v("\n          " + _vm._s(reqCourse) + "\n        ")
                  ])
                }),
                0
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/Courses.vue?vue&type=template&id=da98eeb2& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ContainerLayout",
    [
      _c("h1", { staticClass: "mb-5" }, [_vm._v("Courses")]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { cols: "3" } },
            [
              _c("h2", { staticClass: "h3" }, [_vm._v("Filters")]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("h3", { staticClass: "h4" }, [_vm._v("Locations")]),
              _vm._v(" "),
              _vm._l(_vm.locationFilters, function(loc) {
                return _c(
                  "b-form-checkbox",
                  {
                    key: loc.id,
                    model: {
                      value: loc.checked,
                      callback: function($$v) {
                        _vm.$set(loc, "checked", $$v)
                      },
                      expression: "loc.checked"
                    }
                  },
                  [_vm._v("\n        " + _vm._s(loc.title) + "\n      ")]
                )
              }),
              _vm._v(" "),
              _c("hr")
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "9" } },
            [
              _c("h2", { staticClass: "h3" }, [_vm._v("Courses")]),
              _vm._v(" "),
              _vm._l(_vm.filteredCourses, function(course) {
                return _c("Card", {
                  key: course.id,
                  attrs: { "card-data": course }
                })
              })
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);