import {Meal} from '../models/mealResponse';
import { Result } from './Result';




export function SearchResultsList(props:{meals:Meal[]}){

    


return(

<div className='resultsArea'>


    <div className='searchedMeals'>

        {props.meals.map(meal => <Result key={meal.idMeal} meal={meal}/>)}
        
    </div>

</div>
)

}