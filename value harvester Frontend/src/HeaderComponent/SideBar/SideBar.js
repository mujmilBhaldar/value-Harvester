
import React, { useState } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListIcon from "@mui/icons-material/List";
import {
    Menu, Dvr,
    CurrencyRupee, Settings, PersonOutlineOutlined, TrendingUpOutlined, ExpandLess, ExpandMore
} from '@mui/icons-material';
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import "./SideBar.css"
import Img from "./../../images/paddy-harvest-golden-yellow-paddy-hand-farmer-carrying-paddy-hand-rice.jpg"

// const divStyle={
//     overflowY: 'scroll',
//     border:'1px solid red',
//     width:'500px',
//     float: 'left',
//     height:'500px',
//     position:'relative'
//   };

const SideBar = ({ handleDrawerClose }, { handleChange }) => {

    const login_details = sessionStorage.getItem('user_login');
    const userInfo = JSON.parse(login_details);

    const [openTaskList, setOpenTaskList] = useState(false);
    const handlRequisition = () => {
        setOpenTaskList(!openTaskList);
    };
    const [openMaster, setOpenMaster] = useState(false);
    const handleMasters = () => {
        setOpenMaster(!openMaster);
    };

    const [openSetting, setOpenSetting] = useState(false);
    const handleSetting = () => {
        setOpenSetting(!openSetting);
    };
    // linear-gradient(#25f367, #7981df)
    return ( 
     <Box sx={{ width: '270px', height: '100%'  }} >   
          {/* <Box sx={{ width: '270px', height: '10%', background: "#587308" }} > */}
          <Box sx={{ width: '270px', height: '10%', background: "#00e676" }} >
          <Typography variant="h6" noWrap component="div"
                style={{
                    // alignItems: 'center', justifyContent: 'center', display: 'flex', fontWeight: 'bolder', height: '62px', color: '#fff', border: '1px dashed white',
                    alignItems: 'center', justifyContent: 'center', display: 'flex', fontWeight: 'bolder', height: '62px', color: '', 
                }}>
                VALUE HARVEST
            </Typography>
            </Box>         
            <List 
             sx={{
  
       width:270,
       height:'100%',

       backgroundColor: "#c5e1a5",
    // backgroundImage: `url(${Img})`,
                      
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    
      
        //  background:"#e8f5e9",
         overflow: 'auto',
       
      
   }}
   >
                
                {/* <ListItem className="listItemDropdown">
                    <ListItemButton id="listItemBtn" onClick={handleMasters}>
                        <ListItemIcon >
                            <TrendingUpOutlined className="listIcon" />
                        </ListItemIcon>
                        <ListItemText primary="Masters" />
                        {openMaster ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={openMaster} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem className="listItem">
                            <NavLink activeClassName="active" to="/unitMaster" id="listunderline" onClick={() => handleDrawerClose()}>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon >
                                        <TrendingUpOutlined className="listIcon" />
                                    </ListItemIcon>
                                    <ListItemText primary="Unit Master" />
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                    
                        <ListItem className="listItem">
                            <NavLink activeClassName="active" to="/commodityMaster" id="listunderline" onClick={() => handleDrawerClose()}>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon >
                                        <TrendingUpOutlined className="listIcon" />
                                    </ListItemIcon>
                                    <ListItemText primary="Commodity Master" />
                                </ListItemButton>
                            </NavLink>
                        </ListItem>

                        {(userInfo.role == "Super Admin") &&
                            <ListItem className="listItem">
                                <NavLink activeClassName="active" to="/webUserMaster" id="listunderline" onClick={() => handleDrawerClose()}>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon >
                                            <TrendingUpOutlined className="listIcon" />
                                        </ListItemIcon>
                                        <ListItemText primary="Web User Master" />
                                    </ListItemButton>
                                </NavLink>
                            </ListItem>
                        }

                    </List>
                </Collapse>       */}
                <ListItem  >
                    <NavLink id="listunderline" to="/dashboard" onClick={() => handleDrawerClose()}>
                        <ListItemButton>
                            <ListItemIcon className="listIcon">
                                <Dvr />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                 <ListItem  >
                    <NavLink id="listunderline" activeClassName="active" to="/newUserRequest" onClick={() => handleDrawerClose()}>
                        <ListItemButton>
                            <ListItemIcon className="listIcon" >
                                <PersonOutlineOutlined />
                            </ListItemIcon>
                            <ListItemText primary="New User Request" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem  >
                    <NavLink id="listunderline" activeClassName="active" to="/approvedUsers" onClick={() => handleDrawerClose()}>
                        <ListItemButton>
                            <ListItemIcon className="listIcon" >
                                <PersonOutlineOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Approved User" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                    
                <ListItem  >
                    <NavLink id="listunderline" to="/openTransication" onClick={() => handleDrawerClose()}>
                        <ListItemButton onClick={handlRequisition}>
                            <ListItemIcon className="listIcon">
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText primary="Open Transication" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem  >
                    <NavLink id="listunderline" to="/closedTransication" onClick={() => handleDrawerClose()}>
                        <ListItemButton onClick={handlRequisition}>
                            <ListItemIcon className="listIcon">
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText primary="Closed Transication" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem  >
                    <NavLink id="listunderline" to="/paymentReport" onClick={() => handleDrawerClose()}>
                        <ListItemButton onClick={handlRequisition}>
                            <ListItemIcon className="listIcon">
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText primary="Payment Report" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                {/* <ListItem  >
                    <NavLink id="listunderline" activeClassName="active" to="/userManagement" onClick={() => handleDrawerClose()}>
                        <ListItemButton>
                            <ListItemIcon className="listIcon" >
                                <PersonOutlineOutlined />
                            </ListItemIcon>
                            <ListItemText primary="User Management" />
                        </ListItemButton>
                    </NavLink>
                </ListItem> */}
                <ListItem  >
                    <NavLink id="listunderline" activeClassName="active" to="/tradeManagement" onClick={() => handleDrawerClose()}>
                        <ListItemButton>
                            <ListItemIcon className="listIcon">
                                <TrendingUpOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Trade Management" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem  >
                    <NavLink id="listunderline" activeClassName="active" to="/itemPricelist" onClick={() => handleDrawerClose()}>
                        <ListItemButton>
                            <ListItemIcon className="listIcon">
                                <CurrencyRupee />
                            </ListItemIcon>
                            <ListItemText primary="Item Price List" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem className="listItemDropdown">
                    <ListItemButton id="listItemBtn" onClick={handleMasters}>
                        <ListItemIcon >
                            <TrendingUpOutlined className="listIcon" />
                        </ListItemIcon>
                        <ListItemText primary="Masters" />
                        {openMaster ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>

                <Collapse in={openMaster} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem className="listItem">
                            <NavLink activeClassName="active" to="/unitMaster" id="listunderline" onClick={() => handleDrawerClose()}>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon >
                                        <TrendingUpOutlined className="listIcon" />
                                    </ListItemIcon>
                                    <ListItemText primary="Unit Master" />
                                </ListItemButton>
                            </NavLink>
                        </ListItem>

                        <ListItem className="listItem">
                            <NavLink activeClassName="active" to="/commodityMaster" id="listunderline" onClick={() => handleDrawerClose()}>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon >
                                        <TrendingUpOutlined className="listIcon" />
                                    </ListItemIcon>
                                    <ListItemText primary="Commodity Master" />
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                        {(userInfo.role == "Super Admin") &&
                            <ListItem className="listItem">
                                <NavLink activeClassName="active" to="/webUserMaster" id="listunderline" onClick={() => handleDrawerClose()}>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon >
                                            <TrendingUpOutlined className="listIcon" />
                                        </ListItemIcon>
                                        <ListItemText primary="Web User Master" />
                                    </ListItemButton>
                                </NavLink>
                            </ListItem>
                        }
                 </List>
                </Collapse>      
                          {/* <ListItem className="settings">
                                <NavLink id="listunderline" activeClassName="active" to="/settingMaster" onClick={() => handleDrawerClose()}>       
                                    <ListItemButton>
                                        <ListItemIcon className="listIcon">
                                            <Settings />
                                        </ListItemIcon>
                                        <ListItemText primary="Settings" />
                                    </ListItemButton>
                                </NavLink>
                            </ListItem> */}
                             <ListItem  >
                    <NavLink id="listunderline" to="/settingMaster" onClick={() => handleDrawerClose()}>
                        <ListItemButton>
                            <ListItemIcon className="listIcon">
                              <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                    </List>
                   </Box>
    )
}
export default SideBar;

