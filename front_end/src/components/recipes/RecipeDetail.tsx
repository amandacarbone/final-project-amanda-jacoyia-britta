import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Meal } from "../../models/mealResponse";
import { getMealById } from "../../services/api";


export function RecipeDetail(){

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

            <p>{recipeDetail?.strIngredient}</p>
            <p>{recipeDetail?.strInstructions}</p>
            
        </div>

    )
}









//import axios from "axios";
// import { result } from "lodash";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { json } from "stream/consumers";
// import { Meal } from "../models/mealResponse";
// import { MealDisplay } from "./MealDisplay";
// import { Recipe } from "./Recipes"; 


// export function RecipeDetail(props:{meal:Meal}) {

//     const [recipes , setRecipes] = useState([])

    

    
//     let idMeal = props.meal.idMeal;

//         useEffect(() =>{
//             fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)

//             .then((response) => response.json())
//             .then((meals) => setRecipes(meals.meals[0]) )
//             .catch((error) => console.log(error));

//         },[idMeal])




//     return (

       
//         <div>

//             {props.meal.strIngredient}
//         </div>
//     )

// }


    
        

    
    

    // const {mealId} = useParams();

    //const [recipes, setRecipes] = useState<Meal[]>([])

    // useEffect(() =>{

    //    getDetails() 
    // }, [])


    // const api = ``;

    // async function getDetails() {

    //     let result = await axios.get(api);
    //     console.log(result.data)

   

    