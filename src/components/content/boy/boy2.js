/**
 * 2016.3.28 iny
 * 小地图里的那个小人就是它了!借用了慕课上七夕那个例子里
 * 的动画素材,希望不会被Aaron老师打死
 */
function Boy(boy){

	var _this = this;

	//当前朝向()
	this.direction = 'right';

	var i = 0;
	this.walk = function(){
		boy.addClass('walk');
	}

	this.stop = function(){
		boy.removeClass('walk')
	}

	this.turnAndWalk = function(){

		if(this.direction === 'right'){
			// console.log('now is right')
			boy.addClass('turnLeft')
			boy.on('animationend', function(event) {
				boy.removeClass('turnLeft')
				boy.addClass('boyLeft')
				boy.addClass('walk');
				//这里原先用的this,发现Controller中的方向并没有改变,原因是这里(匿名函数中)的this是boy的dom节点,而不是定义的对象,所以要在外部保存一个对this的引用
				_this.direction = 'left'

			});
		}else if(this.direction === 'left'){
			// console.log('now is left')
			// boy.css('animation', 'turn 1s steps(1,start) forwards');
			boy.addClass('turnRight')
			boy.on('animationend', function(event) {
				boy.removeClass('turnRight')
				boy.removeClass('boyLeft')
				boy.addClass('walk');
				
				_this.direction = 'right'
			});
		}
		
	}

	//此函数纯属娱乐
	/*this.gun = function(time){
		var style = boy.style.transform;
		boy.style.transition = "all "+time+"s linear";
		boy.style.transform = style+"rotate(-1440deg) ";
	}*/	
	
}