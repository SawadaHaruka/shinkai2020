export class Sakeb extends createjs.Sprite {
    constructor() {
        //SpriteSheetのデータを定義
        let data = {
            framerate: 4,
            images: ["./images/sakeb.png"],
            frames: { width: 80, height: 28, regX: 40, regY: 14 },
            animations: {
                swim: {
                    frames: [0, 1, 2, 3, 4],
                    speed: 1.5
                }
            }

        }
        //スプライトシートのデータを使って SpritSheet をインスタンス化
        let spriteSheet = new createjs.SpriteSheet(data);

        //継承元の Sprite クラスに spriteSheetを渡して、Spriteのインスタンスを作る
        //1つ目が spriteSheet のインスタンス、2つ目が初期値
        super(spriteSheet, "swim");

        this.x = 370;
        this.y = Math.random() * 600;
        this.vx = Math.random() + 0.5;
        this.vy = Math.random() * 0.3;
        this.alpha = 0;

    }

    move() {
        //move() と命令されたら、自分の座標にベクトルの値を足し込む
        this.x += this.vx;
        this.y += this.vy;

        //---画面の横に当たった時向きを変える?----------------------
        // X座標側のチェック
        if (this.x < 0) {
            this.scaleX = -1;
        } else if (this.x > 375) {
            this.scaleX = +1;
        }
    }

}