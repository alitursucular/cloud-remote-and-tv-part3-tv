import React from "react";
import useStore from "../../_state";
import Credits from "./credits";
import * as S from "../styles.index";

const ChannelVisual = () => {
    const [currentChannelInfo] = useStore((state) => [state.currentChannelInfo]);

    return (
        <>
            <S.ChannelVisual imagePath={`${process.env.PUBLIC_URL}/images/${currentChannelInfo.number}`} />
            <Credits />
        </>
    );
};

export default ChannelVisual;
