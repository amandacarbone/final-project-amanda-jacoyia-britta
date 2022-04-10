import React from 'react';
import {
    Typography,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel
} from '@mui/material';

export function Cuisine() {
    return (
        <React.Fragment>
            <Typography variant="h6" align='center' gutterBottom>
                What are you in the mood for?
            </Typography>
            <FormControl>
                <RadioGroup name='radio-buttons-group'>
                    <FormControlLabel value='american' control={<Radio/>} label='American'/>
                    <FormControlLabel value='european' control={<Radio/>} label='European'/>
                    <FormControlLabel value='asian' control={<Radio/>} label='Asian'/>
                    <FormControlLabel value='latin' control={<Radio/>} label='Latin'/>
                    <FormControlLabel value='mediterranean' control={<Radio/>} label='Mediterranean'/>
                </RadioGroup>
            </FormControl>
        </React.Fragment>
    );
}