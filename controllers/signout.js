module.exports = {
    signout: function(req, res) {
        req.session.destroy();
        res.redirect('/homepage');
    }
}