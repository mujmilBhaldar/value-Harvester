// import React, { useState } from 'react';
// import {Button, CssBaseline, TextField, Paper, Box, Grid , Typography} from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from "react-router-dom";
// // import logo from './../../images/demo-logo.jpg'
// // import loginImg from './../../images/login-image01.jpg'
// import axios from "axios";
// // import base64 from "base-64";
// // import { ErrorMessage } from '@hookform/error-message';
// import { useForm } from "react-hook-form";
// import FormHelperText from '@mui/material/FormHelperText';
// import Snackbar from '@mui/material/Snackbar';

// // import { basicURL } from '../AuthURL';

// const theme = createTheme();

// const Login = () => {
//     const navigate = useNavigate()
//     // const [userName, setUserName] = useState('')
//     const [userName, setuserName] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = React.useState(false);
//     const [helperText, setHelperText] = React.useState('');
//     const [isMessage, setIsMessage] = useState(null);

//     const handleEmail = (e) => {
//         setuserName(e.target.value)
//         setHelperText(' ');
//         setIsMessage(null);
//         setError(false);
//     }

//     const handelePassword = (e) => {

//         setPassword(e.target.value)
//         setHelperText(' ');
//         setIsMessage(null);
//         setError(false);
//     }
//     const { handleSubmit } = useForm({});


//     const onSubmit = async (event) => {

//         const loginData = { userName, password };
//         // setLoading(true)
//         axios.post("http://localhost:5050/api/", loginData)
//             .then(res => {
//                 sessionStorage.setItem("loginUser",JSON.stringify(res.data.userInfo));
//                 sessionStorage.setItem("token",res.data.token);
            
//                 // navigate('/')
//                 navigate('/dashboard')
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }

//     const changePassword = async (event) => {
//           navigate('/otpForm')
//     }
//     return (
//         <ThemeProvider theme={theme}>
//             <Grid container component="main" sx={{ height: '100vh' }}>
//                 <CssBaseline />
//                 <Grid
//                     item
//                     xs={false}
//                     sm={4}
//                     md={7}
//                     style={{
//                         display: 'flex',
//                         alignItems: 'flex-end',
//                         // backgroundImage: `url(${loginImg})`,
//                         backgroundRepeat: 'no-repeat',
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
                        
//                     }}
//                 >
//                 </Grid>
//                 <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                     <Box
//                         sx={{
//                             my: 8,
//                             mx: 12,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
                       
//                         {/* <img src={logo} style={{ height: "90px", marginBottom: '40px' }} /> */}
//                         <img  style={{ height: "90px", marginBottom: '40px' }} />
//                         <br />   
//                         <Typography variant="h4" style={{display:'flex', justifyContent:'center'}}>
//                         Sign In
//                         </Typography><br />

//                         <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
//                             <FormHelperText style={{ color: 'red', fontSize: '15px' }}>{helperText}</FormHelperText>
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="userName]"
//                                 label="EmailId"
//                                 name="userName"
//                                 // value={userName}
//                                 value={userName}
//                                 onChange={handleEmail}

//                             />

//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 id="password"
//                                 // autoComplete="current-password"
//                                 value={password}
//                                 onChange={handelePassword}
//                             />
//                             <Button
//                                 style={{ background: '#002b65', color: 'white', borderRadius: '10px', fontSize: '16px' }}
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                             >
//                                 <b>Sign In</b>
//                             </Button>
//                             <span class="psw" onClick={changePassword}>Forgot <a href="#">password?</a></span>

//                         </form>

//                     </Box>
//                     {isMessage && (
//                         <Snackbar
//                             anchorOrigin={{ vertical: "top", horizontal: "right" }}
//                             open={isMessage ? true : false}
//                             onClose={setIsMessage}
//                             autoHideDuration={3000}
//                             message={isMessage}
//                         />
//                     )}
//                 </Grid>
//             </Grid>
//         </ThemeProvider>
//     );
// }

// export default Login;