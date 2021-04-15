const Post = require('../database/models/post')

module.exports = {
    createPostPage: (req, res) => {
        res.render('create');
    },

    createPost: (req, res) => {
        // console.log(req.body);
        Post.create(req.body);
        res.redirect('/index');
    }
};