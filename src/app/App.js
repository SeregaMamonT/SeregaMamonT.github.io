import React from 'react';

import Display from './Display';
import Keyboard from './Keyboard';

class App extends React.Component {
	getChildContext() {
		return {
			store: this.props.store
		};
	}


	render() {
		return (
			<div>
				<Display value={this.props.store.getState()} />
				<Keyboard />
			</div>
		);
	}
}

App.childContextTypes = {
	store: React.PropTypes.object
};

export default App;