import {Meal} from '../models/mealResponse'





export function SearchResults(props:{meal:Meal}){

    


return(

<div className='resultsArea'>


    <div className='searchedMeals'> 

        <ul> 
            <li>Meals {props.meal.strMeal}</li>
            <li><img alt='thumbnail url' src={(props.meal.strMealThumb)}/></li>

        </ul> 
    </div>

</div>
)

}