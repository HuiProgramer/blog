var timeout, rotate = 0;
var audio = document.getElementById('music1');
function startAnim() {
  timeout = setInterval(function () {
    var img = document.getElementById("img");
    var rotateStyle = "rotate(" + rotate + "deg)";
    img.style.transform = rotateStyle;
    img.style["-moz-transform"] = rotateStyle;
    img.style["-webkit-transform"] = rotateStyle;
    img.style["-o-transform"] = rotateStyle;
    img.style["-ms-transform"] = rotateStyle;

    rotate += 6;
    if (rotate > 360) {
      rotate = 0;
    }
  }, 30);
  audio.play();
}
function stopAnim() {
  clearInterval(timeout);
  timeout = null;
  audio.pause();
}
startAnim();
