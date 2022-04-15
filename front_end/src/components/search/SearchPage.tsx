import { useEffect } from "react";
import { useState } from "react"
import { 
    getMealByCategory, 
    getMealByIngredient, 
    getMealByArea, 
    getMealById
} from "../../services/api";

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
        // else if(searchItem == "chicken" || "beef" || "dessert" || "seafood" || "vegan" || "miscellaneous" || "lamb" || "pasta" || "side" || "starter" || "goat" || "vegetarian" || "goat")
        // {
        // getMealByCategory(searchItem).then(data => setResults(data.meals));
        // console.log("search by category");
        // console.log(window.location);
        // } 
        // else if (searchItem == "american" || "british" || "canadian" || "chinese" || "croatian" || "dutch" || "egyptian" || "french" || "greek" || "indian" || "irish" || "italian" || "jamaican" || "japanese" || "kenyan" || "mexican" || "malaysian" || "moroccan" || "spanish" || "thai" || "turkish" || "polish" || "portuguese" || "russian" || "tunisian" || "unknown" || "vietnamese")
        // {
        //     getMealByArea(searchItem).then(data => setResults(data.meals));
        //     console.log("search by area")
        //     console.log(window.location);
        // }else {
        //     getMealByIngredient(searchItem).then((data: { meals: any; }) => setResults(data.meals))
        //     console.log("search by ingredient")
        // }

            switch(searchItem) {
                case "chicken": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "beef": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "dessert": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "seafood": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "vegan": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "miscellaneous": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "lamb": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "pasta": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "side": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "starter": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "goat": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "vegetarian": getMealByCategory(searchItem).then(data => setResults(data.meals));
                break;
                case "american": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "british": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "canadian": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "chinese": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "croatian": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "dutch": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "egyptian": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "french": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "greek": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "indian": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "irish": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "italian": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "jamaican": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "japanese": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "kenyan": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "mexican": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "malaysian": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "moroccan": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "spanish": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "swedish": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "thai": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "turkish": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "ukrainian": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "vietnamese": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                case "african": getMealByArea(searchItem).then(data => setResults(data.meals));
                break;
                default: getMealByIngredient(searchItem).then((data: { meals: any; }) => setResults(data.meals));
            }

        // if (searchItem.length) {
        //     getMealByIngredient(searchItem).then(response => {
        //         setResults(response.meals)
        //         console.log(results)
        //         console.log(searchItem);
               
        //     });
                
        }
    , [searchItem]);




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