import nodemailer from "nodemailer";
import mailContent from '../view/mailContent';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chuck.norris.jokes.sender@gmail.com',
        pass: 'Awsom3Jok3sS3nd3r!'
    }
});

const sendMail = (emails, jokeText, resultCallback) => {
    let emailsString = emails.join();

    let mailOptions = {
        from: 'chuck.norris.jokes.sender@gmail.com',
        to: emailsString,
        subject: 'Chuck Norris joke',
        html: mailContent(jokeText)
    };

    transporter.sendMail(mailOptions, function(error, info) {
        let result = {
            error: (error),
            message: (error) ? error : 'Emails sent successfully.'
        };

        resultCallback(result);
    });
};

export default sendMail;