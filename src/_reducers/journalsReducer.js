import {journalConstants} from "../_constants/journalContstants";

export function journals(state = {}, action) {
    switch (action.type) {
        case journalConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case journalConstants.GETALL_SUCCESS:
            return {
                items: action.journals
            };
        case journalConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}