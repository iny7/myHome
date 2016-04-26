require('styles/Content.css');

import React from 'react';

//右侧内容区
var Content = React.createClass({
	render : function(){
	console.log(this.props)
		return <section className="content"></section>
	}
})

export default Content;