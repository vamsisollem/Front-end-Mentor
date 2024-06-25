const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
const uri = 'mongodb://localhost:27017';
const {MongoClient} = require('mongodb');
const client = new MongoClient(uri);
app.set('view engine', 'ejs');
async function dbconnect(){
    try{
        await client.connect();
        // await listDatabases(client);
       }
    catch (e){
         console.log(e);
        }
    finally{
        await client.close();
    }
}

async function listDatabases(client){
    const databases = await client.db().admin().listDatabases();

        databases.databases.forEach(db => {
            console.log(db);
        });
}
dbconnect();
app.get('/', (req,res)=>{
    res.render('user');
})
app.listen(3000);