let diameters = []; //配列
function setup() {
  createCanvas(500, 500);
  diameters = [10, 20, 30, 40, 50]; //配列
}

function draw() {
  background(220);
  for (let i = 0; i < 5; i += 1) {
    // console.log(i);
    noStroke();
    fill(0, 255, 255);
    ellipse(i * 100 + 10, height / 2, diameters[i]);
  }
}
