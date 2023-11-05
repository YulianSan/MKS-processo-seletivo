import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--text-primary);
    border-radius: var(--radius);
    display: flex;
    column-gap: 1.75rem;
    position: relative;
    align-content: center;
    width: 100%;
    max-height: 6rem;
    padding: 1.1rem;
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
`

export const ContainerQuantity = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & .input {
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
            border: none;
            outline: none;
            width: 1rem;
        }
        button {
            padding: 0.1rem;
            &:last-of-type {
                border-left: 1px solid #BFBFBF;
            }
            &:first-of-type {
                border-right: 1px solid #BFBFBF;
            }
        }
    }
`
