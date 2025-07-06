import { useState } from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext"

const App = ()=>{
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return(
        <ThemeContext.Provider value={[isDark,setIsDark]}>
        
        <div className={`${isDark? 'dark' : ''} dark:bg-gray-900 dark:text-white`}>
            <Header />
            <Outlet />
        </div>
        </ThemeContext.Provider>
    )
}

export default App