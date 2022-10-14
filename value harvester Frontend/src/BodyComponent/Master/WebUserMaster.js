
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { TextField, Paper, Grid, Button, Typography, Dialog, DialogTitle, DialogActions, InputBase, TablePagination, Divider, IconButton } from '@mui/material';
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
        // backgroundColor: '#587308',
        backgroundColor: "#00e676",
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
        // backgroundColor: "#c5e1a5",
        backgroundColor: "#e8f5e9"

    },
}));



const WebUserMaster = () => {
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
    // const [searchParam] = useState(["commodityName","description","unit","moq","image","hindiName","englishName","minPrice","maxPrice","nodalPrice",]);
    const [searchParam] = useState(["name", "userName", "password", "role"]);


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
            .get("http://localhost:5050/api/admin")
            .then((response) => {
                setIsLoaded(true);
                setRows(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }
    const deleteRecord = () => {
        axios.put("http://localhost:5050/api/admin_delete", { _id: deleteInfo._id })
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
            <Paper style={{ marginTop: '20px', height: 'auto', margin: '30px', border: 'transparent' }}>
                <Box style={{ padding: '25px', border: 'none' }}>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Typography style={{ fontWeight: 'bold' }}>
                                Web User Master List
                            </Typography>
                        </Grid>
                        <Grid
  container
  direction="row"
  justifyContent="flex-end"
  alignItems="flex-end"
>
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
                        </Grid>


                        <Grid item md={12}>
                            <Link to="/WebUserMaster/webUserMasterEntry" style={{ textDecoration: 'unset' }}>
                                <Button style={{ justifyContent: 'center', display: 'flex', float: 'left', backgroundColor: '#5a5a5a', color: '#fff' }}>
                                    <AddIcon />  Add
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            <Paper style={{ marginTop: '20px', height: 'auto', padding: '25px', margin: '30px' }}>
                <Box style={{ padding: '15px' }}>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Typography style={{ float: 'right' }}>
                                Total Records ( {rows.length})
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">User Name</StyledTableCell>
                                <StyledTableCell align="center">Password</StyledTableCell>
                                <StyledTableCell align="center">Role</StyledTableCell>

                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{}}>
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
                                        <StyledTableCell align="center">{row.name}</StyledTableCell>
                                        <StyledTableCell align="center">{row.userName}</StyledTableCell>
                                        <StyledTableCell align="center">{row.password}</StyledTableCell>
                                        <StyledTableCell align="center">{row.role}</StyledTableCell>

                                        {/* <StyledTableCell align="center">
                                                 <Link to={{pathname: `./WebUserMaster/webUserMasterEntry`,search: "edit"}} state={row}>
                                                    <EditIcon color='primary' sx={{ cursor: 'pointer', mx: 1.1 }} />
                                                 </Link> 
                                                    <DeleteIcon onClick={(e) => handleDelete(row)} color='error' sx={{ cursor: 'pointer' }} />
                                                </StyledTableCell> */}
                                        <StyledTableCell align="center">
                                            <Link to={{ pathname: `./webUserMasterEntry`, search: "edit" }} state={row}>
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

export default WebUserMaster;