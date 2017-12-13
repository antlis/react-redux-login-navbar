const host = '';

export const journalService = {
    createJob,
    loadJournals
};

function createJob(filter) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(filter.journalingFilter),
        headers: {
            'Content-Type': 'application/json'
        },
    };
    return fetch(host + '/createJob', requestOptions).then(handleResponse);
}

function loadJournals(filter, taskDescriptor) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(taskDescriptor),
        headers: {
            'Content-Type': 'application/json'
        },
    };
    return fetch(host + '/getJobResult?offset=' + filter.offset + '&limit=' + filter.limit, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}