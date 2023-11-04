import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeSpeed;
}

:root {
    --bg-primary: #0F52BA;
    --bg-secondary: #373737;
    --bg-tertiary: #EEEEEE;
    --text-primary: #FFFFFF;
    --text-secondary: #2C2C2C;
    --radius: 0.5rem;
    --radius-sm: 0.313rem;
}
`
