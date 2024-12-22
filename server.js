const express = require('express');
const app = express();
const hospitalRoutes = require('./hospitalRoutes');

app.use(express.json()); // Middleware to parse JSON bodies

// Use the hospital routes
app.use('/hospitals', hospitalRoutes);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


