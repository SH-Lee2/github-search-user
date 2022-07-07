import "./app.css";
import Header from "./components/header/header";
import GlobalStyle from "./styles/global";
import styled, { ThemeProvider } from "styled-components";
import SearchUser from "./components/search_user/search_user";
const theme = {
    colors: {
        blue: "#0079FF",
        white: "#FFFFFF",
        black: "#141D2F",
        lightBlack: "#1E2A47",
        red: "#F74646",
    },
    fontSize: {
        h1: "26px",
        h2: "22px",
        h3: "16px",
        h4: "13px",
        body: "15px",
    },
    lineHight: {
        h1: "38px",
        h2: "33px",
        h3: "24px",
        h4: "20px",
        body: "25px",
    },
};
function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Container>
                    <Header />
                    <SearchUser />
                </Container>
            </ThemeProvider>
        </>
    );
}

export default App;

const Container = styled.div`
    width: 730px;
`;
