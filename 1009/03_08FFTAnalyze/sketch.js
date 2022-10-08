let sound;
let fft;
let al; // analyze

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
  drawAnalyze();
}

function drawAnalyze() {
  al = fft.analyze();
  console.log(al);
  noStroke();
  fill(0, 255, 255);
  for (var i = 0; i < al.length; i++) {
    let x = map(i, 0, al.length, 0, width);
    let h = -height + map(al[i], 0, 255, height, 0);
    rect(x, height, width / al.length, h);
  }
}
