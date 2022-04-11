import { useState } from "react";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function SearchForm(props: { onSubmit: (searchItem: string) => void }) {
    
    const [input, setInput] = useState('');

    function submission() {
        props.onSubmit(input);
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
       
            
      <TextField fullWidth label="Search" id="fullWidth"  value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={submission}>Submit</button>
    </Box>
            
        </div>
    );

}



