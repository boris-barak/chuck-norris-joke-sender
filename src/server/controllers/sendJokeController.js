import Cache from "../model/cache";
import sendMail from "../model/sendMail";
import getInvalidEmails from "../../common/validation/getInvalidEmails";

const sendJokeController = (request, response) => {
    let jokes = Cache.getJokes();

    let emails = request.body.emails;
    let jokeText = jokes[request.body.selectedJokeId];

    let invalidEmails = getInvalidEmails(emails);
    if (invalidEmails.length > 0) {
        let result = {
            error: true,
            message: 'Invalid emails: ' + invalidEmails.join()
        };
        response.send(result);
    }

    sendMail(emails, jokeText, (result) => {
        response.send(result);
    });
};

export default sendJokeController;