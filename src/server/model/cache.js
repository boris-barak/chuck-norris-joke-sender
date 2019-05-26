export default class Cache {
    static _cachedJokes = null;

    static getJokes() {
        return Cache._cachedJokes;
    }

    static setJokes(jokes) {
        if (Cache._cachedJokes === null) {
            Cache._cachedJokes = jokes;
        }
    }

    static isJokesSet() {
        return Cache._cachedJokes !== null;
    }
}