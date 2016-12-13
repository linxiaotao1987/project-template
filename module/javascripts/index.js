(function(){
	setMetaViewport();
	setHtmlFont ();
})();


/*设置根元素字体大小*/
function setHtmlFont () {
	var html = document.documentElement,
		deviceWidth = html.clientWidth > 1300 ? 1300 : html.clientWidth;

	html.style.fontSize = (deviceWidth / 7.5) + 'px';
	window.addEventListener('resize',function(){
		debounce(setHtmlFont,50)();
	})
}
/*end*/
/*设置网页缩放*/
function setMetaViewport() {
	var header = document.querySelector('head'),
		devicePixelRatio = window.devicePixelRatio,
		scale = 1 / devicePixelRatio,
		metaViewport,
		metaViewportCont;

	metaViewportCont = 'width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no';

	metaViewport = document.createElement('meta');
	metaViewport.setAttribute('name','viewport');
	metaViewport.setAttribute('content',metaViewportCont)

	header.appendChild(metaViewport);
}
/*end*/

/*函数节流阀*/
function debounce(action,idle){
	var last;
	return function(){
		var ctx = this, args = arguments
		clearTimeout(last)
		last = setTimeout(function(){
			action.apply(ctx, args)
		}, idle)
	}
}
/*函数节流阀end*/



/*sendajax*/
window.linAjax = function(object){
	var xhr = new XMLHttpRequest();

	xhr.onerror = object.error;

	xhr.timeout = object.timeout ? object.timeout : null;
	xhr.ontimeout = function() {
		console.log('times up');
	};

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4) {
			if((xhr.status >= 200 && xhr.status < 300)||xhr.status == 304){
				object.success(xhr.responseText);
			} else {
				object.error(xhr.responseText);
			}
		}
	};

	xhr.open(object.type,object.url);
	xhr.send(object.data);
};
/*end*/






