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