import React from 'react'

export default function Form(props) {
	const { values, disabled, change, submit, errors } = props

	const onSubmit = evt => {
		evt.preventDefault()
		submit()
	}

	const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

	return (
		<div>
			<h1>Pizza Form Page</h1>
			<form id='pizza-form' onSubmit={onSubmit}>
			
			<div>{errors.name}</div>

			<div className='formInputs'>
				<label>Name:
					<input 
						id='name-input'
						value={values.name}
						onChange={onChange}
						type='text'
						name='name'
					/>
				</label>
				<label>Pizza Size:
					<select 
						id='size-dropdown'
						onChange={onChange}
            value={values.size}
            name='size'
					>
						<option value='small'>Small</option>
						<option value='medium'>Medium</option>
						<option value='large'>Large</option>
					</select>
				</label>
				
				<label>Toppings:
					<label>Pepperoni
						<input
							type='checkbox'
							name='topping1'
							checked={values.topping1}
							onChange={onChange}
						/>
					</label>

					<label>Sausage
						<input
							type='checkbox'
							name='topping2'
							checked={values.topping2}
							onChange={onChange}
						/>
					</label>

					<label>Mushrooms
						<input
							type='checkbox'
							name='topping3'
							checked={values.topping3}
							onChange={onChange}
						/>
					</label>

					<label>Veggies
						<input
							type='checkbox'
							name='topping4'
							checked={values.topping4}
							onChange={onChange}
						/>
					</label>
				</label>

				<label>Special Instructions:
					<input 
						id='special-text'
						value={values.special}
						onChange={onChange}
						type='text'
						name='special'
					/>
				</label>
			</div>


				<button id='order-button' disabled={disabled}>Add to Order</button>
			</form>
		</div>
	)
}