const path = require("path");
const SignUp = require("../model/signup");

module.exports = {
    load: function (req, res) {
        res.render(path.join(__dirname, "../views/signup/signup"), {error: null});
    },
    signup: function (req, res) {
        if (SignUp.checkEmpty(req.body.name, req.body.email, req.body.password)) {
            res.render(path.join(__dirname, "../views/signup/signup"), {error: "Please fill in all fields"});
        }
        else if (SignUp.checkExistEmail(req.body.email)) {
            res.render(path.join(__dirname, "../views/signup/signup"), {error: "Email existed! Please choose other email"});
        }
        else if (!SignUp.checkValidEmail(req.body.email)) {
            res.render(path.join(__dirname, "../views/signup/signup"), {error: "Email is not valid! Please recheck"});
        }
        else {
            SignUp.addUser(req.body.name, req.body.email, req.body.password);
            const user = SignUp.getData(req.body.email);
            req.session.userID = user.userID;
            req.session.name = user.name;
            req.session.role = user.role;
            res.redirect('../homepage');
        }
    }
}