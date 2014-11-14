var fibonacci =function(n) {
    return n <2? n : arguments.callee(n -1) + arguments.callee(n -2);
};
//接受主线程的传参
var onmessage =function(event) {
	var n = parseInt(event.data, 10);
	//向主线程传递返回结果
	    postMessage(fibonacci(n));
};