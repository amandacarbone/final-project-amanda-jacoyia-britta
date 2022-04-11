import React, { useState } from 'react';
import {
    CssBaseline,
    Box,
    Container,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    Divider
} from '@mui/material';
import { QuestionResults } from './QuestionResults';

export function Questions() {

    const [category, setCategory] = useState('');
    const [area, setArea] = useState('');

    // const [chicken, setChicken] = useState(false);
    // const [beef, setBeef] = useState(false);
    // const [seafood, setSeafood] = useState(false);
    // const [vegetarian, setVegetarian] = useState(false);
    // const [everything, setEverything] = useState(false);

    // const [american, setAmerican] = useState(false);
    // const [mexican, setMexican] = useState(false);
    // const [asian, setAsian] = useState(false);
    // const [indian, setIndian] = useState(false);
    // const [mediterranean, setMediterranean] = useState(false);

    function handleDietChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCategory((event.target as HTMLInputElement).value);
    };

    function handleCuisineChange(event: React.ChangeEvent<HTMLInputElement>) {
        setArea((event.target as HTMLInputElement).value);
    };


    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 20 }}>
            <CssBaseline/>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                    Questions
                </Typography>
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
            <Divider/>
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
            <Button>Submit</Button>
            </Paper>

            {/* <QuestionResults category={category} area={area}/> */}


        </Container>
    );

}