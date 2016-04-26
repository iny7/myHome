require('styles/content/Calendar.css');

import React from 'react';

//右侧内容区
var Calendar = React.createClass({
	componentDidMount : function(){
		console.log("msg")
	},
	render : function(){
	console.log(this.props)
		return (
 			<section className="calendar">图书</section>
        )
	}
})

export default Calendar;