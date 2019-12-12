import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import BarChartIcon from '@material-ui/icons/BarChart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        marginBottom: '20px',
    },
    content: {
        color: theme.palette.primary.contrastText
    },
    avatar: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        width: 60,
        height: 60,
    },
    largeText: {
        fontSize: 32
    },
    right: {
        textAlign: 'right',
    },
    flat: {
        display:'flex',
        justifyContent: 'space-between'
    }
}));

export default function DataCard(props) {
  const classes = useStyles();
  const typography = clsx(classes.largeText, classes.right);

  return (
    <div>
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Typography component="h2">
                        {props.title}
                    </Typography>
                }
                
                className={classes.content}
            />
            <CardContent className={classes.flat}>
                <Avatar className={classes.avatar}>
                    
                    {props.icon}
                </Avatar>

                <Typography className={typography}>
                    {props.number}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="info">
                    <ZoomInIcon className={classes.content} />
                </IconButton>
                <IconButton aria-label="graph">
                    <BarChartIcon className={classes.content} />
                </IconButton>
            </CardActions>
        </Card>
      
    </div>
  );
}

DataCard.propTypes = {
  children: PropTypes.node,
};