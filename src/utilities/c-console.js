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
