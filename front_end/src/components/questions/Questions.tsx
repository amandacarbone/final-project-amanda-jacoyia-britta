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

export function Questions() {

    const [category, setCategory] = useState('');
    const [area, setArea] = useState('');
    const [showResults, setShowResults] = useState(false);

    function handleDietChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCategory((event.target as HTMLInputElement).value);
    };

    function handleCuisineChange(event: React.ChangeEvent<HTMLInputElement>) {
        setArea((event.target as HTMLInputElement).value);
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