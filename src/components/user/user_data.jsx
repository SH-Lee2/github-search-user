import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import BusinessIcon from "@mui/icons-material/Business";
const UserData = ({ userData: { data } }) => {
    const joinDate =
        "Joined " +
        new Date(data.created_at) //
            .toString() //
            .substring(4, 15); //

    const locationAvailable = data.location ? true : false;
    const twitterAvailable = data.twitter_username ? true : false;
    const blogAvailable = data.blog ? true : false;
    const companyAvailable = data.company ? true : false;

    const location = data.location ? data.location : "Not Available";
    const twitter = data.twitter_username
        ? data.twitter_username
        : "Not Available";
    const blog = data.blog ? (
        <a href={data.blog} target="_blank" rel="noreferrer">
            {data.blog}
        </a>
    ) : (
        "Not Available"
    );
    const company = data.company ? data.company : "Not Available";

    return (
        <Wrapper>
            <UserImg src={data.avatar_url} alt="유저 프로필 사진" />
            <UserDataWrapper>
                <div>
                    <UserName>The {data.name}</UserName>
                    <UserId>@{data.login}</UserId>
                </div>
                <JoinDate>{joinDate}</JoinDate>
            </UserDataWrapper>
            <Description>{data.bio}</Description>

            <MetaData>
                <div>
                    <h4>Repos</h4>
                    <p>{data.public_repos}</p>
                </div>
                <div>
                    <h4>Followers</h4>
                    <p>{data.followers}</p>
                </div>
                <div>
                    <h4>Following</h4>
                    <p>{data.following}</p>
                </div>
            </MetaData>
            <SocialList>
                <SocialLink available={locationAvailable}>
                    <LocationOnIcon />
                    {location}
                </SocialLink>
                <SocialLink available={twitterAvailable}>
                    <TwitterIcon />
                    {twitter}
                </SocialLink>
                <SocialLink available={blogAvailable}>
                    <LinkIcon />
                    {blog}
                </SocialLink>
                <SocialLink available={companyAvailable}>
                    <BusinessIcon />
                    {company}
                </SocialLink>
            </SocialList>
        </Wrapper>
    );
};

export default UserData;

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        "img user-data"
        "description description"
        "meta-data meta-data"
        "social social ";
    grid-template-columns: min-content 1fr;
    @media screen and (min-width: 90rem) {
        grid-template-areas:
            "img user-data"
            "img description"
            "img meta-data"
            "img social ";
    }
`;

// 이렇게 되면 나중에 wrapper 안으로 정리
const UserImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 1.4em;
    grid-area: img;
    @media screen and (min-width: 23.6rem) {
        width: 117px;
        height: 117px;
        margin-right: 2.5em;
    }
`;

const UserDataWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    grid-area: user-data;
    @media screen and (min-width: 48rem) {
        flex-direction: row;
        justify-content: space-between;
    }
    @media screen and (min-width: 90rem) {
        /* flex-direction: column; */
    }
`;

const UserName = styled.h1`
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
    margin-bottom: 2px;
    @media screen and (min-width: 23.6rem) {
        font-size: 26px;
    }
`;

const UserId = styled.h3`
    font-size: 13px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.button};
    text-align: start;
    @media screen and (min-width: 23.6rem) {
        font-size: 16px;
    }
`;

const JoinDate = styled.span`
    font-size: 13px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.75;
    padding-top: 8px;
    @media screen and (min-width: 23.6rem) {
        font-size: 15px;
    }
`;
const Description = styled.p`
    font-size: 13px;
    line-height: 150%;
    margin-top: 20px;
    margin-bottom: 32px;
    opacity: 0.75;
    grid-area: description;
    @media screen and (min-width: 23.6rem) {
        font-size: 15px;
    }
`;

const MetaData = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    padding: 1em 1.5em;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.box};
    border-radius: 10px;
    margin-bottom: 37px;
    grid-area: meta-data;
    div {
        justify-self: flex-start;
        @media screen and (max-width: 24rem) {
            justify-self: center;
            text-align: center;
        }
        h4 {
            font-size: 11px;
            line-height: 150%;
            padding-bottom: 1px;
            letter-spacing: 1px;
        }
        p {
            font-weight: 700;
            line-height: 150%;
            color: ${({ theme }) => theme.colors.title};
        }
        @media screen and (min-width: 23.6rem) {
            h4 {
                font-size: 13px;
            }
            p {
                font-size: 22px;
            }
        }
    }
`;

const SocialList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 15px;
    justify-content: space-between;
    grid-area: social;
    @media screen and (max-width: 31rem) {
        grid-template-columns: 1fr;
    }
`;

const SocialLink = styled.li`
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 150%;
    opacity: ${({ available }) => (available ? 1 : 0.5)};
    margin-right: 1em;
    color: ${({ theme }) => theme.colors.text};
    a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
    }
    &:hover {
        text-decoration: ${({ available }) => available && "underline"};
        text-underline-offset: 4px;
    }
    svg {
        margin-right: 16px;
    }

    @media screen and (min-width: 23.6rem) {
        font-size: 15px;
    }
`;
