export class Timeup extends createjs.MovieClip{
    constructor(){
        super();

         //background
        let bg = new createjs.Shape();
        bg.graphics.beginFill("#000000");
        bg.graphics.drawRect(0, 0, 400, 650);
        bg.alpha = 0.6;
        this.addChild(bg);

        //circle
        let c = new createjs.Shape();
        c.graphics.s("LightYellow");
        c.graphics.dc(25,25, 50);　//dc
        c.x = 160;
        c.y = 250;
        c.shadow = new createjs.Shadow("White",  0,  0,  8 );
        this.addChild(c);
        createjs.Tween.get(c, {loop : true})
        .to({ alpha: 1, scale: c.scale * 1.1}, 800,createjs.Ease.cubicOut)
        .to({alpha: 0.5, scale: c.scale / 1.1}, 700,createjs.Ease.cubicIn);


        //文字をかくよ
        let text = new createjs.Bitmap("./images/timeup.png");
        text.x = 190;
        text.y = 278;
        text.regX = 90;
        text.regY = 16;
        this.addChild(text);
             
        createjs.Tween.get(text, {loop : true})
        .to({ alpha: 1, scale: text.scale * 1.1}, 800,createjs.Ease.cubicOut)
        .to({alpha: 0.5, scale: text.scale / 1.1}, 700,createjs.Ease.cubicIn);
            
    }

}