import { useEffect, useState } from "react";
import "./app.css";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/header";
import SearchUser from "./components/search_user/search_user";
import User from "./components/user/user";
import { darkTheme, lightTheme } from "./styles/theme";

function App({ github }) {
    const [userData, setUserData] = useState([]);
    const [userName, setUserName] = useState("");
    const [error, setError] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState("light");
    const handleUserName = (name) => {
        setUserName(name);
    };
    useEffect(() => {
        github
            .getUser(userName === "" ? "octocat" : userName)
            .then((data) => {
                setUserData(data);
                setError(false);
            })
            .catch((e) => setError(true));
    }, [userName, github]);
    const handleTheme = () => {
        setSelectedTheme((pre) => (pre === "light" ? "dark" : "light"));
    };
    return (
        <>
            <ThemeProvider
                theme={selectedTheme === "light" ? lightTheme : darkTheme}
            >
                <GlobalStyle />
                <Header onSelectTheme={handleTheme} />
                <main>
                    <SearchUser onSearch={handleUserName} error={error} />
                    <User userData={userData} />
                </main>
            </ThemeProvider>
        </>
    );
}

export default App;
