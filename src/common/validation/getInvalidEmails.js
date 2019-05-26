import isEmailValid from "./isEmailValid";

const getInvalidEmails = (emails) => {
    if (!Array.isArray(emails)) {
        return null;
    }

    let invalidEmails = [];
    emails.forEach((email) => {
        if (!isEmailValid(email)) {
            invalidEmails.push(email);
        }
    });

    return invalidEmails;
};

export default getInvalidEmails;