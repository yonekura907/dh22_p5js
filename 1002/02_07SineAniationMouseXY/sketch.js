//グローバル変数
let x;
let y;
let speedCircle; //速度
let angle; //角度
let radius; //半径

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //初期値
  x = 0;
  y = 0;
  speedCircle = 1;
  angle = 0;
  radius = 50;
}

function draw() {
  background(0, 10);
  //起点を中心に
  translate(width / 2, height / 2);
  fill(0, 255, 255);

  //XY座標
  x = radius * cos(radians(angle));
  y = radius * sin(radians(angle));
  ellipse(x, y, 20);

  //mouseYが0-heightの値を1から20
  speedCircle = map(mouseY, 0, 600, 1, 10);
  // console.log(mouseY);
  //mouseXが0-widthの値を50から300
  radius = map(mouseX, 0, width, 50, 300);

  //現在のxに2を足して保存する
  angle += speedCircle;

  //角度が360を超えたら0に戻る
  if (angle > 360) {
    angle = 0;
  }
}
