import { useEffect, useState, useContext } from "react";
import { Meal } from "../../models/mealResponse";
import { getMealByArea, getMealByCategory } from '../../services/api';
import { Link as RouterLink } from "react-router-dom";
import { Questions } from "./Questions";
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
import FavoriteIcon from '@mui/icons-material/Favorite';

interface QuestionProps {
    category: string,
    // area: string
}

export function QuestionResults({category}: QuestionProps) {

    const [meals, setMeals] = useState<Meal[]>([]);
    const [showQuestions, setShowQuestions] = useState(false);

    const { addFavorite } = useContext(ThoughtlessContext);

    useEffect(() => {

        getMealByCategory(category).then(data => {
            setMeals(data.meals)
        });

        // getMealByArea(area).then(data => {
        //     setMealResults(data.meals)
        // });

    }, [category]);

    function handleResetQuestions() {
        setShowQuestions(true);
    }

    return (
        <div>
            {showQuestions === true ? <Questions/> : (
                <Container sx={{ py: 10 }} maxWidth="md">
                <Container sx={{ mb: 15 }}>
                    <Typography
                        variant='h5'
                        align='center'
                    >
                        You Might Like These!
                    </Typography>
                    <Button
                        fullWidth
                        variant='contained'
                        sx={{
                            mt: 5,
                            background: '#939393',
                            color: '#FFFFFF',
                            '&:hover': {
                            background: '#848484',
                            color: '#FFFFFF'
                        }
                        }}
                        onClick={handleResetQuestions}
                    >
                        Reset
                    </Button>
                </Container>
                <Grid 
                  container
                  direction='row'
                  justifyContent='center'
                  alignItems='center'
                  spacing={28}
                  margin={-28}
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
            )}
        </div>
    );

}