import styled from "styled-components";

const ChannelInfoContainer = styled.div`
    position: absolute;
    top: 32px;
    left: 32px;
    display: flex;
    flex-flow: row nowrap;
`;

const NowShowing = styled.div`
    padding: 12px 24px 12px 32px;
    border-top-left-radius: 31px;
    border-bottom-left-radius: 31px;
    background-color: rgb(48, 50, 54);
`;

const CurrentChannel = styled.div`
    text-align: left;
    padding: 12px 24px;
    min-width: 300px;
    border-top-right-radius: 31px;
    border-bottom-right-radius: 31px;
    background-color: rgba(48, 50, 54, 0.7);
    @media only screen and (max-width: 600px) {
        min-width: auto;
    }
`;

const ChannelVisual = styled.div`
    background: url(${({ imagePath }) => (imagePath ? imagePath : "error")}.jpg) no-repeat center center fixed;
    height: 100vh;
    background-size: cover;
    transition: ease-in-out;
    transition-duration: 150ms;
`;

const CreditsContainer = styled.div`
    position: absolute;
    bottom: 32px;
    right: 32px;
    padding: 5px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.3);
    transition: ease-in-out;
    transition-duration: 150ms;

    &:hover {
        background-color: rgb(255, 255, 255);
    }
`;

export { ChannelInfoContainer, NowShowing, CurrentChannel, ChannelVisual, CreditsContainer };
