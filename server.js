const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
const dataPath = path.join(__dirname, 'data', 'iceCreamData.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Endpoint to get the ice cream data
app.get('/api/icecreams', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint to save the ice cream data
app.post('/api/icecreams', (req, res) => {
    const newData = JSON.stringify(req.body);

    fs.writeFile(dataPath, newData, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to save data' });
        }
        res.status(201).json({ message: 'Data saved successfully' });
    });
});

// Endpoint to delete all ice cream data
app.delete('/api/icecreams', (req, res) => {
    const emptyData = JSON.stringify([]);

    fs.writeFile(dataPath, emptyData, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to clear data' });
        }
        res.status(200).json({ message: 'Data cleared successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
