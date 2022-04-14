import { Meal } from "../../models/mealResponse";



import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useEffect, useState } from "react";



const cards = [1 ];


const theme = createTheme();

export function Result(props: { meal: Meal }) {

  const [meal, setMeal] = useState(props.meal);

  useEffect(() => {
    setMeal(props.meal)
  }, [props])


    return (

        <div className="meal">
           
  

            
        </div>
    );

}

{/* {props.meal.strMeal}
            {props.meal.strIngredient}
            <img src={props.meal.strMealThumb} alt="meal thumb"/> */}
