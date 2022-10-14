
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Seller from './NewUseRequestabs/Seller';
import Buyer from './NewUseRequestabs/Buyer';
import SideBar from '../../HeaderComponent/SideBar/SideBar';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const NewUserRequest = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <Paper style={{ marginTop: '20px', height: 'auto', padding: '25px', margin: '30px' }}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Buyer" {...a11yProps(0)} />
                        <Tab label="Seller" {...a11yProps(1)} />
                        {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Buyer handleChange={handleChange}/>
                  
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Seller handleChange={handleChange}/>
                </TabPanel>
                {/* <TabPanel value={value} index={2}>
                Item Three
            </TabPanel> */}
            </Box>
        </Paper>
    )
}
export default NewUserRequest;

