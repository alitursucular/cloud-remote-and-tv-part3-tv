import React from "react";
import useStore from "../../_state";
import Credits from "./credits";
import * as S from "../styles.index";

const ChannelVisual = () => {
    const [currentChannelInfo] = useStore((state) => [state.currentChannelInfo]);

    return (
        <>
            <S.ChannelVisual imagePath={`${process.env.REACT_APP_PUBLIC_IMAGES_DIR}/${currentChannelInfo.number}`} />
            <Credits />
        </>
    );
};

export default ChannelVisual;
