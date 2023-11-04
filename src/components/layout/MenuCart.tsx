"use client";
import { AiOutlineClose } from 'react-icons/ai'
import * as S from '@/styled/layout/MenuCart'

interface PropsMenuCart {
    isOpen: boolean
    close: () => void
}

export function MenuCart({ isOpen, close }: PropsMenuCart) {
    return (
        <S.Container $isOpen={ isOpen }>
            <S.Header>
                <span className="title">
                    Carrinhode compras
                </span>
                <button className="btn-close" onClick={close}>
                    <AiOutlineClose />
                </button>
            </S.Header>
            <S.Footer>
                <span>Finalizar Compra</span>
            </S.Footer>
        </S.Container>
    )
}
