
  import React, { useState } from 'react';
  import { styled, useTheme } from '@mui/material/styles';
  import Box from '@mui/material/Box';
  import MuiDrawer from '@mui/material/Drawer';
  import MuiAppBar from '@mui/material/AppBar';
  import Toolbar from '@mui/material/Toolbar';
  import List from '@mui/material/List';
  import CssBaseline from '@mui/material/CssBaseline';
  import Typography from '@mui/material/Typography';
  import Divider from '@mui/material/Divider';
  import IconButton from '@mui/material/IconButton';
  import {
      Menu, TrendingUpOutlined, PersonOutlineOutlined, Dvr,
      CurrencyRupee, Settings, Notifications, GroupAddOutlined, ShoppingBagOutlined
  } from '@mui/icons-material';
  import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
  import ListIcon from '@mui/icons-material/List';
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  import ListItem from '@mui/material/ListItem';
  import ListItemButton from '@mui/material/ListItemButton';
  import ListItemIcon from '@mui/material/ListItemIcon';
  import ListItemText from '@mui/material/ListItemText';
  import InboxIcon from '@mui/icons-material/MoveToInbox';
  import MailIcon from '@mui/icons-material/Mail';
  import DvrIcon from '@mui/icons-material/Dvr';
  import { NavLink } from "react-router-dom";

    // ----------list-----------
  import ListSubheader from '@mui/material/ListSubheader';
  import Collapse from '@mui/material/Collapse';
  import DraftsIcon from '@mui/icons-material/Drafts';
  import SendIcon from '@mui/icons-material/Send';
  import ExpandLess from '@mui/icons-material/ExpandLess';
  import ExpandMore from '@mui/icons-material/ExpandMore';
  import StarBorder from '@mui/icons-material/StarBorder';
  import { Grid } from '@mui/material';

  const drawerWidth = 270;

  const openedMixin = (theme) => ({
      width: drawerWidth,
      transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
  });

  const closedMixin = (theme) => ({
      transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: `calc(${theme.spacing(7)} + 1px)`,
      [theme.breakpoints.up('sm')]: {
          width: `calc(${theme.spacing(6)} + 1px)`,
      },
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
      ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
      shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
          }),
      }),
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
      ({ theme, open }) => ({
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          ...(open && {
              ...openedMixin(theme),
              '& .MuiDrawer-paper': openedMixin(theme),
          }),
          ...(!open && {
              ...closedMixin(theme),
              '& .MuiDrawer-paper': closedMixin(theme),
          }),
      }),
  );

const DemoSidebar = () => {
    const theme = useTheme();
         const [open, setOpen] = useState(false);
    
         const handleDrawerOpen = () => {
             setOpen(true);
         };
    
         const handleDrawerClose = () => {
             setOpen(false);
         };
    
            // list---
         const [openTaskList, setOpenTaskList] = useState(false);
         const handlRequisition = () => {
             setOpenTaskList(!openTaskList);
         };
    return(
        <Box sx={{ display: 'flex' }}>
                     <CssBaseline />
                     <AppBar position="fixed" open={open} style={{ backgroundColor: '#FFFF' }}>
                         <Toolbar>
                             <IconButton
                                 color="primary"
                                 aria-label="open drawer"
                                 onClick={handleDrawerOpen}
                                 edge="start"
                                 sx={{
                                     marginRight: 5,
                                     ...(open && { display: 'none' }),
                                 }}
                             >
                                 <Menu />
                             </IconButton>
        
                                 <Grid container>
                                 <Grid item md={4}>
                                         <Typography variant="h6" noWrap component="div" style={{ color: 'black' }}>
                                             Trade Management Sytem
                                         </Typography>
                                     </Grid>
                                     <Grid item md={4}>
                                         <Typography noWrap component="div" style={{ color: 'blue' }}>
                                             Total Trade Value :
                                         </Typography>
                                     </Grid>
                                     <Grid item md={4}>
                                         <Typography noWrap component="div" style={{ color: 'blue' }}>
                                             Total Earning  Value :
                                         </Typography>
                                     </Grid>
                                 </Grid>
        
                             <IconButton
                                 color="primary"
                                 edge="end"
                                 sx={{
                                     marginRight: 5,
                                 }}
                             >
                                 <Notifications/>
                             </IconButton>
                         </Toolbar>
                     </AppBar>
                     <Drawer variant="permanent" open={open}>
                         <DrawerHeader>
                             <Typography variant="h6" noWrap component="div">
                                 VALUE HARVEST
                             </Typography>
                             <IconButton onClick={handleDrawerClose}>
                                 {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                             </IconButton>
                         </DrawerHeader>
                         <Divider />
                         {/* <List>
                             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                 <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                     <ListItemButton
                                         sx={{
                                             minHeight: 48,
                                             justifyContent: open ? 'initial' : 'center',
                                             px: 2.5,
                                         }}
                                     >
                                         <ListItemIcon
                                             sx={{
                                                 minWidth: 0,
                                                 mr: open ? 3 : 'auto',
                                                 justifyContent: 'center',
                                             }}
                                         >
                                             {index % 2 === 0 ? <Dvr /> : <ListIcon />}
                                         </ListItemIcon>
                                         <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                     </ListItemButton>
                                 </ListItem>
                             ))}
                         </List>
                         <Divider /> */}
        
        
                         <List
                             sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                             component="nav"
                             aria-labelledby="nested-list-subheader"
        
                         >
                             <ListItemButton>
                                 <ListItemIcon>
                                     <Dvr />
                                 </ListItemIcon>
                                 <ListItemText primary="Dashboard" />
                             </ListItemButton>
                             <ListItemButton>
                                 <ListItemIcon>
                                     <ListIcon />
                                 </ListItemIcon>
                                 <ListItemText primary="New User Request" />
                             </ListItemButton>
                             {/* -------------- */}
        
                             <ListItemButton onClick={handlRequisition}>
                                 <ListItemIcon >
                                     <ListIcon />
                                 </ListItemIcon>
                                 <ListItemText primary="New User Request" />
                                 {openTaskList ? <ExpandLess /> : <ExpandMore />}
                             </ListItemButton>
        
                             <Collapse in={openTaskList} timeout="auto" unmountOnExit>
                                 <List component="div" disablePadding>
                                     <ListItem>
        
                                         <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon >
                                                 < GroupAddOutlined />
                                             </ListItemIcon>
                                             {/* <ListItemText primary="New User Request" /> */}
                                             <ListItemText primary="Buyer" />
                                         </ListItemButton>
        
                                     </ListItem>
        
                                     <ListItem >
        
                                         <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon >
                                                 <ShoppingBagOutlined />
                                             </ListItemIcon>
                                             <ListItemText primary="Seller" />
                                         </ListItemButton>
        
                                     </ListItem>
        
        
        
        
                                 </List>
                             </Collapse>
                             {/* --------------- */}
                             <ListItemButton>
                                 <ListItemIcon>
                                     <PersonOutlineOutlined />
                                 </ListItemIcon>
                                 <ListItemText primary="User Management" />
                             </ListItemButton>
                             <ListItemButton>
                                 <ListItemIcon>
                                     <TrendingUpOutlined />
                                 </ListItemIcon>
                                 <ListItemText primary="Trade Management" />
                             </ListItemButton>
                             <ListItemButton>
                                 <ListItemIcon>
                                     <CurrencyRupee />
                                 </ListItemIcon>
                                 <ListItemText primary="Item Price List" />
                             </ListItemButton>
                             <ListItemButton>
                                 <ListItemIcon>
                                     <Settings />
                                 </ListItemIcon>
                                 <ListItemText primary="Settings" />
                             </ListItemButton>
                             {/* <ListItemButton onClick={handleClick}>
                                 <ListItemIcon>
                                     <InboxIcon />
                                 </ListItemIcon>
                                 <ListItemText primary="Inbox" />
                                 {open ? <ExpandLess /> : <ExpandMore />}
                             </ListItemButton>
                             <Collapse in={open} timeout="auto" unmountOnExit>
                                 <List component="div" disablePadding>
                                     <ListItemButton sx={{ pl: 4 }}>
                                         <ListItemIcon>
                                             <StarBorder />
                                         </ListItemIcon>
                                         <ListItemText primary="Starred" />
                                     </ListItemButton>
                                 </List>
                             </Collapse> */}
                         </List>
        
        
                     </Drawer>
                     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                         <DrawerHeader />
                         {/* <Typography paragraph>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        
                         </Typography>
                         <Typography paragraph>
                             Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
        
                         </Typography> */}
                     </Box>
                 </Box>
    )
}
export default DemoSidebar;