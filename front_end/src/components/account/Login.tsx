import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Auth';
import * as yup from "yup";
import { 
  Button, 
  CssBaseline,
  InputAdornment,
  Grid,
  Paper,
  Box,
  TextField
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import '../../styles/Account.css';
  
export function Login() {

const validationSchema = yup.object().shape({
  email: yup.string()
  .required('Please enter an email address')
  .email('Invalid email format'),

  password: yup.string()
  .required('Please enter a password')
  .matches(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'), 'Password must be at least 8 characters and contain one lowercase letter, one uppercase letter, one number, and one special character (#?!@$%^&*-)')
});

const navigate = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

function handleSubmit(e: any) {

  e.preventDefault();
  login(email, password).then((data: any) => {
    if (data) console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
  });
  navigate('/home');
  
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle/>
                  </InputAdornment>
                )
              }}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Lock/>
                  </InputAdornment>
                )
              }}
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
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link to='/signup'>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}