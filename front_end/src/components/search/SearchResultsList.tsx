import {Meal} from '../../models/mealResponse';
import { MealDisplay } from '../home/MealDisplay';
//import { Result } from './Result';




export function SearchResultsList(props:{meals:Meal[]}){

return(

<div>
    <div>
    
    {/* How About this? */}

        {props.meals.map(meal => <MealDisplay key={meal.idMeal} meal={meal}/>)}
        
    </div>
</div>
)

}