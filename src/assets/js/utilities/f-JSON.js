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
