require('./boy.css');
require('./boy.png');

import React from 'react';

// 2D 3D按钮  鼠标拖动可以旋转?
var Boy = React.createClass({
	render : function(){
		return (
			<div class="boy" id="boy"></div>
        )
	}
})

export default Boy;