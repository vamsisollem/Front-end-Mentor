const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.render('user');
})
app.post('/expenditure', async function(req, res) {
    const data = req.body;
    const formatData = [
        {
            "day":'mon',
            "amount":data.monday
        },{
            "day":'tue',
            "amount":data.tuesday
        },{
            "day":'wed',
            "amount":data.wednesday
        },
        {
            "day":'thu',
            "amount":data.thursday
        },
        {
            "day":'fri',
            "amount":data.friday
        },
        {
            "day":'sat',
            "amount":data.saturday
        },{
            "day":'sun',
            "amount":data.sunday
        }
    ];
    const expense = JSON.stringify(formatData);
    fs.writeFileSync("data.json", expense);
    const jsonData = JSON.parse(fs.readFileSync('data.json','utf-8'));
    res.render('data', {jsonData});
});

app.listen(3000);