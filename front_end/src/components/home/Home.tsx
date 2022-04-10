

import { useEffect, useState } from "react";
import { Meal } from "../../models/mealResponse";
import { getMealByArea } from "../../services/api";
import { MealDisplay } from "./MealDisplay";
import { RecipeDetail } from "./../recipes/RecipeDetail";



export function Home() {

    const [area, setArea] = useState<Meal[]>([])

    useEffect (()=>{

        getMealByArea('American').then(repsonse => setArea(repsonse.meals))
    } ,[])

    return (

        <div className='homepage'>
            
            {area.map((meal ) => < MealDisplay key={meal.idMeal} meal={meal}></MealDisplay>)}
           
        </div>

       
        
    );

}