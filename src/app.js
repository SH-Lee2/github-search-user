import { ThemeProvider } from "styled-components";
import "./app.css";
import GlobalStyle from "./styles/global";

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
            </ThemeProvider>
        </>
    );
}

export default App;
