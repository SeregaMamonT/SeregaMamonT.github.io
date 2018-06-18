import React from 'react';

import Button from './Button';

class Keyboard extends React.Component {

	createButton(buttonModel) {
        const { store } = this.context;
        let actionHandler = buttonModel.action ? () => store.dispatch(buttonModel.action) : undefined;
		return <Button text={buttonModel.text} action={actionHandler}/>
	}


	render() {
		return (
			<table>
				<tbody>
					{
						Keyboard.BUTTON_LAYOUT.map((buttonRow, index) => (
							<tr key={index}>
								{ buttonRow.map((buttonModel, index) => <td key={index}>{this.createButton(buttonModel)}</td>) }
							</tr>
						))
					}
				</tbody>
			</table>
		);
	}
}

Keyboard.contextTypes = {
	store: React.PropTypes.object
};


Keyboard.BTN_MODEL_ZERO = 		{ text: '0', action: { type: 'DIGIT', value: 0 } };
Keyboard.BTN_MODEL_ONE = 		{ text: '1', action: { type: 'DIGIT', value: 1 } };
Keyboard.BTN_MODEL_TWO = 		{ text: '2', action: { type: 'DIGIT', value: 2 } };
Keyboard.BTN_MODEL_THREE = 		{ text: '3', action: { type: 'DIGIT', value: 3 } };
Keyboard.BTN_MODEL_FOUR =	 	{ text: '4', action: { type: 'DIGIT', value: 4 } };
Keyboard.BTN_MODEL_FIVE = 		{ text: '5', action: { type: 'DIGIT', value: 5 } };
Keyboard.BTN_MODEL_SIX = 		{ text: '6', action: { type: 'DIGIT', value: 6 } };
Keyboard.BTN_MODEL_SEVEN = 		{ text: '7', action: { type: 'DIGIT', value: 7 } };
Keyboard.BTN_MODEL_EIGHT = 		{ text: '8', action: { type: 'DIGIT', value: 8 } };
Keyboard.BTN_MODEL_NINE = 		{ text: '9', action: { type: 'DIGIT', value: 9 } };
Keyboard.BTN_MODEL_DECIMAL = 	{ text: ',', action: { type: 'DECIMAL' } };
Keyboard.BTN_MODEL_SUM = 		{ text: '+', action: { type: 'OPERATION', value: '+' } };
Keyboard.BTN_MODEL_SUB = 		{ text: '-', action: { type: 'OPERATION', value: '-' } };
Keyboard.BTN_MODEL_DIV = 		{ text: '/', action: { type: 'OPERATION', value: '/' } };
Keyboard.BTN_MODEL_MULT = 		{ text: '*', action: { type: 'OPERATION', value: '*' } };
Keyboard.BTN_MODEL_RESULT = 	{ text: '=', action: { type: 'OPERATION', value: '=' } };

Keyboard.BTN_MODEL_NONE = 		{ text: '' };

Keyboard.BUTTON_LAYOUT = [
		[ Keyboard.BTN_MODEL_ONE, Keyboard.BTN_MODEL_TWO, Keyboard.BTN_MODEL_THREE, Keyboard.BTN_MODEL_SUM ],
		[ Keyboard.BTN_MODEL_FOUR, Keyboard.BTN_MODEL_FIVE, Keyboard.BTN_MODEL_SIX, Keyboard.BTN_MODEL_SUB  ],
		[ Keyboard.BTN_MODEL_SEVEN,	Keyboard.BTN_MODEL_EIGHT, Keyboard.BTN_MODEL_NINE, Keyboard.BTN_MODEL_MULT  ],
		[ Keyboard.BTN_MODEL_DECIMAL, Keyboard.BTN_MODEL_ZERO,	Keyboard.BTN_MODEL_RESULT, Keyboard.BTN_MODEL_DIV  ]
	];

export default Keyboard;