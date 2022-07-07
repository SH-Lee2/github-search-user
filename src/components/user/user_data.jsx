import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import BusinessIcon from "@mui/icons-material/Business";
const UserData = ({ userData: { data } }) => {
    const joinDate =
        "Joined " + new Date(data.created_at).toString().substring(4, 15);
    console.log(data);

    return (
        <>
            <div>
                <UserImg src={data.avatar_url} alt="유저 프로필 사진" />
            </div>
            <div>
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
                    <SocialLink available={data.location ? true : false}>
                        <LocationOnIcon />
                        {data.location ? data.location : "Not Available"}
                    </SocialLink>
                    <SocialLink
                        available={data.twitter_username ? true : false}
                    >
                        <TwitterIcon />
                        {data.twitter_username
                            ? data.twitter_username
                            : "Not Available"}
                    </SocialLink>
                    <SocialLink available={data.blog ? true : false}>
                        <LinkIcon />
                        {data.blog ? data.blog : "Not Available"}
                    </SocialLink>
                    <SocialLink available={data.company ? true : false}>
                        <BusinessIcon />
                        {data.company ? data.company : "Not Available"}
                    </SocialLink>
                </SocialList>
            </div>
        </>
    );
};

export default UserData;

const UserImg = styled.img`
    width: 117px;
    height: 117px;
    border-radius: 50%;
`;

const UserDataWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;

const UserName = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.h1};
    line-height: ${({ theme }) => theme.lineHight.h1};
    font-weight: 700;
    margin-bottom: 2px;
`;

const UserId = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.h3};
    line-height: ${({ theme }) => theme.lineHight.h3};
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 20px;
`;

const JoinDate = styled.span`
    font-size: ${({ theme }) => theme.fontSize.body};
    line-height: ${({ theme }) => theme.lineHight.body};
    padding-top: 8px;
`;
const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSize.body};
    line-height: ${({ theme }) => theme.lineHight.body};
    margin-bottom: 32px;
    opacity: 0.75;
`;

const MetaData = styled.div`
    display: flex;
    width: 480px;
    padding: 16px 24px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    margin-bottom: 37px;
    h4 {
        font-size: ${({ theme }) => theme.fontSize.h4};
        line-height: ${({ theme }) => theme.lineHight.h4};
        padding-bottom: 1px;
    }
    p {
        font-weight: 700;
        font-size: 22px;
        line-height: 33px;
    }
`;

const SocialList = styled.ul`
    width: 480px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 15px;
    justify-content: space-between;
`;

const SocialLink = styled.li`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.body};
    line-height: ${({ theme }) => theme.lineHight.body};
    opacity: ${({ available }) => (available ? 1 : 0.75)};

    &:hover {
        text-decoration: ${({ available }) => available && "underline"};
    }
    svg {
        margin-right: 16px;
    }
`;
