snakeRoam = () => {
    switch (cube.frame) {
        case 0:
            if (snake.pos.X < -cube.size.X/2 - 1) {
                snake.speed.X = 0.0;snake.speed.Z = snake.Speed;
                cube.frame = 2; return;
            }
            if (snake.pos.X > cube.size.X/2 + 1) {
                snake.speed.X = 0.0;snake.speed.Z = snake.Speed;
                cube.frame = 3; return;
            }
            if (snake.pos.Y > cube.size.Y/2 + 1) {
                snake.speed.Y = 0.0;snake.speed.Z = snake.Speed;
                cube.frame = 4; return;
            }
            if (snake.pos.Y < -cube.size.Y/2 - 1) {
                snake.speed.Y = 0.0;snake.speed.Z = snake.Speed;
                cube.frame = 5; return;
            }
            break;
        case 1:
            if (snake.pos.X < -cube.size.X/2 - 1) {
                snake.speed.X = 0.0;snake.speed.Z = -snake.Speed;
                cube.frame = 2; return;
            }
            if (snake.pos.X > cube.size.X/2 + 1) {
                snake.speed.X = 0.0;snake.speed.Z = -snake.Speed;
                cube.frame = 3; return;
            }
            if (snake.pos.Y > cube.size.Y/2 + 1) {
                snake.speed.Y = 0.0;snake.speed.Z = -snake.Speed;
                cube.frame = 4; return;
            }
            if (snake.pos.Y < -cube.size.Y/2 - 1) {
                snake.speed.Y = 0.0;snake.speed.Z = -snake.Speed;
                cube.frame = 5; return;
            }
            break;
        case 2:
            if (snake.pos.Z < -cube.size.Z/2 - 1) {
                snake.speed.Z = 0.0;snake.speed.X = snake.Speed;
                cube.frame = 0; return;
            }
            if (snake.pos.Z > cube.size.Z/2 + 1) {
                snake.speed.Z = 0.0;snake.speed.X = snake.Speed;
                cube.frame = 1; return;
            }
            if (snake.pos.Y > cube.size.Y/2 + 1) {
                snake.speed.Y = 0.0;snake.speed.X = snake.Speed;
                cube.frame = 4; return;
            }
            if (snake.pos.Y < -cube.size.Y/2 - 1) {
                snake.speed.Y = 0.0;snake.speed.X = snake.Speed;
                cube.frame = 5; return;
            }
            break;
        case 3:
            if (snake.pos.Z < -cube.size.Z/2 - 1) {
                snake.speed.Z = 0.0;snake.speed.X = -snake.Speed;
                cube.frame = 0; return;
            }
            if (snake.pos.Z > cube.size.Z/2 + 1) {
                snake.speed.Z = 0.0;snake.speed.X = -snake.Speed;
                cube.frame = 1; return;
            }
            if (snake.pos.Y > cube.size.Y/2 + 1) {
                snake.speed.Y = 0.0;snake.speed.X = -snake.Speed;
                cube.frame = 4; return;
            }
            if (snake.pos.Y < -cube.size.Y/2 - 1) {
                snake.speed.Y = 0.0;snake.speed.X = -snake.Speed;
                cube.frame = 5; return;
            }
            break;
        case 4:
            if (snake.pos.Z < -cube.size.Z/2 - 1) {
                snake.speed.Z = 0.0;snake.speed.Y = -snake.Speed;
                cube.frame = 0; return;
            }
            if (snake.pos.Z > cube.size.Z/2 + 1) {
                snake.speed.Z = 0.0;snake.speed.Y = -snake.Speed;
                cube.frame = 1; return;
            }
            if (snake.pos.X < -cube.size.X/2 - 1) {
                snake.speed.X = 0.0;snake.speed.Y = -snake.Speed;
                cube.frame = 2; return;
            }
            if (snake.pos.X > cube.size.X/2 + 1) {
                snake.speed.X = 0.0;snake.speed.Y = -snake.Speed;
                cube.frame = 3; return;
            }
            break;
        case 5:
            if (snake.pos.Z < -cube.size.Z/2 - 1) {
                snake.speed.Z = 0.0;snake.speed.Y = snake.Speed;
                cube.frame = 0; return;
            }
            if (snake.pos.Z > cube.size.Z/2 + 1) {
                snake.speed.Z = 0.0;snake.speed.Y = snake.Speed;
                cube.frame = 1; return;
            }
            if (snake.pos.X < -cube.size.X/2 - 1) {
                snake.speed.X = 0.0;snake.speed.Y = snake.Speed;
                cube.frame = 2; return;
            }
            if (snake.pos.X > cube.size.X/2 + 1) {
                snake.speed.X = 0.0;snake.speed.Y = snake.Speed;
                cube.frame = 3; return;
            }
            break;
    }
}

class Snake {
    constructor() {
        this.reverse = false;
        this.paused = false;
        this.Speed = 0.3;
        this.pos = new Vector3(16, 16, -21);
        this.speed = new Vector3(-this.Speed, 0, 0);
        this.alive = true;
        this.history = [];
    }
    renderFace = () => {
        translate(-this.pos.X, -this.pos.Y, -this.pos.Z);
        fill(0, 0, 0);
        box(2.2);
        translate(this.pos.X, this.pos.Y,this.pos.Z);
    }
    changePos = () => {
        this.pos.X += this.speed.X;
        this.pos.Y += this.speed.Y;
        this.pos.Z += this.speed.Z;
        snakeRoam();
    }
    pause = () => {
        if (!this.alive)
        {
            return
        }
        this.paused ? this.paused = false : this.paused = true;
        if (this.paused)
        {
            document.getElementById("cube-snake").style.filter = "blur(10px)";
            document.getElementById("over-menu").style.display = "flex";
        }   
        else {
            document.getElementById("cube-snake").style.filter = "none";
            document.getElementById("over-menu").style.display = "none";
        }
    }
}

document.getElementById("snake-resume").addEventListener("click", () => 
{
    snake.pause();
})

document.getElementById("snake-escape").addEventListener("click", () => 
{
    if (!snake.paused)
        snake.pause();
})

restart = () => {
    snake = new Snake;
    tail = new Tail(50);
    food = new Food(40);
    obstacle = new Obstacle(20);
    cube = new Cube(40, 40, 40);
    document.getElementById("cube-snake").style.filter = "blur(0px)";
    document.getElementById("over-menu").style.display = "none";
    document.getElementById("hint").style.display = "none"
    document.getElementById("scorecount").innerHTML = 0;
    document.getElementById("snake-resume").removeAttribute("disabled");
}

document.getElementById("snake-reset").addEventListener("click", restart)
