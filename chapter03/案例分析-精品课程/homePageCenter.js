(function($){    
$.fn.extend({    
        Scroll:function(opt,callback){    
                //参数初始化    
                if(!opt) var opt={};    
                var _btnLeft = $("#"+ opt.left);//Shawphy:向左按钮    
                var _btnRight = $("#"+ opt.right);//Shawphy:向右按钮    
                var timerID;    
                var _this=this.eq(0).find("ul:first");    
                var lineH = _this.find("li:first").width(), //获取行宽    
                    
                line = opt.line?parseInt(opt.line,10):parseInt(this.width()/lineH,10), //每次滚动的行数，默认为一屏，即父容器宽度 为4      
                            
                speed = opt.speed?parseInt(opt.speed,10):5000; //卷动速度，数值越大，速度越慢（毫秒） 为1000    
                timer = opt.timer; //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒） 为3000    
                    
                    
               if(line==0) line=1;    
                  
                var upHeight=0-line*lineH;    
                   
                //滚动函数    
                var scrollLeft=function(){    
                        _btnLeft.unbind("click",scrollLeft); //取消向左按钮的函数绑定    
                        _this.animate({    
                                marginLeft:upHeight    
                        },speed,function(){    
                                for(i=1;i<=line;i++){    
                                        _this.find("li:first").appendTo(_this);    
                                }    
                                _this.css({marginLeft:0});    
                                _btnLeft.bind("click",scrollLeft); //绑定向左按钮的点击事件    
                        });    
   
                }    
                //向右翻页函数    
                var scrollRight=function(){    
                        _btnRight.unbind("click",scrollRight);//取消向右按钮的函数绑定    
                        for(i=1;i<=line;i++){    
                                _this.find("li:last").show().prependTo(_this);    
                        }    
                        _this.css({marginLeft:0});    
                        _this.animate({    
                                marginLeft:upHeight    
                        },speed,function(){    
                                _btnRight.bind("click",scrollRight); //绑定向右按钮的点击事件    
                        });    
   
                            
                }    
               //自动播放    
                var autoPlay = function(){    
                        if(timer)timerID = window.setInterval(scrollLeft,timer);    
                };    
                var autoStop = function(){    
                        if(timer)window.clearInterval(timerID);    
                };    
                 //鼠标事件绑定    
                _this.hover(autoStop,autoPlay).mouseout();    
                _btnLeft.css("cursor","pointer").click( scrollLeft ).hover(autoStop,autoPlay);   //向左鼠标事件绑定    
                _btnRight.css("cursor","pointer").click( scrollRight ).hover(autoStop,autoPlay);//向右鼠标事件绑定    
                   
        }           
})    
})(jQuery);    
   
$(document).ready(function(){    
        $("#carousel_inner").Scroll({line:4,speed:1000,timer:3000,left:"left_scroll",right:"right_scroll"});    
});    
