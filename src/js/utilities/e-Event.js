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
