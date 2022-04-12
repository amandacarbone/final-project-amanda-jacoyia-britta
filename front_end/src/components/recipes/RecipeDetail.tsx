import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Meal } from "../../models/mealResponse";
import { getMealById } from "../../services/api";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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


           
      <main>
       
       <Container sx={{ py: 8 }} maxWidth="md">
         {/* End hero unit */}
         <Grid container spacing={4}>
           {cards.map((card) => (
             <Grid item key={card} xs={12} sm={6} md={4}>
               <Card
                 sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
               >
                 <CardMedia
                   component="img"
                   sx={{
                     // 16:9
                     pt: '56.25%',
                   }}
                   image={recipeDetail?.strMealThumb}
                   alt="random"
                 />
                 <CardContent sx={{ flexGrow: 1 }}>
                   <Typography gutterBottom variant="h5" component="h2">
                   {recipeDetail?.strMeal}
                   </Typography>
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
                   {/* <Typography>
                     {props.meal.strIngredient}
                   </Typography> */}
                   {recipeDetail?.strInstructions}
                 </CardContent>
                 <CardActions>
                 <Button size="small"><Link to={`/recipedetail/${recipeDetail?.idMeal}`}>Recipe</Link></Button>
                   {/*  */}
                 </CardActions>
               </Card>
             </Grid>
           ))}
         </Grid>
       </Container>
     </main>
  
       

   </div>
 );
}


   










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

   

    