const initialState = {
    isOpen: false
};

export function journalsFilter(state = initialState, action) {
    switch (action.type) {
        case 'CLICK_JOURNALS_FILTER':
            return {
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
}