import * as S from '@/styled/layout/MenuCart'
import { ButtonClose } from '../Button/ButtonClose'

interface PropsMenuCart {
    isOpen: boolean
    close: () => void
    children: React.ReactNode
    title: string
    action: string
}

export function MenuCart({ isOpen, close, title, action, children }: PropsMenuCart) {
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
                <span>{action}</span>
            </S.Footer>
        </S.Container>
    )
}
