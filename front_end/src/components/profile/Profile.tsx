import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../models/User";
import { getUsers, updateBasics } from "../../services/Users";
import { toast } from "react-toastify";
import dayjs from 'dayjs';
import 'react-toastify/dist/ReactToastify.css';
import {
    Grid,
    Box,
    Avatar,
    CssBaseline,
    Typography,
    Paper,
    Modal,
    Fade,
    Backdrop,
    Button,
    IconButton,
    TextField,
    InputAdornment,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import { Favorites } from "../favorites/Favorites";

const editProfileModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 500,
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function Profile(){

    const storedUser = localStorage.getItem("user");
    const loggedInUser = JSON.parse(storedUser!);
    const [user, setUser] = useState<User[]>([]);
    const [updateFirstName, setUpdateFirstName] = useState(loggedInUser.first_name);
    const [updateLastName, setUpdateLastName] = useState(loggedInUser.last_name);
    const [updateEmail, setUpdateEmail] = useState(loggedInUser.email);
    const [updatePassword, setUpdatePassword] = useState(loggedInUser.password);
    const [isVegan, setIsVegan] = useState(loggedInUser.isvegan);
    const [isVegetarian, setIsVegetarian] = useState(loggedInUser.isvegetarian);
    const [isPescatarian, setIsPescatarian] = useState(loggedInUser.ispescatarian);

    const [openEditProfile, setOpenEditProfile] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const id: string | undefined = useParams().id;
    
    const userDetail = findById(parseInt(id!));

    const updateComplete = () =>
    toast.success("Your profile has been updated", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    function findById(id: number) {
        const foundUser = user.find((user) => user.id === id);
        return foundUser ? foundUser : undefined;
      }
    
      function handleUpdate(e: any) {
        e.preventDefault();
        updateBasics(
          userDetail!.id,
          updateFirstName,
          updateLastName,
          updateEmail,
          isVegetarian,
          isVegan,
          isPescatarian
        ).then((data: any) => {
            updateComplete();
            setOpenEditProfile(false);
            console.log("updated");
        });
      }

      function handleOpenEditProfile() {
        setOpenEditProfile(true);
      };

      function handleCloseEditProfile() {
        setOpenEditProfile(false);
      };

      function togglePasswordVisibility() {
  
        setShowPassword(showPassword ? false : true);
      
      };
    
      useEffect(() => {
        getUsers().then((data) => {
          setUser(data);
        });
      }, [user]);

    return(
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 30,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
                src={'/static/img/avatars/default-profile.svg'}
                sx={{
                    height: 200,
                    width: 200,
                }}>
            </Avatar>
            <Typography component="h1" variant="h5">
                {userDetail?.first_name} {userDetail?.last_name}
            </Typography>
            <Typography>Joined: {userDetail?.join_date}</Typography>
            <Typography>Dietary Preferences:</Typography>
            <Box sx={{ mt: 1 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{ 
                    mt: 3, 
                    mb: 2, 
                    background: '#939393',
                    '&:hover': {
                      background: '#848484',
                      color: '#FFFFFF'
                    }
                }}
                onClick={handleOpenEditProfile}
              >
                Edit Profile
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          margin={-3}
          sx={{
              maxHeight: '100vh',
              overflow: 'auto'
          }}
        >
            <Favorites/>
        </Grid>
        <Modal
            open={openEditProfile}
            onClose={handleCloseEditProfile}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <Fade in={openEditProfile}>
                <Box sx={editProfileModalStyle}>
                    <IconButton
                        onClick={handleCloseEditProfile}
                        sx={{
                            transform: 'translate( 800%, -70%)',
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>
                    <Typography
                        variant='h6'
                        sx={{ mb: 3, mt: -5 }}
                    >
                        Edit Profile
                    </Typography>
                    <TextField
                        fullWidth
                        variant='standard'
                        sx={{ mb: 5 }}
                        type='text'
                        name='first_name'
                        label='First Name'
                        value={updateFirstName}
                        placeholder={userDetail?.first_name}
                        onChange={(e) => setUpdateFirstName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        variant='standard'
                        sx={{ mb: 5 }}
                        type='text'
                        name='last_name'
                        label='Last Name'
                        value={updateLastName}
                        placeholder={userDetail?.last_name}
                        onChange={(e) => setUpdateLastName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        variant='standard'
                        sx={{ mb: 5 }}
                        type='text'
                        name='email'
                        label='Email'
                        value={updateEmail}
                        placeholder={userDetail?.email}
                        onChange={(e) => setUpdateEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        variant='standard'
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        label='Password'
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
                        value={updatePassword}
                        placeholder={userDetail?.password}
                        onChange={(e) => setUpdatePassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ 
                            mt: 3, 
                            mb: 2, 
                            background: '#939393',
                            '&:hover': {
                              background: '#848484',
                              color: '#FFFFFF'
                            }
                        }}
                        onClick={handleUpdate}
                    >
                        Update
                    </Button>
                </Box>
            </Fade>
        </Modal>
      </Grid>
    )
}