// build time:Mon Feb 03 2020 22:24:47 GMT+0800 (GMT+08:00)
var wenkmTipsTime=null;var wenkmTips={show:function(o){clearTimeout(wenkmTipsTime);$("#wenkmTips").text(o).addClass("show");this.hide()},hide:function(){wenkmTipsTime=setTimeout(function(){$("#wenkmTips").removeClass("show")},4e3)}};function b2top(o,t,i){if(10>=t&&0<=t){var n=100*t;$(o).css({backgroundPosition:"0 -"+n+"px"});setTimeout("b2top('"+o+"',"+(i?t+1:t-1)+","+i+")",50)}}$(window).scroll(function(){200<$(this).scrollTop()?$(".backtop").fadeIn():$(".backtop").fadeOut()});$(".backtop").hover(function(){b2top(".backtop",0,!0)},function(){b2top(".backtop",3)}).click(function(){$("body,html").animate({scrollTop:0},600,function(){});b2top(".backtop",3)});
//rebuild by neat 