import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
body{
    background-color : ${({ theme }) => theme.colors.background};
    height: 100vh;
    display : grid;
    place-content: center;
    font-family: "Space Mono";

}
`;

export default GlobalStyle;
