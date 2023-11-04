import * as S from '@/styled/components/Card'
import { FiShoppingBag } from 'react-icons/fi'
import Image from 'next/image'

interface PropsCard {
    image: string,
    title: string,
    description: string,
	price: number
}
export function Card({ image, description, title, price }: PropsCard) {
    return (
		<S.CardContainer>
			<S.CardImageContainer>
				<Image width={100} height={100} src={image} alt="image product" />
			</S.CardImageContainer>
			<S.CardDescription>
				<div className="container-header">
					<span className="title">
						{ title }
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
					{ description }
				</span>
			</S.CardDescription>
			<S.CardButton>
				<FiShoppingBag />
				COMPRAR
			</S.CardButton>
		</S.CardContainer>
    );
}
