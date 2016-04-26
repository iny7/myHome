require('styles/content/Resume.css');

import React from 'react';
import Boy from './content/boy/Boy';

//有趣的个人简历
var Resume = React.createClass({
	render : function(){
	console.log(this.props)
		return (
 			<section className="resume">
 				<Boy />
 			</section>
        )
	}
})

export default Resume;