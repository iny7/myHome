require('styles/Project.css');

import React from 'react';
import Sidebar from './Sidebar';
//中间区域(导航+内容)
var Project = React.createClass({
	render : function(){
		console.log(this.props)
		console.log(this.props.route)
		return <section className="content">
			<Sidebar/>
		{/*使用路由一定要改这一句才行!然后就可以在Content里拿到当前路由*/}
			{this.props.children}
		</section>
	}
})


export default Project;