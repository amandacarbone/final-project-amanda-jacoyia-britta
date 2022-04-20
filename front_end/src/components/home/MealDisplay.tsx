import { useEffect, useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Meal } from "../../models/mealResponse";
import {
  Button,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThoughtlessContext } from "../../contexts/ThoughtlessContext";
import { getMealByArea } from "../../services/api";


export function MealDisplay() {

  const { addFavorite } = useContext(ThoughtlessContext);

  const [meals, setMeals] = useState<Meal[]>([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect (()=>{

      getMealByArea('American')
      .then(repsonse => setMeals(repsonse.meals))

  }, []);



  return (

    <Container sx={{ py: 15 }} maxWidth="md">
      <Typography
        variant='h3'
        align='center'
      >
        Welcome to Thoughtless!
      </Typography>
      <Typography
        align='center'
      >
      Thoughtless helps to answer one of the most difficult questions to ever be asked: 
      "What do you want for dinner?"
      We serve up random a shortlist of recipes (with photos, ingriedients, and instructions) to get your mouth watering and your mind relaxing.
      </Typography>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={27}
        sx={{
          mt: -5
        }}
      >
        {meals.map((meal) => (
          <Grid item md={4} lg={4} xl={4} key={meal.idMeal}>
            <Card
              sx={{
                width: 345, 
                height: 420,
                margin: -10,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
            <CardMedia
              component='img'
              height='300'
              width='300'
              image={meal?.strMealThumb}
              alt='recipeDetails'
            />
            <CardContent>
              <Typography
                gutterBottom
                component='div'
                variant="subtitle2"
              >
                {meal.strMeal}
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                component={RouterLink} 
                to={`/recipedetail/${meal.idMeal}`} 
                sx={{
                  background: '#939393',
                  color: '#FFFFFF',
                  '&:hover': {
                    background: '#848484',
                    color: '#FFFFFF'
                  }
                }}
              >
                Get Recipe
              </Button>
              <IconButton
                aria-label="favorite"
                sx={{
                  color: '#ff8896',
                  background: 'none',
                  '&:hover': {
                    color: '#ffbec5',
                    background: 'none'
                  }
                }}
                onClick={() => addFavorite(meal)}
              >
                <FavoriteIcon/>
              </IconButton>
            </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
    </Container>

  );
}
                
               

  
