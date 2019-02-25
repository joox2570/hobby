var canvas = document.getElementById("painter");
var ctx = canvas.getContext("2d");

window.onload = function(){
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
}
window.addEventListener("mousedown", function(e){
    e.preventDefault();
});

function draw(){
    var newX = event.offsetX;
    var newY = event.offsetY;
    ctx.lineTo(newX, newY);
    ctx.stroke();
    ctx.moveTo(newX, newY);
}

function touchDraw(){
    event.preventDefault();
    var newX = event.touches[0].clientX - 8;
    var newY = event.touches[0].clientY - 79.88;
    ctx.lineTo(newX, newY);
    ctx.stroke();
    ctx.moveTo(newX, newY);
}

canvas.addEventListener("mousedown", function(){
    var initX = event.offsetX;
    var initY = event.offsetY;
    ctx.moveTo(initX, initY);
    canvas.addEventListener("mousemove", draw);
});

canvas.addEventListener("mouseup", function(){
    canvas.removeEventListener("mousemove", draw);
});


canvas.addEventListener("mouseleave", function(){
    canvas.removeEventListener("mousemove", draw);
    ctx.stroke();
})

canvas.addEventListener("touchstart", function(event){
    event.preventDefault();
    var initX = event.touches[0].clientX - 8;
    var initY = event.touches[0].clientY - 79.88;
    ctx.moveTo(initX, initY);
    canvas.addEventListener("touchmove", touchDraw);
});