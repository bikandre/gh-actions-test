const express = require('express');
const cors = require('cors');
const app = express();
const dataRouter = require('./routes/data');

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// API routes
app.use('/api/data', dataRouter);

app.listen(5000, () => {
    console.log('Backend is running on port 5000');
});
