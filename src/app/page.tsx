"use client";
import { Card } from "@/components/Card/Card";
import * as S from "@/components/layout/Main";
import { useProducts } from "@/hooks/UseProducts";

interface IResponse {
    products: IProduct[],
    count: number
}

export default function Home() {
  const { isLoading, data } = useProducts<IResponse>()
  return (
    <S.Main>
      <S.ListCards>
        {!isLoading && data?.products.map( card =>  
          <Card key={card.id} 
            image={card.photo} 
            title={card.name} 
            description={card.description}
            price={card.price}/>,
        )}
      </S.ListCards>
    </S.Main>
  )
}
