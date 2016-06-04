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
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Navigation = __webpack_require__(2);
	
	var _Navigation2 = _interopRequireDefault(_Navigation);
	
	var _BarbaWrapper = __webpack_require__(5);
	
	var _BarbaWrapper2 = _interopRequireDefault(_BarbaWrapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(document).ready(function () {
	
	  /**
	   * Initializes Hamburger + Mainmenu
	   * with Event Listeners */
	  var navi = new _Navigation2.default();
	  var barba = new _BarbaWrapper2.default(navi);
	
	  showpics();
	});
	
	var apiKey = '1418194638ebca1a4c43c2e3d2795d39';
	var userId = '24527918@N07';
	
	function showpics() {
	
	  var flickr = new Flickr({
	    api_key: apiKey,
	    user_id: userId
	  });
	
	  flickr.photos.search({
	    text: "red+panda"
	  }, function (err, result) {
	    if (err) {
	      throw new Error(err);
	    }
	    // do something with result
	    console.log(result);
	  });
	
	  flickr.photos.search({
	    user_id: flickr.flickrOptions.user_id,
	    page: 1,
	    per_page: 500
	  }, function (err, result) {
	    if (err) {
	      throw new Error(err);
	    }
	    console.log(result);
	  });
	
	  console.log(flickr);
	};

/***/ },
/* 2 */
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
	var $nav = $('nav');
	
	// Control Variables
	var isMenuActive = false;
	
	var Navigation = function () {
	  function Navigation() {
	    _classCallCheck(this, Navigation);
	
	    $svg.on('click', this.onClick);
	    $(document).keyup(function (e) {
	      if (e.keyCode === 27) _toggleMenu();
	    });
	  }
	
	  _createClass(Navigation, [{
	    key: 'onClick',
	    value: function onClick() {
	      _toggleMenu();
	    }
	  }, {
	    key: 'toggleMenu',
	    value: function toggleMenu() {
	      _toggleMenu();
	    }
	  }, {
	    key: 'isActive',
	    value: function isActive() {
	      return isMenuActive;
	    }
	  }]);
	
	  return Navigation;
	}();
	
	exports.default = Navigation;
	
	
	function _toggleMenu() {
	  isMenuActive = !isMenuActive;
	  $topLine.toggleClass('active');
	
	  if (isMenuActive) {
	    TweenMax.to($nav, 0.6, { top: 0, autoAlpha: 1, ease: Elastic.easeInOut });
	  } else {
	    TweenMax.to($nav, 0.6, { top: -window.innerHeight, autoAlpha: 0.1 });
	  }
	  $bottomLine.toggleClass('active');
	  $middleLine.toggleClass('active');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BarbaWrapper = function () {
	  function BarbaWrapper(menu) {
	    _classCallCheck(this, BarbaWrapper);
	
	    this.menu = menu;
	    this.setupTransition();
	
	    console.log(this.menu.isActive());
	  }
	
	  _createClass(BarbaWrapper, [{
	    key: 'setupTransition',
	    value: function setupTransition() {
	
	      var FadeTransition = Barba.BaseTransition.extend({
	        menu: this.menu,
	
	        start: function start() {
	          // As soon the loading is finished and the old page is faded out, let's fade the new page
	          Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
	        },
	
	        fadeOut: function fadeOut() {
	          return $(this.oldContainer).animate({ opacity: 0 }).promise();
	        },
	
	        fadeIn: function fadeIn() {
	          var _this = this;
	          var $el = $(this.newContainer);
	
	          $(this.oldContainer).hide();
	
	          $el.css({
	            visibility: 'visible',
	            opacity: 0
	          });
	
	          $el.animate({ opacity: 1 }, 400, function () {
	            if (_this.menu.isActive()) {
	              _this.menu.toggleMenu();
	            }
	            _this.done();
	          });
	        }
	      });
	
	      Barba.Pjax.getTransition = function () {
	        return FadeTransition;
	      };
	
	      Barba.Pjax.start();
	    }
	  }]);
	
	  return BarbaWrapper;
	}();
	
	exports.default = BarbaWrapper;

/***/ }
/******/ ]);
//# sourceMappingURL=browser-bundle.js.map