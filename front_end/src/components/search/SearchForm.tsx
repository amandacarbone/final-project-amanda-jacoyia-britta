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
      console.log('form working');
  }

return (

  <Box
    sx={{
      width: 500,
      maxWidth: '100%',
    }}
  >
       
            
  <TextField fullWidth label="Search" id="fullWidth"  value={input} onChange={(e) => setInput(e.target.value)}/>
    <Button
      fullWidth
      onClick={submission}
    >
      Submit
    </Button>
  </Box>

);

}