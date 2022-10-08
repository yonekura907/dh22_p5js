//シーン管理
let scene;
//座標
let x;
let y;
//半径 角度 スピード
let radius;
let angle;
let speed;
//色相
let hue;
let length;

//オーディオ
let se1, se2, se3, se4;

function preload() {
  se1 = loadSound("bubbles.mp3"); //オーディオファイルの読み込み
  se2 = loadSound("clay.mp3"); //オーディオファイルの読み込み
  se3 = loadSound("glimmer.mp3"); //オーディオファイルの読み込み
  se4 = loadSound("moon.mp3"); //オーディオファイルの読み込み
}

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES); //ラジアン変換
  scene = 0;
  x = 0;
  y = 0;
  radius = 0;
  angle = 0;
  speed = 30;
  hue = 0;
  length = 0;
}

function draw() {
  background(220);
  noStroke();
  colorMode(HSB, 360, 100, 100);
  //シーン切り替え
  if (scene == 1) {
    //1番目　円が移動
    fill(hue, 100, 100);
    circle(x, height / 2, 400);
    x = x + speed;
  } else if (scene == 2) {
    fill(hue, 100, 100);
    rect(0, y, width, height);
    y = y - speed;
  } else if (scene == 3) {
    noFill();
    stroke(hue, 100, 100);
    strokeWeight(80);
    translate(width / 2, height / 2);
    rotate(angle); //回転
    triangle(
      radius * cos(30),
      radius * sin(30),
      radius * cos(150),
      radius * sin(150),
      radius * cos(270),
      radius * sin(270)
    );
    radius = radius + speed;
    angle = angle + 2;
  } else if (scene == 4) {
    fill(hue, 100, 100);
    translate(width / 2, height / 2);
    for (let i = 0; i < length; i++) {
      let x = radius * cos(i * 10);
      let y = radius * sin(i * 10);
      circle(x, y, 20);
    }
    length += 1;
  }
}

function keyPressed() {
  hue = int(random(360)); //色相をランダム
  if (key === "a") {
    //Aキーを押したとき
    scene = 1;
    se1.play(); //再生
    x = -200;
  } else if (key === "s") {
    //Sキーを押したとき
    scene = 2;
    se2.play();
    y = height;
  } else if (key === "d") {
    //Dキーを押したとき
    scene = 3;
    se3.play();
    radius = 0;
  } else if (key === "f") {
    //Fキーを押したとき
    scene = 4;
    se4.play();
    length = 0;
    radius = int(random(100, 300));
  }
  console.log(scene);
}
