require('styles/Header.css');

import React from 'react';
import {Link, IndexLink } from 'react-router';

//页头
var Header = React.createClass({
	getDefaultProps : function(){
		return {
			title : '页头'
		}
	},
	render : function(){
		return (<header className="header">
			<i className="logo">LOGO</i>
			<ul>
				<li><IndexLink activeClassName="active" to={"/"}>了解我</IndexLink></li>
				<li><Link activeClassName="active" to={"/project"}>作品展示</Link></li>
				<li><a href="">GitHub</a></li>
			</ul>
		</header>)
	}
})

export default Header;