import styled from "styled-components";

export const Main = styled.main`
    margin-top: 7.25rem;
`

export const ListCards = styled.div`
    display: grid;
    column-gap: 1.4rem;
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(13.75rem, 1fr));
    justify-content: center;
    width: 80%;
    max-width: 60rem;
    margin-inline: auto;
`
