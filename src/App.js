import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  }
}));


function App() {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header open={open} setOpen={setOpen} />
      <Body open={open} setOpen={setOpen} />
      <Footer />
    </div>
  );
}

export default App;
