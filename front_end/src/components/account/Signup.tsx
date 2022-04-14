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
  InputAdornment,
  IconButton
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../../styles/Account.css';

export function SignUp() {

const navigate = useNavigate();

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

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

function togglePasswordVisibility() {
  
  setShowPassword(showPassword ? false : true);

};
    
function handleSubmit(e: any) {

  e.preventDefault();
  signUp(firstName, lastName, email, password).then((data: any) => {
    if (data) console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
  });
  navigate('/questions');
      
}

return (
  <Grid container component='main' sx={{ height: '100vh' }}>
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
              fullWidth
              autoFocus
              variant='standard'
              margin='normal'
              id='firstName'
              name='firstName'
              label='First Name'
              type='text'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <TextField
              fullWidth
              variant='standard'
              margin='normal'
              id='lastName'
              name='lastName'
              label='Last Name'
              type='text'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <TextField
              fullWidth
              variant='standard'
              margin='normal'
              id='email'    
              name='email'
              label='Email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              variant='standard'
              margin='normal'
              id='password'
              name='password'
              label='Password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button
              fullWidth
              type='submit'
              variant='contained'
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
