/*
 * @Author: bettermu 
 * @Date: 2018-05-08 09:25:54 
 * @Last Modified by: bettermu
 * @Last Modified time: 2018-05-08 09:27:08
 * rem自适应布局
 */

(function(win, doc){
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      refresh = function () { 
          var w = docEl.clientWidth,
              dpr = win.devicePixelRatio || 1;

          docEl.style.fontSize = 100 * (w/375) + 'px';

          function setBodyFontSize () {
              if (doc.body) {
                  doc.body.style.fontSize = '16px';
              }else {
                  doc.addEventListener('DOMContentLoaded', refresh)
              }
          }
          setBodyFontSize();  
      };
  refresh();

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, refresh, false);
})(window, document);



