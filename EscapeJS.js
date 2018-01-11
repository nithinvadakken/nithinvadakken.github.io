nametag = prompt("What is the name of your fellow explorer?", "Wonjun Lee");
if (nametag === null || nametag === "") {
    prompt("What is the name of your fellow explorer?", "Wonjun Lee");
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height/2;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// Checks if keys are pressed
function keyDownHandler(e) {
    if(e.keyCode === 39) {
        rightPressed = true;
    }
    else if(e.keyCode === 37) {
        leftPressed = true;
    }
    else if(e.keyCode === 38) {
        upPressed = true;
    }
    else if(e.keyCode === 40) {
        downPressed = true;
    }
}

// Checks if keys were released
function keyUpHandler(e) {
    if(e.keyCode === 39) {
        rightPressed = false;
    }
    else if(e.keyCode === 37) {
        leftPressed = false;
    }
    else if(e.keyCode === 38) {
        upPressed = false;
    }
    else if(e.keyCode === 40) {
        downPressed = false;
    }
}

// Draws character
function charDraw() {
    ctx.beginPath();
    ctx.rect(x, y, 20, 20);
    ctx.fillStyle = "#0095dd";
    ctx.fill();
    ctx.closePath();

}


// draws game
function draw(){
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.height);
    charDraw();


    // If left key pressed
    if(leftPressed) {
        if (x-3>0)
            x -= 3;
    }

    // If right key pressed
    if(rightPressed) {
        if(x+23<canvas.width)
            x += 3;
    }

    // If up key pressed
    if(upPressed) {
        if (y-3>0)
            y -= 3;
    }

    // If down key pressed
    if(downPressed) {
        if(y+23<canvas.height)
            y += 3;
    }
}


setInterval(draw, 10);