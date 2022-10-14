
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/More";
// import Notification from "./navtabs/Notification";
// import Messages from "./navtabs/Messages";
// import Profile from "./navtabs/Profile";
import AppsIcon from '@mui/icons-material/Apps';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import SideBar from "../SideBar/SideBar";
import { Grid, Typography } from "@mui/material";
import Notification from "./NavTabs/Notification";
import Profile from "./NavTabs/Profile";
import "./../Header.css"
 import { styled, useTheme } from '@mui/material/styles';
 import Drawer from '@mui/material/Drawer';



// const drawerWidth = 270;

//  const openedMixin = (theme) => ({
//      width: drawerWidth,
//      transition: theme.transitions.create('width', {
//          easing: theme.transitions.easing.sharp,
//          duration: theme.transitions.duration.enteringScreen,
//      }),
//      overflowX: 'hidden',
//  });

//  const closedMixin = (theme) => ({
//      transition: theme.transitions.create('width', {
//          easing: theme.transitions.easing.sharp,
//          duration: theme.transitions.duration.leavingScreen,
//      }),
//      overflowX: 'hidden',
//      width: `calc(${theme.spacing(7)} + 1px)`,
//      [theme.breakpoints.up('sm')]: {
//          width: `calc(${theme.spacing(8)} + 1px)`,
//      },
//  });

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         ...(open && {
//             ...openedMixin(theme),
//             '& .MuiDrawer-paper': openedMixin(theme),
//         }),
//         ...(!open && {
//             ...closedMixin(theme),
//             '& .MuiDrawer-paper': closedMixin(theme),
//         }),
//     }),
// );

const NavBar = () => {
    const theme = useTheme();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState("");

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {/* <Messages id="navbarIcons" /> */}
            <Notification />
            <Profile />
        </Menu>
    );

    const [anchorEl, setAnchorEl] = useState("");
    const handleDrawerOpen = () => {
        setAnchorEl(true);
    };

    const handleDrawerClose = () => {
        setAnchorEl(false);
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                {/* <Toolbar sx={{    backgroundColor:"#587308" }}> */}
                <Toolbar sx={{    backgroundColor:"#00e676" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        style={{ color: '#212121' }}
                        // color="primary"
                        
              
                    
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerOpen} onClose={handleDrawerClose}                    
                      
                    >
                        <AppsIcon />
                    </IconButton>
                    <Drawer anchor='left' open={anchorEl} onClose={handleDrawerClose}>
                        <SideBar handleDrawerClose={handleDrawerClose} />
                    </Drawer>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} >
                        <Grid container spacing={0}>
                            <Grid item md={7} 
                            >
                                <Typography noWrap component="div" className="tradeValue"style={{ color: 'black', fontWeight: 'bold', }}>
                                    Total Trade Value : <CurrencyRupeeIcon className="currency" style={{ color: 'black', fontWeight: 'bold' }}/> 0909
                                </Typography>
                            </Grid>
                            <Grid item md={5}>
                                <Typography noWrap component="div" style={{ color: 'black', fontWeight: 'bold' }}>
                                     Total Earning  Value : <CurrencyRupeeIcon className="currency" style={{ color: 'black', fontWeight: 'bold' }}/> 0909
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 0,display: { xs: "none", md: "flex" } }}>
                    <Grid item md={6}>
                        <Notification />
                        </Grid>
                        <Grid item md={6}>
                        <Profile />
                        </Grid>
                    </Box>
                    {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="primary"
                        >
                            <MoreIcon style={{color:'red'}}/>
                        </IconButton>
                    </Box> */}
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    )
}
export default NavBar;