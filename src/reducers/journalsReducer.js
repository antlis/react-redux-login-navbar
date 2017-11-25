import {journalConstants} from "../constants/journalContstants";
import moment from "moment";


const defaultFilter = {
    startDate: moment().startOf('day').unix(),
    stopDate: moment().endOf('day').unix(),
    limit: 50,
    offset: 0
};

const initialState = {
    items: [],
    filter: defaultFilter
};

export function journals(state = initialState, action) {
    if (action.type === journalConstants.LOAD_NEXT_SUCCESS) {
        alert(JSON.stringify(action.filter));
    }
    switch (action.type) {
        case journalConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case journalConstants.GETALL_SUCCESS:
            return {
                filter: action.filter,
                items: action.journals
                //items: state.items.concat(action.journals)
            };
        case journalConstants.LOAD_NEXT_SUCCESS:
            return {
                filter: action.filter,
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