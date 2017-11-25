import {authHeader} from '../helpers';

export const journalService = {
    loadJournals,
    loadNext,
    getById
};

function loadJournals(filter) {
    const requestOptions = {
        method: 'POST',
        body: filter,
        headers: authHeader(),
    };
    return fetch('/journals', requestOptions).then(handleResponse);
}

function loadNext(filter) {
    const requestOptions = {
        method: 'POST',
        body: filter,
        headers: authHeader(),
    };
    return fetch('/journals', requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/journal/' + id, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}