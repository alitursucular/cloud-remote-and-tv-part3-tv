import React from "react";
import Text from "../../../stories/Text";
import useStore from "../../../_state";
import credits from "./credits.json";
import * as S from "../../styles.index";

const Credits = () => {
    const [currentChannelInfo] = useStore((state) => [state.currentChannelInfo]);

    const index = currentChannelInfo.number - 1;

    return (
        currentChannelInfo.number && (
            <S.CreditsContainer>
                <Text>
                    Photo by <a href={credits[index].link}>{credits[index].name}</a> on{" "}
                    <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Unsplash
                    </a>
                </Text>
            </S.CreditsContainer>
        )
    );
};

export default Credits;
