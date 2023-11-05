import * as S from '@/styled/components/CardCart'
import Image from 'next/image'
import { ButtonClose } from '../Button/ButtonClose'

export function CardCart({
	id,
	image,
	price,
	title,
	quantity,
	description,
}: IProductStorage) {
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
			<S.ContainerQuantity>
				<div className="input">
					<label>Qte</label>
					<button>+</button>
					<input value={quantity} />
					<button>-</button>
				</div>
			</S.ContainerQuantity>
			<ButtonClose close={() => { }} />
		</S.Container>
	)
}
