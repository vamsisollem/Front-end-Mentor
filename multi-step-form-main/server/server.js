const express = require('express');
const app = express();
const { MongoClient, ObjectId} = require('mongodb');
const methodOverride = require('method-override');
const cors = require('cors');
app.use(express.json());
// Middleware setup
app.use(cors());
app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// MongoDB connection
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Route for submitting form data
app.post('/api/submitFormData', async (req, res) => {
    
    const { Name, Email, Phone, Plan, AddOns } = req.body;
    try {
        await connectToMongoDB();
        await dataInsertion({ Name, Email, Phone, Plan, AddOns });
        res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        await client.close();
    }
});

async function dataInsertion({ Name, Email, Phone, Plan, AddOns }) {
    const database = client.db('multiForm');
    const collection = database.collection('players');
    await collection.insertOne({ Name, Email, Phone, Plan, AddOns });
}

app.listen(3000);
