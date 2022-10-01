//シーン管理
let scene;
//カラー
let shapeColor;

function setup() {
  createCanvas(600, 600);
  scene = 0;
  shapeColor = color(200, 200, 200);
}

function draw() {
  background(255);
  colorMode(HSB, 360, 100, 100);
  translate(width / 2, height / 2);
  noStroke();
  fill(shapeColor);
  ellipse(0, 0, 200);

  //シーン切り替え
  if (scene === 1) {
    shapeColor = color(0, 100, 100);
  } else if (scene === 2) {
    shapeColor = color(60, 100, 100);
  } else if (scene === 3) {
    shapeColor = color(120, 100, 100);
  } else if (scene === 4) {
    shapeColor = color(180, 100, 100);
  }
}

function keyPressed() {
  if (key === "a") {
    //Aキーを押したとき
    scene = 1;
  } else if (key === "s") {
    //Sキーを押したとき
    scene = 2;
  } else if (key === "d") {
    //Dキーを押したとき
    scene = 3;
  } else if (key === "f") {
    //Fキーを押したとき
    scene = 4;
  }
  console.log(scene);
}
