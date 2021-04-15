// import express from "express";
// import path from "path";

// const {config, engine} = require('express-edge');

// // const express = require('express');
// // const path = require('path');

// // const expressEdge = require('express-edge');

// const app = express();

// app.use(express.static('static'));

// app.use(engine);
// app.set('views', `${__dirname}/views`);

// // Pages
// app.get('/', (req: any, res: { render: (arg0: string) => void; }) => {
//     // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
//     res.render('index')
// });

// app.get('/index', (req: any, res: { sendFile: (arg0: string) => void; }) => {
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'));
// });

// app.get('/about', (req: any, res: { sendFile: (arg0: string) => void; }) => {
//     res.sendFile(path.resolve(__dirname, 'pages/about.html'));
// });

// app.get('/contact', (req: any, res: { sendFile: (arg0: string) => void; }) => {
//     res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
// });

// app.listen(4000, () => {
//     // tslint:disable-next-line:no-console
//     console.log('Blog site port is up and running at 4000');
// });