import React, { useEffect, useState } from 'react';
import {
    CssBaseline,
    Container,
    Paper,
    Button,
    Typography,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    Divider
} from '@mui/material';
import { QuestionResults } from './QuestionResults';
import { getMealByArea, getMealById } from '../../services/api';
import{Meal} from '../../models/mealResponse';

export function Questions() {

    const [category, setCategory] = useState('');
    const [area, setArea] = useState('');
    const [showResults, setShowResults] = useState(false);

    function handleDietChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCategory((event.target as HTMLInputElement).value);
    };

    const fullResults: any[] = []
     //grabbing the results from local storage
    const areaArray = JSON.parse(localStorage.getItem('area-results') as string);
    useEffect(() => {
       if  (area !== null){
        //calling the api with the area passed in, then storing the results in local storage
        getMealByArea(area).then(data => localStorage.setItem('area-results', JSON.stringify(data.meals))
        )}

      }, [area]);

      useEffect(() => {
        if (category == null || area == null){
            setShowResults(false)
        }else if (areaArray !== null){
        
        //mapping through to get the full details response that includes str.catergory property by calling getmealbyid
        areaArray.map((meal:Meal)=> {
            const allMeals = getMealById(meal.idMeal)
            //Getting the full detail response, in seperate objects, so now push to empty array fullResults
                console.log(allMeals)
                fullResults.push(allMeals);
            
        });
        //Promise.all is something I found that I thought would return a non-promise but I don't think that's its actual function lol
        Promise.all(fullResults).then(data => {
            //this filters through the full results array and console logs the category on each meal, YAY! but....
            //I would want to ideally filter through the full results array and find all that str.Caterogy == category.
            //but this is where it is stuck in a promise.
            //matched returns an empty array when I write the full filter function as:
            // const matched = fullResults.filter(meal => meal.meals[0].strCategory === category)
            const matched = data.filter(meal => console.log(meal.meals[0].strCategory))
            
        }
        )};
      },[area, category]);

        //define an empty array to hold the final results
       
      


    function handleShowResults() {
        setShowResults(true)
    };


    return (
        <div>
            {showResults === true ? <QuestionResults category={category}/> : (
                <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 20 }}>
                    <CssBaseline/>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography variant="h6" align='center' gutterBottom>
                        What are your dietary preferences?
                        </Typography>
                    <FormControl>
                        <RadioGroup name='radio-buttons-group' value={category} onChange={handleDietChange}>
                            <FormControlLabel value='chicken' control={<Radio/>} label='Chicken'/>
                            <FormControlLabel value='beef' control={<Radio/>} label='Beef'/>
                            <FormControlLabel value='seafood' control={<Radio/>} label='Seafood'/>
                            <FormControlLabel value='vegetarian' control={<Radio/>} label='Vegetarian'/>
                        </RadioGroup>
                    </FormControl>
                    <Divider sx={{ mt: 5, mb: 5 }}/>
                    <Typography variant="h6" align='center' gutterBottom>
                        What are you in the mood for?
                    </Typography>
                    <FormControl>
                        <RadioGroup name='radio-buttons-group' value={area} onChange={(event) => setArea((event.target as HTMLInputElement).value)}>
                            <FormControlLabel value='american' control={<Radio/>} label='American'/>
                            <FormControlLabel value='mexican' control={<Radio/>} label='Mexican'/>
                            <FormControlLabel value='asian' control={<Radio/>} label='Asian'/>
                            <FormControlLabel value='indian' control={<Radio/>} label='Indian'/>
                            <FormControlLabel value='mediterranean' control={<Radio/>} label='Mediterranean'/>
                        </RadioGroup>
                    </FormControl>
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
                        onClick={handleShowResults}
                    >
                        Submit
                    </Button>
                    </Paper>
                </Container>
            )}
        </div>

    );

}