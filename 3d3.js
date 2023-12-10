let t = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    noFill();
}

function draw() {
    background(0);
    translate(width / 2, height / 2);

    beginShape();
    for (let i = 0; i < TWO_PI; i += 0.01) {
        let r = 100 * (1 + sin(t) / 2);
        let x = r * cos(i);
        let y = r * sin(i);
        vertex(x, y);
    }
    endShape(CLOSE);

    t += 0.01;
}