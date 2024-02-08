const express = require('express');
const bodyParser = require('body-parser');
const { Client, Databases, Query, ID } = require('appwrite');

const app = express();
const port = 3000;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c460b5b8bb84c1cf93');

const databases = new Databases(client);

app.use(bodyParser.json());

// Endpoint to handle submitting reviews
app.post('/api/submit-review', async (req, res) => {
    try {
        const { name, review, rating } = req.body;

        // Create a new review document
        const promise = databases.createDocument(
            '65c460b5b8bb84c1cf93', // Database ID
            '65c460cf4124c542b3df', // Collection ID
            ID.unique(),
            { name, review, rating }
        );

        const response = await promise;
        console.log(response);
        res.status(200).send({ message: 'Review submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to submit review' });
    }
});

// Endpoint to fetch all reviews
app.get('/api/reviews', async (req, res) => {
    try {
        const listPromise = databases.listDocuments(
            '65c460b5b8bb84c1cf93', // Database ID
            '65c460cf4124c542b3df' // Collection ID
        );

        const response = await listPromise;
        res.status(200).send(response.documents);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch reviews' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
