export class Pinpon extends createjs.Sprite {
    constructor() {
        //SpriteSheetのデータを定義
        let data = {
            framerate: 4,  //１秒間に
            images: ["./images/pinpon.png"],
            frames: { width: 42, height: 62, regX: 21, regY: 31 },
            animations: {
                pin: {
                    frames: [0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 2, 1],
                    speed: 1.5
                }
            }
        }
        //スプライトシートのデータを使って SpritSheet をインスタンス化
        let spriteSheet = new createjs.SpriteSheet(data);

        //継承元の Sprite クラスに spriteSheetを渡して、Spriteのインスタンスを作る
        //1つ目が spriteSheet のインスタンス、2つ目が初期値
        super(spriteSheet, "pin");
        console.log("タイプ＝ピンポン");

        this.x =  Math.random()*200 + 10; //10~210に出現
        this.y = 560;
        this.scale = 1.1;
        this.alpha = 0;

    }
}