function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255, 50);

  let faceColor = color(200);
  let grayColor = color(150);
  let eyeColor = color(255, 255, 0);
  let earColor = color(0, 255, 0);

  // 中心の座標
  let centerX = mouseX;
  let centerY = mouseY;

  noStroke(); // 線なし
  //耳
  fill(grayColor);
  ellipse(centerX - 100, centerY - 25, 50, 50);
  ellipse(centerX + 100, centerY - 25, 50, 50);

  // 輪郭の描画
  fill(faceColor);
  rectMode(CENTER);
  rect(centerX, centerY, 200, 150);
  ellipse(centerX, centerY - 65, 200);

  //角
  fill(grayColor);
  rect(centerX, centerY - 100, 10, 200);

  // 目の描画
  fill(eyeColor);
  ellipse(centerX - 50, centerY - 50, 50, 50);
  ellipse(centerX + 50, centerY - 50, 50, 50);

  // 口の描画
  fill(grayColor);
  rect(centerX, centerY + 20, 200, 5);
}
