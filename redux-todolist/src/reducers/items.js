let defaultState = [
	{id: 'A1', name: 'Coding', level: 1},
	{id: 'A2', name: 'Football', level: 0},
	{id: 'A3', name: 'PHP', level: 2},
	{id: 'A4', name: 'WEB', level: 1},
];

let tasks    = JSON.parse(localStorage.getItem('task'));
defaultState = (tasks !== null && tasks.length > 0) ? tasks : defaultState;

const items = (state = defaultState, action) => {
	switch(action.type){
		case 'test':
			return state;
		default:
			return state;
	}
	return state;
}

export default items;