/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"WB00278501": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./js/WB00278501.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/WB00278501.js":
/*!**************************!*\
  !*** ./js/WB00278501.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_WB00278501_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/WB00278501/style.scss */ \"./sass/WB00278501/style.scss\");\n/* harmony import */ var _sass_WB00278501_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_WB00278501_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n // Vue.use(VueAwesomeSwiper);\n\nvar store = new Vuex.Store({\n  state: {\n    isMobile: false,\n    isMediumWidth: false,\n    result: null\n  },\n  mutations: {\n    updateDevice: function updateDevice(state, payload) {\n      state.isMobile = payload;\n    },\n    updateDevice2: function updateDevice2(state, payload) {\n      state.isMediumWidth = payload;\n    },\n    setData: function setData(state, payload) {\n      state.result = payload;\n    }\n  },\n  actions: {\n    getData: function getData(context) {\n      axios.get('public/db.json').then(function (res) {\n        context.commit('setData', res.data.WB00278501);\n        app.$nextTick(function () {\n          // 依據選單高度設定main上方間距\n          var menuHeight = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;\n          document.querySelector('main').style.paddingTop = menuHeight > 50 ? '50px' : 0;\n\n          if (location.hash) {\n            app.moveTo(location.hash);\n          }\n        });\n      });\n    }\n  }\n});\nvar app = new Vue({\n  el: 'main',\n  computed: {\n    isMobile: function isMobile() {\n      return store.state.isMobile;\n    },\n    isMediumWidth: function isMediumWidth() {\n      return store.state.isMediumWidth;\n    },\n    result: function result() {\n      return store.state.result;\n    }\n  },\n  methods: {\n    mediaSensor: function mediaSensor(minWidth) {\n      var resizeWidth = function resizeWidth(pMatchMedia) {\n        return store.commit('updateDevice', !pMatchMedia.matches);\n      };\n\n      var mm = window.matchMedia(\"(min-width: \".concat(minWidth + 1, \"px)\"));\n      mm.addListener(resizeWidth);\n      resizeWidth(mm);\n    },\n    mediaSensor2: function mediaSensor2(minWidth) {\n      var resizeWidth = function resizeWidth(pMatchMedia) {\n        return store.commit('updateDevice2', !pMatchMedia.matches);\n      };\n\n      var mm = window.matchMedia(\"(min-width: \".concat(minWidth + 1, \"px)\"));\n      mm.addListener(resizeWidth);\n      resizeWidth(mm);\n    },\n    moveTo: function moveTo(selector) {\n      var target = document.querySelector(selector);\n      if (!target) return;\n      var offset = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;\n      var targetPos = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset;\n      var finalPos = offset ? targetPos - offset : targetPos;\n      window.scroll({\n        top: finalPos,\n        left: 0,\n        behavior: 'smooth'\n      });\n    }\n  },\n  created: function created() {\n    store.dispatch('getData');\n  },\n  mounted: function mounted() {\n    this.mediaSensor(768);\n    this.mediaSensor2(1199);\n  }\n});\n\n//# sourceURL=webpack:///./js/WB00278501.js?");

/***/ }),

/***/ "./sass/WB00278501/style.scss":
/*!************************************!*\
  !*** ./sass/WB00278501/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./sass/WB00278501/style.scss?");

/***/ })

/******/ });