const mongoose = require('mongoose');
const db = require('./connectDB');

db.connect();

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;