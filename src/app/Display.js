import React from 'react';

class Display extends React.Component {
	render() {
		return (
            <input type="text" value={this.props.value} readOnly />
		);
	}
}

export default Display;