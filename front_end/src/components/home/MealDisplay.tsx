import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Meal } from "../../models/mealResponse";

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
import { RecipeDetail } from "./../recipes/RecipeDetail";




const cards = [1];
// 2, 3, 4, 5, 6, 7, 8, 9

const theme = createTheme();

export function MealDisplay(props:{meal:Meal}) {

  const [meal, setMeal] = useState(props.meal);

  useEffect(() => {
    setMeal(props.meal)
  }, [props])



  return (


    <div className='homeContainer'>

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
        image={meal?.strMealThumb}
        alt="recipeDetails"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {meal.strMeal}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        {meal?.strCategory}
        </Typography>
      </CardContent>
      <CardActions> 
      <Button size="small" className='recipebutton'><Link to={`/recipedetail/${meal?.idMeal}`}>Recipe</Link></Button>
      </CardActions>
      </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
     
    </div>
  );
}






    {/* <div>
             <img className='thumbimg' alt='areathumbnail'src={(props.meal.strMealThumb) }></img>
            
             </div> */}
              {/* These will become live links after we host our site */}
                {/* <a target='_blank' rel='noreferrer' href={'' + props.meal.strIngredient + props.meal.strArea + props.meal.idMeal} ></a> */}
                   
                {/* Meal: {props.meal.strIngredient} */}
                
               

  
