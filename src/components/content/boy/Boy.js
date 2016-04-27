require('./boy.css');
require('./boy.png');

import React from 'react';

// 2D 3D按钮  鼠标拖动可以旋转?
var Boy = React.createClass({
	
	render : function(){
		var display = this.props.display;
		console.log(display)
		var className = 'boy'
		if(display.walk){
			className += ' walk'
		}
		// 这里根据状态生成复杂的类名 比如转身啥的
		// var direction = this.props.boyState.direction;
		// var walking = this.props.boyState.walk;
		// var className = 'boy ' + direction;
		// if (walking) {
		// 	className += ' walk'
		// }
		return (
			<div className={className} id="boy"></div>
        )
	}
})

export default Boy;