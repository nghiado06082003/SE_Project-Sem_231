const path = require("path");

module.exports = {
    loadClub: function (req, res) {
        res.render(path.join(__dirname, "../views/about/system"), { userID: req.session.userID, name: req.session.name, role: req.session.role });
    },
    loadTeam: function (req, res) {
        res.render(path.join(__dirname, "../views/about/team"), { userID: req.session.userID, name: req.session.name, role: req.session.role });
    },
}