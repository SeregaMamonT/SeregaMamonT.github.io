function reducer(state = {}, action) {
    switch (action.type) {
        case 'DIGIT':
            return {
                ...state,
                display: display(state.display, action)
            };
        default:
            return state;
    }
}


function display(state = '', action) {
    switch (action.type) {
        case 'DIGIT':
            return state + action.value;
        default:
            return state;
    }
}

export default reducer