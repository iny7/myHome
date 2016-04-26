require('styles/content/Ifun.css');

import React from 'react';

//右侧内容区
var Ifun = React.createClass({
	render : function(){
	console.log(this.props)
		return (
 			<section className="ifun">学生</section>
        )
	}
})

export default Ifun;