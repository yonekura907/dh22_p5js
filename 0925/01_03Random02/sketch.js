function setup() {
  createCanvas(500, 500);
}

function draw() {
  // background(255); 背景を消す
  noFill();
  stroke(random(255), random(255), random(255), 100);
  ellipse(mouseX, mouseY, random(20, 100));
}
