import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
      padding: '10px 10px 10px 10px',
    },
}));

export default function Title(props) {
  const classes = useStyles();
  return (
    <div>
        <Typography className={classes.title} component="h2" variant="h6" color="primary" gutterBottom>
        {props.children}
        </Typography>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};