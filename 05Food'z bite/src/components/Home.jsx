import React from 'react'
import { useState } from "react"
import RecipesList from "./RecipesList"
import Search from "./Search"
import Sort from "./Sort"

const Home = () => {
    const [query, setQuery] = useState('')
  return (
    <>
        <div className="flex justify-between">
            <Search setQuery = {setQuery} />
            <Sort />
        </div>
        <RecipesList query = {query} />
    </>
  )
}

export default Home