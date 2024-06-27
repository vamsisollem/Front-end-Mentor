const express = require('express');
const app = express();
const path = require('path');
const { MongoClient,ObjectId } = require('mongodb');

const methodOverride = require('method-override');


app.use(methodOverride('_method'));


const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

async function connectToMongoDB() {
    try {
        await client.connect();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

app.get('/', (req, res) => {
    res.render('user');
});

app.post('/submit', async (req, res) => {
    const { username, email, age } = req.body;
    try {
        await connectToMongoDB();
        await dataInsertion({ username, email, age });
        const details = await dataDisplay();
        res.render('display', { details });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        await client.close();
    }
});

app.get('/display', async (req, res) => {
    try {
        await connectToMongoDB();
        const details = await dataDisplay();
        res.render('display', { details });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        await client.close();
    }
});

async function dataInsertion({ username, email, age }) {
    const database = client.db('User_Details');
    const collection = database.collection('Users');
    await collection.insertOne({ username, email, age });
}

async function dataDisplay() {
    const database = client.db('User_Details');
    const collection = database.collection('Users');
    const results = await collection.find({}).toArray();
    return results;
}

app.delete('/users/:id', async (req, res) => {
    try {
        await client.connect();

        const database = client.db('User_Details');
        const collection = database.collection('Users');

        const userId = req.params.id; 

        const result = await collection.deleteOne({ _id: new ObjectId(userId) });

        if (result.deletedCount === 1) {
            res.redirect('/display'); 
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        await client.close();
    }
});

app.listen(3000);
