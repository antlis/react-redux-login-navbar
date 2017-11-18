import {journalService} from "../_services/journal.service";
import {journalConstants} from "../_constants/journalContstants";


export const journalActions = {
    getAll
};

function getAll(offset, limit) {
    return dispatch => {
        //dispatch(request());

        journalService.getAll(offset, limit)
            .then(
                journals => dispatch(success(journals)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        return {type: journalConstants.GETALL_REQUEST}
    }

    function success(journals) {
        return {type: journalConstants.GETALL_SUCCESS, journals}
    }

    function failure(error) {
        return {type: journalConstants.GETALL_FAILURE, error}
    }
}