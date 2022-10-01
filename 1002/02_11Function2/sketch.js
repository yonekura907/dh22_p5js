function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  drawRoboto(mouseX, mouseY);
}

//自作関数 引数　argument
function drawRoboto(x, y) {
  // 輪郭
  noStroke();
  fill(200); //塗り
  rectMode(CENTER);
  rect(x, y, 200, 200); //長方形
  // 目
  fill(0, 255, 0);
  ellipse(x - 50, y, 50, 50); //左目
  ellipse(x + 50, y, 50, 50); //右目
}
