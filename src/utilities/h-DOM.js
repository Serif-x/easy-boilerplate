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
