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

	var _fittingBgArea = __webpack_require__(2);

	var _fittingBgArea2 = _interopRequireDefault(_fittingBgArea);

	var _fittingTargetArea = __webpack_require__(3);

	var _fittingTargetArea2 = _interopRequireDefault(_fittingTargetArea);

	var _bgAreaAnimetion = __webpack_require__(4);

	var _bgAreaAnimetion2 = _interopRequireDefault(_bgAreaAnimetion);

	var _loadingAnimation = __webpack_require__(5);

	var _loadingAnimation2 = _interopRequireDefault(_loadingAnimation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(function () {
	    var ua = __webpack_require__(6);
	    ua.judge();
	    var loading = new _loadingAnimation2.default();
	    loading.init();
	    var fittingBgArea = new _fittingBgArea2.default($('#contents .bgArea .bg'), [50, 30, 30, 30]);
	    fittingBgArea.init();
	    var fittingTargetArea = new _fittingTargetArea2.default($('#globalNavBlock .globalNav__side'));
	    fittingTargetArea.init();
	    $(window).on('LOAD_COMP', function () {
	        var bgAreaAnimetion = new _bgAreaAnimetion2.default($('#contents .bgArea .bg'), $('#globalNavBlock .buttons .button'));
	        bgAreaAnimetion.init();
	    });
	});

/***/ }),
/* 1 */,
/* 2 */
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
	            this.resizeBgArea();
	            var _this = this;
	            var timer = false;
	            $(window).on('WINDOW_RESIZED', function () {
	                _this.resizeBgArea();
	            });
	        }
	    }, {
	        key: 'resizeBgArea',
	        value: function resizeBgArea() {
	            if ($(window).height() <= 700) {
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BgAreaAnimetion = function () {
	    function BgAreaAnimetion($target, $listButton) {
	        _classCallCheck(this, BgAreaAnimetion);

	        this.$target = $target;
	        this.$targetArray = [];
	        this.current = 0;
	        this.bgLength = 0;
	        this.intervalID;
	        this.$bgListButton = $listButton;
	        this.$bgListButtonArray = [];
	        // this.bgSlideAnimationTween;
	    }

	    _createClass(BgAreaAnimetion, [{
	        key: 'init',
	        value: function init() {
	            var _this2 = this;

	            this.bgLength = this.$target.length;
	            this.$bgListButton.on('click', this, this.bgListButtonClick);
	            $(window).on('resize', function () {
	                //this.bgSlideAnimationTween.pause(0);
	                //this.bgSlideAnimation(this.current);
	                clearInterval(_this2.intervalID);
	                _this2.startInterval();
	            });
	            for (var i = 0; i < this.bgLength; i++) {
	                if ($(this.$target[i]).hasClass('current')) {
	                    this.current = i;
	                }
	                this.$bgListButtonArray[i] = $(this.$bgListButton[i]);
	                this.$targetArray[i] = $(this.$target[i]);
	            }
	            //this.bgSlideAnimation(this.current);
	            this.startInterval();
	        }
	    }, {
	        key: 'startInterval',
	        value: function startInterval() {
	            var _this = this;
	            this.intervalID = setInterval(function () {
	                var next = 0;
	                if (_this.current == _this.bgLength - 1) {
	                    next = 0;
	                } else {
	                    next = _this.current + 1;
	                }
	                _this.switchingBgAnimetion(next);
	            }, 8000);
	        }
	    }, {
	        key: 'switchingBgAnimetion',
	        value: function switchingBgAnimetion(next) {
	            var _this3 = this;

	            this.$targetArray[next].addClass('next').css({
	                'background-position': '0px 0px'
	            });
	            this.$bgListButtonArray[next].addClass('next');
	            var tl = new TimelineMax({
	                delay: 0,
	                paused: true,
	                onComplete: function onComplete() {
	                    _this3.$targetArray[_this3.current].removeClass('current');
	                    _this3.$bgListButtonArray[_this3.current].removeClass('current');
	                    _this3.$targetArray[next].removeClass('next').addClass('current');
	                    _this3.$bgListButtonArray[next].removeClass('next').addClass('current');
	                    // this.bgSlideAnimation(next);
	                    _this3.current = next;
	                }
	            });
	            tl.addLabel('startAnimation', 0);
	            tl.insertMultiple([TweenMax.to(this.$targetArray[this.current], 0.4, {
	                opacity: 0
	            }), TweenMax.to(this.$targetArray[next], 0.4, {
	                opacity: 1
	            }), TweenMax.fromTo(this.$bgListButtonArray[this.current], 0.4, {
	                backgroundColor: '#0F74A3'
	            }, {
	                backgroundColor: '#c6d1e2'
	            }), TweenMax.fromTo(this.$bgListButtonArray[next], 0.4, {
	                backgroundColor: '#c6d1e2'
	            }, {
	                backgroundColor: '#0F74A3'
	            })], 'startAnimation');
	            tl.play();
	        }
	    }, {
	        key: 'bgListButtonClick',
	        value: function bgListButtonClick(e) {
	            var _this = e.data;
	            clearInterval(_this.intervalID);
	            _this.switchingBgAnimetion($(this).data('num'));
	            _this.startInterval();
	        }
	    }, {
	        key: 'bgSizeCalc',
	        value: function bgSizeCalc() {
	            var targetHeight = $('#contents .bg').height();
	            var widthRatio = 61;
	            var heightRatio = 32;
	            var realWidth = widthRatio / heightRatio * targetHeight << 0;
	            return realWidth;
	        }
	        // bgSlideAnimation(target){
	        //     if(this.$targetArray[target].width() - this.bgSizeCalc() > 0) return false;
	        //     this.bgSlideAnimationTween = TweenMax.fromTo(this.$targetArray[target],8.5,{
	        //         backgroundPosition:'0px 0px'
	        //     },{
	        //         backgroundPosition:this.$targetArray[target].width() - this.bgSizeCalc() + 'px 0px',
	        //         ease:Power0.easeNone
	        //     });
	        // }

	    }]);

	    return BgAreaAnimetion;
	}();

	exports.default = BgAreaAnimetion;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoadingAnimation = function () {
	    function LoadingAnimation() {
	        _classCallCheck(this, LoadingAnimation);

	        this.$loading = $('#loading');
	        this.loadingFlag = false;
	        this.timeElapsedFlag = false;
	    }

	    _createClass(LoadingAnimation, [{
	        key: 'init',
	        value: function init() {
	            var _this = this;

	            setTimeout(function () {
	                _this.timeElapsedFlag = true;
	                if (_this.timeElapsedFlag && _this.loadingFlag) _this.loadComplete();
	            }, 2000);
	            $(window).load(function () {
	                _this.loadingFlag = true;
	                if (_this.timeElapsedFlag && _this.loadingFlag) _this.loadComplete();
	            });
	        }
	    }, {
	        key: 'loadComplete',
	        value: function loadComplete() {
	            var _this2 = this;

	            TweenMax.to(this.$loading, 0.4, {
	                opacity: 0,
	                onComplete: function onComplete() {
	                    $(window).trigger('LOAD_COMP');
	                    _this2.$loading.css({
	                        'display': 'none'
	                    });
	                }
	            });
	        }
	    }]);

	    return LoadingAnimation;
	}();

	exports.default = LoadingAnimation;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	module.exports.judge = function () {
	    var _ua = function (u) {
	        return {
	            Tablet: u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1 || u.indexOf("ipad") != -1 || u.indexOf("android") != -1 && u.indexOf("mobile") == -1 || u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1 || u.indexOf("kindle") != -1 || u.indexOf("silk") != -1 || u.indexOf("playbook") != -1,
	            Mobile: u.indexOf("windows") != -1 && u.indexOf("phone") != -1 || u.indexOf("iphone") != -1 || u.indexOf("ipod") != -1 || u.indexOf("android") != -1 && u.indexOf("mobile") != -1 || u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1 || u.indexOf("blackberry") != -1
	        };
	    }(window.navigator.userAgent.toLowerCase());
	    if (_ua.Mobile) {
	        $('html').addClass('sp');
	    }
	};

/***/ })
/******/ ]);