import { useEffect } from "react";
import { useState } from "react";

export function useWindowSize(){
    const[windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
    
      useEffect(()=>{
      window.addEventListener('resize',()=>{
        console.log(`Width: ${window.innerWidth} Height: ${window.innerHeight}`);
        setWindowSize({width: window.innerWidth, height:window.innerHeight})
      })
    },[])
    return windowSize
}