import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BarChart from './BarChart';
import RadarChart from './RadarChart';
import DataTable from './DataTable';
import ProgressBar from './ProgressBar';
import MapChart from './MapChart';
import DataCard from '../Generic/DataCard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import GetAppIcon from '@material-ui/icons/GetApp';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },

    container: {
        paddingTop: theme.spacing(16),
        paddingBottom: theme.spacing(4),
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    containerShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 400,
      marginBottom: '20px'
    },
    icon: {
      fontSize: 35,
    }

}));

function Body(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={clsx(classes.container, props.open && classes.containerShift)}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={3} lg={3}>
                <Paper>
                  <DataCard
                    icon={<PeopleAltIcon className={classes.icon}/>}
                    number="52k"
                    title="Registered Users"
                  />
                </Paper>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                <Paper>
                  <DataCard
                    icon={<AttachMoneyIcon className={classes.icon}/>}
                    number="233k"
                    title="Total Revenue"
                  />
                </Paper>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                <Paper>
                  <DataCard
                    icon={<GetAppIcon className={classes.icon}/>}
                    number="333k"
                    title="Unique Downloads"
                  />
                </Paper>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                <Paper>
                  <DataCard
                    icon={<ThumbUpAltIcon className={classes.icon}/>}
                    number="23k"
                    title="Positive Reviews"
                  />
                </Paper>
                </Grid>

                <Grid item xs={12} md={9} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <MapChart/>
                </Paper>
                </Grid>

                <Grid item xs={12} md={3} lg={3}>
                <Paper>
                  <ProgressBar />
                </Paper>
                </Grid>

                <Grid item xs={12} md={7} lg={7}>
                <Paper className={fixedHeightPaper}>
                  <BarChart/>
                </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={5} lg={5}>
                <Paper className={fixedHeightPaper}>
                  <RadarChart/>
                </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <DataTable/>
                </Paper>
                </Grid>
            </Grid>
            <Box pt={4}>
                
            </Box>
            </Container>
        </div>


    )
}

export default Body;