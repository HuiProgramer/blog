// build time:Wed Oct 23 2019 11:45:30 GMT+0800 (GMT+08:00)
var wenkmTipsTime=null;var wenkmTips={show:function(e){clearTimeout(wenkmTipsTime);$("#wenkmTips").text(e).addClass("show");this.hide()},hide:function(){wenkmTipsTime=setTimeout(function(){$("#wenkmTips").removeClass("show")},4e3)}};
//rebuild by neat 