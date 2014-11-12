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
