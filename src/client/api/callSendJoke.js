const callSendJoke = (data, successCallback, errorCallback) => {
    const url = '/api/sendJoke';

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json();
        })
        .then( (response) => {
            successCallback(response);
        })
        .catch((error) => {
            errorCallback(error);
        });
};

export default callSendJoke;