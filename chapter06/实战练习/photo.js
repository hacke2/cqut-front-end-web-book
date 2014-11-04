// JavaScript Document
//展示图片
function showImg(index){
	//获取下一张图片路径；
	var path=$("#photos li").eq(index).find("a").attr("href");	
    $(".showphoto img").attr("src",path).fadeIn("slow");
}

$(function(){
	var t=1;
	var imgsNumber=$("#photos li").length;
	
	//设一个定时器，翻滚图片，鼠标移上去停止
	var rollPicTimer = setInterval(function () {
		$(".button #next").click();
	}, 2000);
	
	//设一个定时器，翻滚图片，鼠标移上去停止
	$(".container").hover(function(){
		 $('.button').css("display","block");
		 //消除定时器
		  clearInterval(rollPicTimer);
	},function(){
		$(".button").css("display","none");
		 rollPicTimer = setInterval(function () {	
		 $(".button #next").click();
		 }, 2000);
	});

//按钮被点击
  $("#next").click(function(){
		t++;
		if(t>imgsNumber){
			t=1;
		}
		showImg(t-1);
	});
	
	$("#prev").click(function(){
		t--;
		if(t<=0){
			t=imgsNumber; 
		}
	    showImg(t-1);
	});
	
});