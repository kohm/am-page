import React, {useContext, useEffect, useState} from 'react';
import themeDark from "../../styles/themes/dark";
import themeLight from "../../styles/themes/light";
import {ThemeContext} from "../../context/Theme";

export const ThemeSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState('themeLight');
  const [, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    return () => {
      const selectedTheme = localStorage.getItem('selectedTheme') || '';
      if (selectedTheme) themeHandler(selectedTheme);
    };
  }, []);

  const themeHandler = (e) => {
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

  return (
    <div>
      <button onClick={themeHandler}>Theme</button>
    </div>
  );
};
