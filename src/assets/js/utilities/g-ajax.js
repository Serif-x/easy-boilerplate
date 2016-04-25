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
