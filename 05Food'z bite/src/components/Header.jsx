import { Link } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme"

const Header = ({theme})=>{

    const [isDark,setIsDark] = useTheme()
    

    return(
        <div className={`shadow-xl h-16 flex px-8 items-center justify-between sticky top-0 z-10 `}>
            <Link to="/"><h1 className="text-3xl">Food<span className="text-red-400">'z</span> <span className="text-yellow-300">Bite</span></h1></Link>
            <ul className="list-none flex gap-4 text-lg">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="#">Recipes</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>

            <div className="flex items-center gap-2" onClick={()=>{
                
                setIsDark(!isDark)
                localStorage.setItem("isDarkMode", !isDark)
            }}>
                {/* <img src={Dark} alt="moon-icon" className="w-7 ml-4" /> */}
                {isDark ? (<p> <span className="text-xl">☀️</span> Light Mode</p>) : (<p> <span className="text-xl">🌙</span> Dark Mode</p>)}
            </div>
        </div>
    )
}

export default Header