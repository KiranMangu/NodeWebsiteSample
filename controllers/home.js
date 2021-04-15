const Post = require('../database/models/post')

module.exports = async (req, res) => {

    const posts = await Post.find({}, (err, data) => {
        console.log('Find all', err);
    });

    // console.log('posts:', posts);
    console.log('Home Page');

    // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    res.render('index', {
        posts
    });
}