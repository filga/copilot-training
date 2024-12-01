// Create web server
const express = require('express');
const app = express();

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET request to /comments');
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('This is a POST request to /comments');
});

// Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send(`This is a GET request to /comments/${req.params.id}`);
});

// Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.send(`This is a PUT request to /comments/${req.params.id}`);
});

// Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send(`This is a DELETE request to /comments/${req.params.id}`);
});

// Start the server
app.listen(4001, () => {
  console.log('Server is running on PORT 4001');
});