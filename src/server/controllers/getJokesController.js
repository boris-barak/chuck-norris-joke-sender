import getJokes from "../model/getJokes";

const getJokesController = (req, res) => {
    getJokes((jokes) => {
        res.send(jokes);
    });
};

export default getJokesController;