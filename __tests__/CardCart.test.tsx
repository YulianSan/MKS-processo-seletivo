import { render, screen } from '@testing-library/react'
import { CardCart } from '@/components/Card/CardCart';
import { useCartContext } from '@/contexts/CartContext';
import { useEffect } from 'react';
import userEvent from '@testing-library/user-event';

function TestZustand() {
	const { updateProductQuantity, products, removeProduct, addProduct } = useCartContext()
	useEffect(() => {
		addProduct({ id: 1, title: 'test', image: 'https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg', price: '10', quantity: 1, description: 'test' })
	}, [])

	return (<>
		{products.map(
			product => (
				<CardCart
					key={`${product.id}s`}
					removeProduct={removeProduct}
					setQuantity={updateProductQuantity}
					{...product} />
			),
		)}
	</>)
}

describe('Card Cart component', () => {
	it('should change quantity', async () => {
		const user = userEvent.setup()
		render(
			<TestZustand />,
		)

		const productQuantity = screen.getByLabelText('Qte')

		expect(productQuantity).toBeInTheDocument()
		expect(productQuantity).toHaveValue('1')

		user.type(productQuantity, '2');
		await screen.findByDisplayValue('12');

		expect(productQuantity).toHaveValue('12')
	})

	it('the quantity must be at least 1', async () => {
		const user = userEvent.setup()
		render(
			<TestZustand />,
		)

		const productQuantity = screen.getByLabelText('Qte')

		user.type(productQuantity, '{home}-');
		await screen.findByDisplayValue('1');

		expect(productQuantity).toHaveValue('1')
	})

	it('should increment 1 the quantity', async () => {
		const user = userEvent.setup()
		render(
			<TestZustand />,
		)

		const productQuantity = screen.getByLabelText('Qte')
		const buttonIncrement = screen.getByText('+')

		expect(productQuantity).toHaveValue('1')

		user.click(buttonIncrement);

		await screen.findByDisplayValue('2');
		expect(productQuantity).toHaveValue('2')
	})

	it('should decrement 1 the quantity', async () => {
		const user = userEvent.setup()
		render(
			<TestZustand />,
		)

		const productQuantity = screen.getByLabelText('Qte')
		const buttonDecrement = screen.getByText('-')

		expect(productQuantity).toHaveValue('2')

		user.click(buttonDecrement);

		await screen.findByDisplayValue('1');
		expect(productQuantity).toHaveValue('1')
	})
})

