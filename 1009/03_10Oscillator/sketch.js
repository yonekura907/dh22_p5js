let osc;
let fft;
let wf;
function setup() {
  createCanvas(400, 400);
  //オシレーター sine, triangle, sawtooth, square
  osc = new p5.Oscillator("sine");
  osc.start();
  osc.amp(0.5); // アンプ 音の大きさ
  osc.freq(440); // 周波数 音の高さ
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
