import React, { useState } from "react";
import { Grid, Typography,  Box, Button, Menu, MenuItem,ListItem,ListItemIcon,ListItemText,Avatar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import avatarImg from '../../../images/admin.png';

import { useNavigate } from "react-router-dom"
import { makeStyles } from '@material-ui/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Notification = () => {
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
      navigate('/notification')
    };
    return (
        <> 
            <Box>
                {/* <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    startIcon={<Avatar src={avatarImg} className={classes.profileImg}></Avatar>}
                > */}
                    <NotificationsIcon
                     onClick={handleClick}
                        style={{ color: 'black', paddingTop: '15px', paddingRight: '30px' }} />
                {/* </Button> */}
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    style={{ maxHeight: '40%', marginTop: '17px' }}
                >
                    <MenuItem onClick={() => handleLogout()} style={{justifyContent:'left',display:'flex'}}>See all Notification > </MenuItem>

                </Menu>
            </Box>
        </>

    )
}
export default Notification;