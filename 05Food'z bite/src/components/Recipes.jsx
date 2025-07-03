import { Link } from "react-router-dom"

const Recipes = ({name, cuisine, servings, image, calories})=>{
    return(
        <Link to={`/${name}`} className="shadow-xl w-80 m-4 bg-white p-3 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
            <img src={image} alt={name + ' image'} className="rounded-xl" />
            <div className="mt-1">
                <h2 className="my-2 text-lg"><b>{name}</b></h2>
                <p><b>Cusine:</b> {cuisine}</p>
                <p><b>Servings:</b> {servings}</p>
                <p><b>cal/serve:</b> {calories}</p>
            </div>
        </Link>
    )
}

export default Recipes