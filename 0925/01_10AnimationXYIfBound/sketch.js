//グローバル変数
let x; //x座標
let y; //y座標
let speedX; //xのスピード
let speedY; //Yのスピード

//初期設定
function setup() {
  createCanvas(500, 500);
  x = width / 2; //xの初期位置
  y = height / 2; //yの初期位置
  speedX = random(-8, 8); //Xスピードの値
  speedY = random(-8, 8);; //Yスピードの値
}

//メインループ
function draw() {
  background(0);
  x = x + speedX; // xの現在地にスピードの値を足していく
  y = y + speedY;

  //条件分岐　壁でspeedを逆方向にする
  if (x >= width || x < 0) {
    speedX = -1 * speedX;
  }
  if (y >= height || y < 0) {
    speedY = -1 * speedY;
  }

  noStroke();
  fill(255);
  ellipse(x, y, 50);
}
