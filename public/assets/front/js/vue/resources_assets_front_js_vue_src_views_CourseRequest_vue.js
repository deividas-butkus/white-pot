(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_front_js_vue_src_views_CourseRequest_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/ContainerLayout.vue */ "./resources/assets/front/js/vue/src/layouts/ContainerLayout.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  name: 'CourseRequest',
  components: {
    ContainerLayout: _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      values: {
        name: '',
        surname: '',
        email: '',
        mobile: '',
        selectedCourse: ''
      },
      possibleCourses: [{
        value: 'sd6f54654654',
        text: 'Kaunas'
      }, {
        value: 'sd6f546rt54654',
        text: 'Vilnius'
      }, {
        value: 'sd6f54654uyu654',
        text: 'Remote'
      }, {
        value: 'sd6f546494654',
        text: 'Klaipėda'
      }]
    };
  },
  methods: {
    handleSubmit: function handleSubmit() {
      if (this.dataIsValid) {
        var formData = _objectSpread({}, this.values);

        console.log('Duomenys geri, važiuojam!', formData);
      }
    }
  },
  computed: {
    errors: function errors() {
      var result = {
        name: [],
        surname: [],
        email: [],
        mobile: [],
        selectedCourse: []
      }; // eslint-disable-next-line object-curly-newline

      var _this$values = this.values,
          name = _this$values.name,
          surname = _this$values.surname,
          email = _this$values.email,
          mobile = _this$values.mobile,
          selectedCourse = _this$values.selectedCourse;
      if (!name) result.name.push('Name is required');
      if (name && name.length < 2) result.name.push('Name must be at least 2 letter long');
      if (name && name.length > 32) result.name.push('Name can not be longer than 32 letters');
      if (!surname) result.surname.push('Surname is required');

      if (surname && surname.length < 2) {
        result.surname.push('Surname must be at least 2 letter long');
      }

      if (surname && surname.length > 32) {
        result.surname.push('Surname can not be longer than 32 letters');
      }

      if (!email) result.email.push('Email is required');
      if (email && !/^\S+@\S+\.\S+$/.test(email)) result.email.push('Invalid email format');
      if (!mobile) result.mobile.push('Mobile is required');

      if (mobile && !/^\+370(\s){0,1}\d{8}$/.test(mobile)) {
        result.mobile.push('Invalid LT number format');
      }

      if (!selectedCourse) result.selectedCourse.push('You must select a course');
      return result;
    },
    valid: function valid() {
      return Object.entries(this.errors).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            prop = _ref2[0],
            errors = _ref2[1];

        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, prop, errors.length > 0 ? false : undefined));
      }, {});
    },
    dataIsValid: function dataIsValid() {
      return Object.values(this.valid).every(function (x) {
        return x === undefined;
      });
    }
  }
}); // N.D.
// 1. Parsitraukt realius kursus į data kintamajį <possibleCourses>
// 2. course modulyje sukurti action + API užklausą, siųsti pasirinkto kurso duomenis,
// tam kad sukurti užklausą

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/CourseRequest.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/CourseRequest.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CourseRequest_vue_vue_type_template_id_fc6a20ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseRequest.vue?vue&type=template&id=fc6a20ba& */ "./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=template&id=fc6a20ba&");
/* harmony import */ var _CourseRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseRequest.vue?vue&type=script&lang=js& */ "./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CourseRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CourseRequest_vue_vue_type_template_id_fc6a20ba___WEBPACK_IMPORTED_MODULE_0__.render,
  _CourseRequest_vue_vue_type_template_id_fc6a20ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/front/js/vue/src/views/CourseRequest.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CourseRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=template&id=fc6a20ba&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=template&id=fc6a20ba& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseRequest_vue_vue_type_template_id_fc6a20ba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseRequest_vue_vue_type_template_id_fc6a20ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseRequest_vue_vue_type_template_id_fc6a20ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CourseRequest.vue?vue&type=template&id=fc6a20ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=template&id=fc6a20ba&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=template&id=fc6a20ba&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/CourseRequest.vue?vue&type=template&id=fc6a20ba& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("ContainerLayout", [
    _c(
      "form",
      {
        staticClass: "shadow p-4 mx-auto w-75 mt-5",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.handleSubmit($event)
          }
        }
      },
      [
        _c("h1", { staticClass: "h3" }, [_vm._v("Register for course")]),
        _vm._v(" "),
        _c(
          "b-row",
          [
            _c(
              "b-col",
              { attrs: { cols: "6" } },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      label: "Name",
                      "label-for": "name",
                      state: _vm.valid.name
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: { id: "name", state: _vm.valid.name, trim: "" },
                      model: {
                        value: _vm.values.name,
                        callback: function($$v) {
                          _vm.$set(_vm.values, "name", $$v)
                        },
                        expression: "values.name"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-form-invalid-feedback",
                      _vm._l(_vm.errors.name, function(err, i) {
                        return _c("div", { key: i }, [_vm._v(_vm._s(err))])
                      }),
                      0
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "6" } },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      label: "Surname",
                      "label-for": "surname",
                      state: _vm.valid.surname
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: { id: "surname", state: _vm.valid.surname },
                      model: {
                        value: _vm.values.surname,
                        callback: function($$v) {
                          _vm.$set(_vm.values, "surname", $$v)
                        },
                        expression: "values.surname"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-form-invalid-feedback",
                      _vm._l(_vm.errors.surname, function(err, i) {
                        return _c("div", { key: i }, [_vm._v(_vm._s(err))])
                      }),
                      0
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-row",
          [
            _c(
              "b-col",
              { attrs: { cols: "4" } },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      label: "Email",
                      "label-for": "email",
                      state: _vm.valid.email
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: { id: "email", state: _vm.valid.email, trim: "" },
                      model: {
                        value: _vm.values.email,
                        callback: function($$v) {
                          _vm.$set(_vm.values, "email", $$v)
                        },
                        expression: "values.email"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-form-invalid-feedback",
                      _vm._l(_vm.errors.email, function(err, i) {
                        return _c("div", { key: i }, [_vm._v(_vm._s(err))])
                      }),
                      0
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "4" } },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      label: "Mobile",
                      "label-for": "mobile",
                      "valid-feedback": "Field is valid",
                      state: _vm.valid.mobile
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: { id: "mobile", state: _vm.valid.mobile },
                      model: {
                        value: _vm.values.mobile,
                        callback: function($$v) {
                          _vm.$set(_vm.values, "mobile", $$v)
                        },
                        expression: "values.mobile"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-form-invalid-feedback",
                      _vm._l(_vm.errors.mobile, function(err, i) {
                        return _c("div", { key: i }, [_vm._v(_vm._s(err))])
                      }),
                      0
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "4" } },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      label: "Selected Course",
                      "label-for": "selected-course",
                      "valid-feedback": "Field is valid",
                      state: _vm.valid.selectedCourse
                    }
                  },
                  [
                    _c("b-form-select", {
                      attrs: {
                        id: "selected-course",
                        options: _vm.possibleCourses,
                        state: _vm.valid.selectedCourse
                      },
                      model: {
                        value: _vm.values.selectedCourse,
                        callback: function($$v) {
                          _vm.$set(_vm.values, "selectedCourse", $$v)
                        },
                        expression: "values.selectedCourse"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-form-invalid-feedback",
                      _vm._l(_vm.errors.selectedCourse, function(err, i) {
                        return _c("div", { key: i }, [
                          _vm._v(
                            "\n              " + _vm._s(err) + "\n            "
                          )
                        ])
                      }),
                      0
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-center mt-3" },
          [
            _c(
              "b-button",
              {
                attrs: {
                  variant: "success",
                  size: "lg",
                  type: "submit",
                  disabled: !_vm.dataIsValid
                }
              },
              [_vm._v("\n        Request Course!\n      ")]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);