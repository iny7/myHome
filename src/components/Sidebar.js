require('styles/Sidebar.css');

//左侧导航条
import React from 'react';
import {Link, IndexLink } from 'react-router';

var Sidebar = React.createClass({
	render : function(){
		return (
		<nav className="sidebar">
			<ul className="menu">
	          <li><IndexLink activeClassName="active" to="/project">好玩的简历</IndexLink></li>
	          <li><Link activeClassName="active" to="/project/chess">五子棋</Link></li>
	          <li><Link activeClassName="active" to="/project/bookStore">图书管理</Link></li>
	          <li><Link activeClassName="active" to="/project/ifun">IFUN学生信息系统</Link></li>
	          <li><Link activeClassName="active" to="/project/calendar">日历组件</Link></li>
	     	</ul>
		</nav>)
	}
})

export default Sidebar;