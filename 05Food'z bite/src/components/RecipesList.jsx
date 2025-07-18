import recipesData from "../../recipesData"
import CountriesListShimmer from "./CountriesListShimmer";
import Recipes from "./Recipes";
import React, {useEffect, useState} from "react";



const RecipesList = ({query})=>{
    
    const [recipesData, setRecipesData] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
        .then((res)=> {
            return res.json()
        })
        .then((data)=>{
            setRecipesData(data.recipes)
        })
    },[])
    

    return(
        <>
        {!recipesData.length ? (<CountriesListShimmer/>):(<div className="flex flex-wrap m-5">{
            recipesData.filter((recipe)=>{
                return (
                    recipe.name.toLowerCase().includes(query) || recipe.cuisine.toLowerCase().includes(query)
                )
            })
            .map((recipe)=>{
                return <Recipes data ={recipe} name ={recipe.name} cuisine = {recipe.cuisine} servings = {recipe.servings} image = {recipe.image} key ={recipe.id} calories={recipe.caloriesPerServing} />
            })
        }</div>)}
        </>
    )
}

export default RecipesList