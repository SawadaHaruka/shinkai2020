export class Tengan extends createjs.Sprite {
    constructor() {
        //SpriteSheetのデータを定義
        let data = {
            framerate: 4,
            images: ["./images/tengan.png"],
            frames: { width: 60, height: 36, regX: 30, regY: 18 },
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

        this.x = Math.random() * 375;
        this.y = Math.random() * 600;
        this.vx = Math.random() * 2 + 0.5; //0を作らない
        this.vy = Math.random() + 0.5;
        this.alpha = 0;

    }

    move() {
        //move() と命令されたら、自分の座標にベクトルの値を足し込む
        this.x += this.vx;　//方向と距離
        this.y += this.vy;

        //進む方向に画像を回転させる 
        //----Math.atan2(y座標,x座標)になんかかけて角度に直す。Math PI(は円周率)
        this.rotation = Math.atan2(this.vy, this.vx) * 180 / Math.PI;

        //向きを変える。壁に当たったら画像の縦方向を変える
        if (this.x < 0) {
            this.scaleY = +1;
        } else if (this.x > 375) {
            this.scaleY = -1;
        }
    }

}