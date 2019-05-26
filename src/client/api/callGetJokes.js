const callSendJoke = (successCallback, errorCallback) => {
    const url = '/api/getJokes';

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(successCallback)
        .catch(errorCallback);
};

export default callSendJoke;