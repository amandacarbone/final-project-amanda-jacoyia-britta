import { Meal } from "../models/mealResponse";

export function MealDisplay(props:{meal:Meal}){


    return(

        <div className='homeContainer'>


           
           <div>
             <img className='thumbimg' alt='areathumbnail'src={(props.meal.strMealThumb) }></img>
            
             </div>
              {/* These will become live links after we host our site */}
                {/* <a target='_blank' rel='noreferrer' href={'' + props.meal.strIngredient + props.meal.strArea + props.meal.idMeal} ></a> */}
                   
                Meal: {props.meal.strIngredient1}
                
               
        
            </div>

    )
}