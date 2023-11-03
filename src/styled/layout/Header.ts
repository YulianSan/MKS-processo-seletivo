import styled from "styled-components";
import * as S from "@/styled/components/Container";

export const Container = styled(S.Container).attrs({ as: 'header' })`
    height: 6.25rem;
    display: flex;
    align-items: center;
    padding-inline: 3rem;
`

export const ContainerTitle = styled(S.FlexRow)`
    align-items: end;
    
`

export const Title = styled.h1`
    font-size: 2.5rem;
`

export const SubTitle = styled.span`
    font-size: 1.25rem;
    font-weight: 300;
`
