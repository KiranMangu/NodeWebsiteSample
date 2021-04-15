const express = require('express');
const path = require('path');
const { config, engine } = require('express-edge');
const Post = require('./database/models/post');
// const bodyParser = require('body-parser');

const app = new express();

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(engine);
app.set('views', `${__dirname}/views`);
// app.use(bodyParser.json());

const { contact, about } = require('./controllers/other');
const { createPostPage, createPost } = require('./controllers/post');
const homeController = require('./controllers/home');
const registerController = require('./controllers/register');
const createUserController = require('./controllers/createuser');
const loginController = require('./controllers/login');
const authenticateUserController = require('./controllers/userlogin');

// Pages
app.get('/', homeController);
app.get('/index', homeController);
app.get('/about', about);
app.get('/contact', contact);
app.get('/posts/new', createPostPage);
app.get('/login', loginController);
app.get('/register', registerController);

app.post('/posts/send', createPost);
app.post('/user/register', createUserController);
app.post('/user/authenticate', authenticateUserController);

app.get('/post/:id', async (req, res) => {
    // res.sendFile(path(__dirname, 'pages/post.html'));
    console.log(req.params.id);
    const currpost = await Post.findById(req.params.id);
    console.log(currpost.title);
    res.render('post', {
        currpost
    });
});

app.listen(4000, (error) => {
    console.log('Blog site port is up and running at 4000');
});