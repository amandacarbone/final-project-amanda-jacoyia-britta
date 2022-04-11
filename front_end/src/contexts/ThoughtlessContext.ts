import { User } from "../models/User";
import { Meal } from "../models/mealResponse";
import { createContext } from "react";

export interface ThoughtlessContextModel {
    users: User[];
    favoriteMeals: Meal[];
    loggedUsers: boolean;
    addUser: (user: User) => void;
    addFavorite: (favoriteMeal: Meal) => void;
    removeFavorite: (idMeal: string) => void;
};

const defaultValue: ThoughtlessContextModel = {
    users: [],
    favoriteMeals: [],
    loggedUsers: false,
    addUser: () => {},
    addFavorite: () => {},
    removeFavorite: () => {}
};

export const ThoughtlessContext = createContext<ThoughtlessContextModel>(defaultValue);