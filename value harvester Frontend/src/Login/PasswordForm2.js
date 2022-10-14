import React, { useRef, useState } from 'react';
import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
// import logo from './../../images/demo-logo.jpg'
// import loginImg from './../../images/login-image01.jpg'
import axios from "axios";
// import base64 from "base-64";
// import { ErrorMessage } from '@hookform/error-message';
import { useForm } from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';
import Snackbar from '@mui/material/Snackbar';
import PasswordForm from './PasswordForm';


// import { basicURL } from '../AuthURL';

const theme = createTheme();

const OtpForm = () => {
    const navigate = useNavigate()
    const emailIdRef = useRef();
    const [otpForm, showForm] = useState(true)
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [emailId, setEmailId] = useState('')

    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');
    const [isMessage, setIsMessage] = useState(null);

    const handleEmail = (e) => {
        setCode(e.target.value)
        setHelperText(' ');
        setIsMessage(null);
        setError(false);
    }

    const handelePassword = (e) => {

        setPassword(e.target.value)
        setHelperText(' ');
        setIsMessage(null);
        setError(false);
    }
    const C_handelePassword = (e) => {

        setCPassword(e.target.value)
        setHelperText(' ');
        setIsMessage(null);
        setError(false);
    }
    const { handleSubmit } = useForm({});
    // const sendotp = async (event) => {
    //     const loginData = { 
    //         emailId:emailIdRef.current.value
    //     };

    //     axios.post("http://localhost:5050/api/login", loginData)
    //         .then(res => {
    //             sessionStorage.setItem("loginUser",JSON.stringify(res.data.userInfo));
    //             sessionStorage.setItem("token",res.data.token);
    //             showForm(false)
    //             navigate('/passwordForm')

    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    const onSubmit = async (event) => {

        const Data = { code, password, cpassword };
        // setLoading(true)
        axios.put("http://localhost:5050/api/change_password", Data)
     
            .then(res => {
                sessionStorage.setItem("loginUser",JSON.stringify(res.data.user));
                // sessionStorage.setItem("token", res.data.data);
                showForm(false)
                // navigate('/')
                // navigate('/passwordForm')
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        // backgroundImage: `url(${loginImg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}
                >
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        {/* <img src={logo} style={{ height: "90px", marginBottom: '40px' }} /> */}
                        <img style={{ height: "90px", marginBottom: '40px' }} />
                        <br />
                        <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center' }}>
                            Reset Password
                        </Typography><br />


                        {/* // <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}> */}
                        <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                            <FormHelperText style={{ color: 'red', fontSize: '15px' }}>{helperText}</FormHelperText>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="code"
                                label="otpCode"
                                name="code"
                                type="code"
                                value={code}
                                onChange={handleEmail}

                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                // autoComplete="current-password"
                                value={password}
                                onChange={handelePassword}
                            />
                            {/* <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="cpassword"
                                label="Confirm Password"
                                type="cpassword"
                                id="cpassword"
                                // autoComplete="current-password"
                                value={cpassword}
                                onChange={C_handelePassword}
                            /> */}
                            <Button
                                style={{ background: '#587308', color: 'white', borderRadius: '10px', fontSize: '16px' }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                <b>Change Password</b>
                            </Button>

                        </form>

                    </Box>

                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default OtpForm;