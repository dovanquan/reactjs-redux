import { createStore } from 'redux';
import appReducers from './reducers/index';
import { actCloseForm, actOpenForm, actToggleForm, actSort } from './actions/index';



const store = createStore(appReducers);
console.log("Init:", store.getState());


//CLOSE_FORM
store.dispatch(actCloseForm());
console.log('CLOSE_FORM', store.getState());

//OPEN_FORM
store.dispatch(actOpenForm());
console.log('OPEN_FORM', store.getState());

//TOGGLE_FORM
store.dispatch(actToggleForm());
console.log('TOGGLE_FORM', store.getState());

//SORT_ITEM
store.dispatch(actSort('level','asc'));
console.log('SORT_ITEM', store.getState());

export default store;