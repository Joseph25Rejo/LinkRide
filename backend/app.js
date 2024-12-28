const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const carpoolRoutes = require('./routes/carpoolRoutes');
const db = require('./models/db');
const app = express();
const PORT = process.env.PORT || 5501;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/src'))); // Serve static files from frontend
app.use('/api', carpoolRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
})
app.get('/mapping', (req,res) => {
    res.sendFile(path.join(__dirname,'../frontend/public/mapping.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/about.html'));
})

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});