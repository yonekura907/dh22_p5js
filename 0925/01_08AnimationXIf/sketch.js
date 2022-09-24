//グローバル変数
let x; //x座標
let speedX; //スピード

//初期設定
function setup() {
  createCanvas(500, 500);
  x = width / 2; //xの初期位置
  speedX = 2; //スピードの値
}

//メインループ
function draw() {
  background(0);
  noStroke();
  fill(255, 0, 0);
  ellipse(x, 250, 50);
  x = x + speedX; // xの現在地にスピードの値を足していく

  // もしX座標がキャンバス幅以上になったら
  if (x > width + 50) {
    x = -50; //X座標を-50に戻す
  }
}
