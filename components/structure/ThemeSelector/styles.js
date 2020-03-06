/* styles.js */
import css from 'styled-jsx/css'

// Scoped styles
{ /*language=SCSS*/
}
export const button = css`
    button {
        background-color: transparent;
        border: none;
        padding: 0;
    }

    button:active,
    button:focus {
        outline: none;
    }

    button:hover {
        cursor: pointer;
    }
    .theme-selector {
        left: 50%;
        position: absolute;
        top: 50px;
        transform: translate(-50%, -50%);
    }
          
    .shape,
    .cover {
        display: block;
    }
    
    .shape {
        border-radius: 50%;
        font-size: 0;
        height: 30px;
        color: transparent;
        width: 30px;
    }

    .cover {
        border-radius: 50%;
        color: transparent;
        height: 27px;
        left: 10px;
        position: absolute;
        top: -5px;
        width: 27px;
    }`;