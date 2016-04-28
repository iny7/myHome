require('styles/content/Description.css');

import React from 'react';

//存放链接的组件
var Description = React.createClass({
	render(){
		return <section className="description">{this.props.children}</section>
	}
})

export default Description;