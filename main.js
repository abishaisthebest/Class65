var canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var roverWidth = 100;
var roverHeight = 90;

var backgroundImg = "mars.jpg";
var roverImg = "rover.png";

var roverX = 100;
var roverY = 100;

function add(){
    bgimg = new Image();
    bgimg.onload=uploadBg;
    bgimg.src = backgroundImg;
    

    rImg = new Image();
    rImg.onload=uploadRover;
    rImg.src = roverImg;
}

function uploadBg(){
    ctx.drawImage(bgimg,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rImg,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '38')
{
    up();
    console.log ("up")
}
if (keyPressed == '40')
{
    down();
    console.log ("down")
}
if (keyPressed == '37')
{
    left();
    console.log ("left")
}
if (keyPressed == '39')
{
    right();
    console.log ("right")
}
}

function up()
{
    if(roverY >=0)
    {
        roverY = roverY - 10;
        console.log("when up arrow is pressed, x = " + roverX + " | y = " + roverY);
        uploadBg();
        uploadRover();
    }
}

function down()
{
    if(roverY <=500)
    {
        roverY = roverY + 10;
        console.log("when down arrow is pressed, x = " + roverX + " | y = " + roverY);
        uploadBg();
        uploadRover();
    }
}

function left()
{
    if(roverX >=0)
    {
        roverX = roverX - 10;
        console.log("when left arrow is pressed, x = " + roverX + " | y = " + roverY);
        uploadBg();
        uploadRover();
    }
}

function right()
{
    if(roverX <=700)
    {
        roverX = roverX + 10;
        console.log("when right arrow is pressed, x = " + roverX + " | y = " + roverY);
        uploadBg();
        uploadRover();
    }
}