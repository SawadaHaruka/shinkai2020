import { Char } from "./char.js";

export class Oguchi extends Char {
    constructor() {
        super("./images/oguchi.png");
        this.type = "oguchi";

        console.log("オオグチボヤを生成した");
        this.regY = 60;

        //画面出現
        this.y = 588;

        /*
        Math.randomは 0<= scale <1
        これに+0.6すると
        0.6<= scale <1.6
        Math.min(1.1,scale)で1.1より大きくなった時は1.1を返す
        */
        this.scale = Math.min(1.1, Math.random() + 0.6);

        //０か１かの乱数を発生させ、向きを変える
        let muki = Math.floor(Math.random() * 2); 
        console.log(muki);
        if (muki == 0) {
            this.scaleX *= 1;
        } else if (muki == 1) {
            this.scaleX *= -1;
        }
    
    }

}