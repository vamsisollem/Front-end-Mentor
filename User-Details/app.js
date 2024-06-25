const express = require('express');
const app = express();
const uri = 'mongodb://localhost:27017';
const {MongoClient} = require('mongodb');
const client = new MongoClient(uri);

async function dbconnect(){
    try{
        await client.connect();
        await listDatabases(client);
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
    console.log('working');
})
app.listen(3000);