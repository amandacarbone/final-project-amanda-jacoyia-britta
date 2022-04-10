export interface Category {
    idCategory: string,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string
}

export interface CategoryFilter {
    meals: [{
        strMeal: string,
        strMealThumb: string,
        idMeal: string
    }]
}