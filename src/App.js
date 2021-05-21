import React from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'

const App = () => {
  return (
		<div className='app-container'>
			<nav>
				<h1 className='header'>Lambda Eats</h1>
				<div className='nav-links'>
					<Link to='/'>Home</Link>
					<Link id='order-pizza' to='/pizza'>Order</Link>
				</div>
			</nav>

			<Switch>
				<Route path='/pizza'>
					<Form></Form>
				</Route>

				<Route path='/' component={Home} />

			</Switch>
		</div>
  );
};
export default App;
