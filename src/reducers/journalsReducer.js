import {journalConstants} from "../constants/journalContstants";
import moment from "moment";


const defaultFilter = {
    startDate: moment().startOf('day').unix(),
    stopDate: moment().endOf('day').unix(),
    limit: 50,
    offset: 0
};

const initialState = {
    loading: false,
    hasMore: true,
    rows: [],
    filter: defaultFilter,
    quickFilter: []
};

export function journals(state = initialState, action) {
    switch (action.type) {
        case journalConstants.GETALL_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case journalConstants.GETALL_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                filter: action.filter,
                rows: action.journals
            });
        case journalConstants.NO_MORE_JOURNALS:
            return Object.assign({}, state, {
                hasMore: false,
                loading: false,
                filter: action.filter
            });
        case journalConstants.LOAD_NEXT_SUCCESS:
            return Object.assign({}, state, {
                filter: action.filter,
                rows: state.rows.concat(action.journals)
            });
        case journalConstants.GETALL_FAILURE:
            return Object.assign({}, state, {
                error: action.error
            });
        case journalConstants.QUICK_FILTER_CHANGE:
            return Object.assign({}, state, {
                hasMore: action.quickFilter.length === 0,
                quickFilter: action.quickFilter
            });
        default:
            return state
    }
}