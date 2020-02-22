import React from 'react';

// success is a css class defined in index.css, has green bg
const ThemeContext = React.createContext("success"); 
ThemeContext.displayName = "ThemeContext";
export default ThemeContext;