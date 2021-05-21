import React from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
		<div className='app-container'>
			<nav>
				<h1 className='header'>Lambda Eats</h1>
				<div className='nav-links'>
					<Link to='/'>Home</Link>
					<Link to='/items-list'>Order</Link>
				</div>
			</nav>

			<Switch>
				<Route>
					
				</Route>

				<Route path='/' component={Home} />

			</Switch>
		</div>
  );
};
export default App;
