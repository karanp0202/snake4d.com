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
    food = new Food(40);
    obstacle = new Obstacle(20);
    cube = new Cube(40, 40, 40);
    keyboard = new keyBoard;
    var running;
    createCanvas(600, 600, WEBGL);
    angleMode(DEGREES);
    perspective(13, width / height, 0.1, 500);
    frameRate(60);
    var canvas = document.getElementById("defaultCanvas0");
    document.getElementById("cube-snake").appendChild(canvas);
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
        obstacle.check();
    } else {
        cube.angle.X++;
        cube.angle.Y++;
        cube.angle.Z++;
    }

    snake.renderFace();
    cube.renderCube();
    tail.renderTail();
    food.renderFood();
    obstacle.renderObstacle();
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
            if (!snake.paused){
                document.getElementById("snake-resume").innerHTML = "Resume";
                snake.pause();
            }
            break;
        case 32:
            if (snake.paused)
                snake.pause();
            break;
        case 82:
            if (snake.paused)
                restart();
            break;

    }
}

keyReleased = () => {
    console.log(keyCode)
}