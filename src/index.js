import React from "react";
import ReactDOM from "react-dom/client";
import Television from "./components";
import GlobalStyles from "./theme";
import reportWebVitals from "./reportWebVitals";

import { QueryClientProvider } from "react-query";
import queryClient from "./queryClient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <Television />
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();