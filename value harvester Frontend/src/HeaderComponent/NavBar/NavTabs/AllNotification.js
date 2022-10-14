import { Box, Grid, Paper } from "@mui/material";
import "./../../Header.css"


const AllNotification = () => {
    return (
        <>
            <Paper style={{ marginTop: '20px', height: '230px', margin: '30px' }}>
                <Grid container>
                    <Grid md={3}>
                        <Box className="notificationTitle" >
                            Entity
                        </Box>
                    </Grid>
                    <Grid md={3}>
                        <Box  className="notificationTitle">
                            Subject
                        </Box>
                    </Grid>
                    <Grid md={3}>
                        <Box  className="notificationTitle">
                            Description
                        </Box>
                    </Grid>
                    <Grid md={3}>
                        <Box  className="notificationTitle">
                            Date
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}
export default AllNotification;
