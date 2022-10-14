import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Paper, Grid, Button, Typography, InputBase, Divider, IconButton } from '@mui/material';
// import "../../BodyComponent.css"
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
        backgroundColor: ' #587308',
        // backgroundColor: theme.palette.common.black,
        color: theme.palette.common.black,
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

const OpenTransication = () => {
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
            .get("http://localhost:5050/api/ptb")
            .then((response) => {
                setIsLoaded(true);
                setRows(response.data);
            })
            .catch((error) => {
                setIsLoaded(true);
                console.log(error);
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
                            <StyledTableCell>Payment Id</StyledTableCell>
                            <StyledTableCell align="center">Buyer Id</StyledTableCell>
                            <StyledTableCell align="center">Paymen Date</StyledTableCell>
                            <StyledTableCell align="center">Payment Mode</StyledTableCell>
                            <StyledTableCell align="center">Purchase Order Id</StyledTableCell>
                            <StyledTableCell align="center">Total Amount</StyledTableCell>
                            <StyledTableCell align="center">Payment status</StyledTableCell>

                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {rows.map((row, index) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                                <StyledTableCell align="center">{row.paymentId}</StyledTableCell>
                                <StyledTableCell align="center">{row.buyerId}</StyledTableCell>
                                <StyledTableCell align="center">{row.paymentDate}</StyledTableCell>
                                <StyledTableCell align="center">{row.paymentMode}</StyledTableCell>
                                <StyledTableCell align="center">{row.purchaseOrderId}</StyledTableCell>
                                <StyledTableCell align="center">{row.totalAmount}</StyledTableCell>
                                <StyledTableCell align="center">{row.paymentstatus}</StyledTableCell>
                                <StyledTableCell align="center">
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
export default OpenTransication;





