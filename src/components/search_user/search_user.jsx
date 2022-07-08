import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const SearchUser = ({ onSearch, error }) => {
    const [enteredUserName, setEnteredUserName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(enteredUserName);
        setEnteredUserName("");
    };

    const handleInput = (e) => {
        setEnteredUserName(e.target.value);
        if (e.code === "Enter") {
            handleSubmit(e);
        }
    };

    return (
        <SearchContainer>
            <SearchIcon />
            <input
                type="text"
                placeholder="Search GitHub username..."
                value={enteredUserName}
                onChange={handleInput}
                onKeyDown={handleInput}
            />
            {error && !enteredUserName && <span>No results</span>}
            <button
                type="submit"
                onClick={handleSubmit}
                disabled={!enteredUserName}
            >
                Search
            </button>
        </SearchContainer>
    );
};

export default SearchUser;

const SearchContainer = styled.div`
    width: 100%;
    height: 69px;
    padding: 6.5px 7px 7.5px 16px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.card};
    border-radius: 15px;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

    svg {
        color: ${({ theme }) => theme.colors.button};
        margin-right: 0.3em;
    }
    input,
    button {
        color: ${({ theme }) => theme.colors.text};
    }
    input {
        background-color: transparent;
        border: none;
        width: 60%;
        letter-spacing: 1px;
        font-size: 13px;
        line-height: 150%;
        &::placeholder {
            color: ${({ theme }) => theme.colors.title};
        }
        &:focus {
            outline: none;
        }
    }
    button {
        background-color: ${({ theme }) => theme.colors.button};
        border-radius: 10px;
        border: none;
        padding: 12.5px 16px;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        color: #ffffff;
        cursor: pointer;
        &:disabled {
            background-color: #60abff;
        }
        &:hover {
            background-color: #60abff;
        }
    }

    span {
        color: ${({ theme }) => theme.colors.error};
        font-weight: 700;
        font-size: 12px;
        line-height: 150%;
        margin: 0 1em;
        text-align: center;
    }

    @media screen and (min-width: 37rem) {
        padding: 9.5px 10px 9.5px 32px;
        margin-bottom: 1.5rem;

        svg {
            margin-right: 0.6em;
        }
        input {
            font-size: 18px;
        }
        span {
            font-size: 15px;
        }
        button {
            font-size: 16px;
            padding: 12.5px 24px;
        }
    }
`;
