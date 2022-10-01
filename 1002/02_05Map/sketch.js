let dia; //直径
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0, 100);
  noStroke();
  fill(255, 0, 0);

  // dia = mouseY;
  dia = map(mouseY, 0, height, 50, 200);
  console.log(dia);

  ellipse(width / 2, height / 2, dia);
}
