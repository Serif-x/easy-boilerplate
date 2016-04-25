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
