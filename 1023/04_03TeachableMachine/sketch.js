let video;
let status;
let maxPredictions;
let tmModel;
let className = [];
let classData = [];
let poseStatus;

const URL = "https://teachablemachine.withgoogle.com/models/knl_lJ_ZO/";
const modelURL = URL + "model.json";
const metadataURL = URL + "metadata.json";

async function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  status = select("#status");

  tmModel = await tmPose.load(modelURL, metadataURL);
  maxPredictions = tmModel.getTotalClasses();
  status.html("Model Loaded");
  console.log(tmModel);
  predictDraw();
}

function draw() { }

async function predictDraw() {
  await predict();
  image(video, 0, 0, width, height);

  if (poseStatus === 1) {
    stroke(0, 255, 0);
    strokeWeight(40);
    noFill();
    ellipse(width / 2, height / 2, 200);
  } else if (poseStatus === 2) {
    angleMode(DEGREES);
    push();
    translate(width / 2, height / 2);
    stroke(255, 0, 0);
    strokeWeight(40);
    const radius = 120;
    line(
      radius * cos(45),
      radius * sin(45),
      radius * cos(225),
      radius * sin(225)
    );
    line(
      radius * cos(135),
      radius * sin(135),
      radius * cos(315),
      radius * sin(315)
    );
    pop();
  }

  window.requestAnimationFrame(predictDraw);
}

async function predict() {
  // First estimate the pose
  let { pose, posenetOutput } = await tmModel.estimatePose(video.elt);
  // Then get predictions from the model you trained in teachable machine
  let prediction = await tmModel.predict(posenetOutput);
  let string = "";
  for (let i = 0; i < maxPredictions; i++) {
    className[i] = prediction[i].className;
    classData[i] = prediction[i].probability.toFixed(2);

    string += "<li>" + className[i] + ": " + classData[i] + "</li>";
  }
  status.html(string);
  // console.log(prediction);

  if (classData[0] > 0.7 && classData[1] < 0.2 && classData[2] < 0.2) {
    poseStatus = 1;
  } else if (classData[0] < 0.2 && classData[1] > 0.7 && classData[2] < 0.2) {
    poseStatus = 2;
  } else {
    poseStatus = 0;
  }
  // console.log(poseStatus);
}
