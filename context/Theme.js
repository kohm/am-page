import React, {useState} from 'react';
import themeLight from "../styles/themes/light";
import {ThemeSelector} from "../components/structure/ThemeSelector";
import themeDark from "../styles/themes/dark";

export const ThemeContext = React.createContext(themeLight);

const Theme = (props) => {
  const {children} = props;
  const [theme, setTheme] = useState(themeLight);

  const themeHandler = (selectedTheme) => {
    if (selectedTheme === 'themeLight') {
      setTheme(themeDark);
    } else {
      setTheme(themeLight);
    }
  };

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeSelector/>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
