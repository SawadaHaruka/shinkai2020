export class Mendako extends createjs.Sprite {
    constructor() {
        //SpriteSheetのデータを定義
        let data = {
            framerate: 4,  //１秒間に
            images: ["./images/menndakos.png"],
            frames: { width: 61, height: 46, regX: 30.5, regY: 23 },
            animations: {
                swim: {
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 8],　
                    speed: 2　
                }
            }

        }
        //スプライトシートのデータを使って SpritSheet をインスタンス化
        let spriteSheet = new createjs.SpriteSheet(data);

        //継承元の Sprite クラスに spriteSheetを渡して、Spriteのインスタンスを作る
        //1つ目が spriteSheet のインスタンス、2つ目が初期値
        super(spriteSheet, "swim");

        this.x = Math.random() * 370;
        this.y = Math.random() * 600;
        this.vx = Math.random() * 0.2;
        this.vy = Math.random() + 0.5;
        this.alpha = 0;

    }

    move() {
        //move() と命令されたら、自分の座標にベクトルの値を足し込む
        this.x += this.vx;
        this.y += this.vy;
    }

}