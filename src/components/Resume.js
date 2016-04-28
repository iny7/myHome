/*
 * 个人简历页面
 * 2016.4.27 by iny
 * 虽然是第一个开发的tab,但这个可能是最复杂的,
 * 尤其注意react下全局事件的使用(利用生命周期)(如键盘事件,仅对某个react组件使用往往不能满足需求)
 */

require('styles/content/Resume.css');

import React from 'react';
import Map from './content/map/Map';
import Description from './content/Description';


//有趣的个人简历
var Resume = React.createClass({
	//组件通信方法1:
	//父组件监听事件并根据事件内容改变自身状态,然后在render时给将状态传给子组件,子组件相应根据接收到的props处理
	//组件通信方法2:
	//子组件自己监听事件,并在处理函数里改变自己的state
	//这里用法2,因为Resume本身并不需要使用state来处理他的其他子组件
	//而对于Map,使用方法1,因为它要根据自身的state渲染它的子组件boy
	boyWalk(){
		this.refs.map.walk();
	},
	boyStop(){
		this.refs.map.stop();
	},
	boyLeft(){
		this.refs.map.left();
	},
	boyRight(){
		this.refs.map.right();
	},
	render : function(){
		return (
 			<section className="resume">
 				<section className="showBox">
 					<Map ref="map" />
 					<button onClick={this.boyWalk}>走</button>
 					<button onClick={this.boyStop}>停</button>
 					<button onClick={this.boyLeft}>左转</button>
 					<button onClick={this.boyRight}>右转</button>
 				</section>
 				<Description>
 					<p>这是一个使用jQuery开发的全屏页面，运动了一些CSS3动画实现了页面间的平滑过渡，小地图的伪3D样式，以及缩略图效果，开发中对数组操作和事件（键盘、触屏和触摸板）进行了简单的封装以便复用（Seven.js）</p>
	 				<div className="address">
		 				<a className="" href="">在线演示</a>
		 				<a className="" href="">查看源码</a>
	 				</div>
 				</Description>
 			</section>
        )
	}
})

export default Resume;