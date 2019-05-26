const getEmailParts = (email) => {
    const atSignPosition = email.lastIndexOf("@");

    return {
        name: email.substring(0, atSignPosition),
        domain: email.substring(atSignPosition + 1)
    };
};

const compareStrings = (a, b) => {
    if (a === b) {
        return 0;
    }

    return (a > b) ? 1: -1;
};

/**
 * Function for sorting of array of emails.
 * Sorts first by domain, second by name.
 * @param a
 * @param b
 */
const sortByDomainAndName = (emailA, emailB) => {
    let partsOfA = getEmailParts(emailA);
    let partsOfB = getEmailParts(emailB);


    let domainComparisonResult = compareStrings(partsOfA.domain, partsOfB.domain);

    if (domainComparisonResult != 0) {
        return domainComparisonResult;
    }

    return compareStrings(partsOfA.name, partsOfB.name);
};

export default sortByDomainAndName;