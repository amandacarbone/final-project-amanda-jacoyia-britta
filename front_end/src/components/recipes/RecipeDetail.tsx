import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Meal } from "../../models/mealResponse";
import { getMealById } from "../../services/api";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1];
// 2, 3, 4, 5, 6, 7, 8, 9

const theme = createTheme();



export function RecipeDetail(){

    const [recipe, setRecipe] = useState<Meal[]>([]);

    function findById(id: string) {
        const foundRecipe = recipe.find((recipe) => recipe.idMeal === id);
        return foundRecipe ? foundRecipe : undefined;
    }
    
    useEffect(() => {
        getMealById(id!).then((data) => {
            setRecipe(data.meals)
        })
    }, [])

    const id: string | undefined = useParams().id;

    const recipeDetail = findById(id!);

    return(

        <div className='details'>

<Container sx={{ py: 8 }} maxWidth="md" >
          {/* End hero unit */}
          <Grid container spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center" >
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={8} md={6}>
                <Card
                  sx={{maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}
             >
      <CardMedia
        component="img"
        height="300"
        image={recipeDetail?.strMealThumb}
        alt="recipeDetails"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {recipeDetail?.strMeal}
        </Typography>

        
        <Typography>
        {recipeDetail?.strCategory}
        </Typography>


        <Typography variant="body2" color="text.secondary">
        <div className='ingredientlist'>
        
                   <li>{recipeDetail?.strIngredient1}  {recipeDetail?.strMeasure1}</li>
                  <li>{recipeDetail?.strIngredient2}  {recipeDetail?.strMeasure2}</li>
                  <li>{recipeDetail?.strIngredient3}  {recipeDetail?.strMeasure3}</li>
                  <li>{recipeDetail?.strIngredient4}  {recipeDetail?.strMeasure4}</li>
                  <li>{recipeDetail?.strIngredient5}  {recipeDetail?.strMeasure5}</li>
                  <li>{recipeDetail?.strIngredient6}  {recipeDetail?.strMeasure6}</li>
                  <li>{recipeDetail?.strIngredient7}  {recipeDetail?.strMeasure7}</li>
                  <li>{recipeDetail?.strIngredient8}  {recipeDetail?.strMeasure8}</li>
                  <li>{recipeDetail?.strIngredient9}  {recipeDetail?.strMeasure9}</li>
                  <li>{recipeDetail?.strIngredient10}  {recipeDetail?.strMeasure10}</li>
                  <li>{recipeDetail?.strIngredient11}  {recipeDetail?.strMeasure11}</li>
                  <li>{recipeDetail?.strIngredient12}  {recipeDetail?.strMeasure12}</li>
                  <li>{recipeDetail?.strIngredient13}  {recipeDetail?.strMeasure13}</li>
                  <li>{recipeDetail?.strIngredient14}  {recipeDetail?.strMeasure14}</li>
                  <li>{recipeDetail?.strIngredient15}  {recipeDetail?.strMeasure15}</li>
                  <li>{recipeDetail?.strIngredient16}  {recipeDetail?.strMeasure16}</li>
                  <li>{recipeDetail?.strIngredient17}  {recipeDetail?.strMeasure17}</li>
                  <li>{recipeDetail?.strIngredient18}  {recipeDetail?.strMeasure18}</li>
                  <li>{recipeDetail?.strIngredient19}  {recipeDetail?.strMeasure19}</li>
                  <li>{recipeDetail?.strIngredient20}  {recipeDetail?.strMeasure20}</li>
                  </div>
                   {recipeDetail?.strInstructions}
        </Typography>
      </CardContent>
      </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  );
}    


           
      {/* <main>
       
       <Container sx={{ py: 8 }} maxWidth="md">
         {/* End hero unit */}
         {/* <Grid container spacing={4}>
           {cards.map((card) => (
             <Grid item key={card} xs={12} sm={6} md={4}> */}
               {/* <Card
                 sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
               >
                 <CardMedia  */}


                   {/* component="img"
                   sx={{
                     // 16:9
                     pt: '56.25%',
                   }}
                   
                   image=
                   alt="random" */}
                 {/* />
                 <CardContent sx={{ flexGrow: 1 }}>
                   <Typography gutterBottom variant="h5" component="h2">
                   
                   </Typography>
                    */}
                   {/* <Typography>
                     {props.meal.strIngredient}
                   </Typography> */}
                   {/* {recipeDetail?.strInstructions}
                 </CardContent>
                 <CardActions>
                   {/*  */}
                 {/* </CardActions>
               </Card> */}
             {/* </Grid>
           ))}
         </Grid>
       </Container> */}
//      </main>
//    */}
       

//    </div>
//  );
// }


   










//import axios from "axios";
// import { result } from "lodash";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { json } from "stream/consumers";
// import { Meal } from "../models/mealResponse";
// import { MealDisplay } from "./MealDisplay";
// import { Recipe } from "./Recipes"; 


// export function RecipeDetail(props:{meal:Meal}) {

//     const [recipes , setRecipes] = useState([])

    

    
//     let idMeal = props.meal.idMeal;

//         useEffect(() =>{
//             fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)

//             .then((response) => response.json())
//             .then((meals) => setRecipes(meals.meals[0]) )
//             .catch((error) => console.log(error));

//         },[idMeal])




//     return (

       
//         <div>

//             {props.meal.strIngredient}
//         </div>
//     )

// }


    
        

    
    

    // const {mealId} = useParams();

    //const [recipes, setRecipes] = useState<Meal[]>([])

    // useEffect(() =>{

    //    getDetails() 
    // }, [])


    // const api = ``;

    // async function getDetails() {

    //     let result = await axios.get(api);
    //     console.log(result.data)

   

    