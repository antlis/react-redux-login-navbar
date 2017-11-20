import {journalConstants} from "../constants/journalContstants";

const initialState = {
    items: []
};

export function journals(state = initialState, action) {
    action.type === journalConstants.GETALL_SUCCESS && state.items && alert(state.items.length);
    switch (action.type) {
        case journalConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case journalConstants.GETALL_SUCCESS:
            return {
                items: state.items.concat(action.journals)
            };
        case journalConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}