export class Count3 extends createjs.Bitmap {
    constructor(count) {
        let img = "";
        if (count == "3") {
            img = "./images_op/c3.png";
        } else if (count == "2") {
            img = "./images_op/c2.png";
        } else if (count == "1") {
            img = "./images_op/c1.png";
        }
        super(img);

        this.x = 170;
        this.y = 280;
        this.regY = 40;
        this.visible = false;
    }
}