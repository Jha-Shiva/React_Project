import React, { useEffect, useState } from 'react'
import recipesData from '../../recipesData'
import { useParams } from 'react-router-dom';
import Back from '../assets/arrow-left-line.svg'
import FullRecipesShimmer from './FullRecipesShimmer';


const FullRecipes = () => {

    const params = useParams()
    const recipeName = params.fullRecipes
    .split(" ")
    .map(word => word.includes("-") ? word.split("-")[0] : word)
    .join(" ");

    const [recipeData , setRecipeData] = useState(null)
    const [notFound, setNotFound] = useState(false)

    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes/search?q=${recipeName}`)
        .then((res)=> res.json())
        .then((data)=>{
            const food = data.recipes?.[0]
            setRecipeData({
                name: food.name,
                image: food.image,
                prepTimeMin: food.prepTimeMinutes,
                cookTimeMin: food.cookTimeMinutes,
                ingredients: food.ingredients,
                instructions: food.instructions
            })
            
        }).catch((err)=>{
            setNotFound(true)
        })
    },[])

    if(notFound){
        return(
            <div className="text-4xl">Not Found</div>
        )
    }

    return recipeData === null ? (<FullRecipesShimmer/>):(
        <>
        <p className='w-24 ml-16 mt-8  flex gap-1 pr-3 shadow-2xl/40 rounded' draggable onClick={()=> history.back()}>
            <img className='w-8' src={Back} alt="back" />
            <span className='text-xl text-center'>Back</span>
        </p>
        <div className='flex px-7 justify-evenly m-auto inset-0 py-14' >
            <div className='max-w-md'>
            <img className='w-full' src={recipeData.image} alt="" />
            </div>
            <div>
                <h1 className='text-2xl my-2'><b>{recipeData.name}</b></h1>
                <h2><b>Preperation Time: </b>{recipeData.prepTimeMin}</h2>
                <h2><b>Cook Time: </b>{recipeData.cookTimeMin}</h2>
                <h2 className='mt-2'><b>Ingredients:</b></h2>
                <ul>
                    {recipeData.ingredients?.map((ingredient, index)=>{
                        return (
                            <li key={index}>{ingredient}</li>
                        )
                    })}
                </ul>

                <h2 className='mt-2'><b>Instruction:</b></h2>
                <ul>
                    {
                        recipeData.instructions?.map((instruction , index)=>{
                            return(
                                <li key={index} className='list-item'>{instruction}</li>
                            )
                        })
                    }
                </ul>
            </div>
            
        </div>
        </>
    )
}

export default FullRecipes