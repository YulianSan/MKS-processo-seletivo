"use client";
import { FaShoppingCart } from 'react-icons/fa'
import * as S from "@/styled/layout/Header"
import { useState } from 'react';
import { MenuCart } from './MenuCart';

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <S.Container>
                <S.ContainerTitle>
                    <h1>MKS</h1>
                    <span>Sistemas</span>
                </S.ContainerTitle>
                <S.CartButton onClick={() => setIsOpen(true)}>
                    <FaShoppingCart />
                    <span>0</span>
                </S.CartButton>
            </S.Container>
            <MenuCart isOpen={ isOpen } close={() => setIsOpen(false)} />
        </>
    )
}
