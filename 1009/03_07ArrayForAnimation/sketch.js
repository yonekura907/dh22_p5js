let x = [];
let y = [];
let speedX = [];
let speedY = [];
let diameter = [];
let hue = [];
const NUM = 500; //個数

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();

  for (let i = 0; i < NUM; i += 1) {
    //初期値
    x[i] = width / 2;
    y[i] = height / 2;
    speedX[i] = random(-8, 8);
    speedY[i] = random(-8, 8);
    diameter[i] = random(4, 20);
    hue[i] = int(random(180, 270));
  }
}

function draw() {
  background(0);
  colorMode(HSB, 360, 100, 100, 100);

  for (let i = 0; i < NUM; i += 1) {
    fill(hue[i], 100, 100, 80);
    ellipse(x[i], y[i], diameter[i]);
    x[i] += speedX[i];
    y[i] += speedY[i];

    if (x[i] > width || x[i] < 0) {
      speedX[i] *= -1;
    }
    if (y[i] > height || y[i] < 0) {
      speedY[i] *= -1;
    }
  }
}
