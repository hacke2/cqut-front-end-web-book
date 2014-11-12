// JavaScript Document
window.onload=function(){
	// 获得nav下的所有li
	var allLi = document.getElementById("nav").getElementsByTagName("li");
	var navOptions = [];
	// 将nav的一级li存在navOptions里
	for(var i=0;i<allLi.length;i++){
	     if(allLi[i].getElementsByTagName("ul").length!=0){
		  	navOptions.push(allLi[i]);
		 }	
	}
	for(var i=0;i<navOptions.length;i++){
		var navOption = navOptions[i];
		show(navOption);
	}
	function show(navOption){
		navOption.onmouseover = function(){
			navOption.getElementsByTagName("ul")[0].style.display="block";	
		}
		navOption.onmouseout = function(){
			navOption.getElementsByTagName("ul")[0].style.display="none";
		}	
	}
}

$(document).ready(function() {
	var i =0;
	
	//让第一个图片显示出来
	$(".picture:eq(0)").show();
	
	
	var picture = $(".picture");
	
	$(".pageUp").click(function() {
		picture.each(function(index, element) {
			//找到当前显示的是哪张图片
			if(element.style.display=='block'){
				i = index;
			}
		});
		if(i==0){
			//往右的时候当当前为第一张的时候下一张为倒数第一张
			i=picture.length-1;
		}else {
			//否则i的下标减一
			i = i-1;
			}
			
		picture.each(function(index, element) {
			if(index==i){
				 $(element).show();
			}else{
				$(element).hide();
			}
		});
	});
	
	$(".pageDown").click(function() {
		picture.each(function(index, element) {
			if(element.style.display=='block'){
				i = index;
			}
		});
		//往左的时候，当当前倒数为第一张的时候下一张为第一张
		if(i==picture.length-1){
			i=0;
		}else {
			//否则i的下加减一
			i = i+1;
			}
		picture.each(function(index, element) {
			if(index==i){
				 $(element).show();
			}else{
				$(element).hide();
			}
		});
	});
});