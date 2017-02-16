import React from 'react';

import Score from './Score';
import Keyboard from './Keyboard';

class App extends React.Component {
	render() {
		return (
			<div>
				<Score />
				<Keyboard />
			</div>
		);
	}
}

export default App;