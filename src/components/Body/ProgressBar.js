import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import "react-circular-progressbar/dist/styles.css";

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: teal[500],
        color: theme.palette.primary.contrastText
    },
    content: {
        color: theme.palette.primary.contrastText
    },
    largeText: {
        fontSize: '32px',
    },
    right: {
        textAlign: 'right',
    },
    center: {
        textAlign: 'center',
    },
    bottomText: {
        marginTop: '30px',
        paddingBottom: '23px',
    },
    flat: {
        display:'flex',
        justifyContent: 'space-between'
    }
}));

export default function Title() {
  const classes = useStyles();
  const bottomText = clsx(classes.bottomText, classes.center);
  const theme = useTheme();
  return (
    <div>
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Typography component="h2">
                        Annual Revenue Goal
                    </Typography>
                }
                className={classes.content}
            />
            <CardContent >
            <svg width="230" height="230" viewBox="0 0 100 100">
            <circle  cx="50" cy="50" r="45" fill={teal[500]}/>
            <path fill="none" strokeLinecap="round" strokeWidth="5" stroke={theme.palette.primary.contrastText}
                    strokeDasharray="125.6,125.6"
                    d="M50 10
                    a 40 40 0 0 1 0 80
                    a 40 40 0 0 1 0 -80"/>
            <text x="50" y="50" textAnchor="middle" dy="7" className={classes.content} fill={theme.palette.primary.contrastText} fontSize="20">50%</text>
            </svg>
                

            </CardContent>

            <Typography className={bottomText} component="h2">
                120k remaining
            </Typography>
            
        </Card>

      
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};