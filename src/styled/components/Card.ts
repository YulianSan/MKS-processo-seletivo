import styled from "styled-components";
import * as S from "./Container";

export const CardContainer = styled(S.FlexColumn)`
    row-gap: 0.75rem;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14); 
    border-radius: var(--radius);
    overflow: hidden;
    justify-content: space-between;
`


export const CardImageContainer = styled.div`
    width: 100%;
    height: 10rem;
    & img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`

export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.75rem;
    row-gap: 0.5rem;
    color: var(--text-secondary);
    & .title {
        font-size: 1rem;
        font-weight: 400;
    }
    & .description {
        font-size: 0.625rem;
        font-weight: 300;
    }
    & .container-header {
        display: flex;
        align-items: start;
        column-row: 0.25rem;
        justify-content: space-between;
    }
    & .price {
        background-color: var(--text-secondary);
        color: var(--text-primary);
        font-size: 0.938rem;
        padding: 0.4rem;
        border-radius: var(--radius-sm);
        font-weight: 700;
    }
`

export const CardButton = styled.button`
    border: none;
    color: white;
    font-weight: 600;
    font-size: 0.875rem;
    padding: 0.5rem;
    background-color: var(--bg-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.875rem;
    cursor: pointer;
`

