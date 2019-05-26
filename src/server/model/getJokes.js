import Cache from "./cache";
import simplifyJokesData from "./simplifyJokesData";
import getJokesFromAPI from "./getJokesFromAPI";

const getJokes = (callbackForData) => {
    if (Cache.isJokesSet()) {
        console.log('getting jokes from cache');
        callbackForData(Cache.getJokes());
        return;
    }

    getJokesFromAPI((data) => {
        if (data.type !== 'success' || !data.hasOwnProperty('value')) {
            return null;
        }

        let jokes = simplifyJokesData(data.value);
        Cache.setJokes(jokes);
        console.log('getting jokes from api');
        callbackForData(jokes);
    });
};

export default getJokes;