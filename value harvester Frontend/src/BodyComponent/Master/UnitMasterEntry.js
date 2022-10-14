
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { TextField, Paper, Grid, Button, Typography, IconButton, Icon, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import "./../BodyComponent.css"
import axios from 'axios'
import { useLocation } from "react-router-dom";



const Input = styled('input')({
    display: 'none',
});
const UnitMasterEntry = () => {
    const [noOfBox, setNoofBox] = React.useState(1)
    const [certification, setCertification] = React.useState(1)
    const navigate = useNavigate();
    const location = useLocation();
    const editData = location.state;
    const editid = editData && editData._id;
    const [data, setData] = useState({
        _id: editid,
        unit: editData ? editData.unit : '',
    })
    // const [unit, setUnit] = React.useState(editData ? editData.unit : '');

    const handleChangeUnit = (event) => {
        // setUnit(event.target.value);
        setData(event.target.value);
    };

    const handleSubmit = (event) => {

        if (location.search == '?edit') {
            axios
                .put("http://localhost:5050/api/unit", data)
                .then((response) => {
                    navigate(-1);
                })
                .catch((error) => {
                    console.log(error);

                });

        } else {
            axios.post("http://localhost:5050/api/unit", data)
                .then((response) => {
                    navigate(-1);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }
    const handleClose = () => {
        navigate(-1);
    }
    const onBack = () => {
        navigate(-1);
    };
    //   -----------select image------
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()




    return (
        <>
            <Paper style={{ marginTop: '20px', height: 'auto', padding: '25px', margin: '30px', opacity: 'none' }}>
                <form onSubmit={handleSubmit} onError={() => null}>
                    <Box style={{ padding: '15px', opacity: 'none' }}>
                        <Grid container spacing={2}>
                            <Grid item md={2}>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    Add Unit
                                </Typography>
                            </Grid>
                            <Grid item md={10}>
                                <Button type="button" variant="contained" onClick={(e) => onBack()}
                                    style={{ float: 'right', display: 'flex', backgroundColor: '#5a5a5a', color: '#FFF' }} >
                                    <ArrowCircleLeftOutlinedIcon /> Go Back
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box style={{ border: '1px solid grey', padding: '10px' }}>
                        <Typography>
                            Unit Item Details
                        </Typography>
                       
                        <Grid item md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                                <Select
                                    // labelId="demo-simple-select-label"
                                    // id="demo-simple-select"
                                    onChange={handleChangeUnit}
                                    // type='text'
                                    size='small'
                                    label='Unit'
                                    name="unit"
                                    value={data.unit}
                                    fullWidth
                                >
                                  

                                    <MenuItem value="Kg">Kg</MenuItem>
                                    <MenuItem value="Tonn">Tonn</MenuItem>
                         
                                </Select>
                            </FormControl>

                        </Grid>


                        <Grid container spacing={2} sx={{ mt: 2 }}>
                        </Grid>
                    </Box>
                    <Button type="button" variant="contained" color="error" onClick={handleClose} style={{ marginTop: '50px', marginLeft: '20px', height: '44px', float: 'right' }}>
                        <HighlightOffIcon style={{ marginRight: '8px' }} /> cancel
                    </Button>
                    {location.search == '?edit' ?
                        <Button id='btnSave' type="submit" variant="contained" color="success" style={{ marginTop: '50px', height: '44px', float: 'right' }} >
                            <SaveAltIcon style={{ marginRight: '8px' }} />  Update
                        </Button>
                        :
                        <Button id='btnSave' type="submit" variant="contained" color="success" style={{ marginTop: '50px ', height: '44px', float: 'right' }} >
                            <SaveAltIcon style={{ marginRight: '8px' }} /> save
                        </Button>
                    }
                </form>
            </Paper>
        </>
    )

}
export default UnitMasterEntry;