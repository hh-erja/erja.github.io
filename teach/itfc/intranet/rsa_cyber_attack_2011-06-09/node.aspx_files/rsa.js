
function rsa_open_window(url) {
  window.open(url);
}

function menu_init_all() {
    menu_init();
    worldwide_init();1
}

function worldwide_init() {
    var root = document.getElementById('worldwide');
    if (root == null) { return; }
    root.onmouseover = worldwide_mouseover;
    root.onmouseout = worldwide_mouseout;

}

function worldwide_mouseover(e) {
    var children = this.getElementsByTagName('div');
    children[0].getElementsByTagName('div')[0].style.display = 'block';

}
function worldwide_mouseout(e) {
    var children = this.getElementsByTagName('div');
    children[0].getElementsByTagName('div')[0].style.display = 'none';

}


function menu_init() {
    var root = document.getElementById('menu');
    if (root == null) { return; }
    var children = root.getElementsByTagName('div');
    for (var i=0; i < children.length; i++) {
	var m = children[i];
	if (m.className == 'menu-item') {
	    m.onmouseover = menu_mouseover;
	    m.onmouseout = menu_mouseout;
	}
    }
}

function menu_display(elt, display_val) {
    var d = elt.getElementsByTagName('div')[0];
    if (d != null) {
       d.style.display = display_val;
    }
}

function menu_show(menu_elt, elt) {
    var children = menu_elt.childNodes;
    for (var i=0; i < children.length; i++) {
	var m = children[i];
	if (m.className == 'menu-item') {
	    if (m == elt) {
		menu_display(m, 'block');
	    } else {
		menu_display(m, 'none');
	    }
	}
    }
    
}

function menu_mouseover(e) {
    menu_show(this.parentNode, this);
    return false;
}

function menu_mouseout(e) {
    menu_show(this.parentNode, null);
    return false;
}

function local_styles() {
  var host = document.location.host;
  var overrides = {
     'japan.rsawebdev.na.rsa.net' : '/japan/styles/rsa_japan.css',
	 'japan.rsa.com' : '/japan/styles/rsa_japan.css'
  };
  var stylesheet = overrides[host];
  if (stylesheet) {
	 addStylesheet(stylesheet); 
  }
}

function addStylesheet(url) {
  var newSS = document.createElement('link');
  newSS.rel ='stylesheet';
  newSS.type = 'text/css';
  newSS.href = url;
  document.getElementsByTagName("head")[0].appendChild(newSS);
}


onload = function() {
    menu_init_all();   
    local_styles();
}