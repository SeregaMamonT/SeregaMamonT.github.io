import React from 'react';

class Button extends React.Component {

	render() {
		return (
			<button style={{ width: '40px', height: '25px' }}
					onClick={ this.props.action }>
				{this.props.text}
			</button>
		);
	}
}

export default Button;