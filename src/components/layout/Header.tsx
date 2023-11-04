"use client";
import { FaShoppingCart } from 'react-icons/fa'
import * as S from "@/styled/layout/Header"

export function Header() {
    return (
        <S.Container>
            <S.ContainerTitle>
                <h1>MKS</h1>
                <span>Sistemas</span>
            </S.ContainerTitle>
            <S.CartButton>
                <FaShoppingCart />
                <span>0</span>
            </S.CartButton>
        </S.Container>
    )
}
