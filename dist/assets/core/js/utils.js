/*!
* Site Utilities
*
* Author: Serifx Xiao <Serifx@outlook.com>
* Date: 2016/04/25
* Version: 2.0.0
*
* Copyright (c) 2016 Serifx Xiao
* Licensed under the MIT license
*/


/*!
 * JavaScript Object 函数功能扩展
 * ==========================================================================
 */

/**
 * isJQueryObject
 * @description Check if an object is jQuery object
 * @returns {boolean}
 * @param {*} obj
 * @method
 * @static
 */
function isJQueryObject(obj){
  return obj instanceof jQuery;
}

/**
 * Assign all own properties from source to target
 * @param {object} target
 * @param {object} source
 * @param {boolean} [deep] If deep clone
 * @return {Object}
 * @method
 * #static
 */
function extendOwnProps(target, source, deep){
  for (var p in source) {
    if (source.hasOwnProperty(p)) {
      if (deep) {
        target[p] = ('object' === typeof target[p]) ? extendOwnProps(target[p], source[p], deep) : source[p];
      } else {
        target[p] = source[p];
      }
    }
  }
  return target;
}

/**
 * Check if object is a true number
 * @returns {boolean}
 * @param {*} obj
 * @method
 * @static
 */
function isNumberType(obj){
  return obj.constructor === Number && !isNaN(this) && isFinite(this);
}

/*!
 * JavaScript Console 函数功能扩展
 * ==========================================================================
 */


// Avoid `console` errors in browsers that lack a console.
;(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

/**
 * disableConsoleAPI
 * @description Disable console API
 * @method
 * @static
 */
function disableConsoleAPI(){
  try {
    var $_console$$ = console;
    Object.defineProperty(window, 'console', {
      get: function(){
        if ($_console$$)
          throw 'Sorry, for security, the \'console\' API has been disbaled.';
        return $_console$$
      },
      set: function($val$_$){
        $_console$$ = $val$_$;
      }
    });
  } catch ($ignore$$) {
    throw $ignore$$;
  }
}

/*!
 * JavaScript Array 函数功能扩展
 * ==========================================================================
 */


/**
 * 去除数组中重复元素
 * @method unique
 * @returns {Array}
 */
Array.prototype.unique = function(){
  var rest = [];
  for (var i = 0, l = this.length; i < l; i++) {
    if (i === this.indexOf(this[i])) {
      rest.push(this[i]);
    }
  }
  return rest;
};

/**
 * Polyfill
 * =============================
 */

if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
/*!
 * JavaScript Event 函数功能扩展
 * ==========================================================================
 */


/**
 * preventDefaultEvent
 * @description PreventDefaultEvent
 * @param {Event} e Event object
 * @method
 * @static
 */
function preventDefaultEvent(e){
  if(e && e.preventDefault) {
    e.preventDefault();
    return;
  }
  var _e = window.event || arguments.callee.caller.arguments[0];
  if (_e && _e.preventDefault) { //W3C
    _e.preventDefault();
  }
  else {//IE
    window.event.returnValue = false;
  }
}
/**
 * attachEventOnBlank
 * @param {Array} targetsExcluded An object or selector array
 * @param {string} eventType EventType
 * @param {function} callback Callback event
 */
function attachEventOnBlank(targetsExcluded, eventType, callback){
  var tarExts = targetsExcluded; //Array
  // convert to jQuery object
  if (Array.isArray(tarExts)) {
    for (var i = 0, l = tarExts.length; i < l; i++) {
      if ('string' === typeof tarExts[i] || ('object' === typeof tarExts[i] && !tarExts[i] instanceof jQuery))
        tarExts[i] = $(tarExts[i]);
    }
  } else if ('string' === typeof tarExts || ('object' === typeof tarExts && !tarExts instanceof jQuery)) {
    tarExts = [$(tarExts)];
  } else {
    return;
  }
  //add event
  $(document).on(eventType, function(e){
    for (var j = 0, m = tarExts.length; j < m; j++) {
      if (tarExts[j].is(e.target) || tarExts[j].has(e.target).length !== 0) {
        return;
      }
    }
    //attach event on other elements
    if (callback && 'function' === typeof callback) callback();
  });
}

/**
 * add event
 * @param {object} el
 * @param {string} type
 * @param {function} func
 */
function addEvent(el, type, func){
  if (el.addEventListener) {
    el.addEventListener(type, func, false);
  } else if (el.attachEvent) {
    el.attachEvent("on" + type, func);
  } else {
    el["on" + type] = func;
  }
}

/*!
 * JavaScript JSON 函数功能扩展
 * ==========================================================================
 */


/**
 * Convert JSON Object to JSONString
 * @description Convert JSON Object to JSONString
 * @param {JSON} jsonObj JSON object, to be converted
 * @returns {*}
 * @method
 * @static
 */
function convertToJSONString(jsonObj) {
  try {
    if (typeof (window.toJSONString) === 'function') {
      return jsonObj.toJSONString();
    } else if (typeof (JSON.stringify) === 'function') {
      return JSON.stringify(jsonObj);
    } else {
      return '';
    }
  } catch (e) {
    return e;
  }
}

/*!
 * JavaScript AJAX 函数功能扩展
 * ==========================================================================
 */


(function (){
  /**
   * 修复Firefox Bug:
   * 虽然 getResponseHeader('Content-Type') 返回一个非空的字符串，
   * 但是 .getAllResponseHeaders() 还是返回空字符串，
   * 在 Firefox 中使用jQuery不支持自动解码JSON CORS 响应。
   */
  var _super         = jQuery.ajaxSettings.xhr,
      xhrCorsHeaders = ["Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma"];

  jQuery.ajaxSettings.xhr = function(){
    var xhr                   = _super(),
        getAllResponseHeaders = xhr.getAllResponseHeaders;

    xhr.getAllResponseHeaders = function(){
      var allHeaders = "";
      try {
        allHeaders = getAllResponseHeaders.apply(xhr);
        if (allHeaders) {
          return allHeaders;
        }
      } catch (e) {
      }

      $.each(xhrCorsHeaders, function(i, headerName){
        if (xhr.getResponseHeader(headerName)) {
          allHeaders += headerName + ": " + xhr.getResponseHeader(headerName) + "\n";
        }
      });
      return allHeaders;
    };

    return xhr;
  };
})();

/*!
 * JavaScript DOM 函数功能扩展
 * ==========================================================================
 */


/**
 * Cache DOM objects in memory, returns an Array
 * @param {string|object} selector
 * @returns {Array}
 */
function cacheDOMs(selector){
  var crr  = [];
  var objs = ('string' === typeof selector ) ? document.querySelectorAll(selector) : selector;
  for (var i = 0, l = objs.length; i < l; i++) {
    crr[i] = objs[i];
  }
  return crr;
}

/**
 * get document scroll top
 * @method
 * @static
 * @returns {number}
 */
function getDocScrollTop(){
  var st = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    st = document.documentElement.scrollTop;
  } else if (document.body) {
    st = document.body.scrollTop;
  }
  return st;
}

/**
 * getInnerHeight
 * @method
 * @static
 * @return {number}
 * @param {string|object} wrap
 */
function getInnerHeight(wrap){
  var _wrap       = (typeof wrap === 'string') ? document.querySelector(wrap) : wrap;
  _wrap           = (_wrap instanceof jQuery) ? _wrap[0] : _wrap;
  var wrap_height = 0;
  var childs      = _wrap.children;
  for (var i = 0; i < childs.length; i++) {
    wrap_height += childs[i].clientHeight;
  }
  return wrap_height;
}

/*!
 * JavaScript Cookie 函数功能扩展
 * ==========================================================================
 */


/**
 * Cookie Manipulation
 * @type {{get: Function, add: Function, set: Function, remove: Function}}
 */
var cookie = window.cookie = {
  /**
   * addCookie
   * @param {string} name
   * @param {string} value
   * @param {number} [days=30] 30 days by default
   * @param {string} [domain]
   * @param {string} [path]
   * @param {boolean} [secure] Encrypt message when transfer online
   * @method
   * @static
   */
  add   : function(name, value, days, domain, path, secure){
    var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    //expire
    if (undefined !== days) { //include 0
      var _days = +days ? +days : (+days === 0) ? 0 : 30;
      var date = new Date();
      date.setTime(date.getTime() + _days * 24 * 3600 * 1000);
      str += ';expires=' + date.toUTCString();
    }
    if (domain && typeof domain === 'string') str += ';domain=' + domain;
    if (path && typeof path === 'string') str += ';path=' + path;
    if (secure) str += ';secure';
    document.cookie = str;
  },
  /**
   * getCookie
   * @param {string} [name] get all cookie if parameter name is omitted
   * @method
   * @static
   * @returns {*}
   */
  get   : function(name){
    var _cookies = {};
    if (document.cookie.length > 0) {
      var cookieArr = document.cookie.split(';');
      for (var i = 0, l = cookieArr.length; i < l; i++) {
        var hash = cookieArr[i].split('=');
        if (hash.length === 2) {
          _cookies[decodeURIComponent(hash[0]).replace(/(^\s*)/g, '')] = decodeURIComponent(hash[1]);
        }
      }
    }

    //get
    if (name && typeof name === 'string') {
      if (_cookies[name]) {
        return _cookies[name];
      } else {
        return '';
      }
    } else {
      return _cookies;
    }
  },
  /**
   * setCookie
   * @description Note that if new cookie doesn't exist it will be created
   * @param {string} name
   * @param {string} value
   * @param {number} [days=30] 30 days by default
   * @param {string} [domain]
   * @param {string} [path]
   * @param {boolean} [secure=false] Encrypt message when transfer online
   * @method
   * @static
   */
  set   : function(name, value, days, domain, path, secure){
    if (!cookie.get(name)) return; //check if it already exists

    var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    //expire
    if (undefined !== days) { //include 0
      var _days = +days ? +days : (+days === 0) ? 0 : 30;
      var date = new Date();
      date.setTime(date.getTime() + _days * 24 * 3600 * 1000);
      str += ';expires=' + date.toUTCString();
    }
    if (domain && typeof domain === 'string') str += ';domain=' + domain;
    if (path && typeof path === 'string') str += ';path=' + path;
    if (secure) str += ';secure';
    document.cookie = str;
  },
  /**
   * removeCookie
   * @param {string} [name] remove all cookie if parameter name is omitted
   * @method
   * @static
   */
  remove: function(name){
    if (name && typeof name === 'string') {
      if(!cookie.get(name)) return; //check if it already exists

      cookie.set(name, '', -1);
    } else {
      //clear all cookies
      var cookies = cookie.get();
      for (var c in cookies) {
        if (cookies.hasOwnProperty(c)) {
          cookie.remove(c);
        }
      }
    }
  }
};


/*!
 * JavaScript load Script 功能扩展
 * ==========================================================================
 */


/**
 * @method loadScript
 * @description Load script asynchronously
 * @param {string} url
 * @param {function} [callback]
 */
function loadScript(url, callback){
  var script = document.createElement('script');
  script.type = 'text/javascript';

  // callback
  if(callback && 'function' === typeof callback){
    if(script.readyState){ // IE
      script.onreadystatechange = function(){
        if(script.readyState === 'loaded' || script.readyState === 'complete'){
          script.onreadystatechange = null;
          callback();
        }
      }
    } else { // firefox, safari, chrome, opera, etc.
      script.onload = function(){
        callback();
      }
    }
  }

  script.src = url;
  document.body.appendChild(script);
}

/*!
 * JavaScript User Agent 功能扩展
 * ==========================================================================
 */


;(function(window){

  var ua    = navigator.userAgent.toLowerCase(),
      match = /(msie) ([\w.]+)/.exec(ua) ||
              /(trident)[\/]([\w.]+)/.exec(ua) ||
              /(edge)[\/]([\w.]+)/.exec(ua) ||
              /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) ||
              /(chrome)[ \/]([\w.]+)/.exec(ua) ||
              /(safari)[\/]([\w.]+)/.exec(ua) ||
              /(webkit)[ \/]([\w.]+)/.exec(ua) ||
              ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || [];

  var bs_name = match[1],
      bs_version = match[2];

  if(bs_name === 'trident'){
    // switch IE version
    bs_name = 'msie';
    switch (bs_version) {
      case '4.0':
        bs_version = '8.0';
        break;
      case '5.0':
        bs_version = '9.0';
        break;
      case '6.0':
        bs_version = '10.0';
        break;
      case '7.0':
        bs_version = '11.0';
        break;
    }
  }

  var userAgent = {
    /**
     * isPC
     * @returns {boolean}
     */
    isPC: function(){
      var uaInfo = navigator.userAgent.toLowerCase();
      var agents = [
        "android",
        "iphone",
        "symbianos",
        "windows phone",
        "ipad",
        "ipod"
      ];
      var flag = true;
      for (var i = 0, l = agents.length; i < l; i++) {
        if (uaInfo.indexOf(agents[i]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    browser: {
      name: bs_name || '',
      version: bs_version || '0',
      /**
       * check browser name
       * @param {string} name
       * @returns {boolean}
       */
      is: function(name){
        return userAgent.browser.name.toLowerCase() === name.toLowerCase();
      }
    }
  };

  window.ua = userAgent;

})(window);


