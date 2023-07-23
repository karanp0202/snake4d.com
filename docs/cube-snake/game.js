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
        cube.rotateCube();
        document.getElementById("scorecount").innerHTML = food.foodvec.length.toString();
        if (!snake.reverse){
            snake.changePos();
            tail.update();

            tail.check();
            food.check();
            obstacle.check();
            food.history.push(food.foodvec.slice())
            tail.history.push([tail.tailX.slice(), tail.tailY.slice(), tail.tailZ.slice()])
            snake.history.push([snake.pos.X, snake.pos.Y, snake.pos.Z, snake.speed.X, snake.speed.Y, snake.speed.Z, cube.frame])
        }
        else
        {
            if (food.history.length)
            {
                food.foodvec = food.history.pop();
            }
            if (tail.history.length)
            {
                let unpacked = tail.history.pop()
                tail.tailX = unpacked[0]
                tail.tailY = unpacked[1]
                tail.tailZ = unpacked[2]
            }
            if (snake.history.length)
            {
                let unpacked = snake.history.pop()
                snake.pos.X = unpacked[0];
                snake.pos.Y = unpacked[1];
                snake.pos.Z = unpacked[2];
                snake.speed.X = unpacked[3];
                snake.speed.Y = unpacked[4];
                snake.speed.Z = unpacked[5];
                cube.frame = unpacked[6];
            }
        }
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
            if (!snake.alive)
            {
                snake.alive = true;
                snake.pause();
            }
            document.getElementById("cube-snake").style.filter = "saturate(30%)";
            document.getElementById("over-menu").style.display = "flex";
            // frameRate(30);
            snake.reverse = true;
            break;

    }
}

keyReleased = () => {
    switch (keyCode) {
        case 82:
            document.getElementById("cube-snake").style.filter = "none";
            document.getElementById("over-menu").style.display = "none";
            frameRate(60);
            snake.reverse = false;
            break;

    }
}