function setup() {
  createCanvas(720, 720);
  background(0);
  noStroke();
  colorMode(HSB, 360, 100, 100);
  for (let x = 0; x < 36; x++) {
    //変数xは0から36まで1ずつ増える
    fill(x * 10, 100, 100);
    rect(x * 20, 0, 20, height);
  }
}

function draw() { }
