let s;
let rez = 10;
let food;
let w;
let h;

function setup () {
    createCanvas(400, 400);
    w = floor(width / rez);
    h = floor(height / rez);
    s = new snake();
    foodLocation();
    frameRate(5);
}

function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x, y);
}

function keyPressed() {
    setDirection(keyCode);
}

function setDirection(keyCode) {
    switch(keyCode) {
        case LEFT_ARROW:
            s.setDir(-1, 0);
        break;
        case RIGHT_ARROW:
            s.setDir(1, 0);
        break;
        case DOWN_ARROW:
            s.setDir(0, 1);
        break;
        case UP_ARROW:
            s.setDir(0, -1);
        break;
    }
}

function draw() {
    scale(rez);
    background(220);
    let currentPos = s.update(width, height, rez);
    s.show();

    if(currentPos[0] == food.x && currentPos[1] == food.y) {
        foodLocation();
    }

    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
}
