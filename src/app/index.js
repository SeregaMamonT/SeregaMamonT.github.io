import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';

function reducer(state = 0, action) {
	switch (action.type) {
		case 'DIGIT':
			return action.value;
		default:
		 return state;
	}
}

const store = createStore(reducer);

function render() {
	ReactDOM.render(<App store={store}/>, document.getElementById('app'));
}

store.subscribe(render);

render();