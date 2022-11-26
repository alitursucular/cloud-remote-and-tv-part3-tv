import axios from "axios";
import { useQuery } from "react-query";

const getCurrentChannel = async () => {
    const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_FIREBASE_MICROSERVICE_URL}/currentChannel`
    });

    return response.data;
};

const useCurrentChannel = () => {
    return useQuery("currentChannel", getCurrentChannel);
};

export { useCurrentChannel };
