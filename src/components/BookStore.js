require('styles/content/BookStore.css');

import React from 'react';

//右侧内容区
var BookStore = React.createClass({
	componentDidMount : function(){
		console.log("msg")
	},
	render : function(){
	console.log(this.props)
		return (
 			<section className="bookStore">图书</section>
        )
	}
})

export default BookStore;