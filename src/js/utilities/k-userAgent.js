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


