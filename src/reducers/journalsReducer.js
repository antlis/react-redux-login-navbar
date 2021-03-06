import {journalConstants} from "../constants/journalContstants";
import moment from "moment";

const defaultFilter = {
    journalingFilter: {
        srcId: "",
        srcType: null,
        from: moment().startOf('day').unix(),
        to: moment().endOf('day').unix(),
        id: null,
        showSuccessfulPings: false,
        includeAllRelatedEvents: false,
    },
    limit: journalConstants.PAGE_SIZE,
    offset: 0
};

const initialState = {
    loading: false,
    hasMore: true,
    rows: [],
    filter: defaultFilter,
    quickFilter: [],
    taskDescriptor: null
};

export function journals(state = initialState, action) {
    switch (action.type) {
        case journalConstants.GETALL_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case journalConstants.CREATE_JOB:
            return Object.assign({}, state, {
                filter: action.filter,
                taskDescriptor: action.taskDescriptor
            });
        case journalConstants.GETALL_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                filter: action.filter,
                rows: action.filter.offset === 0 ? action.journals : state.rows.concat(action.journals)
            });
        case journalConstants.NO_MORE_JOURNALS:
            return Object.assign({}, state, {
                hasMore: false,
                loading: false,
                filter: action.filter,
                rows: state.rows.concat(action.journals)
            });
        case journalConstants.GETALL_FAILURE:
            return Object.assign({}, state, {
                loading: false,
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