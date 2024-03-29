class Tail {
    constructor(count) {
        this.tailX = [];
        this.tailY = [];
        this.tailZ = [];
        for (let i = 0; i < count; i++){
            this.tailX.push(0);
            this.tailY.push(0);
            this.tailZ.push(0);
        }
        this.history = [];
    }

    add = (count) => {
        for (let i = 0; i < count; i++){
            this.tailX.splice(20, 0, this.tailX[20]);
            this.tailY.splice(20, 0, this.tailY[20]);
            this.tailZ.splice(20, 0, this.tailZ[20]);
        }
    }

    update = () => {
        for (var i = this.tailX.length-1; i > 0; i--){
            this.tailX[i] = this.tailX[i - 1];
            this.tailY[i] = this.tailY[i - 1];
            this.tailZ[i] = this.tailZ[i - 1];
        }
        this.tailX[0] = snake.pos.X;
        this.tailY[0] = snake.pos.Y;
        this.tailZ[0] = snake.pos.Z;
    }

    check = () => {
        for (let i = 20; i < this.tailX.length; i+= 10) {
            if (snake.pos.X > this.tailX[i] - 2.0 && snake.pos.X < this.tailX[i] + 2.0
                && snake.pos.Y > this.tailY[i] - 2.0 && snake.pos.Y < this.tailY[i] + 2.0
                && snake.pos.Z > this.tailZ[i] - 2.0 && snake.pos.Z < this.tailZ[i] + 2.0) {
                snake.pause();
                snake.alive = false;
                document.getElementById("snake-resume").setAttribute("disabled", "disabled");
                document.getElementById("hint").style.display = "block";
            }
        }
    }

    render = (n) => {
        translate(-this.tailX[n], -this.tailY[n], -this.tailZ[n]);
        fill(255, 255, 255);
        box(2.1);
        translate(this.tailX[n], this.tailY[n], this.tailZ[n]);
    }

    renderTail = () => {
        for (let i = 10; i < this.tailX.length; i+=10) {
            this.render(i);
        }
    }

}