import { NavLink } from 'react-router-dom';


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export function Header() {
 
  function handleLogOut() {
    localStorage.clear();
  }

  let storedUser = localStorage.getItem('user');

  let loggedInUser = JSON.parse(storedUser!); 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Thoughtless
          </Typography>
          <Button color="inherit"> <NavLink to='/search'>Search</NavLink></Button>
          <Button color="inherit"> <NavLink to='/home'>Home</NavLink></Button>
          <Button color="inherit"> <NavLink to='/favorites'>Favorites</NavLink></Button>
          <Button color="inherit"> <NavLink to='/recipedetail'>Recipes</NavLink></Button>
          <Button color="inherit"> <NavLink to={'profile/' + loggedInUser!.id}>My Profile</NavLink></Button>
          <Button color="inherit" onClick={handleLogOut}><NavLink to='/login'>Log Out</NavLink></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



    

{/* <h1>Thoughtless Meals </h1>

<div className='navBar'>
    <NavLink to='/'>Login In</NavLink>
    <NavLink to='/search'>Search</NavLink>
    <NavLink to='/home'>Home</NavLink>
    <NavLink to='/favorites'>Favorites</NavLink>
</div> */}
        

// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ThoughtlessContext } from '../contexts/ThoughtlessContext';
// import { SearchPage } from './SearchPage';

// export function Header() {
//     const { users , loggedUsers } = useContext(ThoughtlessContext);

//     const navigate = useNavigate();

//     function handleGoToProfile(e:any) {
//         e.preventDefault();
//         const currentUser = users.find((user) => loggedUsers === true);
//         navigate('/profile/' + currentUser?.id);
//         console.log(currentUser);
//     }
//     return (
//         <nav>
//             <Link to='/search'> Home </Link>
//             <a href="#" onClick={handleGoToProfile}> My Profile </a>
//             {/* <Link to='/favorite'> Saved Recipes </Link> */}
            
//         </nav>
//     );
// }