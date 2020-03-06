import React, {useState} from 'react';
import themeLight from "../styles/themes/light";
import {ThemeSelector} from "../components/structure/ThemeSelector/ThemeSelector";

export const ThemeContext = React.createContext(themeLight);

const Theme = (props) => {
  const {children} = props;
  const [theme, setTheme] = useState(themeLight);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeSelector/>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
