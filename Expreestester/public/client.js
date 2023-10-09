// Define a route to handle data requests
app.get('/api/data', (req, res) => {
  // Replace this with your data retrieval logic
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

// Define a route for the second data message
app.get('/api/second-data', (req, res) => {
  // Replace this with your second data retrieval logic
  const secondData = { secondMessage: 'This is the second message!' };
  res.json(secondData);
});
