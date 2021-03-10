import React from "react";
import {AppProps} from 'next/app';
import {GlobalStyle} from "../styled/globals";
import {defaultTheme} from "../styled/theme";
import {ThemeProvider} from "styled-components";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <GlobalStyle {...pageProps}/>
                <Component {...pageProps} />
            </>
        </ThemeProvider>
    )
}
