const express = require('express');
const app = express();
const fs= require('fs');
const path = require('path');
const bodyParser = require('body-parser');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
const apiData = JSON.parse(fs.readFileSync('data.json','utf-8'));
app.get('/', (req,res)=>{
    res.render('data', { apiData});
    console.log(apiData);
});
app.listen(3000);
