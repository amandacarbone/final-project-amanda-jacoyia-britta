
import { useEffect, useState } from "react";
import { Meal, MealResponse } from "../models/mealResponse";
import { getMealByArea, getMealByIngredient } from "../services/api";
import { MealDisplay } from "./MealDisplay";


export function Home() {


   
      

    const [popular, setPopular] = useState<Meal[]>([])



    useEffect (()=>{

        getMealByArea('American').then(repsonse => setPopular(repsonse.meals))
    } ,[])

    return (


        <div className='homepage'>
            
            {popular.map((meal ) => < MealDisplay key={meal.idMeal} meal={meal}></MealDisplay>)}
           
        </div>

       
        
    );

}