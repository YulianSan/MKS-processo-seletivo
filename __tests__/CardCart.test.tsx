import { getByText, render, screen } from '@testing-library/react'
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

		expect(productQuantity).toHaveValue('12')

		user.type(productQuantity, '{home}-');
		await screen.findByDisplayValue('1');

		expect(productQuantity).toHaveValue('1')
	})
})

