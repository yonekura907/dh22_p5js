//クラス
class BoundCircle {
  //コンストラクタ
  constructor() {
    //プロパティ
    this.x = width / 2;
    this.y = height / 2;
    this.speedX = random(-4, 4);
    this.speedY = random(-4, 4);
    this.radius = random(8, 40);
    this.hue = random(120, 240);
    noStroke();
    colorMode(HSB, 360, 100, 100, 100);
  }
  //メソッド
  draw() {
    this.x = this.x + this.speedX;
    if (this.x > width || this.x < 0) {
      this.speedX = this.speedX * -1;
    }
    this.y = this.y + this.speedY;
    if (this.y > height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
    fill(this.hue, 100, 100, 50);
    ellipse(this.x, this.y, this.radius);
  }
}

let bc = []; //インスタンスを保存する配列
let NUM = 500;
function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < NUM; i += 1) {
    bc[i] = new BoundCircle(); //インスタンスの生成
  }
}

function draw() {
  background(0);
  for (let i = 0; i < NUM; i += 1) {
    bc[i].draw(); //メソッドの実行
  }
}
