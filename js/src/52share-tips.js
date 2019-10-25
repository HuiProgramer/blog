// build time:Fri Oct 25 2019 19:44:12 GMT+0800 (GMT+08:00)
var wenkmTipsTime=null;var wenkmTips={show:function(e){clearTimeout(wenkmTipsTime);$("#wenkmTips").text(e).addClass("show");this.hide()},hide:function(){wenkmTipsTime=setTimeout(function(){$("#wenkmTips").removeClass("show")},4e3)}};
//rebuild by neat 