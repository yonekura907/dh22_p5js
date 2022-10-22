//ここがクラス（設計図）
class Minion {
  constructor(name, eye) {
    // プロパティ
    this.bodyColor = "#FFFF00";
    this.myName = name;
    this.myeEye = eye;
  }
  //メソッド
  talk() {
    console.log("Bello！ my name is " + this.myName);
  }
  dance(type) {
    console.log("Let's " + type);
  }
}

//インスタンスの生成
let kevin = new Minion("ケビン", 2);
kevin.talk();

let stuart = new Minion("スチュアート", 1);
stuart.dance("カンフー");

