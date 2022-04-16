import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ThoughtlessContext } from "../../contexts/ThoughtlessContext";
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
import DeleteIcon from '@mui/icons-material/Delete';

export function Favorites() {

  const { favoriteMeals, removeFavorite } = useContext(ThoughtlessContext);

    return (

        <Container sx={{ py: 40 }} maxWidth="md">
      <Grid 
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={28}
        margin={-28}
      >
        {favoriteMeals.map((meal) => (
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
                onClick={() => removeFavorite(meal.idMeal)}
              >
                <DeleteIcon/>
              </IconButton>
            </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
    </Container>
    
    );

}