import * as types from './../constants/ActionTypes';
const defaultState = '';

const search = (state = defaultState, action) => {
	switch(action.type){
		case types.CHANGE_SEARCH:
			state = false;
			return action.search;
		default:
			return state;
	}
}

export default search;