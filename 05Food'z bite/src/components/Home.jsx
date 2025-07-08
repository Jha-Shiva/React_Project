import React, { useEffect } from 'react'
import { useState } from "react"
import RecipesList from "./RecipesList"
import Search from "./Search"
import Sort from "./Sort"

import { useTheme } from '../../hooks/useTheme'

const Home = () => {
    const [query, setQuery] = useState('')
    const [isDark] = useTheme()
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