import styled from "styled-components";

interface IContainer {
    $isOpen: boolean
}
export const Container = styled.div<IContainer>`
    background-color: var(--bg-primary);
    transform: translateX(${(props) => props.$isOpen ? '0' : '100%'});
    transition: transform 0.5s;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    width: 30rem;
    height: 100vh;
    box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
    color: var(--text-primary);
`

export const Body = styled.div`
    display: flex;
    padding: 1.375rem;
    flex-direction: column;
    row-gap: 1.5rem;
    max-height: calc(100% - 16.5rem);
    overflow-y: scroll;
`

export const Header = styled.div`
    display: flex;
    padding: 1.375rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border: none;
    background-color: transparent;
    color: var(--text-primary);
    & .title {
        font-weight: 700;
        font-size: 1.75rem;
    }
    & .btn-close {
        cursor: pointer;
        display: grid;
        place-items: center;
        width: 2.5rem;
        color: var(--text-primary);
        font-size: 1.5rem;
        aspect-ratio: 1;
        background-color: #000000;
        border-radius: 50%;
    }
`

export const Footer = styled.div`
    font-size: 1.75rem;
    color: var(--text-primary);
    position: absolute;
    width: 100%;
    bottom: 0;
    & .total {
        display: flex;
        justify-content: space-between;
        padding: 1.375rem;
        width: 100%;
        font-weight: 700;
    }
    & .action {
        color: inherit;
        width: inherit;
        font-size: inherit;
        border: none;
        display: block;
        background-color: #000000;
        padding-block: 2rem;
        font-weight: 700;
        cursor: pointer;
        text-align: center;
    }
`
