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

    const recipeDetail = findById(id!);

    return(

        <div className='details'>

            <img src={recipeDetail?.strMealThumb} alt="random" />
            <h3>{recipeDetail?.strMeal}</h3>
            <p>{recipeDetail?.strInstructions}</p>
        </div>

    )
}

