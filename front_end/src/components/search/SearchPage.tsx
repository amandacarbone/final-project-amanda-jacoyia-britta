import { Typography } from "@mui/material";
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
   
   //This will use the services page to get the search results
  useEffect(() => {
        

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
                
        }
    , [searchItem]);




    return(

        <div>
       
       <SearchForm onSubmit={setSearchItem}></SearchForm>

       {results === null ? 
        <Typography 
            variant='h5'
            mt={20}
            sx={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}
            >
            No results
        </Typography> : <SearchResultsList meals={results}></SearchResultsList>}
       
        </div>

    )
}