import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";


export function RecipeDetail(){

    const [recipe, setRecipe] = useState([]);
    


    const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;

    async function getMealById() {

        let result = await axios.get(api);
        console.log(result.data)

    }

    return(

        <div className='details'>
            <h3 onClick={getMealById}> Test</h3>

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

   

    