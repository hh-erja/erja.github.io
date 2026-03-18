
var TrackLink = function() {
  var local_site = document.location.protocol+'//'+document.location.host+'/';
  function log(v) {
	 if (typeof(console)+'' != 'undefined') { console.log(v); }
  }

  function document_click(e) {
	 var re_local = /\/?([^\/]+)\.aspx/;
	 if (!e) var e = window.event;
	 if (e.target) t = e.target;
	 else if (e.srcElement) t = e.srcElement;
	 while (t.parentNode != document && t.nodeName.toLowerCase() != 'a') {
		t = t.parentNode;
	 }
	 if (t.nodeName.toLowerCase() == 'a') {
		var href = t.getAttribute('href')+'';
		if (href == null || href=="" ||  href == local_site || href.indexOf('?') == 0 || href.indexOf('#') == 0) { return; }
		if ((href.indexOf(':') == -1 || href.indexOf(local_site) == 0) && re_local.test(href)) {
		  return;
		}
		log_url(href);
	 }
  }
  
   function log_url(url) {
	 if (typeof(pageTracker)+'' != 'undefined'){
		pageTracker._trackPageview(url);
	 }
  }

  function initialize() {
	 document.onclick=document_click;
  }
  initialize();
}();


