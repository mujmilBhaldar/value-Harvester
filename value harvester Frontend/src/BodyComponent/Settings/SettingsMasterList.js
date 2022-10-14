// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import base64 from "base-64";
// import "./Style.css";
// import {
//     Paper, Box, Button, Table, TableRow, TableCell, TableHead, TableBody, TablePagination,
//     InputBase, Divider, IconButton, DialogActions, Dialog, DialogTitle, Snackbar, CircularProgress
// } from "@mui/material";
// import { makeStyles } from '@material-ui/styles';
// import { AddCircle, Search, Delete, Edit, InstallDesktop, ArrowBack } from "@mui/icons-material";
// import { Link, useNavigate } from "react-router-dom";

// // import 'react-confirm-alert/src/react-confirm-alert.css';
// // import {basicURL} from '../../AuthURL';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         padding: '2px 4px',
//         display: 'flex',
//         alignItems: 'center',
//         width: 400,
//     },
//     input: {
//         marginLeft: '10px',
//         flex: 1,
//     },
//     iconButton: {
//         padding: 10,
//     },
//     divider: {
//         height: 28,
//         margin: 4,
//     },
// }));

// const SettingMaster = () => {

//     const login_details = sessionStorage.getItem('user_login');
//     const userRole = JSON.parse(login_details);

//     const username = "LogisticAPI";
//     const password = "APIlogistic2022";

//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(10);
//     const [isMessage, setIsMessage] = useState(null);
//     const [tableData, setTableData] = useState([]);
//     const [isDelete, setIsDelete] = useState(false);
//     const [deleteInfo, setDeleteInfo] = useState();
//     const classes = useStyles();

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };

//     const handleClose = () => {
//         setIsDelete(false)
//         setDeleteInfo(null);

//     }
//     const handleDelete = (info) => {
//         setIsDelete(true);
//         setDeleteInfo(info);
//     }

//     useEffect(() => {
//         getData()
//     }, []);
//     const getData = () => {
//         axios
//             .get("http://localhost:5050/api/setting")
//             .then((response) => {
//                 setTableData(response.data)
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }
//     const deleteRecord = () => {
//         axios.put("http://localhost:5050/api/setting_delete", { _id: deleteInfo._id })
//             .then(res => {
//                 getData();
//                 setIsDelete(false);
//             }).catch(err => {
//                 setIsDelete(false);
//             })
//     }

//     const Navigate = useNavigate();
//     const onBack = () => {
//         Navigate(-1);
//     };

//     return (
//         <Box className="mainContainer">
//             <Paper className="paperCard">
//                 <Box display='flex' justifyContent='space-between' alignItems="center" style={{ padding: '10px', background: '#1976d214' }}>
//                     <Box display="flex" justifyContent="flex-start" alignItems="center">
//                         <Box>
//                             <h2 style={{ color: 'black', margin: '10px' }}>Setting Master List</h2>
//                         </Box>
//                     </Box>
//                     <Box >
//                         <Link to="./entry" style={{ textDecoration: 'unset' }}>
//                             <span className="addBtn">
//                                 {/* <AddCircle className="addIcon" style={{ fontSize: '40px', color: '#f52323' }} /> */}
//                             </span>
//                         </Link>
//                     </Box>
//                 </Box>
//                 <Paper>

//                     <Box display="flex" justifyContent='space-between' alignItems='center' style={{ padding: '10px' }}>
//                         <Box>
//                             <Paper component="form" className={classes.root}>
//                                 <InputBase
//                                     // onChange={(e) => searchUserMobNoClick(e.target.value)}
//                                     className={classes.input}
//                                     placeholder="Search "
//                                     inputProps={{ 'aria-label': 'search google maps' }}
//                                 />
//                                 <Divider className={classes.divider} orientation="vertical" />
//                                 <IconButton color="primary" className={classes.iconButton} aria-label="directions">
//                                     <Search />
//                                 </IconButton>
//                             </Paper>
//                         </Box>
//                     </Box>
//                     {tableData && tableData.length === 0 ?
//                         <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
//                             <CircularProgress />
//                         </Box> :
//                         <Box style={{ overflow: 'auto' }}>
//                             <Table id='userTable'>
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell style={{ padding: '8px', fontWeight: 'bold', background: '#f02618', color: '#fff' }} align="center">Sr. No.</TableCell>
//                                         <TableCell style={{ padding: '8px', fontWeight: 'bold', background: '#f02618', color: '#fff' }} align="center">Processing Fee </TableCell>
//                                         <TableCell style={{ padding: '8px', fontWeight: 'bold', background: '#f02618', color: '#fff' }} align="center">Advanced Amount</TableCell>
//                                         <TableCell style={{ padding: '8px', fontWeight: 'bold', background: '#f02618', color: '#fff' }} align="center">Delivery Charges </TableCell>

//                                         <TableCell style={{ padding: '8px', fontWeight: 'bold', background: '#f02618', color: '#fff' }} align="center">Gst</TableCell>
//                                         <TableCell style={{ padding: '8px', fontWeight: 'bold', background: '#f02618', color: '#fff' }} align="center"> Action</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {tableData && tableData.map((row, index) => {
//                                         return (
//                                             <TableRow>
//                                                 <TableCell style={{ padding: '5px 3px' }} align="center">{index + 1}</TableCell>
//                                                 <TableCell style={{ padding: '5px 3px' }} align="center">{row.processingFee}</TableCell>
//                                                 <TableCell style={{ padding: '5px 3px' }} align="center">{row.advancedAmount}</TableCell>

//                                                 <TableCell style={{ padding: '5px 3px' }} align="center">{row.deliveryCharges}</TableCell>
//                                                 <TableCell style={{ padding: '5px 3px' }} align="center">{row.gst}</TableCell>


//                                                 <TableCell style={{ display: 'flex', padding: '6px 3px' }} align="center">
//                                                     <Link to={{ pathname: `./entry`, search: "edit" }} state={row}>
//                                                         <Edit color='primary' sx={{ cursor: 'pointer', mx: 1.1 }} align="center" />
//                                                     </Link>
//                                                     {/* <Delete onClick={(e) => handleDelete(row)} sx={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }} /> */}

//                                                 </TableCell>

//                                             </TableRow>
//                                         );
//                                     })}
//                                 </TableBody>
//                             </Table>
//                         </Box>
//                     }
//                     <TablePagination
//                         rowsPerPageOptions={[10, 25, 100]}
//                         component="div"
//                         count={tableData && tableData.length}
//                         rowsPerPage={rowsPerPage}
//                         page={page}
//                         onPageChange={handleChangePage}
//                         onRowsPerPageChange={handleChangeRowsPerPage}
//                     />
//                 </Paper>
//             </Paper>

//             <Dialog open={isDelete}>
//                 <DialogTitle style={{ color: 'red' }}>Are you sure you want to delete #{deleteInfo && deleteInfo.commodityName} record?</DialogTitle>
//                 <DialogActions>
//                     <Button onClick={handleClose} style={{ color: 'blue', border: '1px solid blue', padding: '2px 10px' }} variant='outlined'>
//                         No
//                     </Button>
//                     <Button onClick={deleteRecord} style={{ color: 'red', border: '1px solid red', padding: '2px 10px' }} variant='outlined' >
//                         Yes
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//             {isMessage &&
//                 <Snackbar
//                     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//                     open={isMessage ? true : false}
//                     onClose={handleClose}
//                     autoHideDuration={3000}
//                     message={isMessage}
//                 />
//             }
//         </Box>
//     );

// };


// export default SettingMaster; 


import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { TextField, Paper, Grid, Button, Typography,Dialog,DialogTitle,DialogActions,InputBase ,TablePagination,Divider, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import "./../BodyComponent.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from "@material-ui/styles";
// import { Search } from '@mui/icons-material';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         padding: "2px 4px",
//         display: "flex",
//         alignItems: "center",
//         width: 400,
//     },
//     input: {
//         marginLeft: "10px",
//         flex: 1,
//     },
//     iconButton: {
//         padding: 10,
//     },
//     divider: {
//         height: 28,
//         margin: 4,
//     },
// }));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#587308',
        // backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    '&:nth-of-type(odd)': {
        // backgroundColor: "#c8e6c9",
        backgroundColor: "white",
      
      },
      '&:nth-of-type(even)': {
        backgroundColor: "#c5e1a5",
      
      },
}));



const SettingsMasterList = () => {
    // const classes = useStyles();
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)
    const [isLoaded, setIsLoaded] = useState(false);
    const [rows, setRows] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const [q, setQ] = useState("");
    // const [searchParam] = useState(["processingFee","advancedAmount","deliveryCharges","gst"]);
    const [searchParam] = useState(["processingFee","advancedAmount"," deliveryCharges","gst"]);
  


    const [isDelete, setIsDelete] = useState(false);
    const [deleteInfo, setDeleteInfo] = useState();

    const handleClose = () => {
        setIsDelete(false)
        setDeleteInfo(null);
    }
    const handleDelete = (info) => {
        setIsDelete(true);
        setDeleteInfo(info);
    }

    React.useEffect(() => {
        getData()
    }, []);

    
    const getData = () => {
        axios
            .get("http://localhost:5050/api/setting")
            .then((response) => {
                setIsLoaded(true);
                setRows(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    
        }
        const deleteRecord = () => {
            axios.put("http://localhost:5050/api/setting_delete", { _id: deleteInfo._id })
                .then(res => {
                    getData();
                    setIsDelete(false);
                }).catch(err => {
                    setIsDelete(false);
                })
        }
    
        function search(rows) {
            return rows.filter((item) => {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            });
        }

 

    return (
        <>
           
            <Paper style={{ marginTop: '20px', height: 'auto', margin: '30px',  border: 'transparent' }}>
                <Box style={{ padding: '25px', border: 'none',backgroundColor: '##dcedc8' }}>
                    <Grid container spacing={2}>
                     <Grid item md ={12}>
                            <Typography style={{ fontWeight: 'bold' }}>
                            Setting Master List
                            </Typography>
                        </Grid>
                        <Grid item xs={3} >
                            <TextField
                            
                                type="search"
                                name="search-form"
                                placeholder="Search for..."
                                value={q}
                                fullWidth
                                size="small"
                                onChange={(e) => setQ(e.target.value)}
                                Icon="save"
                            />
                            </Grid>
            

                        <Grid item md={12}>
                            <Link to="/settingMaster/entry" style={{ textDecoration: 'unset' }}>
                                <Button style={{ justifyContent: 'center', display: 'flex', float: 'left', backgroundColor: '#5a5a5a', color: '#fff' }}>
                                    <AddIcon />  Add
                                </Button>
                            </Link>
                        </Grid>                    
                    </Grid>
                </Box>
            </Paper>
            <Paper style={{ marginTop: '20px', height: 'auto', padding: '25px', margin: '30px',backgroundColor: ''}}>
                <Box style={{ padding: '15px' }}>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Typography style={{ float: 'right' }}>
                                Total Records ()
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700, }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell align="center" color='#f0f4c3'>processingFee</StyledTableCell>
                                <StyledTableCell align="center">Advanced Amount</StyledTableCell>
                                <StyledTableCell align="center">Delivery Charges</StyledTableCell>
                                <StyledTableCell align="center">Gst</StyledTableCell>
                               
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ }} >
                             {/* {rows
                                .map((row, index) => (  */}
                                   {search(rows)
                                        .slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        .map((row, index) => (
                               
                                    <StyledTableRow  >
                                        {/* <StyledTableCell component="th" scope="row"></StyledTableCell> */}


                                        <StyledTableCell align="center">{index + 1}</StyledTableCell>
                                        <StyledTableCell align="center">{row.processingFee}</StyledTableCell>
                                        <StyledTableCell align="center">{row.advancedAmount}</StyledTableCell>
                                        <StyledTableCell align="center">{row.deliveryCharges}</StyledTableCell>
                                        <StyledTableCell align="center">{row.gst}</StyledTableCell>
      
                                        {/* <StyledTableCell align="center">
                                                 <Link to={{pathname: `./WebUserMaster/webUserMasterEntry`,search: "edit"}} state={row}>
                                                    <EditIcon color='primary' sx={{ cursor: 'pointer', mx: 1.1 }} />
                                                 </Link> 
                                                    <DeleteIcon onClick={(e) => handleDelete(row)} color='error' sx={{ cursor: 'pointer' }} />
                                                </StyledTableCell> */}
                                                  <StyledTableCell align="center">
                                                 <Link to={{pathname: `./entry`,search: "edit"}} state={row}>
                                                    <EditIcon color='success' sx={{ cursor: 'pointer', mx: 1.1 }} />
                                                 </Link> 
                                                    <DeleteIcon onClick={(e) => handleDelete(row)} color='error' sx={{ cursor: 'pointer' }} />
                                                </StyledTableCell>


                                                
                                    </StyledTableRow>
                                ))}
                        </TableBody>

                    </Table>
                </TableContainer>
                <TablePagination
                            sx={{ px: 2 }}
                            rowsPerPageOptions={[5, 10, 25, 50, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                'aria-label': 'Previous Page',
                            }}
                            nextIconButtonProps={{
                                'aria-label': 'Next Page',
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
            </Paper>
            <Dialog open={isDelete}>
                        <DialogTitle style={{ color: 'red' }}>Are you sure you want to delete #{deleteInfo && deleteInfo.name} record?</DialogTitle>
                        <DialogActions>
                            <Button onClick={handleClose} style={{ color: 'blue', border: '1px solid blue', padding: '2px 10px' }} variant='outlined'>
                                No
                            </Button>
                            <Button onClick={deleteRecord} style={{ color: 'red', border: '1px solid red', padding: '2px 10px' }} variant='outlined' >
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
        </>
    )
}

export default SettingsMasterList;