export class Bubble extends createjs.MovieClip {
    constructor() {
        //継承元のコンストラクタを呼び出す。
        super();

        //背景の画像をロードして画面に出す。
        let bub = new createjs.Bitmap("./images_op/bubble.png");
        bub.y = 0;
        this.addChild(bub);

        let bub1 = new createjs.Bitmap("./images_op/bubble.png");
        bub1.y = 0;
        bub1.x = 20;
        bub1.alpha = 0.8;
        this.addChild(bub1);

        //movieClip の tick というイベントは
        //アニメーションのフレームが進むたびに呼び出されるよ。
        //これを使って背景を動かしてみよう。
        this.on("tick", (evt) => {
            bub.y -= 0.8;
            if (bub.y <= -1200) {
                bub.y = 0;
            }

            bub1.y -= 0.2;
            if (bub1.y <= -1200) {
                bub1.y = 0;
            }
        });


    }

}