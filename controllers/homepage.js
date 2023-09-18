const path = require("path");

module.exports = {
    load: function (req, res) {
        res.render(path.join(__dirname, "../views/homepage/index"), { userID: req.session.userID, name: req.session.name, role: req.session.role });
    },

}