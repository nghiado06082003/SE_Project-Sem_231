const path = require("path");
const SignIn = require("../model/signin");

module.exports = {
    load: function (req, res) {
        if (req.session.userID) {
            res.redirect('/homepage');
        }
        else {
            res.render(path.join(__dirname, "../views/signin/signin"), {error: null});
        }
    },
    signin: function(req, res) {
        if (SignIn.checkEmpty(req.body.email, req.body.password)) {
            res.render(path.join(__dirname, "../views/signin/signin"), {error: "Please input email or password"});
        }
        else if (SignIn.checkInvalid(req.body.email, req.body.password)) {
            res.render(path.join(__dirname, "../views/signin/signin"), {error: "Your input account is not exist! Please recheck!"});
        }
        else {
            const user = SignIn.getData(req.body.email);
            req.session.userID = user.userID;
            req.session.name = user.name;
            req.session.role = user.role;
            res.redirect('../homepage');
        }
    }
}