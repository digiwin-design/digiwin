/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/WB00278501_produce.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/WB00278501_produce.js":
/*!**********************************!*\
  !*** ./js/WB00278501_produce.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_WB00278501_produce_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/WB00278501_produce/style.scss */ "./sass/WB00278501_produce/style.scss");
/* harmony import */ var _sass_WB00278501_produce_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_WB00278501_produce_style_scss__WEBPACK_IMPORTED_MODULE_0__);
 // Vue.use(VueAwesomeSwiper);

var store = new Vuex.Store({
  state: {
    isMobile: false,
    isMediumWidth: false,
    result: null
  },
  mutations: {
    updateDevice: function updateDevice(state, payload) {
      state.isMobile = payload;
    },
    updateDevice2: function updateDevice2(state, payload) {
      state.isMediumWidth = payload;
    },
    setData: function setData(state, payload) {
      state.result = payload;
    }
  },
  actions: {
    getData: function getData(context) {
      axios.get('public/db.json').then(function (res) {
        context.commit('setData', res.data.WB00278501_produce);
        app.$nextTick(function () {
          // 依據選單高度設定main上方間距
          var menuHeight = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
          document.querySelector('main').style.paddingTop = menuHeight > 50 ? '50px' : 0;

          if (location.hash) {
            app.moveTo(location.hash);
          }
        });
      });
    }
  }
});
var app = new Vue({
  el: 'main',
  computed: {
    isMobile: function isMobile() {
      return store.state.isMobile;
    },
    isMediumWidth: function isMediumWidth() {
      return store.state.isMediumWidth;
    },
    result: function result() {
      return store.state.result;
    }
  },
  methods: {
    mediaSensor: function mediaSensor(minWidth) {
      var resizeWidth = function resizeWidth(pMatchMedia) {
        return store.commit('updateDevice', !pMatchMedia.matches);
      };

      var mm = window.matchMedia("(min-width: ".concat(minWidth + 1, "px)"));
      mm.addListener(resizeWidth);
      resizeWidth(mm);
    },
    mediaSensor2: function mediaSensor2(minWidth) {
      var resizeWidth = function resizeWidth(pMatchMedia) {
        return store.commit('updateDevice2', !pMatchMedia.matches);
      };

      var mm = window.matchMedia("(min-width: ".concat(minWidth + 1, "px)"));
      mm.addListener(resizeWidth);
      resizeWidth(mm);
    },
    moveTo: function moveTo(selector) {
      var target = document.querySelector(selector);
      if (!target) return;
      var offset = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
      var targetPos = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset;
      var finalPos = offset ? targetPos - offset : targetPos;
      window.scroll({
        top: finalPos,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  created: function created() {
    store.dispatch('getData');
  },
  mounted: function mounted() {
    this.mediaSensor(768);
    this.mediaSensor2(1199);
  }
});

/***/ }),

/***/ "./sass/WB00278501_produce/style.scss":
/*!********************************************!*\
  !*** ./sass/WB00278501_produce/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=WB00278501_produce.js.map