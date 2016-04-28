require('./Ability.css');

import React from 'react';

var Ability = React.createClass({
	getDefaultProps(){
		return {
			centerPoint = {
				x : width / 2,
				y : height / 2
			}
	},
	getInitialState(){
		return {

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

		//中心点
		var 
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

		ctx.beginPath();
		ctx.moveTo(posArr[0].x, posArr[0].y)
		for(var i = 1 ; i < edge ; i ++){
			var x = posArr[i].x;
			var y = posArr[i].y;
			ctx.lineTo(x, y);
					
		}
		ctx.closePath();
		ctx.stroke();
	},

	componentDidMount(){
		this.drawBg();		
	},
	render(){
		return <canvas className="ability" ref="canvas"></canvas>
	}
})

export default Ability;