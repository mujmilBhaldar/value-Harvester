
import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { TextField, Paper, Grid, Button, Typography, InputBase, Divider, IconButton } from '@mui/material';
import "../../BodyComponent.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Search } from '@mui/icons-material';

import { makeStyles } from "@material-ui/styles";
import axios from 'axios';
import { height } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
};

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
        backgroundColor:"#00e676" ,
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
    //     const [open, setOpen] = React.useState(false);
    //   const handleOpen = () => setOpen(true);

    // const [open, setOpen] = React.useState(false);

    // const handleOpen = () => setOpen(true);
    const [isMessage, setIsMessage] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (id) => {
        setOpen(id);
    };



    const handleCloseModal = () => {
        setOpen(false);
    };


    const [isLoaded, setIsLoaded] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    const [isDelete, setIsDelete] = React.useState(false);
    const [deleteInfo, setDeleteInfo] = React.useState();

    const handleClose = () => {
        setOpen(null);
        // setIsDelete(false)
        // setDeleteInfo(null);
        // setIsMessage(null)
    }


    const [data, setData] = React.useState({
        rejectChangeID: '',
        rejectReason: '',
    })

    const handleChange = (event) => {
        event.persist()
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
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
            // .get("http://localhost:5050/api/buyerNewRequest")
            .get("http://localhost:5050/api/buyer")

            .then((response) => {
                setIsLoaded(true);
                setRows(response.data);
            })
            .catch((error) => {
                setIsLoaded(true);
                console.log(error);
            });
    }

    React.useEffect(() => {
        getData()
    }, []);

    const handleSubmit = (rejectChangeID) => {
        const sendingData = {
            rejectChangeID: rejectChangeID,
            rejectReason: data.rejectReason,
        }
        // console.log(data)
        axios
            .put("http://localhost:5050/api/buyerUpdateRejectFlag", sendingData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                // setIsLoaded(true);
                console.log(error);
            });
    }

    const handleClick = (id) => {
        axios
            .put("http://localhost:5050/api/buyerUpdateApprovalFlag", { _id: id })

            .then((response) => {
                setIsLoaded(true);
                getData()
            })
            .catch((error) => {
                setIsLoaded(true);
                console.log(error);
            });
    }




    const handleClick2 = (id, rejReason) => {
        axios
            .put("http://localhost:5050/api/buyerUpdateRejectFlag", { _id: id, rejectReason: rejReason })

            .then((response) => {
                setIsLoaded(true);
                getData()
            })
            .catch((error) => {
                setIsLoaded(true);
                console.log(error);
            });
    }    
    
    const [q, setQ] = React.useState("");
    const [searchParam] = React.useState(["firstName", "lastName", "mobileNumber", "emailId", "typeOfBussiness", "bussinessName", "pincode", "district", "state", "country", "panNo", "aadhar", "gstIN", "shopActNo", "location", "panImage", "aadharImage", "gstInImage", "shopActNoImage", "logitude", "latitude", "photograph", "rejectReason"]);


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
            <Box style={{ float: 'right', padding: '15px' }}>
                <Grid container spacing={0} sx={{ mt: 2 }} >
                    <Grid item md={12}>
                        <Paper component="form" className={classes.root}>
                            <InputBase
                                // onChange={(e) => searchfunction(e.target.value)}
                                className={classes.input}
                                placeholder="Search by"
                                inputProps={{ "aria-label": "search google maps" }}
                                onChange={(e) => setQ(e.target.value)}
                                value={q}
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
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Sr.No</StyledTableCell>
                            <StyledTableCell>First Name</StyledTableCell>
                            <StyledTableCell align="center" >Last Name</StyledTableCell>
                            <StyledTableCell align="center">Mobile Number</StyledTableCell>
                            <StyledTableCell align="center">Email ID</StyledTableCell>
                            <StyledTableCell align="center">Type of bussiness</StyledTableCell>
                            <StyledTableCell align="center">Bussiness Name</StyledTableCell>
                            <StyledTableCell align="center">Pincode</StyledTableCell>
                            <StyledTableCell align="center">District</StyledTableCell>
                            <StyledTableCell align="center">State</StyledTableCell>
                            <StyledTableCell align="center">Country</StyledTableCell>
                            <StyledTableCell align="center">Pan No</StyledTableCell>
                            <StyledTableCell align="center">Aadhar</StyledTableCell>
                            <StyledTableCell align="center">GstIn</StyledTableCell>
                            <StyledTableCell align="center">Shop Act NO</StyledTableCell>
                            <StyledTableCell align="center">Location</StyledTableCell>
                            <StyledTableCell align="center">Pan Image</StyledTableCell>
                            <StyledTableCell align="center">Adhar Image</StyledTableCell>
                            <StyledTableCell align="center">Gstin Image</StyledTableCell>
                            <StyledTableCell align="center">Shop Act NO</StyledTableCell>
                            <StyledTableCell align="center">Logitude</StyledTableCell>
                            <StyledTableCell align="center">Latitude</StyledTableCell>
                            <StyledTableCell align="center">Photograph</StyledTableCell>
                            <StyledTableCell align="center">Reject Reason</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map((row, index) => ( */}
                        {search(rows)
                                        .slice(
                                         
                                            console.log(rows)
                                        )
                                        .map((row, index) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                                <StyledTableCell align="center">{row.firstName}</StyledTableCell>
                                <StyledTableCell align="center">{row.lastName}</StyledTableCell>
                                <StyledTableCell align="center">{row.mobileNumber}</StyledTableCell>
                                <StyledTableCell align="center">{row.emailId}</StyledTableCell>
                                <StyledTableCell align="center">{row.typeOfBussiness}</StyledTableCell>
                                <StyledTableCell align="center">{row.bussinessName}</StyledTableCell>
                                <StyledTableCell align="center">{row.pincode}</StyledTableCell>
                                <StyledTableCell align="center">{row.district}</StyledTableCell>
                                <StyledTableCell align="center">{row.state}</StyledTableCell>
                                <StyledTableCell align="center">{row.country}</StyledTableCell>
                                <StyledTableCell align="center">{row.panNo}</StyledTableCell>
                                <StyledTableCell align="center">{row.aadhar}</StyledTableCell>
                                <StyledTableCell align="center">{row.gstIN}</StyledTableCell>
                                <StyledTableCell align="center">{row.shopActNo}</StyledTableCell>
                                <StyledTableCell align="center">{row.location}</StyledTableCell>
                                <StyledTableCell align="center">{row.panImage}</StyledTableCell>
                                <StyledTableCell align="center">{row.aadharImage}</StyledTableCell>
                                <StyledTableCell align="center">{row.gstInImage}</StyledTableCell>
                                <StyledTableCell align="center">{row.shopActNoImage}</StyledTableCell>
                                <StyledTableCell align="center">{row.logitude}</StyledTableCell>
                                <StyledTableCell align="center">{row.latitude}</StyledTableCell>
                                <StyledTableCell align="center">{row.photograph}</StyledTableCell>            
                                <StyledTableCell align="center">{row.rejectReason}</StyledTableCell>
                                <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                    <Button style={{ margin: "10px" }} variant="contained" color="success" onClick={(e) => handleClick(row._id)}>Accept</Button>
                                    <Button style={{ margin: "10px" }} variant="contained" color="error" onClick={(e) => handleOpen(row._id)}>Reject</Button>
                                    {/* {row.rejectFlag == 1 ?
                                        <Typography style={{ color: 'red' }}>Rejected</Typography>
                                                :
                                        < Button style={{ margin: "10px" }} variant="contained" color="error" onClick={(e) => handleOpen(row._id)}>Reject</Button>
                                    } */}
                                    <StyledTableCell align="center" >
                                        <Modal
                                            hideBackdrop
                                            open={open}
                                            onClose={handleCloseModal}
                                            aria-labelledby="child-modal-title"
                                            aria-describedby="child-modal-description">
                                            <form onSubmit={handleSubmit(open)}>
                                                <Box sx={{ ...style, justifyContent: 'center' }}>
                                                    <Grid item md={4} >
                                                        <Button style={{ color: 'red', padding: '1px 1px', float: "right" }}>
                                                            <CloseIcon onClick={handleClose} />
                                                        </Button>
                                                    </Grid>
                                                    <Grid container spacing={0} sx={{ mt: 1 }} >
                                                        <Grid item md={12} >
                                                            <Typography style={{ textAlign: "center", fontWeight: "bold" }}>Why are you rejected ?</Typography>
                                                        </Grid>
                                                        <Grid item md={12}>
                                                            <TextField
                                                                onChange={handleChange}
                                                                type='text'
                                                                size='small'
                                                                label='Reason'
                                                                fullwidth
                                                                name="rejectReason"
                                                                value={data.rejectReason}
                                                                fullWidth
                                                            />
                                                        </Grid>
                                                        <Grid item md={12}>
                                                            <Button sx={{ mt: 3, marginLeft: "130px" }}
                                                                variant="contained" color="primary" type="submit">Submit</Button>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </form>
                                        </Modal>
                                    </StyledTableCell>
                               </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
      </Paper >
    )
}
export default Buyer;


