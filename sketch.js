const scoreBoard = document.getElementById("score");
const width = 600;
// const height = 500;
const sqrSize = 20;
const gridSize = width / sqrSize;
let score = 0;
let grid = [];
let head;
let speed = 1;

function setup() {
    createCanvas(width, width);
    grid[0] =
        new Element(width / 2, width / 2, sqrSize);
    head = grid[0];
}

function draw() {
    frameRate(speed);
    speed += 0.001;
    background(55);
    head.loc.add(head.vel);
    for (let element of grid) {
        element.show();
    }








    scoreBoard.innerHTML = `Score: ${score}`;
}

function keyPressed() {
    if (keyCode === 87 && head.vel.y != sqrSize) {
        head.vel = createVector(0, -sqrSize);
    }
    if (keyCode === 65 && head.vel.x != sqrSize) {
        head.vel = createVector(-sqrSize, 0);
    }
    if (keyCode === 83 && head.vel.y != -sqrSize) {
        head.vel = createVector(0, sqrSize);
    }
    if (keyCode === 68 && head.vel.x != -sqrSize) {
        head.vel = createVector(sqrSize, 0);
    }
}
