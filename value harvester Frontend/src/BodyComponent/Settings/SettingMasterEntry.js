// import React, { useState } from "react";

// import { Card, MenuItem, Paper, Snackbar, TextField, Button, Grid, Box } from "@mui/material";

// import "./Style.css";

// import { useForm } from "react-hook-form";
// import { ErrorMessage } from '@hookform/error-message';
// import axios from "axios";
// import base64 from "base-64";
// import { useNavigate, useLocation } from "react-router-dom"
// import { ArrowBack } from "@mui/icons-material";
// // import { basicURL } from '../../AuthURL';


// const SettingMasterEntry = () => {
//     // const login_details = sessionStorage.getItem('user_login');
//     // const userRole = JSON.parse(login_details);

//     const location = useLocation();
//     const editData = location.state;
//     const navigate = useNavigate();
//     const [isMessage, setIsMessage] = useState(null);
//      const editid = editData && editData._id;

//     const [Data, setData] = useState({
//         _id: editid,

//         processingFee: editData ? editData.processingFee : '',
//         advancedAmount: editData ? editData.advancedAmount : '',
//         deliveryCharges: editData ? editData.deliveryCharges : '',
//         gst: editData ? editData.gst : '',
     
//     })

//     const { register, handleSubmit, formState: { errors } } = useForm({});
//     const username = "LogisticAPI";
//     const password = "APIlogistic2022";

//     const handleInput = (e) => {
//         const value = e.target.value;
//         setData({
//             ...Data,
//             [e.target.name]: value
//         });
//     }



//     const onSubmit = (e) => {
//         if (location.search === '?edit') {
//             axios
//               .put("http://localhost:5050/api/setting",Data)
//               .then(res => {
//                 console.log(res);
//                 setIsMessage('Record Updated Successfully');
//                 handleClose();
//               })
//           } else {
//             axios
//               .post("http://localhost:5050/api/setting",Data)
//               .then(res => {
//                 console.log(res);
//                 setIsMessage('Record Added Successfully');
//                 handleClose();
//               })
//           }
//     };
    

//     const handleClose = () => {
//         setIsMessage(null)
//         navigate(-1);
//     }
//     const Navigate = useNavigate();
//     const onBack = () => {
//         Navigate(-1);
//     };

//     return (
//         <div className="mainContainer"><Paper>
//             <Box display="flex" justifyContent="flex-start" alignItems="center" style={{ padding: '10px', background: '#1976d214' }}>
//                 <ArrowBack
//                     onClick={(e) => onBack()}
//                     style={{ fontSize: "30px", color: "#000000c9", cursor: 'pointer', padding: '0px 10px' }}
//                 />
//                 <h2 style={{ color: '#000000c9', padding: '10px', margin: '0px' }}>Entry</h2>
//             </Box>
//             <Card style={{ boxShadow: 'none', padding: '20px 60px' }}>
//                 {/* <form onSubmit={handleSubmit(onSubmit)}> */}
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <Grid container spacing={2} sx={{ mt: 1 }}>

//                         <Grid item md={4}>
//                             <TextField
//                                 label="Processing Fee "
//                                 type="text"
//                                 {...register("processingFee", { required: "Required *" })}
//                                 className={`inputField valid `}
//                                 value={Data.processingFee}
//                                 name="processingFee"
//                                 onChange={handleInput}
//                             />
//                             <span className="requiredMsg"><ErrorMessage errors={errors} name="processingFee" /></span>
//                         </Grid>

//                         <Grid item md={4} className={`inputField valid `}>
//                             <TextField
//                                 label="Advanced Amount"
//                                 type="text"
//                                 {...register("advancedAmount", { required: "Required *" })}
//                                 className={`inputField valid `}
//                                 value={Data.advancedAmount}
//                                 name="advancedAmount"
//                                 onChange={handleInput}
//                             />
//                             <span className="requiredMsg"><ErrorMessage errors={errors} name="advancedAmount" /></span>
//                         </Grid>


//                         <Grid item md={4}>
//                             <TextField
//                                 label="Delivery Chargese"
//                                 type="text"
//                                 {...register("deliveryCharges", { required: "Required *" })}
//                                 className={`inputField valid `}
//                                 value={Data.deliveryCharges}
//                                 name="deliveryCharges"
//                                 onChange={handleInput}
//                             />
//                             <span className="requiredMsg"><ErrorMessage errors={errors} name="deliveryCharges" /></span>
//                         </Grid>

//                         <Grid item md={4}>
//                             <TextField
//                                 label="Gst"
//                                 type="text"
//                                 {...register("gst", { required: "Required *" })}
//                                 className={`inputField valid `}
//                                 value={Data.gst}
//                                 name="gst"
//                                 onChange={handleInput}
//                             />
//                             <span className="requiredMsg"><ErrorMessage errors={errors} name="gst" /></span>
//                         </Grid>                      
//                     </Grid>              
//                     <Button type="button" variant="contained" color="error" onClick={handleClose} className="cancel">
//                         Cancel
//                     </Button>
//                     <Button type="submit" variant="contained" color="primary" className="save">
//                     {location.search === '?edit' ? 'Update' : 'Save'}
//                     </Button>
//                 </form>
//             </Card>
//         </Paper>
//          {isMessage &&
//                 <Snackbar
//                     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//                     open={isMessage ? true : false}
//                     onClose={handleClose}
//                     autoHideDuration={3000}
//                     message={isMessage}
//                 />
//             }
//         </div>
//     );

// };
// export default SettingMasterEntry;
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

const SettingMasterEntry = () => {
    const [noOfBox, setNoofBox] = React.useState(1)
    const [certification, setCertification] = React.useState(1)
    const navigate = useNavigate();


    const location = useLocation();
    const editData = location.state;
    const editid = editData && editData._id;

    const [data, setData] = useState({
        _id: editid,
        processingFee: editData ? editData.processingFee: '',
        advancedAmount: editData ? editData.advancedAmount : '',
        deliveryCharges: editData ? editData.deliveryCharges : '',
        gst: editData ? editData.gst : '',
        


    })
    const handleChange = (event) => {
        event.persist()
        setData({
            ...data,

            [event.target.name]: event.target.value,
        })
    };

  

    const handleSubmit = (event) => {

        let webData = {
            ...data
           
        }

        if (location.search == '?edit') {
            axios
                .put("http://localhost:5050/api/setting", webData)
                .then((response) => {
                    navigate(-1);
                })
                .catch((error) => {
                    console.log(error);

                });

        } else {
            axios.post("http://localhost:5050/api/setting", webData)
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

    return (
        <>
            <Paper style={{ marginTop: '20px', height: 'auto', padding: '25px', margin: '30px',   opacity: 'none'}}>
                <form onSubmit={handleSubmit} onError={() => null}>
                    <Box style={{ padding: '15px', opacity: 'none'  }}>
                        <Grid container spacing={2}>
                            <Grid item md={2}>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    Add Setting Master
                                </Typography>
                            </Grid>
                            <Grid item md={10}>
                                <Button type="button" variant="contained" onClick={(e) => onBack()}
                                    style={{ float: 'right', display: 'flex', backgroundColor: '#5a5a5a', color: '#FFF' }} >
                                    <ArrowCircleLeftOutlinedIcon /> Go Back
                                </Button>
                            </Grid>

                            {/* <Button color="error" id='btnCancel' variant="contained" onClick={handleClose} sx={{ marginRight: '12px' }}>
                                <Icon>cancel</Icon>

                                Cancel

                            </Button> */}

                            <Grid item md={12}>




                                {location.search == '?edit' ?
                                    <Button id='btnSave' type="submit" variant="contained" color="success" style={{ margin: '8px', height: '44px' }} >
                                        <SaveAltIcon style={{ marginRight: '8px' }} />  Update
                                    </Button>




                                    :
                                    <Button id='btnSave' type="submit" variant="contained" color="success" style={{ margin: '8px', height: '44px' }} >
                                        <SaveAltIcon style={{ marginRight: '8px' }} /> save
                                    </Button>

                                }

                                <Button type="button" variant="contained" color="error" onClick={handleClose} style={{ margin: '8px', height: '44px' }}>
                                    <HighlightOffIcon style={{ marginRight: '8px' }} /> cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box style={{ border: '1px solid grey', padding: '10px',backgroundColor: 'white' }}>
                        <Typography>
                         Setting Master Details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Processing Fee'
                                    name="processingFee"
                                    value={data.processingFee}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Advanced Amount'
                                    name="advancedAmount"
                                    value={data.advancedAmount}
                                    fullWidth
                                />
                            </Grid>

                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Delivery Charges'
                                    name="deliveryCharges"
                                    value={data.deliveryCharges}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    onChange={handleChange}
                                    type='text'
                                    size='small'
                                    label='Gst'
                                    name="gst"
                                    value={data.gst}
                                    fullWidth
                                />
                            </Grid>

                            

                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                        </Grid>
                    </Box>
                </form>
            </Paper>
        </>
    )
}
export default SettingMasterEntry;