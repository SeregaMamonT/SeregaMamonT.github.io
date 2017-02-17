import React from 'react';

class Display extends React.Component {
	render() {
		return (
			<div>
				<input type="text" value={this.props.value} readOnly />
			</div>
		);
	}
}

export default Display;