import React, { useState } from 'react';
import {Button, CssBaseline, TextField, Paper, Box, Grid , Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import logo from '../images/Free-Farm-Logo-Vector-Agriculture-Logo-Template-Download-scaled.jpg'
import logo1 from '../images/istockphoto-1187320693-612x612.jpg'
// import logo from './../../images/demo-logo.jpg'
// import loginImg from './../../images/pexels-pixabay-461960.jpg'
// import Img from '../images/pexels-pixabay-461960.jpg'
// import Img from '../images/gettyimages-173294618-2048x2048.jpg'
import Img from '../images/pexels-pixabay-461960.jpg'


import axios from "axios";
// import base64 from "base-64";
// import { ErrorMessage } from '@hookform/error-message';
import { useForm } from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';
import Snackbar from '@mui/material/Snackbar';


// import { basicURL } from '../AuthURL';

const theme = createTheme();

const Login = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');
    const [isMessage, setIsMessage] = useState(null);

    const handleUsername = (e) => {
        setUserName(e.target.value)
        setHelperText(' ');
        setIsMessage(null);
        setError(false);
    }
    const handleEmail = (e) => {
        setEmailId(e.target.value)
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
    const { handleSubmit } = useForm({});


    const onSubmit = (event) => {

        const loginData = { userName, password };
        // setLoading(true)
        axios.post("http://localhost:5050/api/admin_login", loginData)
            .then((res) => {
                if(res.data.message === 'Please try again later'){
                    navigate('/')
                }else{
                    sessionStorage.setItem("user_login",JSON.stringify(res.data.userInfo));
                    sessionStorage.setItem("token",res.data.token);
                    navigate('/dashboard')
                }
            })
            .catch((error) => {
                navigate('/')
                console.log(error);
            });
    }
    // const loginData = { emailId, password };
    //     // setLoading(true)
    //     axios.post("http://localhost:5050/api/login", loginData)
    //         .then((res) => {
    //                 sessionStorage.setItem("user_login",JSON.stringify(res.data.userInfo));
    //                 sessionStorage.setItem("token",res.data.token);
    //                 navigate('/dashboard')
    //         })
    //         .catch((error) => {          
    //             console.log(error);
    //         });
    // }

    
    const changePassword = async (event) => {
          navigate('/otpForm')
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
                        backgroundImage: `url(${Img})`,
                      
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
                       
                        <img src={logo} style={{ height: "90px", marginBottom: '40px' }} />
                       
                     
                        {/* <img src={logo1} style={{ zIndex:-1 }} /> */}
                  
                   
                        <br />   
                        <Typography variant="h4" style={{display:'flex', justifyContent:'center'}}>
                        Sign In
                        </Typography><br />

                        <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                            <FormHelperText style={{ color: 'red', fontSize: '15px' }}>{helperText}</FormHelperText>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="userName"
                                label="UserName"
                                name="userName"
                                // value={userName}
                                value={userName}
                                onChange={handleUsername}

                            />

                             {/* <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="emailId"
                                label="EmailId"
                                name="emailId"
                                // value={userName}
                                value={emailId}
                                onChange={handleEmail}

                            /> */}
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
                            <Button
                                // style={{ background: '#002b65', color: 'white', borderRadius: '10px', fontSize: '16px' }}
                                style={{ background: '#587308', color: 'white', borderRadius: '10px', fontSize: '16px' }}
                               
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                <b>Sign In</b>
                            </Button>
                            <span class="psw"  onClick={changePassword}>Forgot <a href="#"   style={{ color: '#587308'}}>password?</a></span>

                        </form>
                        {/* <img class="logo img-responsive" src="https://prestashop.mahardhi.com/MT08/paudha/img/logo-1659421625.jpg" alt="paudha"> */}
                    </Box>
                    {isMessage && (
                        <Snackbar
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                            open={isMessage ? true : false}
                            onClose={setIsMessage}
                            autoHideDuration={3000}
                            message={isMessage}
                        />
                    )}
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Login;