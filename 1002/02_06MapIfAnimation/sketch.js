//グローバル変数
let x;
let y;
let speedX; //速度

function setup() {
  createCanvas(500, 500);
  //初期値
  x = width / 2;
  y = height / 2;
  speedX = 0;
}

function draw() {
  background(0, 100);
  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, 50);

  // map関数で0〜500の値を0〜20の間にまるめている
  speedX = map(mouseY, 0, height, 0, 10);

  //現在のxに2を足して保存する
  x += speedX;

  //width（最大幅）を超えたら0に戻る
  if (x > width + 50) {
    x = -50;
  }
}
