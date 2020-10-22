import { Char } from "./char.js";

export class Omu extends Char {

    constructor() {
        //Charという先祖のクラスのコンストラクタに"omu"という引数を渡す
        super("./images/omu.png");
        this.type = "omu";

        this.scale = 0.7;
        this.y = 170;

        console.log("omuomu");

    }
}