import { Meal, MealResponse } from "../models/mealResponse";
import axios from "axios";
import { AnyARecord } from "dns";

// gets meals based on ingredient
export function getMealByIngredient(ingredient: string): Promise<MealResponse> {
  return axios
    .get<any>("https://www.themealdb.com/api/json/v1/1/filter.php", {
      params: {
        i: ingredient,
      },
    })
    .then((response) => {
      return response.data;
    });
}

// gets meals based on category
export function getMealByCategory(category: string): Promise<MealResponse> {
  return axios
    .get<any>("https://www.themealdb.com/api/json/v1/1/filter.php", {
      params: {
        c: category,
      },
    })
    .then((response) => {
      return response.data;
    });
}

// gets meals based on cruisine
export function getMealByArea(area: string): Promise<any> {
  return axios
    .get<any>("https://www.themealdb.com/api/json/v1/1/filter.php", {
      params: {
        a: area,
      },
    })
    .then((response) => {
      return response.data;
    });
}

//displays all categories
export function getCategories(): Promise<MealResponse> {
  return axios
    .get<any>("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((reponse) => reponse.data);
}

// gets full meal detail by id
export function getMealById(id: string): Promise<any> {
  return axios
    .get<any>("https://www.themealdb.com/api/json/v1/1/lookup.php", {
      params: {
        i: id,
      },
    })
    .then((response) => {
      return response.data;
    });
}
