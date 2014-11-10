 (function (window, undefined) {
	var isIE = !!window.attachEvent,
		isOther = !!window.addEventListener;

	function returnFalse() {
		return false;
	}

	function returnTrue() {
		return true;
	}

	//文本节点和注释节点不能进行event等操作
	function isSuit(obj) {
		if (obj.nodeType === 3 || obj.nodeType === 8) {
			return returnFalse();
		} else {
			return returnTrue();
		}
	}

	function getEvent(event) {
		return e = event || window.event;
	}

	var EventUtil = new Object();

	EventUtil.getEvent = getEvent;

	//绑定事件
	EventUtil.addEvent = function(obj, type, callback, isBubble) {
		if(isSuit(obj)) {
			if(isIE) {
				obj.attachEvent('on' + type, callback);
				return this;
			} else if(isOther) {
				obj.addEventListener(type, callback, isBubble);
				return this;
			} else {
				obj['on' + type] = callback;
				return this;
			}
		} else {
			return this;
		}
	};
	//解除事件
	EventUtil.removeEvent = function (obj, type, callback, isBubble){
		if(isIE) {
			obj,detachEvent('on' + type, callback);
		} else if(isOther) {
			obj.removeEventListener(type, callback, isBubble);
		} else {
			obj['on' + type] = null;
		}
	};
	//阻止默认行为
	EventUtil.preventDefault = function (e) {
		if(isIE) {
			e.returnValue = false;
		} else if(isOther) {
			e.preventDefault();
		}
	};
	//阻止冒泡或者委托
	EventUtil.stopPropagation = function () {
		if(isIE) {
			e.cancelBubble = true;
		} else if(isOther) {
			e.stopPropagation();
		}
	};
	//对于mouseout、mouseover等，获得事件目标
	EventUtil.getRelatedTarget = function(){
        if(e.relatedTarget) {
			return e.relatedTarget;
        } else if(e.toElement) {
			e.toElement;
        } else if(e.fromElement) {
			e.fromElement;
        } else {
			returnFalse();
        }
	};
	//获取keycode
	EventUtil.getKeyCode = function(){
		if(typeof e.charCode == "number") {
			return e.charCode;
		} else {
			return e.keyCode
		}       
    },
	//获取实际事件源
	EventUtil.getTarget = function (event) {
		var e = getEvent(event);

		return e.target || e.srcElement;
	}

	EventUtil.time = (new Date).getTime();

	window.EventUtil = EventUtil;
})(window);