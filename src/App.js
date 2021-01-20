import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import SubPage01 from './SubPage01';
import store from './store';

function Alert(props) {
  return <MuiAlert elevation={7} variant="filled" {...props} />;
}

function App(props) {

  const handleClose = () => {
    store.dispatch({ type: 'REMOVE_MESSAGE', payload: {} });
  };

  return (
    <div className="App">
      <header className="App-header">
        Hello World....

        <SubPage01/>
        <Snackbar open={props.snackBar.displaySnackBar} autoHideDuration={10000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        {props.snackBar.message}
        </Alert>
      </Snackbar>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {

  return ({
    snackBar: state.snackBar,
  })
} ;

export default connect(mapStateToProps)(App);
