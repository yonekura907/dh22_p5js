let osc;
let fft;
let wf;
let noteNumber;//音階

function setup() {
  createCanvas(400, 400);

  // 初期値　ド
  noteNumber = 48;

  //オシレーター sine, triangle, sawtooth, square
  osc = new p5.Oscillator("sine");
  osc.start();
  osc.amp(0.5); // アンプ 音の大きさ
  // osc.freq(440); // 周波数 音の高さ
  fft = new p5.FFT(); //FFTのインスタンス
}

function draw() {
  background(0);
  noteNumber = int(map(mouseY, 0, height, 83, 48));
  console.log(noteNumber);
  osc.freq(midiToFreq(noteNumber));
  drawWaveForm();
}

// ノートナンバーから周波数に変換する関数
function midiToFreq(note) {
  let freqVal = pow(2, (note - 69) / 12.0) * 440;
  return freqVal;
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
