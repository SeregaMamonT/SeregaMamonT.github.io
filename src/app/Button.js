import React from 'react';

const buttonStyle = {
	width: '40px',
	height: '25px'
};

class Button extends React.Component {

	render() {
		const { action, text } = this.props;
		return (
			<button style={buttonStyle}	onClick={action}>
				{text}
			</button>
		);
	}
}

export default Button;