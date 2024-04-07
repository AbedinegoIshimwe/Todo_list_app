const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../public')));

// Middleware to parse JSON bodies
app.use(express.json());

// Your tasks array (assuming it's empty initially)
let tasks = [];

// Serve the React app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Get all tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post('/api/tasks', (req, res) => {
    const { text, priority, date } = req.body;
    tasks.push({ text, priority, date });
    res.json(tasks);
});

// Delete a task
app.delete('/api/tasks/:index', (req, res) => {
    const { index } = req.params;
    tasks.splice(index, 1);
    res.json(tasks);
});

// Catch-all handler for unknown routes
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
