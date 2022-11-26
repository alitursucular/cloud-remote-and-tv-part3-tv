import { QueryClient } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60000,
            refetchInterval: 1000,
            cacheTime: Infinity
        }
    }
});

const localStoragePersistor = createWebStoragePersistor({
    storage: window.localStorage,
    key: "CLOUD_TELEVISION"
});

persistQueryClient({
    queryClient,
    persistor: localStoragePersistor
});

export default queryClient;
