import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../services/Auth';
import { getUsers } from '../../services/Users';
import * as yup from "yup";
import { 
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography
} from '@mui/material';
import '../../styles/Account.css';

export function SignUp() {

const validationSchema = yup.object().shape({
  first_name: yup.string()
  .required('Please enter a first name')
  .min(1, 'First name must be at least one character.')
  .max(500, 'First name is too long'),

  last_name: yup.string()
  .required('Please enter a last name')
  .min(1, 'First name must be at least one character.')
  .max(500, 'First name is too long'),

  email: yup.string()
  .email('Invalid email format')
  .required('Please enter an email address')
  .test('Unique Email', 'Email already in use', getUsers),
  
  password: yup.string()
  .required('Please enter a password')
  .matches(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'), 'Password must be at least 8 characters and contain one lowercase letter, one uppercase letter, one number, and one special character (#?!@$%^&*-)')
});

const navigate = useNavigate();

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
    
function handleSubmit(e: any) {

  e.preventDefault();
  signUp(firstName, lastName, email, password).then((data: any) => {
    if (data) console.log(data);
  });
  navigate('/questions');
      
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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              variant='standard'
              margin="normal"
              required
              fullWidth
              autoFocus
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
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
