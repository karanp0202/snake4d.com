var positions = [];
var angles = [];
var shapes = [];

var shape_count = 150;

var locX = 0;
var locY = 0;

let geom_dim = 150;

document.addEventListener("mousemove", (event) => {
    locX = event.clientX;
    locY = event.clientY;
})

let previousWidth, previousHeight;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    previousWidth = windowWidth;
    previousHeight = windowHeight;
    frameRate(60)
    // ortho(-windowWidth, windowWidth, -windowHeight, windowHeight, 0, 10000)
    for (let i = 0; i < shape_count; i++)
    {
        angles.push([random() * 360, random() * 360, random() * 360]);
        positions.push([random() * windowWidth * 2 - windowWidth, random() * windowHeight * 2 - windowHeight, random() * 2000 - 1000]);
        shapes.push(random() * 5);
    }
    angleMode(DEGREES);
}

function draw() {
    // background(255);
    clear();

    ambientLight(50);
    directionalLight(255, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 250, locX, locY, 250);
    
    rotateX(- (locY - windowHeight / 2) / 50);
    rotateY((locX - windowWidth / 2) / 50);

    for (let i = 0; i < shape_count; i++)
    {
        angles[i][0] += 0.2;
        angles[i][1] += 0.2;
        angles[i][2] += 0.2;
        push();
        translate(positions[i][0], positions[i][1], positions[i][2]);
        rotateX(angles[i][0] + locY / 25);
        rotateY(angles[i][1] + locX / 25);
        rotateZ(angles[i][2]);
        specularMaterial(250);
        switch (parseInt(shapes[i])) {
            case 0:
                triangle(0, 0, 0, geom_dim, geom_dim, geom_dim);
                break;
            case 1:
                box(geom_dim, geom_dim, geom_dim);
                break;
            case 2:
                ellipse(0, 0, geom_dim, geom_dim);
                break;
            case 3:
                rectMode(CENTER);
                rect(0, 0, geom_dim, geom_dim);
                break;
            case 4:
                let size = geom_dim;
                let height = (sqrt(3) / 2) * size;
                triangle(0, - size / 2, - size / 2, height / 2, size / 2, height / 2);
                break;
                case 'pentagon':
                let angle = TWO_PI / 5;
                beginShape();
                for (let i = 0; i < TWO_PI; i += angle) {
                    let px = cos(i) * size;
                    let py = sin(i) * size;
                    vertex(px, py);
                }
                endShape(CLOSE);
                break;
            default:
                break;
        }
        pop();
    }
}
function windowResized() {
    for (let i = 0; i < shape_count; i++)
    {
        positions[i][0] *= windowWidth / previousWidth;
        positions[i][1] *= windowHeight / previousHeight;
    }
    resizeCanvas(windowWidth, windowHeight);
    previousWidth = windowWidth;
    previousHeight = windowHeight;
}
