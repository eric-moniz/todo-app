const INITAL_STATE = {
    description: '',
    list: [],
};

export default function todoReducer(state = INITAL_STATE, action) {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload };
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload };
        case 'TODO_CLEAR':
            return { ...state, description: '' };

        default:
            return state;
    }
}
