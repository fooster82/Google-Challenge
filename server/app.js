const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

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
    res.json({message: "working"})
    if (choice === "hello"){
        console.log(2342342)
    }
    switch(choice){
        case"cat":
            break;
        case"dog":
            break;
        case"coffee":
            break;
        case'hello':
            console.log(4)
            break;
        case"chicken":
            break;

        default:
            break;
    }
        
    
})


// async function decode(req) {
//     let decoded = await (req => req.json())
//     console.log(req);
// }
module.exports = app;

