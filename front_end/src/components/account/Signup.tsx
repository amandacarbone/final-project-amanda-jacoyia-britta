import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { signUp } from '../../services/Auth';
import { getUsers } from '../../services/Users';
import * as Yup from "yup";
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  InputAdornment,
  IconButton,
  Link
} from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
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

export function SignUp() {

const navigate = useNavigate();

const classes = useStyles();

const [showPassword, setShowPassword] = useState(false);

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: ''
};

const emailExistError = () => 
toast.error('Email is already in use', {
  position: 'top-right',
  autoClose: 900,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined
});

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
            position='static'
            sx={{
              width: {
                xs: '300px',
                md: '400px'
              }
            }}
            alt='logo'
            src='https://i.imgur.com/JgL0cko.png'
          />
          <Formik
            initialValues={{
              ...initialValues
            }}
            validationSchema={Yup.object().shape({
              first_name: Yup.string()
              .required('Please enter a first name')
              .min(1, 'First name must be at least one character.')
              .max(500, 'First name is too long'),

              last_name: Yup.string()
              .required('Please enter a last name')
              .min(1, 'First name must be at least one character.')
              .max(500, 'First name is too long'),

              email: Yup.string()
              .email('Invalid email format')
              .required('Please enter an email address'),

              password: Yup.string()
              .required('Please enter a password')
              .matches(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'), 'Password must be at least 8 characters and contain one lowercase letter, one uppercase letter, one number, and one special character (#?!@$%^&*-)')
            })}
            onSubmit={(values) => {
              signUp(
                values.first_name, 
                values.last_name, 
                values.email, 
                values.password
              ).then((data: any) => {
                if (data) {
                  localStorage.setItem('user', JSON.stringify(data));
                };
                navigate('/questions');
              })
              .catch((error) => {
                if (error.response.status === 400) {
                  emailExistError()
                }
              })
            }}
          >
            {({
              errors,
              handleChange,
              handleSubmit,
              isValid,
              touched,
              values
            }) => (
              <Box component="form" autoComplete='off' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  error={Boolean(touched.first_name && errors.first_name)}
                  helperText={touched.first_name && errors.first_name}
                  fullWidth
                  required
                  autoFocus
                  className={classes.root}
                  variant='standard'
                  margin='normal'
                  name='first_name'
                  label='First Name'
                  type='text'
                  value={values.first_name}
                  onChange={handleChange}
                />
                <TextField
                  error={Boolean(touched.last_name && errors.last_name)}
                  helperText={touched.last_name && errors.last_name}
                  fullWidth
                  required
                  className={classes.root}
                  variant='standard'
                  margin='normal'
                  id='lastName'
                  name='last_name'
                  label='Last Name'
                  type='text'
                  value={values.last_name}
                  onChange={handleChange}
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  fullWidth
                  required
                  className={classes.root}
                  variant='standard'
                  margin='normal'
                  id='email'    
                  name='email'
                  label='Email'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  fullWidth
                  required
                  className={classes.root}
                  variant='standard'
                  margin='normal'
                  id='password'
                  name='password'
                  label='Password'
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange}
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
                  Sign Up
                </Button>
                <Grid container>
                <Grid item>
                  <Link
                    component={RouterLink}
                    to={'/login'}
                    sx={{
                      textDecoration: 'none',
                      color: '#FFFFFF',
                      '&:hover': {
                        color: '#000000'
                      }
                    }}
                  >
                    Have an account? Login
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
