function sendmail(req, res, next) {
    console.log("Sending email to user..");
    next();
};

module.exports = sendmail;