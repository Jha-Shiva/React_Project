import search from '../assets/search-2-line.svg'
import React from 'react';

const Search= ({setQuery})=>{


    return(
        <div className="shadow-xl w-2xs flex items-center gap-2 rounded-lg m-8">
            <img src={search} alt="Search-icon" className='w-5 ml-2' />
            <input onChange={(e)=>{
               return setQuery(e.target.value.toLowerCase())
            }} type="text" className="text-lg p-2 grow outline-0" placeholder="Search" />
        </div>
    )
}

export default Search