import {Char} from "./char.js";

//Char を継承した Uri というクラスを作るよという宣言
export class Uri extends Char{
    constructor(){
        //Charという先祖のクラスのコンストラクタに"uri"という引数を渡す
        super("./images/uri.png");
        this.type = "uri";
        console.log("ウリクラゲが生成されたよ");
        this.scale = 0.8;
    
    }
}