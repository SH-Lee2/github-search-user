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
    width: 730px;
    height: 69px;
    padding: 0.59rem 0.625rem 0.59rem 2rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.card};
    border-radius: 15px;
    svg {
        color: ${({ theme }) => theme.colors.button};
        font-size: 1.5rem;
        margin-right: 1.375rem;
    }
    input,
    button {
        color: ${({ theme }) => theme.colors.text};
    }
    input {
        background-color: transparent;
        border: none;
        flex: 1;
        font-size: 1.125rem;
        line-height: 25px;
        letter-spacing: 1px;
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
        padding: 0.78rem 1.5rem;
        font-size: 1rem;
        line-height: 24px;
        font-weight: 700;
        margin-left: 1.375rem;
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
        font-size: 0.93rem;
        line-height: 22px;
        margin-left: 1.375rem;
    }
`;
