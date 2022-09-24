function setup() {
  createCanvas(500, 500);
}

function draw() {
  // background(255); 背景を消す
  noStroke();
  fill(random(255), random(255), random(255), 100);
  ellipse(random(0, 600), random(0, 600), random(20, 100));
}
