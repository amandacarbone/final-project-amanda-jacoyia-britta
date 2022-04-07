import { Meal } from "../models/mealResponse";

export function Result(props: { meal: Meal }) {

    return (
        <div>
           
            {props.meal.strMeal}
            <img src={props.meal.strMealThumb} alt="meal thumb"/>
        </div>
    );

}