// build time:Mon Feb 25 2019 16:18:23 GMT+0800 (GMT+08:00)
var timeout,rotate=0;var audio=document.getElementById("music1");function startAnim(){timeout=setInterval(function(){var t=document.getElementById("img");var e="rotate("+rotate+"deg)";t.style.transform=e;t.style["-moz-transform"]=e;t.style["-webkit-transform"]=e;t.style["-o-transform"]=e;t.style["-ms-transform"]=e;rotate+=6;if(rotate>360){rotate=0}},30);audio.play()}function stopAnim(){clearInterval(timeout);timeout=null;audio.pause()}startAnim();
//rebuild by neat 