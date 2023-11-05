import styled from "styled-components";
import * as S from "@/styled/components/Container";

export const Container = styled(S.Container).attrs({ as: 'header' })`
    height: 6.25rem;
    display: flex;
    align-items: center;
    padding-inline: min(4rem, 5vw);
    justify-content: space-between;
`

export const ContainerTitle = styled(S.FlexRow)`
    align-items: end;
    column-gap: 0.5rem;
    & span {
        font-size: 1.25rem;
        font-weight: 300;
        padding-bottom: 0.4rem;
    }
    & h1 {
        font-size: 2.5rem;
    }
`

export const CartButton = styled.button`
    display: flex;
    border-radius: var(--radius);
    align-items: center;
    background-color: var(--text-primary);
    border: none;
    padding-block: 0.8rem;
    padding-inline: 1.5rem;
    column-gap: 1rem;
    font-weight: bold;
    font-size: 1.125rem;
    cursor: pointer;
`
