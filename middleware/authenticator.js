function authenticate(req, res, next) {
    console.log("Mauthenticator user..");
    next();
};

module.exports = authenticate;