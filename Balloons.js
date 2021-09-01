(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Balloons_atlas_", frames: [[1268,1052,674,458],[2025,0,10,419],[1808,836,124,20],[751,567,771,483],[0,0,749,579],[751,0,715,565],[0,581,644,540],[646,1052,620,518],[1468,0,555,468],[0,1123,555,413],[1268,1512,536,366],[1524,470,482,364],[0,1769,620,176],[1806,1744,178,268],[1806,1512,221,230],[0,1572,753,195],[622,1769,594,167],[1524,836,282,84]]}
];


// symbols:



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение1 = function() {
	this.initialize(ss["Balloons_atlas_"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ropee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ropee, new cjs.Rectangle(0,0,5,209.5), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Растровоеизображение1();
	this.instance.setTransform(18,0);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,310,88), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,89,134), null);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.text = new cjs.Text("ПОПРОБОВАТЬ СНОВА", "32px 'Times New Roman'", "#20497D");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 372;
	this.text.parent = this;
	this.text.setTransform(0,27.35);

	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-62,-102.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-102.1,376,204.3);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-161.15,-41.8,0.4283,0.4283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,-41.8,322.5,83.6);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-148.5,-41.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.5,-41.8,297,83.5);


(lib.win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Анимация2("synched",0);
	this.instance.setTransform(161.2,41.85,0.0446,0.0446);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},5).to({scaleY:1.1673,y:11.85},2).to({scaleY:1,y:20.85},4).to({y:41.85},3).to({scaleY:0.8447,y:46.4},2).to({scaleY:1,y:41.85},2).to({startPosition:0},16).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-36.9,322.5,120.5);


(lib.tryuagain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(188,361.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.992,y:331.7},0).wait(1).to({scaleX:0.984,x:188.05,y:302.3},0).wait(1).to({scaleX:0.9761,y:272.85},0).wait(1).to({scaleX:0.9681,x:188,y:243.4},0).wait(1).to({regX:0.1,scaleX:0.9744,x:188.1,y:213.95},0).wait(1).to({scaleX:0.9808,y:184.5},0).wait(1).to({regX:0,scaleX:0.9872,x:187.95,y:155.1},0).wait(1).to({scaleX:0.9936,y:125.65},0).wait(1).to({scaleX:1,x:188,y:96.2},0).wait(1).to({scaleY:0.9608,x:188.05},0).wait(1).to({scaleY:0.9217,x:188},0).wait(1).to({regX:0.1,scaleY:0.9478,x:188.05},0).wait(1).to({regY:0.1,scaleY:0.9739,x:188,y:96.3},0).wait(1).to({regX:0,regY:0,scaleY:1,y:96.2},0).wait(1));

	// Слой_2
	this.instance_1 = new lib.CachedBmp_18();
	this.instance_1.setTransform(24,237.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-5.9,376.20000000000005,472.79999999999995);


(lib.loser = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(148.5,-376.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,scaleX:0.8048,scaleY:0.8569,y:-163.2},5).to({regY:0,scaleX:1,scaleY:0.7139,y:49.85},5).to({scaleY:1,y:41.85},3).to({regY:0.1,scaleY:0.9642,y:42.45},2).to({regY:0,scaleY:1,y:41.85},2).to({startPosition:0},17).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-417.9,297,501.4);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.Символ2();
	this.instance.setTransform(155,44,1,1,0,0,0,155,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9484,scaleY:0.9484,x:155.05,y:44.05},6).to({scaleX:1,scaleY:1,x:155,y:44},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310,88);


(lib.balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.setTransform(44.5,173.3,1,1,0,0,0,44.5,173.3);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(-75.75,-18.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_7();
	this.instance_2.setTransform(-88.85,-17.75,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_8();
	this.instance_3.setTransform(-98.65,-29.55,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_9();
	this.instance_4.setTransform(-98.65,-32.6,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_10();
	this.instance_5.setTransform(-116.85,-47.5,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_11();
	this.instance_6.setTransform(-129.9,-47.5,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_12();
	this.instance_7.setTransform(-159.2,-54.3,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_13();
	this.instance_8.setTransform(-163.9,-57.3,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_14();
	this.instance_9.setTransform(-174.7,6.15,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_15();
	this.instance_10.setTransform(-17.55,115.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:67,scaleX:0.9251,x:44.45,y:67},0).wait(1).to({scaleX:0.8502,x:44.5},0).wait(1).to({scaleX:0.7753,x:44.45},0).wait(1).to({scaleX:0.8502,x:44.5},0).wait(1).to({scaleX:0.9251,x:44.45},0).wait(1).to({scaleX:1,x:44.5},0).wait(1).to({scaleX:0.9438},0).wait(1).to({scaleX:0.8876},0).wait(1).to({scaleX:1.6291,x:44.55},0).wait(1).to({scaleX:2.3706},0).wait(1).to({_off:true},1).wait(11));

	// Слой_3
	this.instance_11 = new lib.CachedBmp_17();
	this.instance_11.setTransform(42.8,132.05,0.5,0.5);

	this.instance_12 = new lib.ropee();
	this.instance_12.setTransform(45.3,241.85,1,1,0,0,0,2.5,104.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},12).to({state:[{t:this.instance_12}]},9).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12).to({_off:false},0).to({regY:104,scaleY:0.0317,y:343.35},9).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.7,-57.3,385.5,404);


// stage content:
(lib.project = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		let balloons = [this.balloon, this.balloon2, this.balloon3, this.balloon4, this.balloon5, this.balloon6, this.balloon7, this.balloon8, this.balloon9, this.balloon10];
		let winText = this.winText;
		let loseText = this.loseText;
		let start_btn = this.start_btn;
		let start_quote = this.start_quote;
		let tryagainIcon = this.tryagainIcon;
		let score = this.score;
		let points = 0;
		let isPopped = false;
		let isStarted = false;
		let isOver = false;
		let balloonSpeed = 10;
		
		winText.visible = false;
		loseText.visible = false;
		score.text = `Очки: ${points}`;
		
		//Кнопка старта для запуска функции старта игры
		start_btn.addEventListener("click", beginGame.bind(this));
		tryagainIcon.addEventListener("click", restartGame.bind(this))
		
		
		function restartGame() {
			location.reload();
		}
		
		//Функция старта игры
		function beginGame() {
			if(isStarted == false) {
			points = 0;
			balloonSpeed = 10;	
			this.addEventListener("tick", balloonFly.bind(this));
			let sceneTime = setTimeout(function() {
				if(isOver == false) {
						gameOver();
				}
		}, 11000);
		start_quote.visible = false;
		start_btn.visible = false;
		createjs.Sound.play("bgMusicSFX");
		isStarted = true;
		}
		}
		
		balloonPop();
		animReset();
		
		function animReset()
		{
			for(let i = 0 ; i < 10; i++) {
				balloons[i].stop();
			}
			loseText.stop();
			winText.stop();
			tryagainIcon.stop();
		}
		
		//Движение шаров и прочие события, происходящие каждый кадр.
		function balloonFly()
		{
			for(let i = 0 ; i < 10; i++) {
				balloons[i].y -= balloonSpeed;
				if(balloons[i].currentFrame == 22){
					balloons[i].stop();
					balloons[i].visible = false;
				}
			}
			//Удаление зацикливания на анимации конечного текста. Использовал в этой функции, потому что она выполняется каждый кадр
					if(loseText.currentFrame == 34) {
					loseText.stop();
				}
				if(winText.currentFrame == 34) {
					winText.stop();
				}
				if(tryagainIcon.currentFrame == 30) {
					tryagainIcon.stop();
				}
				if(points >= 10 && isOver == false) {
					isOver = true;
					setTimeout(function() {
					gameOver();
					}, 1000);
				}
		}
		
		
		//Лопанье шаров и обновление счёта
		function balloonPop() {
			for(let i = 0 ; i < 10; i++) {
				balloons[i].addEventListener("click", function() {
					if(balloons[i].currentFrame == 0) {
					balloons[i].play();
					points++;
					balloonSpeed += 1;
					score.text = `Очки: ${points}`;
					setTimeout(function() {
						createjs.Sound.play("popSFX");
					}, 300);
				}
				})
			}
		}
		
		
		
		//Завершение игры и подсчёт очков
		function gameOver() {
			isStarted = false;
			if(points === 10) {
				winText.visible = true;
				score.visible = false;
				winText.play();
				tryagainIcon.play();
						setTimeout(function() {
							createjs.Sound.stop("bgMusicSFX");
						createjs.Sound.play("winSFX");
					}, 300);
			}
			else {
				loseText.visible = true;
				score.visible = false;
				loseText.play();
				tryagainIcon.play();
						setTimeout(function() {
							createjs.Sound.stop("bgMusicSFX");
						createjs.Sound.play("winSFX");
					}, 300);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// intrfc
	this.tryagainIcon = new lib.tryuagain();
	this.tryagainIcon.setTransform(258,661.1,1,1,0,0,0,188,102.2);

	this.text = new cjs.Text("", "32px 'TimesNewRomanPSMT'", "#323232");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.parent = this;
	this.text.setTransform(-403.95,201.45);

	this.start_quote = new cjs.Text("Для победы в этой игре, необходимо лопнуть все 10 шариков. Чтобы начать, нажми кнопку ниже.", "32px 'Times New Roman'", "#134688");
	this.start_quote.name = "start_quote";
	this.start_quote.textAlign = "center";
	this.start_quote.lineHeight = 37;
	this.start_quote.lineWidth = 449;
	this.start_quote.parent = this;
	this.start_quote.setTransform(248.3,168);

	this.start_btn = new lib.button();
	this.start_btn.setTransform(252.05,398.1,1,1,0,0,0,155,44);

	this.loseText = new lib.loser();
	this.loseText.setTransform(258.4,385.05,1,1,0,0,0,148.5,41.9);

	this.score = new cjs.Text("", "72px 'Times New Roman'", "#00204C");
	this.score.name = "score";
	this.score.lineHeight = 82;
	this.score.parent = this;
	this.score.setTransform(17.5,18.9,0.5221,0.5221);

	this.winText = new lib.win();
	this.winText.setTransform(248.1,363.05,1,1,0,0,0,139.2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.winText},{t:this.score},{t:this.loseText},{t:this.start_btn},{t:this.start_quote},{t:this.text},{t:this.tryagainIcon}]}).wait(1));

	// Scene
	this.balloon10 = new lib.balloon();
	this.balloon10.setTransform(232.8,3269.45,1,1,0,0,0,44.5,191);

	this.balloon9 = new lib.balloon();
	this.balloon9.setTransform(136.5,3020.45,1,1,0,0,0,44.5,191);

	this.balloon8 = new lib.balloon();
	this.balloon8.setTransform(206.5,2765.5,1,1,0,0,0,44.5,191);

	this.balloon7 = new lib.balloon();
	this.balloon7.setTransform(102.15,2521.5,1,1,0,0,0,44.5,191);

	this.balloon6 = new lib.balloon();
	this.balloon6.setTransform(354.85,2326.8,1,1,0,0,0,44.5,191);

	this.balloon5 = new lib.balloon();
	this.balloon5.setTransform(123.15,2008.9,1,1,0,0,0,44.5,191);

	this.balloon4 = new lib.balloon();
	this.balloon4.setTransform(344.05,1781,1,1,0,0,0,44.5,191);

	this.balloon3 = new lib.balloon();
	this.balloon3.setTransform(123.15,1487.1,1,1,0,0,0,44.5,191);

	this.balloon = new lib.balloon();
	this.balloon.setTransform(102.15,1067.35,1,1,0,0,0,44.5,191);

	this.balloon2 = new lib.balloon();
	this.balloon2.setTransform(344.05,1262.25,1,1,0,0,0,44.5,191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.balloon2},{t:this.balloon},{t:this.balloon3},{t:this.balloon4},{t:this.balloon5},{t:this.balloon6},{t:this.balloon7},{t:this.balloon8},{t:this.balloon9},{t:this.balloon10}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,325.2,633.8,3094.8);
// library properties:
lib.properties = {
	id: 'DF0A77944B1B354C9240AA3187656275',
	width: 500,
	height: 800,
	fps: 30,
	color: "#EFEFEF",
	opacity: 1.00,
	manifest: [
		{src:"images/Balloons_atlas_.png", id:"Balloons_atlas_"},
		{src:"sounds/popSFX.mp3", id:"popSFX"},
		{src:"sounds/bgMusicSFX.mp3", id:"bgMusicSFX"},
		{src:"sounds/winSFX.mp3", id:"winSFX"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DF0A77944B1B354C9240AA3187656275'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;