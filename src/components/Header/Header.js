import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import CssBaseline from '@material-ui/core/CssBaseline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    toolbar: {
      paddingRight: 24,
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'fixed',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      height: '100vh',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    }

}));
function Header(props) {
    const classes = useStyles();
    
    const handleDrawerOpen = () => {
      props.setOpen(true);
    };
    const handleDrawerClose = () => {
      props.setOpen(false);
    };
    const theme = useTheme();

    return (
        <div>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, props.open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    Dashboard
                    </Typography>
                    
                    <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                    </IconButton>
                    
                    <IconButton color="inherit">
                    <ExitToAppIcon />
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={props.open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                </div>
                <Divider />
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Customers" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <LayersIcon />
                    </ListItemIcon>
                    <ListItemText primary="Integrations" />
                  </ListItem>
                </List>
                <List>
                  <Divider />
                  <ListSubheader inset>Saved reports</ListSubheader>
                  <ListItem button>
                    <ListItemIcon>
                      <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Current month" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Last quarter" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Year-end sale" />
                  </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default Header;