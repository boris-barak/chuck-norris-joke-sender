const mailContent = (jokeText) => {
    return `
            <h1>Joke from Chuck Norris Joke Sender</h1>
            <p>${jokeText}</p>
            <hr />
            <small>This email has been generated automatically. Don't respond to it!</small>`;
};

export default mailContent;