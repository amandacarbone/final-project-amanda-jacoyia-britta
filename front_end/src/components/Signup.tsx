import React, { useContext, useState } from 'react';
import { ThoughtlessContext } from '../contexts/ThoughtlessContext';
import { signUp } from '../services/Auth';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const theme = createTheme();

export default function SignUp() {

    const { users, addUser } = useContext(ThoughtlessContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function handleSignUp(event: any) {
    
        event.preventDefault();
    
        let formData = new FormData(event.currentTarget);
    
        let first_name: string = formData.get('first_name') as string;
        let last_name: string = formData.get('last_name') as string;
        let email: string = formData.get('email') as string;
        let password: string = formData.get('password') as string;
    
        signUp(first_name, last_name, email, password).then(newUser => addUser(newUser));
    
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    
    }

  return (
    <ThemeProvider theme={theme}>
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
            <Box component="form" onSubmit={handleSignUp} sx={{ mt: 1 }}>
                <TextField
                    variant='standard'
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                    variant='standard'
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, background: '#939393' }}
                >
                    Sign Up
                </Button>
              <Grid container>
                <Grid item>
                  <Link to='/login'>
                    Have an account? Log In
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
