import {Game} from "./game.js";

class Application{
    /************************************************
     * 
     * コンストラクタ
     * (クラスからインスタンスが生成されたときに呼び出される関数) 
     * 
     */
	constructor(){
    }

    /************************************************
     * 
     * 初期化する関数
     * 
     */
    init (){
        //キャンバスとステージを設定
        this.canvasObject = document.getElementById("myCanvas");
        this.canvasObject.width = 375;
        this.canvasObject.height = 667;
        this.stage = new createjs.Stage(this.canvasObject);
        
        // タッチ操作をサポートしているブラウザーかチェック
        if(createjs.Touch.isSupported()){
            // タッチ操作を有効にします。
            createjs.Touch.enable(this.stage)
        }

        //game を作るよ
        this.game = new Game(this.stage);

    }
}

//アプリをインスタンスにしてから初期化
const appli = new Application();
appli.init();