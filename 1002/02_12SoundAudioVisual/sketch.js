let audio;
let amp;
function preload() {
  //外部ファイルを先読みする関数
  audio = loadSound("sc.mp3"); //オーディオファイルの読み込み
}

function setup() {
  createCanvas(400, 400);
  audio.play(); //再生
  amp = new p5.Amplitude(); //音量
}

function draw() {
  background(0, 10);
  let vol = amp.getLevel(); //音量取得
  console.log(vol);

  //音量0〜0.3の値を円の直径10〜300内に置き換える
  let diam = map(vol, 0, 0.3, 10, 300);

  noStroke();
  fill(0, random(100, 255), 255, 50);
  ellipse(width / 2, height / 2, diam);
}
