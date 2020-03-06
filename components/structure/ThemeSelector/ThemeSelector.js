import React, {useContext, useEffect, useState} from 'react';
import themeDark from "../../../styles/themes/dark";
import themeLight from "../../../styles/themes/light";
import {ThemeContext} from "../../../context/Theme";
import {button} from './styles';

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
      <style jsx>{button}</style>
      <style jsx>{`
        .shape {
            background-color: ${theme.colors.contrast};
        }
    
        .cover {
            background-color: ${theme.colors.background};
        }
      `}</style>
    </div>
  );
};
