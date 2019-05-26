const https = require('https');

const getJokesFromAPI = (callbackForData) => {
    https.get('https://api.icndb.com/jokes?escape=javascript', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            callbackForData(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
};

export default getJokesFromAPI;