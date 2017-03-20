import React from 'react';

import Display from './Display';
import Keyboard from './Keyboard';

class App extends React.Component {

	render() {
		return (
			<div>
				<Display />
				<Keyboard />
			</div>
		);
	}
}

export default App;