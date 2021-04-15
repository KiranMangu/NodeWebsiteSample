const User = require('../database/models/user');

module.exports = (req, res) => {

    const { email, password } = req.body;
    console.log('login credentials', req.body);

    User.findOne({ email: email }, (error, currUser) => {
        // console.log(error);
        if (currUser === null) {
            console.log('No user exist');
            res.render('login');
        }
        else if (currUser.password === password) {
            console.log('No user exist');
            res.redirect('/');
        }
    });

};