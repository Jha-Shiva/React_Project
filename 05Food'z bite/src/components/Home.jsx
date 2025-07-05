import React from 'react'
import { useState } from "react"
import RecipesList from "./RecipesList"
import Search from "./Search"
import Sort from "./Sort"
import { useOutletContext } from 'react-router-dom'

const Home = () => {
    const [query, setQuery] = useState('')
    const [isDark] = useOutletContext()
  return (
    <>
        <main >
          <div className="flex justify-between">
              <Search setQuery = {setQuery} />
              <Sort />
          </div>
          <RecipesList query = {query} />
        </main>
    </>
  )
}

export default Home