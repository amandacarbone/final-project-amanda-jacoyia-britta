import { Meal } from "../models/mealResponse";

export function Result(props: { meal: Meal }) {

    return (
        <div>
            <img src={props.meal.strMealThumb} alt="meal thumb"/>
        </div>
    );

}