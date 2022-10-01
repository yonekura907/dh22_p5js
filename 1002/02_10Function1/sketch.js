let centerX;
let centerY;
function setup() {
  createCanvas(500, 500);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(255);
  //命令の実行
  drawRoboto();
}

//自作の関数　
function drawRoboto() {
  // 命令をまとめる
  noStroke();
  fill(200);
  rectMode(CENTER);
  rect(centerX, centerY, 200, 200);
  fill(0, 255, 0);
  ellipse(centerX - 50, centerY, 50, 50);
  ellipse(centerX + 50, centerY, 50, 50);
}
