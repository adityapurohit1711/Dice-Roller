var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width=300;
canvas.height=300;
var bg = new Image();
bg.src= "images/bg.png";
window.onload=function(){
  ctx.drawImage(bg,0,0,300,300);
  ctx.font = "20px Verdana";
  ctx.fillText("Welcome Person",70,100);
}
function play(){
  var ran =Math.floor((Math.random() * 6) + 1);
  var dice = new Image();
  dice.src="images/dice"+ran+".png";
  ctx.fillStyle="#FFFFFF";
  ctx.fillRect(0,0,300,300);
  ctx.drawImage(dice,0,0,300,300);
  ctx.fillStyle="#000000";
  ctx.fillText("You Got "+ran,10,285);
}
document.querySelector('.Broll').addEventListener("click",play);
