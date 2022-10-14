import React, { useState } from 'react';
import {Button, CssBaseline, TextField, Paper, Box, Grid , Typography} from '@mui/material';
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

// import { basicURL } from '../AuthURL';

const theme = createTheme();



const PasswordForm = () => {
    const navigate = useNavigate()
    // const [userName, setUserName] = useState('')
    const [  code, setCode ]= useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');
    const [isMessage, setIsMessage] = useState(null);
    // const [inputField,setInputField, ] = useState({
    //     code:'',
    //     password:'',
    //     cpassword:''
    // })

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
    const { handleSubmit } = useForm({});

    // const onSubmit = (e) => {
    //     const loginData = { userName, password };
   


    // };

    const onSubmit = async (event) => {
        
        const loginData = {   code, password };
        // setLoading(true)
        axios.post("http://localhost:5050/api/login", loginData)
            .then(res => {
                sessionStorage.setItem("loginUser",JSON.stringify(res.data.userInfo));
                sessionStorage.setItem("token",res.data.token);
            
                // navigate('/')
                // navigate('/dashboard')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const changePassword = async (event) => {
        navigate('/otpForm')
    }
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                
         <Grid item xs={12} sm={8} md={5} >
                    <Box
                        sx={{
                            my: 8,
                            mx: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            // alignItems: 'center',
                        }}
                    > 
                       
                  {/* <img src={logo} style={{ height: "90px", marginBottom: '40px' }} />  */}
                        <img  style={{ height: "90px", marginBottom: '40px' }} />
                        <br />   
                        <Typography variant="h4" style={{display:'flex', justifyContent:'center'}}>
                      Reset Password
                        </Typography><br /> 

                        <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                            <FormHelperText style={{ color: 'red', fontSize: '15px' }}>{helperText}</FormHelperText>
                            {/* <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="code"
                                label="otpCode"
                                name="code"
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
                     <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="cpassword"
                                label="Confirm Password"
                                type="cpassword"
                                id="cpassword"
                                // autoComplete="current-password"
                                value={cpassword}
                                onChange={handelePassword}
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

export default PasswordForm;