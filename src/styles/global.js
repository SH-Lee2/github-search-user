import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
body{
    font-family: "Space Mono";
    background-color : ${({ theme }) => theme.colors.background};
    height: 100vh;
    display : flex;
    justify-content: center;
    align-items : center;
    padding: 24px;
}
`;

export default GlobalStyle;
