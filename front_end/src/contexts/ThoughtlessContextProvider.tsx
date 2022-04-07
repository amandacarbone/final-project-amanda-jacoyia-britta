import { ReactNode, useEffect, useState } from 'react';
import { User } from '../models/User';
import { Meal } from '../models/mealResponse';
import { ThoughtlessContext } from './ThoughtlessContext';
import { toast } from 'react-toastify';

export function ThoughtlessContextProvider(props: { children: ReactNode }) {

    const [users, setUsers] = useState<User[]>([]);
    const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>([]);
    // const [loggedUsers, setLoggedUser] = useState<boolean>(false);

    const favoriteAdded = () => toast.success('Favorite Added', {
        position: 'top-right',
        autoClose: 900,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
    });

    const favoriteRemoved = () => toast.error('Favorite Removed', {
        position: 'top-right',
        autoClose: 900,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
    });

    function addUser(user: User) {
        setUsers([...users, user])
    }

    // function loginUser() {
    //     setLoggedUser(true)
    // }

    function addFavorite(favoriteMeal: Meal) {
        if (!favoriteMeals?.some((addedMeal: Meal): boolean => {
            return addedMeal.idMeal === favoriteMeal.idMeal
        })) {
            setFavoriteMeals((prev) => [...prev, favoriteMeal]);
            favoriteAdded();
        }
    }

    function removeFavorite(idMeal: number) {
        setFavoriteMeals(favoriteMeals.filter((f) => f.idMeal != idMeal));
        favoriteRemoved();
    }

    return (

        <ThoughtlessContext.Provider value={{ 
            users, 
            // loggedUsers, 
            addUser, 
            // loginUser, 
            favoriteMeals, 
            addFavorite, 
            removeFavorite
        }}>
            {props.children}
        </ThoughtlessContext.Provider>

    );

}