import React from "react";
import styled from "styled-components";
import UserData from "./user_data";

const User = ({ userData }) => {
    return (
        <UserContainer>
            {userData.length === 0 && <h1>Please search userName.</h1>}
            {userData.length !== 0 && <UserData userData={userData} />}
        </UserContainer>
    );
};

export default User;

const UserContainer = styled.div`
    width: 730px;
    height: 444px;
    padding: 48px;
    background-color: ${({ theme }) => theme.colors.lightBlack};
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.white};
    display: flex;

    column-gap: 37px;
`;
