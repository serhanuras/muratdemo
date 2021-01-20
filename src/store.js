import { createStore, combineReducers  } from 'redux';


const initialSnackBarState = {
    message:'',
    displaySnackBar: false,
}

const snackBarReducer = (state = initialSnackBarState, action) => {
    if (action.type === 'SHOW_MESSAGE') {
        return {
            ...state, message: action.payload, displaySnackBar: true
        };
    }
    else if (action.type === 'REMOVE_MESSAGE') {
        return {
            ...state, message: '',  displaySnackBar: false
        };
    }

    return state;
};

let reducers = {
    snackBar: snackBarReducer,
};

// eslint-disable-next-line no-underscore-dangle
const store = createStore(
    combineReducers(reducers)
);
// export const store = createStore(reducer, loadState());

store.subscribe(() => {
    
});

export default store;
