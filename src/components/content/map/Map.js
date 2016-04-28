require('./map.css');
require('./wall.jpeg');
require('./floor.jpg');

import React from 'react';
import Boy from '../boy/Boy';

// 2D 3D按钮  鼠标拖动可以旋转?
var Map = React.createClass({
	getDefaultProps : function(){
		return {
			arr : [
				[1, 0, 0],
				[1, 1, 0],
				[0, 1, 1],
			]
		}
	},
	getInitialState : function(){
		return {
			curPos : {
				i : 0,
				j : 0
			},
			boy : {
				direction : 'right',
				walk : true
			}
		}
	},
	handleKeyDown : function(e){
		var code = e.keyCode
		if(code < 37 || code > 40)
			return;

		e.preventDefault();
		var arr = this.props.arr;
		var pos = this.state.curPos;
		var i = pos.i;
		var j = pos.j;
		switch (code){
			case 37 : //left
				console.log("left");
				if(arr[i][j-1] && arr[i][j-1] == 1){
					//还要通知boy该移动了!
					var state = this.state;
					state.curPos = {
						i : i,
						j : j - 1
					}
					this.setState(state)
				}
				break;
			case 38 : //top
				console.log("top");
				if(arr[i-1] && arr[i-1][j] == 1){
					var state = this.state;
					state.curPos = {
						i : i - 1,
						j : j
					}
					this.setState(state)
				}
				break;
			case 39 : //right
				console.log("right");
				if(arr[i][j+1] && arr[i][j+1] == 1){
					var state = this.state;
					state.curPos = {
						i : i,
						j : j + 1
					}
					this.setState(state)
				}
				break;
			case 40 : //down
				console.log("down");
				if(arr[i+1] && arr[i+1][j] == 1){
					var state = this.state;
					state.curPos = {
						i : i + 1,
						j : j
					}
					this.setState(state)
				}
				break;
			default :
				break;
			return;
		}
	},
	componentDidMount(){
		//KeyDown中返回的是键盘的代码, 而KeyPress返回的是ASCII字符
		//上下左右的时候keydown
		//控制台提示我注意不用band(this)
		window.addEventListener('keydown', this.handleKeyDown)
	},
	componentWillUnmount(){
		window.removeEventListener('keydown', this.handleKeyDown)
	},
	left : function(){
		this.setState({
			mapState : {
				direction : 'left',
				walk : false
			}	
		})
	},
	right : function(){
		this.setState({
			mapState : {
				direction : 'right',
				walk : false
			}	
		})
	},
	walk : function(){
		var state = this.state;
		state.boy.walk = true;
		this.setState(state);
	},
	stop : function(){
		var state = this.state;
		state.boy.walk = false;
		this.setState(state);
	},
	getContainerStyle(){
		var pos = this.state.curPos;
		var y = pos.i * 100 + '%';
		var x = pos.j * 100 + '%';
		var style = {
			transition : 'transform 1s',
			transform :	'translate('+x+','+y+')'
		}
		return style;
	},
	render : function(){
		var style = this.getContainerStyle()
		console.log(style)
		return (
			<section className="map" data-map="tinyMap">
				<ol>
					<li className="cell">1</li>
					<li className="cell">2</li>
					<li className="cell">3</li>
					<li className="cell">4</li>
					<li className="cell">5</li>
					<li className="cell">6</li>
					<li className="cell">7</li>
					<li className="cell">8</li>
					<li className="cell">9</li>
				</ol>
				<div style={style} className="cell cell-border" data-map="cell-border">
					<div className="boy-container">
						<Boy display={this.state.boy}/>
					</div>
				</div>
			</section>
        )
	}
})

export default Map;