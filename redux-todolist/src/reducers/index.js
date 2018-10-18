import { combineReducers } from 'redux'
import isShowForm from './isShowForm';
import sort from './sort';
import items from './items';
import search from './search';

// const defaultState = {
// 	orderBy     : 'name',
// 	orderDir    : 'asc',
// 	itemSelected: null
// }

const appReducers = combineReducers({
	isShowForm,
	sort,
	items,
	search
});

export default appReducers;