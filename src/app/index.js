import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

function reducer(state = '', action) {
	switch (action.type) {
		case 'DIGIT':
			return state + action.value;
		default:
		 return state;
	}
}

const store = createStore(reducer);

function render() {
	ReactDOM.render(
		<Provider store={store}>
			<App/>
		</Provider>,
		document.getElementById('app'));
}

store.subscribe(render);

render();