(self.webpackChunk=self.webpackChunk||[]).push([[386],{4386:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var a,n,l=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(a=r.next()).done)&&(l.push(a.value),!t||l.length!==t);s=!0);}catch(e){o=!0,n=e}finally{try{s||null==r.return||r.return()}finally{if(o)throw n}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u={name:"CourseRequest",components:{ContainerLayout:r(7190).Z},data:function(){return{values:{name:"",surname:"",email:"",mobile:"",selectedCourse:""},possibleCourses:[{value:"sd6f54654654",text:"Kaunas"},{value:"sd6f546rt54654",text:"Vilnius"},{value:"sd6f54654uyu654",text:"Remote"},{value:"sd6f546494654",text:"Klaipėda"}]}},methods:{handleSubmit:function(){if(this.dataIsValid){var e=s({},this.values);console.log("Duomenys geri, važiuojam!",e)}}},computed:{errors:function(){var e={name:[],surname:[],email:[],mobile:[],selectedCourse:[]},t=this.values,r=t.name,a=t.surname,n=t.email,l=t.mobile,s=t.selectedCourse;return r||e.name.push("Name is required"),r&&r.length<2&&e.name.push("Name must be at least 2 letter long"),r&&r.length>32&&e.name.push("Name can not be longer than 32 letters"),a||e.surname.push("Surname is required"),a&&a.length<2&&e.surname.push("Surname must be at least 2 letter long"),a&&a.length>32&&e.surname.push("Surname can not be longer than 32 letters"),n||e.email.push("Email is required"),n&&!/^\S+@\S+\.\S+$/.test(n)&&e.email.push("Invalid email format"),l||e.mobile.push("Mobile is required"),l&&!/^\+370(\s){0,1}\d{8}$/.test(l)&&e.mobile.push("Invalid LT number format"),s||e.selectedCourse.push("You must select a course"),e},valid:function(){return Object.entries(this.errors).reduce((function(e,t){var r=a(t,2),n=r[0],l=r[1];return s(s({},e),{},o({},n,!(l.length>0)&&void 0))}),{})},dataIsValid:function(){return Object.values(this.valid).every((function(e){return void 0===e}))}}};const i=(0,r(1900).Z)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContainerLayout",[r("form",{staticClass:"shadow p-4 mx-auto w-75 mt-5",on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("h1",{staticClass:"h3"},[e._v("Register for course")]),e._v(" "),r("b-row",[r("b-col",{attrs:{cols:"6"}},[r("b-form-group",{attrs:{label:"Name","label-for":"name",state:e.valid.name}},[r("b-form-input",{attrs:{id:"name",state:e.valid.name,trim:""},model:{value:e.values.name,callback:function(t){e.$set(e.values,"name",t)},expression:"values.name"}}),e._v(" "),r("b-form-invalid-feedback",e._l(e.errors.name,(function(t,a){return r("div",{key:a},[e._v(e._s(t))])})),0)],1)],1),e._v(" "),r("b-col",{attrs:{cols:"6"}},[r("b-form-group",{attrs:{label:"Surname","label-for":"surname",state:e.valid.surname}},[r("b-form-input",{attrs:{id:"surname",state:e.valid.surname},model:{value:e.values.surname,callback:function(t){e.$set(e.values,"surname",t)},expression:"values.surname"}}),e._v(" "),r("b-form-invalid-feedback",e._l(e.errors.surname,(function(t,a){return r("div",{key:a},[e._v(e._s(t))])})),0)],1)],1)],1),e._v(" "),r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("b-form-group",{attrs:{label:"Email","label-for":"email",state:e.valid.email}},[r("b-form-input",{attrs:{id:"email",state:e.valid.email,trim:""},model:{value:e.values.email,callback:function(t){e.$set(e.values,"email",t)},expression:"values.email"}}),e._v(" "),r("b-form-invalid-feedback",e._l(e.errors.email,(function(t,a){return r("div",{key:a},[e._v(e._s(t))])})),0)],1)],1),e._v(" "),r("b-col",{attrs:{cols:"4"}},[r("b-form-group",{attrs:{label:"Mobile","label-for":"mobile","valid-feedback":"Field is valid",state:e.valid.mobile}},[r("b-form-input",{attrs:{id:"mobile",state:e.valid.mobile},model:{value:e.values.mobile,callback:function(t){e.$set(e.values,"mobile",t)},expression:"values.mobile"}}),e._v(" "),r("b-form-invalid-feedback",e._l(e.errors.mobile,(function(t,a){return r("div",{key:a},[e._v(e._s(t))])})),0)],1)],1),e._v(" "),r("b-col",{attrs:{cols:"4"}},[r("b-form-group",{attrs:{label:"Selected Course","label-for":"selected-course","valid-feedback":"Field is valid",state:e.valid.selectedCourse}},[r("b-form-select",{attrs:{id:"selected-course",options:e.possibleCourses,state:e.valid.selectedCourse},model:{value:e.values.selectedCourse,callback:function(t){e.$set(e.values,"selectedCourse",t)},expression:"values.selectedCourse"}}),e._v(" "),r("b-form-invalid-feedback",e._l(e.errors.selectedCourse,(function(t,a){return r("div",{key:a},[e._v("\n              "+e._s(t)+"\n            ")])})),0)],1)],1)],1),e._v(" "),r("div",{staticClass:"text-center mt-3"},[r("b-button",{attrs:{variant:"success",size:"lg",type:"submit",disabled:!e.dataIsValid}},[e._v("\n        Request Course!\n      ")])],1)],1)])}),[],!1,null,null,null).exports}}]);