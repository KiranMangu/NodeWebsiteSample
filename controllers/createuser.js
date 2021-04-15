const User = require('../database/models/user');

module.exports = (req, res) => {

    // console.log(req.body);
    User.create(req.body);
    res.redirect('/');
};