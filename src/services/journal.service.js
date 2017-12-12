import {authHeader} from "../helpers";

const host = 'http://127.0.0.1:8080';

export const journalService = {
    loadJournals,
    loadNext
};

function loadJournals(filter) {
    console.log(filter.journalsFilter);
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(filter.journalsFilter),
        headers: {
            'Content-Type': 'application/json'
        },
    };
    return fetch(host + '/createJob?offset=' + filter.offset + '&limit=' + filter.limit, requestOptions).then(handleResponse);
}

function loadNext(filter) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(filter.journalsFilter),
        headers: authHeader(),
    };
    return fetch('/journals', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}