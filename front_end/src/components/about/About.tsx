import { 
    Container,
    Typography,
    Grid,
    Button,
    Box,
    CssBaseline,
    Paper
} from '@mui/material';
import React from 'react';

export function About() {

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid 
          item 
          xs={12} 
          sm={5} 
          md={5} 
          component={Paper} 
          elevation={6} 
          square
        >
          <Box
            sx={{
              my: {
                xs: 10,
                sm: 30,
                md: 30
              },
              mx: {
                xs: 2,
                md: 4
              },
              height: {
                xs: 200
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4">
                About Thoughtless
            </Typography>
            <Typography>
            Thoughtless helps to answer one of the most difficult questions to ever be asked:
            "What do you want for dinner?"
            Using basic information collected from a starting questionaire specifically designed to be zero pressure and super simple, Thoughtless serves up a random shortlist of recipes (with photos, ingriedients, and instructions) to get your mouth watering and your mind relaxing.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={15}
          sm={7}
          md={7}
          sx={{
            backgroundImage: 'url(https://svgshare.com/i/fuB.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'fit',
            backgroundPosition: 'center',
            position: 'static'
          }}
        >
            <Typography variant="h5">
                Just Go With It
            </Typography>
        </Grid>
      </Grid>
    )

}