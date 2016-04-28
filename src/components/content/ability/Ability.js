require('./Ability.css');

import React from 'react';

var Ability = React.createClass({
	componentDidMount(){
		var canvas = this.refs.canvas;
		var rect = canvas.getBoundingClientRect();
		var width = rect.width;
		var height = rect.height;
		var ctx = canvas.getContext('2d');
		//这两句是改canvas标签的属性
		canvas.width = width;
		canvas.height = height;

		//中心点
		var centerPoint = {
			x : width / 2,
			y : height / 2
		}
		console.log("center",centerPoint)
		var r = 100;

		// 边数(应该从正下方开始绘制,可以保证奇数边形的尖朝上且偶数边形上面是平的)
		// 若果全部上尖,从90°开始就行了
		var edge = 3;
		var perAngle = 1 / edge;
		var startAngle = 3 / 4 + perAngle / 2;
		console.log(startAngle * 2 * Math.PI)
		console.log(startAngle * 360)
		var posArr = [];
		for(var i = 0 ; i < edge ; i ++){
			var ang = (startAngle + perAngle * i)*2*Math.PI;
			console.log(i,ang * 360)
			var x = centerPoint.x + 50 * Math.cos(ang)
			var y = centerPoint.y - 50 * Math.sin(ang)

			posArr.push({
				x : x,
				y : y
			});
		}
		ctx.fillStyle = '#333';
		ctx.fillRect(0, 0, width, height)
		ctx.lineWidth = 2;

		for(var i = 0 ; i < edge ; i ++){
			var x = posArr[i].x;
			var y = posArr[i].y;
			ctx.moveTo(x, y)
			if(i != posArr.length - 1){
				var nx = posArr[i+1].x;
				var ny = posArr[i+1].y;
				ctx.lineTo(nx, ny);
			}else{
				ctx.lineTo(posArr[0].x, posArr[0].y);
			}		
			
		}

		ctx.stroke();

	},
	render(){
		return <canvas className="ability" ref="canvas"></canvas>
	}
})

export default Ability;