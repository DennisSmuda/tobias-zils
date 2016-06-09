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
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Navigation = __webpack_require__(2);
	
	var _Navigation2 = _interopRequireDefault(_Navigation);
	
	var _BarbaWrapper = __webpack_require__(3);
	
	var _BarbaWrapper2 = _interopRequireDefault(_BarbaWrapper);
	
	var _Gallery = __webpack_require__(4);
	
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
	  gallery.setupTitleImages();
	  gallery.update(galleryContainer);
	
	  debug(barba);
	});
	var activeId = 0;
	
	function debug() {
	  var easing = Power2.EaseInOut;
	  var slideSpeed = 0.5;
	  var itemWidth = $(window).width();
	  var swipeDir = void 0;
	  var $navigationItem = $('ul.primary li');
	  var itemCount = $navigationItem.length;
	  var $navigationItems = $('ul.primary');
	
	  $navigationItems.css({ 'width': itemWidth * itemCount + 'px' });
	
	  Draggable.create($navigationItems, {
	    type: "x",
	    edgeResistance: 0.9,
	    dragResistance: 0.0,
	    bounds: ".nav__inner",
	    onDrag: updateDirections,
	    onThrowUpdate: updateDirections,
	    throwProps: true,
	    onDragStart: function onDragStart(e) {},
	    onDragEnd: function onDragEnd() {
	      if (swipeDir == 'left') {
	        activeId++;
	      } else if (swipeDir == 'right') {
	        activeId--;
	      };
	
	      navigateSlide();
	    }
	  });
	
	  function navigateSlide() {
	    if (activeId >= itemCount - 1) activeId = itemCount - 1;
	    if (activeId < 0) activeId = 0;
	
	    var xTarget = activeId * itemWidth * -1;
	
	    TweenMax.to($navigationItems, slideSpeed, { x: xTarget, ease: easing, onComplete: slideDone });
	  }
	
	  function slideDone() {}
	
	  function updateDirections() {
	    swipeDir = this.getDirection("start");
	  }
	
	  $navigationItem.mousedown(function (e) {
	    activeId = $(this).attr('id').split('_')[1];
	
	    $(this).removeClass('grab');
	    $(this).addClass('grabbing');
	  });
	
	  //
	  $navigationItem.mouseenter(function () {
	    $(this).removeClass('grabbing');
	    $(this).addClass('grab');
	  });
	
	  $navigationItem.mouseup(function () {
	    $(this).removeClass('grabbing');
	    $(this).addClass('grab');
	  });
	
	  //Draggable.create("#landscapes", {type:"x,y", edgeResistance:0.65, bounds:"nav", throwProps:true});
	}

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
	    this.lastTitle = '';
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
	  }, {
	    key: 'transition',
	    value: function transition(title) {
	      this.lastTitle = title;
	      var $el = $('#' + title);
	      TweenMax.fromTo($el, 1.2, { scale: 1 }, { scale: 2.5 });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var $el = $('#' + this.lastTitle);
	      TweenMax.to($el, 0.1, { scale: 1, delay: 0.8 });
	    }
	  }]);
	
	  return Navigation;
	}();
	
	exports.default = Navigation;
	
	
	function _toggleMenu() {
	  isMenuActive = !isMenuActive;
	  $topLine.toggleClass('active');
	  $bottomLine.toggleClass('active');
	  $middleLine.toggleClass('active');
	
	  if (isMenuActive) {
	    TweenMax.to($nav, 1, { autoAlpha: 1, ease: Expo.easeOut });
	  } else {
	    TweenMax.to($nav, 1, { autoAlpha: 0, onComplete: function onComplete() {
	        $nav.css('visibility', 'hidden');
	      } });
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BarbaWrapper = function () {
	  function BarbaWrapper(navi, gallery) {
	    _classCallCheck(this, BarbaWrapper);
	
	    this.navi = navi;
	    this.gallery = gallery;
	    this.setupTransition();
	    this.setupEvents();
	  }
	
	  _createClass(BarbaWrapper, [{
	    key: 'setupEvents',
	    value: function setupEvents() {
	      var _this2 = this;
	
	      // NAVIGATION on Click
	      $('ul.primary li').on('click', function (e) {
	        var target = e.target.innerText.toLowerCase();
	        _this2.navi.transition(target);
	        Barba.Pjax.goTo(target);
	        _this2.gallery.update(target);
	      });
	    }
	  }, {
	    key: 'setupTransition',
	    value: function setupTransition() {
	
	      var FadeTransition = Barba.BaseTransition.extend({
	        navi: this.navi,
	        gallery: this.gallery,
	
	        start: function start() {
	          // As soon the loading is finished and the old page is faded out, let's fade the new page
	          Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
	        },
	
	        fadeOut: function fadeOut() {
	          return $(TweenMax.to($(this.oldContainer), 0.4, { opacity: 0 })).promise();
	          //return $(this.oldContainer).animate({ opacity: 0 }).promise()
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
	            if (_this.navi.isActive()) {
	              _this.navi.toggleMenu();
	              _this.gallery.update($el);
	              _this.navi.reset();
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
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var apiKey = '1418194638ebca1a4c43c2e3d2795d39';
	var userId = '24527918@N07';
	
	var albumNames = ['street', 'landscapes', 'people'];
	
	var albumIds = {
	  "streetId": '72157647569796794',
	  "landscapesId": '72157654896797852',
	  "peopleId": '72157651326724346'
	};
	
	// Image URL
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
	    key: 'getAlbum',
	    value: function getAlbum(albumName) {
	      var idstring = albumName + 'Id';
	      var id = albumIds[idstring];
	
	      this.flickr.photosets.getPhotos({
	        api_key: this.flickr.flickrOptions.api_key,
	        user_id: this.flickr.flickrOptions.user_id,
	        page: 1,
	        per_page: 500,
	        extras: ['tags'],
	        photoset_id: id
	
	      }, function (err, result) {
	        if (err) {
	          throw new Error(err);
	        }
	
	        var photos = result.photoset.photo;
	
	        photos.forEach(function (photo, i) {
	          // Render to dom
	          var photoUrl = '<img src="http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_c.jpg">';
	          var destination = $('.' + albumName + ' #images');
	          $(photoUrl).prependTo(destination);
	        });
	      });
	    }
	
	    // Update function supports lowercase string of the album name,
	    // as well as the jQuery object of the albums 'barba-container'
	
	  }, {
	    key: 'update',
	    value: function update($el) {
	      // String
	      if (typeof $el === 'string') {
	        this.getAlbum($el);
	      }
	      // jQuery Object
	      else if ((typeof $el === 'undefined' ? 'undefined' : _typeof($el)) === 'object') {
	          if ($el.hasClass('street')) {
	            this.getAlbum('street');
	          } else if ($el.hasClass('landscapes')) {
	            this.getAlbum('landscapes');
	          } else if ($el.hasClass('people')) {
	            this.getAlbum('people');
	          }
	        }
	    }
	
	    // TODO: Need to host navigation images locally..
	
	  }, {
	    key: 'setupTitleImages',
	    value: function setupTitleImages() {
	      var _this = this;
	
	      albumNames.forEach(function (album) {
	        _this.getTitleImage(album);
	      });
	    }
	  }, {
	    key: 'getTitleImage',
	    value: function getTitleImage(albumname) {
	      this.flickr.photos.search({
	        api_key: this.flickr.flickrOptions.api_key,
	        tags: ['tobias-zils-title', '' + albumname],
	        tag_mode: 'all'
	      }, function (err, result) {
	        if (err) {
	          throw new Error(err);
	        }
	
	        var titleImages = result.photos.photo;
	
	        titleImages.forEach(function (photo, i) {
	          // Construct DOM Node
	          var imageSrc = 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_c.jpg';
	          var titleImage = '<div class="title-image" style="background-image: url(\'' + imageSrc + '\');">' + albumname + '</div>';
	          $(titleImage).prependTo('nav ul li div#' + albumname);
	        });
	      });
	    }
	  }]);
	
	  return Gallery;
	}();
	
	exports.default = Gallery;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=browser-bundle.js.map