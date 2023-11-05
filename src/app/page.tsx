"use client";
import { Card } from "@/components/Card/Card";
import * as S from "@/components/layout/Main";
import { useProducts } from "@/hooks/UseProducts";
import { useCartContext } from '@/contexts/CartContext'

interface IResponse {
  products: IProduct[],
  count: number
}

export default function Home() {
  const { isLoading, data } = useProducts<IResponse>()
  const addProduct = useCartContext(state => state.addProduct)

  return (
    <S.Main>
      <S.ListCards>
        {!isLoading && data?.products.map(card =>
          <Card key={card.id}
            addToCart={addProduct}
            id={card.id}
            image={card.photo}
            title={card.name}
            description={card.description}
            price={card.price}
          />,
        )}
      </S.ListCards>
    </S.Main>
  )
}
