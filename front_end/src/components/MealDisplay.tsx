import { useEffect, useState } from "react";
import { Meal } from "../models/mealResponse";
import { getMealByArea } from "../services/api";

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
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';




const cards = [1, 2, 3];
// 2, 3, 4, 5, 6, 7, 8, 9

const theme = createTheme();

export function MealDisplay(props:{meal:Meal}) {



  return (




    <div className='homeContainer'>



           {/* <div>
             <img className='thumbimg' alt='areathumbnail'src={(props.meal.strMealThumb) }></img>
            
             </div> */}
              {/* These will become live links after we host our site */}
                {/* <a target='_blank' rel='noreferrer' href={'' + props.meal.strIngredient + props.meal.strArea + props.meal.idMeal} ></a> */}
                   
                {/* Meal: {props.meal.strIngredient} */}
                
               

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
                    image={props.meal.strMealThumb}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {props.meal.strMeal}
                    </Typography>
                    {/* <Typography>
                      {props.meal.strIngredient}
                    </Typography> */}
                  </CardContent>
                  <CardActions>
                    <Button size="small">Recipe</Button>
                    {/* <Button size="small"></Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
   

   <button > Recipe details</button>
    </div>
  );
}






    
  