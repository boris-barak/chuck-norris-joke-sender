const simplifyJokesData = (jokesDataRaw) => {
    let transformedJokes = [];

    jokesDataRaw.forEach((item) => {
        transformedJokes.push(item.joke);
    });

    return transformedJokes;
};

export default simplifyJokesData;