import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography
} from '@mui/material';

export function SearchForm(props: { onSubmit: (searchItem: string) => void }) {
    
  const [input, setInput] = useState('');

  function submission() {

    props.onSubmit(input);
    // clear form on submit
    setInput('');

    console.log('form working');

  }

return (
  <div className="searchForm">

    <Box sx={{
      transform: 'translate(-550%, -60%)'
    }}>
      <Typography
        variant='h4'
      >
        Search
      </Typography>
    </Box>

  <Box
    sx={{
      width: 500,
      maxWidth: '100%',
    }}
  >

  <TextField
    label="Search"
    sx={{
      width: {
        xs: 350
      }
    }} 
    value={input} 
    onChange={(e) => setInput(e.target.value)}
  />
    <Button
      sx={{
        mt: 1,
        mb: {
          xs: 1,
          md: 2
        },
        width: {
          xs: 350
        },
        color: '#FFFFFF',
        background: '#939393',
        '&:hover': {
          background: '#848484',
          color: '#FFFFFF'
        }
      }}
      onClick={submission}
    >
      Submit
    </Button>
  </Box>
            
  </div>
);

}



