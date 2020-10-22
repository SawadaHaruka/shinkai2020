export class Button extends createjs.MovieClip {

    constructor() {
        super();

        let button = new createjs.Bitmap("./images_op/button.png");
        button.x = 190;
        button.y = 530;
        button.regX = 100;
        button.regY = 30;
        button.shadow = new createjs.Shadow("#333333", 2, 2, 1);
        this.addChild(button);

        //sound
        createjs.Sound.registerSound("./sounds/ripple.mp3", "ripple");

        //押した
        button.on("mousedown", (evt) => {
            button.scale = 0.95;
            console.log("押した");
        });

        //離した
        button.on("pressup", (evt) => {
            button.press = false;
            button.scale = 1;
            console.log("離した");
        });

        //クリックしたとき
        button.on("click", (evt) => {
            console.log("buttonをクリックした");
            createjs.Sound.play("ripple");
        });

    }

}