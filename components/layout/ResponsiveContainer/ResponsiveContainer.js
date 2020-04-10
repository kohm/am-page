import React, {useContext, useEffect, useState} from 'react';

import {ThemeContext} from '../../../context/Theme'
import {applyTheme} from "./styles";


const ResponsiveContainer = (props) => {
  const {children} = props;
  const [theme] = useContext(ThemeContext);

  return (
    <div className={'responsive-container'}>
      {children}
      { /*language=SCSS*/}
      <style jsx>{`
          .responsive-container {
              margin: 0 auto;
              max-width: 1300px;
              padding: 0 32px;
          }
      `}</style>

      { /*language=SCSS*/}
      <style jsx global>{`
        html, body {
        height: 100%;
    }
    
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      transition-duration: 150ms;
      transition-property: background-color, color;
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
`}</style>
    </div>
  );
};

export default ResponsiveContainer;
