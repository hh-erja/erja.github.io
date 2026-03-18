(function() {
	var log = function(m) { if (typeof(console) != 'undefined') { console.log(m); }};

	function inject(content) {
	  var c_arr = content.split(',');
	  var width,height;
	  if (c_arr.length == 4) {
		 width = c_arr[2], height = c_arr[3];
	  } else {
		 width = '594', height='149';
	  }

	  var swf_url = '/fb/swf/'+c_arr[0]+'?XML_PATH='+'/fb/data/'+c_arr[1];
	  var h = document.getElementById('header');
	  h.innerHTML = '';
     h.style.backgroundColor = 'white';
	  h.style.padding = '0';
	  h.style.height = height+'px';
	  var so = new SWFObject(swf_url, "loader", width, height, "9");
	  so.addParam("quality", "best");
	  so.addParam("wmode", "opaque");
	  so.write("header");	            
	}


	function inject_banner() {
	  var meta_tags = document.getElementsByTagName('META');
	  for (var i=0; i < meta_tags.length; i++) {
		 var m = meta_tags[i];
		 if (m.getAttribute('name') == 'header-flash') {
			var c = m.getAttribute('content');
			inject(c);
			return;
		 }
	  }
	}
	inject_banner();
})();
