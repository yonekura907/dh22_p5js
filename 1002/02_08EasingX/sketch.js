// 円の座標
let x;
// 目的地の座標
let targetX;

function setup() {
  createCanvas(600, 600);
  noStroke();
  // グローバル変数に初期値を代入
  x = 100;
  y = height / 2;
  targetX = 500;
}

function draw() {
  background(0);

  // 現在の位置と目的地の差分（距離）
  let distanceX = targetX - x;

  //現在のX座標に距離を足していく、イージングでスピードに変化を加える
  x = x + distanceX * 0.05;

  //　塗りと円の描画
  fill(255, 0, 0);
  ellipse(x, y, 40);
}
