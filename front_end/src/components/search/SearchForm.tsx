import { useState } from "react";
import {
  Box,
  TextField,
  Button
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

  <Box
    sx={{
      width: 500,
      maxWidth: '100%',
    }}
  >
       
            
  <TextField 
    fullWidth 
    label="Search" 
    id="fullWidth" 
    value={input} 
    onChange={(e) => setInput(e.target.value)}
  />
    <Button
      fullWidth
      sx={{
        mt: 1,
        mb: 2,
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



