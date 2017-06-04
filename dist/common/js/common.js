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

	var _fittingBgArea = __webpack_require__(1);

	var _fittingBgArea2 = _interopRequireDefault(_fittingBgArea);

	var _fittingTargetArea = __webpack_require__(2);

	var _fittingTargetArea2 = _interopRequireDefault(_fittingTargetArea);

	var _bgAreaAnimetion = __webpack_require__(3);

	var _bgAreaAnimetion2 = _interopRequireDefault(_bgAreaAnimetion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {
	    var fittingBgArea = new _fittingBgArea2.default($('#contents .bgArea .bg'), [50, 30, 50, 30]);
	    fittingBgArea.init();
	    var fittingTargetArea = new _fittingTargetArea2.default($('#globalNavBlock .globalNav__side'));
	    fittingTargetArea.init();
	    var bgAreaAnimetion = new _bgAreaAnimetion2.default($('#contents .bgArea .bg'));
	    bgAreaAnimetion.init();
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

	var FittingBgArea = function () {
	    function FittingBgArea($target, margin) {
	        _classCallCheck(this, FittingBgArea);

	        this.$target = $target;
	        this.margin = margin;
	        this.resizedHeight = 0;
	    }

	    _createClass(FittingBgArea, [{
	        key: 'init',
	        value: function init() {
	            console.log('windowHeight', $(window).height());
	            console.log('resizedHeight', $(window).height() - (this.margin[0] + this.margin[2]));
	            this.resizeBgArea();
	            var _this = this;
	            var timer = false;
	            $(window).resize(function () {
	                if (timer !== false) {
	                    clearTimeout(timer);
	                }
	                timer = setTimeout(function () {
	                    console.log('resized');
	                    _this.resizeBgArea();
	                }, 200);
	            });
	        }
	    }, {
	        key: 'resizeBgArea',
	        value: function resizeBgArea() {
	            if ($(window).height() <= 700) {
	                console.log('small');
	                this.$target.css({
	                    'height': 600
	                });
	                this.$target.parent().css({
	                    'height': 600
	                });
	            } else {
	                this.resizedHeight = $(window).height() - (this.margin[0] + this.margin[2]);
	                this.$target.css({
	                    'height': this.resizedHeight
	                });
	                this.$target.parent().css({
	                    'height': this.resizedHeight
	                });
	            }
	        }
	    }]);

	    return FittingBgArea;
	}();

	exports.default = FittingBgArea;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FittingTargetArea = function () {
	    function FittingTargetArea($target) {
	        _classCallCheck(this, FittingTargetArea);

	        this.$target = $target;
	    }

	    _createClass(FittingTargetArea, [{
	        key: 'init',
	        value: function init() {
	            this.fittingTarget();
	            var timer = false;
	            var _this = this;
	            $(window).resize(function () {
	                if (timer !== false) {
	                    clearTimeout(timer);
	                }
	                timer = setTimeout(function () {
	                    console.log('resized');
	                    _this.fittingTarget();
	                }, 200);
	            });
	        }
	    }, {
	        key: 'fittingTarget',
	        value: function fittingTarget() {
	            if ($(window).height() <= 700) {
	                this.$target.css({
	                    'height': 700
	                });
	            } else {
	                this.$target.css({
	                    'height': $(window).height()
	                });
	            }
	        }
	    }]);

	    return FittingTargetArea;
	}();

	exports.default = FittingTargetArea;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BgAreaAnimetion = function () {
	    function BgAreaAnimetion($target) {
	        _classCallCheck(this, BgAreaAnimetion);

	        this.$target = $target;
	        this.$targetsArray = [];
	    }

	    _createClass(BgAreaAnimetion, [{
	        key: "init",
	        value: function init() {
	            var _this2 = this;

	            this.switchingBgAnimetion();
	            var _this = this;
	            $.each(_this.$target, function () {
	                console.log(_this2);
	            });
	        }
	    }, {
	        key: "switchingBgAnimetion",
	        value: function switchingBgAnimetion() {}
	    }]);

	    return BgAreaAnimetion;
	}();

	exports.default = BgAreaAnimetion;

/***/ })
/******/ ]);