

export interface MealResponse {
    meals: Meal[];
}

export interface Meal {
    idMeal: number;
    strMeal: string;
    strDrinkAlternate: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strIngredient: string;
    strMeasure: string;

}