import React, { useState, createContext } from "react";

export const themeContext = createContext();

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState('light')

    const handleChangeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    return (
        <themeContext.Provider value={{ theme, handleChangeTheme, setTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider;