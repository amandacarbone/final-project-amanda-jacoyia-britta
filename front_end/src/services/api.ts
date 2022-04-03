import {Meal, MealResponse} from "../models/mealResponse"
import axios from  "axios"

// gets meals based on ingredients, catergories and area params
export function getFilterMeals(
    ingrediant?: string,
    catergory?: string,
    area?: string,

  ): Promise<MealResponse> {
    return axios
      .get<any>(
        "https://www.themealdb.com/api/json/v1/1/filter.php",
        {
          params: {
            i: ingrediant,
            c: catergory,
            a: area,
          },
        }
      )
      .then(response => {
           
        return response.data})
}
  
//displays all categories 
export function getCategories(): Promise<MealResponse> {
    return axios
      .get<MealResponse>(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
      )
      .then((reponse) => reponse.data);
  }
