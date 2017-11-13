import {journalConstants} from "../_constants/journalContstants";

const initialState = {
    items: []
};

export function journals(state = initialState, action) {
    switch (action.type) {
        case journalConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case journalConstants.GETALL_SUCCESS:
            return {
                items: initialState.concat(action.journals)
            };
        case journalConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}