import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ThoughtlessContext } from "../../contexts/ThoughtlessContext";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export function Favorites() {

    const { favoriteMeals, removeFavorite } = useContext(ThoughtlessContext);

    function showRemoveButton() {
        let foundItem = favoriteMeals.find((meal) => meal.idMeal)
        if (foundItem) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <div>
                {favoriteMeals.map((meal) => (
                    <ul key={meal.idMeal}>
                        <li><img src={meal?.strMealThumb}/></li>
                        <li><h3>{meal.strMeal}</h3></li>
                        <button className={showRemoveButton() === true ? "material-icons" : "hide"} 
                                onClick={() => removeFavorite(meal.idMeal)}>
                                    cancel
                        </button>
                    </ul>
                ))}
            </div>
        </div>
    );

}