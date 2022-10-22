let video;
let poseNet;
let myPose;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  //ml5 PoseNet
  poseNet = ml5.poseNet(video, modelReady);
}

function modelReady() {
  console.log('PoseNet ready!');
  //ポーズを検知
  poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
  console.log(results);
  if (results.length > 0) {
    myPose = results[0].pose;
  }
}

function draw() {
  //動画の鏡を反転
  scale(-1, 1);
  translate(-width, 0);
  //ビデオを表示
  image(video, 0, 0);
  if (myPose) {
    noStroke();
    fill(255, 0, 0);
    ellipse(myPose.nose.x, myPose.nose.y, 32);
  }
}
