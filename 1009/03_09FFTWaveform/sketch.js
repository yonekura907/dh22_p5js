let sound;
let fft;
let wf; //waveform

function preload() {
  sound = loadSound("sc.mp3");
}

function setup() {
  createCanvas(400, 400);
  sound.play();
  fft = new p5.FFT(); //波形のインスタンス
}

function draw() {
  background(0);
  drawWaveForm();
}

function drawWaveForm() {
  wf = fft.waveform();
  noFill();
  stroke(0, 255, 255);
  beginShape();
  for (var i = 0; i < wf.length; i++) {
    let x = map(i, 0, wf.length, 0, width);
    let y = map(wf[i], -1.0, 1.0, height, 0);
    vertex(x, y);
  }
  endShape();
}
