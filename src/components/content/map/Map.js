require('./map.css');

import React from 'react';

// 2D 3D按钮  鼠标拖动可以旋转?
var Map = React.createClass({
	render : function(){
	console.log(this.props)
		return (
			<section class="map" data-map="tinyMap">
				<div class="cell cell-border" data-map="cell-border">
					<div class="boy-container">
						<div class="boy" id="boy"></div>
					</div>
				</div>
			</section>
        )
	}
})