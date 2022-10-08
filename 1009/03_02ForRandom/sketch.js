function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  noFill();

  for (let i = 0; i < 1000; i++) {
    stroke(0, random(255), random(255));
    line(random(width), random(height), random(width), random(height));
  }
}

function draw() {


}
