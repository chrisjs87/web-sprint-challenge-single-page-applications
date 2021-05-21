import React from "react";
import { Route, Link, Switch } from 'react-router-dom'

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
		</div>
  );
};
export default App;
