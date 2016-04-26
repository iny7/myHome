import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Info from './components/Info';
import Project from './components/Project';
import Content from './components/Content';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';

// Render the main component into the dom
ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	      <IndexRoute component={Info} />
	      <Route path="project" component={Project}>
	      	<IndexRoute component={Content} />
	      	<Route path="chess" component={Content} />
	      	<Route path="bookStore" component={Content} />
	      	<Route path="ifun" component={Content} />
	      </Route>
	    </Route>
    </Router>,document.querySelector('#app'));
