import { render, screen } from '@testing-library/react'
import { MenuCart } from '@/components/layout/MenuCart';
import { ReactQuery } from '@/contexts/ReactQuery';

describe('Menu Cart component', () => {
	it('should showing message if products is empty', () => {
		render(<ReactQuery>
			<MenuCart
				title=""
				action=""
				close={() => { }}
				products={[]}
				isOpen={true} />
		</ReactQuery>)

		const message = screen.getByText(/Adicione um produto ao seu carrinho/i)

		expect(message).toBeInTheDocument()
	})

	it('should showing products', () => {
		render(<ReactQuery>
			<MenuCart
				title=""
				action=""
				close={() => { }}
				products={[{
					id: 1,
					title: 'test',
					image: 'https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg',
					price: '10',
					quantity: 1,
					description: 'oi'
				}]}
				isOpen={true} />
		</ReactQuery>)

		const message = screen.queryByText(/Adicione um produto ao seu carrinho/i)
		const productTitle = screen.getByText(/test/i)

		expect(message).toBeNull()
		expect(productTitle).toBeInTheDocument()
	})
})
