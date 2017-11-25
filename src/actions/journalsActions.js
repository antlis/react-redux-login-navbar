import {journalService} from "../services/journal.service";
import {journalConstants} from "../constants/journalContstants";


export const journalActions = {
    loadJournals: loadJournals,
    loadNext: loadNext
    // createFilter: createFilter,
    // updateFilterOffset: updateFilterOffset
};

function loadJournals(filter) {
    return dispatch => {
        //dispatch(request());

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
        return {type: journalConstants.GETALL_SUCCESS, journals, filter}
    }

    function failure(error) {
        return {type: journalConstants.GETALL_FAILURE, error}
    }
}

function loadNext(oldFilter) {
    return dispatch => {
        //dispatch(request());
        let filter = Object.assign({}, oldFilter, {
            offset: oldFilter.offset + 50,
        });
        journalService.loadNext(filter)
            .then(
                journals => dispatch(success(journals, filter)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        return {type: journalConstants.GETALL_REQUEST}
    }

    function success(journals, filter) {
        return {type: journalConstants.LOAD_NEXT_SUCCESS, journals, filter: filter}
    }

    function failure(error) {
        return {type: journalConstants.GETALL_FAILURE, error}
    }
}
