import {createGlobalStyle} from "styled-components";
import {normalize} from 'styled-normalize'


export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html, body {
        height: 100%;
    }
    
    body {
      background-color: #FFFFFF;
      color: green;
    }
    
    main {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% - 48px);
    }
    
    @media (min-width: 968px) {
      main {
        width: 700px;
      }
    }
    a,
    button {
        -webkit-tap-highlight-color: transparent;
    }
    * {
        margin: 0;
    }
`
