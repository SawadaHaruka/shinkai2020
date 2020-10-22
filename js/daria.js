import { Char } from "./char.js";

export class Daria extends Char {
    constructor() {
        super("./images/daria.png");
        this.type = "daria";

        this.y = 570;

        this.vy = 0;
        
        this.scale = Math.min(0.8, Math.random() + 0.6); //0.6~0.8

        console.log("ダーリアイソギンチャクを生成した");

    }
}