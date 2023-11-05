import styled from "styled-components";

export const ButtonClose = styled.button<{ $fontSize?: string }>`
    cursor: pointer;
    display: grid;
    place-items: center;
    width: 1.7em;
    color: var(--text-primary);
    font-size: ${(props) => props?.$fontSize ?? '1.5rem'};
    aspect-ratio: 1;
    background-color: #000000;
    border-radius: 50%;
`
