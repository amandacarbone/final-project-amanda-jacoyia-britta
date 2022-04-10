import { useEffect } from "react";
import { useState } from "react"
import { 
    getMealByCategory, 
    getMealByIngredient, 
    getMealByArea, 
    getMealById
} from "../../services/api";
import { Result } from "./Result";
import { SearchForm } from "./SearchForm";
import { SearchResultsList } from "./SearchResultsList";

export function SearchPage() {

    const [searchItem, setSearchItem] = useState('');
    const [results, setResults] = useState <any>([]);
    const [noResults, setNoResults] = useState('');


   
   //This will use the services page to get the search results
  useEffect(() => {
        // if(!searchItem){
        //     setNoResults('No recipes found with that name, please try again')
        // }
        // else if(searchItem === "chicken" || "beef" || "dessert" || "seafood" || "vegan" || "miscellaneous" || "lamb" || "pasta" || "side" || "starter" || "goat" || "vegetarian" || "goat")
        // {
        // getMealByCategory(searchItem).then(data => setResults(data.meals));
        // } 
        // else if (searchItem === "american" || "british" || "canadian" || "chinese" || "croatian" || "dutch" || "egyptian" || "french" || "greek" || "indian" || "irish" || "italian" || "jamaican" || "japanese" || "kenyan" || "mexican" || "malaysian" || "moroccan" || "spanish" || "thai" || "turkish" || "polish" || "portuguese" || "russian" || "tunisian" || "unknown" || "vietnamese")
        // {
        //     getMealByArea(searchItem).then(data => setResults(data.meals))
        // }else {
        //     getMealByIngredient(searchItem).then((data: { meals: any; }) => setResults(data.meals))
        // }


        if (searchItem.length) {
            getMealByIngredient(searchItem).then(response => {
                setResults(response.meals)
                console.log(results)
                console.log(searchItem);
               
            });
                
        }
    }, [searchItem]);




    return(

        <div>

            {/* <input className='searchTerm' placeholder= '' value={searchItem} onChange={(e) => setSearchItem (e.target.value) } type='text' name='SearchRecipe' />

            {results.map((recipe, i) => <RecipeSearch key={i} recipe={recipe}></RecipeSearch>)}
        */}
       
       <SearchForm onSubmit={setSearchItem}></SearchForm>
       <SearchResultsList meals={results}></SearchResultsList>
         <p>{noResults}</p>

       {/* {console.log(getMealByArea("american"))} */}
       
        </div>

    )
}