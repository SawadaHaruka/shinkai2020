export class Background extends createjs.MovieClip {
    constructor() {
        //継承元のコンストラクタを呼び出す。
        super();

        //background
        this.bg = new createjs.Shape();
        this.bg.graphics.beginFill("#000000");
        this.bg.graphics.drawRect(0, 0, 375, 607);
        this.addChild(this.bg);

        //背景の画像をロードして画面に出す。
        this.snow = new createjs.Bitmap("./images_op/bubble.png");
        this.snow.y = -1200;
        this.addChild(this.snow);

        this.snow1 = new createjs.Bitmap("./images_op/bubble.png");
        this.snow1.y = -1200;
        this.snow1.x = 20;
        this.snow1.alpha = 0.8;
        this.addChild(this.snow1);

        //movieClip の tick というイベントは
        //アニメーションのフレームが進むたびに呼び出されるよ。
        //これを使って背景を動かしてみよう。
        this.on("tick", (evt) => {
            this.snow.y += 0.8;　//速度が変わる
            if (this.snow.y >= 0) {  //-100でも-200でもいける！！！
                this.snow.y = -1200;
            }

            this.snow1.y += 0.2;　//速度が変わる
            if (this.snow1.y >= 0) {  //-100でも-200でもいける！！！
                this.snow1.y = -1200;
            }
        });

        //透明フィルター
        let bg2 = new createjs.Shape();
        bg2.graphics.beginFill("#000000").drawRect(0, 0, 375, 607);
        bg2.alpha = 0.5;
        this.addChild(bg2);


    }

}