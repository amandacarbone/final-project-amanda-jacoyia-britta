import { Meal } from "../models/mealResponse";

export function Result(props: { meal: Meal }) {

    return (
        <div className="meal">
           
            {props.meal.strMeal}
            <img src={props.meal.strMealThumb} alt="meal thumb"/>
        </div>
    );

}