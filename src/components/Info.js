require('styles/Info.css');

import React from 'react';
import Ability from './content/ability/Ability';

var Info = React.createClass({
	render : function(){
		return (
			<section className="info">
				<Ability></Ability>
			</section>
		)
	}
})

export default Info;