import {authHeader} from '../_helpers';

export const userService = {
    getAll,
    getById
};

function getAll(limit, offset) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/journals?limit=' + limit + "&offset=" + offset, requestOptions).then(handleResponse);
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