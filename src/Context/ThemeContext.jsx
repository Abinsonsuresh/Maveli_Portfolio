import React, { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()
export const ThemeProvider = ({ children})=>{
    const [theme, setTheme] = useState('light')

    const rawSetTheme =(theme)=>{
        const root = window.document.documentElement;
        const isDark = theme === 'light'

        root.classList.remove(isDark ? 'dark' : 'light')
        root.classList.add(theme)
        localStorage.setItem("color-theme", theme)
    }
    if('light')
    {
        rawSetTheme('light')
    }
    useEffect(()=>{
        rawSetTheme(theme)
    },[theme])
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(ThemeContext)
}