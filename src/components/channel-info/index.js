import React from "react";
import useStore from "../../_state";
import Text from "../../stories/Text";
import * as S from "../styles.index";

const ChannelInfo = () => {
    const [currentChannelInfo] = useStore((state) => [state.currentChannelInfo]);

    return (
        <S.ChannelInfoContainer>
            <S.NowShowing>
                <Text size={24} weight={500} color="#FFF">
                    {currentChannelInfo.number?.toString().padStart(3, "0")}
                </Text>
            </S.NowShowing>
            <S.CurrentChannel>
                <Text size={24} weight={500} color="#FFF">
                    {currentChannelInfo.name}
                </Text>
            </S.CurrentChannel>
        </S.ChannelInfoContainer>
    );
};

export default ChannelInfo;
