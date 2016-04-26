require('styles/content/Chess.css');

import React from 'react';

//右侧内容区
var Chess = React.createClass({
	render : function(){
	console.log(this.props)
		return (
 			<section className="chess">五子棋</section>
        )
	}
})

export default Chess;