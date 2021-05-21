import React from 'react'

export default function Form(props) {
	const { disabled } = props

	return (
		<div>
			<h1>Pizza Form Page</h1>
			<form id='pizza-form'>
				{/* add some error divs! */}

			<div className='formInputs'>
				<label>Name:
					<input id='name-input'/>
				</label>
				<label>Pizza Size:
					<select id='size-dropdown'>

					</select>
				</label>
				
				<label>Toppings:
					<label>Pepperoni
						<input
						
						/>
					</label>

					<label>Sausage
						<input
						
						/>
					</label>

					<label>Mushrooms
						<input
						
						/>
					</label>

					<label>Veggies
						<input
						
						/>
					</label>
				</label>

				<label>Special Instructions:
					<input id='special-text'/>
				</label>
				
			</div>


				<button id='order-button' disabled={null}>Add to Order</button>
			</form>
		</div>
	)
}