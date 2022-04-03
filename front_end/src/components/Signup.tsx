import React from 'react';
import { 
    Grid, 
    TextField,
    InputAdornment,
    Button
} from '@mui/material';
import '../styles/Account.css';
const logo = require('../assets/logo.png');
const food = require('../assets/food.png');

export function Signup() {

    return (
        <div>
            <Grid container className='loginContainer'>
                <Grid item xs={12} sm={6}>
                    <img src={food} alt='food'/>
                </Grid>
                <Grid container item xs={12} sm={6} className='loginForm'>
                    <div/>
                    <div className='loginDiv'>
                        <Grid container className='logoContainer'>
                            <img src={logo} alt='logo'/>
                        </Grid>
                        <TextField
                            id='firstName'
                            label='First Name'
                            variant='standard'
                            margin='normal'
                        />
                        <TextField
                            id='lastName'
                            label='Last Name'
                            variant='standard'
                            margin='normal'
                        />
                        <TextField
                            id='email'
                            label='Email'
                            variant='standard'
                            margin='normal'
                        />
                        <TextField
                            id='password'
                            label='Password'
                            variant='standard'
                            margin='normal'
                        />
                        <div className='buttonSpacer'/>
                        <Button
                            className='button'
                            variant='contained'
                        >Sign Up</Button>
                        <div className='buttonSpacer'/>
                        <Button>Already have an account?</Button>
                    </div>
                    <div/>
                </Grid>
            </Grid>
        </div>
    )

}