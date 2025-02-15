// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Read comments.json
const comments = require('./comments.json');

// Set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set public directory
app.use(express.static('public'));

// Set view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// Get all comments
app.get('/comments', (req, res) => {
  res.render('comments', {comments: comments});
});

// Get form
app.get('/comments/new', (req, res) => {
  res.render('new');
});

// Post new comment
app.post('/comments/new', (req, res) => {
  const newComment = {
    id: comments.length + 1,