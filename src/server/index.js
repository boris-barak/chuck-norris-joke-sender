const express = require('express');
const os = require('os');

const app = express();

import getJokesController from "./controllers/getJokesController";
import sendJokeController from "./controllers/sendJokeController";

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(express.static('dist'));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/getJokes', getJokesController);
app.post('/api/sendJoke', sendJokeController);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}!`));