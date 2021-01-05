class Element {
    constructor(x, y, size, parent) {
        this.loc = createVector(x, y);
        this.width = size;
        this.parent = parent;
    }

    show() {
        noStroke();
        fill(0);
        rect(this.loc.x, this.loc.y, this.width);
    }
}