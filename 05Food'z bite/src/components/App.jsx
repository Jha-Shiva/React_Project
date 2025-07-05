import { useState } from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const App = ()=>{
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return(
        <>
        <div className={`${isDark? 'dark' : ''} dark:bg-gray-900 dark:text-white`}>
            <Header theme={[isDark,setIsDark]}/>
            <Outlet context={[isDark,setIsDark]}/>
        </div>
        </>
    )
}

export default App