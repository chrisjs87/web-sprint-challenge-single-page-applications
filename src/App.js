import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'

const initialFormValues = {
	name: '',
	size: '',
  topping1: false,
  topping2: false,
	topping3: false,
	topping4: false,
  special: ''
}

const initialDisabled = true



const App = () => {

const [formValues, setFormValues] = useState(initialFormValues)
const [disabled, setDisabled] = useState(initialDisabled)



const inputChange = (name, value) => {
	//validation function
	setFormValues({
		...formValues,
		[name]: value
	})
}

const formSubmit = () => {
	const newOrder = {
		name: formValues.name.trim(),
		size: formValues.size,
    topping1: formValues.topping1,
    topping2: formValues.topping2,
		topping3: formValues.topping3,
    topping4: formValues.topping4,
		special: formValues.special.trim()
	}
	console.log(newOrder);
}

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
					<Form
						values={formValues}
						disabled={disabled}
						change={inputChange}
						submit={formSubmit}
					/>
				</Route>

				<Route path='/' component={Home} />

			</Switch>
		</div>
  );
};
export default App;
