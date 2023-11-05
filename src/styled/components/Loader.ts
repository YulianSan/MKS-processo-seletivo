import styled, { keyframes } from "styled-components";

interface PropsContainer {
    $width: string
    $height: string
}

const animationShimmer = keyframes`
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
`

export const Container = styled.div<PropsContainer>`
    background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
    background-size: 200% 100%;
    animation: ${animationShimmer} 2s infinite linear;
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
`
