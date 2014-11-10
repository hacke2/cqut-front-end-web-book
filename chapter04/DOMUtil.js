;(function(window, document) {
	var DOMUtil = {};


	DOMUtil.getViewportSize = function() {
		var screen = {};

		screen.w = window.innerWidth;
		screen.h = window.innerHeight;

		return screen;
	}

	DOMUtil.getStyle = function(obj, key) {
		return obj.currentStyle ? elem.currentStyle[key]: document.defaultView.getComputedStyle(obj, null)[key];
	}


	window.DOMUtil  = DOMUtil;
})(window, document)