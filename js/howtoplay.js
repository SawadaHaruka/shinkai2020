export class Howtoplay extends createjs.MovieClip {
    constructor() {
        super();

        //四角い背景を作るよ。画像にしたいときは Bitmap クラスとかにするといいね。
        let bg = new createjs.Shape();
        bg.graphics.beginFill("#005FAF").drawRect(0, 0, 375, 607);
        this.addChild(bg);

        let text = new createjs.Text("How to play", "35px sans", "LightBlue");
        text.x = 100;
        text.y = 20;
        this.addChild(text);

        //上のやつ--------------------------------------------------
        let s1 = new createjs.Shape();
        s1.graphics.beginFill("#0e396a").drawRoundRect(50, 90, 280, 180, 10);
        this.addChild(s1);

        let deep = new createjs.Bitmap("./images/shinkai.png");
        deep.x = 70;
        deep.y = 147;
        this.addChild(deep);
        createjs.Tween.get(deep, { loop: true })
            .wait(600)
            .to({ x: 180 }, 900, createjs.Ease.cubicOut)
            .wait(3300)
            .to({ alpha: 0 }, 100)
            .wait(1000);

        let finger = new createjs.Bitmap("./images_op/finger.png");
        finger.x = 270;
        finger.y = 200;
        this.addChild(finger);
        createjs.Tween.get(finger, { loop: true })
            .to({ x: 260, y: 180 }, 400, createjs.Ease.cubicIn)
            .wait(4400)
            .to({ alpha: 0 }, 100)
            .wait(1000);

        let touch = new createjs.Bitmap("./images_op/touch.png");
        touch.x = 249;
        touch.y = 169;
        touch.alpha = 0;
        this.addChild(touch);
        createjs.Tween.get(touch, { loop: true })
            .wait(400)
            .to({ alpha: 1 }, 100)
            .wait(4300)
            .to({ alpha: 0 }, 100)
            .wait(1000);


        //下のやつ--------------------------------------------------
        let s2 = new createjs.Shape();
        s2.graphics.beginFill("#0e396a").drawRoundRect(50, 300, 280, 180, 10);
        this.addChild(s2);

        let hatena = new createjs.Bitmap("./images_op/hatena.png");
        hatena.x = 195;
        hatena.y = 370;
        hatena.alpha = 0;
        this.addChild(hatena);
           createjs.Tween.get(hatena, { loop: true })
            .wait(1400)
            .to({ alpha: 1 }, 400)
            .wait(3000)
            .to({ alpha: 0 }, 100)
            .wait(1000);

        let deep2 = new createjs.Bitmap("./images/shinkai.png");
        deep2.x = 110;
        deep2.y = 350;
        deep2.alpha = 0;
        this.addChild(deep2);
        createjs.Tween.get(deep2, { loop: true })
            .wait(1400)
            .to({ alpha: 1 }, 400)
            .wait(3000)
            .to({ alpha: 0 }, 100)
            .wait(1000);

        let finger2 = new createjs.Bitmap("./images_op/finger.png");
        finger2.x = 230;
        finger2.y = 370;
        finger2.alpha = 0;
        this.addChild(finger2);
        createjs.Tween.get(finger2, { loop: true })
            .wait(1400)
            .to({ alpha: 1 }, 400)
            .wait(600)
            .to({ x: 210, y: 385, scale: 1.1 }, 400, createjs.Ease.quartOut)
            .to({ scale: 1 }, 100, createjs.Ease.quartIn)
            .wait(1900)
            .to({ alpha: 0 }, 100)
            .wait(1000);

        let touch2 = new createjs.Bitmap("./images_op/touch.png");
        touch2.x = 199;
        touch2.y = 374;
        touch2.alpha = 0;
        this.addChild(touch2);
        createjs.Tween.get(touch2, { loop: true })
            .wait(2900)
            .to({ alpha: 1 }, 100)
            .wait(1800)
            .to({ alpha: 0 }, 100)
            .wait(1000);

    }
}