import { useState } from "react";
import { Link } from "react-router-dom";
import { Meal } from "../../models/mealResponse";

interface MealsProp {
    meal: Meal;
}

export function QuestionResultItem({ meal }: MealsProp) {

    return (
        <div>
            <Link to={`/recipedetail/${meal.idMeal}`}/>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb}/>
        </div>
    );

}