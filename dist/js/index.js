/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _topAnimation = __webpack_require__(7);

	var _topAnimation2 = _interopRequireDefault(_topAnimation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {
	    var topAnimation = new _topAnimation2.default();
	    topAnimation.init();
	    $(window).on('LOAD_COMP', function () {
	        topAnimation.animation();
	    });
	});

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TopAnimation = function () {
	    function TopAnimation() {
	        _classCallCheck(this, TopAnimation);

	        this.$gNavHeader = $('#globalNavBlock .globalNav__header');
	        this.$gNavSide = $('#globalNavBlock .globalNav__side');
	        this.$bg = $('#globalNavBlock #contents');
	        this.$newsNotice = $('.top__noticeArea');
	    }

	    _createClass(TopAnimation, [{
	        key: 'init',
	        value: function init() {
	            this.$gNavHeader.css({
	                'opacity': 0
	            });
	            this.$gNavSide.css({
	                'opacity': 0
	            });
	            this.$bg.css({
	                'opacity': 0
	            });
	            this.$newsNotice.css({
	                'opacity': 0,
	                'bottom': 0
	            });
	        }
	    }, {
	        key: 'animation',
	        value: function animation() {
	            var tl = new TimelineMax({
	                delay: 0,
	                paused: true
	            });
	            tl.addLabel('gNavAnimation', 0);
	            tl.addLabel('contentsAnimation', 1.6);
	            tl.insertMultiple([TweenMax.to(this.$gNavHeader, 0.8, {
	                opacity: 1
	            }), TweenMax.to(this.$gNavSide, 0.8, {
	                delay: 0.4,
	                opacity: 1
	            }), TweenMax.to(this.$bg, 0.8, {
	                delay: 0.4,
	                opacity: 1
	            })], 'gNavAnimation');
	            tl.insertMultiple([TweenMax.to(this.$newsNotice, 0.8, {
	                opacity: 1,
	                bottom: 13
	            })], 'contentsAnimation');
	            tl.play();
	        }
	    }]);

	    return TopAnimation;
	}();

	exports.default = TopAnimation;

/***/ })

/******/ });