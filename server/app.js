const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const search = require('./search.json')
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.json({message: "hello"})
})

app.post('/', (req,res) => {
    let choice = req.body.searchterm;
    console.log(choice);
    console.log(typeof(choice))
    // res.json({message: "working"})
    if (choice === "hello"){
        console.log(2342342)
    }
    switch(choice){
        case"cat":
            res.json(search.cat)
            break;
        case"dog":
            res.json(search.dog)
            break;
        case"coffee":
            res.json(search.coffee)
            break;
        case'hello':
            res.json(search.hello)
            break;
        case"chicken":
            res.json(search.chicken)
            break;

        default:
            break;
    }
        
    
})

console.log(search.hello[7].title)
console.log(search.hello)

// async function decode(req) {
//     let decoded = await (req => req.json())
//     console.log(req);
// }
module.exports = app;

