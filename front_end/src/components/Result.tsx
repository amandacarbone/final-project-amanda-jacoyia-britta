import { useEffect, useState } from "react";
import { MealResponse, Meal } from "../models/mealResponse";
import { getFilterMeals } from "../services/api";

export function Result() {

    const[filter, setFilter] = useState("")
    const [mealResult, setMealResult] = useState<any>([]);

    useEffect(() => {

        getFilterMeals(filter).then(data => setMealResult(data.meals))
    }, [])

    function onSubmit(e: any) {
        e.preventDefault();
        setFilter(e.target.value);
        
    }

    return(
        <div>
                <form>
                    <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="ingrediant, category, or area"  type="text"/> 
                    <button 
                    onClick={onSubmit}>Search</button>
                    {/* {console.log(filter)} */}
                    {console.log(window.location)}
                </form>

            <div>
                {mealResult.map((meal:any) => <><h1 key={meal.id}>{meal.strMeal}</h1> <img  key={meal.id} src={meal.strMealThumb}></img></>)}
               
            </div>
        </div>
    )
}
