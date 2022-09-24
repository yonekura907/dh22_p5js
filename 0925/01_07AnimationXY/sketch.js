//グローバル変数
let x; //x座標
let y; //y座標
let speedX; //スピードX
let speedY; //スピードY

//初期設定
function setup() {
  createCanvas(500, 500);
  x = width / 2; //xの初期位置
  y = height / 2; //xの初期位置
  speedX = 2; //スピードの値
  speedY = 2; //スピードの値
}

//メインループ
function draw() {
  background(0);
  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, 50);
  x = x + speedX; // xの現在地にスピードの値を足していく
  y = y + speedY; // xの現在地にスピードの値を足していく
}
