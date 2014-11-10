;(function(win, doc){
 
	/**
     * @description 创建对话框
     * @param con 要显示的内容
     * @param tit对话框标题
     * @param wid对话框宽度
     * @param lef对话框水平距离
     * @param top对话框竖直距离
     */
	var Dialog = function(con, tit, wid, lef, top, fun) {
		con = con || "";
		tit = tit || "";
		wid = wid | 0 || 300;

		var ui = creatUI(con, tit, wid);// 创建UI

		doc.body.appendChild(ui.content);// 将UI加入到body中
		setPosition(ui.content, lef, top);// 设置位置

		EventUtil.addEvent(ui.elements[4], 'click', closeFun);// 绑定关闭事件

		this.ui = ui;
	};

	function closeFun(event) {// 点击关闭按钮执行的方法
		debugger
		event = EventUtil.getEvent(event);// 获取事件对象
		var target = EventUtil.getTarget(event);
		target.setAttribute("isClose", "1");// 设置关闭标记，防止关闭后调用close() 报错
		EventUtil.preventDefault(event);// 阻止默认事件
		EventUtil.removeEvent(target ,"click", closeFun);
		doc.body.removeChild(target.offsetParent.offsetParent);
	}

	Dialog.prototype.setWidth = function(width) {
		this.ui.content.style.width = width + 'px';
	}

	Dialog.prototype.setHeight = function(width) {
		this.ui.content.style.height = width + 'px';
	}

	Dialog.prototype.close = function() {
		if(null !== this.ui && !this.ui.elements[4].getAttribute("isClose")) {
			EventUtil.removeEvent(this.ui.elements[4] ,"click", closeFun);
			doc.body.removeChild(this.ui.content);
		}
		this.ui = null;
	}

	function creatUI(con, tit, wid) {

		var uiArr = [doc.createElement('div'), doc.createElement('div'),
			doc.createElement('span'), doc.createTextNode(tit), 
			doc.createElement('a'), doc.createElement('div'),
			doc.createTextNode(con), doc.createElement('div')],
			main = uiArr[0],// 对话框主体
			head = uiArr[1],// 标题部分
			title = uiArr[2],// 标题
			titText = uiArr[3],// 标题文字
			close = uiArr[4],// 关闭按钮
			content = uiArr[5],// 内容部分
			conText = uiArr[6],// 内容文字
			moveHandler = uiArr[7];// 拖动部分

		main.className = 'edu_dialog';
		head.className = 'dg_header';
		title.className = 'dg_title';
		close.className = 'dg_close_button';
		content.className = 'dg_content';
		moveHandler.className = 'dg_handler draggable';// 增加节点便于拖动实现

		if(wid > 0) {
			main.style.width = wid + 'px';
		}

		title.appendChild(titText);
		head.appendChild(title);
		head.appendChild(close);
		content.appendChild(conText);
		main.appendChild(moveHandler);
		main.appendChild(head);
		main.appendChild(content);

		return {content : main, elements : uiArr};
	}

	function setPosition(dom, lef, top) {
		// 默认情况下是居中(没有考虑滚动条,读者可进一步完善)
		var screen = DOMUtil.getViewportSize();// 获取窗口大小
		dom.style.left = (lef == undefined ? ((screen.w - DOMUtil.getStyle(dom, 'width').slice(0, -2)) >> 1) : lef) + 'px'; 
		dom.style.top = (top == undefined ? ((screen.h - DOMUtil.getStyle(dom, 'height').slice(0, -2)) >> 1) : top)+ 'px';
	}

	win.Dialog = Dialog;
})(window, document);