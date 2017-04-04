function reducer(state = '', action) {
    switch (action.type) {
        case 'DIGIT':
            return state + action.value;
        default:
            return state;
    }
}

export default reducer