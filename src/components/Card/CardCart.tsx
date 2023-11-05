import * as S from '@/styled/components/CardCart'
import Image from 'next/image'
import { ButtonClose } from '../Button/ButtonClose'

type PropsCardCart = {
	removeProduct: (id: number) => void
	setQuantity: (id: number, quantity: number) => void
} & IProductStorage

export function CardCart({
	id,
	image,
	price,
	title,
	quantity,
	removeProduct,
	setQuantity,
}: PropsCardCart) {
	return (
		<S.Container>
			<S.ContainerImage>
				<Image
					src={image}
					alt={`imagem do produto ${title}`}
					width={100}
					height={100} />
			</S.ContainerImage>
			<S.Title>
				{title}
			</S.Title>
			<S.ContainerQuantityPrice>
				<S.ContainerQuantity>
					<div className="input">
						<label htmlFor='quantity'>Qte</label>
						<button onClick={() => setQuantity(id, quantity - 1)}>-</button>
						<input
							id="quantity"
							onChange={({ target: { value } }) => setQuantity(id, Number(value))}
							value={quantity} />
						<button onClick={() => setQuantity(id, quantity + 1)}>+</button>
					</div>
				</S.ContainerQuantity>
				<S.Price>
					{Number(price).toLocaleString('pt-br', {
						currency: 'BRL',
						style: 'currency',
					})}
				</S.Price>
			</S.ContainerQuantityPrice>
			<S.ContainerButtonClose>
				<ButtonClose
					fontSize='0.875rem'
					close={() => removeProduct(id)} />
			</S.ContainerButtonClose>
		</S.Container>
	)
}
