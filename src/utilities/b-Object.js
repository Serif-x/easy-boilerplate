

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
