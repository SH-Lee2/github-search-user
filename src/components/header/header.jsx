import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderTag>
            <h1>debfinder</h1>
            <div>
                <span>light</span>
                <WbSunnyIcon />
            </div>
        </HeaderTag>
    );
};

export default Header;

const HeaderTag = styled.header`
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    div {
        display: flex;
        align-items: center;
        span {
            margin-right: 1rem;
        }
    }
    margin-bottom: 2.25rem;
`;
