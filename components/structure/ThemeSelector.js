import React, {useContext, useEffect, useState} from 'react';
import themeDark from "../../styles/themes/dark";
import themeLight from "../../styles/themes/light";
import {ThemeContext} from "../../context/Theme";

export const ThemeSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState('themeLight');
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    const previousSelectedTheme = localStorage.getItem('selectedTheme') || '';
    if (previousSelectedTheme) selectTheme(previousSelectedTheme);
  }, []);

  const themeToggle = (e) => {
    if (selectedTheme === 'themeLight') {
      setTheme(themeDark);
      localStorage.setItem('selectedTheme', 'themeDark');
      setSelectedTheme('themeDark');
    } else {
      setTheme(themeLight);
      localStorage.setItem('selectedTheme', 'themeLight');
      setSelectedTheme('themeLight');
    }
  };

  const selectTheme = (theme) => {
    if (theme === 'themeLight') {
      setTheme(themeLight);
      setSelectedTheme('themeLight');
    }
    if (theme === 'themeDark') {
      setTheme(themeDark);
      setSelectedTheme('themeDark');
    }
  };

  return (
    <div className={'theme-selector'}>
      <button onClick={themeToggle}>
        <span className="shape"/>
        <span className="cover"/>
      </button>
      { /*language=SCSS*/}
      <style jsx>{`
          .theme-selector {
              left: 50%;
              position: absolute;
              top: 50px;
              transform: translate(-50%, -50%);
          }
          
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
          
          .shape,
          .cover {
            display: block;
          }
          
          .shape {
              background-color: ${theme.colors.contrast};
              border-radius: 50%;
              font-size: 0;
              height: 30px;
              color: transparent;
              width: 30px;
          }
          
          .cover {
            background-color: ${theme.colors.background};
            border-radius: 50%;
            color: transparent;
            height: 27px;
            left: 10px;
            position: absolute;
            top: -5px;
            width: 27px;
          }
      `}</style>
    </div>
  );
};
