import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--text-primary);
    border-radius: var(--radius);
    display: flex;
    column-gap: 1.75rem;
    position: relative;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    max-height: 6rem;
    padding: 1.1rem;
    padding-right: 3rem;
    color: #000000;
`

export const ContainerImage = styled.div`
    aspect-ratio: 1;
    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    color: var(--text-secondary);
    font-size: 0.813rem;
    width: 7rem;
`

export const ContainerQuantity = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & .input {
        height: 1.25rem;
        position: relative;
        display: flex;
        column-gap: 0.2rem;
        justify-content: space-between;
        align-items: center;
        padding: 0.25rem;
        border: 1px solid #BFBFBF;
        border-radius: var(--radius-sm);
        label {
            bottom: calc(100% + 0.25rem);
            position: absolute;
            font-size: 0.4rem;
        }
        input {
            text-align: center;
            font-size: 0.5rem;
            border: none;
            outline: none;
            width: 1rem;
        }
        button {
            padding-inline: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            &:last-of-type {
                border-left: 1px solid #BFBFBF;
            }
            &:first-of-type {
                border-right: 1px solid #BFBFBF;
            }
        }
    }
`

export const ContainerButtonClose = styled.div`
    position: absolute;
    left: 100%;
    bottom: 100%;
    transform: translate(-60%, 60%);
`

export const Price = styled.span`
    font-size: 0.875rem;
    font-weight: 700;
    display: flex;
    align-items: center;
`
