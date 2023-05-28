class Vector3 {
    constructor(X, Y, Z) {
        this.X = X;
        this.Y = Y;
        this.Z = Z;
    }
}

setup = () => {

    snake = new Snake;
    tail = new Tail(50);
    cube = new Cube(40, 40, 40);
    keyboard = new keyBoard;
    food = new Food(40);
    var running;
    createCanvas(500, 500, WEBGL);
    angleMode(DEGREES);
    perspective(20, width / height, 0.1, 500);
    frameRate(60);
    var canvas = document.getElementById("defaultCanvas0");
    canvas.onfocus = () => {
        console.log("now focus")
    }


    this.demo.appendChild(canvas);
    if (window.matchMedia("(max-width: 786px)").matches) {
        document.getElementById("info").style = "display:none";
        document.getElementById("buttons").style = "display:block";
    }
    snake.pause()
}

draw = () => {
    clear();
    translate(0, 0, 200);
    rotateX(-cube.angle.Y);
    rotateY(-cube.angle.X);
    rotateZ(cube.angle.Z);

    noStroke();

    if (!snake.paused) {
        snake.changePos();
        cube.rotateCube();
        tail.update();
        tail.check();
        food.check();
    } else {
        cube.angle.X++;
        cube.angle.Y++;
        cube.angle.Z++;
    }

    snake.renderFace();
    cube.renderCube();
    tail.renderTail();
    food.renderFood();
}

keyPressed = () => {
    switch (keyCode) {
        case 87:
            keyboard.UPKey();
            break;
        case 83:
            keyboard.DOWNKey();
            break;
        case 65:
            keyboard.LEFTKey();
            break;
        case 68:
            keyboard.RIGHTKey();
            break;
        case 27:
            snake.pause();
    }
}