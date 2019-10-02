(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./my_project/static/js/user/models/user.js":
/*!**************************************************!*\
  !*** ./my_project/static/js/user/models/user.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*global define */\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [\n    __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\")\n], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Backbone) {\n    'use strict';\n\n    var MainModel = Backbone.Model.extend({\n\n        urlRoot: \"api/user/\",\n    });\n\n    return MainModel;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./my_project/static/js/user/models/user.js?");

/***/ }),

/***/ "./my_project/static/js/user/templates/user.handlebars":
/*!*************************************************************!*\
  !*** ./my_project/static/js/user/templates/user.handlebars ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ../../../../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"compiler\":[8,\">= 4.3.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    return \"<p>Hello Vishwanath u did it</p>\";\n},\"useData\":true});\n\n//# sourceURL=webpack:///./my_project/static/js/user/templates/user.handlebars?");

/***/ }),

/***/ "./my_project/static/js/user/views/user.js":
/*!*************************************************!*\
  !*** ./my_project/static/js/user/views/user.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [\n    __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\"),\n    __webpack_require__(/*! jquery */ \"jquery\"),\n    __webpack_require__(/*! ../models/user */ \"./my_project/static/js/user/models/user.js\"),\n    __webpack_require__(/*! ../templates/user.handlebars */ \"./my_project/static/js/user/templates/user.handlebars\")\n], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Backbone, $, UserModel, UserTemplate) {\n    'use strict';\n\n    var UserView = Backbone.View.extend({\n        el: '.main-container',\n        initialize() {\n            this.render()\n        },\n        render: function(){\n            let user = new UserModel()\n            this.$el.append(UserTemplate());\n            console.log(\"Inside render function\");\n        }\n    });\n\n    return UserView;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n\n//# sourceURL=webpack:///./my_project/static/js/user/views/user.js?");

/***/ })

}]);