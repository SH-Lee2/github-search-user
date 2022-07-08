import React from "react";
import styled, { useTheme } from "styled-components";
import UserData from "./user_data";

const User = ({ userData }) => {
    const { theme } = useTheme();
    return (
        <UserContainer themeColor={theme}>
            {userData.length !== 0 && <UserData userData={userData} />}
        </UserContainer>
    );
};

export default User;

const UserContainer = styled.div`
    width: 100%;
    min-height: 444px;
    background-color: ${({ theme }) => theme.colors.card};
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.text};
    padding: 32px 24px 48px;
    box-shadow: ${({ themeColor }) =>
        themeColor === "light"
            ? "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
            : "none"};
    @media screen and (min-width: 23.6rem) {
        padding: 40px;
    }
    @media screen and (min-width: 90rem) {
        padding: 48px;
    }
`;
