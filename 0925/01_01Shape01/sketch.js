//初期設定
function setup() {
  // 最初の1回だけ読み込む
  createCanvas(500, 500); // ウインドウのサイズ
  background(220); // 背景
}

//メインループ
function draw() {
  // ここが繰り返される
  background(220);
  noStroke(); // 線なし

  fill(0, 255, 255); //塗り
  circle(250, 250, 100); //円

  fill(255, 0, 255); //塗り
  rect(200, 100, 50, 50); //長方形

  stroke(0); // 線の色　黒
  strokeWeight(3); //線の幅
  line(50, 50, 200, 200); // 線
}
