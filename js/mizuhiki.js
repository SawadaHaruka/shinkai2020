export class Mizuhiki extends createjs.Sprite {
    constructor() {
        // this.type = "mizu";
        //SpriteSheetのデータを定義
        let data = {
            framerate: 4,
            images: ["./images/mizuhiki.png"],
            frames: { width: 92, height: 450, regX: 46, regY: 0 },
            animations: {
                ika: {
                    frames: [0, 0, 0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 9, 0, 0, 0, 0],
                    speed: 2
                }
            }

        }
        //スプライトシートのデータを使って SpritSheet をインスタンス化
        let spriteSheet = new createjs.SpriteSheet(data);

        //継承元の Sprite クラスに spriteSheetを渡して、Spriteのインスタンスを作る
        //1つ目が spriteSheet のインスタンス、2つ目が初期値
        super(spriteSheet, "ika");
        this.type = "mizu";

        this.x = 280;
        this.y = 50;
        this.alpha = 0;

    }

}