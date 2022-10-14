
import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { TextField, Paper, Grid, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import "./../BodyComponent.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import axios from 'axios';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#30694b',
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

const ItemPriceList = () => {

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [rows, setRows] = React.useState([]);

    const [isDelete, setIsDelete] = React.useState(false);
    const [deleteInfo, setDeleteInfo] = React.useState();
    
   

    React.useEffect(() => {
        getData()
    }, []);
    
    const getData = () => {
        axios
            .get("http://localhost:5555/api/items",)
            .then((response) => {
                setIsLoaded(true);
                setRows(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
   
    return (
        <>
            <Paper style={{ marginTop: '20px', height: 'auto', margin: '30px', backgroundColor: '#e4e4e4', border: 'transparent' }}>
                <Box style={{ padding: '25px', border:'none'}}>

                    <Grid container spacing={2}>

                        <Grid item md={12}>
                            <Typography style={{fontWeight:'bold'}}>
                                Item Price Lists
                            </Typography>
                        </Grid>

                        <Grid item md={12}>
                            <Link to="./itemPriceAdd" style={{ textDecoration: 'unset' }}>
                                <Button style={{ justifyContent: 'center', display: 'flex', float: 'left', backgroundColor:'#5a5a5a', color:'#fff' }}>
                                    <AddIcon />  Add
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            <Paper style={{ marginTop: '20px', height: 'auto', padding: '25px', margin: '30px' }}>
                <Box style={{ padding:'15px'}}>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Typography style={{ float: 'right' }}>
                                Total Records ()
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell align="right">Picture</StyledTableCell>
                                <StyledTableCell align="right">Item Name</StyledTableCell>
                                <StyledTableCell align="right">Title</StyledTableCell>
                                <StyledTableCell align="right">Min.Price</StyledTableCell>
                                <StyledTableCell align="right">Max.Price</StyledTableCell>
                                <StyledTableCell align="right">Nodal Price</StyledTableCell>
                                <StyledTableCell align="right">Buyer Min. QTY</StyledTableCell>
                                <StyledTableCell align="right">Create Date</StyledTableCell>
                                <StyledTableCell align="right">Status</StyledTableCell>
                                <StyledTableCell align="right">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { rows
                            .map((row,index) => (
                                <StyledTableRow key={row}>
                                    <StyledTableCell component="th" scope="row">
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{index + 1}</StyledTableCell>
                                    <StyledTableCell align="right">{row.picture}</StyledTableCell>
                                    <StyledTableCell align="right">{row.itemName}</StyledTableCell>
                                    <StyledTableCell align="right">{row.title}</StyledTableCell>
                                    <StyledTableCell align="right">{row.minPrice}</StyledTableCell>
                                    <StyledTableCell align="right">{row.maxPrice}</StyledTableCell>
                                    <StyledTableCell align="right">{row.nodalPrice}</StyledTableCell>
                                    <StyledTableCell align="right">{row.buyerMinQty}</StyledTableCell>
                                    <StyledTableCell align="right">{row.createDate}</StyledTableCell>
                                    <StyledTableCell align="right">{row.status}</StyledTableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Paper>
        </>
    )
}
export default ItemPriceList;