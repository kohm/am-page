import {createGlobalStyle} from "styled-components";
import {normalize} from 'styled-normalize'


export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html, body {
        height: 100%;
    }
    
    body {
      background-color: #FFFFFF;
      color: #1b1b1b;
    }
    a,
    button {
        -webkit-tap-highlight-color: transparent;
    }
    * {
        margin: 0;
    }
`
