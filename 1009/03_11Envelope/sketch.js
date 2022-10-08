let osc;
let fft;
let wf;
let env;
function setup() {
  createCanvas(400, 400);

  // エンベロープの設定
  let attack = 0.01; // 最大音に到達する時間
  let decay = 0.3; // 持続音に達する時間
  let sustain = 0.2; // 持続レベル
  let release = 0.5; // 音が消えるまでの時間

  env = new p5.Env(); // エンベロープのインスタンス
  env.setADSR(attack, decay, sustain, release);

  //オシレーター sine, triangle, sawtooth, square
  osc = new p5.Oscillator("sine");
  osc.start();
  osc.amp(env); // アンプ 音の大きさ
  osc.freq(440); // 周波数 音の高さ
  env.play(); // エンベロープの実行
  fft = new p5.FFT(); //波形のインスタンス
}

function draw() {
  background(0);
  drawWaveForm();
}

function drawWaveForm() {
  wf = fft.waveform();
  // console.log(wf);
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
