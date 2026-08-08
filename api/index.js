const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/batch', async (req, res) => {
    const batchId = req.query.id || '67790151310b930bc030052d';
    const targetUrl = `https://pw4free.in/api/BatchInfo?BatchId=${batchId}&Type=details`;

    try {
        const response = await axios.get(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                'Accept': 'application/json, text/plain, */*',
                'Referer': `https://pw4free.in/study/batches/${batchId}`
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ 
            error: "Failed to fetch data", 
            details: error.message 
        });
    }
});

module.exports = app;

