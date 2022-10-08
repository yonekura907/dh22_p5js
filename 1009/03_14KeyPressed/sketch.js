let shapeColor;
function setup() {
  createCanvas(500, 500);
  shapeColor = color(200);
}

function draw() {
  background(0);
  noStroke();
  fill(shapeColor);
  ellipse(width / 2, height / 2, 100);
}

function keyPressed() {
  if (key == "a") {
    //キーがAだったら
    shapeColor = color(255, 0, 0);
  } else if (key == "s") {
    //キーがSだったら
    shapeColor = color(0, 255, 0);
  } else if (key == "d") {
    //キーがDだったら
    shapeColor = color(0, 0, 255);
  }
}

function keyReleased() {
  //キーを離したとき
  shapeColor = color(200);
}
