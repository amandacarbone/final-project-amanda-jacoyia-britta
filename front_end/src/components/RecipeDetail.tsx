import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Meal } from "../models/mealResponse";
import { getMealById } from "../services/api";


export function RecipeDetail(){

    const [recipe, setRecipe] = useState<any>([]);


    // const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;

    // async function getDetails() {

    //     let result = await axios.get(api);
    //     console.log(result.data.meals[0].idMeal);
    //     setRecipe(result.data.meals[0]);
      

    // }
    // let storedResult = localStorage.getItem("recipe_results");

    // let storedRecipe = JSON.parse(storedResult!); 

    // const id: string | undefined = useParams().id;

    // let recipeDetail:Meal[] = findMealId(parseInt(id!));

    // function findMealId(id: number) {
    //     const foundRecipe = storedRecipe.find((meal:any) => meal.id === id);
    //     return foundRecipe ? foundRecipe : undefined;
    //   }

  

    // useEffect(() => {
    //     console.log(findMealId(storedRecipe.idMeal));
    //     // getMealById(recipeDetail.idMeal).then(data => setRecipe(data.data.meals[0]));
    // }, []);

    return(

        <div className='details'>
            
           {/* <Link to = {'/recipedetail/' + recipe.idMeal} >RECIPES</Link>
          <img src={recipe.strMealThumb} alt={recipe.strMeal}/> */}

        </div>


    )
}

