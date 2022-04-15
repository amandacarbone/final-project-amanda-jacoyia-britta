import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Toolbar,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CssBaseline,
  List
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export function Header() {

  const navigate = useNavigate();

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  let storedUser = localStorage.getItem('user');

  let loggedInUser = JSON.parse(storedUser!); 

  const questionsNav = [
    {
      name: 'Questions',
      icon: <RestaurantIcon/>,
      onClick: () => navigate('/questions') 
    }
  ]

  const userNav = [
    {
      name: 'Home',
      icon: <HomeIcon/>,
      onClick: () => navigate('/home')
    },
    {
      name: 'Search',
      icon: <SearchIcon/>,
      onClick: () => navigate('/search')
    },
    {
      name: 'Favorites',
      icon: <FavoriteIcon/>,
      onClick: () => navigate('/favorites')
    },
    {
      name: 'Profile',
      icon: <AccountCircleIcon/>,
      onClick: () => navigate('/profile/' + loggedInUser.id)
    }
  ]
  
  const resourcesNav = [
    {
      name: 'Recipes',
      icon: <MenuBookIcon/>,
      onClick: () => navigate('/recipedetail')
    }
  ]
  
  const accountActionNav = [
    {
      name: 'Log Out',
      icon: <LogoutIcon/>,
      onClick: () => handleLogOut()
    }
  ]

  function handleLogOut() {
    localStorage.clear();
    navigate('/login');
  }

return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline/>
      <AppBar position="fixed" sx={{ background: '#ff8896' }} open={open}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <img
            height='50px'
            alt='logo'
            src='https://i.imgur.com/JgL0cko.png'
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          },
        }}
        variant='temporary'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </DrawerHeader>
        <List>
          {questionsNav.map((item, index) => (
            <ListItem button key={index} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name}/>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {userNav.map((item, index) => (
            <ListItem button key={index} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name}/>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {resourcesNav.map((item, index) => (
            <ListItem button key={index} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name}/>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {accountActionNav.map((item, index) => (
            <ListItem button key={index} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
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