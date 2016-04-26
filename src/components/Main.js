require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './Header';
import Footer from './Footer';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
		<div className="container">
			<Header />
			{this.props.children}
			<Footer />
		</div>
	)
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
