
import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Paper, Grid, Button, Typography, InputBase, Divider, IconButton } from '@mui/material';
import "./../BodyComponent.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { makeStyles } from "@material-ui/styles";
import { Search } from '@mui/icons-material';
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
        backgroundColor: '#30694',
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

const TradeManagement = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [rows, setRows] = React.useState([]);

    const getData = () => {
        axios
            .get("http://localhost:5555/api//trades")
            .then((response) => {
                setIsLoaded(true);
                setRows(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    React.useEffect(() => {
        getData()
    }, []);
    
    const classes = useStyles();
    return (
        <>
            <Paper style={{ marginTop: '20px', height: '230px', margin: '30px' }}>
                <Box style={{ padding: '25px' }}>
                    <Typography style={{ fontWeight: 'bold' }}>
                        Search by :
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item md={2}>
                            <Typography>
                                From Date
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography>
                                To Date
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography>
                                Commodity Type
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography>
                                Trade Request Status
                            </Typography>
                        </Grid>
                    </Grid>


                    <Grid container spacing={2} >
                        <Grid item md={2}>
                            <TextField
                                type='date'
                                size='small'
                                placeholder='From Date'

                            />
                        </Grid>
                        <Grid item md={2}>
                            <TextField
                                size='small'
                                placeholder='To Date'

                                type='date'
                            />
                        </Grid>

                        <Grid item md={4}>
                            <TextField
                                size='small'
                                placeholder='Please Select'
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid item md={4}>
                            <TextField
                                size='small'
                                placeholder='Please Select'
                                type="text"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Button type="submit" variant="contained" color="error" className='clear'>
                    Clear
                </Button>
                <Button type="button" variant="contained" color="primary" className="search">
                    Search
                </Button>
            </Paper>

            <Paper style={{ marginTop: '20px', height: 'auto', padding: '25px', margin: '30px' }}>
                <Box style={{ padding: '15px' }}>
                    <Grid container spacing={2}>
                        <Grid item md={8}>
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                    // onChange={(e) => searchfunction(e.target.value)}
                                    className={classes.input}
                                    placeholder="Search"
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

                        <Grid item md={4}>
                            <Typography style={{ float: 'right' }}>
                                Total Records (0)
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>


                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                                <StyledTableCell>Sr.No</StyledTableCell>
                                <StyledTableCell align="right">Commodity</StyledTableCell>
                                <StyledTableCell align="right">Title</StyledTableCell>
                                <StyledTableCell align="right">Qty</StyledTableCell>
                                <StyledTableCell align="right">Created By</StyledTableCell>
                                <StyledTableCell align="right">Created Date</StyledTableCell>
                                <StyledTableCell align="right">Expected</StyledTableCell>
                                <StyledTableCell align="right">Closure Date</StyledTableCell>
                                <StyledTableCell align="right">Status</StyledTableCell>
                                <StyledTableCell align="right">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row,index) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">

                                    </StyledTableCell>
                                    <StyledTableCell align="right">{index + 1}</StyledTableCell>
                                    <StyledTableCell align="right">{row.commodity}</StyledTableCell>
                                    <StyledTableCell align="right">{row.title}</StyledTableCell>
                                    <StyledTableCell align="right">{row.qty}</StyledTableCell>
                                    <StyledTableCell align="right">{row.createdBy}</StyledTableCell>
                                    <StyledTableCell align="right">{row.createdDate}</StyledTableCell>
                                    <StyledTableCell align="right">{row.expected}</StyledTableCell>
                                    <StyledTableCell align="right">{row.closureDate}</StyledTableCell>
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
export default TradeManagement;