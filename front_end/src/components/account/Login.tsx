import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Auth';
import { ToastContainer, toast } from "react-toastify";
import { 
  Button, 
  CssBaseline,
  InputAdornment,
  Grid,
  Paper,
  Box,
  TextField,
  IconButton
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../../styles/Account.css';
  
export function Login() {

const navigate = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

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

function togglePasswordVisibility() {
  
  setShowPassword(showPassword ? false : true);

};

function handleSubmit(e: any) {

  e.preventDefault();

  if (email.length === 0 || password.length === 0) {
    loginError();
    return;
  } else {
    login(email, password).then((data: any) => {
      if (data) console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/home');
    })
    .catch((error) => {
      loginError();
      console.log(error);
    });
  }


  // e.preventDefault();
  // login(email, password).then((data: any) => {
  //   if (data) console.log(data);
  //   localStorage.setItem("user", JSON.stringify(data));
  // });
  // navigate('/home');
  
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
      <Grid 
        item 
        xs={12} 
        sm={8} 
        md={5} 
        component={Paper} 
        elevation={6} 
        square 
        sx={{ background: '#ff8896' }}>
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
              autoFocus
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle/>
                  </InputAdornment>
                )
              }}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Lock/>
                  </InputAdornment>
                ),
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
              variant='standard'
              margin='normal'
              id='password'
              name='password'
              label='Password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              type='submit'
              variant='contained'
              sx={{ mt: 3, mb: 2, background: '#939393' }}
            >
              Login
            </Button>
            <ToastContainer/>
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