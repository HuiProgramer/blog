// build time:Sat May 04 2019 17:29:50 GMT+0800 (GMT+08:00)
(function(t){var o={init:function(o){var e={set_width:false,set_height:false,horizontalScroll:false,scrollInertia:950,mouseWheel:true,mouseWheelPixels:"auto",autoDraggerLength:true,autoHideScrollbar:false,alwaysShowScrollbar:false,snapAmount:null,snapOffset:0,scrollButtons:{enable:false,scrollType:"continuous",scrollSpeed:"auto",scrollAmount:40},advanced:{updateOnBrowserResize:true,updateOnContentResize:false,autoExpandHorizontalScroll:false,autoScrollOnFocus:true,normalizeMouseWheelDelta:false},contentTouchScroll:true,callbacks:{onScrollStart:function(){},onScroll:function(){},onTotalScroll:function(){},onTotalScrollBack:function(){},onTotalScrollOffset:0,onTotalScrollBackOffset:0,whileScrolling:function(){}},theme:"light"},o=t.extend(true,e,o);return this.each(function(){var e=t(this);if(o.set_width){e.css("width",o.set_width)}if(o.set_height){e.css("height",o.set_height)}if(!t(document).data("mCustomScrollbar-index")){t(document).data("mCustomScrollbar-index","1")}else{var a=parseInt(t(document).data("mCustomScrollbar-index"));t(document).data("mCustomScrollbar-index",a+1)}e.wrapInner("<div class='mCustomScrollBox mCS-"+o.theme+"' id='mCSB_"+t(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+t(document).data("mCustomScrollbar-index"));var l=e.children(".mCustomScrollBox");if(o.horizontalScroll){l.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");var n=l.children(".mCSB_h_wrapper");n.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({width:n.children().outerWidth(),position:"relative"}).unwrap()}else{l.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")}var r=l.children(".mCSB_container");if(t.support.touch){r.addClass("mCS_touch")}r.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");var i=l.children(".mCSB_scrollTools"),s=i.children(".mCSB_draggerContainer"),c=s.children(".mCSB_dragger");if(o.horizontalScroll){c.data("minDraggerWidth",c.width())}else{c.data("minDraggerHeight",c.height())}if(o.scrollButtons.enable){if(o.horizontalScroll){i.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")}else{i.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")}}l.bind("scroll",function(){if(!e.is(".mCS_disabled")){l.scrollTop(0).scrollLeft(0)}});e.data({mCS_Init:true,mCustomScrollbarIndex:t(document).data("mCustomScrollbar-index"),horizontalScroll:o.horizontalScroll,scrollInertia:o.scrollInertia,scrollEasing:"mcsEaseOut",mouseWheel:o.mouseWheel,mouseWheelPixels:o.mouseWheelPixels,autoDraggerLength:o.autoDraggerLength,autoHideScrollbar:o.autoHideScrollbar,alwaysShowScrollbar:o.alwaysShowScrollbar,snapAmount:o.snapAmount,snapOffset:o.snapOffset,scrollButtons_enable:o.scrollButtons.enable,scrollButtons_scrollType:o.scrollButtons.scrollType,scrollButtons_scrollSpeed:o.scrollButtons.scrollSpeed,scrollButtons_scrollAmount:o.scrollButtons.scrollAmount,autoExpandHorizontalScroll:o.advanced.autoExpandHorizontalScroll,autoScrollOnFocus:o.advanced.autoScrollOnFocus,normalizeMouseWheelDelta:o.advanced.normalizeMouseWheelDelta,contentTouchScroll:o.contentTouchScroll,onScrollStart_Callback:o.callbacks.onScrollStart,onScroll_Callback:o.callbacks.onScroll,onTotalScroll_Callback:o.callbacks.onTotalScroll,onTotalScrollBack_Callback:o.callbacks.onTotalScrollBack,onTotalScroll_Offset:o.callbacks.onTotalScrollOffset,onTotalScrollBack_Offset:o.callbacks.onTotalScrollBackOffset,whileScrolling_Callback:o.callbacks.whileScrolling,bindEvent_scrollbar_drag:false,bindEvent_content_touch:false,bindEvent_scrollbar_click:false,bindEvent_mousewheel:false,bindEvent_buttonsContinuous_y:false,bindEvent_buttonsContinuous_x:false,bindEvent_buttonsPixels_y:false,bindEvent_buttonsPixels_x:false,bindEvent_focusin:false,bindEvent_autoHideScrollbar:false,mCSB_buttonScrollRight:false,mCSB_buttonScrollLeft:false,mCSB_buttonScrollDown:false,mCSB_buttonScrollUp:false});if(o.horizontalScroll){if(e.css("max-width")!=="none"){if(!o.advanced.updateOnContentResize){o.advanced.updateOnContentResize=true}}}else{if(e.css("max-height")!=="none"){var d=false,u=parseInt(e.css("max-height"));if(e.css("max-height").indexOf("%")>=0){d=u,u=e.parent().height()*d/100}e.css("overflow","hidden");l.css("max-height",u)}}e.mCustomScrollbar("update");if(o.advanced.updateOnBrowserResize){var f,m=t(window).width(),h=t(window).height();t(window).bind("resize."+e.data("mCustomScrollbarIndex"),function(){if(f){clearTimeout(f)}f=setTimeout(function(){if(!e.is(".mCS_disabled")&&!e.is(".mCS_destroyed")){var o=t(window).width(),a=t(window).height();if(m!==o||h!==a){if(e.css("max-height")!=="none"&&d){l.css("max-height",e.parent().height()*d/100)}e.mCustomScrollbar("update");m=o;h=a}}},150)})}if(o.advanced.updateOnContentResize){var S;if(o.horizontalScroll){var p=r.outerWidth()}else{var p=r.outerHeight()}S=setInterval(function(){if(o.horizontalScroll){if(o.advanced.autoExpandHorizontalScroll){r.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:r.outerWidth(),position:"relative"}).unwrap()}var t=r.outerWidth()}else{var t=r.outerHeight()}if(t!=p){e.mCustomScrollbar("update");p=t}},300)}})},update:function(){var o=t(this),e=o.children(".mCustomScrollBox"),a=e.children(".mCSB_container");a.removeClass("mCS_no_scrollbar");o.removeClass("mCS_disabled mCS_destroyed");e.scrollTop(0).scrollLeft(0);var l=e.children(".mCSB_scrollTools"),n=l.children(".mCSB_draggerContainer"),r=n.children(".mCSB_dragger");if(o.data("horizontalScroll")){var i=l.children(".mCSB_buttonLeft"),s=l.children(".mCSB_buttonRight"),c=e.width();if(o.data("autoExpandHorizontalScroll")){a.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:a.outerWidth(),position:"relative"}).unwrap()}var d=a.outerWidth()}else{var u=l.children(".mCSB_buttonUp"),f=l.children(".mCSB_buttonDown"),m=e.height(),h=a.outerHeight()}if(h>m&&!o.data("horizontalScroll")){l.css("display","block");var S=n.height();if(o.data("autoDraggerLength")){var p=Math.round(m/h*S),b=r.data("minDraggerHeight");if(p<=b){r.css({height:b})}else{if(p>=S-10){var g=S-10;r.css({height:g})}else{r.css({height:p})}}r.children(".mCSB_dragger_bar").css({"line-height":r.height()+"px"})}var _=r.height(),v=(h-m)/(S-_);o.data("scrollAmount",v).mCustomScrollbar("scrolling",e,a,n,r,u,f,i,s);var w=Math.abs(a.position().top);o.mCustomScrollbar("scrollTo",w,{scrollInertia:0,trigger:"internal"})}else{if(d>c&&o.data("horizontalScroll")){l.css("display","block");var C=n.width();if(o.data("autoDraggerLength")){var B=Math.round(c/d*C),x=r.data("minDraggerWidth");if(B<=x){r.css({width:x})}else{if(B>=C-10){var T=C-10;r.css({width:T})}else{r.css({width:B})}}}var E=r.width(),v=(d-c)/(C-E);o.data("scrollAmount",v).mCustomScrollbar("scrolling",e,a,n,r,u,f,i,s);var w=Math.abs(a.position().left);o.mCustomScrollbar("scrollTo",w,{scrollInertia:0,trigger:"internal"})}else{e.unbind("mousewheel focusin");if(o.data("horizontalScroll")){r.add(a).css("left",0)}else{r.add(a).css("top",0)}if(o.data("alwaysShowScrollbar")){if(!o.data("horizontalScroll")){r.css({height:n.height()})}else{if(o.data("horizontalScroll")){r.css({width:n.width()})}}}else{l.css("display","none");a.addClass("mCS_no_scrollbar")}o.data({bindEvent_mousewheel:false,bindEvent_focusin:false})}}},scrolling:function(o,a,l,n,r,i,s,c){var d=t(this);if(!d.data("bindEvent_scrollbar_drag")){var u,f,m,h,S;if(t.support.pointer){m="pointerdown";h="pointermove";S="pointerup"}else{if(t.support.msPointer){m="MSPointerDown";h="MSPointerMove";S="MSPointerUp"}}if(t.support.pointer||t.support.msPointer){n.bind(m,function(o){o.preventDefault();d.data({on_drag:true});n.addClass("mCSB_dragger_onDrag");var e=t(this),a=e.offset(),l=o.originalEvent.pageX-a.left,r=o.originalEvent.pageY-a.top;if(l<e.width()&&l>0&&r<e.height()&&r>0){u=r;f=l}});t(document).bind(h+"."+d.data("mCustomScrollbarIndex"),function(t){t.preventDefault();if(d.data("on_drag")){var o=n,e=o.offset(),a=t.originalEvent.pageX-e.left,l=t.originalEvent.pageY-e.top;p(u,f,l,a)}}).bind(S+"."+d.data("mCustomScrollbarIndex"),function(t){d.data({on_drag:false});n.removeClass("mCSB_dragger_onDrag")})}else{n.bind("mousedown touchstart",function(o){o.preventDefault();o.stopImmediatePropagation();var e=t(this),a=e.offset(),l,r;if(o.type==="touchstart"){var i=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];l=i.pageX-a.left;r=i.pageY-a.top}else{d.data({on_drag:true});n.addClass("mCSB_dragger_onDrag");l=o.pageX-a.left;r=o.pageY-a.top}if(l<e.width()&&l>0&&r<e.height()&&r>0){u=r;f=l}}).bind("touchmove",function(o){o.preventDefault();o.stopImmediatePropagation();var e=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0],a=t(this),l=a.offset(),n=e.pageX-l.left,r=e.pageY-l.top;p(u,f,r,n)});t(document).bind("mousemove."+d.data("mCustomScrollbarIndex"),function(t){if(d.data("on_drag")){var o=n,e=o.offset(),a=t.pageX-e.left,l=t.pageY-e.top;p(u,f,l,a)}}).bind("mouseup."+d.data("mCustomScrollbarIndex"),function(t){d.data({on_drag:false});n.removeClass("mCSB_dragger_onDrag")})}d.data({bindEvent_scrollbar_drag:true})}function p(t,o,e,a){if(d.data("horizontalScroll")){d.mCustomScrollbar("scrollTo",n.position().left-o+a,{moveDragger:true,trigger:"internal"})}else{d.mCustomScrollbar("scrollTo",n.position().top-t+e,{moveDragger:true,trigger:"internal"})}}if(t.support.touch&&d.data("contentTouchScroll")){if(!d.data("bindEvent_content_touch")){var b,g,_,v,w,C,B;a.bind("touchstart",function(o){o.stopImmediatePropagation();b=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];g=t(this);_=g.offset();w=b.pageX-_.left;v=b.pageY-_.top;C=v;B=w});a.bind("touchmove",function(o){o.preventDefault();o.stopImmediatePropagation();b=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];g=t(this).parent();_=g.offset();w=b.pageX-_.left;v=b.pageY-_.top;if(d.data("horizontalScroll")){d.mCustomScrollbar("scrollTo",B-w,{trigger:"internal"})}else{d.mCustomScrollbar("scrollTo",C-v,{trigger:"internal"})}})}}if(!d.data("bindEvent_scrollbar_click")){l.bind("click",function(o){var e=(o.pageY-l.offset().top)*d.data("scrollAmount"),a=t(o.target);if(d.data("horizontalScroll")){e=(o.pageX-l.offset().left)*d.data("scrollAmount")}if(a.hasClass("mCSB_draggerContainer")||a.hasClass("mCSB_draggerRail")){d.mCustomScrollbar("scrollTo",e,{trigger:"internal",scrollEasing:"draggerRailEase"})}});d.data({bindEvent_scrollbar_click:true})}if(d.data("mouseWheel")){if(!d.data("bindEvent_mousewheel")){o.bind("mousewheel",function(t,o){var e,r=d.data("mouseWheelPixels"),i=Math.abs(a.position().top),s=n.position().top,c=l.height()-n.height();if(d.data("normalizeMouseWheelDelta")){if(o<0){o=-1}else{o=1}}if(r==="auto"){r=100+Math.round(d.data("scrollAmount")/2)}if(d.data("horizontalScroll")){s=n.position().left;c=l.width()-n.width();i=Math.abs(a.position().left)}if(o>0&&s!==0||o<0&&s!==c){t.preventDefault();t.stopImmediatePropagation()}e=i-o*r;d.mCustomScrollbar("scrollTo",e,{trigger:"internal"})});d.data({bindEvent_mousewheel:true})}}if(d.data("scrollButtons_enable")){if(d.data("scrollButtons_scrollType")==="pixels"){if(d.data("horizontalScroll")){c.add(s).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend",T,E);d.data({bindEvent_buttonsContinuous_x:false});if(!d.data("bindEvent_buttonsPixels_x")){c.bind("click",function(t){t.preventDefault();x(Math.abs(a.position().left)+d.data("scrollButtons_scrollAmount"))});s.bind("click",function(t){t.preventDefault();x(Math.abs(a.position().left)-d.data("scrollButtons_scrollAmount"))});d.data({bindEvent_buttonsPixels_x:true})}}else{i.add(r).unbind("mousedown touchstart MSPointerDown pointerdown mouseup MSPointerUp pointerup mouseout MSPointerOut pointerout touchend",T,E);d.data({bindEvent_buttonsContinuous_y:false});if(!d.data("bindEvent_buttonsPixels_y")){i.bind("click",function(t){t.preventDefault();x(Math.abs(a.position().top)+d.data("scrollButtons_scrollAmount"))});r.bind("click",function(t){t.preventDefault();x(Math.abs(a.position().top)-d.data("scrollButtons_scrollAmount"))});d.data({bindEvent_buttonsPixels_y:true})}}function x(t){if(!n.data("preventAction")){n.data("preventAction",true);d.mCustomScrollbar("scrollTo",t,{trigger:"internal"})}}}else{if(d.data("horizontalScroll")){c.add(s).unbind("click");d.data({bindEvent_buttonsPixels_x:false});if(!d.data("bindEvent_buttonsContinuous_x")){c.bind("mousedown touchstart MSPointerDown pointerdown",function(t){t.preventDefault();var o=y();d.data({mCSB_buttonScrollRight:setInterval(function(){d.mCustomScrollbar("scrollTo",Math.abs(a.position().left)+o,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var T=function(t){t.preventDefault();clearInterval(d.data("mCSB_buttonScrollRight"))};c.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",T);s.bind("mousedown touchstart MSPointerDown pointerdown",function(t){t.preventDefault();var o=y();d.data({mCSB_buttonScrollLeft:setInterval(function(){d.mCustomScrollbar("scrollTo",Math.abs(a.position().left)-o,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var E=function(t){t.preventDefault();clearInterval(d.data("mCSB_buttonScrollLeft"))};s.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",E);d.data({bindEvent_buttonsContinuous_x:true})}}else{i.add(r).unbind("click");d.data({bindEvent_buttonsPixels_y:false});if(!d.data("bindEvent_buttonsContinuous_y")){i.bind("mousedown touchstart MSPointerDown pointerdown",function(t){t.preventDefault();var o=y();d.data({mCSB_buttonScrollDown:setInterval(function(){d.mCustomScrollbar("scrollTo",Math.abs(a.position().top)+o,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var k=function(t){t.preventDefault();clearInterval(d.data("mCSB_buttonScrollDown"))};i.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",k);r.bind("mousedown touchstart MSPointerDown pointerdown",function(t){t.preventDefault();var o=y();d.data({mCSB_buttonScrollUp:setInterval(function(){d.mCustomScrollbar("scrollTo",Math.abs(a.position().top)-o,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var M=function(t){t.preventDefault();clearInterval(d.data("mCSB_buttonScrollUp"))};r.bind("mouseup touchend MSPointerUp pointerup mouseout MSPointerOut pointerout",M);d.data({bindEvent_buttonsContinuous_y:true})}}function y(){var t=d.data("scrollButtons_scrollSpeed");if(d.data("scrollButtons_scrollSpeed")==="auto"){t=Math.round((d.data("scrollInertia")+100)/40)}return t}}}if(d.data("autoScrollOnFocus")){if(!d.data("bindEvent_focusin")){o.bind("focusin",function(){o.scrollTop(0).scrollLeft(0);var e=t(document.activeElement);if(e.is("input,textarea,select,button,a[tabindex],area,object")){var l=a.position().top,n=e.position().top,r=o.height()-e.outerHeight();if(d.data("horizontalScroll")){l=a.position().left;n=e.position().left;r=o.width()-e.outerWidth()}if(l+n<0||l+n>r){d.mCustomScrollbar("scrollTo",n,{trigger:"internal"})}}});d.data({bindEvent_focusin:true})}}if(d.data("autoHideScrollbar")&&!d.data("alwaysShowScrollbar")){if(!d.data("bindEvent_autoHideScrollbar")){o.bind("mouseenter",function(t){o.addClass("mCS-mouse-over");e.showScrollbar.call(o.children(".mCSB_scrollTools"))}).bind("mouseleave touchend",function(t){o.removeClass("mCS-mouse-over");if(t.type==="mouseleave"){e.hideScrollbar.call(o.children(".mCSB_scrollTools"))}});d.data({bindEvent_autoHideScrollbar:true})}}},scrollTo:function(o,a){var l=t(this),n={moveDragger:false,trigger:"external",callbacks:true,scrollInertia:l.data("scrollInertia"),scrollEasing:l.data("scrollEasing")},a=t.extend(n,a),r,i=l.children(".mCustomScrollBox"),s=i.children(".mCSB_container"),c=i.children(".mCSB_scrollTools"),d=c.children(".mCSB_draggerContainer"),u=d.children(".mCSB_dragger"),f=draggerSpeed=a.scrollInertia,m,h,S,p;if(!s.hasClass("mCS_no_scrollbar")){l.data({mCS_trigger:a.trigger});if(l.data("mCS_Init")){a.callbacks=false}if(o||o===0){if(typeof o==="number"){if(a.moveDragger){r=o;if(l.data("horizontalScroll")){o=u.position().left*l.data("scrollAmount")}else{o=u.position().top*l.data("scrollAmount")}draggerSpeed=0}else{r=o/l.data("scrollAmount")}}else{if(typeof o==="string"){var b;if(o==="top"){b=0}else{if(o==="bottom"&&!l.data("horizontalScroll")){b=s.outerHeight()-i.height()}else{if(o==="left"){b=0}else{if(o==="right"&&l.data("horizontalScroll")){b=s.outerWidth()-i.width()}else{if(o==="first"){b=l.find(".mCSB_container").find(":first")}else{if(o==="last"){b=l.find(".mCSB_container").find(":last")}else{b=l.find(o)}}}}}}if(b.length===1){if(l.data("horizontalScroll")){o=b.position().left}else{o=b.position().top}r=o/l.data("scrollAmount")}else{r=o=b}}}if(l.data("horizontalScroll")){if(l.data("onTotalScrollBack_Offset")){h=-l.data("onTotalScrollBack_Offset")}if(l.data("onTotalScroll_Offset")){p=i.width()-s.outerWidth()+l.data("onTotalScroll_Offset")}if(r<0){r=o=0;clearInterval(l.data("mCSB_buttonScrollLeft"));if(!h){m=true}}else{if(r>=d.width()-u.width()){r=d.width()-u.width();o=i.width()-s.outerWidth();clearInterval(l.data("mCSB_buttonScrollRight"));if(!p){S=true}}else{o=-o}}var g=l.data("snapAmount");if(g){o=Math.round(o/g)*g-l.data("snapOffset")}e.mTweenAxis.call(this,u[0],"left",Math.round(r),draggerSpeed,a.scrollEasing);e.mTweenAxis.call(this,s[0],"left",Math.round(o),f,a.scrollEasing,{onStart:function(){if(a.callbacks&&!l.data("mCS_tweenRunning")){_("onScrollStart")}if(l.data("autoHideScrollbar")&&!l.data("alwaysShowScrollbar")){e.showScrollbar.call(c)}},onUpdate:function(){if(a.callbacks){_("whileScrolling")}},onComplete:function(){if(a.callbacks){_("onScroll");if(m||h&&s.position().left>=h){_("onTotalScrollBack")}if(S||p&&s.position().left<=p){_("onTotalScroll")}}u.data("preventAction",false);l.data("mCS_tweenRunning",false);if(l.data("autoHideScrollbar")&&!l.data("alwaysShowScrollbar")){if(!i.hasClass("mCS-mouse-over")){e.hideScrollbar.call(c)}}}})}else{if(l.data("onTotalScrollBack_Offset")){h=-l.data("onTotalScrollBack_Offset")}if(l.data("onTotalScroll_Offset")){p=i.height()-s.outerHeight()+l.data("onTotalScroll_Offset")}if(r<0){r=o=0;clearInterval(l.data("mCSB_buttonScrollUp"));if(!h){m=true}}else{if(r>=d.height()-u.height()){r=d.height()-u.height();o=i.height()-s.outerHeight();clearInterval(l.data("mCSB_buttonScrollDown"));if(!p){S=true}}else{o=-o}}var g=l.data("snapAmount");if(g){o=Math.round(o/g)*g-l.data("snapOffset")}e.mTweenAxis.call(this,u[0],"top",Math.round(r),draggerSpeed,a.scrollEasing);e.mTweenAxis.call(this,s[0],"top",Math.round(o),f,a.scrollEasing,{onStart:function(){if(a.callbacks&&!l.data("mCS_tweenRunning")){_("onScrollStart")}if(l.data("autoHideScrollbar")&&!l.data("alwaysShowScrollbar")){e.showScrollbar.call(c)}},onUpdate:function(){if(a.callbacks){_("whileScrolling")}},onComplete:function(){if(a.callbacks){_("onScroll");if(m||h&&s.position().top>=h){_("onTotalScrollBack")}if(S||p&&s.position().top<=p){_("onTotalScroll")}}u.data("preventAction",false);l.data("mCS_tweenRunning",false);if(l.data("autoHideScrollbar")&&!l.data("alwaysShowScrollbar")){if(!i.hasClass("mCS-mouse-over")){e.hideScrollbar.call(c)}}}})}if(l.data("mCS_Init")){l.data({mCS_Init:false})}}}function _(t){if(l.data("mCustomScrollbarIndex")){this.mcs={top:s.position().top,left:s.position().left,draggerTop:u.position().top,draggerLeft:u.position().left,topPct:Math.round(100*Math.abs(s.position().top)/Math.abs(s.outerHeight()-i.height())),leftPct:Math.round(100*Math.abs(s.position().left)/Math.abs(s.outerWidth()-i.width()))};switch(t){case"onScrollStart":l.data("mCS_tweenRunning",true).data("onScrollStart_Callback").call(l,this.mcs);break;case"whileScrolling":l.data("whileScrolling_Callback").call(l,this.mcs);break;case"onScroll":l.data("onScroll_Callback").call(l,this.mcs);break;case"onTotalScrollBack":l.data("onTotalScrollBack_Callback").call(l,this.mcs);break;case"onTotalScroll":l.data("onTotalScroll_Callback").call(l,this.mcs);break}}}},stop:function(){var o=t(this),a=o.children().children(".mCSB_container"),l=o.children().children().children().children(".mCSB_dragger");e.mTweenAxisStop.call(this,a[0]);e.mTweenAxisStop.call(this,l[0])},disable:function(o){var e=t(this),a=e.children(".mCustomScrollBox"),l=a.children(".mCSB_container"),n=a.children(".mCSB_scrollTools"),r=n.children().children(".mCSB_dragger");a.unbind("mousewheel focusin mouseenter mouseleave touchend");l.unbind("touchstart touchmove");if(o){if(e.data("horizontalScroll")){r.add(l).css("left",0)}else{r.add(l).css("top",0)}}n.css("display","none");l.addClass("mCS_no_scrollbar");e.data({bindEvent_mousewheel:false,bindEvent_focusin:false,bindEvent_content_touch:false,bindEvent_autoHideScrollbar:false}).addClass("mCS_disabled")},destroy:function(){var o=t(this);o.removeClass("mCustomScrollbar _mCS_"+o.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();t(document).unbind("mousemove."+o.data("mCustomScrollbarIndex")+" mouseup."+o.data("mCustomScrollbarIndex")+" MSPointerMove."+o.data("mCustomScrollbarIndex")+" MSPointerUp."+o.data("mCustomScrollbarIndex"));t(window).unbind("resize."+o.data("mCustomScrollbarIndex"))}},e={showScrollbar:function(){this.stop().animate({opacity:1},"fast")},hideScrollbar:function(){this.stop().animate({opacity:0},"fast")},mTweenAxis:function(t,o,e,a,l,n){var n=n||{},r=n.onStart||function(){},i=n.onUpdate||function(){},s=n.onComplete||function(){};var c=S(),d,u=0,f=t.offsetTop,m=t.style;if(o==="left"){f=t.offsetLeft}var h=e-f;_();g();function S(){if(window.performance&&window.performance.now){return window.performance.now()}else{if(window.performance&&window.performance.webkitNow){return window.performance.webkitNow()}else{if(Date.now){return Date.now()}else{return(new Date).getTime()}}}}function p(){if(!u){r.call()}u=S()-c;b();if(u>=t._time){t._time=u>t._time?u+d-(u-t._time):u+d-1;if(t._time<u+1){t._time=u+1}}if(t._time<a){t._id=_request(p)}else{s.call()}}function b(){if(a>0){t.currVal=v(t._time,f,h,a,l);m[o]=Math.round(t.currVal)+"px"}else{m[o]=e+"px"}i.call()}function g(){d=1e3/60;t._time=u+d;_request=!window.requestAnimationFrame?function(t){b();return setTimeout(t,.01)}:window.requestAnimationFrame;t._id=_request(p)}function _(){if(t._id==null){return}if(!window.requestAnimationFrame){clearTimeout(t._id)}else{window.cancelAnimationFrame(t._id)}t._id=null}function v(t,o,e,a,l){switch(l){case"linear":return e*t/a+o;break;case"easeOutQuad":t/=a;return-e*t*(t-2)+o;break;case"easeInOutQuad":t/=a/2;if(t<1){return e/2*t*t+o}t--;return-e/2*(t*(t-2)-1)+o;break;case"easeOutCubic":t/=a;t--;return e*(t*t*t+1)+o;break;case"easeOutQuart":t/=a;t--;return-e*(t*t*t*t-1)+o;break;case"easeOutQuint":t/=a;t--;return e*(t*t*t*t*t+1)+o;break;case"easeOutCirc":t/=a;t--;return e*Math.sqrt(1-t*t)+o;break;case"easeOutSine":return e*Math.sin(t/a*(Math.PI/2))+o;break;case"easeOutExpo":return e*(-Math.pow(2,-10*t/a)+1)+o;break;case"mcsEaseOut":var n=(t/=a)*t,r=n*t;return o+e*(.499999999999997*r*n+-2.5*n*n+5.5*r+-6.5*n+4*t);break;case"draggerRailEase":t/=a/2;if(t<1){return e/2*t*t*t+o}t-=2;return e/2*(t*t*t+2)+o;break}}},mTweenAxisStop:function(t){if(t._id==null){return}if(!window.requestAnimationFrame){clearTimeout(t._id)}else{window.cancelAnimationFrame(t._id)}t._id=null},rafPolyfill:function(){var t=["ms","moz","webkit","o"],o=t.length;while(--o>-1&&!window.requestAnimationFrame){window.requestAnimationFrame=window[t[o]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[t[o]+"CancelAnimationFrame"]||window[t[o]+"CancelRequestAnimationFrame"]}}};e.rafPolyfill.call();t.support.touch=!!("ontouchstart"in window);t.support.pointer=window.navigator.pointerEnabled;t.support.msPointer=window.navigator.msPointerEnabled;var a="https:"==document.location.protocol?"https:":"http:";t.event.special.mousewheel||document.write('<script src="'+a+'//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"></script>');t.fn.mCustomScrollbar=function(e){if(o[e]){return o[e].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof e==="object"||!e){return o.init.apply(this,arguments)}else{t.error("Method "+e+" does not exist")}}}})(jQuery);
//rebuild by neat 