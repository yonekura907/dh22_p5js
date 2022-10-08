// 東京都　2020年（月ごとの合計）降水量(mm)配列
let tokyo_rainfall = [135.0, 15.0, 131.0, 296.5, 118.0, 212.5, 270.5, 61.5, 117.5, 205.0, 14.5, 13.0];

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(0);
  colorMode(HSB, 360, 100, 100);

  for (let i = 0; i < tokyo_rainfall.length; i += 1) {
    strokeWeight(10);
    strokeCap(SQUARE);
    stroke(i * 10, 100, 100);
    line(i * 40 + 20, height, i * 40 + 20, height - tokyo_rainfall[i]);
  }
}
