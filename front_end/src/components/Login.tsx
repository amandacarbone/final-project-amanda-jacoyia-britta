import React from 'react';
import { 
    Grid, 
    TextField,
    InputAdornment,
    Button
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import '../styles/Account.css';
const logo = require('../assets/logo.png');
const food = require('../assets/food.png');

export function Login() {

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
                            id='email'
                            label='Email'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position='start'
                                    >
                                        <AccountCircle/>
                                    </InputAdornment>
                                )
                            }}
                            variant='standard'
                            margin='normal'
                        />
                        <TextField
                            id='password'
                            label='Password'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position='start'
                                    >
                                        <Lock/>
                                    </InputAdornment>
                                )
                            }}
                            variant='standard'
                            margin='normal'
                        />
                        <div className='buttonSpacer'/>
                        <Button
                            className='button'
                            variant='contained'
                        >Login</Button>
                        <div className='buttonSpacer'/>
                        <Button>Don't have an account?</Button>
                    </div>
                    <div/>
                </Grid>
            </Grid>
        </div>
    )

}