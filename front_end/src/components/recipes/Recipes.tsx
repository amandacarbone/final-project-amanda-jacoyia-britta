import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Meal } from "../../models/mealResponse";
import { getMealById } from "../../services/api";


export function Recipes(){

    const [recipe, setRecipe] = useState<Meal[]>([]);

    function findById(id: string) {
        const foundRecipe = recipe.find((recipe) => recipe.idMeal === id);
        return foundRecipe ? foundRecipe : undefined;
    }

   

    
    useEffect(() => {
        getMealById(id!).then((data) => {
            setRecipe(data.meals)
        })
    }, [])

    const id: string | undefined = useParams().id;

    const recipeResult = findById(id!);

    return(

        <div className='details'>

            <img src={recipeResult?.strMealThumb} alt="random" />
            <h3>{recipeResult?.strMeal}</h3>
            <p>{recipeResult?.strInstructions}</p>
        </div>

    )
}

