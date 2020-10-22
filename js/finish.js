/**
 * 
 * 開始画面のクラスを書いた
 * MovieClip クラスを継承しているので、この中にいろいろ書いて
 * 直接 addChild するとよろしい
 * 
 */
import { Bubble } from "./bubble.js"
export class Finish extends createjs.MovieClip {
    constructor() {
        super();

        //四角い背景を作るよ。画像にしたいときは Bitmap クラスとかにするといいね。
        this.fin = new createjs.Shape();
        this.fin.graphics.beginFill("#109fff").drawRect(0, 0, 375, 607);
        this.addChild(this.fin);

        let bubble = new Bubble();
        this.addChild(bubble);

        //文字をかくよ
        this.tex = new createjs.Text("RESULT", "35px sans", "Blue");
        this.tex.x = 20;
        this.tex.y = 20;
        this.addChild(this.tex);

    }
}