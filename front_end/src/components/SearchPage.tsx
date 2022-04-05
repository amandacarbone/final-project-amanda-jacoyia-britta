import { useEffect } from "react";
import { useState } from "react"
import { Meal, MealResponse } from "../models/mealResponse";
import { Meals } from "../models/Meals";
import { getMealByIngrediant } from "../services/api";
import { SearchResults } from "./SearchResults";

export function SearchPage() {

    const [searchItem, setSearchItem] = useState('');
    const [results, setResults] = useState <Meal[]>([]);





    //This will use the services page to get the search results


    useEffect(() => {
        if (searchItem === '') {

        } else {
            getMealByIngrediant(searchItem).then(response => setResults(response.meals))
        }
         console.log(results)
        }, [])

   

        
       
    return(

        <div>

           <h1> Thoughtless Meal Search </h1>



             <input className='searchTerm' placeholder= 'ingredient' value={searchItem} onChange={(e) => setSearchItem (e.target.value) } type='text' name='SearchRecipe' />

            {results.map((meal:any, i:any) => <SearchResults key={i} meal={meal}></SearchResults>)}
        
     
    
        </div>


{/* <button className='button' onClick={() => setSearchItem(searchItem)}>Search</button> */}

    );
}