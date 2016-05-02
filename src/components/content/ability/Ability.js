require('./Ability.css');

import React from 'react';

var Ability = React.createClass({
	getDefaultProps(){
		return {
			width : 600,
			height : 600,
		}
	},
	getInitialState() {
		return {
			data :[
				{
					name : 'CSS',
					value : 0.7
				},
				{
					name : 'effort',
					value : 0.8
				},
				{
					name : 'java',
					value : 0.5
				},
				{
					name : 'js',
					value : 0.6
				},
				{
					name : 'HTML',
					value : 0.7
				},
			]
		}
	},
	drawBg(ctx, width, height, edge, layers, r){
		var color = ['#5783CE','#81A7E6','#9CB8E6']
		//画整体背景色
		ctx.fillStyle = '#66A1D2';
		// ctx.fillRect(0, 0, width, height)
		//从外向里画每一层背景色
		ctx.strokeStyle = '#3F8FD2'
		ctx.beginPath();

		var perAngle = 1 / edge;
		// 起始角度,应该从正下方开始绘制,可以保证奇数边形的尖朝上且偶数边形上面是平的 若果全部上尖,从90°开始就行了)
		var startAngle = 3 / 4 + perAngle / 2;
		
		//计算每个顶点与x轴正向的夹角角度
		var angleArr = [];
		for(var i = 0 ; i < edge ; i ++){
			angleArr[i] = (startAngle + perAngle * i)*2*Math.PI;
		}


		ctx.translate(width / 2, height / 2);
		var posArr = [];
		var dataArr = [];
		var MaxLayerPos = [];
		//对每一层,分别计算它的每一条边,绘制由外向内绘制改层
		for(var i = layers ; i > 0 ; i --){
			
			var layerR = r * i / layers;
			
			ctx.fillStyle = color[i-1];
			ctx.beginPath();
			
			//计算该层的各个顶点
			for(var j = 0 ; j < edge ; j ++){
				var ang = angleArr[j];
				var posX = layerR * Math.cos(ang);
				var posY = layerR * Math.sin(ang);
				if(i == layers){
					MaxLayerPos.push({
						x : posX,
						y : posY
					})
				}

				//该层第一个点作为起点
				if(j == 0){
					ctx.moveTo(posX, posY);	
				}else{
				//向其他顶点依次连接
					ctx.lineTo(posX, posY);
				}
			}
			ctx.closePath();
			//先画底色再画边
			ctx.fill();
			ctx.stroke();

		}
		ctx.strokeStyle = '#5A8EC3'
		ctx.beginPath();

		//画中点到各个顶点的连线
		ctx.font = '30px Microsoft Yahei'
		
		var data = this.state.data;
		data.forEach(function(item, index){
			var temp = MaxLayerPos[index];
			ctx.moveTo(0, 0)
			if(temp.x < 0){
				ctx.textAlign = 'end'
			}else if(temp.x == 0){
				console.log("msg")
				ctx.textAlign = 'center'
			}else{
				ctx.textAlign = 'start'
			}

			if(temp.y < 0){
				ctx.textBaseline = 'bottom'
			}else if(temp.y == 0){
				ctx.textBaseline = 'middle'
			}else{
				ctx.textBaseline = 'top'
			}
			ctx.lineTo(temp.x, temp.y);
			ctx.fillText(item['name'], temp.x, temp.y);
			ctx.stroke();
		})
		
	},
	
	//初始化画板背景
	/* init(){

		
		
		//移动原点到画布的中点
		ctx.translate(width/2, height/2);
		
		

		ctx.lineWidth = 2;
			
		// ctx.moveTo(posArr[0].x * j / layers, posArr[0].y * j / layers)

		ctx.strokeStyle = '3F8FD2'
		//根据存放各层顶点位置的数组绘制每一层
		for(var i = 0 ; i < layers ; i ++){
			
			ctx.beginPath();
			var startPos = posArr[0][i];
			ctx.moveTo(startPos.x , startPos.y);
			for(var j = 0 ; j < edge ; j ++){
				var point = posArr[j][i];
				ctx.lineTo(point.x, point.y);
			}
			ctx.closePath();
			ctx.stroke();
		}
		console.log("msg")

		//根据数据绘制
		
		
		//不要改state,做动画就做动画,没有用户操作的时候改state干嘛,各种触发生命周期 一团糟
			// 能否用这两个API 画完背景以后sava 然后画一次数据就restore到没数据的状态 再画下一个状态 这样不用每次都清空画布了 节约资源
			// save()	保存当前环境的状态 是变换状态!不是画布本身
			// restore()	返回之前保存过的路径状态和属性
		// ctx.save();

		
		*/
	// 用子画布绘制动画 避免大面积重绘
	drawFg(ctx, width, height, edge, layers, r){
		
		var data = this.state.data;
		var abc = 1;
		var timer = setInterval(function(){
			if(abc > 10){
				clearInterval(timer)
			}
			ctx.save();

			ctx.clearRect(0, 0, 2*r, 2*r)
			ctx.translate(r, r)
			console.log(abc)
			ctx.scale(abc / 10, abc / 10);
			abc ++;


			var perAngle = 1 / edge;
			// 起始角度,应该从正下方开始绘制,可以保证奇数边形的尖朝上且偶数边形上面是平的 若果全部上尖,从90°开始就行了)
			var startAngle = 3 / 4 + perAngle / 2;
			
			
			ctx.strokeStyle = 'red'
			ctx.fillStyle = 'RGBA(255,0,0,0.3)'
			//计算每个顶点与x轴正向的夹角角度
			var angleArr = [];
			ctx.beginPath();
			//根据传入的数据计算数据点的位置
			for(var i = 0 ; i < edge ; i ++){
				var ang = (startAngle + perAngle * i)*2*Math.PI;
				var posX = r * Math.cos(ang) * data[i].value;
				var posY = r * Math.sin(ang) * data[i].value;
				console.log(posX,posY)
				//该层第一个点作为起点
				if(i == 0){
					ctx.moveTo(posX, posY);	
				}else{
				//向其他顶点依次连接
					ctx.lineTo(posX, posY);
				}
			}
			ctx.closePath();
			console.log("msg")
			ctx.stroke();
			ctx.fill();
			ctx.restore();
		},50)
		
		
		/*
		//MDN说  有动画，请使用window.requestAnimationFrame() 而非window.setInterval()
		window.requestAnimFrame = (function(){
		  return  window.requestAnimationFrame       ||
		          window.webkitRequestAnimationFrame ||
		          window.mozRequestAnimationFrame    ||
		          function( callback ){
		            window.setTimeout(callback, 1000 / 60);
		          };
		})();



		

		console.log(t)
		ctx.clearRect(-r, -r, 2*r, 2*r);
		ctx.save();
		ctx.scale(propagation, propagation);

		ctx.beginPath();
		ctx.moveTo(dataArr[0].x, dataArr[0].y)
		for(var i = 1 ; i < edge ; i ++){
			var x = dataArr[i].x;
			var y = dataArr[i].y;
			ctx.lineTo(x, y);
		}
		ctx.closePath();
		ctx.stroke();
		

		ctx.restore();
		if(propagation < 1){
			propagation += 0.1;
			requestAnimationFrame(drawFg)	
		}
		
		
		//用scale做放大如何
		var propagation = 0;
		requestAnimationFrame(drawFg)*/
		
		
		// var t = 0;
		// var timer = setInterval(function(){
		// 	t += 0.1
		// 	console.log(t)
			
		// 	ctx.clearRect(-r, -r, 2*r, 2*r);
		// 	ctx.save();
		// 	ctx.scale(t, t);
		// 	drawFg();
		// 	ctx.restore();
		// 	if(t >= 1){
		// 		clearInterval(timer)
		// 	}
		// },500)
		// function drawFg(){
		// 	console.log("msg")
		// 	// ctx.clearRect(-r, -r, 2*r, 2*r);
		// 	ctx.restore();
		// 	console.log(propagation)
		// 	ctx.scale(.9, .8)
			
		// 	propagation += 0.1
		// 	if(propagation <= 1){
				
		// 	}
		// }
		// requestAnimFrame(drawFg);
		

	},

	componentDidMount(){
		console.log("didmount")
		var canvas = this.refs.back;
		var rect = canvas.getBoundingClientRect();
		var width = rect.width;
		var height = rect.height;
		var ctx = canvas.getContext('2d');
		
		//这两句是改canvas标签的属性
		canvas.width = width;
		canvas.height = height;

		//边数	
		var edge = 5;
		//层数
		var layers = 3;
		//外切圆半径
		var r = 200;

		this.drawBg(ctx, width, height, edge, layers, r);

		var canvas2 = this.refs.front;
		var ctx2 = canvas2.getContext('2d');
		canvas2.style.left = width / 2 - r + 'px';
		canvas2.style.top = height / 2 - r + 'px';
		canvas2.width = 2 * r;
		canvas2.height = 2 * r;

		this.drawFg(ctx2, width, height, edge, layers, r);
		//这里初始化参数 下面那个根据参数绘制?
		
	},
	componentWillUpdate(nextProps, nextState){
		console.error("willupdate")
		
	},
	render(){
		
		//DidMount画背景(整个生命周期只画1次即可
		//render画数据(不断更新)
		return	<div className="ability">
			<canvas ref="back" className="back"></canvas>
			<canvas ref="front" className="front"></canvas>
		</div>
		 
	}
})

export default Ability;