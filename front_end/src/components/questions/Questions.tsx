import React, { useState } from 'react';
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

export function Questions() {

    const [category, setCategory] = useState('');
    const [area, setArea] = useState('');
    const [showResults, setShowResults] = useState(false);

    function handleDietChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCategory((event.target as HTMLInputElement).value);
    };

    function handleCuisineChange(event: React.ChangeEvent<HTMLInputElement>) {
        setArea((event.target as HTMLInputElement).value);
        //define an empty array to hold the final results
        const fullResults: any[] = []
        //caliing the api with the area passed in, then storing the results in local storage
        getMealByArea(area).then(data => localStorage.setItem('area-results', JSON.stringify(data.meals))
        ).then(() => {
            //grabbing the results from local storage and mapping through them to get the full details response that includes str.catergory property
        const areaArray = JSON.parse(localStorage.getItem('area-results') as string);  
        areaArray.map((meal:any) => {
            //calling the api with each id to get the full details response
            getMealById(meal.idMeal).then(data => { 
                //Getting the full detail response, in seperate objects, so now push to empty array
                console.log(data)
                //full results returns as a promise and is "empty" even though it shows the correct values in the console log.
                //stuck here on how to use async to await the the results and actually push them to the array. Right now i think the promised array is being "pushed" which isn't really there.
                fullResults.push(data)
                //idea was once the results were in the array, i would filter through fullResults and find all that str.Caterogy == category.
        })
    });
}
)
      
};

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
                        <RadioGroup name='radio-buttons-group' value={area} onChange={handleCuisineChange}>
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