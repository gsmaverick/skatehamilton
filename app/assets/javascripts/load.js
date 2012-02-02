(function() {  
  // Don't load this widget twice, only one per page
  if (window.SH.loaded) return;

  var head = document.getElementsByTagName('head')[0];

  var css   = document.createElement('link');
  css.rel   = 'stylesheet';
  css.type  = 'text/css';
  css.media = 'screen';
  css.href  = 'http://localhost:3000/assets/widget.css';

  var js  = document.createElement('script');
  js.src  = 'http://localhost:3000/assets/widget.js'
  js.type = 'text/javascript';

  head.appendChild(css);
  head.appendChild(js);

  window.SH.loaded = true;
})();