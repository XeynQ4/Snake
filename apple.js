class Apple {
    constructor(x, y, size) {
        this.loc = createVector(x, y);
        this.width = size;
    }

    show() {
        noStroke();
        fill(255, 0, 0);
        rect(this.loc.x, this.loc.y, this.width);
    }
}