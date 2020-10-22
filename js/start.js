/**
 * 
 * 開始画面のクラスを書いた
 * MovieClip クラスを継承しているので、この中にいろいろ書いて
 * 直接 addChild するとよろしい
 * 
 */
import { Bubble } from "./bubble.js"

export class Start extends createjs.MovieClip {
    constructor() {
        super();
        //スタート画面
        console.log("スタート画面だよ");

        //四角い背景を作るよ。画像にしたいときは Bitmap クラスとかにするといいね。
        let bg = new createjs.Shape();
        bg.graphics.beginFill("#6FBFFF").drawRect(0, 0, 375, 607);
        this.addChild(bg);

        //Shadowクラス!!!!
        //myImage.shadow = new createjs.Shadow("#000000", 5, 5, 10);
        //Shadow ( color,  offsetX,  offsetY,  blur（ぼかし） );

        let ika = new createjs.Bitmap("./images_op/mizuhiki_op.png");
        ika.x = 100;
        ika.y = 120;
        ika.rotation = 352;
        ika.alpha = 0;
        ika.scale = 0.7;
        this.addChild(ika);
        createjs.Tween.get(ika)
            .wait(1000)
            .to({ x: 0, y: 20, alpha: 0.2, scale: 0.9 }, 1600);

        let oo = new createjs.Bitmap("./images_op/oguchi_op.png");
        oo.x = 250;
        oo.y = 200;
        oo.rotation = 5;
        oo.alpha = 0;
        oo.scale = 0.7;
        oo.shadow = new createjs.Shadow("LightCyan", 1, 1, 5);
        this.addChild(oo);
        createjs.Tween.get(oo)
            .wait(1000)
            .to({ x: 290, y: 150, alpha: 1, scale: 0.9 }, 1600);

        let omu = new createjs.Bitmap("./images_op/omu_op.png");
        omu.x = 240;
        omu.y = 120;
        omu.regX = 94;
        omu.alpha = 0;
        omu.scale = 0.6;
        omu.shadow = new createjs.Shadow("LightCyan", 3, 3, 5);
        this.addChild(omu);
        createjs.Tween.get(omu)
            .wait(1000)
            .to({ x: 280, y: 20, alpha: 1, scale: 0.8 }, 1600);

        let sake = new createjs.Bitmap("./images_op/sake_op.png");
        sake.x = 130;
        sake.y = 180;
        sake.regX = 96;
        sake.regY = 31;
        sake.rotation = 20;
        sake.alpha = 0;
        sake.scale = 0.7;
        sake.shadow = new createjs.Shadow("LightCyan", 3, 3, 5);
        this.addChild(sake);
        createjs.Tween.get(sake)
            .wait(1000)
            .to({ x: 100, y: 130, alpha: 1, scale: 0.9 }, 1600);

        let uri = new createjs.Bitmap("./images_op/uri_op.png");
        uri.x = 150;
        uri.y = 260;
        uri.regX = 50;
        uri.rotation = 40;
        uri.alpha = 0;
        uri.scale = 0.4;
        uri.shadow = new createjs.Shadow("LightCyan", 1, 1, 3);
        this.addChild(uri);
        createjs.Tween.get(uri)
            .wait(1000)
            .to({ x: 100, alpha: 1, scale: 0.6 }, 1800);

        let dari = new createjs.Bitmap("./images_op/daria_op.png");
        dari.x = 150;
        dari.y = 350;
        dari.regX = 100;
        dari.regY = 100;
        dari.alpha = 0;
        dari.scale = 0.6;
        dari.shadow = new createjs.Shadow("LightCyan", 3, 3, 5);
        this.addChild(dari);
        createjs.Tween.get(dari)
            .wait(1000)
            .to({ x: 80, y: 400, alpha: 1, scale: 0.8 }, 1700);

        let pp = new createjs.Bitmap("./images_op/pinpon_op.png");
        pp.x = 260;
        pp.y = 370;
        pp.regX = 50;
        pp.regY = 94;
        pp.alpha = 0;
        pp.scale = 0.8;
        pp.shadow = new createjs.Shadow("LightCyan", 3, 3, 5);
        this.addChild(pp);
        createjs.Tween.get(pp)
            .wait(1000)
            .to({ x: 290, y: 400, alpha: 1, scale: 1 }, 1700);

        let ten = new createjs.Bitmap("./images_op/tengan_op.png");
        ten.x = 180;
        ten.y = 430;
        ten.alpha = 0;
        ten.scale = 0.7;
        ten.rotation = 330;
        ten.shadow = new createjs.Shadow("LightCyan", 2, 3, 5);
        this.addChild(ten);
        createjs.Tween.get(ten)
            .wait(1000)
            .to({ x: 210, y: 500, alpha: 1, scale: 0.9 }, 1600);

        let men = new createjs.Bitmap("./images_op/mendako_op.png");
        men.x = 170;
        men.y = 360;
        men.regX = 100;
        men.alpha = 0;
        men.rotation = 10;
        men.shadow = new createjs.Shadow("LightCyan", 2, 3, 5);
        this.addChild(men);
        createjs.Tween.get(men)
            .wait(1000)
            .to({ x: 140, y: 440, alpha: 1, scale: 1.1 }, 1600);

        //透明フィルター
        let bg2 = new createjs.Shape();
        bg2.graphics.beginFill("LightCyan").drawRect(0, 0, 375, 607);
        bg2.alpha = 0.1;
        this.addChild(bg2);

        let bubble = new Bubble();
        this.addChild(bubble);

        let title = new createjs.Bitmap("./images_op/title.png");
        title.x = 190;
        title.y = 250;
        title.regX = 100;
        title.regY = 60;
        title.scale = 0.5;
        title.alpha = 0;
        this.addChild(title);
        createjs.Tween.get(title)
            .wait(1000)
            .to({ y: 190, scale: 1, alpha: 1 }, 2000, createjs.Ease.quartIn);

        //サークル
        let c = new createjs.Shape();
        c.graphics.s("Cyan"); //sはbeginStroke の Tiny ver!
        c.graphics.drawCircle(24, 24, 48);　//dc
        c.x = 160;
        c.y = 410;
        c.alpha = 0;
        c.scale = 0;
        c.shadow = new createjs.Shadow("Blue", 0, 0, 8);
        this.addChild(c);
        createjs.Tween.get(c)
            .wait(3000)
            .to({ scale: 1 }, 300);

        //文字
        let ts = new createjs.Bitmap("./images_op/ts_op.png");
        ts.shadow = new createjs.Shadow("White", 0, 0, 10);
        ts.regX = 90;
        ts.regY = 17;
        ts.x = 190;
        ts.y = 445;
        ts.scale = 0.99;
        ts.alpha = 0;
        this.addChild(ts);
        createjs.Tween.get(ts)
            .wait(3000)
            .to({ scale: 1 }, 300);


        this.on("tick", (evt) => {
            if (c.scale == 1) {
                createjs.Tween.get(c).to({ alpha: 1, scale: c.scale * 1.1 }, 800, createjs.Ease.cubicOut)
            } else if (c.scale == 1.1) {
                createjs.Tween.get(c).to({ alpha: 0.1, scale: c.scale / 1.1 }, 700, createjs.Ease.cubicIn);
            }

            if (ts.scale == 1) {
                createjs.Tween.get(ts).to({ alpha: 1, scale: ts.scale * 1.1 }, 800, createjs.Ease.cubicOut)
            } else if (ts.scale == 1.1) {
                createjs.Tween.get(ts).to({ alpha: 0.1, scale: ts.scale / 1.1 }, 700, createjs.Ease.cubicIn);
            }
        });

        createjs.Sound.registerSound("./sounds/water.mp3", "water");
        //clickしたら消えるように描く
        this.on("click", (evt) => {
            console.log("スタート画面をクリックした");
            createjs.Tween.get(this)
                .to({ alpha: 0 }, 500)
                .to({ visible: false }, 0);
            createjs.Sound.play("water");
        });

    }
}