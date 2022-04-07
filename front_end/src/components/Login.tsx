import React, { FormEvent, useContext, useState } from 'react';
import { ThoughtlessContext } from '../contexts/ThoughtlessContext';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Button, 
  CssBaseline,
  InputAdornment,
  Grid,
  Typography,
  Paper,
  Box,
  TextField
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import { toast } from 'react-toastify';
import { login } from '../services/Auth';


function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © Thoughtless'}
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}
  
export function Login() {

const navigate = useNavigate();

const [formData, setFormData] = useState({
  email: '',
  password: ''
});

const loginError = () =>
toast.error("Invalid email or password", {
  position: "top-right",
  autoClose: 900,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
});

function handleChange(e: any) {
  const value = e.target.value;

  setFormData({
    ...formData,
    [e.target.name]: value
  });
};

function handleSubmit(e: any) {

  e.preventDefault();

  console.log('handleSubmit Login: ', login());
}
  
return (
  <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://svgshare.com/i/fuB.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'fit',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ background: '#ff8896'}}>
        <Box
          sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      <Grid
        component='img'
        alt='logo'
        src='https://i.imgur.com/uSG3fbI.png'
      />
      <Box sx={{ mt: 1 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            variant='standard'
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AccountCircle/>
              </InputAdornment>
            )
            }}
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant='standard'
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Lock/>
                </InputAdornment>
              )
            }}
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background: '#939393' }}
          >
            Log In
          </Button>
            <Grid container>
              <Grid item>
                <Link to='/signup'>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}