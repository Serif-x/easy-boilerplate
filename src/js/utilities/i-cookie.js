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

