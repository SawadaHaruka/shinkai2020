import { Count3 } from "./count3.js"

export class Count321 extends createjs.MovieClip {
    constructor() {
        super();

        let now = new Date();
        this.sec = now.getSeconds(); //現在の秒数

        this.s = new createjs.Shape();
        this.s.graphics.beginFill("#0F9fff").drawRect(0, 180, 375, 200);
        this.s.alpha = 0.5;
        this.addChild(this.s);

        //count321
        this.count1 = new Count3("1");
        this.count1.x = 182;
        this.addChild(this.count1);
        this.count2 = new Count3("2");
        this.addChild(this.count2);
        this.count3 = new Count3("3");
        this.addChild(this.count3);

        //動く方
        this.on("tick", (evt => {
            this.time = new Date();
            let end = this.time.getSeconds() - this.sec;　// time.getSeconds()は現在進行形の秒数
            let end2 = end + 60;
            let countdown;

            if (this.sec >= 30) { //現在時刻を取得した時の秒数が３０〜５９
                if (this.time.getSeconds() < 30) { //0~29
                    countdown = 4 - end2;
                } else {
                    countdown = 4 - end;
                }
            } else {
                countdown = 4 - end;
            }

        //countdown3-2-1
        if (countdown == 4) {
            this.s.visible = true;
        } else if (countdown == 3) {
            this.count3.visible = true;
        } else if (countdown == 2) {
            this.count2.visible = true;
            this.count3.visible = false;
        } else if (countdown == 1) {
            this.count1.visible = true;
            this.count2.visible = false;
        } else {
            this.count1.visible = false;
            this.s.visible = false;
        }
    }));


}
}