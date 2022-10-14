
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
import { ArrowBack } from "@mui/icons-material";
var FormData = require("form-data");

const Input = styled('input')({
    display: 'none',
});

const CommodityMasterEntry = () => {
    const [noOfBox, setNoofBox] = React.useState(1)
    const [certification, setCertification] = React.useState(1)
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const location = useLocation();
    const editData = location.state;
    const editid = editData && editData._id;
    const [data, setData] = useState({
        _id: editid,
        commodityName: editData ? editData.commodityName : '',
        description: editData ? editData.description : '',
        moq: editData ? editData.moq : '',
        image: editData ? editData.image : '',
        hindiName: editData ? editData.hindiName : '',
        englishName: editData ? editData.englishName : '',
        minPrice: editData ? editData.minPrice : '',
        maxPrice: editData ? editData.maxPrice : '',
        nodalPrice: editData ? editData.nodalPrice : '',
        // pumpBill_No: editData ? editData.pumpBill_No : '',

        // unit: editData ? editData.unit : '',
    })

    const [unit, setUnit] = React.useState(editData ? editData.unit : '');

    const handleChangeUnit = (event) => {
        setUnit(event.target.value);
    };
    const handleChange = (event) => {
        event.persist()
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })

    };

    // const imageUpload = (event) => {
    //     // console.log("am");
    //     setData({
    //         ...data,
    //         image: event.target.files[0],
    //     })
    // }


    const [image, setImageName] = useState(editData ? editData.image : '');
    const [imgExtension, setImageExtension] = useState('');


   
    const handleSubmit = (event) => {
        // let webdata = {
        //     ...data,
        //     unit
        // }
        // let webdata = new webdata();
        // webdata.append('image', data.image, data.image.name)
        // console.log(data.image.name)
        // webdata.append('commodityName', data.commodityName)
        // webdata.append('description', data.description)
        // webdata.append('moq', data.moq)
        // webdata.append('hindiName', data.hindiName)
        // webdata.append('englishName', data.englishName)
        // webdata.append('minPrice', data.minPrice)
        // webdata.append('maxPrice', data.maxPrice)
        // webdata.append('nodalPrice', data.nodalPrice)
        // webdata.append('myFile', data.image, data.image.name)

        const dieselData = {
            ...data,

            // pumpBill_image: pumpBill_image+'.'+imgExtension,
            image: image + '.' + imgExtension,
        

        }

        if (location.search == '?edit') {
            axios
                // .put("http://localhost:5050/api/commodity", webdata)
                .put("http://localhost:5050/api/commodity", dieselData)
                .then((response) => {
                    navigate(-1);
                })
                .catch((error) => {
                    console.log(error);
                });

        } else {
            // axios.post("http://localhost:5050/api/commodity", webdata)
            axios.post("http://localhost:5050/api/commodity", dieselData)
                .then((response) => {
                    navigate(-1);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }

  


    const uploadFile = (file) => {

        const data = new FormData();
        data.append('file', file);

        const config = {
            method: 'post',
            // url: basicURL + 'diesel_image',
            url: "http://localhost:5050/api/diesel_image",
            headers: {
                'content-type': 'multipart/form-data'
            },
            data
        };

        axios(config)
            .then((res) => {
                setImageName(res.data.original_filename);
                setImageExtension(res.data.original_extension);
            }).catch((err) => {
                console.log(err)
            })


    };
    const handleClose = () => {
        navigate(-1);
    }
    const onBack = () => {
        navigate(-1);
    };
    //   -----------select image------

    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    // useEffect(() => {
    //     if (!selectedFile) {
    //         setPreview(undefined)
    //         return
    //     }

    //     const objectUrl = URL.createObjectURL(selectedFile)
    //     setPreview(objectUrl)
    //     // free memory when ever this component is unmounted
    //     return () => URL.revokeObjectURL(objectUrl)
    // }, [selectedFile])


    // useEffect(() => {
    //     unitGetData();

    // }, []);
    // const unitGetData = () => {
    //     axios
    //         .get("http://localhost:5050/api/unit")
    //         .then((response) => {

    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    return (
        <>
            <Paper style={{ marginTop: '20px', height: 'auto', padding: '25px', margin: '30px', opacity: 'none' }}>
                <form onSubmit={handleSubmit} onError={() => null}>
                    <Box style={{ padding: '15px', opacity: 'none' }}>
                        <Grid container spacing={2}>
                            <Grid item md={2}>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    Add Commodity
                                </Typography>
                            </Grid>
                            <Grid item md={10}>
                                {/* <Button type="button" variant="contained" onClick={(e) => onBack()}
                                    style={{ float: 'right', display: 'flex', backgroundColor: '#5a5a5a', color: '#FFF' }} >
                                    <ArrowCircleLeftOutlinedIcon /> Go Back
                                </Button>  */}
                                {/* <Button type="button" variant="contained" 
                                    style={{ float: 'right', display: 'flex', backgroundColor: '#5a5a5a', color: '#FFF' }} > */}
                                <ArrowCircleLeftOutlinedIcon onClick={(e) => onBack()} style={{ float: 'right', display: 'flex', backgroundColor: '#00e676', color: 'black' }} />

                                {/* </Button>  */}
                                {/* <ArrowBack
                    onClick={(e) => onBack()}
                    style={{ fontSize: "30px", color: "#000000c9", cursor: 'pointer', padding: '0px 10px' }}
                /> */}
                            </Grid>
                            <Grid item md={12}>

                            </Grid>
                        </Grid>
                    </Box>
                    <Box style={{ border: '1px solid grey', padding: '10px', backgroundColor: 'white' }}>
                        <Typography>
                            Commodity Item Details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Commodity Name'
                                    name="commodityName"
                                    value={data.commodityName}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Description'
                                    name="description"
                                    value={data.description}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={6}>
                                <Grid item md={3}>
                                    {/* <Grid item md={6}> */}
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            onChange={handleChangeUnit}
                                            type='text'
                                            size='small'
                                            label='Unit'
                                            name="unit"
                                            value={unit}
                                            fullWidth
                                        >
                                            <MenuItem value="Kg">Kg</MenuItem>
                                            <MenuItem value="Tonn">Tonn</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {/* <Grid item md={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="unit"
                                        value={data.unit}
                                        label="Unit"
                                        size='small'
                                        // onChange={handleChangeVehicleNo}
                                        onChange={handleChange}

                                    >
                                        <MenuItem value="" selected disabled>Select Unit</MenuItem>
                                        {selectUnit && selectUnit.map((option,index) => (
                                            <MenuItem key={index} value={option._id}>
                                                {option.unit}
                                            </MenuItem>
                                        ))}
                          </Select>
                          </FormControl>
                            </Grid> */}
                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='MOQ'
                                    name="moq"
                                    value={data.moq}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Hindi Name'
                                    name="hindiName"
                                    value={data.hindiName}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='English Name'
                                    name="englishName"
                                    value={data.englishName}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={2}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Minimum Price'
                                    name="minPrice"
                                    value={data.minPrice}
                                />
                            </Grid>
                            <Grid item md={2}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Maximum Price'
                                    name="maxPrice"
                                    value={data.maxPrice}
                                />
                            </Grid>
                            <Grid item md={2}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Nodal Price'
                                    name="nodalPrice"
                                    value={data.nodalPrice}
                                />
                            </Grid>
                            <Grid item md={3}>
                                {/* <TextField
                                    // onChange={handleChange}
                                    // onChange={imageUpload}
                                    onChange={(e) => uploadFile(e.target.files[0])}
                                    type='file'
                                    size='small'
                                    label='Image'
                                    name="image"
                                    value={data.image}
                                    fullWidth
                                /> */}
                                <div>
                                        <input accept="image/*" name="image" id="contained-button-file" type="file" onChange={(e) => uploadFile(e.target.files[0])} />
                                        {/* <label htmlFor="contained-button-file">
                                            <Button component="span" >
                                                Upload
                                            </Button>
                                        </label> */}
                                    </div>
                            </Grid>
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
export default CommodityMasterEntry;