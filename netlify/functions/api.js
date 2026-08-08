const axios = require('axios');

exports.handler = async function (event, context) {
    const batchId = event.queryStringParameters.id || '67790151310b930bc030052d';
    const targetUrl = `https://pw4free.in/api/BatchInfo?BatchId=${batchId}&Type=details`;

    try {
        const response = await axios.get(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                'Accept': 'application/json, text/plain, */*',
                'Referer': `https://pw4free.in/study/batches/${batchId}`
            }
        });

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: "Failed to fetch data", details: error.message })
        };
    }
};
