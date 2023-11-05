"use client";
import { FaShoppingCart } from 'react-icons/fa'
import * as S from "@/styled/layout/Header"
import { useState } from 'react';
import { MenuCart } from './MenuCart';
import { useCartContext } from '@/contexts/CartContext';

export function Header() {
    const [products] = useCartContext(status => [
        status.products,
    ])
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
                    <span>{products.length}</span>
                </S.CartButton>
            </S.Container>
            <MenuCart
                products={products}
                isOpen={isOpen}
                close={() => setIsOpen(false)}
                title="Carrinho de compras"
                action="Finalizar Compra"
            />
        </>
    )
}
