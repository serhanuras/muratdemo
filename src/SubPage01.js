import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import store from './store';

function SubPage01() {

  function showMessage(strMessage) {
    store.dispatch({ type: 'SHOW_MESSAGE', payload: strMessage });
  }  

  function removeMessage(strMessage) {
    store.dispatch({ type: 'REMOVE_MESSAGE', payload: {} });
  } 

  return (

    <div style={{fontSize:'20px', paddingTop:'30px'}}>
        <br/>
        Burasi alt sayfa alt sayfadan anasayfadaki snack bari cagiriyoruz.
        <br/><br/>
      <Button variant="contained" color="primary" onClick={()=>showMessage('Data kaydedilmistir...')}>
        Ana Sayfa Snack Bar'i Cagir
      </Button>

      <Button variant="contained" color="secondary" onClick={()=>removeMessage()}>
        Snack Bar'i kaldir....
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => ({
   
  });

export default connect(mapStateToProps)(SubPage01);
