const express = require('express');
const volleyball = require('volleyball');
const cors = require('cors');
const monk = require('monk');
const Filter = require('bad-words');
const filter = new Filter();
const app = express();

const db = monk('localhost/firstdb');
const collection = db.get('posts');

app.use(cors());
app.use(volleyball);
app.use(express.json());

app.get('/',(req,res) => {
    res.json({
        message: 'hello bro'
    })
})


app.get('/items', (req,res) => {
    collection
        .find()
        .then(mews => {
            res.json(mews);
        })
})

function isValid(item){
    return item.name && item.name.toString().trim() !== '' && item.content && item.content.toString().trim() !== '';
}

app.post('/submit',(req,res) => {
    if(isValid(req.body)){
        //insert into db

        const item = {
            name: filter.clean(req.body.name.toString()),
            content: filter.clean(req.body.content.toString()),
            created: new Date()
        }
        
        collection
            .insert(item)
            .then(createditem => {
                res.json(createditem);
            })
        
    }else{
        res.status(422);
        res.json({
            message:'Name and Content are required before submitting'
        })
    }
    
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('listening'));

