import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import axios from "axios";
import GitHub from "./api/github";

const root = ReactDOM.createRoot(document.getElementById("root"));

const httpClient = axios.create({
    baseURL: "https://api.github.com/users/",
    headers: { accept: process.env.REACT_APP_KEY },
});

const github = new GitHub(httpClient);

root.render(
    <React.StrictMode>
        <App github={github} />
    </React.StrictMode>
);
