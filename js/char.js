export class Char extends createjs.Bitmap {
    /************************************************
     * 
     * コンストラクタ
     * (クラスからインスタンスが生成されたときに呼び出される関数)
     * 
     */
    constructor(img) {
        super(img);
        this.type = "default";
        console.log("Char クラス上でキャラクターが生成されたよ");

        //読み込んだ画像の中心位置をずらす
        this.regX = 30;
        this.regY = 30;

        this.x = Math.random() * 320 + 20; //x座標 20~340に出現

        //ベクトルの初期値を指定
        this.vx = Math.random() + 0.5;
        this.vy = Math.random() + 0.5;
        this.vr = Math.random() + 1;
        this.alpha = 0;

    }

    /************************************************
     * 
     * 移動しろという命令
     * 
     */
    move() {
        //move() と命令されたら、自分の座標にベクトルの値を足し込む
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.vr;
    }

}