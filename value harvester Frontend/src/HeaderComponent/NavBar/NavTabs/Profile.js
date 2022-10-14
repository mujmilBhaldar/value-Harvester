import React, { useState } from "react";
// import { Box, Button, Menu, MenuItem,ListItem,ListItemIcon,ListItemText,Avatar } from "@material-ui/core/";
import { Grid, Typography,  Box, Button, Menu, MenuItem,ListItem,ListItemIcon,ListItemText,Avatar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import avatarImg from '../../../images/admin.png';

import { useNavigate } from "react-router-dom"
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    // Navbar CSS
    navbar: {
      backgroundColor: "red",
      color: "white",
    },
    logo: {
      color: "white",
    },
    toolbar: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
    },
    navlist: {
      minWidth: "250px",
      maxWidth: "380px",
    },
    ulAvatar: {
      backgroundColor: "#1a8791",
      color: "white",
      width: "35px",
      height: "35px",
    },
    profileImg: {
      width: "35px",
      height: "35px",
    },
}));
const Profile = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout =(e) => {
    //   sessionStorage.removeItem('token')
    //   sessionStorage.removeItem('user_login')
      navigate('/')
    };
  
   
    const classes = useStyles();
    return (
        <>
            <Box>
                <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    startIcon={<Avatar src={avatarImg} className={classes.profileImg}></Avatar>}
                >

                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    style={{ maxHeight: '40%',marginTop:'6px' }}
               
                >

                    <MenuItem onClick={() => handleLogout()} >Log Out <LogoutIcon /></MenuItem>

                </Menu>
            </Box>
        </>
    )
}
export default Profile;