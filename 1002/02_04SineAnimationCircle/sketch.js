let radius; //波の半径
let degree; // 角度
let rad; // 角度をラジアンに置き換えた値
let x; // X座標
let y; // y座標

function setup() {
  createCanvas(500, 500);
  radius = 100;
  degree = 0;
  rad = 0;
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0, 10);
  noStroke();
  rad = radians(degree); // 角度をラジアンに変換
  x = radius * cos(rad) + width / 2; // 点のY座標を三角関数で計算
  y = radius * sin(rad) + height / 2; // 点のY座標を三角関数で計算
  fill(255, 0, 255); // 点の色
  ellipse(x, y, 50); // 点の描画
  degree++; // 角度を1ずつ増やしていく
}
