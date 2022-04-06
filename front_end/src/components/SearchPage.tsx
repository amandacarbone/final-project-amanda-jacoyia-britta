import { useEffect } from "react";
import { useState } from "react"
import { getMealByingredient } from "../services/api";
import { Result } from "./Result";
import { SearchForm } from "./SearchForm";

export function SearchPage() {

    const [searchItem, setSearchItem] = useState('');
    const [results, setResults] = useState <any>([]);



    //This will use the services page to get the search results


    useEffect(() => {
        if (searchItem) {
            getMealByingredient(searchItem).then(response => {
                console.log(results)
                console.log(searchItem)
                setResults(response.data.meals);
            });
                
        }
    }, []);




    

    return(

        <div>

            {/* <input className='searchTerm' placeholder= '' value={searchItem} onChange={(e) => setSearchItem (e.target.value) } type='text' name='SearchRecipe' />

            {results.map((recipe, i) => <RecipeSearch key={i} recipe={recipe}></RecipeSearch>)}
        */}
       
       <SearchForm onSubmit={setSearchItem}></SearchForm>
       <Result meal={results}></Result>
       
        </div>

    )
}