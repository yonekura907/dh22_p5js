const radius = 200;

function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  noStroke();
  colorMode(HSB, 360, 100, 100);

  for (let i = 0; i < 360; i += 10) {
    let x = radius * cos(radians(i));
    let y = radius * sin(radians(i));
    fill(i, 100, 100);
    ellipse(x, y, 20);
  }
}
