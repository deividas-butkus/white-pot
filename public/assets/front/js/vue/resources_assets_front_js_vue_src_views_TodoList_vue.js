(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_front_js_vue_src_views_TodoList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/ContainerLayout.vue */ "./resources/assets/front/js/vue/src/layouts/ContainerLayout.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  components: {
    ContainerLayout: _layouts_ContainerLayout_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      todos: [{
        id: '1',
        title: 'Pastatys piramidę',
        done: false
      }, {
        id: '2',
        title: 'Palaižyt sau pažastį',
        done: true
      }, {
        id: '3',
        title: 'Išsimaudyt vonioje alaus',
        done: false
      }, {
        id: '4',
        title: 'Padirbt kasininku 2 savaites',
        done: true
      }, {
        id: '5',
        title: 'Pasodint medį',
        done: false
      }],
      newTitle: ''
    };
  },
  methods: {
    addItem: function addItem() {
      var newId = String(Math.max.apply(Math, _toConsumableArray(this.todos.map(function (_ref) {
        var id = _ref.id;
        return +id;
      }))) + 1);
      this.todos = [].concat(_toConsumableArray(this.todos), [{
        id: newId,
        title: this.newTitle,
        done: false
      }]);
    },
    // Šiuo metu funkcija nėra naudojama, update logika parašyta šalia update mygtuko
    updateItem: function updateItem(id) {
      var updatedItem = this.todos.find(function (t) {
        return t.id === id;
      });
      updatedItem.done = !updatedItem.done;
    },
    deleteItem: function deleteItem(id) {
      this.todos = this.todos.filter(function (t) {
        return t.id !== id;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".done[data-v-54e08725] {\n  text-decoration: line-through;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/TodoList.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/TodoList.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TodoList_vue_vue_type_template_id_54e08725_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList.vue?vue&type=template&id=54e08725&scoped=true& */ "./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=template&id=54e08725&scoped=true&");
/* harmony import */ var _TodoList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList.vue?vue&type=script&lang=js& */ "./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=script&lang=js&");
/* harmony import */ var _TodoList_vue_vue_type_style_index_0_id_54e08725_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true& */ "./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _TodoList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TodoList_vue_vue_type_template_id_54e08725_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TodoList_vue_vue_type_template_id_54e08725_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "54e08725",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/front/js/vue/src/views/TodoList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TodoList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=template&id=54e08725&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=template&id=54e08725&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_template_id_54e08725_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_template_id_54e08725_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_template_id_54e08725_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TodoList.vue?vue&type=template&id=54e08725&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=template&id=54e08725&scoped=true&");


/***/ }),

/***/ "./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_style_index_0_id_54e08725_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_style_index_0_id_54e08725_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_style_index_0_id_54e08725_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_style_index_0_id_54e08725_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoList_vue_vue_type_style_index_0_id_54e08725_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=template&id=54e08725&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=template&id=54e08725&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    _c("h1", [_vm._v("Todo list")]),
    _vm._v(" "),
    _c("ol", [
      _c("li", [
        _vm._v(
          "\n      Sukurti duomenis 'todos', Vue komponento data funkcijos grąžinamame\n      objekte, sukurti darbai turi pasižymėti tokiomis savybėmis\n      "
        ),
        _c("ul", [
          _c("li", [_vm._v("id: string")]),
          _vm._v(" "),
          _c("li", [_vm._v("title: string")]),
          _vm._v(" "),
          _c("li", [_vm._v("done: bool")])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      Sukurti įvesties lauko ir mygtuko paspaudimo formą naujam darbui pridėti\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      Įgalinti pridėjimą uždedant formai 'submit.prevent' įvykio klausiklį\n      "
        ),
        _c("br"),
        _vm._v(
          "\n      kuris turi kviesti Vue.js komponento methods objekte aprašytą funkciją\n      'addItem'. "
        ),
        _c("br"),
        _vm._v(
          "\n      Šis metodas turi pridėti naują objektą į 'todos masyvą':\n      "
        ),
        _c("ol", [
          _c("li", [_vm._v("su nauju unikaliu 'id'")]),
          _vm._v(" "),
          _c("li", [_vm._v("'done: false'")]),
          _vm._v(" "),
          _c("li", [_vm._v("ir įvesties lauke aprašytą 'title' reikšme")])
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v("\n      Atvaizduoti esamus darbus. "),
        _c("br"),
        _vm._v(
          "\n      Jeigu darbas atliktas, jo atvaizduojamą 'title' savybės reikšmę\n      perbraukti. Taip pat šalia kiekvieno darbo pavadinimo sukurti trinimo\n      mygtuką.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      įgalinti kiekvieno darbo trinimą, papaudus ta šalia sukurtą mygtuką.\n    "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n      įgalinti kiekvieno darbo 'done' savybės pakitimą priešinga, paspaudus\n      darbo pavadinimą 'title'\n    "
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "d-flex justify-content-center" },
      [
        _c(
          "b-card",
          [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.addItem($event)
                  }
                }
              },
              [
                _c(
                  "b-input-group",
                  { attrs: { prepend: "Username" } },
                  [
                    _c("b-form-input", {
                      model: {
                        value: _vm.newTitle,
                        callback: function($$v) {
                          _vm.newTitle = $$v
                        },
                        expression: "newTitle"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "b-input-group-append",
                      [
                        _c(
                          "b-button",
                          {
                            attrs: {
                              variant: "outline-success",
                              type: "submit"
                            }
                          },
                          [_vm._v("\n              Add Todo\n            ")]
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
            _c("b-table", {
              attrs: {
                striped: "",
                hover: "",
                fields: [
                  { key: "title", label: "Title" },
                  { key: "toggle", label: "Toggle job" },
                  { key: "delete", label: "Delete job" }
                ],
                items: _vm.todos
              },
              scopedSlots: _vm._u([
                {
                  key: "cell(title)",
                  fn: function(data) {
                    return [
                      _c("div", { class: { done: data.item.done } }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(data.item.title) +
                            "\n          "
                        )
                      ])
                    ]
                  }
                },
                {
                  key: "cell(toggle)",
                  fn: function(data) {
                    return [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "warning" },
                          on: {
                            click: function($event) {
                              data.item.done = !data.item.done
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(data.item.done ? "Undo" : "Do") +
                              "\n          "
                          )
                        ]
                      )
                    ]
                  }
                },
                {
                  key: "cell(delete)",
                  fn: function(data) {
                    return [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.deleteItem(data.item.id)
                            }
                          }
                        },
                        [_vm._v("\n            Delete\n          ")]
                      )
                    ]
                  }
                }
              ])
            })
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



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/front/js/vue/src/views/TodoList.vue?vue&type=style&index=0&id=54e08725&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1d282df3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);