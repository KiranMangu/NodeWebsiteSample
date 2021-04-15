const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://kiranmohanm:Mongodb@cluster0.losyo.mongodb.net/blog?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);


const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String
});

const Post = mongoose.model('Post', PostSchema);

// Post.create({
//     title: 'Test2',
//     description: 'Some description.....',
//     author: ' Author Name'
// }, (error, post) => {
//     console.log(error, post);
// })
// Post.find({}, (error, ret) => {
//     console.log(error, ret);
// });

// Post.findById('606c48ec7b245d625cee0df7', (err, ret) => {
//     console.log(err, ret);
// });

// Post.findByIdAndUpdate('606c48ec7b245d625cee0df7', {
//     title: 'Test updated'
// }, (err, ret) => {
//     console.log(err, ret);
// });