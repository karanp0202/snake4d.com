class Obstacle {
    constructor(count) {
        this.Obstaclevec = [];
        for (let i = 0; i < count; i++){
            this.Obstaclevec[i] = this.randomise();
        }
    }

    randomise = () => {
        var ret = new Vector3;
        var frame = parseInt(Math.random()*6);
        ret.X = Math.random()*38-18;
        ret.Y = Math.random()*38-18;
        ret.Z = Math.random()*38-18;
        switch (parseInt(frame)) {
            case 0:
                ret.Z = -21;
                break;
            case 1:
                ret.Z = 21;
                break;
            case 2:
                ret.X = -21;
                break;
            case 3:
                ret.X = 21;
                break;
            case 4:
                ret.Y = 21;
                break;
            case 5:
                ret.Y = -21;
                break;
        }
        return ret;
    }

    check = () => {
        for (let i = 0; i < this.Obstaclevec.length; i++) {
            if (snake.pos.X > this.Obstaclevec[i].X - 2.0 && snake.pos.X < this.Obstaclevec[i].X + 2.0
                && snake.pos.Y > this.Obstaclevec[i].Y - 2.0 && snake.pos.Y < this.Obstaclevec[i].Y + 2.0
                && snake.pos.Z > this.Obstaclevec[i].Z - 2.0 && snake.pos.Z < this.Obstaclevec[i].Z + 2.0) {
                    snake.pause();
                    snake.alive = false;
                    document.getElementById("snake-resume").setAttribute("disabled", "disabled");
            }
        }
    }

    renderObstacle = () => {
        for (let i = 0; i < this.Obstaclevec.length; i++) {
            translate(-this.Obstaclevec[i].X, -this.Obstaclevec[i].Y, -this.Obstaclevec[i].Z);
            fill(0, 0, 0);
            box(2);
            translate(this.Obstaclevec[i].X, this.Obstaclevec[i].Y, this.Obstaclevec[i].Z);
        }
    }

}