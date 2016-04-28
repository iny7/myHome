require('./Ability.css');

import React from 'react';

var Ability = React.createClass({
	getDefaultProps(){
		return {
			
		}
	},
	getInitialState() {
		return {
			data :[0.5, 0.7, 0.4, 0.6, 0.8,0.9,0.5]
		}
	},
	//初始化画板背景
	drawBg(){
		var canvas = this.refs.canvas;
		var rect = canvas.getBoundingClientRect();
		var width = rect.width;
		var height = rect.height;
		var ctx = canvas.getContext('2d');
		//这两句是改canvas标签的属性
		canvas.width = width;
		canvas.height = height;
		//边数	
		var edge = 7;
		//层数
		var layers = 3;
		//中心点
		var centerPoint = {
			x : width / 2,
			y : height / 2
		}
		
		//先画背景
		
		ctx.fillStyle = '#66A1D2';
		ctx.fillRect(0, 0, width, height)
		console.log("center",centerPoint)
		var r = 200;

		// 边数
		// 若果全部上尖,从90°开始就行了
		
		var perAngle = 1 / edge;
		// 起始角度,应该从正下方开始绘制,可以保证奇数边形的尖朝上且偶数边形上面是平的)
		var startAngle = 3 / 4 + perAngle / 2;
		// console.log(startAngle * 2 * Math.PI)
		// console.log(startAngle * 360)
		var posArr = [];
		var dataArr = [];

		
		ctx.strokeStyle = '#3F8FD2'
		ctx.beginPath();
		for(var i = 0 ; i < edge ; i ++){
			
			var ang = (startAngle + perAngle * i)*2*Math.PI;
			// console.log(i,ang * 360)
			

			var x = centerPoint.x + r * Math.cos(ang)
			var y = centerPoint.y - r * Math.sin(ang)

			//中点和每个顶点连线
			ctx.moveTo(centerPoint.x, centerPoint.y);
			ctx.lineTo(x, y);
			
			//把每一层中各个顶点的位置计算出来
			posArr[i] = [];
			for(var j = 1 ; j <= layers ; j ++){
				posArr[i].push({
					x : centerPoint.x + r * Math.cos(ang) * j / layers,
					y : centerPoint.y - r * Math.sin(ang) * j / layers,
				});	
			}
			
			//根据传入的数据计算数据点的位置
			var dx = centerPoint.x + r * Math.cos(ang) * this.state.data[i];
			var dy = centerPoint.y - r * Math.sin(ang) * this.state.data[i];
			dataArr.push({
				x : dx,
				y : dy
			})
		}
		ctx.closePath();
		ctx.stroke();
		
		console.log(posArr)
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
		
		ctx.strokeStyle = 'red'
		ctx.fillStyle = 'RGBA(255,0,0,0.3)'
		// var count = 0;
		// var timer = setInterval(function(){
			// ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
			ctx.beginPath();
			ctx.moveTo(dataArr[0].x, dataArr[0].y)
			for(var i = 1 ; i < edge ; i ++){
				var x = dataArr[i].x;
				var y = dataArr[i].y;
				ctx.lineTo(x, y);
						
			}
			ctx.closePath();
			ctx.stroke();
			ctx.fill()
			
			// if(count ++ == 100){
				// clearInterval(timer);
			// }
		// },100)

		
		
	},

	componentDidMount(){
		this.drawBg();
	},
	render(){
		var data = this.state
		return <canvas className="ability" ref="canvas"></canvas>
	}
})

export default Ability;