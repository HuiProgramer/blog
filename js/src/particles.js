// build time:Fri May 03 2019 20:58:45 GMT+0800 (GMT+08:00)
var pJS=function(e,i){var a=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:a,w:a.offsetWidth,h:a.offsetHeight},particles:{number:{value:400,density:{enable:true,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:false,anim:{enable:false,speed:2,opacity_min:0,sync:false}},size:{value:20,random:false,anim:{enable:false,speed:20,size_min:0,sync:false}},line_linked:{enable:true,distance:100,color:"#fff",opacity:1,width:1},move:{enable:true,speed:2,direction:"none",random:false,straight:false,out_mode:"out",bounce:false,attract:{enable:false,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:true,mode:"grab"},onclick:{enable:true,mode:"push"},resize:true},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:false,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var t=this.pJS;if(i){Object.deepExtend(t,i)}t.tmp.obj={size_value:t.particles.size.value,size_anim_speed:t.particles.size.anim.speed,move_speed:t.particles.move.speed,line_linked_distance:t.particles.line_linked.distance,line_linked_width:t.particles.line_linked.width,mode_grab_distance:t.interactivity.modes.grab.distance,mode_bubble_distance:t.interactivity.modes.bubble.distance,mode_bubble_size:t.interactivity.modes.bubble.size,mode_repulse_distance:t.interactivity.modes.repulse.distance};t.fn.retinaInit=function(){if(t.retina_detect&&window.devicePixelRatio>1){t.canvas.pxratio=window.devicePixelRatio;t.tmp.retina=true}else{t.canvas.pxratio=1;t.tmp.retina=false}t.canvas.w=t.canvas.el.offsetWidth*t.canvas.pxratio;t.canvas.h=t.canvas.el.offsetHeight*t.canvas.pxratio;t.particles.size.value=t.tmp.obj.size_value*t.canvas.pxratio;t.particles.size.anim.speed=t.tmp.obj.size_anim_speed*t.canvas.pxratio;t.particles.move.speed=t.tmp.obj.move_speed*t.canvas.pxratio;t.particles.line_linked.distance=t.tmp.obj.line_linked_distance*t.canvas.pxratio;t.interactivity.modes.grab.distance=t.tmp.obj.mode_grab_distance*t.canvas.pxratio;t.interactivity.modes.bubble.distance=t.tmp.obj.mode_bubble_distance*t.canvas.pxratio;t.particles.line_linked.width=t.tmp.obj.line_linked_width*t.canvas.pxratio;t.interactivity.modes.bubble.size=t.tmp.obj.mode_bubble_size*t.canvas.pxratio;t.interactivity.modes.repulse.distance=t.tmp.obj.mode_repulse_distance*t.canvas.pxratio};t.fn.canvasInit=function(){t.canvas.ctx=t.canvas.el.getContext("2d")};t.fn.canvasSize=function(){t.canvas.el.width=t.canvas.w;t.canvas.el.height=t.canvas.h;if(t&&t.interactivity.events.resize){window.addEventListener("resize",function(){t.canvas.w=t.canvas.el.offsetWidth;t.canvas.h=t.canvas.el.offsetHeight;if(t.tmp.retina){t.canvas.w*=t.canvas.pxratio;t.canvas.h*=t.canvas.pxratio}t.canvas.el.width=t.canvas.w;t.canvas.el.height=t.canvas.h;if(!t.particles.move.enable){t.fn.particlesEmpty();t.fn.particlesCreate();t.fn.particlesDraw();t.fn.vendors.densityAutoParticles()}t.fn.vendors.densityAutoParticles()})}};t.fn.canvasPaint=function(){t.canvas.ctx.fillRect(0,0,t.canvas.w,t.canvas.h)};t.fn.canvasClear=function(){t.canvas.ctx.clearRect(0,0,t.canvas.w,t.canvas.h)};t.fn.particle=function(e,i,a){this.radius=(t.particles.size.random?Math.random():1)*t.particles.size.value;if(t.particles.size.anim.enable){this.size_status=false;this.vs=t.particles.size.anim.speed/100;if(!t.particles.size.anim.sync){this.vs=this.vs*Math.random()}}this.x=a?a.x:Math.random()*t.canvas.w;this.y=a?a.y:Math.random()*t.canvas.h;if(this.x>t.canvas.w-this.radius*2)this.x=this.x-this.radius;else if(this.x<this.radius*2)this.x=this.x+this.radius;if(this.y>t.canvas.h-this.radius*2)this.y=this.y-this.radius;else if(this.y<this.radius*2)this.y=this.y+this.radius;if(t.particles.move.bounce){t.fn.vendors.checkOverlap(this,a)}this.color={};if(typeof e.value=="object"){if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*t.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else{if(e.value.r!=undefined&&e.value.g!=undefined&&e.value.b!=undefined){this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}}if(e.value.h!=undefined&&e.value.s!=undefined&&e.value.l!=undefined){this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l}}}}else if(e.value=="random"){this.color.rgb={r:Math.floor(Math.random()*(255-0+1))+0,g:Math.floor(Math.random()*(255-0+1))+0,b:Math.floor(Math.random()*(255-0+1))+0}}else if(typeof e.value=="string"){this.color=e;this.color.rgb=hexToRgb(this.color.value)}this.opacity=(t.particles.opacity.random?Math.random():1)*t.particles.opacity.value;if(t.particles.opacity.anim.enable){this.opacity_status=false;this.vo=t.particles.opacity.anim.speed/100;if(!t.particles.opacity.anim.sync){this.vo=this.vo*Math.random()}}var n={};switch(t.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0};break}if(t.particles.move.straight){this.vx=n.x;this.vy=n.y;if(t.particles.move.random){this.vx=this.vx*Math.random();this.vy=this.vy*Math.random()}}else{this.vx=n.x+Math.random()-.5;this.vy=n.y+Math.random()-.5}this.vx_i=this.vx;this.vy_i=this.vy;var r=t.particles.shape.type;if(typeof r=="object"){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else{this.shape=r}if(this.shape=="image"){var o=t.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height};if(!this.img.ratio)this.img.ratio=1;if(t.tmp.img_type=="svg"&&t.tmp.source_svg!=undefined){t.fn.vendors.createSvgImg(this);if(t.tmp.pushing){this.img.loaded=false}}}};t.fn.particle.prototype.draw=function(){var e=this;if(e.radius_bubble!=undefined){var i=e.radius_bubble}else{var i=e.radius}if(e.opacity_bubble!=undefined){var a=e.opacity_bubble}else{var a=e.opacity}if(e.color.rgb){var s="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+a+")"}else{var s="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+a+")"}t.canvas.ctx.fillStyle=s;t.canvas.ctx.beginPath();switch(e.shape){case"circle":t.canvas.ctx.arc(e.x,e.y,i,0,Math.PI*2,false);break;case"edge":t.canvas.ctx.rect(e.x-i,e.y-i,i*2,i*2);break;case"triangle":t.fn.vendors.drawShape(t.canvas.ctx,e.x-i,e.y+i/1.66,i*2,3,2);break;case"polygon":t.fn.vendors.drawShape(t.canvas.ctx,e.x-i/(t.particles.shape.polygon.nb_sides/3.5),e.y-i/(2.66/3.5),i*2.66/(t.particles.shape.polygon.nb_sides/3),t.particles.shape.polygon.nb_sides,1);break;case"star":t.fn.vendors.drawShape(t.canvas.ctx,e.x-i*2/(t.particles.shape.polygon.nb_sides/4),e.y-i/(2*2.66/3.5),i*2*2.66/(t.particles.shape.polygon.nb_sides/3),t.particles.shape.polygon.nb_sides,2);break;case"image":function n(){t.canvas.ctx.drawImage(r,e.x-i,e.y-i,i*2,i*2/e.img.ratio)}if(t.tmp.img_type=="svg"){var r=e.img.obj}else{var r=t.tmp.img_obj}if(r){n()}break}t.canvas.ctx.closePath();if(t.particles.shape.stroke.width>0){t.canvas.ctx.strokeStyle=t.particles.shape.stroke.color;t.canvas.ctx.lineWidth=t.particles.shape.stroke.width;t.canvas.ctx.stroke()}t.canvas.ctx.fill()};t.fn.particlesCreate=function(){for(var e=0;e<t.particles.number.value;e++){t.particles.array.push(new t.fn.particle(t.particles.color,t.particles.opacity.value))}};t.fn.particlesUpdate=function(){for(var e=0;e<t.particles.array.length;e++){var i=t.particles.array[e];if(t.particles.move.enable){var a=t.particles.move.speed/2;i.x+=i.vx*a;i.y+=i.vy*a}if(t.particles.opacity.anim.enable){if(i.opacity_status==true){if(i.opacity>=t.particles.opacity.value)i.opacity_status=false;i.opacity+=i.vo}else{if(i.opacity<=t.particles.opacity.anim.opacity_min)i.opacity_status=true;i.opacity-=i.vo}if(i.opacity<0)i.opacity=0}if(t.particles.size.anim.enable){if(i.size_status==true){if(i.radius>=t.particles.size.value)i.size_status=false;i.radius+=i.vs}else{if(i.radius<=t.particles.size.anim.size_min)i.size_status=true;i.radius-=i.vs}if(i.radius<0)i.radius=0}if(t.particles.move.out_mode=="bounce"){var s={x_left:i.radius,x_right:t.canvas.w,y_top:i.radius,y_bottom:t.canvas.h}}else{var s={x_left:-i.radius,x_right:t.canvas.w+i.radius,y_top:-i.radius,y_bottom:t.canvas.h+i.radius}}if(i.x-i.radius>t.canvas.w){i.x=s.x_left;i.y=Math.random()*t.canvas.h}else if(i.x+i.radius<0){i.x=s.x_right;i.y=Math.random()*t.canvas.h}if(i.y-i.radius>t.canvas.h){i.y=s.y_top;i.x=Math.random()*t.canvas.w}else if(i.y+i.radius<0){i.y=s.y_bottom;i.x=Math.random()*t.canvas.w}switch(t.particles.move.out_mode){case"bounce":if(i.x+i.radius>t.canvas.w)i.vx=-i.vx;else if(i.x-i.radius<0)i.vx=-i.vx;if(i.y+i.radius>t.canvas.h)i.vy=-i.vy;else if(i.y-i.radius<0)i.vy=-i.vy;break}if(isInArray("grab",t.interactivity.events.onhover.mode)){t.fn.modes.grabParticle(i)}if(isInArray("bubble",t.interactivity.events.onhover.mode)||isInArray("bubble",t.interactivity.events.onclick.mode)){t.fn.modes.bubbleParticle(i)}if(isInArray("repulse",t.interactivity.events.onhover.mode)||isInArray("repulse",t.interactivity.events.onclick.mode)){t.fn.modes.repulseParticle(i)}if(t.particles.line_linked.enable||t.particles.move.attract.enable){for(var n=e+1;n<t.particles.array.length;n++){var r=t.particles.array[n];if(t.particles.line_linked.enable){t.fn.interact.linkParticles(i,r)}if(t.particles.move.attract.enable){t.fn.interact.attractParticles(i,r)}if(t.particles.move.bounce){t.fn.interact.bounceParticles(i,r)}}}}};t.fn.particlesDraw=function(){t.canvas.ctx.clearRect(0,0,t.canvas.w,t.canvas.h);t.fn.particlesUpdate();for(var e=0;e<t.particles.array.length;e++){var i=t.particles.array[e];i.draw()}};t.fn.particlesEmpty=function(){t.particles.array=[]};t.fn.particlesRefresh=function(){cancelRequestAnimFrame(t.fn.checkAnimFrame);cancelRequestAnimFrame(t.fn.drawAnimFrame);t.tmp.source_svg=undefined;t.tmp.img_obj=undefined;t.tmp.count_svg=0;t.fn.particlesEmpty();t.fn.canvasClear();t.fn.vendors.start()};t.fn.interact.linkParticles=function(e,i){var a=e.x-i.x,s=e.y-i.y,n=Math.sqrt(a*a+s*s);if(n<=t.particles.line_linked.distance){var r=t.particles.line_linked.opacity-n/(1/t.particles.line_linked.opacity)/t.particles.line_linked.distance;if(r>0){var c=t.particles.line_linked.color_rgb_line;t.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")";t.canvas.ctx.lineWidth=t.particles.line_linked.width;t.canvas.ctx.beginPath();t.canvas.ctx.moveTo(e.x,e.y);t.canvas.ctx.lineTo(i.x,i.y);t.canvas.ctx.stroke();t.canvas.ctx.closePath()}}};t.fn.interact.attractParticles=function(e,i){var a=e.x-i.x,s=e.y-i.y,n=Math.sqrt(a*a+s*s);if(n<=t.particles.line_linked.distance){var r=a/(t.particles.move.attract.rotateX*1e3),c=s/(t.particles.move.attract.rotateY*1e3);e.vx-=r;e.vy-=c;i.vx+=r;i.vy+=c}};t.fn.interact.bounceParticles=function(e,i){var a=e.x-i.x,t=e.y-i.y,s=Math.sqrt(a*a+t*t),n=e.radius+i.radius;if(s<=n){e.vx=-e.vx;e.vy=-e.vy;i.vx=-i.vx;i.vy=-i.vy}};t.fn.modes.pushParticles=function(e,i){t.tmp.pushing=true;for(var a=0;a<e;a++){t.particles.array.push(new t.fn.particle(t.particles.color,t.particles.opacity.value,{x:i?i.pos_x:Math.random()*t.canvas.w,y:i?i.pos_y:Math.random()*t.canvas.h}));if(a==e-1){if(!t.particles.move.enable){t.fn.particlesDraw()}t.tmp.pushing=false}}};t.fn.modes.removeParticles=function(e){t.particles.array.splice(0,e);if(!t.particles.move.enable){t.fn.particlesDraw()}};t.fn.modes.bubbleParticle=function(e){if(t.interactivity.events.onhover.enable&&isInArray("bubble",t.interactivity.events.onhover.mode)){var i=e.x-t.interactivity.mouse.pos_x,a=e.y-t.interactivity.mouse.pos_y,s=Math.sqrt(i*i+a*a),n=1-s/t.interactivity.modes.bubble.distance;function r(){e.opacity_bubble=e.opacity;e.radius_bubble=e.radius}if(s<=t.interactivity.modes.bubble.distance){if(n>=0&&t.interactivity.status=="mousemove"){if(t.interactivity.modes.bubble.size!=t.particles.size.value){if(t.interactivity.modes.bubble.size>t.particles.size.value){var c=e.radius+t.interactivity.modes.bubble.size*n;if(c>=0){e.radius_bubble=c}}else{var o=e.radius-t.interactivity.modes.bubble.size,c=e.radius-o*n;if(c>0){e.radius_bubble=c}else{e.radius_bubble=0}}}if(t.interactivity.modes.bubble.opacity!=t.particles.opacity.value){if(t.interactivity.modes.bubble.opacity>t.particles.opacity.value){var l=t.interactivity.modes.bubble.opacity*n;if(l>e.opacity&&l<=t.interactivity.modes.bubble.opacity){e.opacity_bubble=l}}else{var l=e.opacity-(t.particles.opacity.value-t.interactivity.modes.bubble.opacity)*n;if(l<e.opacity&&l>=t.interactivity.modes.bubble.opacity){e.opacity_bubble=l}}}}}else{r()}if(t.interactivity.status=="mouseleave"){r()}}else if(t.interactivity.events.onclick.enable&&isInArray("bubble",t.interactivity.events.onclick.mode)){if(t.tmp.bubble_clicking){var i=e.x-t.interactivity.mouse.click_pos_x,a=e.y-t.interactivity.mouse.click_pos_y,s=Math.sqrt(i*i+a*a),v=((new Date).getTime()-t.interactivity.mouse.click_time)/1e3;if(v>t.interactivity.modes.bubble.duration){t.tmp.bubble_duration_end=true}if(v>t.interactivity.modes.bubble.duration*2){t.tmp.bubble_clicking=false;t.tmp.bubble_duration_end=false}}function p(i,a,n,r,c){if(i!=a){if(!t.tmp.bubble_duration_end){if(s<=t.interactivity.modes.bubble.distance){if(n!=undefined)var o=n;else var o=r;if(o!=i){var l=r-v*(r-i)/t.interactivity.modes.bubble.duration;if(c=="size")e.radius_bubble=l;if(c=="opacity")e.opacity_bubble=l}}else{if(c=="size")e.radius_bubble=undefined;if(c=="opacity")e.opacity_bubble=undefined}}else{if(n!=undefined){var p=r-v*(r-i)/t.interactivity.modes.bubble.duration,d=i-p;l=i+d;if(c=="size")e.radius_bubble=l;if(c=="opacity")e.opacity_bubble=l}}}}if(t.tmp.bubble_clicking){p(t.interactivity.modes.bubble.size,t.particles.size.value,e.radius_bubble,e.radius,"size");p(t.interactivity.modes.bubble.opacity,t.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity")}}};t.fn.modes.repulseParticle=function(e){if(t.interactivity.events.onhover.enable&&isInArray("repulse",t.interactivity.events.onhover.mode)&&t.interactivity.status=="mousemove"){var i=e.x-t.interactivity.mouse.pos_x,a=e.y-t.interactivity.mouse.pos_y,s=Math.sqrt(i*i+a*a);var n={x:i/s,y:a/s},r=t.interactivity.modes.repulse.distance,c=100,o=clamp(1/r*(-1*Math.pow(s/r,2)+1)*r*c,0,50);var l={x:e.x+n.x*o,y:e.y+n.y*o};if(t.particles.move.out_mode=="bounce"){if(l.x-e.radius>0&&l.x+e.radius<t.canvas.w)e.x=l.x;if(l.y-e.radius>0&&l.y+e.radius<t.canvas.h)e.y=l.y}else{e.x=l.x;e.y=l.y}}else if(t.interactivity.events.onclick.enable&&isInArray("repulse",t.interactivity.events.onclick.mode)){if(!t.tmp.repulse_finish){t.tmp.repulse_count++;if(t.tmp.repulse_count==t.particles.array.length){t.tmp.repulse_finish=true}}if(t.tmp.repulse_clicking){var r=Math.pow(t.interactivity.modes.repulse.distance/6,3);var v=t.interactivity.mouse.click_pos_x-e.x,p=t.interactivity.mouse.click_pos_y-e.y,d=v*v+p*p;var u=-r/d*1;function m(){var i=Math.atan2(p,v);e.vx=u*Math.cos(i);e.vy=u*Math.sin(i);if(t.particles.move.out_mode=="bounce"){var a={x:e.x+e.vx,y:e.y+e.vy};if(a.x+e.radius>t.canvas.w)e.vx=-e.vx;else if(a.x-e.radius<0)e.vx=-e.vx;if(a.y+e.radius>t.canvas.h)e.vy=-e.vy;else if(a.y-e.radius<0)e.vy=-e.vy}}if(d<=r){m()}}else{if(t.tmp.repulse_clicking==false){e.vx=e.vx_i;e.vy=e.vy_i}}}};t.fn.modes.grabParticle=function(e){if(t.interactivity.events.onhover.enable&&t.interactivity.status=="mousemove"){var i=e.x-t.interactivity.mouse.pos_x,a=e.y-t.interactivity.mouse.pos_y,s=Math.sqrt(i*i+a*a);if(s<=t.interactivity.modes.grab.distance){var n=t.interactivity.modes.grab.line_linked.opacity-s/(1/t.interactivity.modes.grab.line_linked.opacity)/t.interactivity.modes.grab.distance;if(n>0){var r=t.particles.line_linked.color_rgb_line;t.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")";t.canvas.ctx.lineWidth=t.particles.line_linked.width;t.canvas.ctx.beginPath();t.canvas.ctx.moveTo(e.x,e.y);t.canvas.ctx.lineTo(t.interactivity.mouse.pos_x,t.interactivity.mouse.pos_y);t.canvas.ctx.stroke();t.canvas.ctx.closePath()}}}};t.fn.vendors.eventsListeners=function(){if(t.interactivity.detect_on=="window"){t.interactivity.el=window}else{t.interactivity.el=t.canvas.el}if(t.interactivity.events.onhover.enable||t.interactivity.events.onclick.enable){t.interactivity.el.addEventListener("mousemove",function(e){if(t.interactivity.el==window){var i=e.clientX,a=e.clientY}else{var i=e.offsetX||e.clientX,a=e.offsetY||e.clientY}t.interactivity.mouse.pos_x=i;t.interactivity.mouse.pos_y=a;if(t.tmp.retina){t.interactivity.mouse.pos_x*=t.canvas.pxratio;t.interactivity.mouse.pos_y*=t.canvas.pxratio}t.interactivity.status="mousemove"});t.interactivity.el.addEventListener("mouseleave",function(e){t.interactivity.mouse.pos_x=null;t.interactivity.mouse.pos_y=null;t.interactivity.status="mouseleave"})}if(t.interactivity.events.onclick.enable){t.interactivity.el.addEventListener("click",function(){t.interactivity.mouse.click_pos_x=t.interactivity.mouse.pos_x;t.interactivity.mouse.click_pos_y=t.interactivity.mouse.pos_y;t.interactivity.mouse.click_time=(new Date).getTime();if(t.interactivity.events.onclick.enable){switch(t.interactivity.events.onclick.mode){case"push":if(t.particles.move.enable){t.fn.modes.pushParticles(t.interactivity.modes.push.particles_nb,t.interactivity.mouse)}else{if(t.interactivity.modes.push.particles_nb==1){t.fn.modes.pushParticles(t.interactivity.modes.push.particles_nb,t.interactivity.mouse)}else if(t.interactivity.modes.push.particles_nb>1){t.fn.modes.pushParticles(t.interactivity.modes.push.particles_nb)}}break;case"remove":t.fn.modes.removeParticles(t.interactivity.modes.remove.particles_nb);break;case"bubble":t.tmp.bubble_clicking=true;break;case"repulse":t.tmp.repulse_clicking=true;t.tmp.repulse_count=0;t.tmp.repulse_finish=false;setTimeout(function(){t.tmp.repulse_clicking=false},t.interactivity.modes.repulse.duration*1e3);break}}})}};t.fn.vendors.densityAutoParticles=function(){if(t.particles.number.density.enable){var e=t.canvas.el.width*t.canvas.el.height/1e3;if(t.tmp.retina){e=e/(t.canvas.pxratio*2)}var i=e*t.particles.number.value/t.particles.number.density.value_area;var a=t.particles.array.length-i;if(a<0)t.fn.modes.pushParticles(Math.abs(a));else t.fn.modes.removeParticles(a)}};t.fn.vendors.checkOverlap=function(e,i){for(var a=0;a<t.particles.array.length;a++){var s=t.particles.array[a];var n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);if(c<=e.radius+s.radius){e.x=i?i.x:Math.random()*t.canvas.w;e.y=i?i.y:Math.random()*t.canvas.h;t.fn.vendors.checkOverlap(e)}}};t.fn.vendors.createSvgImg=function(e){var i=t.tmp.source_svg,a=/#([0-9A-F]{3,6})/gi,s=i.replace(a,function(i,a,t,s){if(e.color.rgb){var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")"}else{var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")"}return n});var n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n);var o=new Image;o.addEventListener("load",function(){e.img.obj=o;e.img.loaded=true;r.revokeObjectURL(c);t.tmp.count_svg++});o.src=c};t.fn.vendors.destroypJS=function(){cancelAnimationFrame(t.fn.drawAnimFrame);a.remove();pJSDom=null};t.fn.vendors.drawShape=function(e,i,a,t,s,n){var r=s*n;var c=s/n;var o=180*(c-2)/c;var l=Math.PI-Math.PI*o/180;e.save();e.beginPath();e.translate(i,a);e.moveTo(0,0);for(var v=0;v<r;v++){e.lineTo(t,0);e.translate(t,0);e.rotate(l)}e.fill();e.restore()};t.fn.vendors.exportImg=function(){window.open(t.canvas.el.toDataURL("image/png"),"_blank")};t.fn.vendors.loadImg=function(e){t.tmp.img_error=undefined;if(t.particles.shape.image.src!=""){if(e=="svg"){var i=new XMLHttpRequest;i.open("GET",t.particles.shape.image.src);i.onreadystatechange=function(e){if(i.readyState==4){if(i.status==200){t.tmp.source_svg=e.currentTarget.response;t.fn.vendors.checkBeforeDraw()}else{console.log("Error pJS - Image not found");t.tmp.img_error=true}}};i.send()}else{var a=new Image;a.addEventListener("load",function(){t.tmp.img_obj=a;t.fn.vendors.checkBeforeDraw()});a.src=t.particles.shape.image.src}}else{console.log("Error pJS - No image.src");t.tmp.img_error=true}};t.fn.vendors.draw=function(){if(t.particles.shape.type=="image"){if(t.tmp.img_type=="svg"){if(t.tmp.count_svg>=t.particles.number.value){t.fn.particlesDraw();if(!t.particles.move.enable)cancelRequestAnimFrame(t.fn.drawAnimFrame);else t.fn.drawAnimFrame=requestAnimFrame(t.fn.vendors.draw)}else{if(!t.tmp.img_error)t.fn.drawAnimFrame=requestAnimFrame(t.fn.vendors.draw)}}else{if(t.tmp.img_obj!=undefined){t.fn.particlesDraw();if(!t.particles.move.enable)cancelRequestAnimFrame(t.fn.drawAnimFrame);else t.fn.drawAnimFrame=requestAnimFrame(t.fn.vendors.draw)}else{if(!t.tmp.img_error)t.fn.drawAnimFrame=requestAnimFrame(t.fn.vendors.draw)}}}else{t.fn.particlesDraw();if(!t.particles.move.enable)cancelRequestAnimFrame(t.fn.drawAnimFrame);else t.fn.drawAnimFrame=requestAnimFrame(t.fn.vendors.draw)}};t.fn.vendors.checkBeforeDraw=function(){if(t.particles.shape.type=="image"){if(t.tmp.img_type=="svg"&&t.tmp.source_svg==undefined){t.tmp.checkAnimFrame=requestAnimFrame(check)}else{cancelRequestAnimFrame(t.tmp.checkAnimFrame);if(!t.tmp.img_error){t.fn.vendors.init();t.fn.vendors.draw()}}}else{t.fn.vendors.init();t.fn.vendors.draw()}};t.fn.vendors.init=function(){t.fn.retinaInit();t.fn.canvasInit();t.fn.canvasSize();t.fn.canvasPaint();t.fn.particlesCreate();t.fn.vendors.densityAutoParticles();t.particles.line_linked.color_rgb_line=hexToRgb(t.particles.line_linked.color)};t.fn.vendors.start=function(){if(isInArray("image",t.particles.shape.type)){t.tmp.img_type=t.particles.shape.image.src.substr(t.particles.shape.image.src.length-3);t.fn.vendors.loadImg(t.tmp.img_type)}else{t.fn.vendors.checkBeforeDraw()}};t.fn.vendors.eventsListeners();t.fn.vendors.start()};Object.deepExtend=function(e,i){for(var a in i){if(i[a]&&i[a].constructor&&i[a].constructor===Object){e[a]=e[a]||{};arguments.callee(e[a],i[a])}else{e[a]=i[a]}}return e};window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}();function hexToRgb(e){var i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(i,function(e,i,a,t){return i+i+a+a+t+t});var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function clamp(e,i,a){return Math.min(Math.max(e,i),a)}function isInArray(e,i){return i.indexOf(e)>-1}window.pJSDom=[];window.particlesJS=function(e,i){if(typeof e!="string"){i=e;e="particles-js"}if(!e){e="particles-js"}var a=document.getElementById(e),t="particles-js-canvas-el",s=a.getElementsByClassName(t);if(s.length){while(s.length>0){a.removeChild(s[0])}}var n=document.createElement("canvas");n.className=t;n.style.width="100%";n.style.height="100%";var r=document.getElementById(e).appendChild(n);if(r!=null){pJSDom.push(new pJS(e,i))}};window.particlesJS.load=function(e,i,a){var t=new XMLHttpRequest;t.open("GET",i);t.onreadystatechange=function(i){if(t.readyState==4){if(t.status==200){var s=JSON.parse(i.currentTarget.response);window.particlesJS(e,s);if(a)a()}else{console.log("Error pJS - XMLHttpRequest status: "+t.status);console.log("Error pJS - File config not found")}}};t.send()};
//rebuild by neat 