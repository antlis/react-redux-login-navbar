import {journalService} from "../services/journal.service";
import {journalConstants} from "../constants/journalContstants";


export const journalsActions = {
    loadJournals: loadJournals,
    quickFilterChange: quickFilterChange,
    noMore: noMore
};

function loadJournals(filter) {
    return dispatch => {
        dispatch(request());
        journalService.loadJournals(filter)
            .then(
                journals => dispatch(success(journals, filter)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        return {type: journalConstants.GETALL_REQUEST}
    }

    function success(journals) {
        if (journals.length < journalConstants.PAGE_SIZE) {
            return noMore(journals, filter);
        } else {
            return {type: journalConstants.GETALL_SUCCESS, journals, filter}
        }
    }

    function failure(error) {
        return {type: journalConstants.GETALL_FAILURE, error}
    }

}

function quickFilterChange(quickFilter) {
    return {type: journalConstants.QUICK_FILTER_CHANGE, quickFilter: quickFilter}
}

function noMore(journals, filter) {
    return {type: journalConstants.NO_MORE_JOURNALS, journals, filter};
}