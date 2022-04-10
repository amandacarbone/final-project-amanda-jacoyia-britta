import React from 'react';
import {
    Typography,
    Box,
    Container
} from '@mui/material';

function Copyright(props: any) {
    return (
      <Typography 
        variant="body2" 
        color="text.secondary" 
        align="end" {...props}>
        {'Copyright © Thoughtless'}
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export function Footer() {
    return (
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
    );
}