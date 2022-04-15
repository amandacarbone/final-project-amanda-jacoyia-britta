import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { login } from '../../services/Auth';
import * as Yup from "yup";
import { Formik } from 'formik';
import { 
  Button, 
  CssBaseline,
  InputAdornment,
  Grid,
  Paper,
  Box,
  TextField,
  IconButton,
  Link
} from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Lock from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const focusedColor = "white";
const useStyles = makeStyles({
  root: {
    // input label when focused
    "& label.Mui-focused": {
      color: focusedColor
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: focusedColor
    }
  }
});
  
export function Login() {

const navigate = useNavigate();

const classes = useStyles();

const [showPassword, setShowPassword] = useState(false);

const initialValues = {
  email: '',
  password: ''
};

function togglePasswordVisibility() {
  
  setShowPassword(showPassword ? false : true);

};
  
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
          position: 'static'
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
            position='static'
            width={400}
            alt='logo'
            src='https://i.imgur.com/JgL0cko.png'
          />
          <Formik
            initialValues={{
              ...initialValues
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
              .required('Please enter an email address')
              .email('Invalid email format'),

              password: Yup.string()
              .required('Please enter a password')
            })}
            onSubmit={(values) => {
              login(values.email, values.password)
              .then((data: any) => {
                if (data) {
                  localStorage.setItem('user', JSON.stringify(data));
                }
                navigate('/home');
              });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isValid,
              touched,
              values
            }) => (
              <Box component="form" autoComplete='off' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                autoFocus
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircle/>
                    </InputAdornment>
                  )
                }}
                className={classes.root}
                variant='standard'
                margin='normal'
                id='email'
                name='email'
                label='Email'
                type='email'
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                required
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
                className={classes.root}
                variant='standard'
                margin='normal'
                id='password'
                name='password'
                label='Password'
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Button
                fullWidth
                disabled={Boolean(!isValid)}
                type='submit'
                variant='contained'
                sx={{ 
                  mt: 3, 
                  mb: 2, 
                  background: '#939393',
                  '&:hover': {
                    background: '#848484',
                    color: '#FFFFFF'
                  }
                }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    component={RouterLink}
                    to={'/signup'}
                    sx={{
                      textDecoration: 'none',
                      color: '#FFFFFF',
                      '&:hover': {
                        color: '#000000'
                      }
                    }}
                  >
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
}