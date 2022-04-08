import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";


export function RecipeDetail(){

    


    const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;

    async function getDetails() {

        let result = await axios.get(api);
        console.log(result.data)

    }
    

    return(

        <div className='details'>
            <h1 onClick={getDetails}> Test</h1>

        </div>

    )
}