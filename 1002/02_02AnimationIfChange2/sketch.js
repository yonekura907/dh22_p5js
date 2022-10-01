//グローバル変数
let x;
let y;
let speedX;
let speedY;
let changePoint1;
let changePoint2;
let radius;

function setup() {
  createCanvas(500, 500);
  noStroke();
  //初期値
  x = width / 2;
  changePoint1 = width / 3;
  changePoint2 = changePoint1 * 2;
  y = height / 2;
  speedX = random(-8, 8);
  speedY = random(-8, 8);
  radius = 25;
}

function draw() {
  background(0);
  // 中心の線
  stroke(255);
  line(changePoint1, 0, changePoint1, height);
  line(changePoint2, 0, changePoint2, height);
  //アニメーションの円と四角形
  noStroke();
  fill(255, 0, 255);
  if (x < changePoint1) {
    triangle(
      //1つ目の点
      x + radius * cos(radians(30)),
      y + radius * sin(radians(30)),
      //2つ目の点
      x + radius * cos(radians(150)),
      y + radius * sin(radians(150)),
      //3つ目の点
      x + radius * cos(radians(270)),
      y + radius * sin(radians(270))
    );
  } else if (x > changePoint2) {
    rectMode(CENTER);
    rect(x, y, 50, 50);
  } else {
    ellipse(x, y, 50);
  }

  x = x + speedX; //現状のxに1足して保存する
  //もしxがwidth（幅500）以上になったら
  if (x > width) {
    speedX = speedX * -1;
  }
  //もしxが0以下になったら
  if (x < 0) {
    speedX = speedX * -1;
  }
  y = y + speedY; //現状のyに3足して保存する
  if (y > height) {
    // y = 0;
    speedY = speedY * -1;
  }
  if (y < 0) {
    speedY = speedY * -1;
  }
}
