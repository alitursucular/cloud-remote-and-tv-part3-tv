/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useCurrentChannel } from "../api/api";
import useStore from "../_state";
import ChannelInfo from "./channel-info";
import ChannelVisual from "./channel-visual";

const Television = () => {
    const [updateCurrentChannelInfo] = useStore((state) => [state.updateCurrentChannelInfo]);

    const { data } = useCurrentChannel();

    React.useEffect(() => {
        data && updateCurrentChannelInfo(data);
    }, [data]);

    return (
        <>
            <ChannelInfo />
            <ChannelVisual />
        </>
    );
};

export default Television;
