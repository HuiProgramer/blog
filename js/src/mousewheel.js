// build time:Tue Apr 23 2019 14:37:30 GMT+0800 (GMT+08:00)
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e}else{e(jQuery)}})(function(e){var t=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],i="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],n=Array.prototype.slice,l,o;if(e.event.fixHooks){for(var s=t.length;s;){e.event.fixHooks[t[--s]]=e.event.mouseHooks}}var a=e.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener){for(var t=i.length;t;){this.addEventListener(i[--t],h,false)}}else{this.onmousewheel=h}e.data(this,"mousewheel-line-height",a.getLineHeight(this));e.data(this,"mousewheel-page-height",a.getPageHeight(this))},teardown:function(){if(this.removeEventListener){for(var e=i.length;e;){this.removeEventListener(i[--e],h,false)}}else{this.onmousewheel=null}},getLineHeight:function(t){return parseInt(e(t)["offsetParent"in e.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:true}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}});function h(t){var i=t||window.event,s=n.call(arguments,1),a=0,h=0,r=0,d=0;t=e.event.fix(i);t.type="mousewheel";if("detail"in i){r=i.detail*-1}if("wheelDelta"in i){r=i.wheelDelta}if("wheelDeltaY"in i){r=i.wheelDeltaY}if("wheelDeltaX"in i){h=i.wheelDeltaX*-1}if("axis"in i&&i.axis===i.HORIZONTAL_AXIS){h=r*-1;r=0}a=r===0?h:r;if("deltaY"in i){r=i.deltaY*-1;a=r}if("deltaX"in i){h=i.deltaX;if(r===0){a=h*-1}}if(r===0&&h===0){return}if(i.deltaMode===1){var c=e.data(this,"mousewheel-line-height");a*=c;r*=c;h*=c}else if(i.deltaMode===2){var m=e.data(this,"mousewheel-page-height");a*=m;r*=m;h*=m}d=Math.max(Math.abs(r),Math.abs(h));if(!o||d<o){o=d;if(f(i,d)){o/=40}}if(f(i,d)){a/=40;h/=40;r/=40}a=Math[a>=1?"floor":"ceil"](a/o);h=Math[h>=1?"floor":"ceil"](h/o);r=Math[r>=1?"floor":"ceil"](r/o);t.deltaX=h;t.deltaY=r;t.deltaFactor=o;t.deltaMode=0;s.unshift(t,a,h,r);if(l){clearTimeout(l)}l=setTimeout(u,200);return(e.event.dispatch||e.event.handle).apply(this,s)}function u(){o=null}function f(e,t){return a.settings.adjustOldDeltas&&e.type==="mousewheel"&&t%120===0}});
//rebuild by neat 