import * as S from '@/styled/layout/MenuCart'
import { ButtonClose } from '../Button/ButtonClose'
import { useCartContext } from '@/contexts/CartContext'
import { CardCart } from '../Card/CardCart'

interface PropsMenuCart {
    isOpen: boolean
    close: () => void
    title: string
    action: string
    products: IProductStorage[]
}

export function MenuCart({ isOpen, close, title, action, products }: PropsMenuCart) {
    const [removeProduct, updateQuantity] = useCartContext(status => [
        status.removeProduct,
        status.updateProductQuantity,
    ])

    const total = products.reduce(
        (acc, product) =>
            acc + (Number(product.price) * product.quantity)
        , 0
    )
    return (
        <S.Container $isOpen={isOpen}>
            <S.Header>
                <span className="title">
                    {title}
                </span>
                <ButtonClose close={close} />
            </S.Header>
            <S.Body>
                {products.length > 0 ? products.map(
                    product => (
                        <CardCart
                            key={`${product.id}s`}
                            removeProduct={removeProduct}
                            setQuantity={updateQuantity}
                            {...product} />
                    ),
                ) : 'Adicione um produto ao seu carrinho'}
            </S.Body>
            <S.Footer>
                <div className="total">
                    <span>Total</span>
                    <span>{total.toLocaleString('pt-br', {
                        currency: 'BRL',
                        style: 'currency',
                    })}</span>
                </div>
                <button className="action">{action}</button>
            </S.Footer>
        </S.Container>
    )
}
