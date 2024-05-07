// document.getElementsById("button1")
let vid = document.getElementById("myVideo")
function playVid(){
    vid.play()
}
function pauseVid(){
    vid.pause()
}
function loadVid(){
    vid.load()
}


var c = document.getElementById("myCanvas")
var ctx = c.getContext("2d");
ctx.fillStyle = "#005eb8";
ctx.fillRect(0,0, c.width,c.height );

ctx.strokeStyle= "white"
ctx.lineWidth = 20
ctx.moveTo(0,0)
ctx.lineTo(400,260)
ctx.stroke()
ctx.moveTo(0,260)
ctx.lineTo(400,0)
ctx.stroke();
ctx.font = "italic bold 40px Calibri"
ctx.fillStyle = "#00284d"
ctx.fillText("Scoland!", 120, 230)

function attachBow(){
    document.querySelector("#bow").style.animationPlayState = "running";
}

var c2 = document.querySelector("#myCanvas2")

