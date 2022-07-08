import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styled, { useTheme } from "styled-components";

const Header = ({ onSelectTheme }) => {
    const { theme } = useTheme();
    const text = theme === "light" ? "DARK" : "LIGHT";
    const icon = theme === "light" ? <DarkModeIcon /> : <WbSunnyIcon />;
    return (
        <HeaderTag>
            <h1>debfinder</h1>
            <div onClick={onSelectTheme}>
                <span>{text}</span>
                {icon}
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
    color: ${({ theme }) => theme.colors.title};
    h1 {
        font-weight: 700;
        font-size: 26px;
        line-height: 150%;
    }
    div {
        cursor: pointer;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.theme};
        &:hover {
            color: ${({ theme }) => theme.colors.themeHover};
        }
        span {
            margin-right: 1rem;
            font-weight: 700;
            font-size: 13px;
            line-height: 150%;
            letter-spacing: 2.5px;
        }
    }
    margin-bottom: 2.25rem;
`;
