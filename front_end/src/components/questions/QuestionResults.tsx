import { useEffect, useState } from "react";
import { Meal } from "../../models/mealResponse";
import { getMealByArea, getMealByCategory } from '../../services/api';
import { QuestionResultItem } from "./QuestionResultItem";

interface QuestionProps {
    category: string,
    area: string
}

export function QuestionResults({category, area}: QuestionProps) {

    const [mealResults, setMealResults] = useState<Meal[]>([]);

    useEffect(() => {
        getMealByCategory(category).then(data => {
            setMealResults(data.meals)
        });

        getMealByArea(area).then(data => {
            setMealResults(data.meals)
        });
    }, [category, area]);

    return (
        <div>
            {mealResults.map((meal) => <QuestionResultItem meal={meal} key={meal.idMeal}/>)}
        </div>
    );

}