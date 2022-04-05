import { useEffect } from "react";
import { useState } from "react"

export function SearchPage() {

    const [searchItem, setSearchItem] = useState('');
    const [results, setResults] = useState <[]>([]);



    //This will use the services page to get the search results


    // useEffect(() => {
    //     if (searchItem === '') {
    //     } else {
    //         searchRecipes(searchItem).then(response => setResults(response.data))

    //     }, ([searchItem])

    //})




    

    return(

        <div>

            {/* <input className='searchTerm' placeholder= '' value={searchItem} onChange={(e) => setSearchItem (e.target.value) } type='text' name='SearchRecipe' />

            {results.map((recipe, i) => <RecipeSearch key={i} recipe={recipe}></RecipeSearch>)}
        */}
       
       
        </div>

    )
}