function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(255);

  // 顔の色
  const faceColor = color(200);
  const grayColor = color(150);
  const eyeColor = color(255, 255, 0);
  const earColor = color(0, 255, 0);

  // 中心の座標
  const centerX = 250;
  const centerY = 250;

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
