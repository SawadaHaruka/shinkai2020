/** 
 * プログラミング基礎 テンプレート
 * 今回は JavaScript の ES6 の書き方で、クラスを使ってプログラミングをします。
 * ゲームなどを作るときには、画面のキャラクターを1つずつプログラムで動かすよりも、勝手に動くようにしたほうが効率的です。
 */

import { Daria } from "./daria.js"
import { Mendako } from "./mendako.js"
import { Mizuhiki } from "./mizuhiki.js"
import { Oguchi } from "./oguchi.js"
import { Omu } from "./omu.js"
import { Pinpon } from "./pinpon.js"
import { Sakeb } from "./sakeb.js"
import { Tengan } from "./tengan.js";
import { Uri } from "./uri.js"

import { Start } from "./start.js"
import { Howtoplay } from "./howtoplay.js"
import { Button } from "./button.js"
import { Count321 } from "./count321.js"
import { Background } from "./background.js"
import { Timeup } from "./timeup.js"
import { Finish } from "./finish.js"

export class Game {
    /************************************************
     * 
     * コンストラクタ
     * (クラスからインスタンスが生成されたときに呼び出される関数)
     * 
     */
    constructor(stage) {
        console.log("Game のインスタンスが生成されたよ");

        //引数のstage をメンバーの変数にするよ
        //先頭に「this」がいちいち付いているけど、この「this」は居場所を示していて、
        //インスタンスの中にある変数ですよ、ということを示しています
        this.stage = stage;


        this.scoreTag = document.getElementById("scoreTag");

        //ここから画面の要素を初期化します
        this.setUp();

        //Ticker を設定。1秒間に「loop」の関数を30回実行するように命令している。
        createjs.Ticker.framerate = 30;
        createjs.Ticker.addEventListener("tick", this.stage);

        this.state = "start";
        //ボタンがクリックされてから開始
        this.button.on("click", (evt) => {
            createjs.Sound.play("galaxy");
            this.stage.removeChild(this.howto);
            this.stage.removeChild(this.button);

            this.count321 = new Count321();
            this.stage.addChild(this.count321);

            this.state = "count";
            console.log("state が\"count\"に変化した");
            createjs.Ticker.addEventListener("tick", () => { this.loop() });
            let now = new Date();
            this.sec = now.getSeconds(); //現在の秒数
        });

        //音を鳴らす準備
        createjs.Sound.alternateExtensions = ["mp3"];
        createjs.Sound.registerSound("./sounds/get.mp3", "get");
        createjs.Sound.registerSound("./sounds/galaxy.mp3", "galaxy");
        createjs.Sound.registerSound("./sounds/shallows.mp3", "shallows");

    }

    /************************************************
     *
     * 画面の情報を初期化します。
     *
     */
    setUp() {
        //点数表示を初期値に書き換える
        this.scoreTag.textContent = "0pt";

        //スコアを計算するための変数
        this.score = 0;

        //ikamove
        this.oldsec = 0;

        this.marine = new Background();
        this.stage.addChild(this.marine);
        console.log("backgroundだよ");

        //初めは全部boxに入れておく
        this.box = new createjs.Container();
        this.stage.addChild(this.box);
        this.box.on("click", (evt) => {
            createjs.Sound.play("get");
        });

        //底生生物の配列
        this.benthos = [];

        for (let i = 0; i < 5; i++) {
            let oo = new Oguchi();
            this.stage.addChild(oo);
            this.benthos.push(oo);
            this.box.addChild(oo);
            oo.on("click", (evt) => {
                this.score += 8;
            });
        }

        this.pp = new Pinpon();
        this.stage.addChild(this.pp);
        this.benthos.push(this.pp);
        this.box.addChild(this.pp);
        this.pp.on("click", (evt) => {
            this.score += 15;
        });
        console.log("setupにピンポン");


        this.mizu = new Mizuhiki();
        this.stage.addChild(this.mizu);
        this.benthos.push(this.mizu);
        this.box.addChild(this.mizu);
        this.mizu.on("click", (evt) => {
            this.score += 200;
        });

        //キャラクターを入れる配列を作るよ
        this.chars = [];

        //ウリクラゲ
        for (let u = 0; u < 4; u++) {
            let char = new Uri();
            this.stage.addChild(char);
            this.chars.push(char);
            this.box.addChild(char);
            char.on("click", (evt) => {
                this.score += 60;
            });
        }

        //ダーリアイソギンチャク
        for (let a = 0; a < 2; a++) {
            let char = new Daria();
            this.stage.addChild(char);
            this.chars.push(char);
            this.box.addChild(char);
            char.on("click", (evt) => {
                this.score += 20;
            });
        }

        for (let m = 0; m < 2; m++) {
            this.ufo = new Mendako();
            this.stage.addChild(this.ufo);
            this.chars.push(this.ufo);
            this.box.addChild(this.ufo);
            this.ufo.on("click", (evt) => {
                this.score += 100;
            });
        }

        this.omu = new Omu();
        this.stage.addChild(this.omu);
        this.chars.push(this.omu);
        this.box.addChild(this.omu);
        this.omu.on("click", (evt) => {
            this.score += 90;
        });

        for (let s = 0; s < 3; s++) {
            let sake = new Sakeb();
            this.stage.addChild(sake);
            this.chars.push(sake);
            this.box.addChild(sake);
            sake.on("click", (evt) => {
                this.score += 80;
            });
        }

        //テンガンムネエソ 
        this.esos = [];
        //採取したテンガンムネエソ用の配列
        this.get = [];

        for (let t = 0; t < 8; t++) {
            let ten = new Tengan();
            this.stage.addChild(ten);
            this.esos.push(ten);　//配列に入れる
            this.box.addChild(ten);
            ten.on("click", (evt) => {
                this.score += 5;
                this.esos.splice(t, 1);//元の配列から1匹消す
                this.get.push(ten);　//採取したテンガンムネエソ用の配列に追加
                console.log("ゲットした用の配列に追加した");
            });
        }

        //自動で一定数のテンガンムネエソを生成
        setInterval(() => {
            this.interval();
        }, 1000);

        //時間
        this.timelavel = new createjs.Text("", "30px sans", "LightBlue");
        this.timelavel.x = 20;
        this.timelavel.y = 20;
        this.timelavel.shadow = new createjs.Shadow("White", 0, 0, 5);
        this.stage.addChild(this.timelavel);
        //時間ラスト５
        this.timelavel5 = new createjs.Text("", "38px sans", "Red");
        this.timelavel5.x = 24;
        this.timelavel5.y = 22;
        this.stage.addChild(this.timelavel5);

        //しんかい２０２０
        this.mouse = new createjs.Bitmap("./images/shinkai.png");
        this.mouse.regX = 90;
        this.mouse.regY = 36;
        this.stage.addChild(this.mouse);

        this.stage.on("tick", (evt) => {
            // マウス座標を取得する
            this.mx = this.stage.mouseX;
            this.my = this.stage.mouseY;
            // マウス座標まで深海探査号が遅れて移動
            this.mouse.x += (this.mx - this.mouse.x) * 0.04;
            this.mouse.y += (this.my - this.mouse.y) * 0.04;
            let dx = this.stage.mouseX - this.mouse.x;
            let dy = this.stage.mouseY - this.mouse.y;
            // 差分を元に方向を計算  　*180/円周率　でラジアンを角度に変換
            let degrees = Math.atan2(dy, dx) * 180 / Math.PI;
            // 表示オブジェクトの角度に反映
            this.mouse.rotation = degrees;
            //深海探査号の向きを変える    
            if (this.mx < this.newmx) {
                this.mouse.scaleY = -1;
                //ちょっとでもthis.mx>this.newmxになったとき用に向きを変えないようにする！
                if (this.newmx - this.mouse.x >= 10) {
                    this.mouse.scaleY = 1;
                }
            } else if (this.mx > this.newmx) {
                this.mouse.scaleY = 1;
                if (this.newmx - this.mouse.x <= -10) {
                    this.mouse.scaleY = -1;
                }
            }
        });

        //finish画面用意
        this.finish = new Finish();
        this.finish.visible = false;
        this.stage.addChild(this.finish);

        //捕まえたやつ用のコンテナ
        this.collection = new createjs.Container();
        this.collection.visible = false;
        this.stage.addChild(this.collection);

        //time up!画面
        this.timeup = new Timeup();
        this.timeup.visible = false;
        this.stage.addChild(this.timeup);
        //timeupをクリックしたら・・・
        this.timeup.on("click", (evt) => {
            this.stage.removeChild(this.timeup);
            createjs.Sound.play("shallows");
            this.state = "end";
            console.log("stateがendに変化した");
        });

        this.howto = new Howtoplay();
        this.stage.addChild(this.howto);

        this.button = new Button();
        this.stage.addChild(this.button);

        this.start = new Start();
        this.stage.addChild(this.start);

    }

    /************************************************
 * 1秒に1回、定期的に動く関数
 */
    interval() {
        if (this.esos.length < 10 && this.state == "game") {
            let tengan = new Tengan();
            this.stage.addChild(tengan);
            this.esos.push(tengan);
            this.box.addChild(tengan);
            tengan.on("click", (evt) => {
                this.score += 5;
                this.esos.splice(1, 1);//ここで作られたやつを配列から消す
                this.get.push(tengan);//end用の違う配列に入れる
            });
        }
    }

    /************************************************
     *
     * アニメーションが動くところ。
     * 1フレームの間にどれだけ絵が変化するかを書く。
     *
     */
    loop() {

        //新しいマウス座標を取得
        this.newmx = this.stage.mouseX;

        //カウントダウンタイマーを作ろうぞ！---------------------
        this.time = new Date();
        this.end = this.time.getSeconds() - this.sec;　// time.getSeconds()は現在進行形の秒数
        this.end2 = this.end + 60;
        this.countdown = 0;

        if (this.sec >= 26 && this.sec < 34) { //現在時刻を取得した時の秒数が26~33
            if (this.time.getSeconds() < 8) {
                this.countdown = 34 - this.end2;
            } else { //27~59
                this.countdown = 34 - this.end;
            }
        } else if (this.sec >= 34) { //現在時刻を取得した時の秒数が34~59
            if (this.time.getSeconds() < 34) { //0~33
                this.countdown = 34 - this.end2;
            } else {
                this.countdown = 34 - this.end;
            }
        } else { ////現在時刻を取得した時の秒数が0~25
            this.countdown = 34 - this.end;
        }

        //------count---------------------------------------------------
        if (this.state == "count") {
            //timelavelに表示する
            if (this.countdown > 30) { //34~31
                this.timelavel.text = ""; //非表示
            } else if (this.countdown == 30) {
                this.state = "game";
                console.log("stateがgameに変化した");
                this.stage.removeChild(this.count321); //消し去ってしまおう
            }

        //------game---------------------------------------------------
        } else if (this.state == "game") {
            if (this.countdown <= 30 && this.countdown > 5) { //count 30~6
                this.timelavel.text = this.countdown; //青＊表示  
            } else if (this.countdown <= 5 && this.countdown > 0) { //count 5~1
                this.timelavel.text = "";//青＊非表示
                this.timelavel5.text = this.countdown; //赤＊表示
            } else if (this.countdown <= 0) { //count 0
                this.stage.removeChild(this.timelavel);
                this.stage.removeChild(this.timelavel5);
                this.timeup.visible = true;
            }

            //----benthos-------------------------
            for (let z = 0; z < this.benthos.length; z++) {
                let ben = this.benthos[z];
                this.Hit(ben);
            }
            //----漂泳生物-------------------------
            for (let c = 0; c < this.chars.length; c++) {
                let char = this.chars[c];//配列からキャラクターを取り出しているところ
                this.Hit(char);
                //移動の命令をちょこちょこ実行する代わりに、移動しろと命令するだけ
                char.move();
                //壁への当たり判定の関数を呼ぶ
                this.bound(char);
            }
            //----テンガンムネエソ----------------
            for (let e = 0; e < this.esos.length; e++) {
                let teng = this.esos[e];
                this.Hit(teng);
                teng.move();
                this.bound(teng);
            }

            //------end---------------------------------------------------
        } else if (this.state == "end") {
            this.stage.removeChild(this.mouse);
            this.finish.visible = true;//finish画面をだす
            this.collection.visible = true;　//捕まえたコレクションのやつらを表示！
            this.stage.removeChild(this.box); //捕まえられなかったboxのやつらを削除！

            for (let cc = 0; cc < this.chars.length; cc++) {
                let char = this.chars[cc];//setupの配列からもう一回取り出す！
                char.alpha = 1;
                char.move();
                this.bound(char);
            }
            for (let zz = 0; zz < this.benthos.length; zz++) {
                let ben = this.benthos[zz];
                ben.alpha = 1;
            }
            for (let g = 0; g < this.get.length; g++) {
                let got_ten = this.get[g];//配列からキャラクターを取り出しているところ
                got_ten.alpha = 1;
                got_ten.move();
                this.bound(got_ten);
            }
        }

        //----ミズヒキイカの動き------------------------
        this.bound(this.mizu); //壁への当たり判定
        let ikamove = this.time.getSeconds();
        let update = false;
        if (ikamove != this.oldsec) {
            this.oldsec = ikamove;
            update = true;//条件をtrueに更新してあとで使う
        }
        if (update) {
            if (ikamove % 3 == 0) {
                this.mizu.vx *= -1;
                this.mizu.vy *= -1;
                createjs.Tween.get(this.mizu).to({ x: Math.random() * 300, y: Math.random() * 300 }, 400, createjs.Ease.sineOut);
            }
        }

    }
    /************************************************
    * 
    * 壁への当たり判定のチェック
    * 
    */
    bound(target) {
        let hit = false;
        //X座標側のチェック
        if (target.x < 0 || target.x > this.stage.canvas.width) {
            target.vx *= -1;
            target.vr *= -1;
            hit = true;
        }
        //Y座標側のチェック
        if (target.y < 0 || target.y > this.stage.canvas.height) {
            target.vy *= -1;
            hit = true;
        }
        //関数の呼び出し元に、当たったかどうかの結果を返す
        return hit;
    }

    //---マウスとの当たり判定-----------------------------------
    hitTest(target) {
        let p = this.mouse.globalToLocal(target.x, target.y);
        //キャラクターの中心座標とmouseが当たっているかを判定
        let hittest = this.mouse.hitTest(p.x, p.y);
        return hittest;
    }

    Hit(target) {
        if (this.hitTest(target)) {
            createjs.Tween.get(target).to({ alpha: 1 }, 100);
            target.alpha = 1;
            this.clicked(target);
        } else {
            createjs.Tween.get(target).to({ alpha: 0 }, 100);
            target.alpha = 0;
        }
    }

    //---クリックしたら------------------------------------------
    clicked(target) {
        let clicked = false;
        if (target.on("click", (evt) => {
            this.box.removeChild(target);　//boxコンテナから削除して
            this.collection.addChild(target);　//collectionコンテナに追加
        })) {
            this.scoreTag.textContent = this.score.toString() + "pt";
            clicked = true;
        }
        return clicked;
    }

}