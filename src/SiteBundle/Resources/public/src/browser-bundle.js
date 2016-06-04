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
	
	var _Gallery = __webpack_require__(6);
	
	var _Gallery2 = _interopRequireDefault(_Gallery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(document).ready(function () {
	
	  /**
	   * Initializes Hamburger + Mainmenu
	   * with Event Listeners */
	  var galleryContainer = $('.barba-container');
	  var navi = new _Navigation2.default();
	  var gallery = new _Gallery2.default();
	  var barba = new _BarbaWrapper2.default(navi, gallery);
	  gallery.update(galleryContainer);
	
	  //debug();
	});

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
	    TweenMax.to($nav, 1, { autoAlpha: 1, y: 0, ease: Expo.easeOut });
	  } else {
	    TweenMax.to($nav, 1, { autoAlpha: 0.1, y: -window.innerHeight, ease: Expo.easeOut });
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
	  function BarbaWrapper(menu, gallery) {
	    _classCallCheck(this, BarbaWrapper);
	
	    this.menu = menu;
	    this.gallery = gallery;
	    this.setupTransition();
	  }
	
	  _createClass(BarbaWrapper, [{
	    key: 'setupTransition',
	    value: function setupTransition() {
	
	      var FadeTransition = Barba.BaseTransition.extend({
	        menu: this.menu,
	        gallery: this.gallery,
	
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
	
	          // Tween Max instead of jquery animate
	          TweenMax.to($el, 0.4, {
	            opacity: 1,
	            onComplete: animationCallback
	          });
	
	          function animationCallback() {
	            if (_this.menu.isActive()) {
	              _this.menu.toggleMenu();
	              _this.gallery.update($el);
	            }
	            _this.done();
	          }
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var apiKey = '1418194638ebca1a4c43c2e3d2795d39';
	var userId = '24527918@N07';
	
	var streetId = '72157647569796794';
	var landscapeId = '72157654896797852';
	var peopleId = '72157651326724346';
	
	// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
	
	var Gallery = function () {
	  function Gallery() {
	    _classCallCheck(this, Gallery);
	
	    this.flickr = new Flickr({
	      api_key: apiKey,
	      user_id: userId
	    });
	  }
	
	  _createClass(Gallery, [{
	    key: 'getPeople',
	    value: function getPeople() {
	      this.flickr.photosets.getPhotos({
	        api_key: this.flickr.flickrOptions.api_key,
	        user_id: this.flickr.flickrOptions.user_id,
	        page: 1,
	        per_page: 500,
	        photoset_id: peopleId
	
	      }, function (err, result) {
	        if (err) {
	          throw new Error(err);
	        }
	
	        var photos = result.photoset.photo;
	        // Output all Photos on screen
	        photos.forEach(function (photo, i) {
	          var photoUrl = '<img src="http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_c.jpg">';
	          $(photoUrl).appendTo('#images');
	        });
	      });
	    }
	  }, {
	    key: 'getLandscape',
	    value: function getLandscape() {
	      this.flickr.photosets.getPhotos({
	        api_key: this.flickr.flickrOptions.api_key,
	        user_id: this.flickr.flickrOptions.user_id,
	        page: 1,
	        per_page: 500,
	        photoset_id: landscapeId
	
	      }, function (err, result) {
	        if (err) {
	          throw new Error(err);
	        }
	
	        var photos = result.photoset.photo;
	
	        photos.forEach(function (photo, i) {
	          // Render to dom
	          var photoUrl = '<img src="http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_c.jpg">';
	          $(photoUrl).appendTo('#images');
	        });
	      });
	    }
	  }, {
	    key: 'getStreet',
	    value: function getStreet() {
	      this.flickr.photosets.getPhotos({
	        api_key: this.flickr.flickrOptions.api_key,
	        user_id: this.flickr.flickrOptions.user_id,
	        page: 1,
	        per_page: 500,
	        photoset_id: streetId
	
	      }, function (err, result) {
	        if (err) {
	          throw new Error(err);
	        }
	
	        var photos = result.photoset.photo;
	        photos.forEach(function (photo, i) {
	          console.log(photo);
	
	          var photoUrl = '<img src="http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_c.jpg">';
	          $(photoUrl).appendTo('#images');
	        });
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update($el) {
	      console.log($el);
	      if ($el.hasClass('street')) {
	        this.getStreet();
	      } else if ($el.hasClass('landscapes')) {
	        this.getLandscape();
	      } else if ($el.hasClass('people')) {
	        this.getPeople();
	      }
	    }
	  }]);
	
	  return Gallery;
	}();
	
	exports.default = Gallery;

/***/ }
/******/ ]);
//# sourceMappingURL=browser-bundle.js.map