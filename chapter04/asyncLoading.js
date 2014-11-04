(function() {
function asyncLoad() {
            var _script = document.createElement('script');
                _script.type = 'text/javascript';
                _script.async = true;
                _script.src = 'http://domain/script.js';
                var tag = document.getElementsByTagName('script')[0];
                tag.parentNode.insertBefore(_script, tag);
}
var isIE = window.attachEvent;     
if(isIE) {
window.attachEvent('onload', asyncLoad);
} else {
window.addEventListener('load', asyncLoad, false);
}	
	})();