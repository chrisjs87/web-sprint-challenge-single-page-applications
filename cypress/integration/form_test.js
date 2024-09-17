describe('Form Test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/pizza')
	})

	const	nameInput = () => cy.get('input[name=name]')
	const specialInput = () => cy.get('input[name=special]')

	const top1 = () => cy.get('input[name=topping1]')
	const top2 = () => cy.get('input[name=topping2]')
	const top3 = () => cy.get('input[name=topping3]')
	const top4 = () => cy.get('input[name=topping4]')

	const submitBtn = () => cy.get('button[id=order-button]')

	it('Can add text into text inputs', () => {
		nameInput()
			.should('have.value', '')
			.type('Chris')
			.should('have.value', 'Chris')
		specialInput()
			.should('have.value', '')
			.type('These are special instructions')
			.should('have.value', 'These are special instructions')
	})

	it('Can select multiple toppings', () => {
		top1().click()
		top2().click()
		top3().click()
		top4().click()

		top1().click()
		top2().click()
		top3().click()
		top4().click()
	})

	it('Can submit form', () => {
		nameInput().type('Chris')
		top1().click()
		top2().click()
		top3().click()
		top4().click()
		specialInput().type('These are special instructions')

		submitBtn().click()
	})
})