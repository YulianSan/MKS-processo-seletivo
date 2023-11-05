import * as S from '@/styled/components/Card'
import { FiShoppingBag } from 'react-icons/fi'
import Image from 'next/image'

interface PropsCard {
	id: number
	image: string,
	title: string,
	description: string,
	price: string
	addToCart: (product: IProductStorage) => void
}
export function Card({
	id,
	image,
	description,
	title,
	price,
	addToCart,
}: PropsCard) {
	return (
		<S.CardContainer>
			<S.CardImageContainer>
				<Image width={100} height={100} src={image} alt="image product" />
			</S.CardImageContainer>
			<S.CardDescription>
				<div className="container-header">
					<span className="title">
						{title}
					</span>
					<span className="price">
						{
							Number(price).toLocaleString(
								'pt-BR',
								{ currency: 'BRL', style: 'currency' }
							)
						}
					</span>
				</div>
				<span className="description">
					{description}
				</span>
			</S.CardDescription>
			<S.CardButton onClick={() =>
				addToCart({ quantity: 0, description, name: title, id, price })}>
				<FiShoppingBag />
				COMPRAR
			</S.CardButton>
		</S.CardContainer>
	);
}
