
class DrawCircle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(-1, 1);
    this.speedY = random(-4, -2);
    this.d = random(4, 80);
    this.hue = int(random(120, 240));
    colorMode(HSB, 360, 100, 100, 100);
  }
  draw() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    noStroke();
    fill(this.hue, 100, 100, 50);
    ellipse(this.x, this.y, this.d);
  }
}

//グローバル変数
let video;
let handpose;
let predictions = []; //予測値
let circles = [];
let pIndexPosX, pIndexPosY;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  smooth(); //スムース表示
  video.hide();
  //ml5 HandPose
  handpose = ml5.handpose(video, modelReady);
  //一つ前の座標
  pIndexPosX = 0;
  pIndexPosY = 0;
}

function modelReady() {
  console.log('handpose ready!');
  //手を検知
  handpose.on("predict", gotPoses);
}

function gotPoses(results) {
  // console.log(results);
  predictions = results;
}

function draw() {
  background(255);
  //動画の鏡を反転
  scale(-1, 1);
  translate(-width, 0);
  //ビデオを表示
  image(video, 0, 0);

  if (predictions.length > 0) {
    // 中指の下の関節の位置を取得
    let indexPos = predictions[0].landmarks[8];
    // 一つ前のフレームとの差分
    let d = int(dist(pIndexPosX, pIndexPosY, indexPos[0], indexPos[1]));
    // console.log(d);
    //フレームの差分を出すために、一旦XY座標を保存する
    pIndexPosX = indexPos[0];
    pIndexPosY = indexPos[1];

    if (d > 10) {
      //差分が10以上の場合、drawCircleのインスタンスを生成する
      circles.push(new DrawCircle(indexPos[0], indexPos[1]));
    }
  }

  for (let i = 0; i < circles.length; i++) {
    circles[i].draw();
    if (circles[i].y < -100) {
      // インスタンスが画面から消えたら配列から削除
      circles.splice(i, 1);
    }
  }
}
