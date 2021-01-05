const scoreBoard = document.getElementById("score");
const width = 600;
// const height = 500;
const sqrSize = 20;
const gridSize = width / sqrSize;
let vel;
let score = 0;
let snake = [];
let nextSnake = [];
let head;
let speed = 1;
let appleExists = false;
let apple;
let index = 0

function setup() {
    createCanvas(width, width);
    vel = createVector(0, -sqrSize);

    snake[0] =
        new Element(width / 2, width / 2, sqrSize, null);
    head = snake[0];
    createApple();
}

function draw() {
    background(55);

    appleEaten();
    apple.show();
    if (!appleExists) {
        createApple();
    }

    if (index === 0) {
        showSnake();
        index = 20;
    } else {
        for (let i = 0; i < snake.length; i++) {
            snake[i].show();
        }
        index--;
    }










    scoreBoard.innerHTML = `Score: ${score}`;
}

function keyPressed() {
    if (keyCode === 87 && vel.y != sqrSize) {
        vel = createVector(0, -sqrSize);
    }
    if (keyCode === 65 && vel.x != sqrSize) {
        vel = createVector(-sqrSize, 0);
    }
    if (keyCode === 83 && vel.y != -sqrSize) {
        vel = createVector(0, sqrSize);
    }
    if (keyCode === 68 && vel.x != -sqrSize) {
        vel = createVector(sqrSize, 0);
    }
}

function createApple() {
    apple = new Apple(floor(random(1) * 30) * 20, floor(random(1) * 30) * 20, sqrSize);
    appleExists = true;
}

function appleEaten() {
    if (head.loc.x == apple.loc.x && head.loc.y == apple.loc.y) {

        appleExists = false;
    }
}

function showSnake() {
    for (let i = 0; i < snake.length; i++) {
        nextSnake[i] = snake[i];
        if (i === 0) {
            nextSnake[i].loc = snake[i].loc;
            nextSnake[i].loc.add(vel);
        } else {
            nextSnake[i].loc = snake[i - 1].loc;
        }

    }
    snake = nextSnake;
    nextSnake = snake;

    for (let i = 0; i < snake.length; i++) {
        snake[i].show();
    }
}