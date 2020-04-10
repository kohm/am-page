/* styles.js */
import css from 'styled-jsx/css'

// Scoped styles
{ /*language=SCSS*/
}

export function applyTheme(theme) {
  return css.global`
    html, body {
        height: 100%;
    }
    
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
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
    }`;
}