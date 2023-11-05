import * as S from '@/styled/layout/MenuCart'
import { ButtonClose } from '../Button/ButtonClose'

interface PropsMenuCart {
    isOpen: boolean
    close: () => void
    children: React.ReactNode
    title: string
    action: string
    total: number
}

export function MenuCart({ isOpen, close, title, action, children, total }: PropsMenuCart) {
    return (
        <S.Container $isOpen={isOpen}>
            <S.Header>
                <span className="title">
                    {title}
                </span>
                <ButtonClose close={close} />
            </S.Header>
            <S.Body>
                {children}
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
