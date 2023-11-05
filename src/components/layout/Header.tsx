"use client";
import { FaShoppingCart } from 'react-icons/fa'
import * as S from "@/styled/layout/Header"
import { useState } from 'react';
import { MenuCart } from './MenuCart';
import { CardCart } from '../Card/CardCart';
import { useCartContext } from '@/contexts/CartContext';

export function Header() {
    const [products, removeProduct, updateQuantity] = useCartContext(status => [
        status.products,
        status.removeProduct,
        status.updateProductQuantity,
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
                    <span>0</span>
                </S.CartButton>
            </S.Container>
            <MenuCart
                isOpen={isOpen}
                close={() => setIsOpen(false)}
                title="Carrinho de compras"
                action="Finalizar Compra"
            >
                {products.map(
                    product => (<CardCart key={`${product.id}s`} {...product} />),
                )}
            </MenuCart>
        </>
    )
}
