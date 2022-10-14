import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Paper, Grid, Button, Typography, InputBase, Divider, IconButton } from '@mui/material';
import "../../BodyComponent.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Search } from '@mui/icons-material';

import { makeStyles } from "@material-ui/styles";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2px 4px",
        display: "flex",

        alignItems: "center",
        width: 400,
    },
    input: {
        marginLeft: "10px",
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: ' #587308',
        backgroundColor: "#00e676",
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Buyer = () => {
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [rows, setRows] = React.useState([]);

    const [isDelete, setIsDelete] = React.useState(false);
    const [deleteInfo, setDeleteInfo] = React.useState();

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
            .get("http://localhost:5050/api/buyerApprovedUser")
            .then((response) => {
                setIsLoaded(true);
                setRows(response.data);
            })
            .catch((error) => {
                setIsLoaded(true);
                console.log(error);
            });
    }

    // const deleteRecord = () => {
    //     axios.put(basicURL+'items_delete' ,{ _id: deleteInfo._id })
    //         .then(res => {
    //             getData();
    //             setIsDelete(false);
    //         }).catch(err => {
    //             setIsDelete(false);
    //         })
    // }

    const [q, setQ] = React.useState("");
    const [searchParam] = React.useState(["firstName", "lastName", "mobileNumber", "emailId", "typeOfBussiness", "bussinessName", "pincode", "district", "state", "country", "panNo", "aadhar", "gstIN", "shopActNo", "location", "panImage", "aadharImage", "gstInImage", "shopActNoImage", "logitude", "latitude", "photograph", "rejectReason"]);

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage)
    // }

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(+event.target.value)
    //     setPage(0)
    // }
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
    const classes = useStyles();
    return (
        <Paper>
            {/* <Box style={{ float: 'right', padding: '15px' }}>
                <Grid container spacing={0} sx={{ mt: 2 }} >
                    <Grid item md={12}>
                    <Paper component="form" className={classes.root}>
                        <InputBase
                            // onChange={(e) => searchfunction(e.target.value)}
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            className={classes.input}
                            placeholder="Search by"
                            inputProps={{ "aria-label": "search google maps" }}
                        />
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton
                            color="primary"
                            className={classes.iconButton}
                            aria-label="directions"
                        >
                            <Search />
                        </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
            </Box> */}
            <Grid
                container
                direction="row"
                padding="15px"
                justifyContent="flex-end"
                alignItems="flex-end"
            >
                <Grid item xs={3}
                >
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Sr.No</StyledTableCell>
                            <StyledTableCell>First Name</StyledTableCell>
                            <StyledTableCell align="right">Last Name</StyledTableCell>
                            <StyledTableCell align="right">Mobile Number</StyledTableCell>
                            <StyledTableCell align="right">Email ID</StyledTableCell>
                            <StyledTableCell align="right">Type of bussiness</StyledTableCell>
                            <StyledTableCell align="right">Bussiness Name</StyledTableCell>
                            <StyledTableCell align="right">Pincode</StyledTableCell>
                            <StyledTableCell align="right">District</StyledTableCell>
                            <StyledTableCell align="right">State</StyledTableCell>
                            <StyledTableCell align="right">Country</StyledTableCell>
                            <StyledTableCell align="right">Pan No</StyledTableCell>
                            <StyledTableCell align="right">Aadhar</StyledTableCell>
                            <StyledTableCell align="right">GstIn</StyledTableCell>
                            <StyledTableCell align="right">Shop Act No</StyledTableCell>
                            <StyledTableCell align="right">Location</StyledTableCell>
                            <StyledTableCell align="right">Pan Image</StyledTableCell>
                            <StyledTableCell align="right">Adhar Image</StyledTableCell>
                            <StyledTableCell align="right">Gstin Image</StyledTableCell>
                            <StyledTableCell align="right">Shop Act No Image</StyledTableCell>
                            <StyledTableCell align="right">Logitude</StyledTableCell>
                            <StyledTableCell align="right">Latitude</StyledTableCell>
                            <StyledTableCell align="right">Photograph</StyledTableCell>
                            <StyledTableCell align="right">Approval Flag</StyledTableCell>

                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {search(rows)
                            .slice(
                                // page * rowsPerPage,
                                // page * rowsPerPage + rowsPerPage,
                                console.log(rows)
                            )
                            .map((row, index) => (

                                // {rows.map((row,index) => (
                                <StyledTableRow key={row.id}>

                                    <StyledTableCell align="right">{index + 1}</StyledTableCell>
                                    <StyledTableCell align="right">{row.firstName}</StyledTableCell>
                                    <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                                    <StyledTableCell align="right">{row.mobileNumber}</StyledTableCell>
                                    <StyledTableCell align="right">{row.emailId}</StyledTableCell>
                                    <StyledTableCell align="right">{row.typeOfBussiness}</StyledTableCell>
                                    <StyledTableCell align="right">{row.bussinessName}</StyledTableCell>
                                    <StyledTableCell align="right">{row.pincode}</StyledTableCell>
                                    <StyledTableCell align="right">{row.district}</StyledTableCell>
                                    <StyledTableCell align="right">{row.state}</StyledTableCell>
                                    <StyledTableCell align="right">{row.country}</StyledTableCell>
                                    <StyledTableCell align="right">{row.panNo}</StyledTableCell>
                                    <StyledTableCell align="right">{row.aadhar}</StyledTableCell>
                                    <StyledTableCell align="right">{row.gstIN}</StyledTableCell>
                                    <StyledTableCell align="center">{row.shopActNo}</StyledTableCell>
                                    <StyledTableCell align="right">{row.location}</StyledTableCell>
                                    <StyledTableCell align="right">{row.panImage}</StyledTableCell>
                                    <StyledTableCell align="right">{row.aadharImage}</StyledTableCell>
                                    <StyledTableCell align="right">{row.gstInImage}</StyledTableCell>
                                    <StyledTableCell align="right">{row.shopActNoImage}</StyledTableCell>
                                    <StyledTableCell align="right">{row.logitude}</StyledTableCell>
                                    <StyledTableCell align="right">{row.latitude}</StyledTableCell>
                                    <StyledTableCell align="right">{row.photograph}</StyledTableCell>
                                    <StyledTableCell align="right">{row.rejectReason}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button>Add</Button>
                                    </StyledTableCell>

                                </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
export default Buyer;