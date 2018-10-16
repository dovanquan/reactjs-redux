import { combineReducers } from 'redux'
import isShowForm from './isShowForm';
import sort from './sort';
import items from './items';

// const defaultState = {
// 	items       : [],
// 	isShowForm  : true,
// 	strSearch   : '',
// 	orderBy     : 'name',
// 	orderDir    : 'asc',
// 	itemSelected: null
// }

const appReducers = combineReducers({
	isShowForm,
	sort,
	items
});

export default appReducers;