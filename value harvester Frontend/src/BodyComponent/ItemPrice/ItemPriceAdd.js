
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { TextField, Paper, Grid, Button, Typography, IconButton } from '@mui/material';
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

const Input = styled('input')({
    display: 'none',
});


const ItemPriceAdd = () => {
    const [noOfBox, setNoofBox] = React.useState(1)
    const [certification, setCertification] = React.useState(1)
    const Navigate = useNavigate();

    const [data, setData] = useState({

        itemName: '',
        title: '',
        minPrice: '',
        maxPrice: '',
        nodalPrice: '',
        description: '',
        buyerMinQty: '',
        keyAttributes: '',
        certification: '',
        createDate: '',
        status: ''

    })

    const handleSubmit = (event) => {

        axios.post("http://localhost:5555/api/items")
            .then((response) => {
                Navigate(-1);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleChange = (event) => {
        event.persist()
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    };

    const handleClose = () => {
        Navigate(-1);
    }



    const onBack = () => {
        Navigate(-1);
    };
    //   -----------select image------
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    // const onSelectFile = e => {
    //     if (!e.target.files || e.target.files.length === 0) {
    //         setSelectedFile(undefined)
    //         return
    //     }

    //       // I've kept this example simple by using the first image instead of multiple
    //     setSelectedFile(e.target.files[0])
    // }

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])

        // I've kept this example simple by using the first image instead of multiple

        // for(let i = 0; i < e.target.files.length; i++) {
        //    setSelectedFile(e.target.files[i])
        // }  
    }


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
                                <Button type="button" variant="contained" onClick={(e) => onBack()}
                                    style={{ float: 'right', display: 'flex', backgroundColor: '#5a5a5a', color: '#FFF' }} >
                                    <ArrowCircleLeftOutlinedIcon /> Go Back
                                </Button>
                            </Grid>

                            <Grid item md={12}>
                                <Button id='btnSave' type="submit" variant="contained" color="success"  style={{ margin: '8px', height: '44px' }} >
                                    <SaveAltIcon style={{ marginRight: '8px' }} /> save
                                </Button>
                                <Button type="button" variant="contained" color="error" onClick={handleClose} style={{ margin: '8px', height: '44px' }}>
                                    <HighlightOffIcon style={{ marginRight: '8px' }} /> cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box style={{ border: '1px solid grey', padding: '10px' }}>
                        <Typography>
                            Commodity Item Details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Name'
                                    name="itemName"
                                    value={data.itemName}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Title'
                                    name="title"
                                    value={data.title}
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
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item md={6}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Description'
                                    name="description"
                                    value={data.description}
                                    multiline
                                    maxRows={4}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Buyer Min.QTY'
                                    name="buyerMinQty"
                                    value={data.buyerMinQty}
                                />
                            </Grid>

                        </Grid>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item md={6}>
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onSelectFile} />
                                    <Button component="span" style={{ border: '1px dashed grey', height: '120px', width: '538px' }}>
                                        <UploadFileIcon /> Click to this area to uplod file
                                    </Button>
                                </label>

                            </Grid>
                            <Grid item md={6}>

                                {selectedFile && <img src={preview} alt="pic" style={{ height: '120px', width: '180px' }} />}
                            </Grid>
                        </Grid>

                    </Box>

                    <Box value={data.keyAttributes} style={{ border: '1px solid grey', padding: '10px', marginTop: '16px', height: 'auto' }}>
                        <Typography>
                            key Attributes
                        </Typography>
                        <Box>
                            {[...Array(noOfBox)].map((elementInArray, index) => {
                                return (
                                    <Grid container spacing={2} sx={{ mt: 2 }}>
                                        <Grid item md={3}>
                                            <TextField
                                                onChange={handleChange}
                                                type='text'
                                                size='small'
                                                placeholder='Enter Key'
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item md={3}>
                                            <TextField
                                                onChange={handleChange}
                                                type='text'
                                                size='small'
                                                placeholder='Key Value'
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item md={3}>
                                            <IconButton onClick={() => setNoofBox(noOfBox + 1)}>
                                                <AddCircleOutlineIcon />
                                            </IconButton>
                                            {index === 0 ?
                                                <IconButton disabled >
                                                    <DoDisturbOnOutlinedIcon />
                                                </IconButton> :

                                                <IconButton onClick={() => setNoofBox(noOfBox - 1)}>
                                                    <DoDisturbOnOutlinedIcon />
                                                </IconButton>}
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Box>
                    </Box>

                    <Box value={data.certification} style={{ border: '1px solid grey', padding: '10px', marginTop: '16px', height: 'auto' }}>
                        <Typography>
                            Certification
                        </Typography>
                        <Box>
                            {[...Array(certification)].map((elementInArray, index) => {
                                return (
                                    <Grid container spacing={2} sx={{ mt: 2 }}>
                                        <Grid item md={4}>
                                            <TextField
                                                onChange={handleChange}
                                                type='text'
                                                size='small'
                                                placeholder='Certification Name'
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid item md={3}>
                                            <IconButton onClick={() => setCertification(certification + 1)}>
                                                <AddCircleOutlineIcon />
                                            </IconButton>
                                            {index === 0 ?
                                                <IconButton disabled >
                                                    <DoDisturbOnOutlinedIcon />
                                                </IconButton> :

                                                <IconButton onClick={() => setCertification(certification - 1)}>
                                                    <DoDisturbOnOutlinedIcon />
                                                </IconButton>}
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Box>
                    </Box>
                </form>
            </Paper>
        </>
    )
}
export default ItemPriceAdd;