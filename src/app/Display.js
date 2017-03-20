import React from 'react';

class Display extends React.Component {

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => { this.forceUpdate() });
    }


    componentWillUnmount() {
        this.unsubscribe();
    }

	render() {
        const { store } = this.context;
		return (
            <input type="text" value={store.getState()} readOnly />
		);
	}
}

Display.contextTypes = {
    store: React.PropTypes.object
};

export default Display;