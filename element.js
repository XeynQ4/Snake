class Element {
    constructor(x, y, size) {
        this.loc = createVector(x, y);
        this.width = size;
        this.vel = createVector(0, -size);
    }

    show() {
        noStroke();
        fill(0);
        rect(this.loc.x, this.loc.y, this.width);
    }
}