import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Info from './components/Info';
import Project from './components/Project';
import Resume from './components/Resume';
import Chess from './components/Chess';
import BookStore from './components/BookStore';
import Ifun from './components/Ifun';
import Calendar from './components/Calendar';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';

// Render the main component into the dom
ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	      <IndexRoute component={Info} />
	      <Route path="project" component={Project}>
	      	<IndexRoute component={Resume} />
	      	<Route path="chess" component={Chess} />
	      	<Route path="bookStore" component={BookStore} />
	      	<Route path="ifun" component={Ifun} />
	      	<Route path="calendar" component={Calendar} />
	      </Route>
	    </Route>
    </Router>,document.querySelector('#app'));
