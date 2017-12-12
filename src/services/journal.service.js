const host = '';

export const journalService = {
    loadJournals
};

function loadJournals(filter) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(filter.journalingFilter),
        headers: {
            'Content-Type': 'application/json'
        },
    };
    return fetch(host + '/createJob?offset=' + filter.offset + '&limit=' + filter.limit, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}