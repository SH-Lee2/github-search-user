import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const SearchUser = ({ onSearch }) => {
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
    padding: 9.5px 10px 9.5px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.lightBlack};
    border-radius: 15px;

    svg {
        color: ${({ theme }) => theme.colors.blue};
        font-size: 24px;
        margin-right: 22px;
    }
    input,
    button {
        color: ${({ theme }) => theme.colors.white};
    }
    input {
        background-color: transparent;
        border: none;
        flex: 1;
        font-size: 18px;
        line-height: 25px;
        font-weight: 400;
        letter-spacing: 1px;
        &::placeholder {
            color: ${({ theme }) => theme.colors.white};
        }
        &:focus {
            outline: none;
        }
    }
    button {
        background-color: ${({ theme }) => theme.colors.blue};
        border-radius: 10px;
        border: none;
        padding: 12.5px 24px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        margin-left: 22px;
        &:disabled {
            background-color: #60abff;
        }
        &:hover {
            background-color: #60abff;
        }
    }
`;
