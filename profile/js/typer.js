(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tinytyper", [], factory);
	else if(typeof exports === 'object')
		exports["tinytyper"] = factory();
	else
		root["tinytyper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tinytyper = __webpack_require__(1);
	
	var _tinytyper2 = _interopRequireDefault(_tinytyper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _tinytyper2.default;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module TinyTyper
	 * @author Korney Vasilchenko
	 */
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _blinker = __webpack_require__(2);
	
	var _blinker2 = _interopRequireDefault(_blinker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TinyTyper = function () {
	  /**
	   * Constructor
	   * @param  {Element} el
	   * @param  {Object} options
	   */
	  function TinyTyper(el) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, TinyTyper);
	
	    this.element = el;
	    this.cursor = document.createElement('span');
	    this.textEl = document.createElement('span');
	    this.options = options;
	
	    this.text = options.text || el.innerText;
	
	    /* Clear element's content and set default text */
	    this.textEl.className = options.textClass || 'tiny-typer-text';
	    this.cursor.className = options.cursorClass || 'tiny-typer-cursor';
	    this.cursor.innerHTML = options.cursor || ' &#9612;';
	
	    this.init();
	  }
	
	  /**
	   * Initializes whole element
	   */
	
	
	  _createClass(TinyTyper, [{
	    key: 'init',
	    value: function init() {
	      this.element.innerHTML = '';
	      this.element.innerText = '';
	      this.element.appendChild(this.textEl);
	      this.element.appendChild(this.cursor);
	      if (!this.options.staticCursor) this.blinker = (0, _blinker2.default)(this.cursor, this.options.blinkSpeed || 0.05);
	      if (!this.options.staticText) {
	        this.animate();
	      } else {
	        this.redraw(this.text);
	      }
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var _this = this;
	
	      var symbols = this.text.split('');
	      var result = [];
	      var animation = function animation() {
	        return setTimeout(tick, _this.options.textSpeed || 95);
	      };
	      var tick = function tick() {
	        result.push(symbols.shift());
	        _this.redraw(result.join(''));
	        if (symbols.length) animation();
	      };
	
	      animation();
	    }
	
	    /**
	     * Redraws main text
	     * @param  {String} text
	     */
	
	  }, {
	    key: 'redraw',
	    value: function redraw(text) {
	      this.textEl.innerText = text;
	    }
	  }]);
	
	  return TinyTyper;
	}();
	
	exports.default = TinyTyper;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * @author Korney Vasilchenko
	 * @description Basic module for making specified element blink
	 */
	'use strict';
	
	/**
	 * Browser check
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fadeOut = fadeOut;
	exports.fadeIn = fadeIn;
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	  window.setTimeout(callback, 1000 / 60);
	};
	
	window.requestAnimationFrame = requestAnimationFrame;
	
	/**
	 * Creates fade-out effect
	 * @param  {Element}   el
	 * @param  {Number}   speed
	 * @param  {Function} callback
	 */
	function fadeOut(el, speed, callback) {
	  el.style.opacity = 1;
	  var fade = function fade() {
	    if ((el.style.opacity -= speed) < 0) {
	      el.style.opacity = 0;
	      callback();
	    } else {
	      requestAnimationFrame(fade);
	    }
	  };
	  fade();
	}
	
	/**
	 * Creates fade-in effect
	 * @param  {Element}   el
	 * @param  {Number}   speed
	 * @param  {Function} callback
	 */
	function fadeIn(el, speed, callback) {
	  el.style.opacity = 0;
	
	  var fade = function fade() {
	    var val = parseFloat(el.style.opacity);
	    if (!((val += speed) > 1)) {
	      el.style.opacity = val;
	      requestAnimationFrame(fade);
	    } else {
	      el.style.opacity = 1;
	      callback();
	    }
	  };
	
	  fade();
	}
	
	/**
	 * Makes DOM Element blink
	 * @param  {Element} el
	 * @param  {Number} speed
	 * @returns {Object}
	 */
	var blink = function blink(el, speed) {
	  /* Element configuration */
	  var isStopped = false;
	
	  /* Interval control */
	  el.style.opacity = 1;
	  var tick = function tick() {
	    if (!isStopped) {
	      fadeIn(el, speed, function () {
	        fadeOut(el, speed, function () {
	          return tick();
	        });
	      });
	    }
	  };
	  var start = function start() {
	    isStopped = false;tick();
	  };
	  var stop = function stop() {
	    return isStopped = true;
	  };
	
	  tick();
	  return { stop: stop, start: start };
	};
	
	exports.default = blink;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=tinytyper.js.map