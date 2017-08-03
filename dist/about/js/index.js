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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _showAnimation = __webpack_require__(1);

	var _showAnimation2 = _interopRequireDefault(_showAnimation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {
	    var showAnimation = new _showAnimation2.default();
	    $(window).on('LOAD_COMP', function () {
	        showAnimation.init();
	    });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ShowAnimation = function () {
	    function ShowAnimation() {
	        _classCallCheck(this, ShowAnimation);

	        this.$header = $('#globalNavBlock .globalNav__header');
	        this.$targets = $('.jsAnim');
	        this.scrollAmount = 0;
	        this.$targets.css({
	            'opacity': 0,
	            'position': 'relative',
	            'top': 40
	        });
	    }

	    _createClass(ShowAnimation, [{
	        key: 'init',
	        value: function init() {
	            $('#contentMain').on('scroll', this, this.animationControll);
	            $('#contentMain').trigger('scroll');
	        }
	    }, {
	        key: 'animationControll',
	        value: function animationControll(e) {
	            var _this = e.data;
	            _this.scrollAmount = $(this).scrollTop();
	            _this.$targets = $('.jsAnim');
	            $.each(_this.$targets, function (index) {
	                if ($(this).offset().top - 500 - _this.$header.height() < 200) {
	                    _this.animation($(this));
	                }
	            });
	        }
	    }, {
	        key: 'animation',
	        value: function animation(target) {
	            target.removeClass('jsAnim');
	            if (target.hasClass('fadeUp')) {
	                TweenMax.to(target, 0.8, {
	                    opacity: 1,
	                    top: 0,
	                    ease: Power2.easeOut,
	                    delay: target.data('delay')
	                });
	            }
	            if (target.hasClass('title1')) {
	                var tl = new TimelineMax({
	                    delay: 0,
	                    paused: false
	                });
	                target.css({
	                    'opacity': 1,
	                    'top': 'auto'
	                });
	                tl.addLabel('title1');
	                tl.insertMultiple([TweenMax.to(target.find('.about__title'), 0.4, {
	                    opacity: 1,
	                    delay: 0.4
	                }), TweenMax.fromTo(target.find('.bar1'), 0.4, {
	                    position: 'absolute',
	                    top: 58,
	                    left: 20
	                }, {
	                    top: -17,
	                    left: 94,
	                    opacity: 1
	                }), TweenMax.fromTo(target.find('.bar2'), 0.4, {
	                    position: 'absolute',
	                    top: -17,
	                    left: 94
	                }, {
	                    top: 58,
	                    left: 20,
	                    opacity: 1
	                })], 'title1');
	                tl.play();
	            }
	            if (target.hasClass('title2')) {
	                var _tl = new TimelineMax({
	                    delay: 0,
	                    paused: false
	                });
	                target.css({
	                    'opacity': 1,
	                    'top': 'auto'
	                });
	                _tl.addLabel('title2');
	                _tl.insertMultiple([TweenMax.to(target.find('.text'), 0.4, {
	                    opacity: 1,
	                    delay: 0.6
	                })], 'title2');
	                /*
	                 * Lazy Line Painter - Path Object
	                 * Generated using 'SVG to Lazy Line Converter'
	                 *
	                 * http://lazylinepainter.info
	                 * Copyright 2013, Cam O'Connell
	                 *
	                 */

	                var pathObj1 = {
	                    "about_line1": {
	                        "strokepath": [{
	                            "path": "M -0.5 0.5 L 100.5 0.5",
	                            "duration": 200
	                        }, {
	                            "path": "M 101 0 L 101 30",
	                            "duration": 200
	                        }, {
	                            "path": "M 101.5 29.5 L 162 29.5",
	                            "duration": 200
	                        }],
	                        "dimensions": {
	                            "width": 162,
	                            "height": 30
	                        }
	                    }
	                };

	                var pathObj2 = {
	                    "about_line2": {
	                        "strokepath": [{
	                            "path": "M 162 29.5 L 61 29.5",
	                            "duration": 200
	                        }, {
	                            "path": "M 60.5 30 L 60.5 0",
	                            "duration": 200
	                        }, {
	                            "path": "M 60 0.5 L -0.5 0.5",
	                            "duration": 200
	                        }],
	                        "dimensions": {
	                            "width": 162,
	                            "height": 30
	                        }
	                    }
	                };

	                /*
	                 Setup and Paint your lazyline!
	                 */

	                $('#about_line1').lazylinepainter({
	                    "svgData": pathObj1,
	                    "strokeWidth": 2,
	                    "strokeColor": "#ffffff"
	                }).lazylinepainter('paint');

	                $('#about_line2').lazylinepainter({
	                    "svgData": pathObj2,
	                    "strokeWidth": 2,
	                    "strokeColor": "#ffffff"
	                }).lazylinepainter('paint');

	                _tl.play();
	            }
	        }
	    }]);

	    return ShowAnimation;
	}();

	exports.default = ShowAnimation;

/***/ })
/******/ ]);