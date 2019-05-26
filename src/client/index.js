import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import callSendJoke from "./api/callGetJokes";


callSendJoke((jokes) => {
    ReactDOM.render(<App jokes={jokes} />, document.getElementById('root'));
}, () => {
    ReactDOM.render(<div>Error: Couldn't load jokes</div>, document.getElementById('root'));
});