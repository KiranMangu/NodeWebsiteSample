"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_edge_1 = __importDefault(require("express-edge"));
// const express = require('express');
// const path = require('path');
// const expressEdge = require('express-edge');
const app = express_1.default();
app.use(express_1.default.static('static'));
app.use(express_edge_1.default);
app.set('views', `${__dirname}/views`);
// Pages
app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    res.render('index');
});
app.get('/index', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'pages/index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'pages/about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, 'pages/contact.html'));
});
app.listen(4000, () => {
    // tslint:disable-next-line:no-console
    console.log('Blog site port is up and running at 4000');
});
//# sourceMappingURL=index.js.map