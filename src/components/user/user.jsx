import React from "react";
import styled from "styled-components";
import UserData from "./user_data";

const User = ({ userData }) => {
    return (
        <UserContainer>
            {userData.length !== 0 && <UserData userData={userData} />}
        </UserContainer>
    );
};

export default User;

const UserContainer = styled.div`
    width: 730px;
    height: 444px;
    padding: 3rem;
    background-color: ${({ theme }) => theme.colors.card};
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    column-gap: 37px;
`;
