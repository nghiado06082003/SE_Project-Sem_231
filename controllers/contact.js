const path = require("path");

module.exports = {
    load: function (req, res) {
        if (!req.session.userID) {
            res.redirect("../signin");
        }
        else {
            res.render(path.join(__dirname, "../views/contact/contact"), {userID: req.session.userID, name: req.session.name, role: req.session.role});
        }

    },

}