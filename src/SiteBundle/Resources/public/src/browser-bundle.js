/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Hamburger = __webpack_require__(4);
	
	var _Hamburger2 = _interopRequireDefault(_Hamburger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(document).ready(function () {
	  console.log('Document ready');
	
	  var menu = new _Hamburger2.default();
	
	  var FadeTransition = Barba.BaseTransition.extend({
	    start: function start() {
	      /**
	       * This function is automatically called as soon the Transition starts
	       * this.newContainerLoading is a Promise for the loading of the new container
	       * (Barba.js also comes with an handy Promise polyfill!)
	       */
	
	      // As soon the loading is finished and the old page is faded out, let's fade the new page
	      Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
	    },
	
	    fadeOut: function fadeOut() {
	      /**
	       * this.oldContainer is the HTMLElement of the old Container
	       */
	
	      return $(this.oldContainer).animate({ opacity: 0 }).promise();
	    },
	
	    fadeIn: function fadeIn() {
	      /**
	       * this.newContainer is the HTMLElement of the new Container
	       * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
	       * Please note, newContainer is available just after newContainerLoading is resolved!
	       */
	
	      var _this = this;
	      var $el = $(this.newContainer);
	
	      $(this.oldContainer).hide();
	
	      $el.css({
	        visibility: 'visible',
	        opacity: 0
	      });
	
	      $el.animate({ opacity: 1 }, 400, function () {
	        /**
	         * Do not forget to call .done() as soon your transition is finished!
	         * .done() will automatically remove from the DOM the old Container
	         */
	
	        _this.done();
	      });
	    }
	  });
	
	  Barba.Pjax.getTransition = function () {
	    return FadeTransition;
	  };
	
	  Barba.Pjax.start();
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $topLine = $('svg#hamburger #top');
	var $middleLine = $('svg#hamburger #middle');
	var $bottomLine = $('svg#hamburger #bottom');
	var $svg = $('svg#hamburger');
	
	// Control Variables
	var isMenuActive = false;
	
	var Hamburger = function () {
	  function Hamburger() {
	    _classCallCheck(this, Hamburger);
	
	    $svg.on('mouseenter', this.mouseEnter);
	    $svg.on('mouseleave', this.mouseLeave);
	    $svg.on('click', this.onClick);
	  }
	
	  _createClass(Hamburger, [{
	    key: 'mouseEnter',
	    value: function mouseEnter() {
	      if (!isMenuActive) {
	        $middleLine.addClass('transparent');
	        $topLine.addClass('hover');
	        $middleLine.addClass('hover');
	      }
	    }
	  }, {
	    key: 'mouseLeave',
	    value: function mouseLeave() {
	      if (!isMenuActive) {
	        $middleLine.removeClass('transparent');
	        $topLine.removeClass('hover');
	        $middleLine.removeClass('hover');
	      }
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      isMenuActive = !isMenuActive;
	      $topLine.toggleClass('active');
	      $bottomLine.toggleClass('active');
	    }
	  }]);
	
	  return Hamburger;
	}();
	
	exports.default = Hamburger;

/***/ }
/******/ ]);
//# sourceMappingURL=browser-bundle.js.map