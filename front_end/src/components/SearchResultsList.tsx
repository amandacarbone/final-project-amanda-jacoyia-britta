import {Meal} from '../models/mealResponse';
import { Result } from './Result';




export function SearchResultsList(props:{meals:Meal[]}){

    


return(

<div className='resultsArea'>


    <div className='searchedMeals'>

        {props.meals && props.meals.map((meal: any, i: any) => <Result key={i} meal={meal}/>)}
        
    </div>

</div>
)

}