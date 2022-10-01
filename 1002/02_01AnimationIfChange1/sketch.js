//グローバル変数
let x;
let y;
let speedX;
let speedY;
let changePoint;
function setup() {
  createCanvas(500, 500);
  noStroke();
  //初期値
  x = width / 2; //300
  changePoint = width / 2;
  y = height / 2;
  speedX = random(-8, 8);
  speedY = random(-8, 8);
}

function draw() {
  background(0);
  // 中心の線
  stroke(255, 255, 255);
  line(width / 2, 0, width / 2, height);

  //アニメーションの円と四角形
  noStroke();
  fill(255, 0, 255);

  if (x > changePoint) {
    ellipse(x, y, 50);
  }

  if (x <= changePoint) {
    rectMode(CENTER);
    rect(x, y, 50, 50);
  }

  x = x + speedX; //現状のxに1足して保存する
  //もしxがwidth（幅600）以上になったら
  if (x > width) {
    speedX = speedX * -1;
  }
  //もしxが0以下になったら
  if (x < 0) {
    speedX = speedX * -1;
  }

  y = y + speedY; //現状のyに3足して保存する
  if (y > height) {
    speedY = speedY * -1;
  }
  if (y < 0) {
    speedY = speedY * -1;
  }
}






