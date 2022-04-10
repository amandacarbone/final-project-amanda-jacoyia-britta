import React, { useState, useEffect } from 'react';
import { getMealByCategory } from '../../services/api';
import { Meal } from '../../models/mealResponse';
import {
    Grid,
    Typography,
    Stack,
    Button,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel
} from '@mui/material';

export function Diet() {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((response) => {
                setCategories(response.strMeal)
            })
    }, [setCategories])

    return (
        <React.Fragment>
            <Typography variant="h6" align='center' gutterBottom>
                What are your dietary preferences?
            </Typography>
            <FormControl>
                <RadioGroup name='radio-buttons-group'>
                    <FormControlLabel value='chicken' control={<Radio/>} label='Chicken'/>
                    <FormControlLabel value='beef' control={<Radio/>} label='Beef'/>
                    <FormControlLabel value='seafood' control={<Radio/>} label='Seafood'/>
                    <FormControlLabel value='vegetarian' control={<Radio/>} label='Vegetarian'/>
                    <FormControlLabel value='everything' control={<Radio/>} label='I eat everything!'/>
                </RadioGroup>
            </FormControl>
        </React.Fragment>
    );
}