// build time:Tue Oct 13 2020 21:42:45 GMT+0800 (GMT+08:00)
(function(){var t=function(t,e){var n=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var o=document.createElement("script");o.setAttribute("type","text/javascript");o.setAttribute("charset","UTF-8");o.setAttribute("src",t);if(typeof e==="function"){if(window.attachEvent){o.onreadystatechange=function(){var t=o.readyState;if(t==="loaded"||t==="complete"){o.onreadystatechange=null;e()}}}else{o.onload=e}}n.appendChild(o)};var e=function(){var t="v20170213840";if(t.indexOf("##CY")>=0){t="v3-debug-v3"}return t};var n=function(e){var n="changyan"+Math.floor(Math.random()*1e3*1e3*1e3);var o="https:"==window.document.location.protocol?"https://":"http://";var a=o+"changyan.sohu.com/debug/cookie?callback="+n;window[n]=function(t){var n=t&&t.cookie||"";n=n.split(";");var o,a;var c={};for(o=0;o<n.length;o++){a=n[o];a=a.split("=");a[0]=a[0]||"";a[1]=a[1]||"";a[0]=a[0].replace(/^\s/,"").replace(/\s$/,"");a[1]=a[1].replace(/^\s/,"").replace(/\s$/,"");if(a[0]!==""){c[a[0]]=a[1]}}if(typeof e==="function"){e(c)}};t(a,function(){try{delete window.cb}catch(t){window[n]=undefined}})};var o=function(){var o={};o.version=e();o.protocol="https:"==window.document.location.protocol?"https://":"http://";o.res=o.protocol+"changyan.itc.cn/v3/"+o.version+"/src/";o.base=o.protocol+"changyan.itc.cn/";o.api=o.protocol+"changyan.sohu.com/";if(o.protocol==="https://"){o.res=o.protocol+"changyan.itc.cn/v3/"+o.version+"/src/";o.base=o.protocol+"changyan.itc.cn/"}n(function(e){if(e.debug_v3==="true"){t(o.res+"lib/sea.v1.2.0.js",function(){seajs.use(o.res+"/adapter.js",function(t){t&&t(o,e)})})}else{t(o.res+"adapter.min.js",function(){var t=window.changyan.api.getAdapterModules("adapter.js");t(o,e)})}})};o()})();
//rebuild by neat 